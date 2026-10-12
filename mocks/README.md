# Aspley Hotel design mocks

## Round 2: four reference-inspired variants (owner's enhanced photos)

| Variant | File | Inspired by | Signature |
|---|---|---|---|
| C, Glasshouse | `variant-c-delta.html` | deltacafes.com (header and footer structure) | Notched glass header with the red EST 1935 badge, photo mega menus, badge-mask intro, velocity marquee, heritage photo scatter, pinned day-clock, Star Rewards orbit, sticky "Pub on the Hill" CTA with the glass footer card sliding over it |
| D, Lookbook | `variant-d-wolverine.html` | wolverineworldwide.com | Rise-and-grow hero, header that morphs into a glass pill, 3D photo galaxy, seven stacked room slides, function finder, footer curtain |
| E, Editorial | `variant-e-dulcedo.html` | dulcedo.com | Caps plus one serif italic word, canvas sign rings, giant room list with cursor-following photos, Flip menu with odometer member prices, function finder |
| F, After Dark | `variant-f-aupale.html` | aupalevodka.com | Pinned story chapters over hill contours, arch doorway, The Pour photo stage, a pint that fills through the trading day, cocktail spec dialogs, word-split prefooter |

All four use `img/drive/` (the owner's AI-enhanced venue photos), GSAP 3.13 with ScrollTrigger, SplitText and Flip, and Lenis smooth scroll. They compute live venue status in Brisbane time, respect reduced motion, and have a sticky Book/Call bar on phones. Research behind each one is in `research/references/<site>/analysis.md`; the growth brainstorm is `research/growth-plan.md`.

Opened directly from disk without a doctype, the pages render in quirks mode, so Lenis is switched off and native scroll is used; published versions get a doctype and smooth scroll.

## Round 1

Two complete single-page mocks with entirely different looks, built on the same real content.

| | Variant A: Verandah | Variant B: Tonight |
|---|---|---|
| File | `variant-a.html` | `variant-b.html` |
| Mood | Daylight, heritage, the white Queenslander on the hill | After dark, chalkboard specials board and sports scoreboard |
| Type | Young Serif with Hanken Grotesk | Big Shoulders Display with Archivo |
| Signature motion | Pinned horizontal walk through six rooms | Split-flap board that flips to tonight's event |
| Other motion | Headline mask reveal, rotating "Est. 1935" badge | Specials ticker, stacked room cards, capacity bars |

Both include: live "kitchen open now" from Brisbane time, today's event, text menu with a Star Rewards price toggle, weekly what's-on, Melbourne Cup, function spaces with capacities and an enquiry form, table booking form, 4.2 stars from 791 Google reviews, hours for bistro, bottle shop and gaming, the Gambling Help line, and a sticky "Book a table / Call" bar on phones.

Open either file in a browser. They load fonts from Google Fonts and GSAP 3.12.5 from cdnjs.

## Images

`img/` holds web-optimised copies of the venue's September 2026 photoshoot from the current website. Each has a descriptive name and a `-sm` 800px version. To use the owner's Google Drive photos instead, replace a file with one of the same name and aspect ratio; no code changes are needed.

The two dish photos (`dish-wings`, `dish-pie-pint`) are cropped from promotional posters because the site has no plain food photography. A proper food shoot is the single biggest visual upgrade for the real build.

## Before this goes to the client

- Bistro hours conflict on the current site (Sunday vs Monday). The mocks use the "Sunday to Wednesday" version and say hours need confirming.
- Forms are not connected. Each shows a mock-only message.
- Melbourne Cup lunch is listed as $55 without a course count because the current site says both 2 and 3 courses.
