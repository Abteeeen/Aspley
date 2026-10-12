# Aspley Hotel — issues found on the current site

Evidence-backed list, 12 Oct 2026. Screenshots are in `screenshots/`; raw measurements are summarised in `site-map.md`. Severity reflects business impact for a pub whose website exists to drive phone calls, function enquiries, event tickets, bistro visits and loyalty sign-ups.

Severity key: **critical** = revenue or trust is being lost right now; **high** = materially hurts conversion, discoverability or compliance; **medium** = degrades experience/quality; **low** = housekeeping.

---

## A. Conversion and booking flow

### A1. Event ticket purchase is a dead end — critical
- **Where:** `/product/melbourne-cup/` → "Buy Ticket Now" → `/`. Screenshots `40-booking-ticket-step1-product-desktop.jpg`, `41-booking-ticket-step2-filled-desktop.jpg`, `42-booking-ticket-step3-after-add-to-cart-desktop.jpg`, `43-booking-ticket-step4-cart-click-desktop.jpg`, `43-booking-ticket-step4-checkout-attempt-desktop.jpg`, `42-booking-ticket-step3-after-add-to-cart-mobile.jpg`.
- **What:** WooCommerce + Box Office is installed and the product adds to the cart (header shows a cart icon with "1"), but the site has **no cart or checkout page**: `/cart/` and `/checkout/` are 404, WooCommerce's own `cart_url` is set to the home page, the cart icon links to the home page, and the cart widget is `hidden-xs` (not shown at all on phones). `?page_id=cart` renders an empty "Untitled" page. A customer who clicks "Buy Ticket Now" is simply returned to the home page with no explanation and no way to pay.
- **Why it costs bookings:** Every Melbourne Cup ticket ($55, "BOOKINGS ESSENTIAL") sold via the site is currently impossible; the "Cart 1" badge then follows the customer around the site as a confusing artefact. WooPayments is loaded on every page purely as dead weight.

### A2. No online table booking at all — high
- **Where:** site-wide; the only above-the-fold CTA on every page is "CALL (07) 3263 4040" (desktop) / a 40x40 "Call" icon (mobile). Poster: "BOOK YOUR TABLE NOW — CALL (07) 3263 4040" (`08-event-melbourne-cup-day-desktop.jpg`).
- **What:** No reservation widget (OpenTable, Now Book It, ResDiary, SevenRooms, Quandoo, Bopple, Me&u, Mr Yum — none present). Bistro bookings require a phone call during hours.
- **Why:** Evening/after-hours demand (the audience that browses on phones at 9 pm) cannot convert; competitors in the Star Hotels group and nearby pubs offer instant booking.

### A3. Function "Enquire" opens a blank modal for several seconds — high
- **Where:** home page FUNCTIONS panel → "ENQUIRE". `32-functions-enquire-modal-desktop.jpg` (blank after 2 s), `32-functions-enquire-modal-loaded-desktop.jpg` (eventually filled), `32-functions-enquire-modal-mobile.jpg`.
- **What:** The button is a Bootstrap `data-toggle="modal"` with `data-remote="false"`, yet the theme AJAX-loads the full `/functions-enquiry-form/` page (94 KB, 3–10 s TTFB) **twice** on click and injects the form. The user sees an empty white box titled "FUNCTION ENQUIRY FORM"; see `flow3` log in the addendum for measured population time. Nothing indicates it is loading.
- **Why:** Function bookings are the highest-value enquiry on the site ($1,000–$2,000 minimum spends); a blank box reads as "broken" and people close it.

### A4. Functions enquiry page has no heading and its first labels are hidden under the sticky header — medium
- **Where:** `/functions-enquiry-form/`, `04-functions-enquiry-form-desktop.jpg`, `44-functions-form-focused-desktop.jpg`.
- **What:** Page has no H1 or intro; the form starts immediately under the fixed header so "Full Name / Email Address / Phone Number" labels are clipped. The "Preferred Date" field is three selects whose Year list runs from 2027 **back to 1920**; "Preferred Time" is HH:MM + AM/PM selects. No date picker, no availability check, no indication of response time.
- **Why:** Friction on the single most valuable form; birth-year style date entry is a well-known abandonment pattern on mobile.

### A5. Phone is the only path, and the `tel:` links are inconsistent — low
- `tel: (07) 3263 4040` (with space), `tel:(07)32634040`, `tel:+61732634040`, `tel:0732634040` — four spellings; the one with a leading space is technically invalid and breaks on some dialers. Email address (`enquiries@aspleyhotel.com.au`) appears only inside the functions PDF, never on the site.

### A6. Star Rewards sign-up is a QR code on screen — medium
- **Where:** home STAR REWARDS panel, `01-home-desktop.jpg` (large red QR image), mobile `01-home-mobile.jpg` (collapsed accordion with an **empty title**, just a "+").
- **What:** Desktop users are shown a QR code they cannot scan with the device they are on; the "SIGN UP TO STAR REWARDS" button goes to `https://qrco.de/bbdyet` (third-party short link) in a new tab. On mobile the panel is an accordion whose header text is missing.
- **Why:** Loyalty membership drives $1-off-every-dish pricing and gaming promotions; the sign-up path is confusing on both form factors.

---

## B. Performance and Core Web Vitals

### B1. Pages take 8–20 s to load; LCP 6–24 s; TTFB 2–11 s — critical
- **Where:** every page. Numbers in `site-map.md §2`. Home: TTFB 9.8 s, FCP 13.4 s, LCP 13.7 s, `load` 20.0 s (desktop); mobile LCP 6.2 s, CLS **0.31**. `curl` TTFB for the HTML alone ranged 1.9–10.4 s across 21 fetches (median ≈ 5.5 s); example.com through the same proxy was 0.14 s.
- **What:** (a) Slow origin: HTML is generated in multiple seconds, uncached, HTTP/1.1, no compression. (b) 101 requests / 4.8 MB compressed / 11.1 MB decoded on the home page: 6.3 MB of JavaScript (54 scripts) including reCAPTCHA (0.85 MB, requested 3×), Google Maps JS API loaded **twice** with two different keys (2.5 MB, 18 requests, loaded synchronously — Chrome logs a warning), three Google Tag Manager/gtag loaders (1.4 MB), WooCommerce + WooPayments + Gravity Forms bundles on pages that do not use them. (c) 0.9 MB of CSS, of which the theme's `main-red-*.css` is 489 KB uncompressed (Bootstrap 3 + everything). (d) 2.7 MB of images: event posters are 1414x2000 / 1449x2048 files rendered at 270x405 (22 of 27 home images are served at more than 2× their rendered size; 480 KB and 345 KB WebPs for carousel thumbnails).
- **Why:** Google's thresholds are LCP ≤ 2.5 s / CLS ≤ 0.1 / TTFB ≤ 0.8 s; the site fails all three on every page. Mobile visitors on 4G routinely abandon after ~3 s; search ranking is penalised.

### B2. Menu pages never finish loading on mobile — high
- **Where:** `/main-menu/`, `/cocktail-menu/` in iPhone emulation; `03-cocktail-menu-mobile.jpg`, `02-main-menu-mobile.jpg`.
- **What:** Both pages embed the menu as a PDF.js iframe (800 px tall). In three separate mobile runs the `load` event never fired within 120–150 s and the captured page shows only the heading over a blank body (the iframe is absent from the mobile DOM after 60 s; desktop renders it after 10–15 s). Needs confirming on a physical phone, but the desktop experience is already an A3 PDF squeezed into a 1,200 px frame (`02-main-menu-desktop.jpg`) that must be pinch-zoomed to read.
- **Why:** "What's on the menu / how much is a parmy" is the #1 mobile query for a pub; the answer is unreachable or unreadable.

### B3. Layout shift on mobile home page (CLS 0.31) — high
- **Where:** `/` mobile. Measured via PerformanceObserver during load.
- **What:** Carousel images without reserved dimensions, late-loading Typekit fonts (Myriad Pro swaps in after ~1 s) and the Maps embed push content around.

### B4. Origin serves no compression and no caching — high
- `curl -I` on `main-red-a542f5d992.css` (489 KB), `main-e4fc27a228.js` (109 KB), `jquery.min.js`, `woocommerce.css`, and the HTML itself: no `Content-Encoding`, no `Cache-Control`, no `Expires`, no `ETag`. HTTP/1.1 only. Every return visit re-downloads everything and every request serialises over few connections.

### B5. Third-party bloat loaded on pages that do not use it — medium
- WooCommerce (11 scripts/CSS), WooPayments, Box Office, Product Add-Ons, Gravity Forms + reCAPTCHA v2 **and** v3 loaders, Google Fonts Poppins (never used in any computed style), Akismet front-end JS and the Maps API appear on all 21 pages including the 404 page (67 requests, 5.8 MB decoded for a "Page not found").

---

## C. Mobile usability

### C1. Mobile menu overlays the hero text with a translucent panel — high
- **Where:** `36-home-mobile-menu-open.jpg`.
- **What:** Opening the hamburger slides a semi-transparent black panel over the hero; "ASPLEY HOTEL / BISTRO • BAR • GAMING" and the paragraph remain visible through the menu items, so "EAT", "DRINK", "GAMING" sit on top of other text. The hamburger has no `aria-label`/`aria-expanded` and is 44x34 px.

### C2. Tap targets under 44 px — medium
- **Where:** mobile home (`01-home-mobile.jpg`): 17 of 53 interactive elements are below 44 px in at least one dimension — all red CTA buttons are 37 px tall, "Call" is 40x40, hamburger 44x34, social icons 24x22, "www.starliquor.com.au" link 17 px tall, footer credit links 11 px. Mobile nav items are 38 px tall. Product page "-" / "+" quantity buttons are unlabeled.

### C3. Text over photographs with insufficient contrast — medium
- **Where:** mobile home panels EAT/DRINK/GAMING/FUNCTIONS/SPORTS BAR render white copy directly over venue photos with a dark scrim (`01-home-mobile.jpg`); axe flags `#panel-eat h2` for contrast on mobile and 8 nodes on desktop (`.col-sm-6 p` Star Rewards copy, grey on white). Red link text on the dark-grey BOTTLESHOP band (`www.starliquor.com.au`) is flagged as "link-in-text-block" and is low contrast.

### C4. ~800 px of blank space where the map should be — medium (needs device confirmation)
- **Where:** `01-home-mobile.jpg` and `01-home-desktop.jpg` LOCATION panel, `37-home-location-map-desktop.jpg`.
- **What:** The Google Maps embed iframe (720x800 desktop, 100% x 800 px mobile) rendered blank in headless Chromium on every run (the Maps API did load; the embed iframe did not paint). Even when it paints, 800 px of map on a phone is excessive. The BOTTLESHOP panel also has an empty right half on desktop (1,435 px tall band with text in the left column only).

### C5. Carousel posters are unreadable thumbnails — medium
- **Where:** WHAT'S ON carousel, `35-home-above-fold-mobile.jpg`, `30-home-above-fold-desktop.jpg`.
- **What:** Promotions exist only as A4/A0 poster artwork (the Melbourne Cup menu poster is a full menu in ~6 px type at thumbnail size). Each tile opens the same poster in a modal; the event pages contain the same image and nothing else. Prev/next arrows are small red squares with "<" ">" characters; the carousel auto-advances every 5 s and the overlay links have no accessible name (19 `link-name` violations on the home page).

---

## D. SEO and discoverability

### D1. Home page has no meta description and a generic title — high
- `<title>Aspley | Star Hotels</title>`; no `<meta name="description">`. "Aspley Hotel", "Brisbane", "pub", "bistro", "Gympie Road" do not appear in the title. 7 of 16 real pages have no meta description (home, cocktail menu, functions form, 3 event pages, plus all archives).

### D2. XML sitemap advertises five 404 URLs — high
- `/event/tasty-parmy-reward/`, `/event/happy-easter-weekend/`, `/event/valentines-day/`, `/event/the-best-place-for-live-league/`, `/event/members-mega-draw/` are listed in `sitemap.xml` (regenerated 12 Oct 2026) but return 404. Site search still indexes "Tasty Parmy Reward" and links to the 404 (`20-search-results-desktop.jpg`). Google will keep crawling dead pages and the event archive looks abandoned.

### D3. Duplicate and conflicting structured data / Open Graph — high
- Two SEO outputs run at once (Rank Math + WordPress core/Site Kit): every page has two `og:title` values ("Aspley | Star Hotels" and "Home - Aspley Hotel"), two `og:image`s (a 512 px favicon and the proper 1200x630 social card), `og:locale` en_GB **and** en_US, and two JSON-LD `@graph` blocks. Rank Math's schema types the business as `["BarOrPub","Organization"]` with `openingHours: Mo–Su 09:00-17:00` — hours that match nothing on the page (bistro 11:30–20:30, gaming 10:00–04:00) — and its logo URL is `http://` not `https://`. No `LocalBusiness` address, phone, geo, `servesCuisine`, `hasMenu`, `Event` or `Offer` schema although all that content exists. The Melbourne Cup event has no `Event` markup.

### D4. Menus are invisible to search engines — high
- The main menu and cocktail menu PDFs are flattened Canva images with **no extractable text** (`pdftotext` returns nothing); the pages that embed them contain 48 words. Every dish, price and "members price" is unindexable, unsearchable and unreadable by screen readers. The wine list PDF is text but is a group file ("Wine-Menu-QLD-No-Prices.pdf").

### D5. Event pages are image-only with no body text and no H1 — medium
- All 6 live event pages: H2 title + poster + "close"; 45–49 rendered words (all chrome). No date/time in text, no location, no CTA, no `Event` schema. Archive shows publish dates ("12/10/2026", "06/12/2023") that look like event dates, and exposes author usernames ("By opremmarketing", "By genine") with public author archives.

### D6. Heading structure — medium
- Home: H2 "ASPLEY HOTEL" precedes the H1 "BISTRO • BAR • GAMING" (the brand name should be the H1). Product page, functions page and all event pages have **no H1** (axe `page-has-heading-one`, 16 page-views). Six pages share the title "Page not found | Aspley Hotel".

### D7. Thank-you page, author archives and search results are indexable — low
- `/thank-you/` is in the sitemap and has `index,follow`; `/author/*` and `/search/*` return 200 with no `noindex`.

---

## E. Content accuracy and trust

### E1. Trading hours contradict each other in three places — high
- EAT panel: lunch & dinner "Sunday – Wednesday"; footer LOCATION panel: "Monday – Wednesday"; footer all-day dining "11:30**pm** – 8:30pm"; schema: "09:00-17:00 every day". Google Business Profile and the website will disagree, and a customer cannot tell whether Sunday lunch is served. (`01-home-desktop.jpg` EAT and LOCATION panels.)

### E2. Copy-paste from a sister venue — high
- Meta description for `/event/members-jackpot/`: "Join us Sundays at **The Ox Margate** with our Members Jackpot Draw." Page title says "Sunday Members Jackpot"; the poster says "**SATURDAY** MEMBERS JACKPOT DRAW". Melbourne Cup poster says "2 COURSE MENU $55"; the ticket product says "3-course lunch" / "3 Course Lunch $55". Hero photo asset is named `Aspley-Hotel-Chermside-Venue-Front-Exterior`.

### E3. Typos and grammar in primary copy — medium
- "ensuing your occasion run smoothly", "an experience team", URL `/event/we-love-our-seniours/`, "Book your table now !!". Functions PDF: "cozy", "Please inform the chef upon booking of any dietary needs" (fine) but "$ 15" spacing etc.

### E4. Broken and hard-coded year-specific image on the ticket page — medium
- `/product/melbourne-cup/` references `http://…/2024/10/ASP-Melbourne-Cup-24-360x360.jpg` → 404 and mixed content; the gallery shows the WooCommerce "Awaiting product image" placeholder (`40-booking-ticket-step1-product-desktop.jpg`). The product title is also clipped under the fixed header.

### E5. No responsible-gambling messaging — medium (compliance)
- The GAMING panel promotes "GUARANTEED GAMING HOURS 10:00am – 4:00am", jackpots and "Jag the Joker" with no "Gamble responsibly"/Gambling Help 1800 858 858 statement anywhere on the site; Queensland's Responsible Gambling Code of Practice expects responsible-gambling messaging alongside gaming promotion. (Observation only; legal review needed.)

### E6. Privacy policy is a 4-page group PDF, no cookie/consent notice — low
- GTM, GA4, DoubleClick (`stats.g.doubleclick.net`) and reCAPTCHA fire on first paint with no notice; the only privacy link is a PDF written for "Star Group Management". No cookie banner element exists (no `[class*=cookie]`). Not a legal requirement in Australia today, but the policy itself promises "cookies… you can disable" without a mechanism.

---

## F. Accessibility (axe-core 4.10, 42 page-views; WCAG 2.1 AA)

| Rule | Impact | Page-views | Nodes | Where |
|---|---|---|---|---|
| `link-name` (links without discernible text) | serious | 22 | 79 | Facebook/Instagram icon links on every page; 19 carousel overlay links on home |
| `image-alt` | critical | 22 | 22 | Header logo `image.png` (alt=""), `.call-icon img` (mobile), carousel fader image; 8 of 27 home images lack alt |
| `color-contrast` | serious | 2 | 9 | Star Rewards paragraph text; EAT h2 over photo on mobile |
| `frame-title` | serious | 2 | 2 | Google Maps iframe has no title |
| `link-in-text-block` | serious | 1 | 2 | Red links inside grey text (Star Hotels venues / Star Liquor stores) |
| `page-has-heading-one` | moderate | 16 | 16 | Product, functions form, all event pages |
| `landmark-one-main` / `region` | moderate | 42 | 170 | No `<main>`; content outside landmarks on every page |

Additional manual findings: keyboard focus relies on the browser default outline (visible but unstyled, `34-home-keyboard-focus-desktop.jpg`); the carousel auto-plays with no pause control; the mobile hamburger lacks `aria-expanded`; the WooCommerce quantity "+"/"-" buttons have no label; the reCAPTCHA textarea is unlabeled (expected); PDF menus are inaccessible to screen readers (image-only). Gravity Forms labels are correctly associated (all visible inputs have labels — a positive).

---

## G. Security and hosting hygiene

### G1. `https://www.aspleyhotel.com.au/` throws a certificate error — high
- The certificate presented for the www host is `CN=thegaragefv.com.au` (another customer on the shared host). Anyone who types "www." gets a full-page browser security warning. `http://www.` correctly 301s to the apex, but HTTPS www does not.

### G2. Mixed content — medium
- Product page requests an `http://` image (Chrome auto-upgrades, then 404s). Rank Math logo schema URL is `http://`. Footer/partner links (`starliquor`, `pennybridge`, `nichestud.io`, `browsehappy`) are plain `http://`.

### G3. Information disclosure — medium
- Apache directory listing is **enabled** on `/wp-content/uploads/sites/46/…/` (every upload, every thumbnail size, browsable); `/readme.html` and `/license.txt` exposed; REST API enumerates user accounts (`niche`, `genine`) and author archives exist (`/author/genine/`, `/author/opremmarketing/`); `/wp-login.php` is at the default URL. `xmlrpc.php` is disabled (good). No security headers at all (HSTS, CSP, X-Frame-Options, X-Content-Type-Options, Referrer-Policy).

### G4. Google Maps API keys exposed in page source — low
- Two browser keys are in the HTML (`AIzaSy…ZiY`, `AIzaSy…QF2Y`). Normal for Maps JS, but they must be HTTP-referrer-restricted; this could not be verified.

### G5. Outdated front-end stack — medium
- Bootstrap 3.3.6 (2015, end-of-life), jQuery Migrate, Cycle2, theme bundle last built May 2024; "browsehappy" outdated-browser banner markup still shipped. WordPress core version is not exposed in the HTML (good), WooCommerce 11.1.0 is current.

---

## H. Design and brand consistency

### H1. Header logo is a low-quality PNG with no alt — medium
- `image.png` (595x368, alt="") rendered at 140x50 in the header and again in the footer; the cocktail PDF and footer use a sharper "EST 1935 — PUB ON THE HILL" badge. Favicon is a separate 2021 "cropped-Favicon.png" also used as an `og:image`.

### H2. Inconsistent section layouts — low
- Alternating image/text halves on desktop (`01-home-desktop.jpg`) but STAR REWARDS is a boxed card with a QR, BOTTLESHOP is a 1,435 px dark band with an empty right half, LOCATION is right-aligned text next to the map. Mobile has centre/left/right alignment changes between panels. Buttons are all-caps red rectangles of 37 px; headings use Myriad Pro bold caps with a short red underline — the only consistent brand device.

### H3. No photography of food, no people, no atmosphere — medium
- All venue photos are empty rooms; the bistro is represented by chairs, the bar by fridges. Promotions are Canva posters. For a "hearty feed" positioning there is not one dish photo on the site.

### H4. 12 links open new tabs without warning; menus leave the site — low
- Every menu/package button opens a PDF in a new tab (`target="_blank"`, no `rel="noopener"` on several); two hrefs contain a leading space (`" https://aspleyhotel.com.au/main-menu/"`).

---

## I. Things that are fine (so the pitch is honest)

- HTTPS works on the apex domain and `http://` redirects (301).
- Proper 404 status with a themed page and search box; `robots.txt` and an XML sitemap exist; canonical tags are present on real pages; `lang="en-AU"`.
- Social-card image (1200x630 WebP) exists; copyright year is current (© 2026); favicon set in 3 sizes.
- Gravity Forms markup associates labels correctly; reCAPTCHA v3 protects forms; `/thank-you/` confirmation exists.
- Content is kept up to date (Melbourne Cup 2026 material published 12 Oct 2026; sitemap regenerates daily).
- WordPress core version is not leaked; xmlrpc is disabled.
