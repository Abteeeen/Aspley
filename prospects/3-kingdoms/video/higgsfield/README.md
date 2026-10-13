# 3 Kingdoms walk-in: Higgsfield upgrade pack

Written 13 Oct 2026 with the vendored `higgsfield` skill (OSideMedia v3.40.0, specs snapshot 2026-09-26). It currently sits on branch `claude/wizardly-lovelace-xip4oy` at `.claude/skills/higgsfield/`.

Routing: `higgsfield-prompt` + `higgsfield-seedance-vfx` (video-to-video on Seedance 2.0, 4K) + `higgsfield-seedance` (grammar and linter). `higgsfield-seedance-2-5` and `model-guide.md` § Edit-Lane Chooser were read and not chosen: 2.5 tops out at 1080p, and this job needs 4K detail on a moving handheld plate.

**Nothing here has been generated. Every step below spends Higgsfield credits except Step 0 and Step 5.** Check the credit cost in the Higgsfield UI before pressing Generate.

## What the site uses today

| Site asset | Source clip | Part used |
|---|---|---|
| Desktop walk-in (`site/media/walk-d/`, 135 frames) | `20261013_120433` + `20261013_120702` | all of 120433 at 4fps, then 120702 from 3s at 5fps |
| Phone walk-in (`site/media/walk-m/`, 87 frames) | `20261013_115928` + `20261013_115941` | both in full at 5fps |
| Stills, dish cards, room loop | all four | single frames; dish cards are crops of the last frame of 120702 |

## What Higgsfield fixes, and what it doesn't

| Problem in the footage | Fixed by |
|---|---|
| Handheld shake makes the scrub jumpy | **Step 0, free:** ffmpeg `vidstab`, already done |
| Flat white mall light in the hall; mixed white and red light at the entrance; blown lanterns | **Higgsfield, Seedance 2.0 v2v:** relight to one lantern-lit evening look, same camera path |
| Phone-camera detail | **Higgsfield:** 4K output (`mode=std`) |
| Identifiable diners and staff | **Step 5, free:** face blur after generation. Not done by AI, so nobody's face is invented. |
| No real food footage | **Optional Higgsfield job F1/F2**, but only as a stand-in. A real food shoot is still the right answer. |

## The process, step by step

### Step 0: Prep (done, free)
`upload/` holds five stabilised, trimmed segments, each 4–15s so Seedance 2.0 can match its duration, plus a first frame for each:

| File | From | Length | Aspect |
|---|---|---|---|
| `A-corridor.mp4` | 120433, 0–9s | 9s | 16:9 |
| `B-shopfront-to-room.mp4` | 120702, 3–14s | 11s | 16:9 |
| `C-room-to-counter.mp4` | 120702, 14s–end, last frame held to 9s | 9s | 16:9 |
| `P1-phone-entrance-to-board.mp4` | 115928 | 10s | 9:16 |
| `P2-phone-room-to-counter.mp4` | 115941, last frame held to 8s | 8s | 9:16 |

### Step 1: Lock the look on a still (cheap)
Per `higgsfield-seedance-vfx/references/first-frame.md`: approve the look as an image before paying for video.

1. In Higgsfield: **Image → Nano Banana Pro**. Upload `A-corridor-first-frame.jpg` as the image reference.
2. Prompt: `0-look-lock-still.txt`. Aspect 16:9, resolution 2k.
3. Iterate on the image only, changing one thing at a time ("warmer", "hall darker"). Stop when it looks right.
4. Repeat for `B`, `C`, `P1` and `P2` first frames, using the same prompt (aspect 9:16 for P1 and P2). Keep the five approved stills.

### Step 2: Draft each video (cheap)
1. **Video → Seedance 2.0.** Mode `fast`, resolution 480p, audio off.
2. Video reference: the segment from `upload/`. Start image: its approved still from Step 1.
3. Duration equals the segment length: A 9, B 11, C 9, P1 10, P2 8. Aspect: 16:9 for A, B, C; 9:16 for P1, P2.
4. Prompt: the matching `.txt` file, pasted as-is.
5. A draft checks the *prompt*, not the final take (Seedance has no seed). Check that the camera path matches the source, the people are the same and in the same places, nobody new appears, and the sign and menu lettering survived.

### Step 3: Final renders
Same inputs as the draft. Mode `std`, resolution **4k**, audio off. One render per segment.

### Step 4: Keep or reject
Reject any take where:
- the camera path drifts from the source
- a person appears, vanishes or changes
- the 三国 Kingdoms sign or the menu panels garble
- the light flickers

If the same defect shows up twice on an unchanged prompt, stop re-rolling. The prompt needs fixing, so send me the take.

### Step 5: Hand back to me (free)
Put the kept renders in the Drive folder (shared as before), or upload them to `upload/renders/` on this branch. I will then:
- blur faces
- cut new WebP frame sequences for `walk-d` and `walk-m`
- re-check the scrub in both variants
- republish the artifact
- log each take to the skill ledger (`higgsfield_memory.py log-gen threekingdoms …`)

### Optional: food stand-ins (F1 → F2)
1. **F1, still:** Image → GPT Image 2 (`gpt_image_2`), 16:9, 2k. Image input: `site/media/still/card-signature.webp`. Prompt: `F1-food-still.txt`.
2. **F2, loop:** Video → Kling 3.0 (`kling3_0`), 16:9, 5s, start image = the approved F1 still. Prompt: `F2-food-loop.txt`.

The owner must confirm the bowl matches the real dish before it goes on the site. Generated food that doesn't match what's served is a complaint waiting to happen.

## Checks run

- `seedance_lint.py --preflight --model seedance_2_0` on A, B, C, P1 and P2 at their real ratio, duration, 4K, `mode=std`, with one video reference. All "Safe to generate"; A was trimmed from 182 to 170 words to clear the 180-word warning.
- `preflight.py` on `kling3_0` (16:9, 5s, start_image) and `seedance_2_0` (4K std, 11s, one video reference): pass.
