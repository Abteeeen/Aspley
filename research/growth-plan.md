# Aspley Hotel: growth plan and skills roundtable

Written 12 October 2026, 22 days before Melbourne Cup (Tuesday 3 November 2026). Planning document only: no site code, no mocks touched.

**Inputs read:** `research/references/BRIEF.md`, `research/aspley-current-site/README.md`, `issues.md`, `content-and-language.md`, `research/competitors/README.md`, `comparison.md`, `design-patterns-to-borrow.md`, `design-system/aspley/MASTER.md` and its two page overrides, and the SKILL.md files for copywriting, impeccable (plus `reference/shape.md`, `critique.md`, `delight.md`, `overdrive.md`, `animate.md`), high-end-visual-design, emil-design-eng, gsap-scrolltrigger, core-web-vitals, ui-ux-pro-max, frontend-ui-engineering and web-design-guidelines (current Vercel rules fetched from `vercel-labs/web-interface-guidelines`, `command.md`).

**ui-ux-pro-max queries run** (from the repo root):
- `--domain landing`: "restaurant bar hospitality booking", "pub local venue events", "restaurant" and "hero cta" returned **0 results**. The database has no hospitality landing pattern, so the landing advice below borrows from the closest matches it did return: `event-conference-landing`, `hero-testimonials-cta`, `product-review-ratings-focused`, `lead-magnet-form` and `funnel-3-step-conversion`.
- `--domain ux`: "booking form mobile", "sticky CTA bar mobile", "reduced motion animation", "filter results", "touch target size", "auto-playing carousel", "live region status update" and "date picker" all returned matches. "countdown timer urgency" and "phone number tel link" returned nothing relevant.
- `--domain gsap`: "scroll pin heritage reveal" returned three presets.

**Fact rule for this document:** every number below comes from the brief or the audit. Wherever a feature needs a fact we don't have yet, it's marked `[NEED: ...]`. No targets, baselines, review quotes or awards are invented.

---

## 1. Skills roundtable

### What each skill says this site must do (top 3 each)

| Skill | Must do #1 | Must do #2 | Must do #3 |
|---|---|---|---|
| **copywriting** | Clarity over cleverness and specificity over vagueness. "$1 less on every dish" beats "great value". Apply the swap test: if a rival pub could print the line unchanged, rewrite it. | Write CTAs as action verb + what you get ("Get Melbourne Cup Tickets", not "Learn More"). Never use Submit, Sign Up or Click Here. | No AI tells: no "it's not X, it's Y", no negation lists, no self-answered questions, **no exclamation marks, no em dashes in short copy**. Never fabricate proof. Flag any gap as `[NEED: ...]`. |
| **impeccable** (SKILL, shape, animate, delight, overdrive, critique) | **The brief wins** and redesign keeps product truth. Pick the mode per surface: the home page and the Melbourne Cup page are *Persuade*, while the menu, hours and function finder are *Operate/Read*, so scanability beats expression there. | Motion gets **one authored focal moment per surface**. "A generic fade-and-rise, hover lift, parallax layer or scroll reveal is not a thesis." Content stays visible if scripts fail. Every animation needs a reduced-motion path. | Delight only at moments that earn it, such as a successful booking or enquiry. It must never delay the task or add claims. Overdrive means proposing 2 or 3 directions before building, and **one extraordinary moment, not layers**. Critique runs as a dual-agent review with Nielsen scoring and personas. The "distracted mobile user" persona is the Aspley customer at 9pm. |
| **high-end-visual-design** (advisory) | Avoid cheap defaults: generic grey borders, harsh shadows, `linear`/`ease-in-out` transitions, symmetrical Bootstrap three-column grids. | Use generous macro-whitespace and custom cubic-bezier easing everywhere. | Animate only transform and opacity. Keep `backdrop-blur` to fixed elements and attach grain only to fixed pseudo-elements. Use `min-h-[100dvh]`, never `h-screen`. |
| **emil-design-eng** | Decide by frequency whether to animate. Things seen tens of times a visit (nav, tabs, the menu toggle) get little or no motion. Rare moments (a booking confirmation) may get delight. | UI motion stays **under 300ms** with a strong ease-out (`cubic-bezier(0.23, 1, 0.32, 1)`). Never ease-in. Exits run faster than entrances. Buttons scale to about 0.97 on press. Never animate from `scale(0)`. | Reduced motion means fewer and gentler animations, not none: keep opacity and colour, drop movement. Gate hover effects behind `(hover: hover) and (pointer: fine)`. |
| **gsap-scrolltrigger** (+ gsap-core) | Put ScrollTrigger on top-level timelines only, never on child tweens. Create triggers top to bottom or set `refreshPriority`. Call `ScrollTrigger.refresh()` after fonts and images load. | Choose scrub *or* toggleActions on any one trigger, never both. Horizontal `containerAnimation` needs `ease: "none"`. Remove markers before shipping. | Wrap everything in `gsap.matchMedia()` with a `prefers-reduced-motion` branch. The ui-ux-pro-max gsap preset adds: pin at most 1 or 2 sections per page and test on mid-tier phones. |
| **core-web-vitals** | Measure before optimising: CrUX p75 first, then a trace. Good means LCP ≤ 2.5s, INP ≤ 200ms, CLS ≤ 0.1. Today the home page measures LCP 13.7s, mobile CLS 0.31 and TTFB 9.8s. | The LCP element (the hill photo) must sit in the initial HTML as an `<img>` with `fetchpriority="high"` and correct dimensions. TTFB must be under 800ms, critical CSS inlined, nothing render-blocking. | Reserve space for every image and embed to fix CLS. Speculation Rules can prerender likely next pages (menu, functions) at `moderate` eagerness. Fire analytics on `prerenderingchange`, not on prerender. |
| **ui-ux-pro-max** | Accessibility and touch come first: 4.5:1 contrast, labels on inputs, 44px targets on phones (WCAG 2.2 web floor is 24px), at least 8px between targets. | Auto-rotating content must have pause, previous and next controls and must stop on focus and under reduced motion. That rules out the current poster carousel. Animate one or two key elements per view at most. | From the event-landing pattern: "Expose the exact deadline as text," show a static countdown under reduced motion, and claim limited seats or live status only when the data is verified and timestamped. Forms: show loading, then success or error, and use the right `inputmode`. |
| **frontend-ui-engineering** | Avoid the AI look. That means no `rounded-2xl` on everything, no stock card grids and no oversized padding everywhere. Use the project palette and purpose-driven layouts instead. | Every data surface (What's On, fixtures, menu filters) gets empty, loading and error states. Put filters in the URL. | WCAG 2.1 AA: keyboard path, focus management in dialogs, colour never the only signal. Test at 320, 768, 1024 and 1440px. |
| **web-design-guidelines** (Vercel rules, fetched today) | Images get explicit `width` and `height`. The above-fold image gets `fetchpriority="high"`, and below-fold images are lazy. Never use `transition: all`. | **URL reflects state**: deep-link function finder filters and the menu toggle. Format dates and times with `Intl.DateTimeFormat`. Guard date and time rendering against hydration mismatch, which matters for any "open now" logic. | Forms need `autocomplete`, the correct `type`/`inputmode`, inline errors and focus on the first error. Async status needs `aria-live="polite"`. Use a skip link and a `scroll-margin-top` under the sticky header. Use specific button labels and Title Case for buttons. |

### Where the skills disagree, and how each disagreement resolves

The tiebreak order comes from CLAUDE.md rule 2 and the brief. On aesthetics, impeccable and frontend-design win, with impeccable winning ties. Emil and gsap decide how motion is built. Accessibility always wins.

1. **Fade-up on everything vs one authored moment.** high-end-visual-design says "Elements never appear statically on load… gentle, heavy fade-up… 800ms+". impeccable's animate reference says a scroll reveal "is not a thesis". ui-ux-pro-max says to animate one or two key elements per view. The brief says the page must be "complete at rest… never leave real content at opacity 0".
   **Resolution:** impeccable wins. Each surface gets one authored moment (see section 4), and everything else is visible at rest. high-end's fade-up becomes at most a 12px, 300ms settle on *already visible* content, and only where it explains a list arriving.

2. **Pub voice vs copywriting voice.** The current copy is "exclamation-heavy" ("You won't be disappointed!", "Book your table now !!"). The copywriting skill says to remove exclamation points and avoid buzzwords.
   **Resolution:** keep the register and drop the punctuation. Warmth comes from the words the pub already uses ("feed", "mates", "parmy", "pub on the hill") and from specifics (6:30pm, $13.95, $1 off). Humour is allowed where it doesn't cost clarity ("Bring your smartest mate"). Zero exclamation marks, and no em dashes in headlines or CTAs.

3. **Durations: 300ms vs 800ms.** emil says UI animation stays under 300ms. high-end wants 700ms or more on everything. impeccable allows 500 to 800ms *only* for "a deliberately authored focal entrance".
   **Resolution:** split by job. Feedback and state changes (menu toggle, finder filters, sheet open) run 120 to 280ms with emil's curves. The single focal moment per page may run 600 to 800ms with `cubic-bezier(0.16, 1, 0.3, 1)`. Exits run faster than entrances everywhere.

4. **Palette data vs brand fact.** `design-system/aspley/MASTER.md` is raw ui-ux-pro-max output: navy `#1E3A8A` with gold `#A16207` and Playfair Display SC. The owner-approved brief fixes brand red at about `#C8102E` and the "EST 1935 · PUB ON THE HILL" badge.
   **Resolution:** CLAUDE.md gives ui-ux-pro-max palette *data*, but impeccable's "the brief wins" and the owner's decided facts sit above generated defaults. Keep MASTER.md untouched (rule 4, no `--force`). Treat its palette as data, and put the brand red into per-page overrides, as `variant-a-verandah.md` and `variant-b-tonight.md` already do.

5. **Navigation shape.** high-end bans "edge-to-edge sticky navbars glued to the top" and wants a floating glass pill. Every rival pub keeps "Book" fixed in the header, ui-ux-pro-max requires sticky-nav padding compensation, and the brief requires a sticky "Book a table / Call" bar on phones.
   **Resolution:** conversion and the brief win. A persistent Book action is non-negotiable. Its *styling* is free, and a detached bar is allowed as long as it never hides focused elements (Vercel rule) and respects safe areas.

6. **Card treatment.** high-end prescribes "Double-Bezel" nested cards, `rounded-[2rem]` and pill buttons with nested arrow circles. frontend-ui-engineering lists "rounded everything" as an AI tell, and impeccable's redesign rule says the world comes from the venue, not a template.
   **Resolution:** no double-bezel. Derive shape from the building and the bar: weatherboard rules, chalkboard frames, enamel-sign corners. Pills only if the chosen world calls for them.

7. **Font bans vs fallback stacks.** high-end bans Inter, Roboto, Arial, Open Sans and Helvetica. The brief requires "a real fallback stack", and CLAUDE.md says high-end's font bans never override accessibility.
   **Resolution:** don't use banned faces as display or body choices, but Arial and Helvetica may appear in the fallback stack. Reject Playfair as a reflex heritage serif, which variant A's override already did.

8. **Eyebrow pills.** high-end wants a tiny uppercase pill above every H2. The brief explicitly overrides this.
   **Resolution:** no eyebrows by default. A label earns its place only when it carries a fact ("Wednesday · 6:30pm · Free").

9. **Smooth scroll (Lenis).** The brief allows Lenis. core-web-vitals cares about INP, and reduced motion means no smooth scroll.
   **Resolution:** Lenis only on `(pointer: fine)` with motion allowed, never on touch, and never on the menu or function pages (Operate mode).

10. **Overdrive vs speed.** overdrive invites WebGL and shaders. core-web-vitals says the LCP element must be discoverable and prioritised, and the audit's biggest single finding is slowness.
    **Resolution:** no WebGL in the first viewport. The "extraordinary" budget goes to one functional moment, such as the Book button morphing into the booking sheet with a View Transition (overdrive's own example: "a dialog that morphs from the button that triggered it").

11. **Countdown urgency vs honesty.** The ui-ux-pro-max event pattern recommends urgency, while copywriting bans sensational claims.
    **Resolution:** the Cup countdown shows days only, with the full date in text. Never write "selling fast" or "limited seats" unless the ticketing system supplies a timestamped count.

12. **Title Case vs voice.** The Vercel rules want Title Case buttons and second person with no first person. The pub's voice is "we" and "us".
    **Resolution:** buttons in Title Case and second person ("Book a Table"). Body copy may use "we", because the venue is a host talking to locals.

13. **Gaming promotion and delight.** Delight and overdrive invite celebratory motion. The gaming content (10am to 4am, Members Jackpot, Jag the Joker) sits under Queensland's responsible-gambling expectations, as flagged in audit item E5.
    **Resolution:** no animated jackpots, counters or celebratory motion on anything gambling-related. "Gamble responsibly. Gambling Help 1800 858 858" sits static beside every gaming mention. Legal review is still needed.

---

## 2. Growth levers, ranked by impact on bookings and visits

The ranking reflects how much each lever moves table bookings, function enquiries, tickets, sign-ups and visits for a suburban pub, using the evidence in the audit and the competitor comparison. **Timing override:** lever 6, the Melbourne Cup checkout, ships first regardless of rank, because the event is 22 days away and the audit shows its checkout is currently impossible.

| # | Lever | What to build | Governing skill(s) | Effort | How to measure |
|---|---|---|---|---|---|
| 1 | **Online table booking, always one tap away** | A Book a Table button in the header on every page and a sticky bottom bar on phones (Book a Table + Call (07) 3263 4040). Behind it, a booking engine (rivals use OpenTable, SevenRooms or Now Book It) `[NEED: venue's chosen provider and which areas take bookings]`. Use one "Book" sheet listing every path: table, function, Cup tickets, Star Rewards (pattern 2 in `design-patterns-to-borrow.md`). Phone stays as the fallback, with the number visible as text. | copywriting (CTA labels), ui-ux-pro-max (sticky nav, touch targets), frontend-ui-engineering (sheet focus trap), emil (sheet timing) | M | `book_table_click` by placement; completed bookings from the provider's report; share of bookings made outside bistro hours (the 9pm browser the audit names) |
| 2 | **Google Business Profile + one source of truth for hours** | Keep one hours data file (bistro by day, gaming 10am to 4am, bottle shop Sun to Thu 10am to 11pm and Fri to Sat 10am to midnight). It feeds the page, the footer, the JSON-LD `openingHoursSpecification` and the GBP update checklist. Fix the three contradictions (Sun vs Mon lunch, "11:30pm", schema 9 to 5). Add GBP links with UTM parameters. Check whether the bottle shop warrants its own GBP listing `[NEED: confirm with Star Liquor/venue]`. | core-web-vitals (static render), web-design-guidelines (Intl dates). No installed skill covers schema or GBP: run `npx skills find structured data` per CLAUDE.md. | S | GBP Insights: calls, direction requests and website clicks. Search Console impressions for "aspley hotel", "pub aspley", "aspley hotel hours". Zero hours mismatches in the monthly check. |
| 3 | **Speed (Core Web Vitals)** | A static build with the hero `<img>` in the HTML at `fetchpriority="high"` and sized WebP files (1600 and 800 already exist in `mocks/img/`). Inline critical CSS. No Maps iframe (link out instead). One analytics loader instead of three, and no WooCommerce or reCAPTCHA on pages that don't use them. Brotli, caching, HTTP/2 or HTTP/3. Fix the www certificate. | core-web-vitals, react-best-practices (if React), web-design-guidelines (image dimensions, preconnect) | L (rebuild) | CrUX p75 LCP, INP and CLS by page (good thresholds 2.5s, 200ms, 0.1). Lab trace before and after against the audit's 13.7s LCP and 0.31 mobile CLS. |
| 4 | **Menu as HTML with schema and members pricing** | Every dish and price from the PDFs as text, each row showing the public price and the members price (public less $1, matching the menu's members column). V/GF filters and a Kids section ($13.95 including soft drink and ice cream). Coffee and cake ($13.95, $12.95 members). `Menu`/`MenuSection`/`MenuItem` JSON-LD. Cocktail menu as text `[NEED: cocktail prices, the PDF has none]`. | copywriting (dish one-liners keep the venue's own), ui-ux-pro-max (tabular nums, filter chips that wrap), web-design-guidelines (URL state for filters) | M | Menu page views and engaged time; Search Console queries containing "menu" or a dish name; `menu_members_toggle`; `menu_to_book` click-through |
| 5 | **Function finder + an enquiry form that works** | Inputs: guest count, seated or standing, day of week, occasion. It returns the fitting spaces from real capacities (Herb Garden 80 seated / 100 standing; Terrace and Herb Garden 60 seated; Terrace 40 seated) and that day's minimum spend ($1,000 Mon to Thu, $2,000 Fri to Sun, or $250 room hire; $100 deposit). It prefills a short enquiry. The form gets a real H1, a native date input instead of the 1920 year list, and a stated reply time `[NEED: venue's reply time]`. Function pack link kept as a secondary button. | ui-ux-pro-max (filters, submit feedback), frontend-ui-engineering (states), composition-patterns (finder API), web-design-guidelines (forms). Email delivery: `npx skills find forms` / `npx skills find email resend`. | M | `function_finder_used`, `function_enquiry_start` and `function_enquiry_submit`; enquiry-to-confirmed rate from the venue's records `[NEED: venue to log outcomes]` |
| 6 | **Event tickets that can be bought + `Event` schema** | Melbourne Cup: 2-course lunch $55, Tuesday 3 November 2026, menu in text (Crispy Chicken Bites, Prawn Cocktail, Burrata; Miso Salmon, Pork Piccata, Pumpkin and Sage Gnocchi). Either fix WooCommerce cart and checkout or hand off to a ticketing provider. One fact everywhere ("2-course", per the owner). `Event` JSON-LD with `offers.price` 55 AUD. Remove the 404 event URLs from the sitemap. | copywriting, ui-ux-pro-max (event landing: exact date as text), core-web-vitals (no Woo bloat on other pages) | S to M | `begin_checkout` and `purchase` (GA4 ecommerce); ticket revenue against phone bookings for the same event |
| 7 | **What's On freshness** | Replace poster carousels with cards: title, day, time, one line of copy, one button. Order by "today first" (Wednesday shows Trivia at 6:30pm). Cards carry an end date so they expire automatically, which removes the stale Easter and Valentine's pages. Posters can stay as artwork. Weekly rhythm: Wednesday Trivia 6:30pm free (Questionable Company), Friday Jag the Joker 3:30 to 6:30pm, Saturday Members Jackpot (starts $400, must go by $4,000), sport daily. | impeccable (Operate mode for the list), ui-ux-pro-max (no auto-rotate), frontend-ui-engineering (empty state "Nothing special tonight, the bistro's open till 8:30pm"). Staff editing: `npx skills find sanity` / `payload cms`. | M | `whats_on_card_click`, `add_to_calendar`; count of expired items still live (target zero) |
| 8 | **Star Rewards sign-ups** | Put the members price beside every dish (lever 4) as the reason to join. Phones get a direct sign-up link, not a QR code. Desktop shows the QR code as a *secondary* "scan with your phone" option next to the link. Fix the empty accordion title. Use the source's own three steps verbatim ("Receive your Star Rewards membership on the spot"). Rivals offer "$10 off"; Aspley's offer is $1 off every dish, so say exactly that. | copywriting (offer framing), ui-ux-pro-max (lead-magnet-form pattern: minimal fields, show the value first) | S | `star_rewards_click` by placement; registrations attributed to the site `[NEED: Star Hotels Group to provide a venue/UTM code on qrco.de/bbdyet or its destination]` |
| 9 | **Reviews and social proof** | Show "4.2 from 791 Google reviews" with the capture date and a link to the Google listing, plus a "Leave a review" link. No invented quotes, and use real ones only with permission `[NEED: owner-approved quotes]`. Don't expect star rich results from self-published `AggregateRating` on a LocalBusiness, because Google treats those as self-serving. | ui-ux-pro-max (`product-review-ratings-focused`: aggregate first), copywriting (honest over sensational) | S | Monthly GBP review count and rating; `review_link_click` |
| 10 | **Email/SMS capture** | One opt-in with clear reasons, using real hooks: Trivia reminders, Melbourne Cup and Christmas bookings `[NEED: confirm Christmas trading]`, members offers. Spam Act 2003 basics: express consent, sender identified, working unsubscribe. Keep gaming promotions out of sends unless legal review clears them. | copywriting, web-design-guidelines (autocomplete, inputmode), ui-ux-pro-max (submit feedback). Tooling: `npx skills find email resend`. | M | `email_signup` and `sms_signup`; list growth; click-to-book from sends (UTM) |
| 11 | **Bottle-shop foot traffic** | A "Drive-through open till 11pm tonight" line (midnight on Friday and Saturday) driven by the hours file. A Directions link straight to Google Maps for 1247 Gympie Road `[NEED: drive-through entry point]`. A link to starliquor.com.au specials over https. Bottle-shop photo `[NEED: there's none in the September shoot]`. | impeccable (Operate: hours legible at a glance), ui-ux-pro-max (tap targets) | S | `directions_click` with `area=bottleshop`; GBP direction requests |
| 12 | **Hygiene that protects every lever** | Responsible-gambling line beside all gaming content. Fix the www HTTPS certificate. Turn off directory listing. Meta title and description ("Aspley Hotel, pub and bistro on Gympie Road, Aspley"). One H1 per page. Fix the contradicting copy (The Ox Margate, Saturday vs Sunday, 2 vs 3 course). | web-design-guidelines, frontend-ui-engineering | S | axe violations at zero; Search Console coverage errors at zero; zero sitemap 404s |

---

## 3. Ten advanced-site features

Each feature uses only venue facts from the brief. **Mock** means it can be built for real in a static HTML mock with client-side JavaScript. **Backend** means production needs a server, a third-party service or staff-edited data.

| # | Feature | How it works (real facts used) | Mock or backend | Lift it targets |
|---|---|---|---|---|
| 1 | **"Tonight at Aspley" live strip** | It reads the time in `Australia/Brisbane` with `Intl.DateTimeFormat`. Queensland has no daylight saving, so the zone is always UTC+10. It computes state from the hours file: "Bistro open till 8:30pm · Trivia 6:30pm, free · Bottle shop till 11pm". On Friday it shows Jag the Joker 3:30 to 6:30pm. Gaming runs 10am to 4am, so between midnight and 4am it belongs to the previous evening. The first render shows a neutral "Today's hours", then JavaScript upgrades it, which avoids the hydration mismatch the Vercel rules warn about. | **Mock**: fully client-side. Production needs a public-holiday override in the hours data `[NEED: public-holiday trading]`. | Visits tonight; answers "is it open" before the customer phones |
| 2 | **Kitchen-open indicator on the Book and Menu buttons** | From Sunday to Wednesday there's a gap between services (2:30 to 5:30pm), so the indicator says "Kitchen reopens 5:30pm" instead of "Closed". Thursday to Saturday it runs continuously from 11:30am to 8:30pm. In the last 30 minutes it reads "Last orders soon, kitchen closes 8:30pm" `[NEED: confirm the actual last-orders time]`. The update is `aria-live="polite"`, at most once a minute. | **Mock** | Fewer wasted trips; keeps hungry visitors booking instead of bouncing |
| 3 | **Members-price toggle on the HTML menu** | Prices are shown as a pair by default (public, then members). A "Show Star Rewards prices" switch moves members prices to the front, for example Chicken Schnitzel $27.73 becomes $26.73. A sticky footnote reads "Members pay $1 less on every dish. Join free" `[NEED: confirm joining is free]`. The state is kept in the URL (`?prices=members`). | **Mock** (prices come from the menu PDF transcription). | Star Rewards sign-ups; menu-to-book |
| 4 | **Function finder** | Guest-count stepper, seated or standing, day, occasion. Up to 40 seated: Terrace, Terrace and Herb Garden, and Herb Garden all fit. 41 to 60 seated: the last two. 61 to 80 seated, or up to 100 standing: Herb Garden only. Above that: "Call us to talk it through". Standing capacity is listed only for the Herb Garden, so the finder doesn't invent one for the Terrace. It shows that day's minimum spend and the $100 deposit, and states the T&C that 18th to 20th birthdays aren't accepted when the occasion is a birthday. Platters are listed at $100 to $145. Results animate with Flip (see section 4). | **Mock** for finding. **Backend** to send the enquiry (form handler or email). | Function enquiries, the highest-value conversion |
| 5 | **Melbourne Cup countdown and ticket page** | "Tuesday 3 November 2026 · 22 days to go" (computed from the Brisbane date, days only, no race-time claim). Shows the 2-course menu as text, $55, "Bookings essential", sweeps, chef specials, prizes and the lucky loser draw. Adds Event schema. The page retires itself the day after. | **Mock** for the countdown and page. **Backend** for payment (a fixed Woo checkout or a ticketing provider). | Ticket revenue; recovers the broken flow |
| 6 | **Sports bar board, "On the screens"** | A list of today's fixtures with code, teams and time in Brisbane time, under the real promise "Fox Sports and dedicated TAB screens, all day every day". On State of Origin nights the Maroons and Blues banners in the sports-bar photos give the page its look. If there are no fixtures, the empty state says the screens are on all day. | **Backend**: a fixtures feed or staff-curated list `[NEED: data source]`. A mock can show the structure, but only with clearly labelled sample rows. | Visits on game nights; group table bookings |
| 7 | **Trivia team sign-up + reminder** | "Wednesday Trivia, 6:30pm, free, hosted by Questionable Company". Form fields: team name, size and an optional dinner booking (the bistro serves dinner from 5:30pm on Wednesday). It offers an `.ics` reminder generated client-side. A leaderboard appears only if Questionable Company supplies scores `[NEED]`. Footy tipping only if the venue runs a comp `[NEED: confirm]`. | **Mock** for the `.ics` and form UI. **Backend** to store teams and send SMS reminders. | Midweek visits; dinner bookings before trivia; SMS opt-ins |
| 8 | **"Plan your night" builder** | Pick a day and who's coming (adults, kids). It builds a real-hours itinerary, for example Wednesday: "Dinner 5:30pm (kids meals $13.95 including soft drink and ice cream) → Trivia 6:30pm → Drive-through on the way home, open till 11pm". It outputs Book a Table, Add to Calendar and a shareable link. All suggestions come from the hours file and the weekly events. | **Mock** | Table bookings with higher intent; shares |
| 9 | **Gift vouchers** | Rival pubs sell them, as the Regatta's action list shows. Aspley's site has no evidence of vouchers. | **Backend** (payments, codes, redemption at POS). `[NEED: confirm the venue or Star Group offers vouchers before designing]`. | Off-peak revenue; new-visitor acquisition |
| 10 | **Visit and access info that answers the real questions** | Hours per area in one block. The address with a Directions link. Drive-through bottle-shop entry. The stone steps up to the bistro are visible in `exterior-stone-steps`, so state the step-free route if one exists `[NEED: step-free entry, accessible toilet, parking, high chairs]`. Gaming responsible-gambling line. Kids policy for functions (no 18th to 20th birthdays). The page has a working H1, landmarks and a skip link, and is readable by screen readers, which today's PDFs are not. | **Mock** for structure. Content needs the venue walk-through. | Fewer friction calls; trust; accessibility compliance |

Also considered and parked: a live jackpot tracker for Jag the Joker or the Members Jackpot. It needs staff-updated amounts, and animating a gambling inducement conflicts with roundtable resolution 13. If the venue wants it, it should be a static, timestamped figure with the responsible-gambling line.

---

## 4. Motion direction: six signature ideas

Each surface gets **one** authored moment (impeccable animate). Variant A already uses a badge spin and a pinned horizontal walk, and variant B a split-flap board, so these six are deliberately different from both.

**Shared rules for all six.** Load `gsap@3.13.0` plus ScrollTrigger, Flip and CustomEase from cdnjs (the brief lists them). Wrap everything in:

```js
gsap.matchMedia().add({ motion: "(prefers-reduced-motion: no-preference)", reduce: "(prefers-reduced-motion: reduce)" }, ctx => { … })
```

Content is visible at rest. Animate transform, opacity and clip-path only. Call `ScrollTrigger.refresh()` after `document.fonts.ready`. Use emil's curves: `--ease-out: cubic-bezier(0.23,1,0.32,1)` for UI and `cubic-bezier(0.16,1,0.3,1)` for focal entrances.

| # | Name and surface | What the visitor sees | GSAP implementation notes | Reduced-motion fallback |
|---|---|---|---|---|
| 1 | **"Up the hill"** (home hero, on load) | The `exterior-hill` photo first frames the slope and stone at road level. In 700ms the frame rises to the roofline and blue sky, as if walking up to the pub, and the "since 1935" line lands on the roof edge. It plays once. | Animate `yPercent` on the hero `<img>`, scaled to about 1.08 inside an `overflow:hidden` frame, from roughly 6 to 0. Then a `clip-path: inset(0 0 100% 0)` → `inset(0)` mask on the headline lines (SplitText `lines`, `mask: "lines"` in 3.13). Run it as a single `gsap.timeline({ defaults:{ ease:"expo.out" } })` with no ScrollTrigger. **LCP safety:** the image is fully visible at frame 0, only offset, so LCP isn't delayed. Never start from opacity 0. | Final crop rendered immediately; headline shown with a 150ms opacity fade only. |
| 2 | **"Lunch to last drinks"** (What's On and Tonight page, scroll-scrubbed) | The page is laid out as a day, top to bottom: 11:30am lunch, 3:30pm Jag the Joker on Friday, 5:30pm dinner, 6:30pm trivia, 11pm or midnight bottle shop. As the visitor scrolls, the page ground shifts from weatherboard daylight to verandah dusk to night, and a thin time rail on the left fills. The scroll relationship *means* time passing, which is impeccable's test for scroll-driven motion. | One `ScrollTrigger` with `scrub: 0.6` on a top-level timeline. It tweens CSS custom properties (`--ground`, `--ink`) on a single fixed background layer (`position:fixed; inset:0; z-index:-1`), so only one layer repaints. The rail is a `scaleY` transform with `transform-origin: top`. No pin. **Contrast check at every keyframe**, since ink flips from dark to light at the midpoint, so define both as paired stops. | No scrub. Each time block has its own static ground colour band, and the rail shows the current Brisbane time position statically. |
| 3 | **"Members price drop"** (menu, on toggle) | Flip the Star Rewards switch and each visible price rolls down one digit-row, like an odometer, to the members price, for example $27.73 → $26.73. A small red "−$1" stamp lands beside the first row only. It runs in 240ms. | Each price is a mask of `tabular-nums` digits. Only digits that change get a `yPercent` tween (`-100`), with stagger 0.015 capped to the about 12 rows in view (`ScrollTrigger.isInViewport` check). Off-screen rows swap instantly. This uses CSS transitions, not keyframes, so rapid toggling is interruptible (emil). Announce "Showing members prices" via `role="status"`. | Instant number swap with a 150ms background-colour flash on the price cell; the status message stays. |
| 4 | **"The room rearranges"** (function finder, on filter change) | Change the guest count and the three space cards physically reorder. Spaces that fit slide to the front and their capacity bars fill to scale (0 to 100 guests). Spaces that don't fit settle back, dim, and show the reason ("Seats 40, you're 55"). | `Flip.getState(cards)` → update DOM order and classes → `Flip.from(state, { duration: 0.35, ease: "power3.out", absolute: true, onEnter, onLeave })`. Capacity bars use `scaleX` against a single shared scale (the variant B override rule). Debounce the stepper by 120ms. Sync the URL with `history.replaceState` (Vercel URL-state rule). | Reorder instantly; the dimmed state uses opacity only; bars render at final width. |
| 5 | **"Stamped and booked"** (any successful booking, enquiry or sign-up) | On a real success response (never on submit), the EST 1935 round badge presses onto the confirmation like a rubber stamp: scale 1.06 → 1, a slight 2-degree settle and ink opacity 0.85 → 1. The confirmation text is already visible underneath. This is the one place delight is earned (impeccable delight: "match the response to the effort"). | Timeline: `fromTo(badge, { scale:1.06, rotate:-4, opacity:0 }, { scale:1, rotate:-2, opacity:1, duration:0.32, ease:"back.out(1.4)" })`. A restrained overshoot is acceptable here because it is rare, not repeated. The badge is inline SVG text on a circle path (there is no logo file). Focus moves to the confirmation heading. Nothing animates on error, and the error renders instantly next to the field. | Badge appears at its final state with a 150ms fade; focus and message unchanged. |
| 6 | **"Down the straight"** (Melbourne Cup page, on enter, seasonal) | A slim racecourse rail with furlong-post ticks runs across the top of the Cup section. A single marker slides once to today's position between "bookings open" and "Tuesday 3 November". The label "22 days to go" sits in text beside it. After the day the whole block is removed. | `ScrollTrigger.create({ trigger: ".cup", start: "top 75%", once: true, onEnter: () => gsap.to(marker, { xPercent: pos, duration: 0.6, ease: "power2.out" }) })`. `pos` is computed from Brisbane dates. Use `once: true` and no scrub, per the gsap rule against mixing scrub with toggle behaviour. No ticking seconds, no loop, and nothing to pause (Vercel autoplay rule). | Marker placed at its position on render. |

Allocation, one per surface: Home 1, What's On 2, Menu 3, Functions 4, Forms 5, Melbourne Cup 6. The Book sheet's View Transition morph (roundtable resolution 10) is UI continuity at 250 to 300ms, not a seventh authored moment.

---

## 5. Copy: headline bank

Voice: Australian pub, plain and warm, with the venue's own words ("hearty feed", "mates", "parmy", "pub on the hill"). These follow the copywriting skill: no exclamation marks, no em dashes, no contrast reveals, at most one fragment per line. Every fact is from the brief or the audit.

### Hero lines (10)

| # | Line | Facts used | Best surface |
|---|---|---|---|
| 1 | The pub on the hill since 1935 | Badge: EST 1935, PUB ON THE HILL | Home |
| 2 | A cold drink and a hearty feed on the hill at Aspley | Current hero: "a cold drink, hearty feed" | Home, alt |
| 3 | Members pay $1 less on every dish | Star Rewards pricing | Menu, Star Rewards |
| 4 | Trivia's on Wednesday at 6:30. Bring your smartest mate. | Wednesday Trivia 6:30pm, free, Questionable Company | What's On |
| 5 | Melbourne Cup on the hill. Two courses, $55. | 3 Nov 2026, 2-course lunch $55 | Cup page |
| 6 | Got a birthday coming up? The Herb Garden seats 80. | Herb Garden 80 seated / 100 standing | Functions |
| 7 | Kids meals $13.95, with a soft drink and ice cream | Kids menu | Eat, families |
| 8 | Fox Sports and the TAB on the screens all day, every day | Sports bar copy | Sports bar |
| 9 | Pull up a chair. The bistro opens at 11:30am. | Bistro lunch and all-day dining both open 11:30am | Eat, Tonight |
| 10 | Drive through, grab the drinks, open till midnight Friday and Saturday | Bottle shop hours | Bottle shop |

Line 6 uses a question in the reader's voice, which the copywriting skill allows. Lines 4 and 9 each use one fragment, within the cap.

### CTA labels (10, Title Case per the Vercel rules)

1. **Book a Table**
2. **Call (07) 3263 4040** (the number is always visible text, per the brief)
3. **See the Menu and Prices**
4. **Show Members Prices**
5. **Join Star Rewards, Save $1 a Dish**
6. **Find a Space for My Group** (after input this becomes "Enquire About the Herb Garden")
7. **Get Melbourne Cup Tickets, $55**
8. **Book a Table for Trivia**
9. **Add Trivia to My Calendar**
10. **Get Directions to the Drive-Through**

Microcopy to retire: "SEND" becomes "Send My Enquiry". "Buy Ticket Now" becomes CTA 7. "SIGN UP TO STAR REWARDS" becomes CTA 5. "ENQUIRE" becomes CTA 6.

---

## 6. Measurement plan

**Stack:** GA4 through one GTM container. Today three loaders fire, so de-duplicate first. Mark key events in GA4. Use UTM parameters on GBP, email, SMS and social links. Fire analytics on the `prerenderingchange` event if Speculation Rules are used (core-web-vitals). The privacy policy promises cookie controls, so add a consent mechanism `[NEED: legal]`.

### Events

| Event (snake_case) | Fires when | Key params | Key event? |
|---|---|---|---|
| `book_table_click` | Any Book a Table tap | `placement` (header, sticky_bar, hero, menu, tonight, plan_night), `kitchen_state` | Yes |
| `booking_complete` | Provider confirms (callback or thank-you URL) | `party_size`, `date_offset_days`, `hour_of_booking` | Yes |
| `call_click` | `tel:` tap | `placement`, `open_state` | Yes |
| `directions_click` | Maps link tap | `area` (venue, bottleshop) | Yes |
| `menu_view` | Menu page or section in view | `section` | No |
| `menu_members_toggle` | Toggle used | `state` | No |
| `menu_filter` | V, GF or Kids filter | `filter` | No |
| `function_finder_used` | First filter change | `guests`, `layout`, `day`, `occasion`, `spaces_matched` | No |
| `function_enquiry_start` | First field focus | `space` | No |
| `function_enquiry_submit` | Server success | `space`, `guests`, `occasion`, `lead_days` | Yes |
| `function_pack_download` | Pack PDF link | none | No |
| `begin_checkout` / `purchase` | Ticket flow | GA4 ecommerce items (`Melbourne Cup`, 55, AUD) | Yes (`purchase`) |
| `whats_on_card_click` | Card CTA | `event_name`, `days_until` | No |
| `add_to_calendar` | `.ics` download | `event_name` | No |
| `star_rewards_click` | Sign-up link | `placement`, `device` | Yes |
| `email_signup` / `sms_signup` | Server success | `interest` (trivia, cup, offers) | Yes |
| `review_link_click` | Leave-a-review or view reviews | `type` | No |
| `plan_night_built` | Itinerary generated | `day`, `has_kids`, `items` | No |
| `tonight_strip_click` | Tap on the live strip | `state` (open, between_services, closed) | No |

### Outside GA4

- **Google Business Profile Insights**, monthly: calls, direction requests, website clicks, review count and rating.
- **Search Console**, monthly: impressions and clicks for brand, "menu", dish and "function venue aspley" queries; coverage errors; sitemap 404s.
- **CrUX and PageSpeed Insights:** p75 LCP, INP and CLS per page, compared against the audit's measurements.
- **Booking provider reports:** covers, lead time, and the share of bookings made outside bistro hours.
- **Venue records** `[NEED: owner to keep these]`: function enquiry outcome (confirmed or lost), ticket sales by channel (web vs phone), and a "How did you hear about us?" field in the enquiry form.
- **Star Rewards:** registrations attributed to the website `[NEED: Star Hotels Group code or UTM support]`.

### Review cadence

- **Weekly, first 4 weeks after launch:** this establishes the baseline. No targets are set until the baseline exists.
- **Monthly after that:** a single page covering levers 1 to 11 against the events above.

---

## Open questions for the venue

These are blocking `[NEED]` items, collected from above:

1. Booking provider and which areas are bookable.
2. Last-orders time and public-holiday trading.
3. Star Rewards attribution and whether joining is free.
4. Function enquiry reply time and outcome tracking.
5. Whether gift vouchers exist.
6. Step-free access, accessible toilet and parking facts.
7. A fixtures data source for the sports board.
8. Whether Questionable Company can supply trivia scores, and whether a footy-tipping comp exists.
9. Cocktail prices.
10. Owner-approved review quotes.
11. Drive-through entry point and bottle-shop photography.

Also run `/impeccable init` to write `PRODUCT.md` (it doesn't exist yet), as CLAUDE.md requires before design work.
