# Variant B override: Tonight (night, chalkboard and scoreboard)

Overrides MASTER.md for `mocks/variant-b.html`.

- **Concept:** the specials board after dark. Slate chalkboard ground, signwriter capitals, a split-flap departures board for tonight, rooms stacked like menu boards.
- **Palette (from the bar):** chalkboard slate `#18201D`, raised board `#212B27`, chalk rule `#34423C`, chalk white `#EFEBE3`, rubbed chalk `#A8B3AD`, XXXX Gold lager `#F0B13B`, Aspley red lifted for dark `#D4283C`. Single committed dark look, deliberately not the near-black-plus-one-accent default.
- **Type:** Big Shoulders Display (signwriter condensed caps) with Archivo. Sports/condensed direction suggested by UI/UX Pro Max; Bebas Neue rejected as overused.
- **Motion:** split-flap board scramble on load (signature moment), linear specials ticker, stacked sticky cards that ease back as the next arrives, capacity bars drawn to scale. All behind `gsap.matchMedia()` with `prefers-reduced-motion`.
- **Data honesty:** function capacity bars use one scale (0 to 100 guests); member prices are the menu price less $1, matching the current menu's members column.
