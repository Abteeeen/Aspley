# Aspley — Hotel Website

Full brand and booking website for a hotel. Reference hotel and content are supplied by the owner as the project progresses.

## Mandatory design and engineering skills

Five skills are vendored in `.claude/skills/`. They are the source of truth for every UI, UX, and React decision in this repo. Do not build site code without them. Upstream versions and commits are recorded in `.claude/skills/PROVENANCE.md`.

| Skill | Use it for | When |
|---|---|---|
| `frontend-design` | Aesthetic direction, typography, color, motion, layout. Prevents generic templated output. | Read fully before designing any page or component. |
| `ui-ux-pro-max` | Design system generation, palettes, font pairings, UX rules, stack guidance. Has a local search tool. | Generate and persist the design system first. Query before each new page or component. |
| `composition-patterns` | React component architecture: compound components, explicit variants, no boolean prop sprawl, React 19 APIs. | Before writing any shared component. |
| `react-best-practices` | React and Next.js performance: waterfalls, bundle size, rendering, server patterns. | While writing and when reviewing every component and page. |
| `web-design-guidelines` | Audit built UI against Vercel's Web Interface Guidelines (accessibility, UX, performance). Fetches current rules from Vercel's GitHub. | Run as a quality gate on every finished page before it is considered done. |

### Rules

1. **Skills come first.** Read the relevant `SKILL.md` before writing code. Cite the skill rule when a decision is driven by it.
2. **Build on top of the skills, never around them.** If a skill and a personal default disagree, the skill wins. If two skills disagree, `frontend-design` decides aesthetics and `react-best-practices` decides performance.
3. **Do not edit vendored skill files.** Project-specific additions go in `CLAUDE.md` or in `design-system/`, not inside `.claude/skills/*`.
4. **Design system is persisted.** The `ui-ux-pro-max` output lives in `design-system/aspley/MASTER.md`. Read it before every page. Page overrides live in `design-system/aspley/pages/`. Never regenerate with `--force` without the owner's explicit approval.
5. **Audit before done.** Every page passes a `web-design-guidelines` review and a `react-best-practices` review before it is reported complete.

### Running the UI/UX Pro Max search tool

The upstream skill references `${CLAUDE_PLUGIN_ROOT}`. In this repo that variable is not set. Use the project-relative path from the repo root instead:

```bash
python3 .claude/skills/ui-ux-pro-max/scripts/search.py "<query>" --domain <domain>
python3 .claude/skills/ui-ux-pro-max/scripts/search.py "<query>" --design-system -p "Aspley" --persist --output-dir .
python3 .claude/skills/ui-ux-pro-max/scripts/search.py "<query>" --stack <stack>
```

Stack is decided once the framework is chosen and will be recorded here.

## Git

- Work on the branch assigned for the session. Never push elsewhere without permission.
- Commit skills and config changes separately from site code.
