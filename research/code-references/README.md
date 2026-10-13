# Code references: scroll, motion and 3D

These are upstream repos pinned as **git submodules**. Each folder holds the real repo at a fixed commit, but our history stores only a pointer, so the repo stays small and nobody's code is redistributed. They are for reading and borrowing patterns. Site code installs the libraries from npm. It never imports from these folders.

After a fresh clone, pull them with:

```bash
git submodule update --init --depth 1
```

| Folder | Upstream | Licence | Pinned | What to take from it |
|---|---|---|---|---|
| `lenis/` | darkroomengineering/lenis | MIT | `bc152f9` (v1.3.26) | Smooth-scroll source. Read `packages/core` for the options and `packages/react` for the `<ReactLenis>` wrapper we'd use in Next.js. |
| `react-three-fiber/` | pmndrs/react-three-fiber | MIT | `a9f8dc0` (fiber v9.8.1) | React renderer for Three.js. Read `docs/` before any WebGL component. |
| `ScrollAnimationsGrid/` | codrops/ScrollAnimationsGrid | MIT | `45dd4d8` | GSAP + ScrollTrigger + Lenis effects on an image grid. Closest match to the Aspley gallery and venue-photo sections. |
| `gsap-collection/` | Ibaliqbal/gsap-collection | **No licence** | `d3e6d2a` | 20 GSAP demos: horizontal gallery, image parallax, page reveal, split vignette, scroll text. **Ideas only.** It has no licence file, so it is all rights reserved: don't copy its code or assets (some are Freepik, Unsplash and DaFont). |

`tsogjavklann/awwwards-3d` was requested too. It is a skill, so it is vendored in `.claude/skills/awwwards-3d/` instead of being added here.

## The five techniques, and what covers each

| Technique | Skill to read first | Code reference | Already in the mocks? |
|---|---|---|---|
| 1. GSAP + ScrollTrigger timeline scrubbing | `gsap-core`, `gsap-scrolltrigger`, `gsap-timeline`, `gsap-react`, `gsap-performance` | `ScrollAnimationsGrid/`, `gsap-collection/` | Yes, all six variants |
| 2. 3D WebGL (Three.js, R3F, Spline) | `threejs-*` (10 skills), `awwwards-3d` (scroll-driven Three.js), `spline-interactive` (Spline) | `react-three-fiber/` | No |
| 3. Video or frame scrubbing on scroll | `scroll-scrubbed-visual-sequence` | – | No |
| 4. Lenis smooth scroll | `awwwards-3d` (Lenis + GSAP wiring), `gsap-scrolltrigger` | `lenis/` | Yes, variants C to F (CDN `lenis@1.1.13`) |
| 5. Native CSS scroll-driven animation (`animation-timeline`) | `impeccable` → `reference/overdrive.md` | – | No |

## Before using any of this on Aspley

- **Pick a Lenis version.** The mocks use `1.1.13`, `awwwards-3d` pins `1.1.0`, and upstream is on `1.3.26`. Settle on one when the Next.js build starts.
- **3D needs a reason.** This is a suburban pub, and the brief is about table bookings, functions and phone calls. `awwwards-3d` itself says not to use it on "simple landing pages where 3D would be decorative noise". The most likely good use is a pre-rendered video scrub (technique 3) of the bistro or the 1935 building, because it looks rich but costs little on phones.
- **Reduced motion and mobile come first.** Every technique needs a `prefers-reduced-motion` fallback (see `gsap-core` → `gsap.matchMedia()` and the reduced-motion section of `scroll-scrubbed-visual-sequence`). Check LCP and INP with `core-web-vitals` after adding any canvas or video.
