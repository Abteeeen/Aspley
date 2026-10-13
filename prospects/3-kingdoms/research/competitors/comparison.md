# Full comparison

Checked 13 October 2026. Captures: desktop 1440x900, mobile 390x844, Playwright Chromium, network idle plus 2 seconds. Speed figures are one sample through our proxy: "load" is the browser load event, "weight" is data transferred during the home page load on desktop. Raw data for each site is in `data/meta-<slug>.json`.

## 1. Local competitors: business facts

"n/v" means not verified. We did not guess any rating.

| # | Name | Location | Distance | Type | Price (est.) | Website | Ordering / booking | Social seen | Rating seen |
|---|---|---|---|---|---|---|---|---|---|
| 0 | **3 Kingdoms** (the client) | Shop 32, Level A, Uptown | n/a | Sichuan mini hot pot | $ (about $21 signature pot with rice, per a reviewer) | None. Uptown listing only | Walk-in; Uber Eats; EatClub deals | Facebook page; TikTok creator videos; Instagram n/v | Google 4.2 (311), EatClub 4.7 (1,025), Uber Eats 800+ ratings |
| 1 | Zhang Liang Malatang | Uptown Level A; 9 Sherwood Rd, Toowong | Same floor | Malatang, weigh-and-pay, global chain (100+ stores) | $ ($15 to $25 bowl, per Gold Coast listing) | None for Australia found | Walk-in; Uber Eats (Toowong) | n/v | Uber Eats Toowong 4.5 (310+) |
| 2 | David's Noodle & Hot Pot | Uptown Level E | Same building | Sichuan malatang | $ | davidsnoodlehotpot.com.au listed by Brissy Eater; domain does not resolve | Walk-in | n/v | n/v |
| 3 | David's Master Pot | 103 Elizabeth St, plus 8 other QLD stores (Valley Metro, South Brisbane, Sunnybank, Mt Gravatt...) | ~150 m | Sichuan malatang, assisted self-serve | $ | davidsmasterpot.com.au | No online order or booking on site; "Club David" loyalty | Instagram, Facebook, 小红书 (Xiaohongshu) | n/v |
| 4 | Yang Guo Fu Malatang | Shop 5, 97 Elizabeth St; Market Square, Sunnybank | ~150 m | Malatang, global chain (6,000+ stores) | $ | None for Australia found (yangguofu.com is an unrelated site) | Walk-in | Tripadvisor listing | n/v |
| 5 | Haidilao Hotpot Q+A | F09, Level 1, 140 Elizabeth St | ~200 m | Sichuan shared hot pot, open 11:30am to 1am | $$$ | haidilao.com/au (502 through our proxy, not captured) | First Table deals; Haidilao app | Global brand accounts | First Table 102 reviews, score n/v |
| 6 | Mamak | Shop 7, 89 Charlotte St | ~300 m | Malaysian roti and satay | $$ (roti canai $11.50) | mamak.com.au | Mr Yum pickup and delivery; bookings only for 8+ | Instagram @mamakrestaurant, Facebook | n/v |
| 7 | Shabu House | Level 1, 70 Mary St | ~500 m | Japanese shabu shabu + sushi buffet | $$ ($35 to $58 pp) | shabuhouse.com.au | inline.app bookings; table tablets for drinks | Facebook | Yelp 3.9 (16) |
| 8 | Taro's Ramen | Level 2, 480 Queen St | ~1 km | Ramen (also a hot pot menu PDF) | $$ | taros.com.au | TableAgent bookings; takeaway page; Shopify shop | Instagram, Facebook, YouTube | n/v |
| 9 | Happy Boy | East St, Fortitude Valley | ~1.8 km | Chinese: Southern Chinese wok and BBQ, some Sichuan dishes, small-producer wine | $$ | happyboy.com.au | Obee bookings and vouchers; Bopple takeaway | Instagram @happyboybris | n/v |
| 10 | Donana Mini Hot Pot | 1/31 Musk Ave, Kelvin Grove (QUT campus) | ~3 km | Individual pots, conveyor "hot pot train", robot delivery | $$ | None. Instagram @donanaminihotpot | Walk-in; QR ordering at table | Instagram | n/v |
| 11 | Love Malatang | 90/358 Mains Rd, Sunnybank Plaza; Calamvale | ~12 km | Malatang | $ | lovemalatang.com.au (proxy tunnel failure, not captured) | Dine-in, takeaway, delivery, reservations | Facebook | Google 4.5 (per Via Brisbane) |
| 12 | Nan Hot Pot | Shop 42, Sunny Park, Sunnybank | ~12 km | Chongqing chain, 2 to 4 broth pots | $$ | None. Instagram @nan_hotpot_bne | QR ordering; Uber Eats; HungryPanda | Instagram | n/v |

Also checked and excluded: Dainty Sichuan (Melbourne and Sydney only, no Brisbane branch found), Dolar Shop (Sydney only), Little Sheep and Liuyishou (no Brisbane branch found), Miss Chilli Hotpot in Milton (listing could not be confirmed as current), YX Mini Hot Pot (moved to Eastwood, Sydney; used as a benchmark instead), Funny Funny (Korean, near-empty Square site).

## 2. Local websites: design and UX

| Site | Hero message | Primary CTA | Menu format | Online ordering | Booking | Languages | Photo / video | Motion | Palette | Type | Mobile | Speed (load / weight) |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 3 Kingdoms (Uptown listing) | "3 Kingdoms", then an hours table | None (phone number is tappable) | None | None linked | None | English | No food photos. Logo did not load in our browser | None (mall's 3D map) | Mall white and grey | Mall sans | Hours and phone readable; nothing about food | 4.6 s / 6.9 MB, the mall's page, not theirs |
| David's Master Pot | "Build your own hot pot", "Since 2018" badge | See the menu / Find a store | HTML cards: 7 soup bases with allergens, snacks. **No prices** | None | None | English; Chinese only inside artwork (麻辣烫, 大味) | Saturated top-down bowls on red; 40 s brand video | Marquee ticker; video | Cream #F3E9D2, red, mustard, black | Archivo display (mono-style headline), Poppins | Big stacked CTAs; headline gets small | 4.5 s / 26 MB (video source file is 92 MB) |
| Mamak | Carousel, roti being stretched | None on first screen; Order Takeaway / Delivery in menu | HTML text with prices | Mr Yum | Groups 8+ only | English | Documentary kitchen photos | Carousel | Maroon, red, mustard | Museo, Raleway | Order buttons hidden in hamburger | 5.5 s / 1.9 MB |
| Taro's Ramen | Full-bleed ramen bowl, "Australia's best ramen to Brisbane" | BOOK (orange circle) | PDFs (5) | Takeaway page | TableAgent | English | Overhead bowl close-up | None | White, navy, orange | Lato | BOOK always visible | 3.0 s / 1.7 MB (network idle 23 s) |
| Shabu House | Pattern tiles (noodles, sushi, fish, onigiri) and "SHABU SHABU ~ HOUSE HOUSE" | BOOKINGS (pink pill) | PDFs (6) | None | inline.app | English | Flat illustration, then photos | Marquee ticker | Pink, teal, yellow, purple | Poppins, script logo | Bookings hidden in hamburger | 4.0 s / 2.8 MB |
| Happy Boy | Text wordmark "HAPPY BOY" on white | BOOK (orange circle), Takeaway | One PDF | Bopple | Obee | English | No hero photo | GSAP scroll reveals detected | White, black, orange | Lato, custom wordmark | Takeaway + Book visible | 5.3 s / 6.2 MB |

## 3. Benchmarks: design and UX

| Site | Why it is here | Hero message | Primary CTA | Menu format | Ordering | Booking | Languages | Photo / video | Motion / scroll | Palette | Type | Mobile | Speed (load / weight) |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| [Boiling Point](https://www.bpgroupusa.com/) (US) | Individual hot pot, same format | "Skip the line. Order and pay in-store" | ORDER NOW (header, yellow) | By region, through ordering | Aloha Online Ordering, own app, Uber Eats, DoorDash | Walk-in | **EN / 中文 toggle** in top bar | Isometric line illustration | Carousel | Red, yellow, orange | League Gothic, Jost | Order Now stays in header | 3.3 s / 2.7 MB |
| [Chubby Cattle](https://www.chubbycattle.com/) (US) | Conveyor hot pot | Dark interior video, "Search Locations" | Search Locations | Per location | Per location | Per location | English | Neon interior video (24 MB .mov) | Video | Black, red | Open Sans | Dark, almost empty first screen | 5.4 s / 5.9 MB |
| [Din Tai Fung](https://dtf.com/en-us) (US) | Global craft standard, scroll craft | 鼎泰豐 red brush wordmark, "Shaped by tradition, crafted by hand" | Reserve / Order | HTML with a photo per dish, plus PDF and allergen guide | order.dtf.com (own) | Per location | English; zh-US and zh-CA versions (hreflang) | Moody close-ups of hands and dumplings | **GSAP ScrollTrigger** | Black, red, cream #EFEBDA | Heldane Display serif, Suisse Intl | Large Reserve/Order buttons | 1.5 s / 15 MB desktop, 3.7 MB mobile |
| [CHAGEE](https://www.chagee.com/en) (global) | Chinese brand with world-class motion | Full-screen video, "CHA(茶)" with a line in Chinese | None (brand site) | HTML product series | App only | n/a | **English / 简体 / 繁體** | Cinematic nature and product films | **GSAP ScrollTrigger + Lenis**, video | Black, white, tea green | System sans | Video shrinks to a small band | 14 s / 9.2 MB |
| [Xi'an Famous Foods](https://www.xianfoods.com/) (NYC) | Chinese noodle fast casual, the best bilingual menu | "The Xi'an Classics" with 咥一回想二回 and a "NOT SPICY = NOT AS GOOD 不辣不如辣" ticker | Our Story / See Menu; Pickup/Delivery in nav | **HTML, dish codes (A1, B2), Chinese name above English**, category tabs | order.online, Toast catering, rewards app | Walk-in | Bilingual dish names | Taped-photo collage, founders, food on a red tray | Lottie, ticker | Cream #F1EEE3, red, yellow, black | PP Supply Sans, Open Sans | Strong, though hero photo is tall | 2.0 s / 3.7 MB |
| [wagamama](https://www.wagamama.com/) (UK) | Best-in-class ordering and menu UX | Campaign carousel ("students! our first student exclusive is here") | order / book a table | **HTML, category tabs, dietary filters, kcal** | Own takeout site, Deliveroo, Uber Eats | Group bookings | Many regional sites | Dark food photography | Carousel | Black, white, red | Custom lowercase "Wagamama" face | Clear, campaign-led | 5.8 s / 4.5 MB (576 requests) |
| [CRAV Burgers](https://www.cravburgers.shop/) (concept) | Awwwards-listed scroll motion. **Agency concept, not a real restaurant** | Giant "THE BURGER" with a cut-out burger | BURGERS | HTML | Concept only | n/a | English | Cut-out product, sticker graphics | **GSAP ScrollTrigger + Lenis** | Cream, red, yellow | Modak, Mouse Memoirs | Playful, cookie bar covers bottom | 2.1 s / 6.2 MB |
| [YX Mini Hot Pot](https://mini-hotpot.yxgroup.com.au/en) (Sydney) | Australian mini hot pot, Chinese-first | Interior of an "ancient street", "Embark on a culinary journey..." | Reservations (red) | PDF | None | Request form, confirmed within 48 h | **Chinese default, English version** | Wide interior photography | Carousel | Red, white, timber | Palatino, custom face, Microsoft YaHei | **Fixed Reservations bar at bottom** | 9.1 s / 11.8 MB |

## 4. What the tables say

- **Menu format.** Local: 4 of 6 sites use PDFs or nothing. Only Mamak has priced text. Benchmarks: 5 of 8 use HTML menus, and the best (Xi'an, wagamama, Din Tai Fung) add tabs, filters, photos and allergens.
- **Ordering.** Local sites send people to Mr Yum, Bopple, TableAgent, Obee or inline.app, or offer nothing. Benchmarks either run their own ordering (Din Tai Fung, wagamama, Boiling Point) or make one ordering button the main call to action.
- **Language.** No Brisbane site we captured offers Chinese. Four of eight benchmarks do: a toggle (Boiling Point, CHAGEE), regional versions (Din Tai Fung), Chinese default (YX), or bilingual dish names (Xi'an).
- **Motion.** Real scroll craft (GSAP ScrollTrigger, Lenis) appears only on CHAGEE, Din Tai Fung and the CRAV concept. Locally, motion means marquee tickers and carousels.
- **Speed.** Rival home pages moved 1.7 MB (Taro's) to 26 MB (David's Master Pot) per load. The heaviest pages carry autoplay video.
- **Palette.** Cream with red and yellow is now the default look for Asian fast casual (David's Master Pot, Xi'an, CRAV, Mamak in part). Following it would make 3 Kingdoms look like its neighbour.
