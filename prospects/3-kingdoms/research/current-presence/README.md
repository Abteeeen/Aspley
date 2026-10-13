# 3 Kingdoms (三国冒菜): current online presence, executive summary

**Prospect:** 3 Kingdoms, Shop 32, Level A, Uptown (formerly the Myer Centre), 91 Queen St, Brisbane City QLD 4000. Phone 07 3190 0144.
**Checked:** 13 Oct 2026, using WebSearch/WebFetch, curl, ABN Lookup, DNS-over-HTTPS and headless Chromium (Playwright) at 1440x900 and 390x844.
**Detail:** `content-and-language.md` has the verbatim copy, full menus and prices by platform, hours by source, and review quotes. Screenshots are in `screenshots/`.

Labels used below: **[V]** means we saw it ourselves on the live source on 13 Oct 2026. **[S]** means it came from a search-engine snippet or a third-party aggregator and we could not load the source. **[I]** means it is our inference from the evidence.

---

## What they are

- An independent Sichuan **mao cai** (冒菜) restaurant, marketed in English as **"mini hotpot"**. You pick a broth-cooked bowl of meat, seafood, vegetables and noodles, served with rice, at 6 spice levels from none to "extra plus". It also sells beef noodle soups (braised, marinated, pickled-cabbage) and cold Sichuan sides. Counter service, dine-in and takeaway. **[V]**
- The logo reads **三国冒菜** ("Three Kingdoms Mao Cai") in white brush calligraphy on black, with a small red seal and the word "Kingdoms". The Uptown logo file has Photoshop metadata dated 1 Sep 2016. The interior is red-lit with red lanterns and Chinese lattice screens (Google shopfront photo, TikTok thumbnails). Brand colours are **black, white and red**. **[V]**
- **Price point:** about $20 a main in-store (Signature Mini Hotpot $20.80; beef/lamb/fish hotpots and noodle soups $19.80). Google's price band is "$1–40 per person". **[V]**
- **Hours (Uptown, Google, Uber Eats agree):** Mon–Thu, Sat, Sun 11am–7pm; Fri 11am–7:30pm. Other platforms show different hours (see issue 4). **[V]**
- **Operator:** JADE GARDEN PTY LTD, ABN 83 663 543 682 (ACN 663 543 682). The ABN has been active since 2 Nov 2022 and the entity registered the business name "3 kingdoms mao cai" on 27 Mar 2023. The same name was held by **DIVAWU PTY. LTD.** (ABN 41 167 387 788) from **18 Dec 2014 to 15 Apr 2023**. **[V]** This points to an **ownership change around March–April 2023**, with the brand itself dating to late 2014. **[I]**
- **How long at the Myer Centre/Uptown:** the exact start date is not public. The evidence suggests at least 2017–2019: a TripAdvisor listing ID from that era (d12562780), a Chinese student guide from about 2019 that places "三国冒菜 A level, Myer Center", the 2016 logo file, and EatClub and Ctrip reviewers calling it long-established ("老牌", "seen this place around for many years"). **[S/I]**
- **Chain?** No. It is a single independent venue. A sister store traded at **Shop 115B, Sunnybank Plaza** (Yelp, Facebook "三国冒菜sunnybank"), but it is **not in the Sunnybank Plaza store directory on 13 Oct 2026**, so it is probably closed. **[V for directory, I for closure]** Uptown's directory gives the same phone number (07 3190 0144) for **Chapter 3** (rice bowls and sandos, Uptown Level E), so that may be a sister venue. Not confirmed. **[V/I]**
- **Owners/directors:** not public in the ABR, and ASIC officeholder data needs a paid extract. **Not verified.**

---

## Digital footprint

| Channel | URL / handle | Status (13 Oct 2026) | Key facts |
|---|---|---|---|
| Own website | none | **None.** Google Business Profile shows an "Add website" prompt. | No domain links to the venue anywhere we looked. |
| `3kingdoms.com.au` | http://3kingdoms.com.au | Registered, shows an **ad-parking page** (no TLS cert for the name). MX records point to Microsoft 365 and the NS is dnspackage.com (Syrahost). SOA serial dated Apr 2022. | **Registrant unknown.** The .au RDAP was rate-limited (HTTP 429) and the whois.com page only offered a Sedo bid. It could belong to the venue (its email works) or to someone else. **[unverified]** |
| `3kingdomshotpot.com` | — | Live, but **unrelated**: a hotpot restaurant in Mountain View, California. | Name-collision risk for search. |
| Other variants checked | 3kingdoms.au, 3kingdomsmaocai.com(.au), 3kingdomshotpot.com.au, 3kingdomsbne.com(.au), threekingdoms.com.au, 3kingdomsbrisbane.com(.au), 3kingdoms.net.au | No DNS (NXDOMAIN). Likely available, but we did not check with a registrar. | |
| Google Business Profile | [Maps listing](https://www.google.com/maps/place/3+Kingdoms/@-27.4706069,153.0248769,17z/data=!4m6!3m5!1s0x6b915a04eb03c089:0x4a431b6de161a13a!8m2!3d-27.4706069!4d153.0248769!16s%2Fg%2F11dxdjtwk7) | Live **[V]** | **4.2★ from 324 reviews** (5★ 189, 4★ 66, 3★ 30, 2★ 12, 1★ 27). Category "Chinese restaurant". **351 photos.** $1–40 pp. Dine-in, takeout, no-contact delivery, wheelchair-accessible entrance. No website. Floor shown as **"Floor Q · Uptown" (wrong, the shop is on Level A)**. "Place an order" offers only **HungryPanda, DoorDash and Uber Eats**. Review topics: spicy food 47, hotpot 25, beef noodle soup 24, malatang 4. |
| Uptown store page | https://www.uptownbrisbane.com.au/stores/3-kingdoms | Live **[V]** | About copy, Level A, hours, phone, accepts the Uptown Gift Card. **No website or social links.** The logo image failed to render in both of our captures. |
| Uber Eats | https://www.ubereats.com/au/store/3-kingdoms-uptown-brisbane/Fcq98iq7T9Wchx1lXd_L7g | Live **[V]** | **4.6★ (800+)**, $$, "Chinese • Noodles • Rice bowls". 20% off select items. The auto description still says "3 Kingdoms Myer Centre … rating of 4.2". An old slug `/3-kingdoms-myer-centre/` still resolves. |
| DoorDash | https://www.doordash.com/store/3-kingdoms-brisbane-city-24863669/ | Live. The main host blocks headless browsers (Cloudflare); we captured it through page-service.doordash.com **[V]** | **4.5★ (100+)**, DashPass, "Sichuan", $$. **Hours shown 11:00am–6:30pm.** 30% off select items. **Highest prices of any platform.** |
| HungryPanda (熊猫外卖) | https://aus.hungrypanda.co/shop?shopId=8880 | Live **[V]** | "3 Kingdoms UPTOWN", **4.7★ (724)**, "800+" monthly sales, $9.9 minimum, category 冒菜串串. Fullest menu, including DIY 500g/1000g and set meals. Chinese-language shop notice. |
| EatClub | https://eatclub.com.au/venue/3-kingdoms | Live (server HTML; the page crashes in headless Chromium) **[V]** | **4.7★ from 1,326 ratings.** **30% off dine-in and takeaway every day, arrive 2–5pm.** Lists in-store prices. The overview **wrongly says "Tucked away in Sunnybank Plaza's food court"**. Hours 11–7:30, Fri to 8pm. |
| Menulog | — | **Not found** in search. menulog.com.au blocked our headless browser (Cloudflare). | Absence not confirmed in-app. |
| Ritual | https://ritual.co/order/3-kingdoms-the-myer-centre-brisbane/1587 | Indexed legacy listing **[S]** | "3 Kingdoms (The Myer Centre)" with the old "Mao Cai" names and older prices ($14.10–$18.80), hours 11–7:30. Live status unverified. |
| Zest | zestapp.com.au/venues/3-kingdoms/… | Listing **[S]** | Hours 11–7:30, Fri 8pm. "Price on enquiry". Says the broth is simmered 8–10 hours (per search summary). |
| Instagram | [@3kingdomsbne](https://www.instagram.com/3kingdomsbne/) | Exists. Direct fetch blocked (HTTP 429, login wall). **[S]** | Snippet: **9,688 followers, 3,238 following, 193 posts**. Bio: "Serving first-class Sichuan mini hotpot in the heart of Brisbane with a punchy soup made with dozens of delicious stocks and rare spices!" Recent posts get 4–7 likes (Feb and Aug 2026), which is low for the follower count. |
| Facebook (city) | https://www.facebook.com/p/3-Kingdoms-Brisbane-City-100092428640778/ | Exists. Login wall, page rendered blank. Meta tags read. **[V]** | **19 followers**, "2 talking about this", "3 were here". Same bio as Instagram. Page ID suggests it was created in about 2023. **[I]** |
| Facebook (Sunnybank) | https://www.facebook.com/3kingdomssunnybank/ | Login wall **[S]** | "三国冒菜sunnybank", about 34 likes per snippet. Legacy. |
| TikTok | [@3kingdoms.hotpot](https://www.tiktok.com/@3kingdoms.hotpot) | Live **[V]** | "3Kingdoms Hotpot", **1,226 followers, 994 following, 2,450 likes, 70 videos**. Account created 8 Feb 2024. Bio is only the address. **No link.** Mostly reposts of creator collaborations. |
| Creator/influencer coverage | TikTok and Instagram | Live **[V/S]** | 10+ creator posts from 2024–2026, most labelled *gifted* or *invite* (e.g. @iamjacksonbennett 19K views, @heyitsellin, @beccaeatsbne, @abbeyroams, @jackwithawap, @brisbane_foodbabies, @yenny.bne, @the.visualpalette). "Hidden gem" is the recurring phrase. |
| Xiaohongshu / RedNote | — | **Not found** by web search. It is app-only and we could not check it. **[unverified]** | |
| Ctrip / Trip.com | you.ctrip.com/food/323/24920332.html; trip.com/restaurant/…/3-kingdoms-67828586 | Live **[V]** | Listed as **三国冒菜**, 川菜. 1 review each (5/5). Ctrip review dated 29 Jan 2026. |
| TripAdvisor | tripadvisor.com.au/Restaurant_Review-g255068-d12562780 | Exists as **"3 KINGDOM'S"**. Blocked (HTTP 403). | Rating not captured. |
| Zomato | — | Fetch failed. Restaurant Guru reports **3.9 from 6 reviews**. **[S]** | |
| Wanderlog / Restaurant Guru / Yelp | various | Aggregators **[S]** | Wanderlog shows Google 4.2 (311) and repeats the wrong "Sunnybank Plaza food court" line. Restaurant Guru's URL slug is "Covery-Take-Away", which suggests an earlier occupant's name on the record. Yelp lists the Sunnybank store. |
| Press (Broadsheet, Urban List, Concrete Playground) | — | **No coverage found.** | Weekend Notes covered "The Cultural Delights of The Myer Centre Level A" (403, not read). |

**Names in use:** 3 Kingdoms · 3 Kingdoms Uptown Brisbane · 3 Kingdoms Myer Centre · 3 Kingdoms UPTOWN · 3 Kingdoms (The Myer Centre) · 3Kingdoms Hotpot · 3 KINGDOM'S · 3 Kingdoms Brisbane City · 三国冒菜. Registered business names: "3 kingdoms mao cai", "3kingdoms" (added 26 Feb 2026). Handles: @3kingdomsbne (IG), @3kingdoms.hotpot (TikTok); one creator mistakenly tagged "@kingdomsbne".

---

## Top issues and opportunities, ranked by business impact

| # | Issue / opportunity | Evidence |
|---|---|---|
| 1 | **Every online order goes through a marketplace, at prices 22–34% above in-store.** There is no website and no direct pickup ordering. Google's "Place an order" lists only HungryPanda, DoorDash and Uber Eats. Signature Mini Hotpot costs $20.80 in-store, $25.80 on Uber (+24%), $27.80 on DoorDash (+34%) and $25.40 on HungryPanda (+22%). Beef noodle soups cost $19.80 in-store, $24.80 / $26.50 / $24.20 on the apps. Platforms also run 20–30% "off select items" promos. A direct pickup order page at in-store prices would keep the margin that commissions take (commission rates are not verified for this venue) and would be cheaper for the customer. | `04-google-maps-order-options-mobile.jpg`, `02-…`, `03-…`, `05-…`; price table in `content-and-language.md §5` |
| 2 | **People cannot find it.** Creators keep calling it "hidden" or a "hidden gem". Reviews say it is "tricky to find" (EatClub, Dec 2025) and "hard to find but worth the effort" (Google, Mar 2025). Directions conflict: "Level A next to Target", "down the hall from Target", "Uptown Centre G Floor (near the bus depot)". Google shows "Floor Q". Uptown itself closes at 5:30pm Mon–Thu while 3 Kingdoms trades to 7pm, and nothing explains how to get in after the centre closes. A site needs a "how to find us" section with photos, a short video, the bus-station entrance and after-hours access. | `01-uptown-store-page-desktop.jpg` (map shows Level A beside Target), `04-google-maps-listing-desktop.jpg`, `06-tiktok-search-mobile.jpg` |
| 3 | **Paid influencer traffic has nowhere to go.** Since Jan 2024 there have been 10+ gifted or invited creator posts, a burst of TikTok reposts in Oct 2026, and a professional photographer (@yingthefoodie, Jan 2024). The TikTok bio has no link, there is no website to send people to, and Facebook has 19 followers. A site gives every campaign a link-in-bio landing page with menu, map and order button, plus measurable UTM traffic. | `07-tiktok-profile-3kingdoms-hotpot-*.jpg`, `06-tiktok-search-mobile.jpg` |
| 4 | **Facts conflict across platforms.** **Hours:** Uptown, Google and Uber say close 7pm (Fri 7:30). DoorDash says 6:30pm. EatClub, Zest and Ritual say 7:30pm (Fri 8pm). Ctrip says 19:30. **Location:** EatClub's own deal page and Wanderlog say "Sunnybank Plaza's food court". Uber's text still says "Myer Centre" and "rating of 4.2". Google says "Floor Q". **Dish names:** "Special" vs "Signature" Mini Hotpot, "Mao Cai" vs "Mini Hotpot". **Prices** differ on all five platforms. One owned source of truth with Restaurant/Menu schema, linked from Google, fixes most of this. | `content-and-language.md §3–§5` |
| 5 | **No real menu online at in-store prices, and the DIY format is not explained.** The core product (choose ingredients, 500g/1000g, half or full add-ons, 6 spice levels, 9 noodle types) only appears on HungryPanda, in English, at app prices. Several complaints are about **portion versus price**: "$12 for a 'full portion' of braised beef … needs to … show clear photos of what a half portion and a full portion … look like" (Google, Jan 2026); "Marinated Pork Trotters costed me $9.90 and it comes in such a small bowl" (DoorDash, Mar 2025); "No meat?!?!? And a single leaf of Bok choy" (Uber, Sep 2026). An HTML menu with photos, portion weights, spice guide and allergen notes ("may contain nuts" is on most items) answers this before people order. | `content-and-language.md §5–§6` |
| 6 | **No Chinese-language content the venue owns**, although the brand is Chinese-first: the logo is 三国冒菜, Ctrip/Trip.com list it as 三国冒菜, the HungryPanda shop notice is in Chinese, staff speak Mandarin (Ctrip review), and reviewers write in Chinese ("没有给餐具", "好"). The audience includes Chinese and other Asian international students. A bilingual EN / 简体中文 site, plus a Xiaohongshu presence it can link to, is a clear gap. | `05-hungrypanda-listing-*.jpg`; `content-and-language.md §2, §6` |
| 7 | **Discounting with no owned customer list.** The venue gives 30% off every day from 2–5pm on EatClub (1,326 ratings, so heavily used) and 20–30% promos on Uber and DoorDash. It owns no email list, loyalty scheme or direct offer channel. A site can run its own off-peak deal and capture customers. | EatClub listing; `02-…`, `03-…` |
| 8 | **The brand story is not told anywhere.** The brand has been around since 2014, and Chinese reviewers call it "老牌" (long-established). The Three Kingdoms theme is strong: an Instagram post from Feb 2026 reads "One Pot Enters the Battlefield. The Three Kingdoms Begin. Flames rise like Red Cliff…". The kitchen claims handmade noodles and broth "slow-simmered" or "prepared daily". None of this sits on a page it controls. | `content-and-language.md §2` |
| 9 | **Two chains sit right next to it.** Zhang Liang Malatang (an international chain of about 100 stores) is on the same Level A and trades until 10pm. David's Noodle & Hot Pot (David Management Group, which has a corporate site) sells Sichuan malatang on Level E. 3 Kingdoms needs to be more findable and easier to understand than both. | `08-uptown-food-directory-*.jpg`; Uptown store pages |
| 10 | **Weak owned social and listing hygiene.** Facebook has 19 followers. Instagram has a high following-to-follower ratio and low engagement. Handles are inconsistent. A legacy Ritual listing shows old prices. The Sunnybank listings (Yelp, Facebook) are still live and pull people to a store that is probably closed. A site can be the canonical link that all of these point to. | Footprint table above |

---

## What a website must keep

- The name **3 Kingdoms** together with **三国冒菜**, the existing logo (white brush calligraphy on black, red seal) and a **black / white / red** palette that matches the red-lit, lantern-and-lattice interior.
- The concept language already in use: "Sichuan mini hotpot", "mao cai", "DIY hotpot", "fully customisable", "from mild … to bold and spicy", "handmade noodles", "slow-simmered broths prepared daily", "fresh ingredients, premium meats".
- The signature items: **Signature (Special) Mini Hotpot with Rice**, Braised Beef Noodles, Marinated Beef Noodles, Pickled Cabbage and Fish Rice Noodles, DIY Mini Hotpot 500g/1000g, the cold sides (cucumber salad, Sichuanese tofu, marinated beef, marinated pork trotters). Also the newer Signature Sticky Rice (Instagram, Aug 2026).
- Practical facts: Shop 32, Level A, Uptown, 91 Queen St. Near Target and the Queen Street Bus Station. Phone 07 3190 0144. Hours. Dine-in and takeaway. Wheelchair-accessible entrance. Accepts the Uptown Gift Card.
- The Three Kingdoms storytelling voice from Instagram, written plainly.
- Links out to Uber Eats, DoorDash and HungryPanda for delivery (keep them, but put direct pickup first).

---

## Uptown context (short)

- Uptown opened 28 Mar 1988 as the Myer Centre and was renamed **Uptown on 1 Aug 2023**, after Myer closed on 31 Jul 2023. It is owned by ISPT (75%) and Vicinity Centres (25%). Store count fell from about 230 at peak to 122 (Aug 2023) and **115 (Aug 2025)**. A ~$500m redevelopment with retail, leisure, F&B and entertainment (aquarium, arcade, indoor ski field, etc.) was announced in 2023. As of Jul 2025 Wikipedia says **no work had started**. **[S, Wikipedia / The Urban Developer 17 Aug 2023]**
- It sits on the Queen Street Mall at Albert and Elizabeth Sts, with the **Queen Street Bus Station built into the Albert St side**. Reviewers stress that 3 Kingdoms is "right next to the bus stops". **[S/V]**
- **Level A eateries (Uptown directory, 13 Oct 2026):** 3 Kingdoms, Breadtop, Kurimu x Hokkaido Baked Cheese Tart, Little Thai Street, Nene Chicken, Starbucks, Sushi Hub, Taste Gallery, Teppanyaki King, Zhang Liang Malatang (next to V'Long Vietnamese). The main food court is on **Level E** (Mekong is "Level E | Foodcourt"; David's Noodle & Hot Pot and Chapter 3 are there too). 42 food outlets are listed centre-wide. **[V]**
- **Centre hours:** Mon–Thu 9–5:30, Fri 9–9, Sat 9–5, Sun 10–5. 3 Kingdoms trades later than the centre on every day except Friday. **[V]**
- **Audience:** CBD workers at lunch, bus commuters, QUT and UQ students (TikTok tags #qut #uq #unistudent), Chinese and other Asian international students (Chinese, Korean and Japanese reviewer names; Japanese study-abroad hashtags), and tourists (Ctrip/Trip.com listings). **No public foot-traffic figures were found.**
- **Uptown marketing:** the "What's On" feed carries tenant news and offers (OPSM, Soul Origin, Chatime, etc.). **3 Kingdoms has no current posts there**, which is a free channel it is not using. No campaign specifically about the Level A dining precinct was found. **[V]**

---

## Not verified / could not check

- Instagram live counts, bio link and post dates (blocked; snippet counts are undated). Xiaohongshu presence. TripAdvisor rating. Zomato rating (aggregator figure only). Menulog absence (search only; site blocked).
- Registrant of **3kingdoms.com.au** (RDAP rate-limited). Directors and owners (ASIC extract not purchased).
- The exact year the venue opened at the Myer Centre. Whether Sunnybank has closed. Whether Chapter 3 is a sister venue (shared phone number only).
- In-store menu board and prices beyond EatClub's list and review mentions. No photo of the counter menu was found.
- The "simmered 8–10 hours" broth claim (Zest, via search summary). Platform commission rates for this venue. After-hours access route into Uptown.
- TikTok search results showed "1w ago" for every video, including ones known to be from 2024, so those dates are unreliable.

---

## Screenshot index

All captured 13 Oct 2026 with headless Chromium, desktop 1440x900 and mobile 390x844 (iPhone UA), JPEG quality 70. `-full` means a full-page capture.

| File | Shows |
|---|---|
| `01-uptown-store-page-desktop.jpg` / `-full` | Uptown store page: hours, Level A map pin beside Target and Zhang Liang Malatang, broken logo image, About copy |
| `01-uptown-store-page-mobile.jpg` / `-full` | Same, mobile |
| `02-ubereats-listing-desktop.jpg` / `-full` | Uber Eats: 4.6 (800+), full menu and prices, reviews |
| `02-ubereats-listing-mobile.jpg` / `-full` | Same, mobile |
| `03-doordash-listing-desktop.jpg` / `-full` | DoorDash (via page-service host): 4.5 (100+), hours 11–6:30, 30% off, A$26.50–27.80 mains |
| `03-doordash-listing-mobile.jpg` / `-full` | Same, mobile |
| `04-google-maps-listing-desktop.jpg` | Google Business Profile: 4.2 (324), shopfront photo, "Floor Q", no website |
| `04-google-maps-reviews-desktop.jpg` | Google reviews tab |
| `04-google-maps-listing-mobile.jpg` | Google Maps mobile, collapsed card |
| `04-google-maps-listing-mobile-expanded.jpg` | Google Maps mobile, full details, review summary, "People also search for" |
| `04-google-maps-order-options-mobile.jpg` | "Place an order", which offers only HungryPanda, DoorDash and Uber Eats |
| `05-hungrypanda-listing-desktop.jpg` / `-full` | HungryPanda: 4.7 (724), full menu incl. DIY 500g/1000g, set meals, add-ons |
| `05-hungrypanda-listing-mobile.jpg` / `-full` | Same, mobile |
| `06-tiktok-search-mobile.jpg` / `-full` | TikTok search "3 kingdoms uptown brisbane": creator videos and view counts |
| `07-tiktok-profile-3kingdoms-hotpot-desktop.jpg` / `-full` | TikTok @3kingdoms.hotpot profile (videos grid failed to load logged-out) |
| `07-tiktok-profile-3kingdoms-hotpot-mobile.jpg` / `-full` | Same, mobile |
| `08-uptown-food-directory-desktop.jpg` / `-full` | Uptown Food & Dining directory (42 outlets) |
| `08-uptown-food-directory-mobile.jpg` / `-full` | Same, mobile |

**Could not capture:** Instagram (HTTP 429 / login), Facebook (login wall; the mobile page rendered blank, so meta tags were read instead), TripAdvisor (403), Yelp (403), Menulog (Cloudflare block), Restaurant Guru (bot check), Zomato (upstream error), EatClub (client-side crash in headless Chromium; content taken from server HTML), DoorDash main host (Cloudflare; the page-service host worked), 3kingdoms.com.au (HTTP only; the proxy allows HTTPS only, so content was read with curl).
