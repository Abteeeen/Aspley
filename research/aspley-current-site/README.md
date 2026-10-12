# Aspley Hotel website audit — executive summary

**Site:** https://aspleyhotel.com.au/ — Aspley Hotel, 1247 Gympie Road, Aspley QLD 4034, (07) 3263 4040. Audited 12 Oct 2026 with curl, headless Chromium (Playwright) at 1440x900 and 390x844, axe-core and PDF extraction. Full detail: `site-map.md` (URLs, tech, timings), `issues.md` (evidence per issue), `content-and-language.md` (verbatim copy, menus, hours, brand voice), `screenshots/` (63 captures, JPEG).

## What the site is

A one-page WordPress brochure for a **suburban Brisbane pub** — bistro, bar, gaming room, sports bar/TAB, functions, drive-through bottle shop and the Star Rewards loyalty program. **It is not an accommodation hotel: there are no rooms, rates or booking engine**, so a rebuild pitch must be about pub conversions (phone calls, table bookings, function enquiries, event tickets, loyalty sign-ups), not room nights. The venue joined the Star Hotels Group in November 2023 ("EST 1935 — Pub on the Hill"); the site runs on the group's WordPress multisite (site 46), built by Niche Studio on a Bootstrap 3 theme with design by Pennybridge Creative, with Rank Math, Gravity Forms, WooCommerce + Box Office (for tickets), Google Site Kit/GTM/GA4, Typekit (Myriad Pro) and a PDF.js viewer for menus. Content is actively maintained (Melbourne Cup 2026 material posted the day of the audit) but quality control is weak.

Pages: home (all nav items are anchors on it), Main Menu and Cocktail Menu (embedded image-only PDFs), Functions Enquiry Form, Thank You, one ticket product (Melbourne Cup, $55), an events archive with 6 live poster-only event pages, plus 5 PDFs (kids menu, coffee & cake, wine, functions package, privacy). The sitemap also lists 5 event URLs that are 404.

## Top 10 issues by business impact

| # | Issue | Severity | Evidence |
|---|---|---|---|
| 1 | **Ticket purchase cannot complete.** "Buy Ticket Now" adds to a WooCommerce cart, but `/cart/` and `/checkout/` are 404 and the cart icon links to the home page. Every Melbourne Cup ticket "sold" online is lost. The product image is also broken (404, hard-coded 2024 file). | Critical | `42-booking-ticket-step3-after-add-to-cart-desktop.jpg`, `43-booking-ticket-step4-checkout-attempt-desktop.jpg`, `40-booking-ticket-step1-product-desktop.jpg` |
| 2 | **Site is extremely slow.** Home page: TTFB 9.8 s, LCP 13.7 s, full load 20 s, 101 requests, 4.8 MB compressed / 11 MB decoded; every page's TTFB is 2–11 s. No compression, no caching, HTTP/1.1, Google Maps loaded twice, reCAPTCHA three times, 6.3 MB of JavaScript. Fails all three Core Web Vitals on every page. | Critical | `site-map.md §2`, `01-home-desktop.jpg` |
| 3 | **Menus are unreadable and unindexable.** The main and cocktail menus are flattened Canva PDFs inside an 800 px iframe; on mobile emulation the pages never finished loading and showed a blank body in three runs; on desktop an A3 sheet is squeezed into 1,200 px. No dish, price or "members price" exists as text for Google or screen readers. | High | `02-main-menu-desktop.jpg`, `03-cocktail-menu-mobile.jpg` |
| 4 | **No online table booking** — the only CTA anywhere is "CALL (07) 3263 4040"; the Melbourne Cup poster itself says "BOOK YOUR TABLE NOW — CALL". No reservation widget of any kind. | High | `30-home-above-fold-desktop.jpg`, `08-event-melbourne-cup-day-desktop.jpg` |
| 5 | **Function "Enquire" opens an empty modal** for several seconds while it AJAX-loads the whole enquiry page twice; the enquiry page itself has no heading, labels clipped under the sticky header and a date picker whose year list runs back to 1920. | High | `32-functions-enquire-modal-desktop.jpg`, `04-functions-enquiry-form-desktop.jpg` |
| 6 | **Trust-damaging content errors:** trading hours contradict each other in three places (Sunday vs Monday lunch, "11:30pm – 8:30pm", schema says 9–5); an event description names "The Ox Margate" (a sister venue); "Sunday" vs "Saturday" jackpot; "2 course" vs "3 course" Melbourne Cup; typos ("ensuing your occasion run smoothly", `/we-love-our-seniours/`). | High | `01-home-desktop.jpg`, `site-map.md` row 11 |
| 7 | **SEO basics missing:** home page has no meta description and a generic title ("Aspley \| Star Hotels"); sitemap lists 5 dead URLs; duplicate/conflicting Open Graph and two JSON-LD blocks per page; schema hours wrong; no LocalBusiness/Event/Menu markup; event pages and product page have no H1; 16 page-views flagged for missing H1. | High | `site-map.md §1`, `issues.md §D` |
| 8 | **Mobile navigation and layout defects:** the hamburger menu is a translucent panel drawn over the hero text; 17 tap targets under 44 px (all buttons 37 px); CLS 0.31 on the mobile home page; Star Rewards accordion has an empty title; ~800 px blank map area; copy overlaid on photos with contrast failures. | High | `36-home-mobile-menu-open.jpg`, `01-home-mobile.jpg` |
| 9 | **`https://www.aspleyhotel.com.au/` throws a certificate warning** (cert is for another customer, `thegaragefv.com.au`); uploads directory listing is open; user accounts enumerable via REST; no security headers; Bootstrap 3.3.6 from 2015. | High | `site-map.md §1, §3` |
| 10 | **Accessibility failures:** 79 links without names (social icons, carousel overlays), 22 images without alt (including the logo), contrast failures, no `<main>` landmark, iframe without title, auto-playing carousel with no pause, no responsible-gambling message next to gaming promotions. | Medium–High | `issues.md §F`, `34-home-keyboard-focus-desktop.jpg` |

## What a rebuild must keep

The "pub on the hill" identity and EST 1935 badge; the simple EAT / DRINK / GAMING / FUNCTIONS / SPORTS BAR / STAR REWARDS / BOTTLESHOP structure; the friendly Aussie-pub voice; the full menu content with members pricing ($1 off every dish); function space capacities and package details; current promotions (Members Jackpot, Wednesday Trivia, Jag the Joker, Seniors 20% off, Melbourne Cup); the Star Rewards sign-up, Star Liquor and Star Hotels group links; phone number and address. All of this is transcribed verbatim in `content-and-language.md`.

## Quick wins a salesperson can quote

- Fix the ticket checkout (create WooCommerce cart/checkout pages) — recovers revenue immediately.
- Publish menus as HTML with schema, not image PDFs.
- Add a table-booking widget and an events calendar with real text, dates and `Event` schema.
- One source of truth for trading hours (page, footer, schema, Google Business Profile).
- Enable gzip/brotli + caching + HTTP/2 at the host, drop the duplicate Maps/reCAPTCHA/GTM loads, resize poster images — this alone would cut page weight by more than half.
- Fix the www certificate and turn off directory listing.

## Screenshot index

All captures taken 12 Oct 2026 with headless Chromium at 1440x900 (desktop) and 390x844 iPhone emulation (mobile). Full-page captures are capped at 16,000 px tall.

| File | Viewport | Shows |
|---|---|---|
| `01-home-desktop.jpg` | desktop | Home page, full length |
| `01-home-mobile.jpg` | mobile | Home page, full length |
| `02-main-menu-desktop.jpg` | desktop | Main Menu page (desktop: squeezed PDF; mobile: still blank after 53 s) |
| `02-main-menu-mobile.jpg` | mobile | Main Menu page (desktop: squeezed PDF; mobile: still blank after 53 s) |
| `03-cocktail-menu-desktop.jpg` | desktop | Cocktail Menu page |
| `03-cocktail-menu-mobile-viewport.jpg` | mobile | Cocktail Menu page |
| `03-cocktail-menu-mobile.jpg` | mobile | Cocktail Menu page |
| `04-functions-enquiry-form-desktop.jpg` | desktop | Functions enquiry form page |
| `04-functions-enquiry-form-mobile.jpg` | mobile | Functions enquiry form page |
| `05-thank-you-desktop.jpg` | desktop | Form thank-you page |
| `05-thank-you-mobile.jpg` | mobile | Form thank-you page |
| `06-product-melbourne-cup-desktop.jpg` | desktop | Melbourne Cup ticket product page |
| `06-product-melbourne-cup-mobile.jpg` | mobile | Melbourne Cup ticket product page |
| `07-event-archive-desktop.jpg` | desktop | Events archive |
| `07-event-archive-mobile.jpg` | mobile | Events archive |
| `08-event-melbourne-cup-day-desktop.jpg` | desktop | Event: Melbourne Cup Day |
| `08-event-melbourne-cup-day-mobile.jpg` | mobile | Event: Melbourne Cup Day |
| `09-event-melbourne-cup-menu-2026-desktop.jpg` | desktop | Event: Melbourne Cup menu 2026 |
| `09-event-melbourne-cup-menu-2026-mobile.jpg` | mobile | Event: Melbourne Cup menu 2026 |
| `10-event-tasty-parmy-reward-desktop.jpg` | desktop | Event: Tasty Parmy Reward |
| `10-event-tasty-parmy-reward-mobile.jpg` | mobile | Event: Tasty Parmy Reward |
| `11-event-members-jackpot-desktop.jpg` | desktop | Event: Members Jackpot (names sister venue) |
| `11-event-members-jackpot-mobile.jpg` | mobile | Event: Members Jackpot (names sister venue) |
| `12-event-happy-easter-weekend-desktop.jpg` | desktop | Event: Easter (stale, April) |
| `12-event-happy-easter-weekend-mobile.jpg` | mobile | Event: Easter (stale, April) |
| `13-event-valentines-day-desktop.jpg` | desktop | Event: Valentine's Day (stale, February) |
| `13-event-valentines-day-mobile.jpg` | mobile | Event: Valentine's Day (stale, February) |
| `14-event-live-league-desktop.jpg` | desktop | Event: Live League |
| `14-event-live-league-mobile.jpg` | mobile | Event: Live League |
| `15-event-trivia-wednesdays-desktop.jpg` | desktop | Event: Trivia Wednesdays |
| `15-event-trivia-wednesdays-mobile.jpg` | mobile | Event: Trivia Wednesdays |
| `16-event-jag-the-joker-desktop.jpg` | desktop | Event: Jag the Joker |
| `16-event-jag-the-joker-mobile.jpg` | mobile | Event: Jag the Joker |
| `17-event-we-love-our-seniours-desktop.jpg` | desktop | Event: Seniors (misspelt URL) |
| `17-event-we-love-our-seniours-mobile.jpg` | mobile | Event: Seniors (misspelt URL) |
| `18-event-members-mega-draw-desktop.jpg` | desktop | Event: Members Mega Draw |
| `18-event-members-mega-draw-mobile.jpg` | mobile | Event: Members Mega Draw |
| `19-404-page-desktop.jpg` | desktop | 404 page |
| `19-404-page-mobile.jpg` | mobile | 404 page |
| `20-search-results-desktop.jpg` | desktop | Search results page |
| `20-search-results-mobile.jpg` | mobile | Search results page |
| `21-author-archive-desktop.jpg` | desktop | Author archive (indexable, leaks usernames) |
| `21-author-archive-mobile.jpg` | mobile | Author archive (indexable, leaks usernames) |
| `22-product-category-tickets-desktop.jpg` | desktop | Tickets category page |
| `22-product-category-tickets-mobile.jpg` | mobile | Tickets category page |
| `30-home-above-fold-desktop.jpg` | desktop | Home, first screen only |
| `31-home-eat-section-desktop.jpg` | desktop | Home, EAT section |
| `32-functions-enquire-modal-desktop.jpg` | desktop | Functions "Enquire" modal (blank while loading, then loaded) |
| `32-functions-enquire-modal-loaded-desktop.jpg` | desktop | Functions "Enquire" modal (blank while loading, then loaded) |
| `32-functions-enquire-modal-mobile.jpg` | mobile | Functions "Enquire" modal (blank while loading, then loaded) |
| `33-home-contact-section-desktop.jpg` | desktop | Home, contact/footer section |
| `34-home-keyboard-focus-desktop.jpg` | desktop | Keyboard focus visibility test |
| `35-home-above-fold-mobile.jpg` | mobile | Home, first screen on phone |
| `36-home-mobile-menu-open.jpg` | mobile | Mobile menu open over hero |
| `37-home-location-map-desktop.jpg` | desktop | Location panel: wrong hours, text bleeding through header |
| `40-booking-ticket-step1-product-desktop.jpg` | desktop | Ticket flow step 1: product (broken image) |
| `40-booking-ticket-step1-product-mobile.jpg` | mobile | Ticket flow step 1: product (broken image) |
| `41-booking-ticket-step2-filled-desktop.jpg` | desktop | Ticket flow step 2: details filled |
| `42-booking-ticket-step3-after-add-to-cart-desktop.jpg` | desktop | Ticket flow step 3: after Add to Cart, returned to home |
| `42-booking-ticket-step3-after-add-to-cart-mobile.jpg` | mobile | Ticket flow step 3: after Add to Cart, returned to home |
| `43-booking-ticket-step4-cart-click-desktop.jpg` | desktop | Ticket flow step 4: cart/checkout are 404 |
| `43-booking-ticket-step4-checkout-attempt-desktop.jpg` | desktop | Ticket flow step 4: cart/checkout are 404 |
| `44-functions-form-focused-desktop.jpg` | desktop | Functions form, first field focused (labels under header) |

## Extra evidence noted while capturing

- Google Maps embed on the site shows **4.2 stars from 791 Google reviews**. None of that social proof appears anywhere on the site itself (`37-home-location-map-desktop.jpg`).
