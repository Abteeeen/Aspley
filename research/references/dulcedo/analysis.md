# Dulcedo (dulcedo.com): reference analysis for an Aspley Hotel variant

Captured 12 Oct 2026 by the Dulcedo research agent (headless Chromium, desktop 1440x900, mobile 390x844 DPR 2), from the live DOM, computed styles, `/dist/main-DMGewav_.css` and JS chunks. Screenshots in `screenshots/` (44 JPEGs). Saved here by the lead agent from the research agent's report.

**Rule (../BRIEF.md):** take the structure, rhythm, type system, motion vocabulary and interactions. Do not copy the Dulcedo name, serif wordmark, two-ellipse orbit mark, copy, photos or icons.

## 0. Summary

Locomotive-built editorial agency site. Three moves make the look:
- **Type:** huge tight all-caps grotesk at weight 800 (100 to 300px, line-height 0.8, -0.03em) against one light high-contrast serif italic word per heading pair ("*Featured* / PROFILES").
- **Two-mode palette:** near-black hero in muted gold #c5ae79 with film grain and thin gold orbit lines, then off-white #f4f4f4 body in black type, then black and gold footer.
- **Restrained motion:** masked line slide-ups (0.55s, `cubic-bezier(.5,0,0,1)`), clip-path image reveals, a giant category list with a cursor-following photo, card hover that darkens the image and slides in data lines, a header that hides on scroll down and returns solid on scroll up. CSS transitions toggled by `.is-inview`, GSAP for preloader and a 2D canvas. No WebGL, scroll-jacking, skew or marquee.

## 1. Stack (verified)

| Thing | Use |
|---|---|
| Craft CMS + Vite + Tailwind v4 | Server HTML plus custom elements |
| GSAP 3.13.0 (ScrollTrigger, Flip present) | Preloader timeline, canvas shape, ticker |
| Locomotive Scroll v5 on Lenis (lerp 0.1, smoothWheel) | Smooth wheel, `.is-inview`, `--progress` CSS var, light parallax |
| Swup | Page fade plus loader logo loop |
| Lottie | Preloader icon |
| hls.js + Mux | Grayscale vertical hero video |
| Transparent webm | Turning gold rings in footer |

Absent: three.js/WebGL, Barba, SplitText, skew, marquee, custom cursor.

## 2. Home skeleton (12,141px at 1440; `desktop-full-home.jpg`)

| # | Section | Ground | Screens |
|---|---|---|---|
| 0 | Preloader: small caps name, Lottie, 0 to 100% counter | black/gold | desktop-00 |
| 1 | Header transparent over hero | | desktop-01 |
| 2 | Hero: "WE ARE" · vertical video · name row; 7-line gold statement; gold info card overlapping into the next section | #0a0a0a + grain + canvas | desktop-01 to 04 |
| 3 | Giant 5-word category list: hover black bar + floating photo; first row accordion | #f4f4f4 | desktop-05, 06, 23, 24, 26 |
| 4 | Small centred caps blurb (12px/800) | | desktop-06 |
| 5 | Heading pair "*Featured* / rule / PROFILES" | | desktop-06, 07 |
| 6 | Featured grid: 12-col asymmetric rows 3/6/3, then 3/text/3, then 3/6/3 | | desktop-07 to 10, 27 |
| 7 | Big two-line caps statement (130px), paragraph, pill | | desktop-11 |
| 8 | Three white tiles (One/Two/Three) stepped down like a staircase | | desktop-12 |
| 9 | Contact card: rule, icon, caps title, text, pill, rule | | desktop-13 |
| 10 | "*Latest* / ARTICLES" staggered editorial rows; last title overlaps image with `mix-blend-difference` | | desktop-14 to 16 |
| 11 | Footer: full-bleed wordmark, 6 nav columns, rings video, newsletter + addresses, bottom bar | black/gold | desktop-30, 31 |

Section spacing `clamp(9.375rem, 8.288rem + 5.4348vw, 12.5rem)` (150 to 200px). The air carries the look.

## 3. Header and navigation

Desktop:
- Fixed, 144px tall (70px under 1000px), side padding 60px (20px mobile). Three zones: left nav, centred wordmark ~155px wide, right nav.
- Links 16px/500 sentence case; colour follows theme (gold over hero, black elsewhere).
- Link hover: 1px `::after` underline `scaleX(0→1)`, transform-origin swaps right to left, 0.3s.
- Scrolling down: header translates up out of view. Scrolling up: header shrinks to ~80px, an `::after` panel (#f4f4f4, 1px bottom border #0003) scales `scaleY(0→1)` from the top, text turns black.

Mega panel: left panel 65% wide in #f4f4f4, page dimmed on the right. Enter `clip-path: inset(0 X 0 0) → inset(0)`, content slides from translateX 24px and fades, 0.6s. Level 1 links 50px/800 caps with a small arrow. Level 2: "Back" stroked pill then 32px caps links; hover shows a solid black bar behind the row with white text.

Mobile: top bar with name centred; primary nav is a fixed **bottom tab bar** 70px tall in #f4f4f4. Tabs open a **bottom sheet**: `clip-path: inset(100% 0 0 round 20px) → inset(0 round 20px)`, floating round close button, page behind turns black.

## 4. Hero

1. Ground #0a0a0a, gold text, fixed grain overlay (`::before`, 1024px tile, opacity 0.08), dark radial blobs behind the nav, and a canvas with two 1px gold ellipses about viewport size: scale 0→1 over 1.5s `power2.out`; mouse parallax ±5%; scrubbed rotation and squash on scroll.
2. Intro row (12 cols): small 12px/800 caps word (cols 1 to 4, right aligned) · tall photo/video (cols 6 to 7, aspect 204:362, radius 2px) · name (cols 9 to 12). Row enters from `scale(.75)`; media reveals `clip-path: inset(50%) → inset(0)` from the centre; light parallax; media fades as you scroll.
3. Statement: 100px/800, line-height 80px, tracking -3px, caps, gold, cols 3 to 10, centred; masked line split with 0.05s stagger.
4. Info card: 312px wide, gold fill, black text, radius 2px, wordmark, 12px caps paragraph, icon, three stroked pills. It **straddles the hero edge** via negative bottom margin, so it sits half on black, half on off-white.

Mobile: statement ~36px; side labels hidden.

## 5. Section patterns

**5.1 Giant category list + cursor thumbnail.** Labels 100px/800/0.8 centred, each row a full-width link with 4px vertical padding. Hover: full-width black bar fades in (50ms), text turns white. Floating image 200px wide (aspect 203:310), absolute at right ~8%, its Y follows the cursor within the list each frame; enters `clip-path: inset(0 0 100%) → inset(0)` 0.3s with inner image scale 1.1→1 over 0.45s; exits wiping upward; each new image stacks above the last. Entry: labels in overflow-hidden wrappers rise `translateY(101%) → 0` 0.55s with 0.05s steps. First row is an accordion with a "(+)"/"(–)" superscript: open state is a black block, left a 3-col caps blurb, right a list of 32px/800 sub-links with 1px #393939 rules; opens with `grid-template-rows: 0fr → 1fr`.

**5.2 Heading pair.** Serif italic word (140px, weight 300, line-height 0.7), a 1px full-width rule right under it, then a caps word (100px/800). Motion: top word rises from 80%, bottom word drops from -80%, each masked; the rule scales 0.5→1; 0.55s.

**5.3 Asymmetric card grid.** 12 cols, gap-x 20px, row gap 90 to 150px. Rows: span 3 | span 6 (with inner padding) | span 3, then 3 | centred 12px text (max 274px) | 3. Card: title row with name in 18px/800 caps (stacked) and a small stat label right ("LABEL / VALUE" at 12px/800); image aspect 314:420, radius 2px. Hover: image scale 1.05 and black overlay to 0.6 (0.6s); stat lines wipe in `clip-path` + translateY (0.3s); a full-width white caps CTA bar rises from below. Mobile: no hover, a 30px round "+" button bottom left. Listing view switch (3/5 columns) is a fade-and-swap, not a FLIP.

**5.4 Statement + stepped tiles.** 130px/800 two-line heading, 16px/500 paragraph (max 426px), black pill. Three white tiles (4 cols each, min-height 480px, padding 20px, no radius, no shadow); tile 2 sits one step lower, tile 3 two steps lower. Inside: serif italic word number ("One", 50px) above a 50px/800 caps title; description pinned to the bottom.

**5.5 Contact card.** Centred, 4 cols: 1px rule, generous padding, icon, 18px/800 caps title, 16px paragraph, black pill, 1px rule.

**5.6 Editorial staggered list.** Each row its own 12-col grid at a different offset (big image cols 1 to 4 with text 5 to 8; small image cols 8 to 9 pulled up; small image cols 3 to 4; big image cols 4 to 9 with a 42px white title overlaid in `mix-blend-difference`). Title 28px/500, line-height 1, -0.03em; hover underline `background-size: 0% 2px → 100% 2px` at `0 86%`. Row hover triggers image scale 1.05, title underline and button fill together.

**5.7 Buttons.** Pill (radius 2rem), ~6x14px padding, 16px/500, black with white text. Hover: `::before` fill wipes down from the top `clip-path: inset(0 0 100% round 1000px) → inset(0 round 1000px)`, 0.45s `cubic-bezier(.35,0,0,1)`; chevron swaps with a duplicate from above. Variants: stroke, gold, white, square (radius 0, for 12px caps CTA bars), circle.

## 6. Footer

Black ground, gold text, ~1,735px tall, sticky inner block min-height 100vh; a veil fades the footer up from black on scroll. Order: full-bleed serif wordmark (~1380x180); six nav columns (titles 14px/800 caps, links 16px/500 with scaleX underline; columns clip in with 30ms stagger); turning metallic rings (transparent video, min-height 50vh); newsletter blurb with pill plus three addresses with phones; bottom bar (© · socials · language · credit).

## 7. Layout tokens

12 cols, 20px gutter, side margins 20px mobile / 60px desktop, full-width container. Fluid spacing via `clamp()`: 2xs .375 to .5rem, xs .5 to .75, sm 1 to 1.5, md 1.5 to 2, lg 2 to 2.5, xl 2.5 to 3.5, 2xl 3.5 to 5.625, 3xl 5.625 to 9.375, 4xl 9.375 to 12.5, 5xl 12.5 to 18.75rem. Radius 2px images and cards, 2rem pills, 20px mobile sheet. Breakpoints 340, 500, 700, 1000, 1200, 1400, 1600. Composition: centre axis for headings and lists, 3/6/3 card rows, staircase offsets, narrow text blocks (274 to 426px) inside wide space.

## 8. Typography

| Role | Font | Size | Weight | Line height | Tracking | Case |
|---|---|---|---|---|---|---|
| 4xl | Helvetica Now Display | clamp(6.25rem to 18.75rem) | 800 | 0.8 | -0.03em | UPPER |
| 2xl | " | clamp(2.25rem, .2065rem + 10.2174vw, 8.125rem) | 800 | 0.8 | -0.03em | UPPER |
| xl | " | clamp(2rem, .5217rem + 7.3913vw, 6.25rem) | 800 | 0.8 | -0.03em | UPPER |
| lg | " | clamp(2rem to 3.125rem) | 800 | 0.8 | -0.03em | UPPER |
| md | " | 26 to 32px | 800 (500 for article titles) | 1 | -0.03em | |
| xs names | " | 18px | 800 | 1 | -0.03em | UPPER |
| 3xs labels | " | 12px | 800 | 1 | -0.03em | UPPER |
| Serif accent | Saol Display | clamp(2.375rem, .1576rem + 11.087vw, 8.75rem); lg 50px | 300 italic | 0.7 | -0.03em | Sentence |
| Body | Helvetica Now Display | 16px | 500 | 1.4 | normal | |

Only two grotesk weights, 500 and 800. Serif only as one italic word or a step number. Google equivalents: Inter Tight or Archivo 800/500 (or Schibsted Grotesk); Instrument Serif Italic (or Bodoni Moda italic, Fraunces 300 italic).

## 9. Colour

Black #0a0a0a; gold #c5ae79 (9.15:1 on black); dark gold #7c735c; off-white #f4f4f4; hover tint #e0e0e0; white tiles; strokes #393939 / #cccccc; overlay black 20 to 60%. Images often grayscale.

## 10. Motion inventory

Eases: reveal `cubic-bezier(.5,0,0,1)`; buttons `(.35,0,0,1)`; smooth `(.38,.005,.215,1)`; page fade `(.215,.61,.355,1)`. Durations: 50ms, .15, .2, .3 (default), .45 (buttons), .55 (reveals), .6, .8, 1s. Lenis lerp 0.1.

| # | Effect | How | Timing |
|---|---|---|---|
| M1 | Preloader | name and counter slide in, Lottie grows, exit, overlay fades | ~4s |
| M2 | Hero intro | row from scale .75; media `clip-path inset(50%) → inset(0)` | .55s |
| M3 | Line split | lines masked, inner `translateY(119%) → 0`, 0.05s stagger | .55s |
| M4 | Heading pair | top up from 80%, bottom down from -80%, rule scaleX .5→1 | .55s |
| M5 | Fade-up | translate 2 to 2.5rem with opacity | .55s |
| M6 | Canvas orbit | ellipses scale in, follow mouse, rotate/squash on scroll scrub | 1.5s then scrub |
| M7 | Hero parallax and fade | speed .2, opacity 1 - p*1.25 | scrub |
| M8 | Category hover | black bar; cursor-Y thumbnail clip wipe; inner scale 1.1→1 | .3/.45s |
| M9 | Card hover | scale 1.05 + overlay .6; stat lines clip in; CTA bar rises | .6/.3s |
| M10 | Button | clip-path pill fill + chevron swap | .45s |
| M11 | Link underline | scaleX with origin swap | .3s |
| M12 | Header | hide on down; solid bar scaleY on up | .3s |
| M13 | Menu panel / bottom sheet | clip-path inset from right or from bottom with 20px round | .3/.6s |
| M14 | Footer | veil fade; columns clip in with 30ms stagger | .6 to .8s |
| M16 | Grid view switch | fade-swap | .6s |
| M18 | Reduced motion | all durations 0 | |

### Rebuild recipes (GSAP 3.13 + ScrollTrigger + SplitText + Flip + CustomEase + Lenis)

Dulcedo's scroll reveals start at opacity 0, which the brief forbids. Above the fold: play on load. Below the fold: start visible (masked lines at `yPercent: 35`, rules at `scaleX: .5`, images at `scale: 1.08`, or scrubbed transforms only). Wrap in `gsap.matchMedia()`; reduced motion gets final states, no Lenis, no cursor thumbnail.

```js
gsap.registerPlugin(ScrollTrigger, SplitText, Flip, CustomEase);
CustomEase.create("dul", ".5,0,0,1"); CustomEase.create("btn", ".35,0,0,1");
const lenis = new Lenis({ lerp: 0.1, smoothWheel: true });
lenis.on('scroll', ScrollTrigger.update); gsap.ticker.add(t => lenis.raf(t*1000)); gsap.ticker.lagSmoothing(0);

// M3 lines (hero, on load)
SplitText.create(".js-lines", { type:"lines", mask:"lines", autoSplit:true,
  onSplit: s => gsap.from(s.lines, { yPercent:119, duration:.55, ease:"dul", stagger:.05 }) });

// M4 heading pair, scrubbed from a visible start
gsap.timeline({ scrollTrigger:{ trigger:el, start:"top 85%", end:"top 45%", scrub:.6 } })
  .fromTo(top,{yPercent:30},{yPercent:0},0).fromTo(bottom,{yPercent:-30},{yPercent:0},0)
  .fromTo(rule,{scaleX:.5},{scaleX:1,ease:"none"},0);

// M8 cursor-follow thumbnail
const yTo = gsap.quickTo(thumb, "y", { duration:.35, ease:"power3" });
list.addEventListener("pointermove", e => yTo(e.clientY - list.getBoundingClientRect().top));
row.addEventListener("pointerenter", () => gsap.fromTo(img,{clipPath:"inset(0 0 100% 0)"},{clipPath:"inset(0 0 0% 0)",duration:.3,ease:"dul"}));
row.addEventListener("pointerleave", () => gsap.to(img,{clipPath:"inset(100% 0 0% 0)",duration:.3,ease:"dul"}));

// M12 header
ScrollTrigger.create({ start:0, end:"max", onUpdate:s => {
  header.classList.toggle("is-hidden", s.direction===1 && s.scroll()>200);
  header.classList.toggle("is-solid",  s.direction===-1 && s.scroll()>200); }});

// M16 upgrade: real FLIP for menu filtering and density
const state = Flip.getState(".menu-card"); grid.dataset.view = "5";
Flip.from(state,{ duration:.6, ease:"dul", absolute:true, scale:true,
  onEnter:els=>gsap.fromTo(els,{opacity:0,scale:.96},{opacity:1,scale:1,duration:.4}),
  onLeave:els=>gsap.to(els,{opacity:0,scale:.96,duration:.3}) });
```

Buttons, underlines and card hover in pure CSS under `@media (hover:hover)`, with a `:focus-visible` twin for every hover. Optional preloader at most 1.2s, skipped on repeat visits (sessionStorage in try/catch) and under reduced motion; no fake percentage.

## 11. Mobile

Bottom tab bar (70px) is the main nav; menus open as 20px-radius bottom sheets with a floating close. Cards one per row with a "+" button. Display ~36px. Cursor and canvas mouse effects off. For Aspley the bottom bar becomes the sticky "Book a table / Call (07) 3263 4040" bar plus a Menu tab that opens the sheet.

## 12. Translating to Aspley Hotel

Keep: two-weight caps grotesk plus one serif italic word; dark hero → warm light body → dark footer; 12-col asymmetric grid and centre-axis giant lists; masked lines, black-bar row hover, clip-fill pills.

Drop: orbit logo, gold-on-black as the brand pair, "cast" language, grayscale photos, opacity-0 scroll reveals, 4s preloader.

Palette: ink #0e0c0b with 6 to 8% grain; hero display text lager cream #e8d9b5 (13.9:1 on ink); accent Aspley red #C8102E for card fill, pills, active bars, badge (white on red 5.1 to 5.9:1); body ground #f4f1ea; tiles #ffffff. Small red text on black is only 3.4:1: use red on dark only at 24px+ or lighten to #e0475e.

Type: Archivo 800/500 display (-0.03em, line-height .82, caps), reads like painted pub signage; Instrument Serif Italic accent; body 16px/500, line-height 1.45.

Section mapping (real facts only):
- Optional preloader (~1s): "ASPLEY HOTEL" plus SVG circular badge text drawing around.
- Hero intro row: "THE PUB · [tall photo] · ON THE HILL"; photo the exterior or the signage at 204:362, clip reveal from centre, in colour.
- Hero statement: 3 to 4 short factual caps lines (copywriting skill), e.g. "A COLD ONE, A HEARTY FEED, THE FOOTY ON. SINCE 1935."
- Canvas: two thin cream or red concentric rings echoing the round sign, scaling in on load, rotating slightly on scroll.
- Overlap card → red "beer-mat" card, 312px, white text, straddling hero and body: badge text, "Bistro · Bar · Gaming · Functions · Bottle shop", pills Book a table · Call (07) 3263 4040 · What's on.
- Giant list → EAT · DRINK · SPORTS BAR · GAMING · FUNCTIONS · BOTTLE-O with cursor-following venue photos. Each row an accordion; EAT opens to the bistro hours, main menu, kids $13.95. GAMING must include "Gamble responsibly. Gambling Help 1800 858 858".
- Featured grid 3/6/3 → "*This week* / AT THE ASPLEY": Trivia (Wed 6:30pm, free, Questionable Company); Jag the Joker (Fri 3:30 to 6:30pm, +$100 a week); Members Jackpot (Sat, from $400, must go by $4,000, with gambling line); Melbourne Cup as the wide middle card (Tue 3 Nov 2026, 2 courses $55, bookings essential); sport on the screens daily. Middle text slot: "Star Rewards members pay $1 less on every dish."
- Menu section with filter chips (Entrées / Grill / Burgers / Classics / Parmy Army / Kids / Desserts), density toggle, real GSAP Flip; dish name 18px caps, price and members price from the content file; photos only where real.
- Statement + staircase → "JOIN STAR REWARDS" with "*One* / TAP SIGN UP", "*Two* / FILL OUT THE FORM", "*Three* / GET YOUR CARD ON THE SPOT"; or function spaces with capacities.
- Contact card → "BOOK A TABLE": badge, hours, call pill (number visible), functions enquiry pill.
- "*Latest* / ARTICLES" → "*What's* / ON" staggered rows (Melbourne Cup big with blend-mode title, Trivia, Jag the Joker, bottle-shop hours).
- Footer: "ASPLEY HOTEL" set full width; columns Eat, Drink, Sport & Gaming, Functions, Bottle shop, Visit; rings video → scroll-rotated SVG circular badge; hours, address with Directions link, phone, Star Rewards pill; bottom © 2026 Aspley Hotel, socials, gambling line.

Tone: short declarative caps and one italic word, pub register ("mates", "feed", "the footy", "pub on the hill"); no invented quotes, awards or ratings beyond Google 4.2 from 791 reviews; real times, prices and capacities in place of "social reach".

## 13. Screenshot index

desktop-00 preloader; desktop-01 hero first screen; desktop-02 to desktop-15 slow-scroll frames; desktop-16 solid header on scroll up; desktop-20/21 mega panel; desktop-22 search; desktop-23/24 category hover with cursor thumbnail; desktop-26 accordion open; desktop-27 card hover; desktop-28 compact header; desktop-30/31 footer; desktop-full-home; inner-listing-01 to 07 (filter bar, view switch, hover); inner-profile-01 to 03; mobile-01 to 05; mobile-06 menu open.
