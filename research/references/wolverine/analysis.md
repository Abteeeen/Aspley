# Reference study: wolverineworldwide.com

Captured 12 October 2026, Chromium headless at 1440x900 and 390x844. Everything below comes from the live DOM, computed styles and the site's own CSS and JS bundles (`main-*.css`, `HeroHome-*.js`, `Particles-*.js`, `StandoutImageGalaxy-*.js`, `Scroll-*.js`, `main-*.js`). Values read from code are quoted exactly. Screenshots are in `screenshots/`.

**Rule.** We borrow structure, rhythm, the type system and the motion vocabulary. We do not copy the Wolverine logo, the bold/light split wordmark, the "Make. Every Day. Better." line, any copy, photos or icons. The Aspley build uses only `mocks/img/` photos and facts from `research/references/BRIEF.md`.

## The look in one paragraph

This is a corporate site that behaves like a fashion lookbook. It is monochrome: near-black `#010101`, white and a few greys, with no accent colour. One grotesk family carries everything in only two weights. Display type is huge: 700 weight, -5% tracking, 0.79 line height, so lines almost touch. A small uppercase mono face handles labels and metadata. Full-bleed photos and video sit in rounded containers (12 to 20px radius) inset a few px from the viewport. Glass panels (black at 10% to 80%, blur 10 to 18px) float over the imagery. There is a lot of white space, with fluid section gaps of roughly 90 to 150px. Motion is quiet and feels expensive: Lenis smooth scroll, masked line reveals on `expo.out`, a header that morphs into a centred pill via GSAP Flip, scroll-linked image scaling, and one showpiece: a 3D "galaxy" of drifting image particles behind a staggered display headline.

## Header
Screenshots: `header-top-desktop.jpg`, `header-morph-mid-desktop.jpg`, `header-pill-scrolled-desktop.jpg`, `header-returns-on-scroll-up-desktop.jpg`, `header-dropdown-open-desktop.jpg`, `home-mobile-first-screen.jpg`, `mobile-galaxy.jpg` (scrolled mobile header).

**Base:**
- `position: fixed; top: 0`, full width. `pointer-events: none` on the wrapper, `all` on the inner bar.
- Horizontal padding is the grid margin: 48px desktop, 12px mobile.
- At 1000px and up: `padding-block: var(--spacing-fluid-md)` (24 to 32px), and the inner bar sits `translateY(var(--spacing-fluid-sm))` (16 to 24px) lower when at the top.

**At the top (scrollY ≤ 40px):**
- Transparent with white text over the hero.
- Wide wordmark on the left (252x16px). Nav on the right: About, Brands, Careers, Responsibility ▾, Investors.
- Nav links: 15px, weight 400 (the font's Medium cut), tracking -0.02em, gap 16 to 24px.

**Scrolled (scrollY > 40px adds `html.has-scrolled`):**
- The bar collapses into a centred pill: `max-width` 8 of 12 columns, `width: auto`, centred.
- The wide wordmark fades out and a 20 to 24px icon logo appears.
- Pill background `.c-header_bg`: `rgba(0,0,0,.8)` + `backdrop-filter: blur(10px)`, radius 12px, about 482x38px at 1440.
- **Morph is GSAP Flip:** `Flip.getState([logo, nav, navBg, ...dropdowns])`, toggle the class, then `Flip.from(state, { simple: true, duration: 0.4, ease: "power2.out" })`.

**Hide on scroll:**
- `html.has-passed-fold.is-scrolling-down .c-header { transform: translateY(-100%) }`. "Passed fold" means scrollY > 100vh. Measured `matrix(1,0,0,1,0,-82)`.
- The header returns on any upward scroll. Transition: `transform .4s var(--ease)`.
- It is never hidden while a dropdown is open or anything inside has `:focus-visible`. Keep that.

**Mega dropdown (Responsibility):**
- A click opens a focus-trapped 4-column panel, 300px tall (200px when scrolled or below 1400px), joined to the header background, which grows around it.
- Column 1: title, one-line description, "View →" button. Columns 2 to 4: image tiles (radius 10px) with a bottom black gradient and a heading-xs label.
- Reveal: `@starting-style { clip-path: inset(0 20% 100% 20% round 12px) }` → `inset(0 round 10px)`, 0.4s.
- The page dims behind it: fixed `::before` overlay at `rgba(0,0,0,.2)` + `blur(2px)`.

**Mobile header (below 1000px):**
- One dark rounded bar (`rgba(0,0,0,.8)` + blur, radius 12px): wordmark on the left, "Menu +" on the right.
- On scroll, the background clip-path shrinks to a square around the logo icon, and "Menu +" becomes its own dark pill.

## Hero (home)
Screenshots: `home-desktop-first-screen.jpg`, `intro-01-t150ms-desktop.jpg`, `intro-02-t450ms-desktop.jpg`, `intro-03-t800ms-settled-desktop.jpg`, `home-mobile-first-screen.jpg`.

**Container:**
- `100svh` tall. On desktop it is inset 8px top and sides (`md:px-2 md:pt-2`) with media radius 20px. On mobile it is full-bleed with no radius.
- Background is a muted autoplay video (Vimeo 720p mp4 plus poster) that plays only while in view.
- Content is bottom-aligned: `md:flex-row md:items-end`, padding 40px sides and 48px bottom.

**H1 (bottom left):**
- Three lines: "Make." / "Every Day." / "Better.".
- display-xl: **168px at 1440** (clamp 100 to 168px), 700, tracking -0.05em (-8.4px), line height 0.79, white. 50px on mobile.

**Glass card (bottom right):**
- 280px wide, radius 12px, padding 4px, `bg-black/10` + `backdrop-blur(18px)`.
- Contents: image at aspect 1.6 with radius 8px; mono "LATEST NEWS" (11px uppercase); bold title (24px) with an external-link icon.
- On mobile it spans the full width and runs horizontally.

**Intro timeline** (`gsap.timeline({ defaults: { ease: "expo.out", duration: 1 } })`, runs on `document.fonts.ready`):

| Step | Desktop (≥700px), first load | Mobile, first load |
|---|---|---|
| 1 | bg `{opacity:0, yPercent:60}` → `{opacity:1, yPercent:20}` | bg `{opacity:0, scale:.6, yPercent:20, borderRadius:12px}` → `{1,1,0,0}`, 1.2s |
| 2 | bg `{scale:.6, yPercent:20}` → `{scale:1, yPercent:0}`; video scale 1.2 → 1 at the same time (`"<"`) | video 1.15 → 1 at the same time |
| 3 | SplitText lines `{opacity:0, yPercent:40}` → `{1,0}`, 0.8s, stagger 0.1, at `"<+0.6"` | at `"<+0.4"` |
| 4 | card `{opacity:0, scale:.9, yPercent:10}` → `{1,1,0}`, 0.8s, at `"<+0.2"` | same |

Swup navigations play only video 1.15 → 1 (0.8s) plus the text.

## Section patterns (home, in order)
Full page: `home-desktop-full.jpg` (1440x7954). Scroll frames: `scroll-01-y600.jpg` … `scroll-11-y6400.jpg`.

1. **Hero.**

2. **Text two-columns** (`container`, `my-fluid-3xl` 90 to 150px). `scroll-01`.
   - 12-column grid split 6/6. The left column is empty or holds a short bold h2.
   - The right column holds a **lead paragraph set as a heading** (33px/700/-0.03em/line height 1.0) plus a grey pill button.
   - The lead uses `anim-fade` (0.6s, delay 0.2s). The h2 uses masked line reveals.

3. **Galaxy** (125svh, overflow hidden). `scroll-02`–`04`, `mobile-galaxy.jpg`.
   - Centred display-lg headline (128px, 700, -0.05em, line height 0.79) laid out as a staircase: line 1 left of centre, line 2 pushed right, line 3 centred. A blurred grey pill button sits below.
   - Behind it: **32 square image particles** (104px desktop / 50px mobile) in a container 150% tall with `perspective: 800px`, `translateZ` from -200 to +200.
   - Particles further back get a white haze overlay. A 160px white-to-transparent gradient covers the top edge.

4. **Large split card** (`sm:container my-fluid-2xl`). `scroll-05`, `06`, `mobile-large-card.jpg`.
   - Black box `#010101`, radius 20px (12px mobile), padding 4px, two equal columns with a 20px gap.
   - Left: square image (1.6 on mobile), radius 16px.
   - Right top: heading-md (57px) "2025 / Annual Report".
   - Right bottom: a 15px paragraph (232px wide) on the left. On the right, a tile: `rgba(255,255,255,.1)`, radius 16px, about 320x160px, mono ".PDF" at top-left, "Read the Report ↗" at the bottom, white/10 overlay on hover.

5. **Text two-columns, second instance.** `scroll-07`.
   - Left: three-line bold h2 (33px). Right: 33px bold lead plus a button.

6. **Snapshot / stats.** `scroll-07`, `08`, `mobile-stats.jpg`.
   - `1px #ccc` hairlines above and below. Two columns with a vertical hairline between them.
   - Left column: title (33px) at the top, outline button ("Investor Relations ↗") at the bottom.
   - Right column:
     - Header row: name / type (15px).
     - A centred **giant number** at 128px with a small grey unit, baseline-aligned.
     - A hairline.
     - A `dl` row of 4 items: mono 11px uppercase `dt`, 15px `dd`. The last item has a vertical hairline and is right-aligned.
   - The number fades and scales from 0.95. There is no count-up.

7. **News carousel.** `scroll-08`, `mobile-news-carousel.jpg`.
   - Header: 33px h2 plus grey "View All ↗" on the left; text buttons "Prev." / "Next" on the right (grey when disabled).
   - The track bleeds off the right edge. Cards are 4 columns wide (435px): image at aspect 1.33 with radius 12px, mono grey eyebrow (`#757575`), 19px title with 104px right padding.
   - Native scroll, `snap-start`, mouse drag.

8. **Push CTA** (`min-h-svh`, rounded top 20px, `mt-fluid-3xl`, overlaps the previous section by 32px). `scroll-09`, `10`, `mobile-push.jpg`.
   - Full-bleed photo, 60% black overlay, scroll-scaled image.
   - Centred white display-lg headline on 4 lines, masked reveals.
   - About 200px gap, then a centred 19px paragraph (328px wide) and a white pill button.

9. **Footer.** The footer overlaps this section by 4px.

**Brands page** (`brands-desktop-first-screen.jpg`, `brands-pinned-01..04.jpg`):
- The galaxy is reused as the hero.
- Then a **stacked sequence of 100svh slides** (`overflow: clip`). Each image runs `translate3d(0, calc(-30% + var(--progress)*60%), 0) scale(calc(1 + var(--progress)*.1))`.
- **Sticky bottom bar:** "☰ VIEW ALL" | brand name | "2 / 11" | ↑ | ↓, as small dark glass pills in mono 11px.
- **Glass info card** above the bar: about 600x225px, photo-tinted heavy blur, radius 12px. Left: logo. Right: mono tagline, mono "FOUNDED IN 1898.", 19px statement, 3 pills (Learn more +, Shop Now ↗, Job Opportunities ↗).

**About page** (`about-desktop-first-screen.jpg`, `about-hero-scroll-01..03.jpg`, `about-desktop-full.jpg`):
- A 250svh sticky hero: 3 words spread across the grid over a full image. On scroll the image gives way to white, the words go grey, then short paragraphs appear under each word.
- Heritage timeline carousel.
- Black values list: icon tile, title, body, ruled rows.
- Portrait team grid.
- **Dual push:** two rounded scroll-scaled image tiles with large labels.

## Footer
Screenshots: `home-desktop-footer.jpg`, `footer-end-wordmark-image-desktop.jpg`, `mobile-footer.jpg`.

**Container:** `#010101` background, white text, `border-radius: 20px 20px 0 0`. Inner padding 48px top, 16px bottom (92px bottom on mobile). Row gap 120px (64px mobile).

**Row 1:**
- Logo icon, 1 column wide (aspect 1.46).
- 6-column menu of six items, each 33px bold with a hairline that draws in (`scaleX`). Hovering one dims the others to 0.6.

**Row 2:**
- Left: 248px about paragraph (15px) plus social links.
- Right: two columns of 11 brand links (16px).

**Row 3:** mono 11px uppercase legal row, `justify-content: space-between`.

**End curtain:**
- An `80svh` black block with `clip-path: inset(0 round 16px 16px 0 0)`.
- Inside, a 180svh wrapper pulled up -100svh holds a `position: sticky; top: 20svh; height: 80svh` panel: photo at `scale(calc(1.3 - var(--progress)*.3))`, 20% black overlay, giant white wordmark 10 columns wide.
- The photo rises from under the footer. On mobile the wordmark is hidden.

## Layout and grid

| Token | Value |
|---|---|
| Columns | 12 (4 below 700px) |
| Margin | 48px (≥700px); 12px mobile. **Aspley: 16px minimum.** |
| Gutter | 20px |
| Max width | Full width minus margins (1344 content at 1440). Max-width steps at 340/500/700/1000/1200/1400/1600/1800/2000/2400. **Aspley: max 1600px, centred.** |
| Breakpoints | 700 (sm), 1000 (md / header switch), 1400 |
| Column helper | `--grid-column-width: calc((100vw - 2*margin - 11*gutter)/12)`; `w-cols-N` = N columns + (N-1) gutters |
| Radii | 4, 6, 8, 10, **12 (workhorse)**, 16, **20 (hero, big card, footer)** |

Spacing tokens:
```css
--spacing-fluid-xs: clamp(.5rem,.4565rem + .2174vw,.625rem);
--spacing-fluid-sm: clamp(1rem,.8261rem + .8696vw,1.5rem);
--spacing-fluid-md: clamp(1.5rem,1.3261rem + .8696vw,2rem);
--spacing-fluid-lg: clamp(2rem,1.8261rem + .8696vw,2.5rem);
--spacing-fluid-xl: clamp(2.5rem,2.1522rem + 1.7391vw,3.5rem);
--spacing-fluid-2xl: clamp(3.5rem,2.7609rem + 3.6957vw,5.625rem);
--spacing-fluid-3xl: clamp(5.625rem,4.3207rem + 6.5217vw,9.375rem);
--spacing-fluid-4xl: clamp(9.375rem,8.288rem + 5.4348vw,12.5rem);
```

## Typography

**Families on the reference (commercial, not for use):**
- ABCDiatype. The "Medium" file is mapped to weight 400, so body text is the Medium cut. "Bold" is 700.
- ABCDiatype-Mono for labels.

**Google Fonts equivalents:**
- **Inter Tight** 500 (as "regular") and 700. Second choice: Geist.
- Mono: **Geist Mono** 400, or JetBrains Mono.
- Load: `https://fonts.googleapis.com/css2?family=Inter+Tight:wght@500;700&family=Geist+Mono:wght@400&display=swap`.
- Stacks: `"Inter Tight","Helvetica Neue",Arial,sans-serif` and `"Geist Mono",ui-monospace,Menlo,monospace`.

**Scale:**

| Style | clamp | px @1440 | px @390 | wt | tracking | line height |
|---|---|---|---|---|---|---|
| display-xl | clamp(6.25rem,4.7717rem+7.3913vw,10.5rem) | 168 | (mobile uses lg) | 700 | -0.05em | 0.79 |
| display-lg | clamp(2.75rem,.9239rem+9.1304vw,8rem) | 128 | 50 | 700 | -0.05em | 0.79 |
| display-md | clamp(3.75rem,2.9239rem+4.1304vw,6.125rem) | 98 | 60 | 700 | -0.05em | 0.79 |
| heading-lg | clamp(2rem,1.0652rem+4.6739vw,4.6875rem) | 75 | 36 | 700 | -0.04em | 0.79 (0.9 below 700px) |
| heading-md | clamp(1.5rem,.7826rem+3.587vw,3.5625rem) | 57 | 26 | 700 | -0.04em | 0.9 (0.99 below 700px) |
| heading-sm | clamp(1.25rem,.7283rem+2.6087vw,2.75rem) | 44 | 20 | 700 | -0.03em | 0.9 (1.2 below 700px) |
| heading-xs | clamp(1.25rem,.9674rem+1.413vw,2.0625rem) | 33 | 21 to 26 | 700 | -0.03em | 1.0 |
| heading-2xs | 1.5rem | 24 | 24 | 700 | -0.03em | 1.0 |
| body-lg | clamp(1.0625rem,.8668rem+.9783vw,1.625rem) | 26 | 18 | 400 (Medium) | -0.02em | 1.1 (1.2 below 700px) |
| body-md | clamp(.875rem,.7663rem+.5435vw,1.1875rem) | 19 | 14 | 400 | -0.02em | 1.2 |
| body-sm | clamp(.875rem,.8533rem+.1087vw,.9375rem) | 15 | 14 | 400 | -0.02em | 1.2 |
| label (mono) | clamp(.625rem,.6033rem+.1087vw,.6875rem) | 11 | 10 | 400 | 0 | 1.4, uppercase |

Notes:
- Line height 0.79 clips descenders inside masks. Give masked lines `margin-bottom: -1.5rem; padding-bottom: 1.5rem`.
- Lead paragraphs are set as bold 33px headings. That is a signature move.
- For Aspley, raise body paragraphs longer than two lines to line height 1.35 to 1.45.
- Mono labels: at least 12px for Aspley, tracked +0.02em. Nothing under 14px except labels.

## Colour

| Token | Value | Use |
|---|---|---|
| black | `#010101` | text, footer, dark card |
| white | `#ffffff` | page, text on dark |
| gray-200 | `#ccc` | hairlines, button hover, outline border |
| gray-400 | `#9d9d9d` | disabled |
| gray-500 / gray-600 | `#737373` / `#757575` | muted text, eyebrows, units |
| gray-800 | `#4d4d4d` | black-button hover |
| Pill fill | `rgba(0,0,0,.1)` light, `rgba(255,255,255,.1)` dark | default buttons |
| Glass, light | `rgba(0,0,0,.1)` + blur 18px | hero card |
| Glass, dark | `rgba(0,0,0,.8)` + blur 10px | header pill, mobile menu |
| Dims | `rgba(0,0,0,.2)` + blur 2px (dropdown); `#000c` (mobile menu) | page behind overlays |
| Image overlays | black 60% (push), black 20% (footer), white haze (particles) | |

**Aspley:** keep the system and add **one accent, red `#C8102E`**, only for the primary Book action, the mobile bar's book button and the badge. Optionally warm the neutrals: black `#0d0b0a`, white `#fbfaf7`, hairline `#d9d5ce`. Red on white and white on red are both about 5.9:1, which passes AA.

## Components

**Button** (`c-button`):
- Structure: `inner > [icon(hidden left), label, icon] + bg layer`.
- Padding 16px vertical / 20px horizontal (small: 12/12). Label 15px/400. Gap 16 to 24px.
- The bg is a separate absolute layer, radius 12px, 1px border.
- Variants:

  | Variant | Background | Text | Hover |
  |---|---|---|---|
  | default | `rgba(0,0,0,.1)` | black | `#ccc` |
  | outline | transparent | as parent | border `#ccc` |
  | white | white | black | `#ccc` |
  | black | black | white | `#4d4d4d` |
  | blur | `rgba(0,0,0,.2)` + blur 10px | white | |
  | glass | `rgba(255,255,255,.1)` + blur 18px | white | radius 16px |
  | ghost | transparent, 10% white border | white | fills white |

- **Hover:** bg `scaleY(.95)` plus colour change. The label shifts +25px. A leading arrow slides in from `translateX(calc(-100% - padX))` (75ms delay) while the trailing arrow exits right. 0.4s, `cubic-bezier(.23,1,.32,1)`.
- **Active:** bg `scaleY(.925)` (0.2s), inner `translateX(2px)`. Focus matches hover.

**Glass info card:** 4px padding, image radius 8px, mono label, bold title, icon at the bottom right. Hover: image scale 1.05 (0.6s expo), icon scale 1.25.

**News card:** image at aspect 1.33, radius 12px; mono eyebrow; 19px title. Hover: 2px black outline at 2px offset, title underline, CTA fades in. The whole card is clickable via the link's `::before`.

**Images:**
- Wrapper has `overflow: hidden` and its own radius; `object-fit: cover` with a focal point.
- The loading placeholder is `currentColor` at 50%. The image then goes opacity 0 → 1 and scale 1.1 → 1 over 0.6s.
- Ratios: hero 100svh; large card 1:1 (1.6 mobile); cards 1.6 and 1.33; dual push 1.45 (1.2 mobile); slides 100svh; particles 1:1.

**Mobile menu** (`mobile-menu-open.jpg`, `mobile-menu-dropdown-open.jpg`):
- Panel inset 8 to 10px / 12px, `rgba(0,0,0,.8)` + blur 10px, radius 12px.
- Opens with clip-path `inset(0 0 100% 0 round 12px)` → `inset(0 round 12px)` plus opacity, 0.4s.
- The large logo drops from -40px. Links (18 to 26px, bottom borders) slide from -10px with fade. Sub-menus use `details` with + → −.
- The secondary 2-column grid fades in at half the duration. The page dims to `#000c`.

## Motion

**Libraries:**
- GSAP 3.14 core with SplitText 3.14.2 and Flip 3.14.2. No ScrollTrigger usage was found in the components.
- Locomotive Scroll v5: Lenis plus an IntersectionObserver core, `lerp 0.1`. It adds `is-inview` when an element is 15% into the viewport and writes `--progress` via `data-scroll-css-progress`.
- Swup 4 (crossfade), Blossom carousel, focus-trap.
- None of: three.js, lottie, Barba, Swiper, Webflow, custom cursors, horizontal pin.
- Reduced motion is honoured: the stored `isAnimationsReduced` flag skips SplitText and the intro, turns off smooth wheel and sets every duration to 0s.

**Eases and durations:**
```css
--ease-expo-out: cubic-bezier(.19,1,.22,1);
--ease-power2-out: cubic-bezier(.215,.61,.355,1);
--ease-power3-out: cubic-bezier(.165,.84,.44,1);
--ease-power4-out: cubic-bezier(.23,1,.32,1);
--ease-sine-out: cubic-bezier(.39,.575,.565,1);
/* fast .2s, base .4s, slow .6s, slower .8s, slowest 1s */
```

**Effects and their rebuilds (GSAP 3.13 + ScrollTrigger + SplitText + Lenis):**

1. **Smooth scroll.**
   - `new Lenis({ lerp: .1, smoothWheel: true })`; `lenis.on('scroll', ScrollTrigger.update)`; `gsap.ticker.add(t => lenis.raf(t*1000))`; `gsap.ticker.lagSmoothing(0)`.
   - Turn it off under reduced motion.

2. **Hero intro.**
   - Rebuild the Hero table exactly. Use `SplitText.create(h1, { type: 'lines', mask: 'lines' })` with yPercent 110 → 0.
   - It plays on load, so it is allowed.

3. **Header morph.**
   - `ScrollTrigger.create({ start: 40, onToggle: s => { const st = Flip.getState([logo, nav, bg]); root.classList.toggle('has-scrolled', s.isActive); Flip.from(st, { duration: .4, ease: 'power2.out', simple: true }); } })`.
   - Load Flip 3.13.0 from cdnjs.

4. **Header hide/show.**
   - `ScrollTrigger.create({ start: () => innerHeight, end: 'max', onUpdate: s => header.classList.toggle('is-hidden', s.direction === 1) })`.
   - CSS: `transition: transform .4s var(--ease-expo-out)`.
   - Never hide while a menu is open or the header has `:focus-within`.

5. **Dropdown.**
   - clipPath `inset(0% 20% 100% 20% round 12px)` → `inset(0% 0% 0% 0% round 10px)`, 0.4s `power2.out`, plus the page dim.

6. **Masked line reveal.**
   - SplitText lines with masks, yPercent 110 → 0, 1s `expo.out`, stagger 0.1, start `top 85%`, `autoSplit: true`, with the animation created in `onSplit`.

7. **Fade / up / up-scale / fade-scale.**
   - Opacity 0.6s `power2`; y 20% at 0.8s expo; y 20% plus scale 0.9 at 0.8s expo; scale 0.95 at 0.6s.

8. **Hairlines.**
   - `scaleX 0 → 1`, origin left, 0.8s expo. Decorative, so starting from 0 is fine.

9. **Galaxy words.**
   - SplitText words with a repeating offset pattern `[(-40,0),(0,-40),(0,40),(40,0),(0,-40),(0,40)]`px and delay `i*.1s`.
   - Transform 1s `expo.out`. Opacity is 0.6s `sine.out` on the reference; for Aspley keep opacity at 1.

10. **Galaxy particles.**
    - 32 images, each with random `left` 0 to 95% and `top` 0 to 100%. On mobile, `left = (n%4)*25 + x%20` %.
    - z from `[-200,-150,-100,-50,0,50,100,150,200]`, speed from `[.8,.9,1,1.1,1.2]`.
    - Haze overlay opacity = `1 - max(.5, 1 + z/250)` when z < 0.
    - Each tick: `target += .15*delta*dirSign`, `current = lerp(current, target, .1)`, `y = -current*speed`, wrapping at container height ± 10%. Scale lerps (0.25) toward `.5 + (y/H)*.9`.
    - Scroll input: `target += velocity*.05`, and scroll direction flips `dirSign`.
    - Implement with `gsap.ticker.add` fed by `lenis.velocity` and `lenis.direction`. Pause when off-screen. Use static placement under reduced motion and `-sm.webp` sources.

11. **Scroll-scaled backgrounds.**
    - `fromTo(img, { scale: 1.15, yPercent: -10 }, { scale: 1, yPercent: 10, ease: 'none', scrollTrigger: { trigger: sec, start: 'top bottom', end: 'bottom top', scrub: true } })`.

12. **Footer curtain.**
    - Copy the sticky markup. Scrub the image scale 1.3 → 1 from `top bottom` to `bottom bottom`.

13. **Stacked slides.**
    - Per slide: scrub the image yPercent -30 → 30 and scale 1 → 1.1.
    - The sticky bar counter updates `onToggle`. The arrows call `lenis.scrollTo(next)`.
    - Desktop only. Below 700px use a plain stack of cards.

14. **Image settle.**
    - Scale 1.06 → 1 on load. Keep opacity at 1.

15. **Button, card and footer-menu hovers.**
    - Pure CSS as specified. Footer dim: `.list:has(a:hover) li:not(:has(:hover)) { opacity: .6 }`.

16. **Page transitions.**
    - Swup opacity crossfade, 0.4s. Not needed for a single-page mock; use `lenis.scrollTo(target, { duration: 1.2 })` for anchors.

17. **Carousel.**
    - `scroll-snap-type: x mandatory`; `scrollBy(cardW + gutter)` buttons that disable at the ends; pointer-drag on desktop.

**Aspley rule for scroll reveals** (BRIEF: complete at rest). The reference hides content with opacity 0 and masked lines until it is in view. Do not copy that.
- Masked line reveals and fades run only on load, and only for the first viewport.
- Below the fold, motion must start from a visible state:
  - transform-only offsets (y 32px, scale 0.96, the galaxy word offsets);
  - scrubbed parallax (effects 11, 12 and 13);
  - decorative hairlines.
- Never set real text or images to opacity 0, or fully mask them, before a ScrollTrigger fires.
- Wrap everything in `gsap.matchMedia()`. Under `prefers-reduced-motion: reduce`: final states, no Lenis, static particles, no intro.

## Mobile
Screenshots: `home-mobile-first-screen.jpg`, `mobile-menu-open.jpg`, `mobile-menu-dropdown-open.jpg`, `mobile-intro.jpg`, `mobile-galaxy.jpg`, `mobile-large-card.jpg`, `mobile-stats.jpg`, `mobile-news-carousel.jpg`, `mobile-push.jpg`, `mobile-footer.jpg`.

- **Grid:** 4 columns, 12px margins on the reference (Aspley: 16px), 20px gutter.
- **Header:** a full dark rounded bar with "Menu +". When scrolled it becomes a logo chip plus a menu pill.
- **Hero:** full-bleed, H1 50px at about 40svh, glass card full width and horizontal.
- **Two-column sections:** stack. Leads drop to 26px.
- **Galaxy:** 50px particles in 4 lanes; the staircase layout is kept.
- **Large card:** image on top.
- **Stats:** the number is 50px; the `dl` becomes a 4-column grid.
- **Carousel:** cards are 3 of 4 columns wide (270px), so the next one peeks in.
- **Footer:** logo centred at 80px; brand links in 2 columns.
- **No sticky booking bar on the reference.** Aspley needs one. Style it like the brands-page sticky bar: bottom-centred dark glass pills (`rgba(13,11,10,.8)` + blur 10px, radius 12px), with a red "Book a table" pill and a "Call (07) 3263 4040" pill showing the number as text. Add `padding-bottom: max(8px, env(safe-area-inset-bottom))`.

## Translating to Aspley Hotel
Keep the system: monochrome plus photos, giant tight grotesk, mono labels, rounded inset media, glass, the pill header, the galaxy and the curtain footer. Only real facts. The headline copy below is direction for the copywriting pass.

### Header
- **Top state:** "ASPLEY HOTEL" in Inter Tight 700 caps, tracked +0.04em. Not a bold/light split wordmark.
- **Nav:** Eat, Drink, Sport, Gaming, Functions, What's On, plus a red "Book a table" pill.
- **Scrolled pill:** a small SVG circular text badge ("EST 1935 · ASPLEY HOTEL · PUB ON THE HILL · GAMING BAR FOOD BOTTLESHOP") as the icon, then the nav and the red pill.

### Mega dropdowns
- **Eat & Drink:** intro "Bistro, bar and deck" with View →. Tiles: Bistro (`bistro-bright`), Bar (`bar-cocktails`), Deck (`deck`).
- **Sport & Gaming:** tiles Sports Bar (`sports-bar`), TAB (`tab`), Gaming (`gaming-glow`). Put "Gamble responsibly. Gambling Help 1800 858 858" in the intro column.

### Hero
- `exterior-hill`, inset 8px, radius 20px, slow scale 1.12 → 1 (in place of video). Same rise-and-grow intro.
- H1, e.g. "The pub / on the hill. / Since 1935."
- Glass card: mono label "WHAT'S ON", image `beer-pour-sm`, "Melbourne Cup · Tue 3 Nov", "2-course lunch $55" →.

### Two-column intro
- Left: "Est. 1935."
- Right: 33px bold lead from the real copy: nearly 90 years in the northern suburbs, part of the Star family since November 2023, here for a cold drink, a hearty feed or a punt.
- Button: "See the menu →".

### Galaxy
- Staircase headline (to be finalised), e.g. "A seat for / every kind of / Friday."
- Particles cycle 16 `-sm` photos: taps-gold, beer-pour, dish-wings, dish-pie-pint, cake-fridge, coffee-bar, sports-bar, tab, deck, deck-2, bar-cocktails, bistro-round-table, sign-est-1935, exterior-stone-steps, function-terrace, gaming-glow.
- Button: "Explore the pub →".

### Rooms as stacked slides (desktop)
- Seven slides: Bistro, Bar, Deck, Sports Bar, Gaming, Functions, Bottle Shop.
- Glass card on each: room name in heading-sm, a mono fact, one sentence, pills.
- Mono facts:
  - Bistro: "THU TO SAT 11:30AM TO 8:30PM"
  - Gaming: "EVERY DAY 10AM TO 4AM", plus the help line in the card
  - Bottle Shop: "DRIVE-THROUGH · FRI AND SAT TO MIDNIGHT"
  - Functions: "HERB GARDEN · 100 STANDING"
- Sticky bar: "☰ ALL ROOMS · BISTRO · 1 / 7 · ↑ ↓".
- Phones: a stack of rounded image cards.

### Large black card: Functions
- Left: `function-terrace`.
- Right: "Functions in the / Herb Garden".
- Facts: Herb Garden 80 seated / 100 standing; Terrace 40 seated; Terrace and Herb Garden 60 seated; platters $100 to $145.
- Inner tile: mono "ENQUIRE", "Plan your function →" (`enquiries@aspleyhotel.com.au` or the mock form).

### Second two-column: Star Rewards
- Lead: "Members pay $1 less on every dish, and collect points at every Star Hotels venue and Star Liquor store."
- Button: "Join Star Rewards →" (grey pill).

### Snapshot
- Title "The pub at a glance" plus outline "Directions ↗" (Google Maps link).
- Header row: "Aspley Hotel, 1247 Gympie Road" / "Est. 1935".
- Giant **4.2**, unit "GOOGLE RATING".
- `dl`: REVIEWS 791 · FUNCTIONS up to 100 standing · GAMING 10am to 4am daily · BOTTLE SHOP Drive-through.
- Gambling-help line under the `dl`.
- Count-up is optional and not in the reference. Keep final values in the HTML.

### This week (carousel)
- WED 6:30PM · Trivia, free, Questionable Company
- FRI 3:30 TO 6:30PM · Jag the Joker, jackpot grows $100 a week
- SAT · Members Jackpot from $400, must go by $4,000 (with the help line)
- DAILY · Sport on every screen
- TUE 3 NOV · Melbourne Cup lunch $55, bookings essential
- Images: `bar-long`, `taps-gold`, `gaming-machines`, `sports-bar-2`, `bistro-room`.

### Push CTA
- `bistro-bright` or `deck-2`, 60% overlay, scroll-scale.
- "Book / a table." with the bistro hours.
- Buttons: red "Book a table", white "Call (07) 3263 4040".

### Footer
- Badge; heading-xs menu (Eat, Drink, Sports Bar, Gaming, Functions, What's On, Star Rewards, Contact).
- About text: address, phone, functions email.
- The link columns become **Opening hours**: Bistro / Gaming / Bottle Shop.
- Mono legal row: "© 2026 ASPLEY HOTEL · PART OF THE STAR HOTELS GROUP · GAMBLE RESPONSIBLY · GAMBLING HELP 1800 858 858 · PRIVACY".

### Curtain
- `exterior-hill` (or the `sign-est-1935` close-up) rising 1.3 → 1, 20% overlay.
- Giant "ASPLEY HOTEL" in display type, or the white badge 10 columns wide.

### Optional extras
- **About-style sticky hero:** "Eat. / Drink. / Cheer." over `bar-long`, resolving to white with one real fact per word. Desktop only.
- **Dual push:** "Functions →" (`function-room`) and "Drive-through bottle shop →" (`exterior-bistro-entry`).

**Suggested order:** Header → Hero → Est. 1935 two-column → Galaxy → Rooms slides → Functions card → Star Rewards → Snapshot → This week → Book push → Footer + curtain, with the mobile Book/Call bar throughout.

## Screenshot index

| Files | Shows |
|---|---|
| `home-desktop-first-screen.jpg` | Settled hero |
| `intro-01-t150ms-desktop.jpg`, `intro-02-t450ms-desktop.jpg`, `intro-03-t800ms-settled-desktop.jpg` | Hero intro |
| `header-top-desktop.jpg`, `header-morph-mid-desktop.jpg`, `header-pill-scrolled-desktop.jpg`, `header-returns-on-scroll-up-desktop.jpg` | Header states |
| `header-dropdown-open-desktop.jpg` | Mega dropdown |
| `scroll-01-y600.jpg` … `scroll-11-y6400.jpg` | Slow scroll through home (header hidden while scrolling down) |
| `home-desktop-full.jpg` | Full home page, 1440x7954 |
| `home-desktop-footer.jpg`, `footer-end-wordmark-image-desktop.jpg` | Footer and curtain |
| `brands-desktop-first-screen.jpg`, `brands-desktop-full.jpg`, `brands-pinned-01..04.jpg` | Brands page; the stitch cannot show the sticky slides, so use the pinned frames |
| `about-desktop-first-screen.jpg`, `about-hero-scroll-01..03.jpg`, `about-desktop-full.jpg` | About page |
| `home-mobile-first-screen.jpg`, `mobile-menu-open.jpg`, `mobile-menu-dropdown-open.jpg`, `mobile-intro.jpg`, `mobile-galaxy.jpg`, `mobile-large-card.jpg`, `mobile-stats.jpg`, `mobile-news-carousel.jpg`, `mobile-push.jpg`, `mobile-footer.jpg` | Mobile at 390 |
