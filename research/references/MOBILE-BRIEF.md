# Mobile "wow" pass for variants C, D, E, F

The owner reviewed the four round-2 variants: desktop and laptop are great, but on a phone there is "no X or wow factor". On phones every variant currently turns its signature effects off and falls back to a plain stacked page. This pass adds phone-native signature moments **without changing the desktop experience at all**.

## Hard rules

1. **Desktop must not change.** All new CSS goes inside `@media (max-width: 760px)` (or the file's existing phone breakpoint); all new JS runs inside a `gsap.matchMedia()` branch for `(max-width: 760px) and (prefers-reduced-motion: no-preference)`. Before finishing, screenshot the desktop first screen and two mid-scroll frames at 1440x900 and compare them with the originals in `/tmp/claude-0/-home-user-Aspley/00410979-bd6b-5def-b0b6-87bfd2362424/scratchpad/mobile-base/` rendered the same way: they must match.
2. Everything in `research/references/BRIEF.md` still applies (complete at rest, reduced motion renders final state, no opacity-0 waits for scroll, no horizontal page scroll, 16px gutters, sticky Book/Call bar, real facts only, no new CDNs beyond the allowed list).
3. **Touch first:** effects must be driven by scroll position, swipe, or tap; nothing relies on hover or a cursor. Tap targets at least 44px. Swipe areas must not trap vertical page scroll (use `touch-action: pan-y` on vertical scrollers and native `scroll-snap` for horizontal decks).
4. **Performance on a mid-range phone:** animate transform, opacity, clip-path and filter only; use `-sm.webp` images on phones; at most one pinned section per variant on phones and keep it short (100 to 200% of viewport height); pause loops off-screen; no WebGL.
5. Do not touch any other variant file, `mocks/variant-a.html`, `mocks/variant-b.html` or `mocks/img/`. Do not commit.

## The phone wow toolkit (pick what fits the variant's world, do not use all)

- **Full-bleed cinematic first screen** (`100svh`): photo with a slow push-in, headline that builds line by line, a status chip (kitchen open) and the Book bar. The first screen on a phone is the pitch; it must feel like an app opening.
- **Story-style hero:** Instagram-stories progress segments across the top, tap the right or left half to go forward or back, auto-advance, hold to pause. Real photos and one-line real captions.
- **Swipe decks:** horizontal `scroll-snap` carousels where the centred card scales up and neighbours scale down and dim, driven by the container's scroll position (rAF on the scroller's scroll event). Add a progress pill or counter.
- **Stacking cards:** `position: sticky` cards that pile up as you scroll, each earlier card scaling to 0.92 to 0.95 and darkening as the next arrives.
- **Scroll-scrubbed image reveals:** clip-path circle or inset that opens with scroll, images that zoom from 1.15 to 1 as they cross the viewport, parallax inside rounded frames.
- **Focus-line list:** for big lists, the row nearest the viewport centre becomes active (bar, colour, photo reveal) as the thumb scrolls, the touch replacement for hover.
- **Short pinned scene:** one brief pinned moment with a scrubbed sequence (e.g. a pint filling, a dial turning, photos wiping).
- **Kinetic type:** oversized words sliding horizontally in opposite directions as you scroll, or a velocity marquee.
- **Bottom sheets that feel native:** sheet rises with a spring, drag handle, swipe down to close.
- **Micro-feedback:** press scale 0.97, chips that pop, odometer numbers.

## Deliverable

Edit the one assigned file in place. Then verify with Playwright at 390x844 (`isMobile: true, hasTouch: true`) and 1440x900, using `require('/tmp/claude-0/-home-user-Aspley/00410979-bd6b-5def-b0b6-87bfd2362424/scratchpad/competitors/node_modules/playwright')`, `executablePath '/opt/pw-browsers/chromium_headless_shell-1194/chrome-linux/headless_shell'`, `args ['--no-sandbox']`, `proxy {server: process.env.HTTPS_PROXY}`. Wrap the file in `<!doctype html><html><head></head><body>…</body></html>` in a temporary copy for testing (that is how it is published), and delete the copy afterwards. Checks: zero console errors, `scrollWidth == clientWidth` on mobile, images loaded after a slow scroll, desktop frames unchanged. Also record a short phone screen recording with Playwright's `recordVideo` (390x844, scroll slowly through the whole page and exercise swipes/taps) and save the `.webm` plus 8 to 12 mobile frames into the scratch folder named in your task. Look at the frames with the Read tool and fix what looks broken or flat.

Report: what you added (phone only), the before/after feeling in two sentences, desktop-unchanged confirmation, and the paths of the video and 4 best mobile frames.
