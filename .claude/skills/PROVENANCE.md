# Skill provenance (installed 2026-10-12)

| skill | upstream repo | commit |
|---|---|---|
| frontend-design | anthropics/skills (skills/frontend-design) | dbd4588 |
| web-design-guidelines | vercel-labs/agent-skills (skills/web-design-guidelines) | 063bee9 |
| react-best-practices | vercel-labs/agent-skills (skills/react-best-practices) | 063bee9 |
| composition-patterns | vercel-labs/agent-skills (skills/composition-patterns) | 063bee9 |
| ui-ux-pro-max | nextlevelbuilder/ui-ux-pro-max-skill (.claude/skills/ui-ux-pro-max) | 026b6e1 |
| find-skills | vercel-labs/skills (skills/find-skills) via `npx skills add` | hash in skills-lock.json |
| impeccable | pbakaus/impeccable (.agents/skills/impeccable) via `npx skills add`, v0.1.14 | 919dbeb |

## Security notes

- `ui-ux-pro-max/scripts/*.py`: local CSV search only. No network. Writes only under `design-system/` beneath `--output-dir`, with slug sanitisation against path traversal.
- `web-design-guidelines`: fetches its rule list at review time from `raw.githubusercontent.com/vercel-labs/web-interface-guidelines`. By design.
- `impeccable/scripts/impeccable`: POSIX launcher that downloads the Rust engine binary from `github.com/pbakaus/impeccable/releases` on first run, verifies it against a SHA-256 sidecar, and refuses unverified or empty downloads. Caches under `~/.impeccable/bin`. `scripts/live-browser*.js` are injected into the local dev page and talk only to `localhost`.
- `find-skills`: markdown only. Instructs use of `npx skills find` and `npx skills add`; nothing runs without an explicit command.
- Installed-skill hashes are pinned in `skills-lock.json`; run `npx skills update` deliberately, then re-review before committing.

## Added 12 Oct 2026 (second batch, via `npx skills add`, hashes pinned in `skills-lock.json`)

| skill | upstream | notes |
|---|---|---|
| high-end-visual-design | leonxlnx/taste-skill | Markdown only. Premium agency aesthetic rules. |
| emil-design-eng | emilkowalski/skills | Markdown only. Interaction and animation craft. |
| core-web-vitals | addyosmani/web-quality-skills | Markdown only. LCP, INP, CLS diagnosis. |
| copywriting | coreyhaines31/marketingskills | Markdown plus an evals JSON. No executable code. |
| shadcn | shadcn-ui/ui (official) | `allowed-tools` limited to `npx/pnpm dlx/bunx shadcn@latest`. Bundles showcase `.tsx`/`.css` examples and a coverage `.mjs` script used only for the skill's own evals. |
| baseline-ui | ibelick/ui-skills | Markdown only. Tailwind guardrails. |
| frontend-ui-engineering | addyosmani/agent-skills | Markdown only. References `../../references/accessibility-checklist.md`, which is not bundled; ignore that link. Overlaps heavily with impeccable, frontend-design and web-design-guidelines. |
| gsap-core | greensock/gsap-skills (official GSAP vendor) | Markdown only. Replaces the requested "Motion Studio" skill, which is paywalled and produces videos rather than web animation. |
| gsap-scrolltrigger | greensock/gsap-skills (official GSAP vendor) | Markdown only. Scroll-driven animation. |

## Added 13 Oct 2026 (third batch, via `npx skills add -a claude-code --copy`, hashes pinned in `skills-lock.json`)

Owner asked for real 3D and video-on-scroll on phones. Every file was read before install; the installed copies were diffed against the reviewed clones and match exactly.

| skill | upstream | commit | notes |
|---|---|---|---|
| threejs-fundamentals, threejs-geometry, threejs-materials, threejs-lighting, threejs-textures, threejs-loaders, threejs-animation, threejs-interaction, threejs-shaders, threejs-postprocessing | cloudai-x/threejs-skills (skills/*) | b1c6230 | Markdown only, ten SKILL.md files. No scripts, no install commands. Code samples reference threejs.org docs, jsDelivr `three@0.160.0` and the gstatic Draco decoder path. |
| scroll-scrubbed-visual-sequence | mengto/skills (agent-skills/web-design/scroll-scrubbed-visual-sequence) | 83a47fe | SKILL.md, REFERENCES.md (links to GSAP and MDN), `agents/openai.yaml` (display metadata for another agent host, unused here), `demo/index.html` (self-contained, inline scroll script, no network calls) and `demo/preview.jpg`. |
