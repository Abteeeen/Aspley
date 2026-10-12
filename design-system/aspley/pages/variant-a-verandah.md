# Variant A override: Verandah (day, heritage)

Overrides MASTER.md for `mocks/variant-a.html`. MASTER.md is raw UI/UX Pro Max output; its navy/gold palette and Playfair pairing were treated as data, not adopted, because the frontend-design and impeccable skills rank above it for aesthetics (see CLAUDE.md rule 2).

- **Concept:** a daylight Queenslander. Left-aligned editorial column, photography bleeding to the edge, one pinned "walk through the rooms" as the single authored motion moment.
- **Palette (from the building and the brand):** weatherboard paint `#F1F2EE`, shaded boards `#E3E6E1`, bistro-wall navy ink `#15232C`, secondary ink `#43525B`, Aspley red `#B80F2A`, deck timber `#7A4B2F`, rail line `#C9CFCB`.
- **Type:** Young Serif (display, one weight) with Hanken Grotesk (body and UI). Restaurant-serif direction suggested by UI/UX Pro Max; Playfair rejected as overused.
- **Motion:** load sequence (masked headline rise, photo settles, badge spins in), ambient badge rotation, pinned horizontal walk with timber progress rail and per-photo settle. All behind `gsap.matchMedia()` with `prefers-reduced-motion`.
- **Live logic:** kitchen open/closed, today's hours and today's event computed in Australia/Brisbane time.
