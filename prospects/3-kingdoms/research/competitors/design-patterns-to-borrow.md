# Design patterns to borrow

Seen live on 13 October 2026. Each pattern names the screenshot that shows it (all in `screenshots/`). The "For 3 Kingdoms" lines are directions for the brief, not designs.

## Patterns worth borrowing

1. **One action in the header, on every screen.**
   Boiling Point keeps "ORDER NOW" in the header on desktop and mobile. Taro's and Happy Boy keep a round "BOOK" button. Din Tai Fung puts "Reserve" and "Order" under its wordmark.
   Screens: `benchmark-01-boiling-point-home-mobile-fold.jpg`, `local-07-taros-ramen-home-mobile-fold.jpg`, `benchmark-03-din-tai-fung-home-mobile-fold.jpg`.
   For 3 Kingdoms: pick the one action that matters most at lunch, probably "Order" (Uber Eats until they have their own) or "Find us on Level A", and never hide it in the hamburger. Shabu House and Mamak both hide theirs on mobile (`local-08-shabu-house-home-mobile-fold.jpg`, `local-06-mamak-home-mobile-fold.jpg`).

2. **A fixed action bar at the bottom of the phone screen.**
   YX Mini Hot Pot pins a full-width red "Reservations" bar to the bottom of every mobile screen.
   Screen: `benchmark-08-yx-mini-hot-pot-home-mobile-fold.jpg`.
   For 3 Kingdoms: a three-part bar, "Directions · Call · Order", fixes the "hard to find" complaint from reviews and sits where thumbs are.

3. **Bilingual dish names, Chinese first.**
   Xi'an Famous Foods prints each dish's Chinese name in red above the English name, with a counter code (A1, N4, B2) that matches the in-store menu.
   Screens: `benchmark-05-xian-famous-foods-menu-mobile.jpg`, `benchmark-05-xian-famous-foods-home-desktop-fold.jpg`.
   For 3 Kingdoms: dish names in 中文 and English, plus codes matching the counter board, so a student can point at a phone and order. Add an EN / 中文 switch in the top bar like Boiling Point (`benchmark-01-boiling-point-home-desktop-fold.jpg`) and CHAGEE.

4. **Spice as the brand's voice.**
   Xi'an runs a ticker reading "NOT SPICY = NOT AS GOOD · 不辣不如辣" above its header, and publishes separate nutrition sheets for "not spicy" and "spicy" versions.
   Screen: `benchmark-05-xian-famous-foods-home-desktop-fold.jpg`.
   For 3 Kingdoms: customisable spice is the client's own selling point. Give it a named scale in Chinese and English (for example 微辣 / 中辣 / 特辣, mild to extra hot, and 麻 numbing as a separate dial if the kitchen offers it). Confirm the real levels with the kitchen first.

5. **The menu as a build-your-bowl sequence.**
   David's Master Pot titles its menu "Build your bowl. Make it yours." and starts with soup bases as large photo cards with allergens.
   Screen: `local-03-davids-master-pot-menu-mobile.jpg`.
   For 3 Kingdoms: show the mini hot pot as three steps (broth, ingredients, spice), and beat David's on one detail: **show prices**. David's shows none.

6. **The native-script wordmark as the hero.**
   Din Tai Fung opens with 鼎泰豐 in red brush strokes on black, and nothing else but two buttons. YX sets 余香精品小火锅 beside its English name.
   Screens: `benchmark-03-din-tai-fung-home-desktop-fold.jpg`, `benchmark-08-yx-mini-hot-pot-home-desktop-fold.jpg`.
   For 3 Kingdoms: the existing logo already reads 三国冒菜 in brush calligraphy (black and white). It can carry the first screen on its own, with a food image or broth video beside or behind it.

7. **HTML menu with tabs and dietary filters.**
   wagamama's menu has category tabs ("lunch time", "sides") and a "dietary filters" drawer, with kcal and vegan/vegetarian marks on each dish. Din Tai Fung adds a photo per dish and an allergen guide.
   Screens: `benchmark-06-wagamama-menu-mobile.jpg`, `benchmark-03-din-tai-fung-menu-mobile.jpg`.
   For 3 Kingdoms: tabs for Mini hot pot / Noodles / Sides / Drinks and filters for vegetarian, not spicy and gluten. Real text beats the PDFs used by Shabu House, Taro's, Happy Boy and YX (`local-08-shabu-house-menu-mobile.jpg`).

8. **Scroll-linked craft storytelling.**
   Din Tai Fung (GSAP ScrollTrigger) moves from the wordmark into locations, a press quote ("The World's GREATEST DUMPLINGS") and "Crafted to Perfection" dish cards. CHAGEE (GSAP ScrollTrigger + Lenis smooth scrolling) opens on a full-screen video and moves through slow, cinematic product and landscape panels.
   Screens: `benchmark-03-din-tai-fung-home-desktop.jpg`, `benchmark-04-chagee-home-desktop.jpg`, `benchmark-04-chagee-home-desktop-fold.jpg`.
   For 3 Kingdoms: one scroll moment about the broth, the thing that is "slow-simmered" and "prepared daily". Steam rising, chilli oil settling, noodles being pulled. Keep it short and compressed, with a still image for people who prefer reduced motion.

9. **Personality through real people and press.**
   Xi'an follows its hero with press logos (WSJ, Forbes, GMA, Eater), an Anthony Bourdain quote, and a "Father and Son" story with a taped photo of the founders.
   Screen: `benchmark-05-xian-famous-foods-home-desktop.jpg`.
   For 3 Kingdoms: real review numbers (Google 4.2 from 311, EatClub 4.7 from 1,025) and photos of the people cooking, not stock. No local rival shows reviews.

10. **A campaign slot for students.**
    wagamama's mobile hero on 13 October was "students! our first student exclusive is here".
    Screen: `benchmark-06-wagamama-home-mobile-fold.jpg`.
    For 3 Kingdoms: the CBD is full of students and office workers. Leave one slot on the home page for a rotating offer (student deal, lunch special, EatClub times) that the owner can change without a developer.

11. **A ticker used once, with something to say.**
    Shabu House ("SHABU SHABU ~ HOUSE HOUSE"), David's Master Pot ("ASSISTED SELF-SERVE HOTPOT BUFFET") and Xi'an all run a scrolling ticker.
    Screens: `local-08-shabu-house-home-desktop-fold.jpg`, `local-03-davids-master-pot-home-desktop.jpg`.
    For 3 Kingdoms: tickers are now common in this category. Use one only if it carries a fact (open hours today, "Level A, beside Target"), not decoration.

12. **Big type and cut-out food (motion reference only).**
    The CRAV concept site sets "THE BURGER" across the full width with a cut-out burger, then uses GSAP and Lenis so food and stickers move with the scroll. It is an agency concept, not a trading restaurant.
    Screen: `benchmark-07-crav-burgers-home-desktop.jpg`.
    For 3 Kingdoms: shows the client how a cut-out bowl, chilli or noodle strand can move with the scroll. Borrow the technique, not the cartoon tone.

## Anti-patterns seen live

- **Pop-up on first visit.** Din Tai Fung opens a newsletter form over its hero (`benchmark-03-din-tai-fung-home-desktop-fold-signup-modal.jpg`). CHAGEE opens a country-redirect box.
- **Huge autoplay video.** David's Master Pot's hero video source is 92 MB. Chubby Cattle's is a 24 MB `.mov`. Its mobile first screen is mostly dark (`benchmark-02-chubby-cattle-home-mobile-fold.jpg`).
- **PDF menus.** Shabu House (6), Taro's (5), Happy Boy (1), YX (1).
- **No food above the fold.** Happy Boy's first screen is a wordmark on white (`local-09-happy-boy-home-desktop-fold.jpg`).
- **SEO aimed at the wrong reader.** David's Master Pot's home page meta description talks to franchise buyers ("Enquire with David's Master Hotpot today"), not diners.

## Visual motifs in Sichuan and hot pot branding

Seen across the sites above and the wider category:

| Motif | Where seen | Verdict for 3 Kingdoms |
|---|---|---|
| Chilli red as the main colour | David's Master Pot, Din Tai Fung, Boiling Point, Xi'an, Mamak, YX | Expected, so it does not stand out. Use it as an accent, not wallpaper. |
| Cream, red and yellow together | David's Master Pot, Xi'an, CRAV | Now the default look for Asian fast casual. Avoid, or the site will look like David's Master Pot 150 m away. |
| Sichuan peppercorn (花椒), green and red husks | Rare on these sites | Distinctive and true to Sichuan's numbing 麻. Peppercorn green beside chilli red is an unused pairing. |
| Steam and bubbling broth | Food photos across the category | Strong, and honest for slow-simmered broths. Best as subtle motion or real video, not drawn steam lines. |
| Red chilli-oil broth from above | David's Master Pot cards, Taro's hero (ramen) | Essential food shot, but every rival has it. Pair it with a signature 3 Kingdoms angle such as the individual pot. |
| Brush calligraphy | Din Tai Fung, YX, David's Master Pot artwork, the 3 Kingdoms logo itself | Keep the client's existing calligraphic logo. Do not add a second fake-brush font for headings. |
| Ink-wash landscapes, red seal stamps, vertical text, a horseman | YX Mini Hot Pot (`benchmark-08-yx-mini-hot-pot-home-desktop.jpg`) | Closest to "ancient China" in the category. Beautiful in places but slow (9.1 s, 11.8 MB) and easy to overdo. Borrow the seal stamp as a small device at most. |
| Cyberpunk mythical beasts, neon | YX Hot Pot's sister brand ("Cyber Sanctuary of YX"), Chubby Cattle | Aimed at Gen Z night-out hot pot. Wrong mood for a quick, warm lunch. |
| Red lanterns, dragons, gold-on-red, "chop suey" lettering, yin-yang, panda mascots | Generic Chinese takeaway branding | Clichés. Avoid. |
| Fire emoji or flame icons for spice | Common on delivery apps | Cliché, and does not show numbing 麻. Use a named scale instead (pattern 4). |

### The Three Kingdoms (三国) theme: use the fact, skip the costume

- **The real link.** In *Romance of the Three Kingdoms*, Liu Bei's state of Shu (蜀) was centred on Chengdu. 蜀 is still the short name for Sichuan, and mao cai (冒菜), the dish in the client's logo 三国冒菜, comes from Chengdu. "Three Kingdoms" plus a Chengdu dish is a true, short story that no rival can tell.
- **Useful, quiet devices:** the number three as structure (three steps to build a pot, three heat levels, three-column layouts); the three-state map silhouette (魏 蜀 吴) as a small graphic with Shu highlighted; one line of copy about Shu and Sichuan.
- **Clichés to avoid:** armoured generals, crossed halberds and battle banners, game art in the style of *Dynasty Warriors* or *Total War*, Guan Yu's red face, Zhuge Liang's feather fan as a mascot, scroll-paper backgrounds and "ancient" serif fonts. They suggest a theme restaurant or a video game, not a quick, warm bowl at lunch, and they bury the food.
