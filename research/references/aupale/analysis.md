# Reference study: aupalevodka.com/en/ (Aupale Vodka)

Studied 12 October 2026 with headless Chromium at 1440x900 and 390x844 (iPhone UA). The age gate was passed by clicking YES. Screenshots are in `screenshots/`, and every one is named below where it is used.

Use this file to learn the **structure, rhythm, type system, motion vocabulary and interaction patterns**. Do not use Aupale's wordmark, its circular "A" mark, its topographic SVG paths, its copy ("Born From The Untouched Wilderness", "Leave No Trace", "In Good Company", "Taste the Clarity"), its photos or videos, or its exact green. The Aspley variant must read as Aspley Hotel.

## 0. Stack (what it is actually built with)

| Item | Finding |
|---|---|
| Framework | Astro (`/_astro/*.js`), with Storyblok as CMS. Vanilla Custom Elements: `c-hero`, `c-story`, `c-story-chapter`, `c-triptych`, `c-cartography`, `c-mosaic`, `c-rail`, `c-cta`, `c-modal`, `c-age-verification-modal`, `c-narrow-header`, `c-wide-header`, `c-menu-header` |
| Smooth scroll | **Locomotive Scroll v5**, which wraps **Lenis 1.1.9** (`window.lenisVersion`, lerp .1, wheelMultiplier 1). It drives `data-scroll-speed` parallax, `data-scroll-css-progress` (writes `--progress` 0 to 1 on the element) and `data-scroll-event-progress` / `data-scroll-call` events |
| Animation | **Anime.js v4.2.2** (timeline, waapi, stagger, text split, onScroll, svg drawable, spring). **No GSAP** |
| Video | Mux (`mux-video` HLS loops, `mux-player` film modal), played and paused by an IntersectionObserver |
| WebGL / canvas / three / pixi / lottie / spline / Swiper | **None. No image sequence.** |
| Agency | Locomotive (footer credit) |

So the bottle storytelling is a pinned looping video, a scroll-scrubbed scale and clip, and text that parallaxes over it. Everything can be rebuilt with CSS variables, GSAP ScrollTrigger and still photos.

## 1. Age gate (`01-age-gate-desktop.jpg`, `01b-age-gate-mobile.jpg`, exit in `07-scroll-01-hero-intro-blur-600ms.jpg`)

- **Overlay:** fixed full-screen modal. The backdrop `::before` is `#000000b3` with `backdrop-filter: blur(10px)`, so the hero video shows through.
- **Card:** 360x386 desktop (360x341 mobile), centred, white with page grain, padding 16px, radius 8px. Top to bottom: the first wordmark word across the full card width, then the question in sans 500 ~16px centred over two lines, then the black filled buttons YES and NO side by side (mono 600 uppercase 12px, #0d1015, radius 12px, padding 18x27, 16px gap), then the second wordmark word at the bottom. Splitting the wordmark around the question makes the card read like a label.
- **Enter:** clip-path from `inset(100% 0 0 0 round 8px)` to `inset(0 round 8px)`, 0.8s `cubic-bezier(.645,.045,.355,1)`, 0.2s delay. Text and buttons fade in over 0.8s. Wordmark letters slide up from a mask (translateY 100% to 0).
- **Behaviour:** focus trapped; Esc and outside click disabled. YES sets `localStorage.ageVerified=true`, adds `html.is-age-verification-done`, and starts the hero intro. NO redirects to google.com. Return visits skip the gate.
- **Exit:** the card collapses and fades (0.6s) while the hero de-blurs underneath.

**For Aspley: do not gate the site.**
- The site's jobs are bistro bookings, kids meals, functions and Melbourne Cup tickets, so families and under-18s are real users.
- A venue site has no need to gate a bistro and bar homepage.
- Gaming content gets "Gamble responsibly. Gambling Help 1800 858 858" instead.

The card-on-blur pattern can be reused as an **opt-in** surface: a "Book a table / Call (07) 3263 4040" chooser or a Melbourne Cup ticket prompt. It must be dismissible with Esc and must never block content.

## 2. Header (`02-home-desktop-first.jpg`, `04-menu-open-desktop.jpg`, `04b-menu-open-mobile.jpg`)

Two headers swap at **scrollY 100px**.

**Wide header (top of page, desktop 1000px and up):**
- Transparent, with white text over the hero, a 24px side margin and 24 to 30px top padding.
- Left links: PHILOSOPHY · THE BOTTLE · VODKA · SELTZERS. Right links: MOCKTAILS · CREATORS · WHERE TO BUY? · ENGLISH with a chevron.
- Links are mono 600 uppercase 12px with a ~40px gap.
- The stacked two-line wordmark and round mark sit centred at top 30px, with slight parallax (`data-scroll-speed .08`).

**Narrow header (after 100px, and always below 1000px):**
- A centred floating pill, 485x~60 desktop (358x39 at 390px wide), at top 18px.
- Sage fill with grain, radius 12px and a soft shadow.
- Slots: left "WHERE TO BUY?" in mono; centre the round mark only; right "MENU" plus a two-line hamburger with a shorter bottom line.
- Clicking the mark scrolls to the top with inOutQuint over max(0.75s, scroll/4000 x 0.75).

**Menu open:**
- The pill grows downward in place to 485x660, over 650ms with `cubic-bezier(1,.005,.292,1)`.
- Contents in order: the full wordmark drops in at the top; six serif links (36px, line-height .92) separated by 1px rules; an outlined language select (radius 12); a full-width black CTA "WHERE TO BUY? ↗".
- Children animate from opacity 0, scale .9 to 1 over ~420ms, staggered 15ms, starting at 195ms. Close reverses with a 25ms stagger from the last item.
- The hamburger becomes an ×. Focus is trapped; Esc and outside click close the menu.

**Aspley:** the pill holds BOOK A TABLE · the round EST 1935 SVG badge · MENU. Menu links: Eat & Drink, What's On, Functions, Sports & TAB, Gaming, Star Rewards, Find Us. Below them, a visible "(07) 3263 4040" tel row and a black CTA "BOOK A TABLE ↗". The brief's sticky bottom Book/Call bar is added separately on phones.

## 3. Hero (`02-home-desktop-first.jpg`, `03-home-mobile-first.jpg`, `07-scroll-01…`)

- **Size:** h-dvh, full-bleed looping dark video under a ~40% scrim.
- **Headline:** centred, 3 lines, Instrument Serif 400 at **125px / line-height .84** (50px at 390), white, with one italic word in the middle line. This roman plus italic-accent mix is the site's signature.
- **Bottom-left:** a 220x124 video card, radius 8, with mono labels in three corners: "WATCH THE FILM", "(PLAY)", "2MIN 26S". It opens a fullscreen player with a black CLOSE pill.
- **Bottom-right:** a mono uppercase 12px caption about 220px wide, then the text CTA "DISCOVER OUR STORY".
- **Intro timeline** (after the gate):
  1. The inner layer de-blurs from 15px to 0 over 2500ms (outExpo).
  2. The media "block tween": from scale 0, skewX 12, skewY 10, opacity 0, clip `inset(100% 0 0 0 round 16px)`, over 800ms outExpo. Then the clip radius goes from 16px to 0.
  3. The logo and heading lines rise from `translateY(100%) skewX(10deg) scale(1.04) opacity 0`, as a 700ms spring (bounce .214), staggered 100ms inside overflow-clip line masks.
  4. The film card and caption follow at +200ms.

**Aspley:**
- Hero photo `beer-pour.webp`, with the headline "The pub / on the *hill* / since 1935."
- Bottom-left: an "ON TAP" card using `taps-gold.webp`, labelled XXXX · STONE & WOOD · GREAT NORTHERN.
- Bottom-right: "1247 GYMPIE ROAD, ASPLEY QLD 4034 · OPEN 7 DAYS" and BOOK A TABLE.
- The intro plays on load, starting from a readable state.

## 4. Scroll story structure (1440x900, total 17,761px; whole page in `06-home-full-desktop-50pct.jpg`)

| # | Section | Top / height | Pattern | Screens |
|---|---|---|---|---|
| 1 | Hero | 0 / 900 | Full-bleed video hero | 02, 07-scroll-01 |
| 2 | Story (2 chapters) | 900 / **5400** (2 x 300vh) | **Pinned chapters**: absolute full-height layers with a sticky 100svh inner, over a sticky topographic SVG with per-path parallax | 07-scroll-02/03/04, 08-mobile-story-chapter |
| 3 | Triptych | 6300 / 1728 | Centre **arch** (tall rounded-full capsule) scales 0.1 to 1 with scroll, with a quote inside and 2 captioned photos either side | 07-scroll-05 |
| 4 | Bottle | 8028 / 3474 | **Pinned full-bleed video**: a rounded inset card grows to full bleed, then 4 spec entries alternate left and right over it | 07-scroll-06/07/08, 08b-mobile-bottle |
| 5 | Catalog x3 | 11502 / 774, 1190, 1190 | Two-tone serif heading, then a bento of gradient product tiles plus one video tile, then a product modal | 07-scroll-09/10, 13, 13b |
| 6 | Mosaic | 14655 / 1297 | Giant 3-line serif title with 5 photos scattered over it, then a short paragraph | 07-scroll-11 |
| 7 | Prefooter | 15952 | Sage band with a giant serif line and an **inline photo that opens between two words** | 07-scroll-12 |
| 8 | Footer | 16135 / 1626 | Sage block with big logo, newsletter and socials; a light band with a **velocity marquee** and a CTA over it; legal bar | 05 |

### 4.1 Story chapters

**Chapter switching (triggered, not scrubbed):**
- The story section exposes `--progress`. The active chapter is `floor(progress x n)`.
- When the chapter changes, the old one hides and the new one shows over 700ms outExpo.
  - Show: lines from y 100%, skewX 10, scale 1.04, opacity 0, staggered 50ms; media cards use the block tween, staggered 100ms.
  - Hide: the reverse.
- `07-scroll-02` shows a cross-over caught mid-transition.

**Inside a chapter (scrubbed with CSS variables):**
- The tagline drifts by `translateY((progress + chapterProgress) x -2.5lvh)`.
- Two media cards (220px wide, 1:1.2, radius 16, one at left -10% and one at the right) rotate by ±15deg (`10deg x 1.5 x chapterProgress`). Odd and even chapters rotate opposite ways. They also drift ±5x the tagline offset.
- Chapter 0 has a black-to-transparent cover gradient, 50lvh tall, at opacity `(1 - coverProgress) x .8`. It fades out over the first 20% of the chapter, so the dark hero bleeds into the light section.

**Layout:** the tagline is centred (serif 107px / .84 with italic words, ~60cqw wide). The cards float behind it. A mono label and paragraph (12px uppercase, centred, 380px wide) sit ~200px below.

**Cartography:**
- A sticky 100vh SVG of topographic contours (950x2725 viewBox, rotated 15deg, positioned off the edge).
- Paths are filled sage with 1px white strokes, and their opacity ramps 0 to 1 across the stack.
- Each path translates by `(p x 2 - 1) x range`, with range from 400px down to 200px.
- Show animation: the group scales .95 to 1 over 1.5s while the paths fade in, staggered 30ms from the last.
- Disabled on mobile and tablet.

### 4.2 Triptych (arch)

- **Arch:** a capsule (rounded-full, aspect 454/829, 4 of 12 columns, sage fill with a dashed contour SVG inside). It scales 0.1 to 1, scrubbed with smoothing 0.5, from the section entering until top+20%.
- **Quote:** serif 63px, -0.02em, one word per line, revealed by scrubbed line masks (smoothing .25).
- **Flanking photos:** a tall photo at left (220x330, radius 16) and a landscape photo at right, each with a 2-line mono caption, plus parallax.
- Vignettes fade the contour layer in and out at the section edges.

### 4.3 Bottle (pinned feature)

- **Media:** sticky at top 0, 100lvh tall. The inner layer is 130lvh and pans by `-progress x 30lvh`.
- **Entry morph:** scale .9 to 1 and clip `inset(0 round 80px x m)` with m going 1 to 0. Synced to scroll from "bottom top+100" to "top top" with inOut(2). The video arrives as a rounded card with page margins showing (`07-scroll-06`).
- **Title:** serif 100px / .84, white, with an italic word, starting at column 3 (max 560px). The overlay grid is shifted up 30lvh.
- **Entries:** 4 entries with ~20vh gaps, alternating left (column 2) and right (one column in from the right edge). Each has a small parallax speed (-0.011 to -0.039).
- **Each entry:** a mono label ("THE NAME", "THE CLOSURE", "THE BOTTLE", "THE BASE"), a 65px serif heading, and a 5-line mono paragraph (max 2.5 of 12 columns). Each reveals with the line-mask spring.
- The bottle "rotation" is inside the looping video itself.

### 4.4 Product catalog

- **Heading:** two tones. The range name in ink, then the tasting line in the same serif at ~40% ink, ~64px / .92. Top padding is 128 to 160px.
- **Bento:** 12-column grid, 16 to 24px gutter. A wide video tile (aspect 688/400, spanning 2 columns) sits beside the product tiles (aspect 336/400).
- **Tiles:** radius 12px, soft blurred colour-gradient background, bottle centred. Label at bottom-left: name in sans 500 18px (-0.01em) over flavour in serif 19px.
- **Hover:** tile scales to .98, image to 1.1, over 1s spring.
- **Enter:** the block tween over 800ms expo.out, staggered 100ms. It plays when the wrapper's bottom meets the viewport bottom and resets when the section leaves.
- **Modal** (13, 13b):
  - Full-screen gradient tint.
  - Left floating card (radius 16, ~450px wide) holds the name in sans 500 ~46px at -0.06em, the flavour in serif ~46px under it, and a black "WHERE TO BUY? ↗" button.
  - Below that, a **spec table**: 1px rules, mono key on the left half and mono value on the right.
  - The product sits large on the right, with a black CLOSE pill top-right.

### 4.5 Mosaic

- **Title:** serif 240px, line-height .6, -0.03em, capitalised, 3 lines stacked nearly touching. Words rise from y 100%, staggered 50ms, over 700ms.
- **Photos:** 5 photos from 120 to 340px wide (radius 16) overlap the title edges. Each pops from scale 0, skewX 12 with a 525ms spring, and carries its own parallax speed.
- A small centred serif paragraph with italic key words follows, then a mono note.

### 4.6 Prefooter

- A serif title at 17.14cqi (~247px, -0.03em, line-height .8) on the sage band. Line 2 holds an inline photo (.75em tall, radius .75rem).
- The reveal is pure CSS:
  1. Lines clip in, staggered 50ms.
  2. The words either side of the photo slide apart from touching while the photo clip-reveals from the bottom.
- Timings: enter .6s, exit .4s, `cubic-bezier(.645,.045,.355,1)`.

### 4.7 Footer

- **Sage block:**
  - The centred big logo (453x373).
  - Left column: "STAY IN TOUCH" (mono, 60% opacity), a mono paragraph, then the email input and SUBSCRIBE as joined square-cornered 1px outlined boxes.
  - Right column: "FOLLOW US", with Facebook and Instagram as mono links on full-width 1px rules.
- **Light band:**
  - A giant serif marquee in sage on paper (glyphs ~360px tall).
  - It moves 1px per frame plus 0.5 x scroll velocity and reverses with scroll direction. It pauses off-screen and under reduced motion.
  - A centred black CTA (~335x50) sits over it.
- **Legal bar:** a 1px rule, then mono uppercase in 4 columns: copyright · terms · language · credit.

## 5. Layout system

- **Grid:** 12 columns, 24px outer margin, fluid gutter, edge to edge. Text widths are set by max-widths: 560px titles, 380px mono paragraphs, 220px captions.
- **Breakpoints:** 340 / 500 / 700 / **1000** (the header swap) / 1200 / 1400 / 1600.
- **Spacing clamps:**
  - xs .5→.625rem
  - sm .875→1.125rem
  - md 1.5→1.875rem
  - lg 2→2.5rem
  - xl 2.5→3.5rem
  - 2xl 3.5→5rem
  - 3xl 5→8rem
  - 4xl 8→10rem
  - 5xl 10→12rem
- **Section padding** is given in viewport-height terms (10 to 50vh), which is why the page feels so airy.
- **Radii:** 4 / 8 / **12** (buttons, pill, tiles) / **16** (media cards) / full (arch).
- **Height units:** svh, lvh and dvh throughout.

## 6. Typography

| Role | Their font | Size @1440 (@390) | Tracking / leading | Google pick |
|---|---|---|---|---|
| Display serif (headlines, menu links, flavour names) | Instrument Serif 400 + italic | hero 125 (50) · chapter 107 (40) · feature h2 100 (63) · h3 63–65 (31–38) · menu 36 · mosaic 240 (104) · prefooter 247 (67) | -0.02 to -0.03em, **line-height .8–.92** | **Instrument Serif** itself (OFL, on Google Fonts). Alternatives: Bodoni Moda, Playfair Display |
| Mono (nav, labels, captions, buttons, spec tables) | Martha 600, always uppercase | **12px** (10.15 on mobile), line-height 1.25 | normal | **Geist Mono 600** (or IBM Plex Mono 600 / JetBrains Mono 600) |
| Sans (product names, modal titles, gate question) | Helvetica Now Display 500 | 18 · ~46 · 36–45 | **-0.06em** large, -0.01em small; line-height .92–1 | **Inter Tight 500** |

**Scale tokens:**

| Token | Value |
|---|---|
| heading-4xl | clamp(7.5rem, 4.89rem + 13.04vw, 15rem) |
| 3xl | clamp(6rem, 3.74rem + 11.3vw, 12.5rem) |
| 2xl | clamp(5rem, 3.26rem + 8.7vw, 10rem) |
| xl | clamp(3.75rem, 2.88rem + 4.35vw, 6.25rem) |
| lg | clamp(3rem, 2.3rem + 3.48vw, 5rem) |
| md | clamp(2.25rem, 1.62rem + 3.15vw, 4.06rem) |
| sm | clamp(1.5rem, 1.15rem + 1.74vw, 2.5rem) |
| xs | clamp(1.25rem, .99rem + 1.3vw, 2rem) |
| body-xxl | clamp(2.25rem, 2.05rem + .98vw, 2.81rem) |
| body-md | clamp(1rem, .96rem + .22vw, 1.125rem) |
| mono-xs | clamp(.625rem, .58rem + .22vw, .75rem) |

**Patterns to take:**
- One italic word per headline.
- Two-tone headings: title in ink, subtitle at 40% ink.
- Tight leading, with each line in an overflow-clip mask carrying `padding-top: .2em; margin-bottom: -.2em`.

**Accessibility override:** do not set long body copy in 12px uppercase mono. Aspley's hours, menus and function details go in Inter Tight 16–18px, and mono is kept for labels, nav, captions and buttons.

## 7. Colour and texture

| Token | Value | Rendered with grain | Use |
|---|---|---|---|
| black | oklch(17.2% .012 260.7) = **#0d1015** | same | ink, buttons |
| white | #ffffff | **~#efefef** | paper |
| green-light | oklch(88.8% .018 164.9) = **#d0ded7** | **~#c3d0c9** | accent: pill, arch, prefooter and footer bands, contour fills, marquee |
| green-dark | **#929c99** | | rare |
| tile gradients | #f7f8f7, #a9e5a9, #ffe5cc, #ffcabd, #ffd1da | | product tiles and modals |

- **Section themes:** `.light`, `.dark` and `.accent` classes swap `--color-text`, `--color-background` and `--color-accent`.
- **Scrims:** black at 40% with 10px blur; the gate uses #000000b3.
- **Grain:** a fixed `.noise` layer at 200% size with a gaussian-noise PNG, **opacity .17, mix-blend multiply**, jittered with `1s steps(2) infinite` translates of ±1–2rem.
- **Vignettes:** 150px gradients to the section background colour at section edges.

## 8. Components

- **Filled CTA:**
  - Mono 600 12px uppercase, padding 18x27, radius 12, ink background with paper text, optional ↗ icon. Full-width variants push the icon to the far right.
  - Hover: a `::before` panel wipes up from the bottom (scaleY 0 to 1, origin bottom), the text inverts, and the button scales to .98, over ~0.4–0.6s spring.
  - The icon redraws on hover (paths draw out in 200ms inExpo, then back in over 500ms outExpo, staggered 20ms).
- **Other CTA variants:** outlined (1px border, radius 12, same wipe), transparent (wipe only), underlined (scaleX from the left).
- **Media card:** radius 16, clip-path rounded. Hover scales the card to .98 and the image to 1.1.
- **Spec table:** 1px rules with a 2-column mono key and value. Ideal for Aspley's hours, capacities and prices.
- **Video card:** radius 8, mono labels in 3 corners.
- **Newsletter:** joined square 1px boxes.
- **Language select:** outlined radius-12 row with a chevron.

## 9. Motion inventory and GSAP 3.13 rebuild

**Rule M0 (from BRIEF):** the reference hides content at scale 0 / opacity 0 until scroll observers fire. A blank mobile frame at y≈10500 shows the risk.
- Animate **from** hidden states only inside `gsap.matchMedia("(prefers-reduced-motion: no-preference)")`, with `once: true`, and keep the markup visible by default.
- Above-the-fold items play on load.
- Under reduced motion: no Lenis, final state only.

**Easing equivalents:**

| Reference | GSAP equivalent |
|---|---|
| outExpo | "expo.out" |
| spring (bounce .214, 700ms) | "back.out(1.25)" at .7s, or `CustomEase.create("spring","M0,0 C0.18,0.72 0.32,1.04 0.52,1.03 0.7,1.01 0.85,1 1,1")` |
| inOut(2) | "power1.inOut" |
| CSS cubic-bezier(.645,.045,.355,1) | ≈ "power2.inOut" |
| menu cubic-bezier(1,.005,.292,1) | `CustomEase.create("menu","M0,0 C1,0.005 0.292,1 1,1")` |

**Setup:**
```js
gsap.registerPlugin(ScrollTrigger, SplitText, CustomEase);
gsap.matchMedia().add("(prefers-reduced-motion: no-preference)", () => {
  const lenis = new Lenis({ lerp: 0.1 });
  lenis.on('scroll', ScrollTrigger.update);
  gsap.ticker.add(t => lenis.raf(t * 1000)); gsap.ticker.lagSmoothing(0);
  /* effects */
  return () => lenis.destroy();
});
```

| # | Effect | Reference | Rebuild |
|---|---|---|---|
| E1 | Line-mask text reveal | per line y100%, skewX10, scale1.04 → identity; 700ms spring; stagger 50–100ms | `SplitText.create(el,{type:"lines",mask:"lines"})` then `gsap.from(split.lines,{yPercent:100,skewX:10,scale:1.04,duration:.7,ease:"back.out(1.25)",stagger:.08,scrollTrigger:{trigger:el,start:"top 92%",once:true}})`. No opacity tween; the mask hides the text |
| E2 | Block tween (cards, tiles) | scale0, skew12/10, clip from bottom, round 16 → identity; 800ms expo.out; stagger 100 | `gsap.from(items,{scale:.6,skewX:12,skewY:10,clipPath:"inset(100% 0% 0% 0% round 16px)",duration:.8,ease:"expo.out",stagger:.1,scrollTrigger:{trigger:wrap,start:"top 85%",once:true}})`. Final clip-path lives in CSS |
| E3 | Hero intro | blur 15→0 (2.5s), media clip, then radius 16→0, spring lines | timeline: `.from(".hero-inner",{filter:"blur(15px)",duration:2.5,ease:"expo.out"},0)`, `.from(".hero-media",{clipPath:"inset(6% 4% 6% 4% round 16px)",scale:1.06,duration:1.2,ease:"expo.out"},0)`, `.from(lines,{yPercent:100,skewX:10,duration:.7,ease:"back.out(1.25)",stagger:.1},.3)`. Cap blur at 8px on mobile, or skip it |
| E4 | Story chapters (pinned) | 300vh per chapter, swap at boundaries, scrubbed drift and rotate | ScrollTrigger: `pin:".story-stage"`, `end:"+="+(n*200)+"%"`, `scrub:true`, `onUpdate: s => setChapter(Math.min(n-1, Math.floor(s.progress*n)))`. `setChapter` runs E1 show/hide (.7s expo.out). Scrubbed timeline: cards `rotate:±15, yPercent:±10`, tagline `y:"-5vh"`, all `ease:"none"`. **Desktop only** (`min-width:1000px`); stacked on phones |
| E5 | Contour parallax | per-path y (p×2−1)×range (400→200px); fade staggered 30ms from end | `gsap.to(paths,{y:i=>-(200+i*12),ease:"none",scrollTrigger:{trigger:".story",start:"top bottom",end:"bottom top",scrub:true}})`. Intro: `gsap.from(paths,{opacity:0,stagger:{each:.03,from:"end"},duration:1.5,ease:"power1.inOut"})`. Desktop only |
| E6 | Arch scale-in | scale .1 → 1, smoothed | `gsap.fromTo(".arch",{scale:.15},{scale:1,ease:"expo.out",scrollTrigger:{trigger:".triptych",start:"top bottom-=200",end:"top top+=20%",scrub:.5}})`. Inner quote uses E1 with `scrub:.25` |
| E7 | Pinned feature morph | scale .9→1, radius 80→0 on entry; 130lvh layer pans −30lvh; entry drift | CSS sticky media. `gsap.fromTo(".feature-media",{scale:.9,"--r":"80px"},{scale:1,"--r":"0px",ease:"power1.inOut",scrollTrigger:{trigger:".feature",start:"top bottom-=100",end:"top top",scrub:true}})` with `clip-path: inset(0 round var(--r))`. Pan: `gsap.to(".feature-media-inner",{yPercent:-23,ease:"none",scrollTrigger:{trigger:".feature",start:"top top",end:"bottom bottom",scrub:true}})`. Entries: E1 plus a small scrubbed y drift |
| E8 | Mosaic pop | photos scale0, skewX12 → identity, 525ms spring; title words y100%, stagger 50 | `gsap.from(photos,{scale:.4,skewX:12,duration:.55,ease:"back.out(1.4)",stagger:.08,scrollTrigger:{trigger:".mosaic",start:"top 75%",once:true}})`. Title: SplitText `type:"words", mask:"words"`. Photo parallax via `[data-speed]` |
| E9 | Word-split inline photo | lines clip in (.6s, 50ms stagger), words part, photo clip-reveals (.75rem radius) | `tl.from(lines,{yPercent:100,stagger:.05,duration:.6,ease:"power2.inOut"})`, `.from(".pf-left",{x:()=>photoW/2},"-=.15")`, `.from(".pf-right",{x:()=>-photoW/2},"<")`, `.from(".pf-photo",{clipPath:"inset(100% 0 0 0 round .75rem)",duration:.6},"<")`. Trigger once at "top 80%" |
| E10 | Velocity marquee | 1px/frame + 0.5×velocity, flips with direction, pauses off-screen | `const loop=gsap.to(track,{xPercent:-50,ease:"none",duration:30,repeat:-1})` and `ScrollTrigger.create({trigger:".rail",onUpdate:s=>gsap.to(loop,{timeScale:s.direction*(1+Math.abs(s.getVelocity())/400),duration:.3,overwrite:true})})`, then ease back to ±1. Clones `aria-hidden` |
| E11 | Header swap | wide header until 100px, then pill | `ScrollTrigger.create({start:100,onToggle:s=>header.classList.toggle("is-compact",s.isActive)})`. Pill enters y −120%→0 over .65s with the "menu" ease |
| E12 | Menu grow | height to natural, 650ms; items opacity/scale .9→1, stagger 15ms, delay 195ms | `gsap.to(panel,{height:"auto",duration:.65,ease:"menu"})` and `gsap.fromTo(items,{opacity:0,scale:.9},{opacity:1,scale:1,duration:.42,stagger:.015,delay:.2,ease:"menu"})`. `inert` when closed, focus trap, Esc closes |
| E13 | Button fill wipe | ::before scaleY 0→1 from bottom, scale .98, spring | CSS transitions with our own `linear()` spring. Press state: scale .97 for 100ms |
| E14 | Film grain | noise PNG, .17 opacity, multiply, steps(2) jitter | Inline SVG feTurbulence data URI (baseFrequency .8, 3 octaves) on a fixed `::after`, opacity .12–.17, multiply, steps(2) ±2rem jitter. Static under reduced motion |
| E15 | Generic parallax | `data-scroll-speed` −0.2 to .2 | `gsap.to(el,{yPercent:-100*speed,ease:"none",scrollTrigger:{trigger:el,start:"top bottom",end:"bottom top",scrub:true}})` |
| E16 | Modals | scrim fade .6s, scroll prevented | `<dialog>` with `showModal()`, `@starting-style` fade, `data-lenis-prevent` |

**three.js r128 is not justified.**

## 10. Mobile (390px): `03`, `04b`, `08-mobile-story-chapter`, `08b-mobile-bottle`

- **Header:** the pill is always on, full width minus 16px, 39px tall. The menu grows into a near-full-height panel with the same contents.
- **Hero:** a big centred logo, a 50px 3-line headline, and the film card and caption sharing the bottom row (mono at 10px).
- **Story:** no contours. The 40px tagline is followed by the two cards side by side, slightly rotated and overlapping (parallax influence .3), then the mono text. The chapters still pin on the reference. **Aspley stacks them unpinned.**
- **Feature:** a rounded-top media card, with entries stacked full width (38px serif, 10px mono).
- **Tiles:** 2-up, then 1-up.
- **Problem seen:** tiles were still invisible at y≈10500 on mobile.

## 11. Translating to Aspley Hotel

**Mood:** the reference's "quiet premium spirit" becomes "the bar after dark, on the hill".
- **Keep:** the restraint (two colours plus photos), the serif with an italic accent, mono labels, viewport-height spacing and grain.
- **Swap:** the cool tones for warm pub materials:
  - **Paper** #F3EEE6 (renders ~#E9E3D9 under grain)
  - **Ink** #14110F
  - **Accent:** brand red **#C8102E**, used where they use sage (pill, arch, prefooter band, marquee tint). On large white-text fills use a deeper **#9E0B23**. White on #C8102E is about 5.9:1.
  - **Secondary light band:** sandstone/verandah cream **#E4D6C1**, from the stone steps.

**Section plan (real facts only):**

1. **Hero:** `beer-pour`, a dark scrim, and "The pub / on the *hill* / since 1935."
   - Bottom-left: an "ON TAP" card (`taps-gold`, labels XXXX · STONE & WOOD · GREAT NORTHERN).
   - Bottom-right: "1247 GYMPIE ROAD, ASPLEY QLD 4034 · OPEN 7 DAYS" and "BOOK A TABLE".
2. **Story chapters** (pinned on desktop, stacked on phones). Draw **original concentric hill contour rings**: 14–18 irregular closed paths generated procedurally (noisy concentric ellipses), red-tinted fills at 4–10% opacity with 1px paper strokes. This is a literal "pub on the hill" motif and not their map.
   - **Chapter 1:** "Pull up a stool on the *hill*." Cards: `exterior-hill`, `sign-est-1935`. Mono: "ASPLEY HOTEL · EST 1935 · PART OF THE STAR HOTELS GROUP".
   - **Chapter 2:** "Bistro, bar, deck and the *big* screens." Cards: `bistro-bright`, `deck`. Mono: the bistro hours from BRIEF.
   - **Optional Chapter 3:** `sports-bar` and `bar-long`, with "WEDNESDAY TRIVIA 6:30PM · FREE · HOSTED BY QUESTIONABLE COMPANY".
3. **Arch** becomes a Queenslander doorway. Inside: "Est. 1935." or "Ninety-one years on Gympie Road." (1935 to 2026 is a fact). Flanking photos with captions: `verandah-exterior` ("THE FRONT VERANDAH") and `exterior-stone-steps` ("UP THE STONE STEPS TO THE BISTRO").
4. **Pinned feature becomes "The Pour".** There is one pour photo and no video, so **do not fake an image sequence**.
   - **A (recommended):** a sticky 100lvh stage stacking `bar-taps`, `taps-gold`, `beer-pour` and `bar-backbar`.
     - One scrubbed timeline over ~300vh.
     - The stage enters with E7 (scale .9→1, radius 80→0).
     - Each layer slowly pushes in (scale 1→1.12, `ease:"none"`).
     - The next layer clip-wipes up from the bottom (`inset(100% 0 0 0)` → `inset(0)`) at 25%, 50% and 75% progress.
     - Four alternating entries:
       - THE TAPS: XXXX Gold, Stone & Wood, Great Northern (only the handles visible in `taps-gold`).
       - THE POUR.
       - THE BAR: cocktails from the chalkboard.
       - THE BOTTLE SHOP: drive-through, Sun–Thu 10am–11pm, Fri–Sat 10am–midnight.
   - **B (pair with A, or use alone on phones):** an inline SVG pint that fills with scroll.
     - A glass-interior `clipPath` holds an amber rect (#E2A33B to #C77D1A) whose `y` scrubs from the bottom to 88% full.
     - A foam band (#F6EBD3, wavy top) rides on the liquid and thickens over the last 15%.
     - 8–12 bubbles rise on a loop (2–4s, random x), paused off-screen.
     - Reduced motion: render the glass full.
   - **C (lightest):** pin `beer-pour` and scrub from scale 1 to 1.6 into the tap and glass, with a 3–4deg rotate and brightness .7→1.
   - Never present stills as video.
5. **Catalog becomes the cocktail list.**
   - Heading: "Cocktails" in ink, then "From the chalkboard / at the main bar." at 40% ink.
   - 12 tiles with CSS radial gradients and no images. Each shows the name in Inter Tight 500 with a factual serif line ("Cocktail"). **Do not invent** ingredients, prices or taglines; the two known one-liners have no recorded drink.
   - One wide photo tile, `bar-cocktails` (the chalkboard mural), plays the role of their video tile.
   - Gradients:

     | Cocktail | Gradient |
     |---|---|
     | Margarita | #D9F0A3 → #F7F3D6 |
     | Espresso Martini | #C8A27A → #3B2A20 |
     | Flavoured Mojito | #F3B6C8 → #D7F0DE |
     | Pina Colada | #FFF1C9 → #F7E3A1 |
     | Pornstar Martini | #FFD27A → #F59E5B |
     | Cosmopolitan | #F7A1B5 → #FCD5DC |
     | Fruit Tingle | #8FD3F4 → #F7B2E0 |
     | Aperol Spritz | #FF9A4D → #FFD8B0 |
     | Mojito | #CFEBC0 → #F3FAEE |
     | French Martini | #E9A3C0 → #FBE3EC |
     | Long Island Iced Tea | #D9A066 → #F5E1C8 |
     | Whiskey Sour | #E8C07A → #FFF0CF |

   - Tile click opens the spec-table modal with facts only (WHERE: MAIN BAR · MENU: COCKTAIL LIST · MEMBERS: JOIN STAR REWARDS), or links to the cocktail menu.
   - Reuse the catalog pattern for:
     - **Bistro:** `dish-pie-pint` and `dish-wings`; members pay $1 less on every dish; kids meals $13.95 including soft drink and ice cream; coffee and cake $13.95 ($12.95 members).
     - **Functions,** as a spec table: HERB GARDEN 80 SEATED / 100 STANDING · TERRACE & HERB GARDEN 60 SEATED · TERRACE 40 SEATED · PLATTERS $100–$145 · MIN SPEND $1,000 MON–THU, $2,000 FRI–SUN, OR $250 ROOM HIRE · $100 DEPOSIT.
6. **Mosaic becomes What's On.**
   - A giant 3-line serif title, with 5 popping photos: `sports-bar-2`, `tab`, `bar-long`, `deck-2`, `bistro-round-table`.
   - Spec list:
     - WED · TRIVIA 6:30PM, FREE, HOSTED BY QUESTIONABLE COMPANY
     - FRI · JAG THE JOKER, ONE ENTRY PER DRINK 3:30–6:30PM, JACKPOT GROWS $100 A WEEK
     - SAT · MEMBERS JACKPOT DRAW, STARTS $400, MUST GO BY $4,000
     - DAILY · SPORT ON THE SPORTS BAR SCREENS
   - A Melbourne Cup card: TUE 3 NOV 2026 · 2-COURSE LUNCH $55 · BOOKINGS ESSENTIAL.
7. **Prefooter:** "The Pub [exterior-hill photo] on the Hill" on the red or sandstone band. This is the strongest single pattern to borrow.
8. **Footer:**
   - A red or sandstone block with the SVG badge (EST 1935 · ASPLEY HOTEL · PUB ON THE HILL · GAMING BAR FOOD BOTTLESHOP).
   - Star Rewards sign-up in the joined-box form, showing "mock only" on submit.
   - Hours as a mono spec table, and a visible tel link "(07) 3263 4040".
   - A velocity marquee "Pub on the hill · Est 1935 ·" with a black "BOOK A TABLE ↗" over it.
   - The legal bar carries "Gamble responsibly. Gambling Help 1800 858 858".
9. **Gaming:** a quiet dark band using `gaming-glow`, "EVERY DAY 10AM TO 4AM", and the responsible-gambling line. No celebratory motion.

**Fonts:** Instrument Serif 400 + italic, Inter Tight 500/600 and Geist Mono 600 from Google Fonts, with fallbacks Georgia/serif, system-ui/sans-serif and ui-monospace/monospace.

**Do not borrow:** their flared-serif stacked wordmark, the circle-A mark, the topographic paths, sage as the accent, the age gate as a blocker, long uppercase-mono paragraphs, or hidden-until-scrolled content.
