# Edited walk-in clips (free tools only)

Made 13 Oct 2026 with ffmpeg from the original phone files (4K / 1440p, 60fps HEVC, SDR Rec.709). No AI.

| File | What |
|---|---|
| `20261013_120433-stable-graded.mp4` | Level A corridor, 1920×1080, 30fps |
| `20261013_120702-stable-graded.mp4` | Shopfront → room → counter, one continuous take, 1920×1080, 30fps. **The best single walk-in clip.** |
| `20261013_115928-stable-graded.mp4` | Phone version, entrance → room → board, 1080×1920, 30fps |
| `20261013_115941-stable-graded.mp4` | Phone version, room → counter, 1080×1920, 30fps |
| `preview-120702-before-after.mp4` | Side-by-side before / after |

## Stabilisation
Two-pass vidstab at 1080p and 60fps, then 30fps output. `smoothing=90` gives a 1.5s window, for a gimbal-like glide. `optzoom=1` crops just enough to hide the edges.

Measured frame-to-frame jitter dropped by 30–45% (px per frame, before → after): 120433 0.83 → 0.54, 120702 1.26 → 0.70, 115928 0.64 → 0.48, 115941 0.82 → 0.55. The phone had already stabilised the footage, which limits how much more a free tool can remove. A slower reshoot on a gimbal will beat any post fix.

## Grade (one look for every clip)
```
hqdn3d=1.5:1.2:4:4,
colorbalance=rs=-0.04:bs=0.06:rm=-0.08:gm=0.01:bm=0.05:rh=0.02:gh=0.01:bh=-0.02,
vibrance=intensity=-0.3,
eq=contrast=1.1:gamma=1.06:saturation=1.02,
curves=master='0/0.03 0.2/0.18 0.5/0.5 0.78/0.82 1/0.95',
vignette=angle=PI/7,
unsharp=5:5:0.4
```
- light denoise for the dark room
- pulls the orange cast out of the mid-tones
- tames the clipped reds (negative vibrance hits saturated colours hardest)
- gentle S-curve with lifted blacks and soft highlights, so the lanterns stop clipping
- mild vignette and sharpening

## Re-create
```bash
G="<grade above, on one line>"
ffmpeg -i IN.mp4 -vf "scale=1920:-2" -an -c:v libx264 -crf 12 -preset veryfast pre.mp4   # 1080:-2 for portrait
ffmpeg -i pre.mp4 -vf "vidstabdetect=shakiness=8:accuracy=15:stepsize=6:mincontrast=0.2:result=t.trf" -f null -
ffmpeg -i pre.mp4 -vf "vidstabtransform=input=t.trf:smoothing=90:optzoom=1:interpol=bicubic,$G,fps=30" -an -c:v libx264 -crf 18 -preset slow -pix_fmt yuv420p -movflags +faststart OUT.mp4
```
People in the footage are not removed or blurred.
