# Shared brief for the Aspley Hotel v2 variants

Every agent working on the four new variants reads this file first. It is the single source of truth for content, images, constraints and skills.

## The client

Aspley Hotel, 1247 Gympie Road, Aspley QLD 4034. Phone (07) 3263 4040. Functions email enquiries@aspleyhotel.com.au. Part of the Star Hotels Group. A suburban Brisbane **pub** (no accommodation): bistro, bar, deck, sports bar with TAB and Fox Sports, gaming room, functions (Herb Garden and Terrace), drive-through bottle shop, Star Rewards loyalty. "The pub on the hill", established 1935. Google rating 4.2 from 791 reviews. Never invent review quotes, awards or figures.

Full verbatim content, menus and prices: `research/aspley-current-site/content-and-language.md`. Read it.

## Decided facts (owner approved)

- Bistro: lunch Sun to Wed 11:30am to 2:30pm; dinner Sun to Wed 5:30pm to 8:30pm; all-day dining Thu to Sat 11:30am to 8:30pm.
- Gaming room: every day 10am to 4am. Show "Gamble responsibly. Gambling Help 1800 858 858" near any gaming content.
- Bottle shop (drive-through): Sun to Thu 10am to 11pm; Fri and Sat 10am to midnight.
- Weekly: Wednesday Trivia 6:30pm, free, hosted by Questionable Company. Friday Jag the Joker, one entry per drink 3:30 to 6:30pm, jackpot grows $100 a week. Saturday Members Jackpot draw, starts $400, must go by $4,000. Sport on the sports bar screens daily.
- Melbourne Cup, Tuesday 3 November 2026: 2-course lunch $55; sweeps, chef specials, prizes, lucky loser draw; bookings essential. Menu: entrées Crispy Chicken Bites, Prawn Cocktail, Burrata; mains Miso Salmon, Pork Piccata, Pumpkin and Sage Gnocchi.
- Star Rewards members pay $1 less on every dish. Kids meals $13.95 including soft drink and ice cream. Coffee and cake $13.95 ($12.95 members).
- Function spaces: Herb Garden 80 seated / 100 standing; Terrace and Herb Garden 60 seated; Terrace 40 seated. Platters $100 to $145. Minimum spend $1,000 Mon to Thu, $2,000 Fri to Sun, or $250 room hire; $100 deposit.
- Brand red is around #C8102E. The badge reads "EST 1935, ASPLEY HOTEL, PUB ON THE HILL, GAMING BAR FOOD BOTTLESHOP".

## Images (all real, from the venue's September 2026 shoot)

Folder: `mocks/img/`. Every file has a 1600px version and an 800px `-sm` version. Pages live in `mocks/` and reference images as `img/<name>.webp`.

| File | Shows |
|---|---|
| exterior-hill | Hero shot: white two-storey Queenslander, terracotta roof, blue sky, on the hill (1600x1040) |
| verandah-exterior | Front verandah and signage, daylight |
| exterior-sign-wall | Front facade with round Aspley Hotel sign |
| exterior-bistro-entry | Entry with "Gaming, Sports Bar, TAB, Functions" sign and bistro sign |
| exterior-stone-steps | Stone-clad steps up to the bistro |
| sign-est-1935 | Close-up of the round "EST 1935 ASPLEY HOTEL PUB ON THE HILL" sign |
| beer-pour | Bartender pouring a beer from the tap, warm close-up (1600x900) |
| bar-taps | Beer tap row with bottles behind |
| taps-gold | Tap handles (XXXX Gold, Stone & Wood, Great Northern) |
| bar-cocktails | Main bar with hand-drawn chalkboard cocktail mural |
| bar-backbar | Back bar, spirits and fridges |
| bar-long | Long bar counter and screens |
| bistro-bright | Bright bistro dining room with verandah windows |
| bistro-round-table | Round timber table set, patterned carpet |
| bistro-room, bistro-room-2, bistro-dark, bistro-window | Bistro room views (navy walls, art, windows) |
| bistro-bar-counter | Bistro ordering counter |
| coffee-bar | Glasses and coffee counter close-up |
| cake-fridge | Cake display fridge with "CAKE" letters |
| deck, deck-2 | Timber deck, high tables, view over the road |
| function-terrace | Covered function terrace (Herb Garden side) |
| function-room | Function room beside the terrace |
| sports-bar, sports-bar-2, sports-bar-tables | Sports bar, Maroons/Blues banners, screens |
| tab | TAB wall of screens |
| gaming-machines, gaming-glow, gaming-entrance | Gaming room |
| dish-wings | Glazed chicken wings (cropped from a poster, 730x380) |
| dish-pie-pint | Lamb shank pie with peas and a pint (cropped from a poster, 1014x590) |

There is no logo file. Set the name in type, or draw a simple circular badge in SVG text using the badge words above.

## Technical contract (the pages are published as claude.ai Artifacts)

- One self-contained `.html` file per variant in `mocks/`. Start the file with `<title>` (2 to 4 words, e.g. "Aspley Hotel Coffeehouse"), then `<meta charset="utf-8">` and `<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">`. Do **not** write `<!doctype>`, `<html>`, `<head>` or `<body>` tags.
- Inline all CSS and JS. Scripts may only load from cdnjs.cloudflare.com (preferred), cdn.jsdelivr.net/npm, unpkg.com. Pin exact versions. Verified available:
  - `https://cdnjs.cloudflare.com/ajax/libs/gsap/3.13.0/gsap.min.js`
  - `https://cdnjs.cloudflare.com/ajax/libs/gsap/3.13.0/ScrollTrigger.min.js`
  - `https://cdnjs.cloudflare.com/ajax/libs/gsap/3.13.0/SplitText.min.js` (free since 3.13)
  - `https://cdnjs.cloudflare.com/ajax/libs/gsap/3.13.0/Flip.min.js`, `.../CustomEase.min.js`
  - `https://cdn.jsdelivr.net/npm/lenis@1.1.13/dist/lenis.min.js` (smooth scroll; wire it to ScrollTrigger with `lenis.on('scroll', ScrollTrigger.update)` and `gsap.ticker.add(t=>lenis.raf(t*1000))`, `gsap.ticker.lagSmoothing(0)`)
  - `https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js` only if a WebGL effect genuinely earns it
- Fonts only from Google Fonts with a real fallback stack. No other external CSS, images, video or fetches. No iframes (no map embeds; link to Google Maps instead).
- Forms: handle submit with `preventDefault()` and show an inline "mock only" message. `tel:` links must also show the number as visible text.
- The page must be complete at rest: everything readable without scrolling triggers. Animations may move or reveal from a visible state, or play in on load, but never leave real content at opacity 0 waiting for a scroll observer. Use `gsap.matchMedia()` and honour `prefers-reduced-motion: reduce` (render final state, no smooth scroll).
- Phone width ~390px must work with no horizontal page scroll, a side gutter of at least 16px, and a sticky "Book a table / Call" bar. Pinned and horizontal sections must fall back to a normal stacked layout on phones.
- A single committed look is fine (set `color-scheme` and every colour explicitly; body background set).
- Add a slim note at the very top: "Design mock, variant X. Photos from the venue's September 2026 shoot. Forms are not connected."
- Do not modify `mocks/variant-a.html`, `mocks/variant-b.html` or anything they use. Do not delete or edit files in `mocks/img/`.

## Using a reference site

Learn the **structure, rhythm, typography system, motion vocabulary and interaction patterns** of the reference. Do not copy its logo, brand name, copy, photos, icons, or distinctive brand marks. The result must read unmistakably as Aspley Hotel. Fonts: pick Google Fonts that match the reference's character.

## Skills (in `.claude/skills/`, read the SKILL.md files before building)

Aesthetics: `impeccable` (SKILL.md plus `reference/animate.md`, `reference/craft-floor.md`), `frontend-design`, `high-end-visual-design` (advisory; its eyebrow-label and fade-everything rules are overridden by impeccable and frontend-design). Motion: `gsap-core`, `gsap-scrolltrigger`, `emil-design-eng`. Copy: `copywriting` (no AI tells; preserve facts). Quality: `baseline-ui`, `frontend-ui-engineering`, `web-design-guidelines`, `core-web-vitals`. Data: `ui-ux-pro-max` (run `python3 .claude/skills/ui-ux-pro-max/scripts/search.py "<query>" --domain <typography|color|ux|gsap|landing>` from the repo root).

Where skills disagree, `impeccable` and `frontend-design` win on aesthetics, `emil-design-eng` and `gsap-*` win on how motion is built, accessibility always wins.
