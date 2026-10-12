# Aspley Hotel design mocks

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
