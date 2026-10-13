# 3 Kingdoms: two website variants

Built 13 Oct 2026 the same way as the El Pueblo #2 site in the reference video. We filmed the venue, cut the clips into frames, and scrolling drives the camera from the Level A hall into the shop. The owner hasn't chosen a concept yet. These are review builds.

| File | What it is |
|---|---|
| `index.html` | Review hub: both variants, how the reference site was made, the Awwwards top 10, and what is still to do. Written as an artifact body (no doctype). |
| `a.html` | **Variant A, Lantern Walk.** Dark and cinematic, the closest to the reference video. |
| `b.html` | **Variant B, Broadside.** A daylight letterpress poster. The walk plays inside a doorway that opens to full screen. |
| `walk.js` | Shared scroll-scrub engine. Canvas frame sequence, coarse-to-fine preload, DPR capped at 2, landscape and portrait sets. |
| `media/walk-d/` | 135 landscape frames (864×496 WebP) cut evenly from the anime renders A + B + C (29s). Real faces blurred. See `../video/higgsfield/anime/RESULTS.md`. |
| `media/walk-m/` | 87 portrait frames (496×864 WebP) cut evenly from the anime renders P1 + P2 (18s). Real faces blurred. |
| `media/still/` | Stills from the clips, plus dish cards cropped from the counter frame. |
| `media/loop-room.mp4` | 6s portrait room loop for Variant A's phone card. |
| `media/ref/` | Frames from the reference video, used in the hub's breakdown. |
| `media/shots/` | Screenshots of both variants, used in the hub. |

## Run locally

```bash
cd prospects/3-kingdoms/site && python3 -m http.server 8765
# open http://localhost:8765/a.html and /b.html
```

## Stack and skill rules applied

- GSAP 3.12.5 + ScrollTrigger from cdnjs (version pinned by the `awwwards-3d` and `gsap-*` skills). No Lenis: native scroll keeps the scrub exact and accessible.
- `scroll-scrubbed-visual-sequence`: native scroll is the only source of truth, sticky stage, copy kept in HTML rather than baked into frames, reduced motion renders a static poster and normal flow.
- `frontend-design` / `impeccable`: one bold move per variant (the walk), type with a job, structure that means something. The route steps and find-us steps are real sequences, so they are numbered.
- `emil-design-eng`: press feedback with `scale(0.97)`, ease-out curves, no motion on keyboard actions beyond focus.
- Reduced motion or no JavaScript: pages fall back to `body.static`, with a poster frame, all copy visible, and horizontal strips that scroll natively.

## Before any of this goes public

- Walk-in frames: real faces are blurred. The stills in `media/still/` and `media/loop-room.mp4` still show customers and staff: blur them or get the venue's OK.
- The walk-in is a 480p render with AI anime characters added (Seedance 2.0 fast). Re-render at 1080p or 4K before launch if the owner keeps it.
- Replace the counter-card crops with a proper food shoot.
- Wire up Order pickup (nothing is connected yet).
- Confirm with the owner: the Chinese spice names read off the counter card (大骨汤 · 微辣 · 少辣 · 中辣 · 大辣 · 特辣), the dish names, in-store prices, and the route inside Uptown.
- Run the `web-design-guidelines` and `react-best-practices` audits on the chosen variant (CLAUDE.md rule 5).
