# 3 Kingdoms: hero video plan

Prepared 13 Oct 2026. It covers what to do with our intro clip on the landing page, what Higgsfield should and should not render, and how the result sits on the page. Nothing has been generated or built yet.

Evidence:
- Our clip: `../research/clips/README.md`, its contact sheet, defect crops and phone-crop test.
- The two Higgsfield docs, read in full on 13 Oct 2026: [How to Build a Website with AI](https://higgsfield.ai/blog/build-website-with-ai) and the [Website builder skill](https://higgsfield.ai/skills/website).
- Benchmarks: [Stark's Hot Chicken](https://starks-hot-chicken.com/) (the bar to beat) and Higgsfield's own [STACKED burger](https://stacked-burger.higgsfield.app/) example.
- Skills used: `higgsfield` (root dispatcher, `higgsfield-prompt`, `higgsfield-seedance-2-5`, `higgsfield-seedance-vfx`, `model-guide.md` § Edit-Lane Chooser), `scroll-scrubbed-visual-sequence`, `core-web-vitals`.

## The short answer

1. **Don't regenerate the restaurant.** The walk-in is our proof of where the shop is, and "hard to find" is the top review theme. AI video re-imagines whatever it touches. It would change the room, and the skill warns that it garbles text, which here means the neon sign and the menu boards. The real place stays real.
2. **Use Higgsfield for the two things a phone can't film well.** One is the bowl: a slow, steaming close-up of the Signature Mini Hotpot made from a real photo of it. The other is a 1-second bridge from the room into the bowl. Higgsfield's upscaler also cleans and enlarges the real walk.
3. **Make the hero short and give it an ending.** It should be an 8-second intro, not the 22-second clip: shopfront, lanterns, a push into one lantern, its glow becoming the broth, then a hold on the bowl while the headline and **Order pickup** settle. The full walk moves lower down the page as the scroll-driven "Find us" section.
4. **Beat Stark's on what it leaves out.** Stark's walks in and ends on its logo. We walk in and end on the food, the price and the order button. The logo and copy are live HTML on top of the video, so they stay sharp, bilingual and editable.

## What Stark's does, and where we beat it

_Pending: the Stark's delivery and file-size measurements are still being taken. This section is filled in by the next commit._

## What the Higgsfield website docs teach

From the blog post (one site built end to end on Higgsfield, ~$74):

- **Make the product images before anything else.** In their build, 197 of the 407 generation credits went on images thrown away when the real product photos arrived. For us that means **photograph the real bowl first**, then animate it.
- **Describe behaviour and mood, not layout.** A prompt that lists sections gets back exactly that list.
- **Read every fact as if it were wrong.** Their agent invented a spec sheet that read as real. For us: no invented dishes, no ingredients the bowl doesn't have, no "slow-cooked for 24 hours".
- **Every scroll animation needs a defined end state.** Their fix: pin each section for the full length of its animation, use easing that ends rather than smoothing that never settles, and test slow, normal and flick scrolling. Each must end in the same frame with readable text.
- **Check a narrow phone early, not at the end.**
- **Trust the usage counter, not the agent's own tally.** Their agent reported 380 credits against a real 1,479.

From the Website builder skill page: every example site (LOOMERE, VOYARELLE, VELLARO, ELIN MARLOW, STACKED) is built around **one generated film, split into chapters and scrubbed by scroll**. STACKED, the burger shop, is the closest to us: "a layer-by-layer burger film with five chapters, a menu, add-to-cart, a pickup cart drawer".

_Pending: the STACKED scroll-film measurements are still being taken. This section is filled in by the next commit._

## The hero, shot by shot

About 8 seconds, played once on load, then holding on the last frame. Two masters: 16:9 for desktop and 9:16 for phones.

| Time | Shot | Source |
|---|---|---|
| 0–2.5 s | The shopfront: neon sign, cage lanterns, red wall, lattice pillars. A slow push forward. | **Real.** From the clip at ~3.5–6 s (the strongest frame we have). Upscaled. |
| 2.5–5 s | Inside: the row of lanterns along the red wall. | **Real.** From ~8.5–11 s. Upscaled. |
| 5–6 s | Push into one lantern until its round glow fills the frame. The glow becomes the round surface of the red broth. | **Higgsfield, Seedance 2.5.** First frame = a lantern frame from our clip; last frame = the first frame of the bowl shot. |
| 6–8 s, then hold | The Signature Mini Hotpot from above. Steam rising, chilli oil glinting, a slow push in. The copy settles over it. | **Higgsfield, Kling 3.0.** Animated from **our photo of the real bowl**. |

The last frame is the resting state, and the copy lands on it. It is a defined end state, not a loop that never settles. If the owner wants movement after it lands, the bowl shot is generated a little longer so a 3-second steam-only stretch can loop quietly behind the copy.

Live HTML on top, not baked into the video:
- The 三国冒菜 logo, which ink-reveals in Concept B and flicks on like a lit panel in Concept A.
- "Chengdu mao cai, built your way" (or the chosen concept's line).
- "Signature Mini Hotpot $20.80 at the counter."
- **Order pickup** · **Find us**.

## How we render it: the jobs, in order

No credits are spent until steps 0 and 1 are done.

### Step 0. Get a better source (no credits; this decides the quality)

AI can't remove the smear at 12–16 s, the clipped reds or the exposure jumps, because they are baked into the pixels. Two options, best first:

1. **A 30-minute reshoot** before opening or in a quiet hour:
   - 4K at 30 fps, exposure and white balance locked (pro mode), shutter at 1/60 or faster.
   - Phone on a gimbal.
   - The Hungry Panda sticker and taped notices removed for the take.
   - An empty room, or only staff who agree to appear.
   - Once in landscape and once in portrait.
   - Three takes of the same path, matching our clip.
2. **At minimum, the camera original of this clip.** The stabilised and graded export is 8-bit at 5.7 Mbps, so re-grading it will band.

Also shoot **the bowl**: the Signature Mini Hotpot under one lantern on a dark timber table. One top-down frame and one at 30–45°, sharp, steam visible. This photo is the input for the AI bowl shot. Per the blog post, it comes first.

### Step 1. Clean and upscale the real walk

| Job | Higgsfield tool | Settings (preflight passed, specs 26 Sep 2026) |
|---|---|---|
| Upscale | ByteDance Video Upscale (`bytedance_video_upscale`) | `resolution: 4k`, `preset: ugc` (phone footage), `model_version: pro`, `fps: 30` |
| Alternative | Topaz (`topaz_video`) | `resolution: 2160p` |
| Lantern flicker, if any | Video Deflicker (`video_deflicker`) | defaults |

Upscale the 16:9 master to 4K first, then crop the phone version from it. A 9:16 crop of 4K is 1215×2160, which is enough for a phone. A crop of today's 1080p file is only 608 px wide. Higgsfield's `reframe` workflow can also make 9:16, but it may generate new picture at the edges, so it comes after a plain crop has been tried.

Skip `video_edit` for removing the sticker. Seedance 2.5 `video_edit` only accepts sources up to 20 s and bills the full length of the source. The skill also says text accuracy is not promised, so the neon sign and menus could come back garbled. Peel the sticker for the reshoot, or paint it out in a normal editor.

### Step 2. The bowl shot (Kling 3.0, from our photo)

The model guide sends "animate a still image with cinematic camera" to Kling 3.0. Its `mode: 4k` gives the sharpest frame for a full-screen hero.

```
Model: Kling 3.0 · mode 4k · start_image = our photo of the Signature Mini Hotpot
Aspect ratio: 16:9 (run again at 9:16 from the portrait photo)   Duration: 5s   Style: practical lantern light

Starting from the provided photo as the first frame. Steam rises slowly from the broth and curls up through the lantern light. The broth surface trembles gently, chilli oil beads drifting across it and catching the light on their edges.
Camera: slow Dolly In toward the bowl.
Look: single warm lantern key from screen-left, deep red and amber, subject in sharp focus, background falling into soft bokeh, dark timber table catching light on its edges.
```

Why it is written this way: the skill's image-to-video rule is to describe only what moves, never what is already in the photo. It is an Atmosphere shot, so nothing changes but the mood, and that calls for a slow push-in. The constraint phrases come from `skills/shared/negative-constraints.md`: named light source, background surface, "subject in sharp focus, background falling into soft bokeh", and atmospheric motion so the result isn't static.

### Step 3. The bridge (Seedance 2.5, first and last frame)

```
@image1: one cage lantern glowing amber against the red wall of the dining room, our upscaled frame from the walk-in clip.
@image2: a bowl of red chilli broth seen from above on a dark timber table, the first frame of our bowl shot.
**Mode**: omni_reference
**Start frame**: @image1
**End frame**: @image2
@image1 is the first frame and @image2 is the last frame. Use only the composition, light and colour of each image. Do not use the diners, the signage or the menu boards. The camera pushes slowly into the glowing lantern until its round amber light fills the frame. Zoom-in transition: the round lantern glow becomes the round surface of the red broth, steam rising from it. The bowl is fully readable by 3.5s, then the camera settles and holds on it to the end. The visuals feature warm practical lantern light, deep red and amber tones, the bowl in sharp focus. Audio includes a low simmering bubble and soft dining-room murmur.
```

Settings: `seedance_2_5`, `mode: omni_reference`, `start_image` + `end_image`, `duration: 5`, `resolution: 1080p`, 16:9. Preflight and the skill's linter both pass. The seam lasts about a second in the final edit. The rest of the 5 s is handles to trim.

Rules followed from `higgsfield-seedance-2-5`:
- Start and end frames are only allowed in `omni_reference` mode.
- The two anchors go in separate sentences.
- Every reference states what not to take from it.
- The transition is named, and it has an arrival time so it doesn't spill into the next shot.
- 2.5 stops at 1080p. That is fine for a 1-second seam under the 4K bowl. If it shows, re-run the bridge on Seedance 2.0 in 4K.

### Step 4. Edit, grade, export

Cut, grade and export in a normal editor (DaVinci Resolve or Premiere). Higgsfield's video-editing workflow (Higgsedit) is optional. Grade the real and generated shots to one look, with one warm key light. The skill notes that colour matching alone looks pasted in, so light direction and grain have to match too.

### Credits and iteration

- Before each paid job, get the price with `higgsfield generate cost …` (CLI) or `get_cost: true` (MCP). Every generation shows its price before approval. The agent's own reasoning does not, which is the blog's lesson.
- Lock a prompt, then generate a batch and pick the best take. Change one variable at a time only when every take fails the same way.
- Log every take with `python3 .claude/skills/higgsfield/scripts/higgsfield_memory.py log-gen 3-kingdoms …` so we learn our real takes-per-keeper rate.

### What we do not generate

- The room, the sign, the menu boards or any text. Text is not reliable through generation, and the room is the proof.
- People. Real diners and staff need consent; generated "customers" would be fake.
- Dishes, ingredients or claims that aren't on the real menu.

## How it sits on the page

- **First paint.** A still of the shopfront frame, as AVIF/WebP in an `<img fetchpriority="high">`. That image is what the browser measures as the largest paint (LCP), per `core-web-vitals`. The video starts after the poster has painted.
- **File sizes**, from encode tests on our clip, 13 Oct 2026:

  | Version | Size |
  |---|---|
  | Full 21 s, 1080p, H.264 | 7.2 MB (too heavy) |
  | 8 s, 1080p, H.264 | 2.5 MB |
  | 8 s, 1080p, AV1 | 1.3 MB |

  Targets: desktop ≤2.5 MB (AV1 first, H.264 fallback), phone 1080×1920 ≤1.5 MB, both `muted playsinline`. Users with reduced motion or data saver get the still.
- **No text in the video.** This is the `scroll-scrubbed-visual-sequence` rule, and it is the only way the English and Chinese copy both work.
- **"Find us", lower down the page.** The full walk becomes a scroll-driven section with the scroll-scrubbed skill: a sticky stage, with copy stops along the route ("Queen St Mall → Level A → next to Target → Shop 32").
  - Desktop: a short-keyframe video (720p with a keyframe every 5 frames measured 6.4 MB, so trim it or use 540p).
  - Phones: an image sequence of ~90–120 frames, loaded only near the section.
  - Every stop lands on a fixed state at slow, normal and flick speeds, which is the blog's motion fix.
- **By concept:**
  - **A, Light Box:** the hero bowl sits in the centre lit panel and the walk drives "Find us".
  - **B, Ink and Oil:** the bowl shot is the broth inside the brush strokes, and the walk is secondary.
  - **C, Broadside:** the shopfront, lantern and bowl become three window loops in the poster bands.

## Decisions needed

1. Which concept (A, B or C)? It decides how the hero is framed.
2. Can we reshoot for 30 minutes, with the sticker off and either an empty room or staff consent?
3. Can we have the camera original of this clip and the other three Drive clips?
4. Is the Signature Mini Hotpot the hero dish? It is the most-liked item and the $20.80 price anchor.
