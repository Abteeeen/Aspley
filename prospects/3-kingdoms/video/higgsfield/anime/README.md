# Anime cast version of the walk-in

The owner asked for anime characters in place of the real people in the footage. Named franchise characters (Luffy, Naruto, Tsunade, Sasuke, Hinata) are not used. They are copyrighted, a restaurant website is commercial use, and Higgsfield's filter blocks named IP (`skills/shared/negative-constraints.md` § Content Filter, and the NON-IP rule in `higgsfield-seedance-vfx`).

The cast is instead the five Shu heroes from *Romance of the Three Kingdoms*, the story the restaurant is named after. They are historical and literary figures in the public domain. They are drawn here as **original** anime designs, not copied from any game or series.

| Character | Look | Replaces |
|---|---|---|
| Liu Bei | moss-green and cream robe, topknot with jade pin | diner (B, C, P2) |
| Guan Yu | long black beard, green robe over dark armour | diner (B, C, P1) |
| Zhang Fei | wild short beard, black and bronze armour, red sash | shopper (A), diner (P1) |
| Zhuge Liang | white and pale-blue robes, crane-feather fan | staff at the counter (C, P2) |
| Zhao Yun | silver-white armour, blue cape | shopper (A) |

At most three people are replaced per segment: Seedance tracks three characters reliably (engine rule). Anyone else stays as a soft, out-of-focus background figure. Faces still get blurred in post wherever a real person remains recognisable.

## One-pass job list (no drafts, no re-rolls, as the owner asked)

| # | Job | Model | Settings | Inputs |
|---|---|---|---|---|
| 1–5 | Character sheets | GPT Image 2 | 16:9, 2k | prompt `1-character-sheets.txt`, one per character |
| 6 | A corridor | Seedance 2.0 | std, 4k, 16:9, 9s, audio off | `../upload/A-corridor.mp4` + Zhao Yun and Zhang Fei sheets |
| 7 | B shopfront to room | Seedance 2.0 | std, 4k, 16:9, 11s, audio off | `../upload/B-shopfront-to-room.mp4` + Liu Bei and Guan Yu |
| 8 | C room to counter | Seedance 2.0 | std, 4k, 16:9, 9s, audio off | `../upload/C-room-to-counter.mp4` + Zhuge Liang, Liu Bei and Guan Yu |
| 9 | P1 phone | Seedance 2.0 | std, 4k, 9:16, 10s, audio off | `../upload/P1-phone-entrance-to-board.mp4` + Guan Yu and Zhang Fei |
| 10 | P2 phone | Seedance 2.0 | std, 4k, 9:16, 8s, audio off | `../upload/P2-phone-room-to-counter.mp4` + Liu Bei and Zhuge Liang |

That is 5 images and 5 videos (47 seconds of 4K Seedance in total).

Skipping drafts saves credits but takes a risk. Anime characters inside moving handheld footage is the hardest case in `higgsfield-seedance-vfx` (Level 2–3). Any take that fails stays failed until someone pays for a redo.

## Checks

`seedance_lint.py --preflight --model seedance_2_0` at each segment's real ratio, duration, 4K, `std` mode, with one video reference plus 2–3 image references: all five read "Safe to generate" (174–180 words).
