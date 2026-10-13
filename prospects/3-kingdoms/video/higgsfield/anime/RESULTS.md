# Anime walk-in: render results

Rendered 13 Oct 2026 through the Higgsfield connector, one render per job, no drafts, no re-rolls. Total spend: **79.5 credits** (32.5 sheets + 47 video), confirmed against the account's transaction log. The balance went from 619.5 to 513. The other 27 credits were jobs this session did not submit (one Nano Banana 2 image and six Seedance 2.0 Mini videos, 08:28–08:36 UTC).

## What changed from the handoff, and why

| Handoff said | What ran | Why |
|---|---|---|
| Seedance 2.0 `std`, **4K** | Seedance 2.0 **`fast`, 480p** | 4K cost 22 credits a second, 1,034 for the five clips, against a balance of 619.5. The owner then asked for the lowest-cost model. Fast 480p is 1 credit a second: 47 credits for all five. |
| GPT Image 2, 16:9, 2k, quality unset | Same, **quality `high`** (6.5 credits each) | Submitted before the owner asked for free models. No free tier is open on this account (`unlim.available: false`), and every image model quotes credits. The owner then said to keep these sheets. |
| `site/media/walk-d/` at 1280 wide, `walk-m/` at 720 wide | Native render size: **864×496** and **496×864** | Upscaling 480p adds file weight without detail. `walk.js` draws to cover at any size, so no code change was needed. |

The prompt files are unchanged except that the spec line reads `480p` instead of `4K` at submission. All five passed `seedance_lint.py --preflight` at fast/480p with one video reference and 2–3 image references.

## Jobs

| # | Job | Higgsfield job id | Credits | Result |
|---|---|---|---|---|
| 1 | Liu Bei sheet | `de93f4cd-95b1-4f83-8b13-e8ab0902cdbd` | 6.5 | **Kept.** Four consistent views, moss-green and cream robe, jade pin, no text. |
| 2 | Guan Yu sheet | `a8aa4b53-0684-433a-ba1b-e8eae20b5d41` | 6.5 | **Kept.** Long beard, red complexion, green robe over armour. |
| 3 | Zhang Fei sheet | `ce89645c-3552-4ad7-8177-e470a21688d6` | 6.5 | **Kept.** Black and bronze armour, red sash. Face close-ups are bust crops, not full heads; fine as a reference. |
| 4 | Zhuge Liang sheet | `db861776-1fa4-4a8a-b003-9fb719ab2fc2` | 6.5 | **Kept.** White and pale-blue robes, crane-feather fan, scholar's cap. |
| 5 | Zhao Yun sheet | `f1257ec6-a561-4a29-822c-75055e16dd6a` | 6.5 | **Kept.** Silver-white armour, blue cape, high ponytail. |
| 6 | A corridor, 16:9, 9s | `31da77d4-dfdd-49f1-bd8e-dc3d26d18fe7` | 9 | **Kept.** Camera path, hall, lattice and sign match the source. Zhao Yun and Zhang Fei walk toward camera. They were *added* beside the real shoppers rather than replacing them, so real shoppers stay in frame (faces blurred). |
| 7 | B shopfront to room, 16:9, 11s | `6954c831-ea88-4ebd-a12e-4e70cef4fa52` | 11 | **Kept.** Liu Bei and Guan Yu eat from steaming bowls at a near table. The real diner stays at the next table (blurred). Path, lanterns and sign match. |
| 8 | C room to counter, 16:9, 9s | `6746d517-79a6-41cd-8fa4-44ed19485bb3` | 9 | **Kept with a defect.** Zhuge Liang appears twice: at the table with Guan Yu, and behind the counter. Liu Bei is missing. Real staff member and diners stay (blurred). The last second smears across the dish panels, but the source clip does the same there. |
| 9 | P1 phone, 9:16, 10s | `ec85ae49-5706-435b-8632-9dfd4397271f` | 10 | **Kept.** Guan Yu and Zhang Fei eat at a table under the sign; steam, lanterns and dish panels hold. |
| 10 | P2 phone, 9:16, 8s | `3a738640-3345-408e-b5cf-fb96d147f1a5` | 8 | **Kept.** Liu Bei reads a menu at the near table, Zhuge Liang stands behind the counter with his fan. Real diners stay small in the background. |

Renders are in `../upload/renders/` (`A.mp4` … `P2.mp4`, unblurred as delivered). The sheets are in `sheets/` as WebP q90; the original 2k PNGs stay on Higgsfield under the job ids above.

## Face blur

OpenCV YuNet (`face_detection_yunet_2023mar.onnx`) on every site frame at 2× scale. Detections were linked into tracks across frames, and each track was labelled by eye:

- 37 anime tracks left sharp
- 20 non-face tracks (dish photos, menu signs, lanterns) and any box over 120 px left alone
- everything else blurred: pixelate plus Gaussian inside a feathered ellipse, padded about 45%, held two frames either side of each track so a face never flashes sharp between detections

618 face boxes were blurred across 222 frames. Faces under about 10 px that the detector missed are left as they are; at 480p they are not recognisable.

## Not done

- No 4K pass. A 4K re-render of all five at `std` would be 1,034 credits; 1080p `std` would be 423.
- Not logged to the skill ledger: `log-gen threekingdoms` would write a new file inside `.claude/skills/higgsfield/`, and CLAUDE.md allows only `aspley.json` there. These are 480p rows, which the ledger counts as draft tier anyway.
