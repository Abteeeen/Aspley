# Aspley Hotel — site map and technical inventory

Audit date: 12 Oct 2026. Method: `curl` (timings, headers, robots, sitemap, link HEAD checks), WordPress REST API discovery (`/wp-json/wp/v2/pages`, `/product`, `/users`), and Playwright 1.47 / headless Chromium 141 rendering every page at 1440x900 and 390x844 (iPhone emulation, DPR 2) with network, console, Performance API and axe-core 4.10 capture. All traffic went through the session's HTTPS proxy; a calibration fetch of example.com (TTFB 0.14 s) and wikipedia.org (0.39 s) through the same proxy shows the proxy adds well under half a second, so the multi-second timings below are the site's own.

## 1. Every URL found

Sources: XML sitemap (17 URLs), REST API (5 pages, 1 product, 2 users), links crawled from every rendered page, and common-path probes (`/accommodation/`, `/rooms/`, `/contact/`, `/gaming/`, `/shop/`, `/cart/`, `/checkout/`, `/my-account/`, `/about/` … all 404).

| # | URL | In sitemap | HTTP | `<title>` | Meta description | H1 | Words (rendered) | Notes |
|---|---|---|---|---|---|---|---|---|
| 01 | `/` | yes | 200 | Aspley \| Star Hotels | **none** | BISTRO • BAR • GAMING (an H2 "ASPLEY HOTEL" precedes it) | 587 | One-page site; all nav items are `#panel-*` anchors on this page |
| 02 | `/main-menu/` | yes | 200 | Main Menu \| Aspley Hotel | Explore our main menu featuring fresh pub classic favourites from steaks to parmy's. Great value dining for lunch and dinner. | Main Menu | 48 | Body is a PDF.js iframe of an image-only A3 PDF |
| 03 | `/cocktail-menu/` | yes | 200 | Cocktail Menu \| Aspley Hotel | **none** | Cocktail Menu | 48 | PDF.js iframe of image-only PDF |
| 04 | `/functions-enquiry-form/` | yes | 200 | Functions Enquiry Form \| Aspley Hotel | **none** | **none** | 261 | Gravity Forms form #2; also AJAX-loaded into the home-page "Enquire" modal |
| 05 | `/thank-you/` | yes | 200 | Thank You for your Enquiry \| Aspley Hotel | Thank you for contacting us… | Thank You | 81 | Form confirmation page, indexable |
| 06 | `/product/melbourne-cup/` | yes | 200 | Melbourne Cup \| Aspley Hotel | Celebrate Melbourne Cup Day with us!… | **none** (H2 only) | 96 | WooCommerce + Box Office ticket, $55 |
| 07 | `/event/` | no | 200 | Archives: Events \| Aspley Hotel | Events Archive - Aspley Hotel | Archives: Events | 96 | Auto-generated archive, 6 cards |
| 08 | `/event/melbourne-cup-day-at-aspley-hotel/` | yes | 200 | Melbourne Cup Day at Aspley Hotel \| Aspley Hotel | Enjoy Melbourne Cup Day this November 3rd… | **none** | 49 | Poster image only |
| 09 | `/event/melbourne-cup-day-menu-2026/` | yes | 200 | Melbourne Cup Day Menu 2026 \| Aspley Hotel | Check out our delicious menu… Book your table now !! | **none** | 48 | Poster image only |
| 10 | `/event/tasty-parmy-reward/` | yes | **404** | Page not found \| Aspley Hotel | none | Not Found | 58 | In sitemap and in site search results, but 404 |
| 11 | `/event/members-jackpot/` | yes | 200 | Sunday Members Jackpot \| Aspley Hotel | Sundays just got better! Join us Sundays at **The Ox Margate**… | **none** | 46 | Wrong venue in description |
| 12 | `/event/happy-easter-weekend/` | yes | **404** | Page not found \| Aspley Hotel | none | Not Found | 58 | Stale sitemap entry |
| 13 | `/event/valentines-day/` | yes | **404** | Page not found \| Aspley Hotel | none | Not Found | 58 | Stale sitemap entry |
| 14 | `/event/the-best-place-for-live-league/` | yes | **404** | Page not found \| Aspley Hotel | none | Not Found | 58 | Stale sitemap entry (lastmod 2025-02) |
| 15 | `/event/trivia-wednesdays/` | yes | 200 | Fun Trivia Wednesdays \| Aspley Hotel | **none** | **none** | 46 | Poster image only |
| 16 | `/event/jag-the-joker/` | yes | 200 | Jag the Joker \| Aspley Hotel | **none** | **none** | 46 | Poster image only |
| 17 | `/event/we-love-our-seniours/` | yes | 200 | Seniors Discount \| Aspley Hotel | Seniors save more on a great deal!… | **none** | 45 | Slug typo |
| 18 | `/event/members-mega-draw/` | yes | **404** | Page not found \| Aspley Hotel | none | Not Found | 58 | Stale sitemap entry |
| 19 | `/this-page-does-not-exist/` (404 test) | – | 404 | Page not found \| Aspley Hotel | none | Not Found | 58 | Proper 404 status, themed page with search box |
| 20 | `/search/parmy/` | – | 200 | Search Results for "parmy" \| Aspley Hotel | none | Search Results for parmy | 51 | Returns "Tasty Parmy Reward" which links to a 404 |
| 21 | `/author/genine/` | – | 200 | Author: genine \| Aspley Hotel | none | Author: genine | 51 | Author archives public ("Sorry, no results"); `/author/opremmarketing/` also 200 |
| 22 | `/product-category/tickets/` | no | 200 | see §1a | | | | WooCommerce category archive, linked from the product page |
| – | `/sitemap.xml`, `/sitemap.xsl` | – | 200 | | | | | Rank Math sitemap, regenerated daily, 17 URLs of which 5 are 404 |
| – | `/robots.txt` | – | 200 | | | | | `Disallow: /wp-admin/`, sitemap declared |
| – | `/feed/` | – | 200 | | | | | RSS enabled |
| – | `/readme.html`, `/license.txt` | – | 200 | | | | | WordPress stock files exposed |
| – | `/wp-content/uploads/sites/46/2026/10/` | – | 200 | | | | | **Apache directory listing enabled** on the uploads tree |
| – | `/wp-json/wp/v2/users` | – | 200 | | | | | Lists user accounts `niche` (id 1) and `genine` (id 4) |
| – | `/wp-login.php` | – | 200 | | | | | Standard login exposed; `/xmlrpc.php` returns 405 (disabled) |
| – | `/cart/`, `/checkout/`, `/shop/`, `/my-account/` | – | **404** | | | | | WooCommerce pages do not exist; `cart_url` in the WC JS config is the home page |
| – | `/?page_id=cart` | – | 200 | Untitled \| Aspley Hotel | | | | Empty page |
| – | `http://aspleyhotel.com.au/` | – | 301 → https | | | | | Good |
| – | `https://www.aspleyhotel.com.au/` | – | **TLS error** | | | | | Certificate served is for `CN=thegaragefv.com.au` (shared host); browsers show a security warning. `http://www.` does 301 to the apex. |

PDF documents linked from the site (all open in a new tab, all made in Canva unless noted):

| File | Size | Text-extractable |
|---|---|---|
| `/wp-content/uploads/sites/46/2026/03/QLD-Classic-Main-Menu-Tier-2.pdf` (main menu, A3) | 672 KB | **No** (flattened image) |
| `/wp-content/uploads/sites/46/2025/02/ASP-Cocktail-Menu.pdf` | 205 KB | **No** |
| `/wp-content/uploads/sites/46/2025/09/Kids-Menu.pdf` | 31 KB | yes |
| `/wp-content/uploads/sites/46/2026/03/Wine-Menu-QLD-No-Prices.pdf` | 554 KB | yes |
| `/wp-content/uploads/sites/46/2025/09/Aspley-Hotel-Coffee-Cake-Deal.pdf` | 1.25 MB | yes |
| `/wp-content/uploads/sites/46/2026/05/ASP-Functions-Package.pdf` (6 pages) | 1.72 MB | yes |
| `/wp-content/uploads/sites/46/2025/07/Star-Groups-Privacy-Policy.pdf` (Word export) | 295 KB | yes |

### 1a. `/product-category/tickets/`
See the addendum at the end of this file (captured after the main crawl).

## 2. Performance measured per page (desktop 1440x900, cold cache, headless Chromium)

| Page | curl TTFB (s) | Browser TTFB (ms) | FCP (ms) | LCP (ms) | CLS | `load` (ms) | Requests | Compressed transfer (KB, Performance API) | Decoded bytes (MB) |
|---|---|---|---|---|---|---|---|---|---|
| Home | 8.7 (runs: 7.0, 5.2, 6.4, 2.4) | 9,774 | 13,352 | **13,680** | 0.13 (mobile **0.31**) | 19,991 | 101 | 4,782 | 11.1 |
| Main Menu | 5.1 | 6,412 | – | 8,752 | 0 | 14,919 (mobile: never fired within 120 s, twice) | 92 | 1,960 | 8.8 |
| Cocktail Menu | 5.6 | 4,833 | – | 7,404 | 0 | 10,591 (mobile: never fired within 120 s) | 92 | 1,960 | 8.3 |
| Functions Enquiry Form | 4.5 | 2,672 | – | 6,424 | 0 | 9,961 | 66 | 1,980 | 5.9 |
| Thank You | 3.5 | 7,001 | – | 10,472 | 0 | 13,712 | 67 | 1,960 | 5.8 |
| Product: Melbourne Cup | 6.0 | 11,902 | – | 14,584 | 0.003 | 19,926 | 84 | 2,237 | 6.1 |
| Event archive | 4.0 | 2,898 | – | 5,044 | 0 | 7,848 | 72 | 2,548 | 6.4 |
| Event: Melbourne Cup Day | 4.0 | 5,432 | – | 9,672 | 0 | 13,787 (mobile 47,930; mobile LCP 35,276) | 68 | 2,649 | 7.0 |
| Event: MC Menu 2026 | 6.5 | 11,315 | – | 20,612 | 0 | 26,583 | 67 | 2,431 | 6.3 |
| Event: Members Jackpot | 6.9 | 6,828 | – | 9,492 | 0 | 18,875 | 67 | 2,207 | 6.1 |
| Event: Trivia | 1.9 | 5,114 | – | 7,788 | 0 | 10,559 | 67 | 2,049 | 5.9 |
| Event: Jag the Joker | 5.7 | 3,363 | – | 5,952 | 0 | 7,724 | 67 | 2,212 | 6.1 |
| Event: Seniors | 5.7 | 4,356 | – | 6,952 | 0 | 8,786 | 67 | 2,174 | 6.0 |
| 404 page | 5.7 | 5,045 | – | 7,464 | 0 | 9,832 | 67 | 1,958 | 5.8 |
| Search results | 10.4 | 21,724 | – | 23,832 | 0 | 25,561 | 67 | 1,959 | 5.8 |
| Author archive | 7.7 | 3,429 | – | 6,292 | 0 | 9,748 | 67 | 1,960 | 5.8 |

Thresholds for context: Google's "good" LCP is ≤ 2,500 ms, CLS ≤ 0.1, TTFB ≤ 800 ms. **Every page fails all three** (the home page fails CLS on mobile).

Home-page weight breakdown (decoded bytes, 101 requests): scripts 6.34 MB across 54 files; images 2.68 MB across 17 files; stylesheets 0.90 MB across 12 files; fonts 0.19 MB; HTML 92 KB. By host: aspleyhotel.com.au 4.15 MB, gstatic (reCAPTCHA) 2.63 MB, maps.googleapis.com 2.29 MB (18 requests), googletagmanager.com 1.44 MB (three containers: GTM-TFWKDD8K, G-507MZ55VJL, GT-NMKNNFV), typekit 0.17 MB, Google Fonts 0.09 MB.

Origin configuration observed with `curl -I`: HTTP/1.1 only (no HTTP/2), no `Content-Encoding` on HTML, CSS or JS (the 489 KB theme CSS and 109 KB theme JS are sent uncompressed), no `Cache-Control`/`Expires` on static assets, no HSTS, X-Frame-Options, X-Content-Type-Options, Referrer-Policy or CSP headers. Server header: `Apache`.

## 3. Tech stack

| Layer | Finding | Evidence |
|---|---|---|
| CMS | WordPress multisite (site id 46), Star Hotels group network | `/wp-content/uploads/sites/46/`, `wp-json` links, `Link: <…/wp-json/>` header |
| Theme | "Default" by Niche Studio (Sage starter, Bootstrap **3.3.6**, jQuery 3.7.1 + jquery-migrate 3.4.1, Cycle2 carousel, icomoon icons, Glyphicons) | `/wp-content/themes/default/style.css`, `dist/styles/main-red-a542f5d992.css` (built 27 May 2024) |
| Page builder | none (hard-coded panels) | |
| SEO | Rank Math (sitemap, schema, OG) **and** WordPress core / Site Kit OG + JSON-LD both output → duplicate `og:title`, `og:image`, `og:locale` (en_GB and en_US) and two `@graph` JSON-LD blocks per page | home HTML |
| Analytics | Google Site Kit 1.189.0 (generator meta), GTM container + two gtag loaders, GA4 `G-507MZ55VJL` | script srcs |
| Forms | Gravity Forms 2.x (CSS 3.1.3) + reCAPTCHA v3 add-on (+ a v2 `api.js` also loaded), Akismet | script srcs |
| E-commerce | WooCommerce 11.1.0, WooCommerce Box Office (tickets), Product Add-Ons 6.4.7, WC Variations Radio Buttons, WooPayments (loaded on every page) — but no cart/checkout pages exist | script srcs, 404 probes |
| Maps | Google Maps JavaScript API (key `AIzaSy…ZiY`, loaded synchronously, console warning) **plus** a second Maps embed iframe with another key `AIzaSy…QF2Y` — two Maps loads for one map | network log |
| Fonts | Adobe Typekit kit `qpe7ryv` (Myriad Pro, 6 weights) + Google Fonts Poppins (requested, never used) + Google Sans (pulled in by the Maps embed) | network log |
| PDF viewer | `pdfjs-viewer-shortcode` plugin v3.1.1 | iframe src |
| Hosting | Apache, HTTP/1.1, shared certificate pool (www host serves another customer's cert) | headers, openssl |
| Credits | "Design by Pennybridge Creative", "Build by Niche Studio" (footer) | |

## 4. Booking engines and widgets

No hotel booking engine is present (no SiteMinder, Mews, Little Hotelier, Cloudbeds, Bookeasy, RMS, etc.) — the venue has no accommodation. No restaurant reservation widget is present (no OpenTable, Now Book It, ResDiary, SevenRooms, Quandoo, TheFork, Me&u, Mr Yum, Bopple). The only conversion mechanisms are:

1. `tel:` links to (07) 3263 4040 (header button on every page; the Melbourne Cup poster says "BOOKINGS ESSENTIAL — BOOK YOUR TABLE NOW — CALL")
2. Gravity Forms "Contact Us" (footer, every page) and "Functions Enquiry Form" (modal + page), reCAPTCHA-protected, redirecting to `/thank-you/`
3. WooCommerce "Buy Ticket Now" for the Melbourne Cup product — which adds to a cart that has no cart or checkout page (see issues.md)
4. External: Star Rewards sign-up via QR short link `https://qrco.de/bbdyet`, Star Liquor site, Star Hotels venues page, Google Maps directions

## 5. Link check (HEAD/GET of every distinct href on every page, 42 URLs)

- Internal: all OK except `/event/tasty-parmy-reward/` → **404** (linked from the site search results and listed in the sitemap). Four more sitemap-only URLs are 404 (rows 12, 13, 14, 18 above).
- External: `https://starhotels.com.au/star-hotels/` 200 (TTFB 15 s), `https://starhotels.com.au/job-listings/…` 200, `https://qrco.de/bbdyet` 200, `http://www.starliquor.com.au` → 200 via www (the bare `https://starliquor.com.au/` reset the connection on two attempts), `http://www.pennybridge.com.au/` 200, `http://www.nichestud.io/` 200, `http://browsehappy.com/` 200 (all four of these are plain `http://` links).
- Social: `facebook.com/AspleyHotel` and `instagram.com/aspleyhotel/` answer 400/429 login walls to a non-browser client, so their existence could not be confirmed server-side; they are referenced consistently site-wide.
- Image: `http://aspleyhotel.com.au/wp-content/uploads/sites/46/2024/10/ASP-Melbourne-Cup-24-360x360.jpg` on the product page → **404** (and mixed-content http).

## 6. Internal link graph

Pages linked from the rendered DOM (desktop): `/`, `/main-menu/`, `/cocktail-menu/`, `/functions-enquiry-form/`, `/product/melbourne-cup/`, `/product-category/tickets/`, `/event/{melbourne-cup-day-at-aspley-hotel, melbourne-cup-day-menu-2026, members-jackpot, trivia-wednesdays, jag-the-joker, we-love-our-seniours, tasty-parmy-reward}`, `/author/{genine, opremmarketing}`, and the 7 PDFs. `/event/` (archive) and `/thank-you/` are reachable only by URL/sitemap. Home page: 41 internal + 16 external links, 12 open in a new tab without warning.
