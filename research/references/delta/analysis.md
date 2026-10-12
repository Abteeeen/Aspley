# Reference study: deltacafes.com/en

Captured 12 Oct 2026 with headless Chromium (Playwright) at 1440x900 and 390x844, cookies accepted. Values come from the live DOM, computed styles, the Nuxt CSS bundles and the minified GSAP code. Screenshots are in `screenshots/` (index at the end).

Built by Büro (Nuxt 3, Sanity CMS, Vercel image proxy).

**Motion stack:**
- **GSAP 3.15:** ScrollTrigger, Observer, Draggable, InertiaPlugin, Flip and CustomEase are present. ScrollSmoother is in the bundle but doesn't drive the scroll.
- **Lenis 1.3.1:** `html.lenis`, default `lerp: 0.1`.
- **Rive:** canvas animations for the sound icon, the sustainability line illustration and the coffee-cycle diagram.
- **Not used:** SplitText, Swiper, Barba, three.js, Lottie, Webflow.

**Capture caveat:** the hero, mega-menu cards and "journey" cards are H.264 MP4s, which the headless browser can't decode (MediaError 4), so they show as flat dark brown. In a real browser they are looping videos under a 30% black overlay.

**Brand rule (BRIEF.md):** learn the structure, rhythm, type system and motion. Do not copy the Delta triangle, its red/yellow logo colours, copy, photos, Rive files or the "house of coffee" line.

## The look in one paragraph

The site is dark espresso brown (body `#35221a`, hero darkened to `#1d120c`) with warm creme type (`#e3c1ad`). Full-bleed light "paper" sections (`#f7e5d4` with a faint tiled texture) and one deep forest band (`#142215`) break it up.

Two type voices do the work:
- a light, slightly flared variable sans (weight 300, tight tracking) for calm editorial headlines and body;
- a bold condensed uppercase grotesk for poster-like titles, with tiny connector words (THE, OF, FROM, TO) raised at 40% size between the huge words.

Everything floats: the nav is a glass pill with a notch for the centred logo, the hero has a glass bento of link cards, and the footer is a glass card that slides over a sticky full-screen CTA. Cards have 12px corners; pills are fully round. Motion is slow:
- expo-out easing on interface elements;
- scrubbed parallax;
- a marquee that speeds up with scroll velocity;
- a 3D scatter of archive photos;
- a product orbit that rotates with scroll.

## Header

Screenshots: `home-first-screen-desktop.jpg`, `header-nav-hover.jpg`, `megamenu-delta-cafes.jpg`, `megamenu-coffee-culture.jpg`, `header-language-dropdown.jpg`, `scroll-0..9.jpg`, `intro-1..3.jpg`.

### Structure (desktop, >1290px)

Three separate fixed objects on one line:

```
[ (~) ]   [ DELTA CAFÉS ⌄  COFFEE CULTURE ⌄  PRODUCTS  ◢LOGO◣  BUSINESS SOLUTIONS  SUSTAINABILITY  JOURNAL ]   [ 🌐 EN ⌄ ]
64x46 sound pill        1116px pill, 94px box, 46px visible band, 3 + logo + 3                           90x46 language pill
```

**Container**
- `position:fixed; top:6px; left:0; right:0; margin:auto; z-index:13`
- `width:clamp(800px, 705.9px + 24.12vw, 1116px); max-width:calc(100% - var(--grid-margin)); height:94px`
- At 1440 it measures 1053x94 at x=193.

**Visible band**
- Two half-pills, 46px tall (y 24→70 inside the 94px box), radius 23.
- They meet at a triangular notch around the logo: an SVG `clipPath` (objectBoundingBox) on a separate background layer.

**Glass**
- `background:#6e6e6ea6; mix-blend-mode:multiply; backdrop-filter:blur(24px)`.
- Over dark sections it reads near-black (`#130b08` sampled); over paper sections it reads warm grey (`scroll-4/5/6.jpg`).
- Safari fallback: `#160f0766` with no blend.

**Logo:** centred, absolute, `aspect-ratio:1; height:100%`. The mark is about 80px wide and overhangs the band top and bottom. It links home.

**Nav items**
- 3 left + 3 right. Delta Season 12px (clamp 11→12), wght 650 with SERF 0, uppercase, letter-spacing .06em, colour `#fcf3ed`.
- Gap `max(21.2px, 21.2px + .64vw)` (about 30px at 1440); 20px padding inside the pill.
- Each item has an invisible 20px hit-area halo (`:before` inset -20px).
- "Delta Cafés" and "Coffee Culture" are `<button>`s with a 10px chevron (gap 6px) that open the mega menu. The others are links.

**Hover indicator**
- One shared pill slides to the hovered item: 36px tall, radius 110.
- `background:#fcf3ed80; mix-blend-mode:soft-light`; position set by CSS vars `--xOffset`, `--width`, `--opacity`.
- `transition: transform/width/opacity .5s cubic-bezier(.77,0,.175,1)`.

**Active-page indicator**
- Same geometry with `#5d5650cc` in hard-light, plus a 0.8px gradient hairline ring (creme → grey → creme).
- Visible on "PRODUCTS" in `inner-products-desktop.jpg`.

**Side pills**
- Left: 64x46, radius 32, `rgba(10,10,10,.7)` + blur 4, fixed at `left:var(--grid-margin); top:30px`. Rive sound-wave icon toggling background music.
- Right: 90x46 with globe, "EN" and chevron. Opens a dropdown (radius 16, items padded 14/12/14/16) with a sliding active highlight and a check badge that scales and rotates in.

**Search:** none.

**Scroll behaviour**
- Always visible. It never hides and never changes size or colour (checked at scrollY 0, 203, 678, 1579, 3205 and after scrolling up).
- Legibility comes from the glass plus a fixed viewport gradient: `#120a06` → transparent, 140–220px at the top and 140–240px at the bottom, multiply blend, fading in (`opacity 1s ease-out`) once scrolled.
- It is glass from first paint, over the hero video. There is no transparent-to-solid switch.

### Intro (first load)

1. A full-screen brown cover with a small outlined logo in the centre.
2. "The house" blurs in on the left, then "of *coffee*" on the right: Mix 18–24px, x ±5px, blur → 0, opacity → 1.
3. The cover's SVG clip-path has a logo-shaped hole that scales up (about 120x), revealing the page through the logo. At the same time the rest of the cover morphs into the nav band, and the logo fills from outline to colour (`fill .75s cubic-bezier(.77,0,.175,1)`).
4. The nav lists slide in: left from x:-40, right from x:40, opacity 0→1, 0.8–1s, power4.out.

Timeline labels from the code:
- First visit: `{enter:0, leftIntroEnter:1, rightIntroEnter:2, translate:4, logoMorph:4, bgMorph:4, itemsEnter:4.5}`, defaults power4.inOut, duration 1 (about 5.5s).
- Return visit: `{logoEnter:0, translate:.7, logoMorph:.7, itemsEnter:1.1}`, duration .9.

### Mega menu

**Panel**
- Same width as the pill (1053 at 1440), at top 100px, **292px tall**, radius 19.
- Same glass recipe, on a separate background layer.

**Open:** opacity plus `translateY(-10px) scaleY(.5)` → none, `transform-origin:top`, `.5s cubic-bezier(.19,1,.22,1)`.

**Top row** (padding 25/25/22)
- Left: group title in Trade Gothic Bold Condensed, uppercase, about 42px, two lines ("DELTA / CAFÉS"), 134px wide.
- Right: 3 cards with a 24px gap. Each is `clamp(192–252px) x clamp(128–162px)` (240x155 at 1440), radius 12, a looping muted video.
- Captions below each card: 16px, weight 550, gap 12px, centred.

**Switching groups:** the title enters from x:-10 and the cards from x:+10, opacity 0→1, .4s expo-out with a .1s delay.

**Card hover:** media `scale(1.05)` over .75s expo-out; caption moves `translateY(4px)`. The current page's card is shown at 50% and isn't clickable.

**Bottom row**
- 52px tall, under a double hairline (1px black at 20% + 1px white at 6%).
- 4 social icons (26px, 70% opacity) on the left; "© 2026" in 12px at 70% on the right.
- Fades up from y:10 with a .25s delay.

**Page behind:** click-outside layer with `backdrop-filter:blur(8px)` and `rgba(17,11,8,.8)`, .25s.

At ≤1290px the pill is hidden and the mobile header is used, tablets included.

## Footer

Screenshots: `prefooter-desktop.jpg`, `footer-reveal-mid-desktop.jpg`, `footer-desktop.jpg`, `footer-mobile*.jpg`, and the bottom of `home-full-desktop.jpg` (sticky seams).

One `<footer>` with two layers.

### Layer 1: pre-footer (sticky CTA)
- `position:sticky; top:0; height:100vh`. Full-bleed media with a 25% black overlay.
- Centred stack, gap about 32px:
  - small uppercase label (Mix 14px, weight 580);
  - poster title in Trade Gothic Bold Condensed, `clamp(68–120px)`, line-height .85–.94, tracking -.06em, small "THE" at `clamp(38–54px)` raised -.1em;
  - split pill CTA.
- A brown-900 duplicate of the title fades from 0 to .2 as the card covers it, darkening the title under the glass.

### Layer 2: footer card
- Wrapper padding `0 var(--grid-margin)`. The card is full content width (1397 at 1440).
- Padding `clamp(32–34px) clamp(28–34px)`, radius 8, `rgb(20 14 7/.4)` + `backdrop-filter:blur(12px)`. The pre-footer title shows blurred through it.
- Text `#f8eae0`.

**Top row, left column** (6 of 32 cols, about 244px): logo 65x65 in creme.

**Top row, centre column**
- Grows to fill; gap `clamp(18–64px)`, padding-top 52px.
- Two main groups, each with an uppercase Trade Gothic 16px title and Season 14px/550 links (3px row padding). Sub-lists are indented 12px (Coffee Cycle → Origins, Blend, Roast, Tasting).
- Then a column of 6 uppercase Trade Gothic 16px single links, gap 16px.

**Top row, right column** (6 cols): pairs of a tiny uppercase Trade Gothic 12px label (EMAIL, CUSTOMER SUPPORT, TECHNICAL SUPPORT) and a large Mix `clamp(18–24px)` weight 420 value (tracking -.02em), plus a 14px footnote.

**Bottom row:** socials (26px, gap 12) under the logo; a secondary list (store, recruitment, press) in Season 14px under the centre column.

**Under-footer** (below the card)
- Three columns 25/50/25, uppercase Trade Gothic 12px, the whole row at opacity .3.
- © on the left, 5 legal links centred (gap 16), "Made by Büro" on the right.
- A black gradient fades the bottom edge.

There is no newsletter and no giant wordmark. Every footer link hovers to `opacity:.6; transform:translate(2px) scale(.99)` over `.5s cubic-bezier(.165,.84,.44,1)`.

### Footer motion (exact)
```js
gsap.fromTo(".pre-footer .background-container",{yPercent:-20,scale:1.1},{yPercent:0,scale:1,ease:"none",scrollTrigger:{trigger:preFooter,start:"top bottom",end:"bottom bottom",scrub:true}});
gsap.fromTo(".inner",{y:200,scale:1.1},{y:0,scale:1,ease:"none",scrollTrigger:{trigger:footer,start:"top bottom",end:"bottom bottom",scrub:true}}); // mobile: trigger .inner, end "top center"
gsap.fromTo(".under-footer",{y:-200},{y:0,ease:"none",scrollTrigger:{trigger:footer,start:"top bottom",end:"bottom bottom",scrub:true}});
gsap.fromTo(".pre-footer .content-container",{scale:1},{scale:.94,ease:"none",scrollTrigger:{trigger:footer,start:"top top",end:"bottom bottom",scrub:true}});
gsap.fromTo([".upper-title-overlay",".title-overlay"],{opacity:0},{opacity:.2,ease:"none",scrollTrigger:{trigger:footer,start:"top top",end:"bottom bottom",scrub:true}});
```
Needs `footer{overflow:clip}` and a sticky pre-footer.

### Mobile footer
- Single column: logo left and socials right on one row.
- Main groups become accordions: title row with a chevron and a double hairline (`#eecdb612` over `#0000004d`). Height animates over .75s expo-out; the chevron rotates 180°.
- Then the single links, secondary and legal links, and contacts. The under-footer row is at full opacity.

## Layout and grid
- **Columns:** 32 on desktop, 14 on mobile.
- **Gap and margin:** `--grid-gap` = `--grid-margin` = `clamp(12px, 8.412px + .92vw, 24px)` (about 21px at 1440, 12px at 390). Above 2000px everything switches to vw units.
- **Column width:** `(100vw - 2*grid-padding) * N / cols - gap`.
- **Breakpoints:** 410, 743, 1023, 1290, 2000.
- **Width:** content runs nearly edge to edge (20px hero padding). There is no max-width container; centred blocks are simply centred in the full width.
- **Home rhythm:** hero 95vh + 250px marquee → history scatter ~1490 → coffee cycle ~1090 → D de Delta ≥100vh → culture ~820 → quiz ~1940 → journal ~760 → sustainability ~1440 → footer (100vh + ~550).
- **Section padding:** generous, `clamp(82–114px)` on top; about 100px around centred titles.
- **Section colours:** dark, paper, forest, dark, with no borders between them.

## Typography

### Families
- **Sans (UI, body, nav):** delta-season, SERF 0, weights 400/510/550/650/750. Body text runs at 550.
  - Google: **Hanken Grotesk** (variable, so 550 and 650 work) or Instrument Sans.
- **Mix (editorial headlines, contact values):** same font with SERF 50 (half-serif flare), weights 300/420/580.
  - Google: Hanken Grotesk 300 for the tone. For true serif moments (the history page's uppercase "60+ YEARS OF STORIES", italic `<em>`), use **Newsreader** 300 / 300 italic.
- **Condensed display:** Trade Gothic Bold Condensed No.20 (700), plus Condensed Medium (500) for connector words.
  - Always uppercase, tracking -.03 to -.07em, line-height .8–1. Uses `padding-top:32px; margin-top:-32px` to avoid accent clipping.
  - Google: **Oswald** 600/700 (400/500 for connectors) at -.01 to -.02em. Alternatives: Barlow Condensed 700, Antonio 700.

### Scale (computed at 1440)

| Token | Font | Size | Weight | Tracking | LH |
|---|---|---|---|---|---|
| Hero H1 | Mix | clamp(42, 28.9+3.36vw, 86) = 77px (42 at 390) | 300 | -.02em | 1.0 |
| Section headline | Mix | clamp(40…64) = 59px | 300 | -.03em | 1.0 |
| Poster title-1 | TG 700 | clamp(68…140) | 700 | -.06em | .8 |
| Poster title-2 | TG 700 | clamp(68…120) = 110px | 700 | -.06em | .85–.94 |
| Connector em | TG 500 | clamp(38…54) | 500 | -.06em | raised -.1em |
| Mega-menu title | TG 700 | clamp(36…44) | 700 | -.025em | 1 |
| Mobile menu items | TG 700 | 18–20 | 700 | -.03em | 1 |
| Footer group title | TG 700 | 16 | 700 | -.03em | 1 |
| Labels/legal | TG 700 | 12 | 700 | -.01em | 1.3 |
| Lead body | Sans | clamp(16…20) = 19px | 550 | 0 | 1.25 |
| Body | Sans | 16–18 | 550 | 0 | 1.2 |
| Small/buttons | Sans | 14 | 550 | .03em | 1.2 |
| Nav | Sans | 11–12 | 650 | .06em upper | 1.2 |
| Contact values | Mix | 18–24 | 420 | -.02em | 1.2 |

Descriptions are short-measure blocks of about 350–510px, centred under titles.

## Colour

| Name (Delta token) | Hex | Use |
|---|---|---|
| brown-500 | `#35221a` | Body, pre-footer, icon circles |
| brown-600 | `#2b1b14` | Body bg var, history, cycle |
| brown-700 / 800 / 900 | `#221611` / `#1a100c` / `#110b08` | Deeper panels; menu overlay at 80% |
| Hero (sampled) | `#1d120c` | Brown under a 30% black overlay |
| creme-400 | `#e3c1ad` | Hero text, CTA fill on dark |
| creme-300 | `#edd1bd` | Section text on dark, CTA fill |
| creme-100 / 50 | `#f8eae0` / `#fcf3ed` | Footer text, nav |
| creme-700 | `#be9a83` | Muted text on dark |
| aged-oak-400 | `#74695e` | Muted text on light |
| Paper (sampled) | `#f7e5d4` | Light sections, with a tile at 50% size |
| moss-700 | `#142115` | Green band |
| leaf-100 | `#e3ffc4` | Headline and CTA on the green band |
| Glass | `#6e6e6ea6` multiply | Nav, mega menu, bento |
| Footer glass | `#140e07` at 40% + blur 12 | Footer card |
| Yellow | `#ffd300` | Quiz CTA chip only |
| Red | `#e70025` / `#9e0212` | Logo only |

**Rule:** colour lives in the photography and products. The interface chrome is brown, creme and glass, with one saturated accent per page.

## Components

### Split pill button (`button-rest-vs-hover.jpg`)
- Two pieces side by side:
  - a label pill: creme fill, brown Season 14px/550, padding 0 24px;
  - an icon circle: 62x52, dark brown fill, creme 14px arrow.
- Height 52px (large) or `clamp(38–44px)` (medium); radius 60.
- **Rest:** the label background is `calc(100% - 62px)` wide, so the icon reads as a separate circle.
- **Hover:** the background grows to 100% and the icon shrinks inside it, making one pill with a dark arrow chip at the right end.
  - Icon: `cubic-bezier(.68,-.55,.265,1.55)` .45s. Background: `.325s cubic-bezier(.86,0,.07,1)`.
  - A ghost arrow slides through.
- **Press:** `scale:.98`, .25s.
- Colours come from per-section CSS vars.

### Hero bento
Four glass cells on a 40-col sub-grid, gap about 10px, at the hero's bottom right (x 1024–1420, y 385–737):
1. Pill link "Products →", 173x43.
2. Image card 214x197, radius 12, 6px padding, caption bottom-left.
3. Product card 173x146, radius 12, padding 16.
4. Wide card 396x146: image left, title + 2-line muted description, arrow top-right.

Each glass background is its own absolutely positioned layer (`#6e6e6ea6` multiply + blur 12) driven by CSS vars (`--bg-top/left/width/height`, `--col-start/span`). When the slide changes, the backgrounds morph to the new layout and the contents cross-fade.

### Hero thumbs
- 3 items, each about 250px: a 102x62 thumbnail (radius 4), a "01" number, and a 2-line title in Season 12px/550.
- A 1px track on top (`creme-400` at 30%) with a progress fill animating `scaleX 0→1` from the left. A long 1px line continues to the right edge.
- Hover: thumbnail scales to 1.1, title moves x+4px, .5s `cubic-bezier(.215,.61,.355,1)`.

### Infinite marquee (under the hero)
Cards 263x250, gap 12, each a saturated colour block with a product. The list is doubled for a seamless loop and drifts left at about 72px/s. It is draggable and speeds up with scroll velocity.

### Font-pairing (poster) title
Centred wrapping rows of big condensed words with small connector words between them ("THE JOURNEY OF COFFEE", "POSITIVE IMPACT / FROM THE ORIGIN TO / THE CUP"). Word gap .15em. Usually preceded by a small uppercase label, followed by a 2–4 line centred description and a split CTA.

### Archive photo scatter (history section)
- A centred title, CTA and description, surrounded by about 14 tilted archive photos, ads and objects.
- Behind them, a faint circle and connecting curves (`stroke #deb89f` at 16%).
- A dark tooltip pill (flag + year + text) appears on hover.
- `perspective:1500px` with `preserve-3d`.

### Journal card
Image (no radius on small cards), title Season 19px/550, an outline tag pill, and the date. Three across in a draggable row, with an intro column on the left (headline, body, Explore button).

### Linked entries with vertical rules (culture section)
A 1px left rule, a Mix 32px title, an Explore split button, and an image (radius 4) with a muted 14px description.

### Images
Warm documentary photography. Radius 12 on UI cards, 4 on thumbnails. Overlays: 30% black on the hero, 25% on the pre-footer. Large journal cards get a bottom gradient of `#110b08` from 0 to 30%.

## Motion

### Easing vocabulary

| Curve | Used for | GSAP |
|---|---|---|
| `(.19,1,.22,1)` | Most interface transitions: menus, dropdowns, cards, accordions | `expo.out` |
| `(.77,0,.175,1)` | Hover slide, logo fill | `power4.inOut` |
| `(.165,.84,.44,1)` | Link hover | `power3.out` |
| `(.68,-.55,.265,1.55)` | Button icon | `back.inOut(1.7)` |

All scroll-linked effects use `ease:"none"` with scrub. Typical durations: hover .5s, menu open .5s, card scale .75s, entrances .8–1s, slow pulses 4–6s.

### Rebuilding with GSAP 3.13, ScrollTrigger, SplitText and Lenis 1.1.13

Put everything inside `gsap.matchMedia()`. The reduced-motion branch renders the final state with no Lenis. Per the brief, scroll reveals are movement-only: no content waits at opacity 0.

```js
gsap.registerPlugin(ScrollTrigger, SplitText);
gsap.matchMedia().add("(prefers-reduced-motion: no-preference)", () => {
  const lenis = new Lenis({lerp:0.1, smoothWheel:true});
  lenis.on("scroll", ScrollTrigger.update);
  gsap.ticker.add(t => lenis.raf(t*1000));
  gsap.ticker.lagSmoothing(0);
  /* effects */
  return () => lenis.destroy();
});
```

1. **Intro reveal (load only, ≤1.8s).** Skip on reduced motion and when `sessionStorage` says it has been seen.
   - Fixed cover `div` with `mask: radial-gradient(circle at 50% 50%, transparent var(--r), #000 calc(var(--r) + 1px))`. A circle suits a round pub badge.
   - Badge: scale .8→1, rotation 10→0, power4.inOut, .75s.
   - Two flanking words: x ∓5, blur(2px)→0, autoAlpha, staggered .3s.
   - `--r: 0→150vmax`, power4.inOut, 1s. Then hide the cover.
   - Nav lists from x:-40 / x:40 with opacity, power4.out, .8s.
   - The page underneath is fully rendered throughout.
2. **Glass header with notch (CSS).**
   - Two half-pills (radius 23, `rgb(110 110 110/.65)` multiply + blur 24) stopping about 40px short of centre, with an ~84px round badge overlapping them. Alternatively one band with a `clip-path: path()` notch.
   - Add the top viewport gradient (`#120a06`→transparent, 160px, multiply), toggled by `ScrollTrigger.create({start:80, onToggle:s=>grad.classList.toggle('on',s.isActive)})`.
3. **Sliding hover pill (CSS).**
   - On pointerenter, set `--x` / `--w` from the item's offsetLeft / offsetWidth and `--o:1`; on leaving the list, `--o:0`.
   - `transition: transform/width/opacity .5s cubic-bezier(.77,0,.175,1)`.
   - Make a second copy for the active section, updated by ScrollTrigger.
4. **Mega menu (CSS classes).**
   - Panel: `translateY(-10px) scaleY(.5)`→none, .5s expo-out.
   - Title from x:-10 and cards from x:10, .1s delay; bottom row from y:10, .25s delay; overlay blur 8px with 80% dark.
   - Hover intent of about 120ms; also opens on click and keyboard (`aria-expanded`, Escape to close).
   - Card hover: scale 1.05 over .75s.
5. **Hero slideshow.**
   - Outgoing title: y -40 and autoAlpha 0 (power2.inOut, .75s). Incoming from y 20.
   - Active media eases scale 1.05→1.
   - The thumb progress bar (`scaleX 0→1, ease:"none", duration:7`) drives autoplay. Delta ties it to video length (9–15s); 6–7s suits stills.
   - Pause on hover/focus and while the hero is offscreen.
   - Bento morph: `Flip.getState()` → swap layout → `Flip.from(state, {duration:.75, ease:"power4.inOut", absolute:true})`. Or just cross-fade the card contents.
6. **Hero H1 on load.** `SplitText.create(h1, {type:"lines", mask:"lines"})`, then from yPercent 100, 1s, power4.out, stagger .08, delay .2. Load only; revert on complete.
7. **Marquee that reacts to scroll speed.**
   - Base loop: `const tl = gsap.to(track, {xPercent:-50, ease:"none", duration:40, repeat:-1})` (list doubled).
   - On Lenis scroll: `gsap.to(tl, {timeScale: 1 + Math.abs(lenis.velocity)*.1, duration:1.5, ease:"expo.out", overwrite:true})`, then ease back to 1. Delta uses the signed velocity, so it reverses when you scroll up.
   - Skip Draggable (it isn't on the brief's CDN list); a pointer drag that nudges `tl.progress()` is enough.
8. **Text enter.**
   - Delta: yPercent 10→0 and autoAlpha 0→1, stagger .2, delay .25, 1s, power4.inOut, start "top bottom".
   - Rebuild without the opacity change: `gsap.from(blocks, {yPercent:10, duration:1, ease:"power4.inOut", stagger:.2, scrollTrigger:{trigger:section, start:"top 90%", once:true}})`.
9. **Blur-in media.**
   - Delta: `{y:20, scale:.99, blur 2px, opacity 0}` → 1, 2s, power1.out.
   - Rebuild keeping opacity at 1: from `{y:20, scale:.99, filter:"blur(2px)"}`, 1.2s.
10. **Generic parallax.**
    - Delta's helper: `fromTo(el, {yPercent:0}, {yPercent:-100*friction, ease:"none", scrollTrigger:{start:"top bottom", end:"bottom top", scrub:1}})`, toggling will-change on enter/leave.
    - Use friction .1–.3 for floating photos; for section backgrounds, yPercent -20→0 with scale 1.1→1.
11. **Archive scatter.**
    - Photos placed absolutely around a centred text block over an SVG circle and curves.
    - Each photo: rotation between −8° and 8°, a scrubbed yPercent parallax with friction .1–.35, and ±6° rotationY inside a `perspective:1500px` parent.
    - Hover: scale 1.04, raise z-index, show a dark tooltip pill.
    - Draw the circle by scrubbing `strokeDashoffset`.
12. **Photo rows that move with scroll (D de Delta).**
    - Two rows of portraits (`clamp(104–220) x clamp(150–316)`, radius 12) above and below a centred title.
    - Row 1: `fromTo(xPercent 0→-35, scrub)` from "top bottom" to "bottom top". Row 2 runs the opposite way. No pinning.
13. **Orbit ring (quiz).**
    - Items sit on a large rotating ring and counter-rotate to stay upright, each with ±10° of tilt.
    - Scrub the ring's rotation (about 200° across the section) and set each child to `-ring + tilt`.
    - The background disc breathes: scale .935 over 4s power1.out, back to 1 over 6s power1.in.
    - Phones: a static 6-item grid.
14. **Footer reveal:** the five tweens in the Footer section above.
15. **Buttons and links:** CSS only, as in Components.
16. **Not worth copying:** background music and the sound toggle, Rive illustrations (use inline SVG line art with a scrubbed dash offset instead), and the logo-mask page transition.

## Mobile behaviour

Screenshots: `home-first-screen-mobile.jpg`, `mobile-menu-open.jpg`, `mobile-menu-submenu.jpg`, `mobile-scrolled.jpg`, `footer-mobile*.jpg`.

**Header (≤1290px)**
- A fixed row 104–120px tall with a 12px inset.
- Left: language pill (glass at 70%, radius 32, gradient hairline border).
- Centre: logo, 72–80px.
- Right: "MENU" pill, 12px weight 650 uppercase, `rgba(10,10,10,.7)` + blur 7, hairline border.
- Stays put while scrolling.

**Menu sheet**
- Inset 12px, `rgba(10,10,10,.4)` + blur 8, radius 16. Animates scale .8→1 and y -10→0 over .5s expo-out; its height animates to fit the content.
- "MENU" becomes "CLOSE"; the logo switches to an outline version.
- Rows: 52px tall, radius 40, `#5a5a5a33`, with a 1px gradient hairline (white 20%→0 at 170°). Trade Gothic 18–20px uppercase labels, 6px gap. Group rows have a chevron. Rows stagger in from x:10.

**Sub-level:** slides in with a back arrow and a 28–32px title. Rows have a 115px thumbnail (radius 8) and a label on dark tiles.

**Menu footer:** round sound toggle with "SOM: OFF" and the © line.

**Hero:** H1 42px, the CTA, then the thumbs as a draggable row with two visible, and the marquee below. The bento is hidden.

**No sticky bottom bar** (Aspley needs one).

## Translating to Aspley Hotel

Keep Delta's header and footer structure and overall feel: dark warm base, glass chrome, a light editorial headline paired with condensed poster titles, and slow scroll-linked motion. Facts come from `content-and-language.md` and BRIEF.md; write all copy with the `copywriting` skill.

### Palette: from espresso to "pub at night"

| Role | Delta | Aspley | Notes |
|---|---|---|---|
| Base | `#35221a` | `#1C1714` "stout" | Hero under a 30% black overlay |
| Dark alt | `#2b1b14` | `#251D18` "porter" | |
| Text on dark | `#e3c1ad` | `#F1E4D1` "beer head" | About 14:1 on stout |
| Muted | `#be9a83` | `#B9A48C` | |
| Paper | `#f7e5d4` | `#F6EFE4` "verandah white" | Optional 2–3% weatherboard texture; text `#2A201B` |
| Band | `#142115` forest | `#16233A` "bistro navy" | From the bistro walls |
| Second band (optional) | – | `#7A3B25` "terracotta roof" | |
| Brand red | logo only | `#C8102E` | Badge and the Book CTA, white text 5.9:1; never body text on dark |
| Accent (once per page) | `#ffd300` | `#E8B23A` "XXXX gold" | Star Rewards chip only |
| Glass | as Delta | same recipe | |
| Footer card | `#140e07` at 40% | `#120E0B` at 45% + blur 12 | |

### Fonts
- Hanken Grotesk: 300 at -.02em for headlines; 550/650 for body and nav.
- Oswald: 600/700 for poster titles, with 400/500 for connector words.
- Optional: Newsreader 300 italic for one heritage line ("est. 1935").

### Header (desktop ≥1200px)

Delta switches at 1290px; 8 items need about 1180px.

```
[ ☎ (07) 3263 4040 ]  [ EAT ⌄  DRINK ⌄  WHAT'S ON ⌄  FUNCTIONS ⌄  (BADGE)  GAMING  SPORTS BAR  BOTTLE SHOP  STAR REWARDS ]  [ BOOK A TABLE → ]
```

- **Left side pill** (replaces the sound toggle): a tel: link with the number visible.
- **Right side pill** (replaces the language switcher): "Book a table" in brand red.
- **Centre badge:** SVG text on a circle (EST 1935 · ASPLEY HOTEL · PUB ON THE HILL) in red with creme text, sitting in a notch.
- **Nav type:** Hanken 12px, weight 650, uppercase, tracking .06em.
- Sliding hover pill, plus an active-section pill updated by ScrollTrigger.
- Never hides; add the top viewport gradient.

### Mega menus

Same panel as Delta: 292px glass, title left, 3 photo cards right, socials and a small line in the bottom row.

**Eat**
- Cards: `bistro-bright` → Bistro menu · `dish-pie-pint` → Kids meals $13.95 · `cake-fridge` → Coffee & cake $13.95
- Bottom row: bistro hours.

**Drink**
- Cards: `bar-cocktails` → Cocktails · `taps-gold` → On tap · `bar-backbar` → Wine list
- Bottom row: bottle shop open till midnight Fri and Sat.

**What's On**
- Cards: `bar-long` → Wednesday Trivia 6:30pm · `sports-bar` → Friday Jag the Joker · `deck` → Melbourne Cup, Tue 3 Nov
- Bottom row: link to the full week.

**Functions**
- Cards: `function-terrace` → Herb Garden (80 seated) · `function-room` → Terrace (40 seated) · `deck-2` → Platters from $100
- Bottom row: enquiries@aspleyhotel.com.au

Gaming, Sports Bar, Bottle Shop and Star Rewards are direct anchors, like Delta's right-hand items.

### Home sections mapped to Delta's sequence

1. **Hero** (from Delta's video slideshow, thumbs and bento)
   - Three cross-fading stills: `exterior-hill`, `bistro-bright`, `beer-pour`. H1 in Hanken 300 at about 77px, with a "Book a table" split CTA.
   - Bento (desktop): "Book a table →" pill, a `deck` card, "Trivia Wed 6:30pm", and a wide "Star Rewards: $1 off every dish" card.
2. **"This week" marquee** (from the product marquee)
   - Colour tiles for: Trivia (free, Questionable Company); Jag the Joker (3:30–6:30, +$100 a week); Members Jackpot ($400 to $4,000); Melbourne Cup (2 courses, $55); kids meals $13.95; coffee & cake $13.95 ($12.95 for members); sport on every screen.
3. **"Since 1935, the pub on the hill"** (from the history scatter)
   - Oswald poster title.
   - Scatter: `sign-est-1935`, `verandah-exterior`, `exterior-sign-wall`, `exterior-stone-steps`, `taps-gold`, `coffee-bar`, `cake-fridge`, `bistro-window`.
   - Fact: joined the Star family in November 2023. No invented dates.
4. **"A day at the Aspley"** (from the coffee-journey ring): Lunch, Arvo on the deck, Game night, and Late (gaming until 4am, with "Gamble responsibly. Gambling Help 1800 858 858").
5. **Sports Bar** (from D de Delta)
   - Photo rows `sports-bar`, `sports-bar-2`, `sports-bar-tables`, `tab`, `bar-long` moving in opposite directions.
   - Poster title "THE SPORTS BAR", a line about TAB and Fox Sports, and a CTA.
6. **Functions** on paper (from the culture section)
   - Herb Garden (80 seated / 100 standing) and Terrace (40 seated; 60 seated combined), each with an Enquire button.
   - Images: `function-terrace`, `function-room`.
   - Minimum spend and deposit facts.
7. **Star Rewards** on paper (from the quiz orbit)
   - An orbit of round photo chips around "Pay $1 less on every dish".
   - Gold "Join Star Rewards" chip. Static grid on phones.
8. **What's On cards** (from the journal): Melbourne Cup lunch, Wednesday Trivia, and Saturday Members Jackpot, with tag pills.
9. **Bottle Shop** on the navy band (from sustainability)
   - A drive-through poster title, hours (Sun–Thu 10am–11pm, Fri–Sat 10am–midnight), and floating `bar-taps` / `bar-backbar` photos with parallax.
   - Optionally a slimmer Gaming band with `gaming-glow` and the responsible gambling line.
10. **Sticky CTA** (from the pre-footer)
    - `exterior-hill` full-bleed with a 25% overlay.
    - Label "1247 Gympie Road, Aspley"; poster title "THE PUB / ON THE HILL".
    - "Book a table" CTA plus a "Get directions" Google Maps link (no embed).

### Footer for Aspley

Same two layers and the same five tweens as Delta.

- **Left:** badge, 65px, in creme.
- **Centre groups** (Oswald 16px titles, Hanken 14px links):
  - EAT & DRINK: Bistro menu, Kids menu, Coffee & cake, Wine list, Cocktails.
  - WHAT'S ON: Trivia, Jag the Joker, Members Jackpot, Melbourne Cup.
- **Single links** (Oswald 16px): FUNCTIONS, GAMING, SPORTS BAR, BOTTLE SHOP, STAR REWARDS, BOOK A TABLE.
- **Right contact column:** PHONE (07) 3263 4040 (tel: link, number visible) · FUNCTIONS enquiries@aspleyhotel.com.au · ADDRESS 1247 Gympie Road, Aspley QLD 4034 · bistro hours as a footnote.
- **Bottom row:** Facebook and Instagram; "Part of the Star Hotels Group"; Privacy policy.
- **Under-footer:** © 2026 Aspley Hotel. "Gamble responsibly. Gambling Help 1800 858 858" must stay at full opacity with at least 4.5:1 contrast. "Design mock".
- **Mobile:** accordions, as Delta.

### Mobile for Aspley
- Header: "Call" pill on the left, badge in the centre, "MENU" pill on the right. Same glass sheet of 52px pill rows, with photo-row sub-levels.
- Add the brief's sticky bottom bar: "Book a table" (red) and "Call (07) 3263 4040" in a glass tray 12px from the bottom with safe-area padding. Hide it while the menu is open.
- Under 744px, the scatter, orbit and photo-row effects become stacked or static grids.

## Screenshot index (`screenshots/`, 3.1 MB)

| File | What it shows |
|---|---|
| `home-first-screen-desktop.jpg` | Hero at 1440: glass pill with notch, side pills, H1, split CTA, thumbs, bento (video area dark in headless) |
| `home-first-screen-mobile.jpg` | Hero at 390 (2x) |
| `home-full-desktop.jpg` | Stitched full page, 1440x11140 (seams near the bottom from sticky sections; menu hidden after the first frame) |
| `intro-1..3.jpg` | Load intro |
| `header-nav-hover.jpg` | Sliding hover pill |
| `megamenu-delta-cafes.jpg`, `megamenu-coffee-culture.jpg` | Mega menu open (video cards dark) |
| `header-language-dropdown.jpg` | Language dropdown open |
| `button-rest-vs-hover.jpg` | Split pill button at rest and on hover (2x) |
| `scroll-0..9.jpg` | 10 frames scrolling down the home page |
| `prefooter-desktop.jpg`, `footer-reveal-mid-desktop.jpg`, `footer-desktop.jpg` | Footer reveal sequence |
| `mobile-menu-open.jpg`, `mobile-menu-submenu.jpg`, `mobile-scrolled.jpg` | Mobile header and menu |
| `footer-mobile-upper.jpg`, `footer-mobile.jpg`, `footer-mobile-accordion.jpg` | Mobile footer |
| `inner-products-desktop.jpg` | Products page; active nav pill; glass turns grey over light |
| `inner-product-detail-desktop.jpg`, `inner-product-detail-scroll.jpg` | Product page |
| `inner-history-desktop.jpg`, `inner-history-scroll.jpg` | History page using the serif axis |
