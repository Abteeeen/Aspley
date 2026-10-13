# 3 Kingdoms: three website concepts

Prepared 13 Oct 2026 for the owner to choose one. Research only. No site has been built.

The evidence is in `../research/`:
- `current-presence/`: what 3 Kingdoms is and how it appears online.
- `competitors/`: 12 local rivals and 8 design benchmarks.
- `clips/`: our phone footage. Not downloaded yet, see the end of this file.

## What every concept must do

These come from the research, not from taste. Whichever look is chosen, the site carries all of them.

| Job | Why | Evidence |
|---|---|---|
| **Pickup ordering at in-store prices** | Every online order now goes through Uber Eats, DoorDash or HungryPanda, at 22–34% above in-store prices ($20.80 in-store vs $25.80–$27.80 on the apps). | `current-presence/content-and-language.md` §5a |
| **Directions on the first screen** | "Hidden gem", "hard to find" and "next to Target" recur in reviews. Google even shows the wrong floor ("Floor Q"). | `current-presence/README.md`, `04-google-maps-listing-desktop.jpg` |
| **One source of truth for hours and the menu** | Hours, floor, dish names and prices disagree across six platforms. | `current-presence/README.md` |
| **A real menu as text** | Three steps (choose broth, pick ingredients by weight, set the spice from 6 levels) with prices, portions and the nut warning. No local rival does this well: Shabu House, Taro's and Happy Boy use PDFs, and David's Master Pot shows no prices. | `competitors/comparison.md` |
| **English and Simplified Chinese** | Only HungryPanda carries Chinese copy today. No Brisbane rival has a Chinese menu. | `competitors/README.md` talking point 4 |
| **A page for creators and their followers** | 10+ creator posts and a TikTok burst in Oct 2026, with nowhere to send people. | `current-presence/README.md` |
| **The name's true story, told briefly** | 三国冒菜 is "Three Kingdoms mao cai". Mao cai is a Chengdu dish, and Chengdu was the capital of Shu in the Three Kingdoms era. Lanterns, dragons, armour and game art are out. | `competitors/design-patterns-to-borrow.md` |

Pages, the same for all three concepts: Home · Menu (bilingual, with prices) · Order pickup · Find us (route from Queen Street Mall and the bus station) · Our story · For creators and press. The phone layout gets a fixed bottom bar: **Order pickup · Find us · Call**.

## How the three were chosen

These concepts follow `impeccable`'s process for a new visual identity (`.claude/skills/impeccable/reference/new-work.md`):

1. I ranked six directions grounded in the research.
2. The `concept-seed` roll picked which one leads, so the result doesn't drift to the obvious answer every time.
3. The roll also dealt six outside "challenger" styles. Each was combined with 3 Kingdoms' real facts and judged on two questions: would its customers recognise it as theirs, and is the product still clear?

The roll's key is in "Process record" at the end.

- **Concept A, Light Box**, is the direction the roll picked.
- **Concept B, Ink and Oil**, is my own top-ranked direction.
- **Concept C, Broadside**, is the strongest challenger. It came from a letterpress gig-poster style and beat Concept A on audience appeal, though not on product clarity.

Four more challengers lost on both questions. Each still gave Concept A one discipline it lacked; those are the "Borrowed rules" lines under Concept A.

---

## Concept A: Light Box

**The idea.** The backlit photo menu board that hangs above every food-court counter, with the wayfinding signs that lead you to it. The site is that board, lit up and carried to your phone, plus the signs that walk you from Queen Street to Shop 32. It skips the category default of a food photo, an "Order now" button and a row of cards.

**Palette**

| Name | Hex | Role |
|---|---|---|
| Board black | `#000000` | The board frame and page ground. True black, because it is a real lightbox frame. |
| Lit panel | `#FFF9F0` | Backlit acrylic panels that carry dishes and copy |
| Chilli oil | `#D0021B` | Prices, the Order action, the top spice levels |
| Green peppercorn | `#93A62E` | Mild spice levels, "not spicy", and fresh greens |
| Sign amber | `#FFB81C` | Wayfinding signs only: arrows, "You are here", Level A |

**Type**
- **Archivo** (variable width): condensed for dish names, expanded for prices.
- **Noto Sans SC Black** for Chinese.
- Prices and weights use tabular figures in fixed positions.

**First screen**

```
┌──────────────────────────────────────────────┐
│ 三国冒菜 3 Kingdoms     Menu  Find us  中文    │  black board frame
├───────────────┬──────────────┬───────────────┤
│  A1           │  A2          │  A3           │
│  [lit photo]  │ [lit photo]  │ [lit photo]   │  three lit panels
│  招牌冒菜      │  牛肉冒菜      │  自选 500g     │  bilingual names
│  Signature    │  Beef Mini   │  Build your   │
│  Mini Hotpot  │  Hotpot      │  own bowl     │
│  $20.80       │  $19.80      │  by weight    │  fixed price slots
├───────────────┴──────────────┴───────────────┤
│  Spice ○ ○ ○ ● ○ ○   微辣 → 特辣               │  dial re-lights the board
├──────────────────────────────────────────────┤
│ ➜ Level A · next to Target · Shop 32  [Order pickup] │  amber wayfinding sign
└──────────────────────────────────────────────┘
```

**Signature interaction.** One spice dial with 6 steps (the real level names are still to be confirmed with the venue; 微辣 and 特辣 are placeholders). Turning it moves the whole board's glow from lit white towards deep chilli red, and the dish panels update to show what that level means.

**Motion**
- One moment on load: the panels flicker on like a real board powering up.
- "Find us" is a scroll-scrubbed walk from the Queen Street Mall entrance to the shop, built from our clips with `scroll-scrubbed-visual-sequence`. CSS scroll-driven sign arrows count down the turns.
- With reduced motion, the walk becomes four numbered photos.

**Borrowed rules** (from the challengers that lost)
- *One-bit desktop:* commit to the palette completely. Only lit panels and black, with no grey interface chrome anywhere.
- *Nixie counter:* prices and weights sit in fixed numeral positions and never reflow.
- *Acetate manual:* the menu's category rail is sized by how many dishes each category holds.
- *Drawcord cape:* one control, the spice dial, transforms the whole page.
- *Paper automata:* one scroll timeline drives the whole wayfinding walk.

**Why it fits.** It solves the two biggest problems in the research, being hard to find and having no clear menu with prices, inside the look itself. It looks like where the food really comes from, so the CBD lunch crowd and students recognise it at once.

**Risk.** It needs good food photography. Weak photos in lit panels look cheap. The lit panels must also keep text contrast at 4.5:1 or better at every spice level.

**Our footage.** The walk-in clips become the route. Counter shots fill the lit panels until a proper food shoot.

---

## Concept B: Ink and Oil

**The idea.** The logo already exists: white brush calligraphy, 三国冒菜, on black, with a red seal. This concept makes that logo the whole system. Ink black ground, rice-paper white text, the red seal as the mark for every action, and chilli oil as the only colour that moves. It skips lanterns, dragons and warriors.

**Palette**

| Name | Hex | Role |
|---|---|---|
| Ink | `#17130F` | Ground. A warm ink black, chosen to sit beside the logo's own black. |
| Rice paper | `#F7F6F2` | Text and the calligraphy |
| Seal red | `#C8321F` | Every action and selected state, shaped as a seal stamp |
| Chilli oil | `#E0601A` | The broth video and spice heat |
| Green peppercorn | `#7E8F3A` | Rare: "not spicy" and fresh greens |

**Type**
- **Noto Serif SC** for Chinese, and **Newsreader** (optical sizes) for English.
- The real logo is the only brush lettering. No fake brush fonts.

**First screen**

```
┌──────────────────────────────────────────────┐
│ ▪3K                    菜单 Menu   Find us   │
│                                              │
│        三 国 冒 菜                            │  the logo, huge; broth video
│        (red chilli oil moving inside         │  plays inside the brush strokes
│         the brush strokes)                   │
│                                              │
│  Chengdu mao cai, built your way.            │
│  Shop 32, Level A, Uptown · open till 7pm    │
│                                              │
│  [■ Order pickup]   [ Find us ]              │  seal-stamp primary action
└──────────────────────────────────────────────┘
```

**Signature interaction.** The seal stamp is the state. Choosing a spice level presses a seal numbered 1 to 6, 不辣 to 特辣, and adding an ingredient stamps it into your bowl.

**Motion**
- One ink-bleed reveal as the logo lands, built with `threejs-shaders` or a canvas fallback.
- Scrolling scrubs a top-down clip of red oil spreading across the broth.
- With reduced motion, the logo appears still over a single photo.

**Why it fits.** It is the strongest continuity with what the owner already has: the logo, the black-and-red packaging and the 9.7k-follower Instagram. It looks the most premium of the three and carries the "Three Kingdoms mao cai" story naturally.

**Risk.** It is the most familiar of the three. Din Tai Fung opens with calligraphy on black, and dark food sites are common. It is dark-only, so it depends entirely on the broth video and photography.

**Our footage.** It needs at least one clean, close, steady broth shot. If the clips don't have one, this concept needs a short shoot.

---

## Concept C: Broadside

**The idea.** A letterpress street poster announcing the bowl, printed on the brown kraft stock of a takeaway bag. Every line of type fills the full width, and the red ink lands a hair off-register over the headline. It is as loud as the brand's own Instagram voice ("Flames rise like Red Cliff"), but it is about the food.

**Palette**

| Name | Hex | Role |
|---|---|---|
| Kraft | `#C9A57B` | Page ground, as takeaway-bag stock |
| Carbon ink | `#1C1A17` | Type and rules |
| Chilli red | `#D7261E` | The headline and the Order action, printed as an overprint |
| Peppercorn green | `#6F8A2A` | Second ink: mild spice and greens, slightly off-register |
| Paper white | `#FBFAF7` | The ticket the menu is printed on |

**Type**
- **Big Shoulders Display**, a condensed wood-type gothic, for the full-width bands.
- **ZCOOL QingKe HuangYou** for the Chinese bands.
- **Zilla Slab** for body copy.

**First screen**

```
┌──────────────────────────────────────────────┐
│ 三国冒菜 THREE KINGDOMS MAO CAI (full width)    │
│ SICHUAN MINI HOTPOT (full width)              │
│ PICK IT. WEIGH IT. SPICE IT. (red overprint)  │
│ SIGNATURE BOWL $20.80 AT THE COUNTER           │
│ SHOP 32 · LEVEL A · UPTOWN · TILL 7PM          │
│ [ORDER PICKUP ███]          [FIND US]          │  the action band
└──────────────────────────────────────────────┘
```

**Signature interaction.** The press-pull: every change is one stamp. Adding to an order prints a new line onto the order ticket, overprinted in red.

**Motion**
- One press-pull as the poster loads.
- The bands rewrap into condensed type at phone width.
- It needs no 3D. This is the lightest and fastest of the three.

**The verdict on it.** It beats Concept A on audience appeal: it is loud, made for sharing, and suits creators and students. It loses on product clarity, because a poster shows fewer dishes at once than a lit board.

**Risk.** Xi'an Famous Foods (NYC) and the CRAV concept site already work in this poster style. Kraft brown can drift towards a craft-burger look. Long poster bands need care to stay readable on a phone.

**Our footage.** Short loops cut into the bands as "window" panels, so it can use rougher handheld clips than B can.

---

## The safe option

Also available, but not recommended: the category standard, played straight. A red and gold palette, a full-width food photo, "Order now", a menu in cards, and Playfair-style serif headings. It is what `ui-ux-pro-max` suggests for this category, and what David's Master Pot, Boiling Point and most rivals look like. It works, and it blends in.

## Next step

The owner picks A, B, C or the safe option, or asks for changes to one. Only then do we write the design brief and the direction contract, and later the build.

## Our clips (still to do)

The four clips in the Drive folder (28–69 MB each) could not be fetched. The Drive connector refuses files over 10 MB, and the folder isn't public. Any one of these would work:
1. Share the folder as "Anyone with the link" for a few minutes.
2. Upload copies under 10 MB each.
3. Drop the files into `research/clips/source/`.

Once the clips are here, `research/clips/` gets frame contact sheets, a shot list, and notes on which concept they suit.

## Process record

- `impeccable concept-seed --scope direction --mode persuade`, seed key `67675399`, assigned index 5.
- My grounded ranking:
  1. Ink and Oil
  2. The Pot from Above
  3. The Weigh Counter
  4. Red Cliff Dispatch
  5. Light Box
  6. Chengdu Street Stall
- Challenger verdicts:
  - Hatch Show Print letterpress poster: competitive, now Concept C.
  - One-bit desktop: declined.
  - Nixie counter: declined.
  - Acetate manual: declined.
  - Drawcord cape: declined.
  - Paper automata: declined.
- `ui-ux-pro-max --design-system` produced the "safe option" palette above. `frontend-design`'s list of AI-default looks was checked against all three concepts.
- After the choice: run the telemetry ping, `concept-seed --kind <assigned|pick|challenger|canon> --from 67675399 --scope direction --mode persuade`, then write the direction contract.
