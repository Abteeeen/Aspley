# 3 Kingdoms: our phone footage

Shot 13 Oct 2026 at Shop 32, Level A, Uptown. The originals are in the team Drive folder (HEVC, 60fps, 28–69 MB each). The copies in `source/` are compressed for the repo: H.264, 30fps, 1080p on the short side, AAC 96k, `+faststart`. Every copy is under 20 MB.

| File | Orientation | Length | Size | What it shows |
|---|---|---|---|---|
| `source/20261013_120433.mp4` | Landscape 1920×1080 | 9.2s | 8.3 MB | Level A corridor walk past the red-lattice shopfront and the lit 三国冒菜 3 Kingdoms sign. **Opening shot of the walk-in.** |
| `source/20261013_120702.mp4` | Landscape 1920×1080 | 22.8s | 16.7 MB | Continuous walk from the corridor, past the entrance, through the red dining room with lanterns, ending on the counter's lit menu board and sign. **Main body of the walk-in.** |
| `source/20261013_115928.mp4` | Portrait 1080×1920 | 10.0s | 6.6 MB | Entrance under the sign, push into the dining room, ending at the menu board. Phone version of the walk-in. |
| `source/20261013_115941.mp4` | Portrait 1080×1920 | 7.6s | 5.7 MB | Pan across the dining room to the counter, the drinks fridges and the lit menu board. Phone version, second half. |

## Notes

- Customers and staff are visible in several shots. Blur faces, or get the venue's OK, before any of this goes on a public site.
- For scroll-scrubbing, the hero needs a re-encode with a keyframe on every frame (`-g 1`), or a JPEG/WebP frame sequence. That is a build step. These copies are the archive.

## Re-create these copies from the originals

```bash
# landscape
ffmpeg -i in.mp4 -vf "scale=-2:1080:flags=lanczos,fps=30" -c:v libx264 -preset slow -crf 22 -pix_fmt yuv420p -movflags +faststart -c:a aac -b:a 96k out.mp4
# portrait (shot with a -90 rotation flag)
ffmpeg -i in.mp4 -vf "scale=1080:-2:flags=lanczos,fps=30" -c:v libx264 -preset slow -crf 22 -pix_fmt yuv420p -movflags +faststart -c:a aac -b:a 96k out.mp4
```
