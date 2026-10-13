/*
  Walk-in frame scrubber for the 3 Kingdoms concepts.
  Source: our phone footage, 13 Oct 2026, stabilised and graded with ffmpeg
  (research/clips/edited). One continuous take per set, no cuts:
  - landscape: 20261013_120702 (shopfront -> room -> counter), 12fps, 272 frames
  - portrait:  20261013_115928 (entrance -> room -> menu board), 12fps, 120 frames

  Rules followed (scroll-scrubbed-visual-sequence skill):
  - native scroll position is the only source of truth; progress is normalised 0..1
  - chapter holds: the walk pauses at fixed scroll windows so captions can be read.
    The pages place their captions on the same windows (window.WALK_CHAPTERS).
  - neighbouring frames are cross-blended, so 12fps footage scrubs smoothly
  - frame 0 and the last frame load first, then a coarse-to-fine pass
  - DPR capped at 2, redraw only when the shown position changes
  - reduced motion renders one chosen frame and nothing else
*/
(function () {
  "use strict";

  // Scroll-space chapters shared by both pages: centre and hold length.
  var CHAPTERS = [0.25, 0.55, 0.85];
  var HOLD = 0.08;
  var END = 0.93; // footage reaches its last frame here, then holds for the title

  var SETS = {
    // video position (0..1) shown during each chapter hold
    landscape: { dir: "media/walk-d/", count: 272, stops: [0.24, 0.55, 0.93] },
    portrait: { dir: "media/walk-m/", count: 120, stops: [0.12, 0.5, 0.94] }
  };

  window.WALK_CHAPTERS = CHAPTERS.map(function (c) { return [c - HOLD / 2, c + HOLD / 2]; });
  window.WALK_END = END;

  function pickSet() {
    return window.innerWidth / window.innerHeight < 0.85 ? SETS.portrait : SETS.landscape;
  }

  function pad(n) {
    return String(n).padStart(3, "0");
  }

  /** piecewise-linear map from scroll progress to video progress, flat inside each hold */
  function toVideo(set, s) {
    var knots = [[0, 0]];
    CHAPTERS.forEach(function (c, i) {
      knots.push([c - HOLD / 2, set.stops[i]], [c + HOLD / 2, set.stops[i]]);
    });
    knots.push([END, 1], [1, 1]);
    for (var k = 1; k < knots.length; k++) {
      if (s <= knots[k][0]) {
        var a = knots[k - 1], b = knots[k];
        var t = b[0] === a[0] ? 1 : (s - a[0]) / (b[0] - a[0]);
        return a[1] + (b[1] - a[1]) * t;
      }
    }
    return 1;
  }

  /**
   * @param {HTMLCanvasElement} canvas
   * @param {{focus?: [number, number], smoothing?: number, onReady?: () => void}} [opts]
   */
  function createWalk(canvas, opts) {
    opts = opts || {};
    var ctx = canvas.getContext("2d", { alpha: false });
    var focus = opts.focus || [0.5, 0.5];
    var smoothing = opts.smoothing == null ? 0.12 : opts.smoothing;
    var set = null;
    var imgs = [];
    var loaded = [];
    var drawnKey = "";
    var target = 0;
    var shown = 0;
    var raf = 0;
    var generation = 0;
    var readyFired = false;

    function nearest(i) {
      if (loaded[i]) return i;
      for (var d = 1; d < set.count; d++) {
        if (i - d >= 0 && loaded[i - d]) return i - d;
        if (i + d < set.count && loaded[i + d]) return i + d;
      }
      return -1;
    }

    function paint(im, alpha) {
      var cw = canvas.width, ch = canvas.height;
      var s = Math.max(cw / im.naturalWidth, ch / im.naturalHeight);
      var w = im.naturalWidth * s, h = im.naturalHeight * s;
      ctx.globalAlpha = alpha;
      ctx.drawImage(im, (cw - w) * focus[0], (ch - h) * focus[1], w, h);
      ctx.globalAlpha = 1;
    }

    function draw(force) {
      var pos = toVideo(set, shown) * (set.count - 1);
      var i0 = Math.floor(pos);
      var frac = pos - i0;
      var a = nearest(i0);
      if (a < 0) return;
      var b = frac > 0.02 && i0 + 1 < set.count && loaded[i0 + 1] && a === i0 ? i0 + 1 : -1;
      var key = a + ":" + (b < 0 ? 0 : Math.round(frac * 20));
      if (key === drawnKey && !force) return;
      drawnKey = key;
      paint(imgs[a], 1);
      if (b >= 0) paint(imgs[b], frac);
    }

    function tick() {
      raf = 0;
      var delta = target - shown;
      shown = Math.abs(delta) < 0.0004 || smoothing >= 1 ? target : shown + delta * smoothing;
      draw(false);
      if (shown !== target) raf = requestAnimationFrame(tick);
    }

    function load() {
      var gen = ++generation;
      set = pickSet();
      imgs = new Array(set.count);
      loaded = new Array(set.count).fill(false);
      drawnKey = "";
      var order = [];
      var seen = {};
      function push(i) {
        if (!seen[i]) { seen[i] = true; order.push(i); }
      }
      push(Math.round(toVideo(set, target) * (set.count - 1)));
      push(0);
      push(set.count - 1);
      for (var step = 32; step >= 1; step = step >> 1) {
        for (var i = 0; i < set.count; i += step) push(i);
      }
      var k = 0;
      var inflight = 0;
      var MAX = 6;
      function next() {
        if (gen !== generation) return;
        while (inflight < MAX && k < order.length) {
          (function (i) {
            inflight++;
            var im = new Image();
            im.decoding = "async";
            im.onload = function () {
              if (gen !== generation) return;
              loaded[i] = true;
              inflight--;
              if (!readyFired) { readyFired = true; if (opts.onReady) opts.onReady(); }
              draw(true);
              next();
            };
            im.onerror = function () { inflight--; next(); };
            im.src = set.dir + pad(i) + ".webp";
            imgs[i] = im;
          })(order[k++]);
        }
      }
      next();
    }

    function resize() {
      var dpr = Math.min(window.devicePixelRatio || 1, 2);
      var r = canvas.getBoundingClientRect();
      var w = Math.max(1, Math.round(r.width * dpr));
      var h = Math.max(1, Math.round(r.height * dpr));
      if (canvas.width !== w || canvas.height !== h) {
        canvas.width = w;
        canvas.height = h;
      }
      if (pickSet() !== set) load();
      draw(true);
    }

    load();
    resize();
    var ro = new ResizeObserver(resize);
    ro.observe(canvas);

    return {
      /** @param {number} p normalised scroll progress 0..1 */
      setProgress: function (p) {
        target = Math.min(1, Math.max(0, p));
        if (!raf) raf = requestAnimationFrame(tick);
      },
      /** jump without smoothing, used for reduced motion */
      jump: function (p) {
        target = shown = Math.min(1, Math.max(0, p));
        draw(true);
      },
      destroy: function () {
        generation++;
        ro.disconnect();
        if (raf) cancelAnimationFrame(raf);
      }
    };
  }

  window.createWalk = createWalk;

  /* Optional smooth scrolling (Lenis 1.1.0, loaded by the page) wired to ScrollTrigger. */
  window.startSmoothScroll = function () {
    if (!window.Lenis || !window.gsap || !window.ScrollTrigger) return null;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return null;
    var lenis = new window.Lenis({ lerp: 0.08, smoothWheel: true });
    lenis.on("scroll", window.ScrollTrigger.update);
    window.gsap.ticker.add(function (t) { lenis.raf(t * 1000); });
    window.gsap.ticker.lagSmoothing(0);
    document.querySelectorAll('a[href^="#"]').forEach(function (a) {
      a.addEventListener("click", function (e) {
        var id = a.getAttribute("href");
        if (id.length < 2) return;
        var el = document.querySelector(id);
        if (!el) return;
        e.preventDefault();
        lenis.scrollTo(el, { offset: 0 });
      });
    });
    return lenis;
  };
})();
