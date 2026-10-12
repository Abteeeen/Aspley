# Competitor research: pitch summary

Captured 12 October 2026. Details are in `comparison.md` and `design-patterns-to-borrow.md`. The current-site audit is in `../aspley-current-site/`.

## Open these first in the meeting

| File | What it shows |
|---|---|
| `overview-pubs-first-screen-desktop.jpg` | Aspley's first screen beside eight rival pubs. Aspley is the only one with no "Book" button and no food. |
| `overview-pubs-first-screen-mobile.jpg` | The same comparison on a phone, where most guests decide. |
| `overview-pubs-full-home-desktop.jpg` | Aspley's full home page beside five rivals, top to bottom. |
| `overview-all-sites-first-screen-desktop.jpg` | All 21 sites reviewed, including premium hotel benchmarks. |

## Who Aspley is really competing with

Aspley Hotel is a pub with a bistro, bars, gaming, a sports bar, functions and a bottle shop. It has no accommodation. Its real rivals are the northside pubs, and most of them belong to Australia's two biggest pub operators.

| Rival | Distance | Operator |
|---|---|---|
| Albany Creek Tavern | about 4 km | ALH Group, pub+ loyalty app |
| Taigum Tavern | about 5 km | Australian Venue Co, The Pass loyalty app |
| Everton Park Hotel | about 7 km | Australian Venue Co, The Pass loyalty app |
| Kedron Park Hotel | about 8 km | ALH Group, pub+ loyalty app |
| Eatons Hill Hotel | about 9 km | Comiskey Group |

Premium Brisbane pubs used as the quality bar: the Regatta Hotel, Breakfast Creek Hotel and the Normanby Hotel. International hotel benchmarks such as the Calile, the Hoxton and Ace Hotel set the design ceiling.

## Five talking points

1. **"Your competitors take bookings at midnight. You take them by phone."**
   Every rival pub has a "Book" button in its header and an online booking engine behind it. Aspley's header says "CALL". Show `overview-pubs-first-screen-desktop.jpg`.

2. **"They sell the food. Your site shows empty chairs."**
   Albany Creek, Taigum, Kedron Park and the Normanby lead with plated food. Aspley has no food photography anywhere. Show `overview-pubs-full-home-desktop.jpg`.

3. **"Your site is 4 to 27 times slower than theirs."**
   Aspley's home page took 8.3 seconds to download. Rivals took 0.3 to 2.1 seconds. Google ranks slow sites lower, and phones give up first. The audit's `../aspley-current-site/README.md` has the full measurements.

4. **"The big groups pay you $10 to switch. Your loyalty sign-up is a QR code on a laptop."**
   pub+ and The Pass both run a "$10 off" banner on every page. Star Rewards has a better offer, $1 off every dish, but nobody can find it. Show `brisbane-02-everton-park-hotel-home-desktop-fold.jpg` beside `../aspley-current-site/screenshots/01-home-mobile.jpg`.

5. **"Your Melbourne Cup tickets can't be bought, and your function form opens blank."**
   The ticket checkout leads back to the home page, and the function "Enquire" button opens an empty box. The Regatta lets planners filter ten function spaces by size and type. Show `../aspley-current-site/screenshots/43-booking-ticket-step4-checkout-attempt-desktop.jpg` and `pub-benchmark-01-regatta-hotel-functions-desktop.jpg`.

## The opportunity, not just the problem

The rivals are good but templated. Kedron Park and Albany Creek share one ALH template. Taigum and Everton Park share one AVC template. A bespoke site lets Aspley beat them where templates are weak:

- **Heritage.** "The pub on the hill since 1935" is a story no template site can tell.
- **Menus as real text** with members pricing beside each dish. Most rivals still use PDFs or images.
- **Reviews.** Aspley has 4.2 stars from 791 Google reviews. No direct rival shows reviews on its site.
- **Speed.** A modern build can load in under a second, faster than every rival.

## Honest caveats

- Distances are approximate straight-line figures.
- Download times are single measurements from one machine on one day. They show relative speed, not lab-grade performance.
- Some rival screenshots contain capture artefacts: Taigum's and Eatons Hill's hero videos did not play, and a few Everton Park images had not loaded. These are listed in `comparison.md` and should not be used against those venues.
- Merivale's The Newport was attempted but blocked automated access, so it is not included.
