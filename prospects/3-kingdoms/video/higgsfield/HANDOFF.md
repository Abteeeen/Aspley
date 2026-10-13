# Handoff: render the Three Kingdoms anime walk-in

Owner approval, 13 Oct 2026: use the Three Kingdoms cast and render with the Higgsfield connector, **one render per job, no drafts, no re-rolls, only the jobs listed**. The previous session couldn't do it: connector tools are read when a session starts, and the upload and generate tools were only allowed after that session had begun.

Work on branch `claude/happy-sagan-apqllo`.

## Before you start

1. Check that the Higgsfield connector exposes `media_upload` / `media_confirm`, `generate_image`, `generate_video` and `jobs_wait`. If it doesn't, stop and tell the owner.
2. The `higgsfield` skill is on branch `claude/wizardly-lovelace-xip4oy` at `.claude/skills/higgsfield/`. Read it from there (`git show`). The prompts here already follow its rules and pass its linter.

## Jobs (10 total, 26 credits)

Cost rule from the owner: cheapest image model, cheapest video model, nothing extra. Prices were checked with `get_cost` on 13 Oct 2026 (balance then: 585.5 credits, Plus plan, no free generations available). The five clips are already uploaded as Higgsfield media: A `03cf230b-9a28-424d-9609-3731c66397e9`, B `173789c4-ae96-4cef-938b-f24b2fb76b3d`, C `e90ba8da-fd41-49f1-9459-715d12d79f27`, P1 `03344ee8-8940-4a20-8f96-4ce018016900`, P2 `4c1e3678-6f23-415b-8550-3165a9e7f463`.

| # | Job | Model | Settings | Inputs | Prompt |
|---|---|---|---|---|---|
| 1–5 | Character sheets: Liu Bei, Guan Yu, Zhang Fei, Zhuge Liang, Zhao Yun | `gpt_image_2` | quality low, 1k, 16:9 — 0.5 cr each | prompt only | `anime/1-character-sheets.txt` (base prompt + that character's line) |
| 6 | A corridor | `seedance_2_0_mini` | 480p, 16:9, 9s, audio off — 4.5 cr | video `upload/A-corridor.mp4`; images: Zhao Yun, Zhang Fei sheets | `anime/A-corridor-anime.txt` |
| 7 | B shopfront to room | `seedance_2_0_mini` | 480p, 16:9, 11s, audio off — 5.5 cr | `upload/B-shopfront-to-room.mp4`; Liu Bei, Guan Yu | `anime/B-shopfront-to-room-anime.txt` |
| 8 | C room to counter | `seedance_2_0_mini` | 480p, 16:9, 9s, audio off — 4.5 cr | `upload/C-room-to-counter.mp4`; Zhuge Liang, Liu Bei, Guan Yu | `anime/C-room-to-counter-anime.txt` |
| 9 | P1 phone | `seedance_2_0_mini` | 480p, 9:16, 10s, audio off — 5 cr | `upload/P1-phone-entrance-to-board.mp4`; Guan Yu, Zhang Fei | `anime/P1-phone-anime.txt` |
| 10 | P2 phone | `seedance_2_0_mini` | 480p, 9:16, 8s, audio off — 4 cr | `upload/P2-phone-room-to-counter.mp4`; Liu Bei, Zhuge Liang | `anime/P2-phone-anime.txt` |

**Mapping the @handles:** attach the character sheets as image references in the order the `@` lines appear in each prompt. The `@source` is the video reference.

Never retry an uncertain submission automatically. Wait on jobs with `jobs_wait`.

## After rendering

1. Download every result into `upload/renders/`. Inspect frames before calling any of them good. Record kept or rejected for each in `anime/RESULTS.md`, with the reason.
2. Blur any real face that is still recognisable (ffmpeg or OpenCV).
3. Rebuild the frame sequences the way `site/README.md` describes:
   - `site/media/walk-d/`: renders A + B + C, landscape, 1280 wide WebP, about 135 frames
   - `site/media/walk-m/`: P1 + P2, 720 wide, about 87 frames
   - Update the frame counts in `site/walk.js` if they change.
4. Re-screenshot both variants at 1440×900 and 390×844, replace `site/media/shots/`, and republish the artifact `https://claude.ai/artifact/4QiKuLjC7GWusEzPziZQT3`. Publish `index.html` with `root` = `site/`. It has more than 255 files, so publish in two batches.
5. Commit and push, then report back to the owner: what rendered, what failed, and the link.
