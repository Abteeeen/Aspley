# Aspley Hotel — current site content, copy and tone of voice

Captured 12 Oct 2026 from https://aspleyhotel.com.au/ (HTML fetched with curl, rendered with headless Chromium, PDFs downloaded and read). Everything in quotation marks is verbatim from the live site, including typos.

## 1. What the business actually is

**Aspley Hotel is a suburban Australian pub, not an accommodation hotel.** There are no rooms, no accommodation page, no rates and no room-booking engine anywhere on the site (we probed `/accommodation/`, `/rooms/`, `/stay/` — all 404; no booking-engine scripts of any kind are loaded). The venue offerings are:

- Bistro (lunch/dinner, pub classics, kids menu, coffee & cake)
- Bar (wine list, cocktail list)
- Gaming room (pokies) — "GUARANTEED GAMING HOURS Monday – Sunday: 10:00am – 4:00am"
- Sports bar (TAB + Fox Sports)
- Functions (three spaces, platters, package PDF)
- Drive-through bottle shop (Star Liquor)
- Star Rewards loyalty program (group-wide)

The site is a Star Hotels Group venue site: `og:site_name` "Aspley Hotel", `<title>` "Aspley | Star Hotels", footer "We're Part of the Star Hotels Group!". The WordPress install is a multisite (`/wp-content/uploads/sites/46/`), built by Niche Studio (theme "Default", Sage-based) with design credited to Pennybridge Creative. Group-wide assets are reused: the main menu PDF is "QLD-Classic-Main-Menu-Tier-2.pdf", the wine list is "Wine-Menu-QLD-No-Prices.pdf", the privacy policy is "Star-Groups-Privacy-Policy.pdf", and one hero asset is literally named `Aspley-Hotel-Chermside-Venue-Front-Exterior-1140x741.jpg`.

Any rebuild pitch must be framed around **pub / bistro / gaming / functions / bottle shop**, not room bookings. The "bookings" that matter commercially are: function enquiries, event tickets (Melbourne Cup), table bookings (currently phone only), gaming/loyalty sign-ups and bottle-shop foot traffic.

## 2. Brand identity signals

- Logo (footer, cocktail menu): circular badge, **"EST 1935 — ASPLEY HOTEL — PUB ON THE HILL — GAMING · BAR · FOOD · BOTTLESHOP"**. (Header logo on the home page uses a smaller variant, `image.png`, 595x368, with empty alt.)
- Hero (H2 + H1): **"ASPLEY HOTEL"** / **"BISTRO • BAR • GAMING"**
- Hero body copy: *"Aspley Hotel joined the star family in November 2023 but has been a beloved institution in the northern suburbs of Brisbane for nearly 90 years. Come and join us at the pub on the hill for a cold drink, hearty feed, or an exciting gaming experience."*
- Nickname used repeatedly: **"the pub on the hill"** / "Hotel on the Hill" (logo) — a genuine local-identity hook worth keeping.
- Primary colour: red (`#c8102e`-style buttons, red underline accents), with black, charcoal (#4a4a4a) and dark-maroon (#4d0000) section bands; white/light-grey backgrounds. Theme CSS bundle is literally named `main-red-*.css`.
- Typography: body/headings render in **"Myriad Pro", Helvetica, Arial** (Adobe Typekit kit loaded via `use.typekit.net`). A **Google Fonts "Poppins" stylesheet is also loaded but Poppins is never used** in computed styles (dead request). Menu PDFs use a condensed display face (Canva "Bebas"-style) for section heads.
- Photography: real venue photos (bistro, bar, gaming machines, outdoor function terrace, sports bar with Maroons/Blues banners), 1140px wide JPEGs. Event posters are Canva A4/A0 artwork (1414x2000 WebP / 1449x2048 JPG).
- Tone: friendly, plain, slightly salesy ("You won't be disappointed!"), exclamation-heavy, "mates"/"feed" Australian pub register. Not premium, not corporate. Copy quality is uneven (see typos below).

## 3. Navigation labels (verbatim)

Desktop header: `WHAT'S ON` · `EAT` · `DRINK` · `GAMING` · `FUNCTIONS` · `SPORTS BAR` · `STAR REWARDS` · `BOTTLESHOP` · `CONTACT` + Facebook icon + Instagram icon + red button **"CALL (07) 3263 4040"**.
Mobile header: hamburger ("Toggle navigation"), logo, red **"Call"** icon button.

Every nav item is an in-page anchor on the home page (`/#panel-eat`, `/#panel-drink`, `/#footer-contact` …). The site is effectively a one-page site plus a few utility pages.

## 4. Section copy, headlines and CTAs (home page, verbatim)

### WHAT'S ON
Carousel of 6 poster tiles (4 visible on desktop, 2 on mobile, "<" and ">" arrows). Each opens the poster in a modal. Current tiles and their alt text:
- "Melbourne Cup Day at Aspley Hotel" — poster text: *"Join us for a day at the races — MELBOURNE CUP — 03 Nov, 2026 — SWEEPS | CHEF SPECIALS — PRIZES | LUCKY LOSER DRAW — BOOKINGS ESSENTIAL — BOOK YOUR TABLE NOW — CALL (07) 3263 4040"*
- "Melbourne Cup Day Menu 2026" — poster: *"MELBOURNE CUP — TUESDAY 3RD NOVEMBER | 2 COURSE MENU $55"* with Entrées (Crispy Chicken Bites, Prawn Cocktail (A), Burrata (V)) and Mains (Miso Salmon, Pork Piccata, Pumpkin and Sage Gnocchi (V)).
- "Sunday Members Jackpot" — poster: *"SATURDAY MEMBERS JACKPOT DRAW — JACKPOT STARTING FROM $400 — $4000 WITH GUARANTEED DRAW"* (note: alt/title says *Sunday*, poster says *Saturday*).
- "Fun Trivia Wednesdays" — poster: *"WEDNESDAY TRIVIA — 6:30PM | FREE — HOSTED BY QUESTIONABLE COMPANY — QUIRKY ROUNDS | GREAT PRIZES | HEAPS FUN!"*
- "Jag the Joker" — poster: *"JAG THE JOKER — EVERY FRIDAY — ONE ENTRY FOR EVERY DRINK PURCHASE BETWEEN 3:30PM & 6:30PM — JACKPOTS $100 EVERY WEEK UNTIL THE JOKER IS FOUND"*
- "Seniors Discount" — poster "Seniors Discount POS" (event URL slug is `/event/we-love-our-seniours/`, sic).

### EAT
*"Aspley is the perfect place to enjoy a delicious meal with friends and family! Dine in one of our dining rooms and let our experienced staff take care of your every need while enjoying a quality meal."*
**BISTRO HOURS** — LUNCH *"Sunday – Wednesday: 11:30am – 2:30pm"* — DINNER *"Sunday – Wednesday: 5:30pm – 8:30pm"* — ALL DAY DINING *"Thursday – Saturday: 11:30am – 8:30pm"*
CTAs: **MAIN MENU** (→ `/main-menu/`, embedded PDF) · **KIDS MENU** (→ PDF) · **COFFEE & CAKE DEAL** (→ PDF)

### DRINK
*"With a wide range of beverages to select from, come down and enjoy a drink at Aspley Hotel from our friendly staff. You won't be disappointed!"*
CTAs: **WINE MENU** (→ PDF, "No Prices" version although it does show prices) · **COCKTAIL MENU** (→ `/cocktail-menu/`, embedded PDF)

### GAMING
*"Experience the best service in our gaming room from our exceptional staff. If you need a hand with anything, please don't hesitate to ask as we strive to create a unique and memorable experience for all of our guests."*
**GUARANTEED GAMING HOURS** *"Monday – Sunday: 10:00am – 4:00am"*. No CTA. No responsible-gambling statement or helpline on the page.

### FUNCTIONS
*"Looking to host your next event or celebration? We offer versatile space and range of catering options to suit your needs and an experience team here to assist with planning and execution, ensuing your occasion run smoothly and is truly special."* (sic: "an experience team", "ensuing", "run smoothly")
*"To discuss catering options, availability or any queries, enquire below and let us take care of the rest."*
CTAs: **ENQUIRE** (opens modal that AJAX-loads `/functions-enquiry-form/`) · **FUNCTIONS PACKAGE** (→ 1.7 MB PDF)

### SPORTS BAR
*"The Aspley Hotel Sports Bar is the place to be with dedicated TAB screens plus your Fox Sports favourites playing live all day every day. Gather your mates and pull on your team's jersey, it's time to head to the Aspley Sports Bar."* No CTA.

### STAR REWARDS
*"Did you know we have a loyalty program? With Star Rewards you can start collecting points to use in any of our Star Hotels venues and Star Liquor stores. PLUS you'll also be the first to hear about exclusive offers, promotions and events!"*
*"Not a member? Sign up today to be rewarded!"* — *"Step 1 Click the button below — Step 2 Fill out the registration form — Step 3 Receive your Star Rewards membership on the spot"*
CTA: **SIGN UP TO STAR REWARDS** → `https://qrco.de/bbdyet` (QR-code short link, opens new tab). A large QR-code image is shown on desktop. This block is duplicated in the HTML (desktop + mobile accordion copies); on mobile the accordion header is empty (just a "+").

### BOTTLESHOP
*"Our drive through bottle shop has a wide selection of beer, wine and spirits to meet your needs. Not only are we competitive with our prices, we have great specials on every week. Park up and browse through the store or drive on up to the counter and let our friendly and knowledgeable staff take care of everything for you."*
**TRADING HOURS** *"Sunday – Thursday: 10:00am – 11:00pm"* / *"Friday – Saturday: 10:00am – 12:00am"*
*"Visit www.starliquor.com.au for more information."* (link is `http://www.starliquor.com.au`, plain http.)

### LOCATION (with Google Maps embed)
*"1247 Gympie Road, Aspley QLD 4034"*
**TRADING HOURS** — BISTRO: *"LUNCH | Monday – Wednesday: 11:30am – 2:30pm"*, *"DINNER | Monday – Wednesday: 5:30pm – 8:30pm"*, *"ALL DAY DINING | Thursday – Saturday: 11:30pm – 8:30pm"* (sic "11:30pm") — GAMING *"Monday – Sunday: 10:00am – 4:00am"*
CTAs: **DIRECTIONS** (Google Maps link) · **(07) 3263 4040** (tel:) · **PRIVACY POLICY** (PDF)

### WE'RE PART OF THE STAR HOTELS GROUP!
*"See where you can use our Star Rewards"* — CTA **EXPLORE OUR VENUES** → `https://starhotels.com.au/star-hotels/`

### Footer — CONTACT US
Gravity Forms: Name*, Email*, Phone*, Message*, **SEND** (reCAPTCHA v3). Footer text: *"© 2026 Aspley Hotel"*, *"Design by Pennybridge Creative"*, *"Build by Niche Studio"*. Social icons link to `facebook.com/AspleyHotel` and `instagram.com/aspleyhotel/`.

## 5. Other pages

| Page | Headline / copy |
|---|---|
| `/main-menu/` | H1 "Main Menu"; meta description *"Explore our main menu featuring fresh pub classic favourites from steaks to parmy's. Great value dining for lunch and dinner."*; body is a PDF.js iframe of an A3 image-only PDF — no HTML text. |
| `/cocktail-menu/` | H1 "Cocktail Menu"; PDF.js iframe of an image-only PDF; no meta description. |
| `/functions-enquiry-form/` | No H1. Gravity Form: Full Name*, Email Address*, Phone Number*, Preferred Time* (hours/minutes/AM-PM), Preferred Date* (Day/Month/Year selects — the year list runs 2027 back to **1920**), Number of People*, Function Spaces* (*"Herb Garden - (Seated: 80p \| Standing: 100p)"*, *"Terrace - (Seated: 40p)"*, *"Terrace & Back Herb Garden - (Seated: 60p)"*), Occasion* (Birthday, Engagement Party, Wedding Reception, Corporate Event, Social Event, Anniversary, Other (Please Specify Below)), Enquiry*, SEND. |
| `/thank-you/` | *"Thank You — Thank you for contacting us. Your message has been received, and our team will be in touch shortly to discuss your enquiry. For more urgent enquiries, please call our venue at (07) 3263 4040"* — CTA **Return to Homepage**. |
| `/product/melbourne-cup/` | WooCommerce ticket product: **"Melbourne Cup" — $55.00** — *"Celebrate Melbourne Cup Day with us! Enjoy live race coverage, a lavish 3-course lunch, exciting prizes, and great company. Secure your spot for a thrilling day at the races!"* — Ticket Qty, "Ticket #1 First Name:", button **"Buy Ticket Now"**, "Category: Tickets", Additional information: *"Melbourne Cup — 3 Course Lunch $55"*. (The poster/menu say **2 course**, the product says **3 course**.) |
| `/event/` archive | H1 "Archives: Events"; six cards with "Read More"; author shown as "By opremmarketing" / "By genine". |
| `/event/<slug>/` | Each event page is only an H1 + the poster image in a modal with a "close" control; no body text, so nothing is indexable beyond the title and (for 4 of 6) a meta description. |
| 404 | *"Not Found — Sorry, but the page you were trying to view does not exist."* + search box. Served with the full header/footer, correct 404 status. |

### Event meta descriptions (verbatim)
- Melbourne Cup Day: *"Enjoy Melbourne Cup Day this November 3rd at Aspley Hotel. Catch live coverage and delicious chef specials."*
- Melbourne Cup Menu 2026: *"Check out our delicious menu for Melbourne Cup Day at Aspley Hotel. Book your table now !!"*
- Sunday Members Jackpot: *"Sundays just got better! Join us Sundays at **The Ox Margate** with our Members Jackpot Draw."* — copied from a sister venue; wrong venue name on Aspley's site.
- Seniors Discount: *"Seniors save more on a great deal! Enjoy discounted meals, great company, welcoming atmosphere and friendly service with every visit."*

## 6. Menus and pricing shown (from the PDFs)

**Main menu** (`QLD-Classic-Main-Menu-Tier-2.pdf`, A3, image-only; prices "non-member | MEMBERS"):
- ENTRÉES: Garlic Bread (V) half $7.62/$6.62, full $11.82/$10.82; Bowl of Chips (V) $12.92/$11.92; Salt & Pepper Calamari (I) $18.98/$17.98; Lasagne Spring Rolls $18.71/$17.71; Pumpkin Arancini (V) $18.92/$17.92; Southern Fried Chicken Wings (1/2KG) $18.83/$17.83; Pumpkin Soup (V) $18.62/$17.62; Crumbed Zucchini Wedges (V) $15.83/$14.83; Pork Belly Bites $20.99/$19.99; Sweet Potato Wedges $15.83/$14.83; Oysters Natural (GF)(A) 3/6/9 $12.91/$24.82/$36.73; Oysters Kilpatrick (A) 3/6/9 $13.85/$26.76/$39.95.
- PIZZAS: Chorizo & Prawn (A) $28.88; Meat Lovers $29.91; BBQ Chicken & Bacon $27.78; Vego (V) $26.86.
- FROM THE GRILL ("ALL OUR STEAKS ARE LOCALLY SOURCED FROM JBS"): 300g Rump $41.93; 300g Rib Fillet $49.98; 200g Eye Fillet $48.86; Grilled BBQ Chicken Breast $30.82; The Bachelor 550g Black Angus T-Bone $66.95; Coast & Cattle $50.67; Chef's Signature Pork Ribs half $37.78 / full $52.81. Sauces: Rich House Gravy, Diane, Creamy Mushroom, Pepper, Creamy Garlic, Hollandaise, Red Wine Jus.
- BURGERS & SANDWICHES: Crispy Chicken Burger $26.80; Famous Steak Sandwich $30.99; Humpty Doo Barra Burger $29.94; Chicken Sandwich $28.76; Chef's Signature Beef Burger $28.83.
- CLASSICS: Bangers & Mash (GF) $26.93; Beer Battered Barramundi $32.94; Pork Belly (GF) $36.74; Grilled Salmon (GF) $35.81; Salt & Pepper Calamari $33.91; Soy Miso Chicken Salad $29.87; Angus Beef Lasagne $31.93; Chicken Carbonara $30.77; Humpty Doo Barramundi $36.79; Creamy Garlic Prawns (GF) $34.72; Slow Cooked Lamb Shank $34.61; Honey Roasted Pumpkin Salad (V) $24.91; Yorkshire Yacht & Roast Meat Armada $31.88; Beef Schnitzel $36.89.
- PARMY ARMY: Chicken Schnitzel $27.73; "PARMY IT UP" toppers: Original +$5.72, Caldo +$5.99, Hawaiian +$6.61, Pork Belly +$7.91, Super Supreme +$7.98, Hangover +$7.87, Dirty Birdie +$9.98.
- TOPPERS, SIDES (Creamy Mash $7.68 … Chips $8.68), DESSERTS: Death by Chocolate $15.95; Maddy's Brownie Spring Rolls $15.95.
- Legend: "(V) VEGETARIAN | (GF) GLUTEN FRIENDLY | (A) AUSTRALIAN | (I) IMPORTED | (M) MIXED". Members pricing is consistently $1 less — strong Star Rewards hook.

**Kids menu** ("Little Nippers KIDS MENU — INCLUDES A SOFT DRINK & VANILLA ICE CREAM W/ TOPPING. FOR 12 YEARS & UNDER"): Chicken Nuggets, Hawaiian Pizza, Fish & Chips, Cheeseburger, Bolognese — all **$13.95**.

**Coffee & Cake**: Coffee & Cake Members $12.95 / Non-Members $13.95; Cake $9.95/$10.95; Coffee cup $5.00, mug $5.50; Tea cup $4.00, mug $4.50, pot $5.00.

**Cocktail menu** (image-only PDF, no prices): Margarita, Espresso Martini, Flavoured Mojito, Pina Colada, Pornstar Martini, Cosmopolitan, Fruit Tingle, Aperol Spritz, Mojito, French Martini, Long Island Iced Tea, Whiskey Sour — each with a playful one-liner (e.g. *"Wake up & shake up!"*, *"Your passport to paradise!"*).

**Wine list** (text PDF, prices small/large/bottle): Rosé (Tatachilla White Admiral 8/11/30, La Vieille Ferme 9.5/14/40), Sparkling (De Bortoli King Valley Prosecco Piccolo 12, Grant Burge Prosecco 10.5/46, Tatachilla Sparkling NV 8/33, Croser NV 57, Mumm Cordon Rouge NV 86), Whites (Brown Brothers Moscato, Grant Burge Benchmark Sauvignon Blanc, Ta Ku, Mud House, Grant Burge Pearl, Tatachilla Pinot Grigio, Grant Burge Pearl Pinot Gris, Benchmark Chardonnay, Taylors Estate Chardonnay, Jim Barry Watervale Riesling), Reds (Taylors Flint & Velvet Pinot Noir, Benchmark Merlot, Wirra Wirra Church Block, Benchmark Cabernet, St Hallett Black Clay, Benchmark Shiraz, Jacob's Creek Reserve Shiraz, St Hallett Black Clay Shiraz, St Hugo Shiraz 86).

**Functions package** (6-page PDF): *"DISCOVER — The Aspley Hotel, a premier venue for your next event, is located in a vibrant community…"*; spaces Herb Garden (80 seated / 100 standing), Terrace (40 seated), Terrace & Back Herb Garden (60 seated); platters $100–$145 (Pub Classic $120, Vegetarian $110, Premium $145, Pizza $100, Cheese $120, Mini Slider Burgers $120, Gluten Free $130, Dessert $100); T&Cs: $100 deposit, minimum spend $1000 Mon–Thu / $2000 Fri–Sun or $250 room hire, $35/hr staff fee, cakeage $2.50pp, 10% public-holiday surcharge, no 18th–20th birthdays, functions email **enquiries@aspleyhotel.com.au**.

## 7. Contact details, hours and social

- Phone: **(07) 3263 4040** (tel: links written four different ways: `tel: (07) 3263 4040`, `tel:(07)32634040`, `tel:+61732634040`, `tel:0732634040`)
- Email: enquiries@aspleyhotel.com.au (only in the functions PDF; not on the site)
- Address: 1247 Gympie Road, Aspley QLD 4034
- Facebook: https://www.facebook.com/AspleyHotel — Instagram: https://www.instagram.com/aspleyhotel/ (both only as icon links with no accessible name; could not be verified server-side because Meta returns login walls to bots)
- Hours are stated in three places and **do not agree**: EAT section says lunch/dinner "Sunday – Wednesday"; footer says "Monday – Wednesday"; footer all-day dining says "11:30pm – 8:30pm"; the Rank Math JSON-LD says `openingHours: Mo–Su 09:00-17:00`, which matches nothing on the page. Bottle shop Sun–Thu 10am–11pm, Fri–Sat 10am–12am. Gaming 10am–4am daily.
- Copyright "© 2026" is current.

## 8. Target audience signals

Local northern-Brisbane families ("friends and family", kids menu, seniors discount), sports fans ("Gather your mates and pull on your team's jersey", TAB, Fox Sports), gaming members (members jackpot, Jag the Joker, members pricing on every dish), function bookers (birthdays, engagements, corporate), and drive-through bottle-shop shoppers. No tourist/accommodation audience at all.

## 9. Copy defects to fix in a rebuild (verbatim)

- "ensuing your occasion run smoothly" → "ensuring your occasion runs smoothly"; "an experience team" → "an experienced team"
- "ALL DAY DINING | Thursday – Saturday: 11:30pm – 8:30pm" → 11:30am
- "Sunday – Wednesday" vs "Monday – Wednesday" bistro hours — pick one
- "Sunday Members Jackpot" title/alt vs "SATURDAY MEMBERS JACKPOT DRAW" poster
- Members Jackpot meta description names "The Ox Margate"
- URL slug `/event/we-love-our-seniours/`
- Melbourne Cup "2 course" (poster) vs "3 course" (ticket product)
- Star Rewards copy block duplicated; mobile accordion title empty
- Wine list PDF named "No Prices" but shows prices
