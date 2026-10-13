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

## Added 13 Oct 2026 (fourth batch: GSAP, Spline and awwwards-3d)

Requested by the owner after researching scroll-driven and 3D techniques. Every file was read before install. Hashes for the `npx skills add` installs are pinned in `skills-lock.json`. Installed copies were diffed against the upstream checkout and match byte for byte.

| skill | upstream | commit | notes |
|---|---|---|---|
| gsap-timeline | greensock/gsap-skills (official) | via `npx skills add` | Markdown only. Covers what Gemini called "GSAP ScrollTrigger Timeline Orchestration". |
| gsap-react | greensock/gsap-skills (official) | via `npx skills add` | Markdown only. `useGSAP`, cleanup, Next.js. |
| gsap-performance | greensock/gsap-skills (official) | via `npx skills add` | Markdown only. |
| spline-interactive | freshtechbro/claudedesignskills (MIT) | via `npx skills add` | Markdown plus two Python generators (`scripts/project_generator.py`, `component_builder.py`) that only write scaffold files locally. No network, no subprocess. Best registry match for "Spline-to-Web Interactive Canvas" (2.6K installs). |
| awwwards-3d | tsogjavklann/awwwards-3d (MIT) | 01072bd | **Vendored by hand.** `npx skills add` rejects its SKILL.md frontmatter, so it was copied from the reviewed checkout. The `docs/` GitHub Pages mirror and `.gitignore` were left out. Bundles four `.glb` models and four single-file HTML templates that load three, GSAP and Lenis from unpkg and esm.sh. `scripts/init_project.py` scaffolds a project (`--force` deletes the target folder first, so check the path) and can run `git init`. `scripts/export_glb.py` runs a local Blender binary headless and can optionally call `gltf-transform`. Neither script makes network calls. Not in `skills-lock.json`, so update it by hand. |

Gemini's three skill names ("Spline-to-Web Interactive Canvas", "GSAP ScrollTrigger Timeline Orchestration", "Frame-Scrubbing Canvas Player") do not exist on skills.sh. The rows above, plus `scroll-scrubbed-visual-sequence` from the third batch (installed in both sessions; the copies are identical), are the closest real skills.

Related upstream code repos (Lenis, react-three-fiber, Codrops ScrollAnimationsGrid, gsap-collection) are pinned as git submodules under `research/code-references/`. See the README there.

## Added 13 Oct 2026 (fifth batch: video editor skill, Higgsfield prompts)

The owner asked for a video editor skill for writing Higgsfield AI prompts (site hero video, scroll-scrubbed footage, promo reels). Every file was read or scanned before install. The installed copy was diffed against the reviewed checkout and matches byte for byte, minus the exclusions below.

| skill | upstream | commit | notes |
|---|---|---|---|
| higgsfield | OSideMedia/higgsfield-ai-prompt-skill (MIT), v3.40.0, specs snapshot 2026-09-26 | 7075497 | **Vendored by hand** into `.claude/skills/higgsfield/`, the install path the upstream README gives. Root `SKILL.md` is a dispatcher that reads 35 sub-skills under `skills/higgsfield-*/` by relative path; Claude Code registers only the root `higgsfield` skill. Prompt-writing only: it never calls Higgsfield itself. Generation goes through the Higgsfield MCP connector or the `higgsfield` CLI. Not in `skills-lock.json`, so update it by hand. |

Left out of the vendored copy (upstream maintainer tooling, not used by the skill at runtime):

- `CLAUDE.md`: upstream maintainer rules (`feat: vX.Y.Z` commit format, CHANGELOG on every change, release ceremony). Claude Code would load it as nested project memory when reading the skill and it conflicts with this repo's git rules.
- `.claude/`: upstream `settings.json` pre-allows `Bash(git push *)`, `Bash(gh *)` and `Edit(.claude/**)`, plus `/release`, `/validate` and `/refresh-specs` commands for maintaining that repo.
- `.github/`: CI and a weekly spec-drift job that needs a `HIGGSFIELD_CREDENTIALS` secret. Workflows do not run from a subfolder anyway.
- `tests/`: pytest suite for the upstream tooling; parts of it read the upstream git history, which is not here.
- `assets/fonts/`: 2.3 MB of DejaVu fonts used only by `scripts/generate_user_guide.py` to build a PDF user guide.

Security notes for `higgsfield`:

- All Python in `scripts/` and `evals/` is stdlib only. No network calls (no `urllib`, `requests`, `socket` or `http`). Every script resolves paths from its own location, so it can be run from the Aspley repo root.
- `scripts/higgsfield_memory.py` writes only under the skill's `db/` (or `$HF_DB_DIR` if set): filter and quality memory plus the per-project generation ledger in `db/ledger/`. Those writes will show up in `git status`; commit them only on purpose.
- `scripts/preflight.py` evaluates the platform's CEL rules with its own parser and never calls Python `eval`.
- `scripts/refresh_specs.py` and `snapshot_crosscheck.py` shell out to the local `higgsfield` CLI (read-only `model list` / `model get`). `validate.py` runs `git ls-files` and its own sibling scripts. `validate_user_guide.py` calls `pdftotext` if installed. Nothing else uses `subprocess`.
- `workspace/input|output|processed/` each carry a `.gitignore` that ignores everything but the README, so files dropped there stay local.
- Smoke-tested on install: `validate.py` passes (one optional-dependency skip for `fpdf2`), `preflight.py` and `seedance_lint.py` run against the bundled specs.
