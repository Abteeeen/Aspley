# Aspley Hotel vs competitors: comparison

Captured 12 October 2026 with headless Chromium at 1440x900 (desktop) and 390x844 iPhone emulation (mobile). All screenshots are in `screenshots/`. Raw page metadata for each site is in `data/`. The overview sheets in this folder are the fastest way to see the gap.

## Important framing

The audit in `../aspley-current-site/` found that Aspley Hotel is a **pub**, not an accommodation hotel. It has a bistro, bars, gaming, a sports bar with TAB, functions, a drive-through bottle shop and the Star Rewards loyalty program. It has no rooms.

So the competitors that matter most are the **pubs** on Brisbane's north side, not the motels. Motels and apartment hotels near Aspley were captured too, as context for anyone who later asks about adding accommodation, but they do not compete for the same customer.

## Sites reviewed

| Tier | Site | Suburb | Operator | Why it is here |
|---|---|---|---|---|
| **Client** | Aspley Hotel | Aspley | Star Hotels Group | The site being pitched |
| A: direct pub rival | Albany Creek Tavern | Albany Creek, about 4 km west | ALH Group (pub+ app) | Closest pub rival with bistro, gaming, functions |
| A: direct pub rival | Taigum Tavern | Taigum, about 5 km east | Australian Venue Co (The Pass app) | Closest eastern pub rival |
| A: direct pub rival | Everton Park Hotel | Everton Park, about 7 km south-west | Australian Venue Co (The Pass app) | Same offer plus kids club |
| A: direct pub rival | Kedron Park Hotel | Kedron Park, about 8 km south | ALH Group (pub+ app) | Same offer, same customer |
| A: direct pub rival | Eatons Hill Hotel | Eatons Hill, about 9 km north-west | Comiskey Group | Large northside pub, entertainment and functions |
| B: premium Brisbane pub | Regatta Hotel | Toowong | Australian Venue Co | Best-in-class Brisbane pub site, functions finder |
| B: premium Brisbane pub | Breakfast Creek Hotel | Albion | ALH Group | Iconic pub, multiple bookable venues |
| B: premium Brisbane pub | Normanby Hotel | Red Hill | Independent | Strong editorial pub site, text menus, reviews |
| C: nearby accommodation | Aspley Motor Inn | Aspley, same road | Independent | Next door; context only |
| C: nearby accommodation | Chermside Motor Inn | Chermside | Independent | Context only |
| C: nearby accommodation | Quest Chermside | Chermside | Quest Apartment Hotels | Context only |
| C: nearby accommodation | Adina Chermside | Chermside | TFE Hotels | Context only |
| C: nearby accommodation | Novotel Brisbane Airport | Brisbane Airport | Accor | Context only |
| D: premium design benchmark | The Calile Hotel | Fortitude Valley | Anna Hotels | Brisbane's design reference |
| D: premium design benchmark | The Hoxton Shoreditch | London | Ennismore | Integrated booking UX |
| D: premium design benchmark | Ace Hotel Sydney | Surry Hills | Ace Hotel Group | Editorial typography |
| D: premium design benchmark | The Prince St Kilda | St Kilda | Independent | Pub + hotel + live music brand |
| D: premium design benchmark | Desa Potato Head | Bali | Potato Head | Bold brand, unified booking menu |
| D: premium design benchmark | Halcyon House | Cabarita Beach | Independent | Quiet luxury, separate book buttons |
| D: premium design benchmark | The Old Clare Hotel | Chippendale | Ode Hotels | Booking panel opens on load |

Distances are approximate straight-line figures and are for orientation only. Merivale's The Newport was attempted but its bot protection returned an "Access denied" page, so it is excluded.

## Head-to-head: Aspley vs the pubs it competes with

Design scores are a reviewer judgement from 1 to 10, based on photography, typography, layout, hierarchy and how quickly the primary action is found. Home page download time is a single `curl` measurement from the same machine on the same day, so treat it as a relative comparison, not a benchmark.

| | Aspley Hotel | Albany Creek Tavern | Taigum Tavern | Everton Park Hotel | Kedron Park Hotel | Eatons Hill Hotel | Regatta Hotel | Breakfast Creek | Normanby |
|---|---|---|---|---|---|---|---|---|---|
| **Design score** | **3** | 6 | 7 | 7 | 6 | 5 | 8 | 7 | 7 |
| **Online table booking** | **None. Phone only** | OpenTable | SevenRooms | SevenRooms | OpenTable | OpenTable, SevenRooms | SevenRooms | OpenTable, per venue | Now Book It |
| **"Book" in header on every page** | **No. "Call" only** | Yes | Yes | Yes | Yes | Yes | Yes | Yes | Yes |
| **Home page download time** | **8.3 s** | 0.3 s | 1.5 s | 1.7 s | 0.3 s | 2.0 s | 1.8 s | 0.3 s | 2.1 s |
| **Loyalty app with sign-up incentive** | Star Rewards via QR code on a desktop screen | pub+, "$10 in rewards" banner | The Pass, "$10 off" banner | The Pass, "$10 off" banner | pub+, banner | None found | The Pass | pub+, banner | None found |
| **What's On cards with a Book button each** | No. Poster images only | Yes | Yes | Yes | Yes | Partial | Yes | Yes | Yes, plus ticket links |
| **Food photography** | **None. Empty rooms only** | Strong | Strong | Strong | Strong | Some | Strong | Strong | Strong |
| **Menus** | Image-only PDFs in an iframe; blank on phones | Menus page, prices not in the text | PDFs plus Mr Yum ordering | PDFs | Menus page, prices not in the text | Not checked | Not checked | Menus page, prices not in the text | **Text menu with prices** |
| **Functions flow** | Modal that loads blank, then a long form | Function pack + enquiry form | Enquiry page | Function spaces page | Function pack + enquiry | Function spaces | **Filterable finder: 10 spaces, guests, seated/standing, type** | Function pages per space | Function pages per occasion |
| **Responsible gambling message** | **None found** | Yes, footer | Yes, Gambling Help 1800 858 858 | Responsible service statement | Yes, footer | None found | Responsible service statement | Yes, footer | None found |
| **Structured data for Google** | Generic, with wrong opening hours | LocalBusiness | Generic | Generic | LocalBusiness, Restaurant | Generic | Generic | LocalBusiness | Generic |
| **Reviews or social proof on site** | None, despite 4.2 stars from 791 Google reviews | None | None | None | Yes | None | None | None | Review quote + Instagram feed |
| **Mobile first screen** | Text block on dark photo, posters cut off | Food photo, clear name | Video hero (failed in capture) | Venue photo, action list | Promo banner, venue photo | Logo on grey | Logo, two clear buttons | Promo banner, venue photo | Photo collage |

Sources for each cell are the screenshots in `screenshots/`, the metadata files in `data/`, and a direct HTML probe of each home page on 12 Oct 2026. "None found" means the probe did not find it in the home page HTML; it may exist deeper in the site.

### Capture artefacts to be honest about

- **Taigum Tavern** hero shows "Video unavailable". Its hero is a YouTube embed that headless Chromium could not play. A real visitor sees a video. Do not use this screenshot to criticise Taigum.
- **Eatons Hill Hotel** hero is a grey box with a logo for the same reason: a video that did not play in the capture.
- **Everton Park Hotel** has a few blank white image boxes further down the page. These are lazy-loaded images that had not arrived when the capture fired.
- **Ace Hotel Sydney** first screen is partly covered by a privacy banner that appears for US-routed traffic.

None of these artefacts apply to the Aspley captures. The Aspley problems were reproduced across several runs in the audit.

## Where Aspley is losing

Each point below is evidence a client can see for themselves.

1. **Every rival lets a guest book a table online in two clicks. Aspley makes them call.** All eight pubs above have a "Book" button fixed in the header and a booking engine behind it. Aspley's header shows only "CALL (07) 3263 4040". See `overview-pubs-first-screen-desktop.jpg` and compare `brisbane-00-aspley-hotel-home-desktop-fold.jpg` with `brisbane-09-albany-creek-tavern-booking-desktop.jpg`. Anyone browsing at 9 pm for tomorrow's dinner goes to a pub where they can book.

2. **Rivals sell the food. Aspley shows empty rooms.** Albany Creek, Taigum, Kedron Park, Breakfast Creek and the Normanby lead with plated food. Aspley's EAT section is a photo of chairs. See `overview-pubs-full-home-desktop.jpg`.

3. **The big groups use loyalty apps to win the first visit.** pub+ and The Pass both put "$10 off your first order" or "$10 in rewards" in a banner on every page. Aspley's Star Rewards sign-up is a QR code on a desktop screen and an accordion with an empty title on mobile. See `brisbane-02-everton-park-hotel-home-desktop-fold.jpg` and `../aspley-current-site/screenshots/01-home-mobile.jpg`.

4. **Aspley's site is roughly 4 to 27 times slower to download than its rivals.** 8.3 seconds against 0.3 to 2.1 seconds. The audit measured a 13.7 second Largest Contentful Paint on the home page. Google ranks slow pages lower, and mobile visitors leave before it loads.

5. **Events are posters on Aspley and products on rival sites.** Rivals show each event as a card with a date, a short description and a "Book now" or "Find out more" button. Aspley shows Canva posters, and its one ticketed event has a checkout that leads nowhere. See `brisbane-09-albany-creek-tavern-home-desktop.jpg` beside `../aspley-current-site/screenshots/43-booking-ticket-step4-checkout-attempt-desktop.jpg`.

6. **Function bookers get a much better experience elsewhere.** The Regatta Hotel lets a planner filter ten spaces by guest count, seated or standing, and event type, with photos and capacities. Aspley's "Enquire" button opens a blank box. See `pub-benchmark-01-regatta-hotel-functions-desktop.jpg` and `../aspley-current-site/screenshots/32-functions-enquire-modal-desktop.jpg`.

7. **Rivals meet gaming compliance expectations visibly. Aspley does not.** Taigum, Albany Creek, Kedron Park and Breakfast Creek all carry a responsible gambling statement, and Taigum shows the Gambling Help number. Aspley promotes a 10am to 4am gaming room and a members jackpot with no such message.

8. **Aspley has social proof and hides it.** Its own Google Maps embed shows 4.2 stars from 791 reviews. The Normanby puts a review quote and its Instagram feed on the home page. Aspley shows neither.

## Where Aspley can leapfrog, not just catch up

The rivals are good but templated. ALH venues share one template and AVC venues share another, so Kedron Park looks like Albany Creek and Taigum looks like Everton Park. A bespoke site gives Aspley ground that the big groups cannot easily follow.

- **Menus as real text.** Most rivals publish menus as PDFs or as pages without prices in the text. Only the Normanby publishes a text menu with prices. A fast, searchable HTML menu with members pricing shown beside each dish would beat all of them on Google and on phones.
- **A real brand.** "Pub on the hill, est. 1935" is a story none of the template sites can tell. The Normanby ("A Brisbane legend since 1890") and the Regatta ("Iconic riverside pub since 1874") show how well heritage works when it is the headline.
- **Speed.** Rival sites download in about 0.3 to 2 seconds. A modern static build can serve Aspley's home page in well under a second.
- **Reviews.** No direct rival shows Google reviews. Aspley has 791 of them.
