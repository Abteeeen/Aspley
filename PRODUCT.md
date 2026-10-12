# Product
<!-- impeccable:product-schema 1 -->

Written 12 Oct 2026 from the owner's messages in the build session and the research in `research/`. No separate interview round was held; facts marked *(inferred)* come from research evidence rather than a direct owner answer.

## Platform
web

## Stack
Open decision. Design mocks are plain static HTML/CSS/JS with GSAP 3.13 in `mocks/`. The production framework has not been confirmed by the owner (Next.js was recommended earlier in the session; not yet accepted).

## Users
- **Locals on Brisbane's north side** deciding where to eat, drink or watch the game tonight, mostly on a phone, often in the evening. *(inferred from audit and competitor research)*
- **People planning a function** (birthdays, engagements, corporate, wakes) comparing venues by space, capacity and minimum spend.
- **Star Rewards members and gaming patrons** checking hours, jackpots and member deals.
- **Event-goers** for fixed dates such as Melbourne Cup Day.
- **The venue owner and Star Hotels Group**, who judge the site by bookings, enquiries, ticket sales and sign-ups. The site is being pitched to them by CJ Studios.

## Product Purpose
The website for the Aspley Hotel, a suburban pub at 1247 Gympie Road, Aspley QLD 4034. Its job is to turn interest into table bookings, function enquiries, event tickets, Star Rewards sign-ups, phone calls and bottle-shop visits. Success means those actions happen online and on the phone, instead of being lost to rival pubs that make booking easier.

## Positioning
"The pub on the hill", established 1935: a heritage Queenslander on a hill above Gympie Road. Its nearby rivals run on shared group templates (ALH pub+, Australian Venue Co); Aspley can own a bespoke site built on its own history, real photography and real menus.

## Operating Context
- Bistro: lunch Sun to Wed 11:30am to 2:30pm; dinner Sun to Wed 5:30pm to 8:30pm; all-day dining Thu to Sat 11:30am to 8:30pm (owner-approved resolution of conflicting hours).
- Gaming room 10am to 4am daily. Drive-through bottle shop (Star Liquor) Sun to Thu 10am to 11pm, Fri and Sat 10am to midnight.
- Sports bar with TAB and Fox Sports. Weekly: Wednesday Trivia 6:30pm; Friday Jag the Joker; Saturday Members Jackpot.
- Melbourne Cup, Tuesday 3 November 2026: 2-course lunch $55 (owner-approved).
- Functions: Herb Garden 80 seated / 100 standing; Terrace and Herb Garden 60 seated; Terrace 40 seated. Enquiries to enquiries@aspleyhotel.com.au.
- Phone (07) 3263 4040. Time zone Australia/Brisbane, no daylight saving.

## Capabilities and Constraints
- No accommodation. Never design for room bookings.
- No booking engine, ticketing provider or CMS has been chosen yet. Mock forms must say they are not connected.
- Gaming content must carry responsible-gambling messaging (Gambling Help 1800 858 858).
- Responsible service of alcohol messaging belongs in the footer.
- Menus must be real text, not PDFs.

## Brand Commitments
- Name: Aspley Hotel. Part of the Star Hotels Group; loyalty program is Star Rewards (members pay $1 less on every dish).
- Badge wording: "EST 1935, ASPLEY HOTEL, PUB ON THE HILL, GAMING BAR FOOD BOTTLESHOP".
- Brand red around #C8102E.
- Voice: friendly Australian pub ("feed", "mates", "parmy"), plain and warm. The current site's heavy exclamation marks are not binding.

## Evidence on Hand
- Owner-supplied enhanced photography: `mocks/img/drive/` (48 images; AI-enhanced, fine details may differ from the real rooms).
- Original venue photography: `mocks/img/`.
- Menus, prices, events and copy: `research/aspley-current-site/content-and-language.md`.
- Google rating 4.2 from 791 reviews, shown in the venue's Google Maps listing.
- No review quotes, awards, press, follower counts or sales figures are on hand. Do not fabricate them.

## Product Principles
1. Every page leads to an action: book, enquire, buy, join or call.
2. Show what is on today, in Brisbane time, before anything else.
3. One source of truth for hours and prices across page, footer and structured data.
4. Real content only: real photos, real prices, real dates.
5. Heritage is the differentiator; use it before borrowing anyone else's look.

## Accessibility & Inclusion
WCAG 2.2 AA as the target *(inferred; not yet confirmed by the owner)*. The venue has an access ramp at the entrance (`15-entrance-access-ramp`), so access information should be easy to find.
