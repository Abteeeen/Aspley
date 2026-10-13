# 3 Kingdoms: competitor research and pitch summary

Checked 13 October 2026. Research only, nothing designed or built.

3 Kingdoms (三国冒菜, "Three Kingdoms mao cai") is a Sichuan mini hot pot restaurant at Shop 32, Level A, Uptown, 91 Queen St, Brisbane City. It has no website. Hours on the Uptown listing are 11am to 7pm daily, 7:30pm on Fridays. Phone 07 3190 0144 (the same number is listed for Chapter 3 on Level E, so the two may share an operator; confirm before the meeting).

What the web already says about it:
- Google 4.2 from 311 reviews (via Wanderlog's Google mirror), EatClub 4.7 from 1,025 ratings, Uber Eats 800+ ratings. A Facebook page exists ("3 Kingdoms Brisbane City").
- Reviewers praise the customisable mini hot pot, generous portions, braised beef noodles and quick service. Complaints: salty or very spicy broth for some, portion disputes, and **"hard to find"**.
- A reviewer quotes the signature mini hot pot with rice at $20.80.
- The only page that describes the restaurant is its Uptown mall listing: hours, phone, map, one paragraph. No menu, prices or food photos.

Files: `comparison.md` (full table), `design-patterns-to-borrow.md` (patterns and motifs), `screenshots/` (83 captures), `overview-benchmarks-first-screen-*.jpg` (benchmark overviews), `data/meta-*.json` (per-site metadata).

## Open these first in the meeting

| File | What it shows |
|---|---|
| `overview-local-first-screen-mobile.jpg` | 3 Kingdoms' mall listing beside five nearby rivals on a phone. Every rival shows food, a brand or a "Book" button. 3 Kingdoms shows an opening-hours table. |
| `overview-local-first-screen-desktop.jpg` | The same comparison on desktop. |
| `screenshots/benchmark-05-xian-famous-foods-menu-mobile.jpg` | The quality bar: a Chinese noodle chain with every dish named in Chinese and English, coded, photographed and filterable. |
| `screenshots/local-03-davids-master-pot-menu-mobile.jpg` | The closest local rival's "Build your bowl" menu. Good structure, but no prices. |
| `overview-benchmarks-first-screen-mobile.jpg` | Eight benchmark sites on a phone, from individual hot pot (Boiling Point, YX Mini Hot Pot) to motion-led brands (CHAGEE, Din Tai Fung). |
| `screenshots/benchmark-08-yx-mini-hot-pot-home-mobile-fold.jpg` | A Sydney mini hot pot with a Chinese-first site and a fixed "Reservations" bar. The nearest like-for-like site in Australia. |

## Who 3 Kingdoms really competes with

The fight is for the CBD lunch and early-dinner bowl, mostly within 300 metres. Four of the closest rivals sell the same idea, a customisable spicy bowl, under the malatang name.

| # | Rival | Where | Distance from Uptown | Format | Website | Order / book |
|---|---|---|---|---|---|---|
| 1 | Zhang Liang Malatang | Uptown Level A, next to V'Long; also 9 Sherwood Rd, Toowong | Same floor | Global malatang chain, weigh-and-pay | None for Australia found | Walk-in; Uber Eats (Toowong 4.5 from 310+) |
| 2 | David's Noodle & Hot Pot | Uptown Level E | Same building | Sichuan malatang, "make it your own" | Listed domain no longer resolves | Walk-in |
| 3 | David's Master Pot | 103 Elizabeth St; also Valley Metro, South Brisbane, Sunnybank (9 QLD stores) | ~150 m | Sichuan malatang, assisted self-serve | davidsmasterpot.com.au | None on site; Club David loyalty |
| 4 | Yang Guo Fu Malatang | 97 Elizabeth St; also Sunnybank | ~150 m | Global malatang chain | None for Australia found | Walk-in |
| 5 | Haidilao Hotpot Q+A | Level 1, 140 Elizabeth St | ~200 m | Sichuan shared hot pot, open to 1am | haidilao.com/au (could not be captured) | First Table, Haidilao app |
| 6 | Mamak | 89 Charlotte St | ~300 m | Malaysian casual | mamak.com.au | Mr Yum pickup and delivery |
| 7 | Shabu House | Level 1, 70 Mary St | ~500 m | Shabu shabu and sushi buffet, $35 to $58 pp | shabuhouse.com.au | inline.app bookings |
| 8 | Taro's Ramen | Level 2, 480 Queen St | ~1 km | Ramen | taros.com.au | TableAgent bookings |
| 9 | Happy Boy | East St, Fortitude Valley | ~1.8 km | Chinese, wok-led, some Sichuan dishes | happyboy.com.au | Obee bookings, Bopple takeaway |
| 10 | Donana Mini Hot Pot | 1/31 Musk Ave, Kelvin Grove (QUT) | ~3 km | Individual pots on a hot pot train | Instagram only | Walk-in, QR ordering |
| 11 | Love Malatang | Sunnybank Plaza; also Calamvale | ~12 km | Malatang | lovemalatang.com.au (could not be captured) | Dine-in, takeaway, delivery |
| 12 | Nan Hot Pot | Sunny Park, Sunnybank | ~12 km | Chongqing chain, multi-compartment pots | Instagram only | QR ordering, Uber Eats, HungryPanda |

Price levels, social presence and ratings are in `comparison.md`. Most rival Google ratings were not visible to our tools and are marked as not verified rather than guessed.

## Five talking points

1. **"Search for 3 Kingdoms and the best page about you belongs to the shopping centre."**
   The Uptown listing gives hours, a phone number and a map. Every rival within 300 m with a website leads with food, a brand line or a booking button. Show `overview-local-first-screen-mobile.jpg`, first column against the rest.

2. **"Two rivals selling spicy bowls are in your building, and one stays open three hours later."**
   Zhang Liang Malatang is on Level A until 10pm. David's Noodle & Hot Pot is on Level E. David's Master Pot and Yang Guo Fu are 150 m away on Elizabeth St. To a passer-by they all sell "a customisable spicy bowl". A website is where 3 Kingdoms explains its difference in plain words: an individual pot, broths simmered daily, handmade noodles. Show `screenshots/local-03-davids-master-pot-menu-mobile.jpg` ("Build your bowl. Make it yours.") and ask, "Where is your version of this page?"

3. **"Customers say you're hard to find."**
   That is a recurring review complaint. Rivals answer "where are you?" with a store finder. 3 Kingdoms needs a line like "Level A, beside Target" (the Uptown map places it there), with a photo of the shopfront, on the first screen. Show the Uptown map in `screenshots/local-00-3-kingdoms-uptown-listing-home-desktop-fold.jpg`. It is the clearest map of the restaurant online, and the restaurant doesn't own it.

4. **"Nobody in Brisbane offers a menu in Chinese. The international leaders do."**
   None of the Brisbane sites we captured has a Chinese-language menu or switch. Xi'an Famous Foods (NYC) prints every dish in Chinese above the English. Boiling Point and CHAGEE have a 中文 switch in the header. YX Mini Hot Pot in Sydney defaults to Chinese. For a CBD near three universities, that is a quick win. Show `screenshots/benchmark-05-xian-famous-foods-menu-mobile.jpg` and `screenshots/benchmark-01-boiling-point-home-mobile-fold.jpg`.

5. **"Your rivals publish menus as PDFs or hide prices. Yours can be the clearest menu in the CBD."**
   Shabu House has 6 PDF menus, Taro's 5, Happy Boy 1, and YX Mini Hot Pot's menu is also a PDF. David's Master Pot has a well-designed HTML menu but no prices. Mamak is the only nearby rival with prices as real text. A phone-first menu of broths, ingredients, spice levels and prices, readable in English and Chinese, beats all of them. Show `screenshots/local-08-shabu-house-menu-mobile.jpg` beside `screenshots/benchmark-06-wagamama-menu-mobile.jpg`.

A sixth point, if the client asks about video: David's Master Pot's hero is a 40-second brand video with a 92 MB source file (`data/meta-davids-master-pot.json`). Heavy video is not the same as premium. On a phone at lunch, a fast page wins.

## The opportunity

- **The name is a real story.** The logo reads 三国冒菜, "Three Kingdoms mao cai", and mao cai is a Chengdu dish. In the Three Kingdoms era, the state of Shu (蜀) was based in Chengdu, and 蜀 is still the short name for Sichuan. No rival has a story with that much history. It needs telling with restraint, not with armour and dragons (see `design-patterns-to-borrow.md`).
- **Own the individual pot.** Malatang chains sell weigh-and-pay bowls. 3 Kingdoms can show what "mini hot pot" means: a personal pot, broth choices, spice levels, handmade noodles.
- **Reviews are an asset.** 4.7 from 1,025 EatClub ratings and 800+ Uber Eats ratings. No local rival shows reviews on its site.
- **Speed.** Rival sites moved 1.7 MB to 26 MB on a home page load. A lean build can beat every rival on a phone.

## Honest caveats

- Distances are approximate walking or straight-line figures from 91 Queen St.
- Load times and transfer sizes are single samples through our network proxy on one day. Treat them as relative, not lab-grade.
- **Haidilao (haidilao.com/au) and Love Malatang** could not be reached through our proxy (502 and tunnel failure). They are listed, not captured, and must not be described as broken.
- **Hero videos:** our headless browser cannot play H.264 video. For David's Master Pot and Chubby Cattle, we extracted a frame from each site's own video and placed it where the video plays, so the screenshot shows what a visitor sees. Without this fix both heroes looked empty. Do not claim those heroes are blank.
- **The 3 Kingdoms logo on the Uptown listing did not load in our browser**, although the same file downloads normally. That may be our setup, so do not use it as a criticism.
- **CRAV Burgers is an agency concept site** ("This is a concept website created by Anyflow agency"), listed on Awwwards. Use it only to show what scroll motion can do, never as a real-restaurant comparison.
- Din Tai Fung's home page threw a client-side error on one of three loads and opens a newsletter pop-up on first visit. The clean capture is `benchmark-03-din-tai-fung-home-desktop-fold.jpg`; the pop-up is kept as `...-fold-signup-modal.jpg`.
- Ratings come from aggregators (Wanderlog, EatClub, Uber Eats, Via Brisbane, Yelp) and search summaries, not from a direct Google Maps check. The Instagram handle @3kingdomsbne came from a secondhand repost and is unverified.
- Zhang Liang's Uptown address comes from the Uptown directory. Its "$15 to $25 per bowl" figure comes from a Gold Coast listing.

> Correction (13 Oct 2026): an earlier draft read the logo as 三国蜀菜. The TikTok avatar and HungryPanda listing show 三国冒菜 ("Three Kingdoms mao cai"), matching `../current-presence/`. The Shu–Sichuan history still holds.
