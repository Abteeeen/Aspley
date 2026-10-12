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
