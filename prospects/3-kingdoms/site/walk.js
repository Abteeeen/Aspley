/*
  Walk-in frame scrubber for the 3 Kingdoms concepts.
  Source: our phone footage, 13 Oct 2026 (research/clips/source), re-rendered with
  anime characters on Higgsfield Seedance 2.0 (video/higgsfield/anime/RESULTS.md).
  Landscape set: renders A + B + C, 135 frames at 864x496.
  Portrait set: renders P1 + P2, 87 frames at 496x864.

  Rules followed (scroll-scrubbed-visual-sequence skill):
  - native scroll position is the only source of truth; progress is normalised 0..1
  - frame 0 and the last frame load first, then a coarse-to-fine pass so any
    scroll position has a nearby frame early
  - DPR capped at 2, one draw per animation frame, redraw only when the frame changes
  - reduced motion renders one chosen frame and nothing else
*/
(function () {
  "use strict";

  var SETS = {
    landscape: { dir: "media/walk-d/", count: 135 },
    portrait: { dir: "media/walk-m/", count: 87 }
  };

  function pickSet() {
    return window.innerWidth / window.innerHeight < 0.85 ? SETS.portrait : SETS.landscape;
  }

  function pad(n) {
    return String(n).padStart(3, "0");
  }

  /**
   * @param {HTMLCanvasElement} canvas
   * @param {{focus?: [number, number], smoothing?: number, onReady?: () => void}} [opts]
   */
  function createWalk(canvas, opts) {
    opts = opts || {};
    var ctx = canvas.getContext("2d", { alpha: false });
    var focus = opts.focus || [0.5, 0.5];
    var smoothing = opts.smoothing == null ? 0.18 : opts.smoothing;
    var set = null;
    var imgs = [];
    var loaded = [];
    var drawn = -1;
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

    function draw(force) {
      var idx = Math.round(shown * (set.count - 1));
      var i = nearest(idx);
      if (i < 0 || (i === drawn && !force)) return;
      drawn = i;
      var im = imgs[i];
      var cw = canvas.width;
      var ch = canvas.height;
      var s = Math.max(cw / im.naturalWidth, ch / im.naturalHeight);
      var w = im.naturalWidth * s;
      var h = im.naturalHeight * s;
      ctx.drawImage(im, (cw - w) * focus[0], (ch - h) * focus[1], w, h);
    }

    function tick() {
      raf = 0;
      var delta = target - shown;
      shown = Math.abs(delta) < 0.0008 || smoothing >= 1 ? target : shown + delta * smoothing;
      draw(false);
      if (shown !== target) raf = requestAnimationFrame(tick);
    }

    function load() {
      var gen = ++generation;
      set = pickSet();
      imgs = new Array(set.count);
      loaded = new Array(set.count).fill(false);
      drawn = -1;
      var order = [];
      var seen = {};
      function push(i) {
        if (!seen[i]) { seen[i] = true; order.push(i); }
      }
      push(Math.round(target * (set.count - 1)));
      push(0);
      push(set.count - 1);
      for (var step = 16; step >= 1; step = step >> 1) {
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
              if (nearest(Math.round(shown * (set.count - 1))) === i) draw(true);
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
      /** @param {number} p normalised 0..1 */
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
})();
