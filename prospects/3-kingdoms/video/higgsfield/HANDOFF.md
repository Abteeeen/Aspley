# Handoff: render the Three Kingdoms anime walk-in

Owner approval, 13 Oct 2026: use the Three Kingdoms cast and render with the Higgsfield connector, **one render per job, no drafts, no re-rolls, only the jobs listed**. The previous session couldn't do it: connector tools are read when a session starts, and the upload and generate tools were only allowed after that session had begun.

Work on branch `claude/happy-sagan-apqllo`.

## Before you start

1. Check that the Higgsfield connector exposes `media_upload` / `media_confirm`, `generate_image`, `generate_video` and `jobs_wait`. If it doesn't, stop and tell the owner.
2. The `higgsfield` skill is on branch `claude/wizardly-lovelace-xip4oy` at `.claude/skills/higgsfield/`. Read it from there (`git show`). The prompts here already follow its rules and pass its linter.

## Jobs (10 total)

| # | Job | Model | Settings | Inputs | Prompt |
|---|---|---|---|---|---|
| 1–5 | Character sheets: Liu Bei, Guan Yu, Zhang Fei, Zhuge Liang, Zhao Yun | `gpt_image_2` | 16:9, 2k | prompt only | `anime/1-character-sheets.txt` (base prompt + that character's line) |
| 6 | A corridor | `seedance_2_0` | mode std, 4k, 16:9, 9s, audio off | video `upload/A-corridor.mp4`; images: Zhao Yun, Zhang Fei sheets | `anime/A-corridor-anime.txt` |
| 7 | B shopfront to room | `seedance_2_0` | std, 4k, 16:9, 11s, audio off | `upload/B-shopfront-to-room.mp4`; Liu Bei, Guan Yu | `anime/B-shopfront-to-room-anime.txt` |
| 8 | C room to counter | `seedance_2_0` | std, 4k, 16:9, 9s, audio off | `upload/C-room-to-counter.mp4`; Zhuge Liang, Liu Bei, Guan Yu | `anime/C-room-to-counter-anime.txt` |
| 9 | P1 phone | `seedance_2_0` | std, 4k, 9:16, 10s, audio off | `upload/P1-phone-entrance-to-board.mp4`; Guan Yu, Zhang Fei | `anime/P1-phone-anime.txt` |
| 10 | P2 phone | `seedance_2_0` | std, 4k, 9:16, 8s, audio off | `upload/P2-phone-room-to-counter.mp4`; Liu Bei, Zhuge Liang | `anime/P2-phone-anime.txt` |

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
