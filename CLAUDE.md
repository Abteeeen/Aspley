# Aspley — Hotel Website

Rebuild of https://aspleyhotel.com.au/ for the Aspley Hotel, 1247 Gympie Road, Aspley QLD 4034, part of the Star Hotels Group.

It is a **pub, not an accommodation hotel**: bistro, bars, gaming room, sports bar with TAB, functions, drive-through bottle shop and the Star Rewards loyalty program. There are no rooms. The site's job is table bookings, function enquiries, event tickets, Star Rewards sign-ups and phone calls. Read `research/aspley-current-site/README.md` and `research/competitors/README.md` before any design work.

## Venue facts decided (owner approved 12 Oct 2026)

The current site contradicts itself. The owner told us to pick the best option and move forward:

- **Bistro hours:** lunch Sunday to Wednesday 11:30am to 2:30pm, dinner Sunday to Wednesday 5:30pm to 8:30pm, all-day dining Thursday to Saturday 11:30am to 8:30pm. This is the only version that covers all seven days.
- **Melbourne Cup, Tuesday 3 November 2026:** 2-course lunch, $55. The published Cup menu lists only entrées (Crispy Chicken Bites, Prawn Cocktail, Burrata) and mains (Miso Salmon, Pork Piccata, Pumpkin and Sage Gnocchi), so 2 courses is the verifiable figure.

## Mandatory design and engineering skills

Thirty-three skills are vendored in `.claude/skills/`. They are the source of truth for every UI, UX, React and video-prompt decision in this repo. Do not build site code without them. Upstream versions and commits are recorded in `.claude/skills/PROVENANCE.md`.

| Skill | Use it for | When |
|---|---|---|
| `frontend-design` | Aesthetic direction, typography, color, motion, layout. Prevents generic templated output. | Read fully before designing any page or component. |
| `ui-ux-pro-max` | Design system generation, palettes, font pairings, UX rules, stack guidance. Has a local search tool. | Generate and persist the design system first. Query before each new page or component. |
| `composition-patterns` | React component architecture: compound components, explicit variants, no boolean prop sprawl, React 19 APIs. | Before writing any shared component. |
| `react-best-practices` | React and Next.js performance: waterfalls, bundle size, rendering, server patterns. | While writing and when reviewing every component and page. |
| `web-design-guidelines` | Audit built UI against Vercel's Web Interface Guidelines (accessibility, UX, performance). Fetches current rules from Vercel's GitHub. | Run as a quality gate on every finished page before it is considered done. |
| `impeccable` | 24 design-director commands: `/impeccable init`, `shape`, `craft`, `critique`, `audit`, `polish`, `animate`, `bolder`, `quieter`, `typeset`, `colorize`, `layout`, `delight`, `harden`, `adapt`, `optimize`, `clarify`, `live`. Includes 59 deterministic design-slop detector rules. | Run `/impeccable init` once to write `PRODUCT.md`. Use `animate` for all motion work, `critique` and `polish` before any page is shown to the client. |
| `high-end-visual-design` | Premium agency look: fonts, spacing, card structure, motion. Bans cheap defaults. | Alongside `frontend-design` when setting direction. |
| `emil-design-eng` | Interaction polish: easing, durations, press feedback, when not to animate. | Every interactive component and transition. |
| `gsap-core`, `gsap-scrolltrigger`, `gsap-timeline`, `gsap-react`, `gsap-performance` | Official GSAP guidance for timelines and scroll-driven motion. | All JavaScript motion. Pair with `/impeccable animate` for what to animate and `emil-design-eng` for how it should feel. |
| `awwwards-3d` | Three.js + GSAP + Lenis scroll-driven 3D (camera paths, glass, post-processing). Locks three r170, GSAP 3.12.5, Lenis 1.1.0. | Only if a real 3D scene earns its cost on phones. The skill itself warns against decorative 3D. |
| `spline-interactive` | Spline scenes exported to React or vanilla JS. | Only if a designer builds the 3D in Spline. |
| `copywriting` | Conversion copy for hero, sections and CTAs without AI tells. | All site copy. Preserve the facts in `research/aspley-current-site/content-and-language.md`. |
| `baseline-ui` | Tailwind guardrails and fast deslop pass. | Review pass on every Tailwind component. |
| `shadcn` | Correct shadcn/ui CLI use and theming. | Only if the production build uses shadcn. |
| `core-web-vitals` | LCP, INP, CLS diagnosis and fixes. | Before launch and after any heavy media change. |
| `frontend-ui-engineering` | Production UI checklist: accessibility, responsive, states. | Pre-completion checklist. |
| `threejs-*` (10 skills: fundamentals, geometry, materials, lighting, textures, loaders, animation, interaction, shaders, postprocessing) | Three.js scene setup, WebGL shaders, touch interaction, post-processing. | Any WebGL or 3D moment. Pair with `/impeccable overdrive` for what is worth building and `core-web-vitals` for the phone budget. |
| `scroll-scrubbed-visual-sequence` | Reversible scroll-scrubbed video, image-sequence, canvas or WebGL stages with a sticky stage and normalized progress. | Video-on-scroll and frame-scrub scenes. Pair with `gsap-scrolltrigger`. |
| `higgsfield` (video editor skill) | Higgsfield AI video and image prompts: MCSLA formula (Model, Camera, Subject, Look, Action), model choice (Kling, Seedance, Veo, Soul, Nano Banana and others), named camera and motion presets, Cinema Studio, Marketing Studio ads, extend and edit existing clips, troubleshooting failed generations. Root `SKILL.md` routes to 35 sub-skills. | Before writing any Higgsfield prompt or generating footage or stills for the site and socials. See "Video editor skill" below. |
| `find-skills` | Discover and install further skills from skills.sh via `npx skills find` / `npx skills add`. | Whenever a task needs a capability none of the installed skills cover. See triggers below. |

### Rules

1. **Skills come first.** Read the relevant `SKILL.md` before writing code. Cite the skill rule when a decision is driven by it.
2. **Build on top of the skills, never around them.** If a skill and a personal default disagree, the skill wins. If two skills disagree: `impeccable` and `frontend-design` decide aesthetics (impeccable's command reference is more specific, so it wins ties; `high-end-visual-design` is advisory below them, and its font bans never override accessibility), `ui-ux-pro-max` decides palette and type data, `react-best-practices` decides performance, `composition-patterns` decides component API shape, `higgsfield` decides video prompt wording and model choice (how footage sits on the page is still `impeccable` and `frontend-design`; its weight on phones is `core-web-vitals`).
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

### Video editor skill (Higgsfield)

`.claude/skills/higgsfield/` is the vendored OSideMedia Higgsfield prompt library (v3.40.0, specs snapshot 2026-09-26). It writes prompts; it does not generate. Generation runs through the Higgsfield MCP connector or the `higgsfield` CLI, and both spend the owner's credits, so confirm before submitting a paid job.

- Follow its HARD RULES: open the root `SKILL.md` and `skills/higgsfield-prompt/SKILL.md` in full before any prompt, then the sub-skill its routing table names. Paths inside the skill (`skills/`, `templates/`, `specs/`) are relative to `.claude/skills/higgsfield/`.
- Its scripts resolve paths from their own location, so run them from the Aspley repo root:

  ```bash
  python3 .claude/skills/higgsfield/scripts/preflight.py --model <id> --param aspect_ratio=9:16 --param duration=8
  python3 .claude/skills/higgsfield/scripts/seedance_lint.py --model seedance_2_0 "<prompt>"
  python3 .claude/skills/higgsfield/scripts/higgsfield_memory.py log-gen aspley --model <id> --tags <tags> --outcome kept   # rejected needs --reason; vocab in db/ledger/README.md
  ```

- The skill's `workspace/` folders are git-ignored. Save prompt packs worth keeping in `design-system/aspley/video/` and commit them. Ledger rows written by `higgsfield_memory.py` land in `.claude/skills/higgsfield/db/ledger/aspley.json`; that is the one file inside the skill we write to on purpose.
- Venue guardrails for every prompt: the Aspley Hotel is a pub with no rooms, so never show hotel rooms or beds. Food and drink shots must match dishes on the real menus. Do not render identifiable real staff or patrons. Gambling advertising is regulated in Queensland, so no gaming-machine footage, and check with the owner before any TAB or gaming-room visual.
- Site footage also has to pass `core-web-vitals`, and scroll-driven footage is built with `scroll-scrubbed-visual-sequence`.

## When to reach for `find-skills` on this project

The upstream skill triggers on generic phrases. For the Aspley build, these are the project-specific triggers. When the owner or the agent hits any of these, run `npx skills find <query>` before hand-rolling a solution, verify install count and source per the skill's quality rules, and present options before installing.

| Owner says or agent needs | Search to run |
|---|---|
| "How do we show live room availability / connect to the booking engine" | `npx skills find booking engine`, `npx skills find siteminder`, `npx skills find hotel` |
| "Add Hotel / LocalBusiness / Restaurant schema so Google shows rooms and menus" | `npx skills find structured data`, `npx skills find seo schema` |
| "The hero video / gallery is slow" or Lighthouse is red | `npx skills find core web vitals`, `npx skills find image optimization`, `npx skills find lighthouse` |
| "Can we get the menus out of PDFs and into real pages" | `npx skills find pdf extract`, `npx skills find cms` |
| "Add a functions / events enquiry form that emails the venue" | `npx skills find forms`, `npx skills find email resend`, `npx skills find react email` |
| "Rooms need a photo gallery with lightbox and swipe" | `npx skills find gallery`, `npx skills find carousel`, `npx skills find embla` |
| "Make it feel more premium / more motion" beyond `/impeccable animate` | `npx skills find gsap`, `npx skills find framer motion`, `npx skills find view transitions` |
| "Check it on real phones / take screenshots for the client" | `npx skills find playwright`, `npx skills find webapp testing`, `npx skills find screenshot` |
| "Write the room descriptions / rewrite the copy in the hotel's voice" | `npx skills find copywriting`, `npx skills find brand voice`, `npx skills find writing guidelines` |
| "Is it accessible / will it pass WCAG" beyond `web-design-guidelines` | `npx skills find accessibility`, `npx skills find axe`, `npx skills find wcag` |
| "Deploy it / set up preview links for the client" | `npx skills find vercel deploy`, `npx skills find deploy` |
| "Add Google Analytics / track booking clicks / Meta pixel" | `npx skills find analytics`, `npx skills find gtm`, `npx skills find conversion tracking` |
| "Let the venue edit What's On and menus themselves" | `npx skills find sanity`, `npx skills find contentful`, `npx skills find payload cms` |
| "Pull the design from Figma" or "push this to Figma for the client" | `npx skills find figma` |
| "Build it with shadcn / Tailwind components" | `npx skills find shadcn`, `npx skills find tailwind` |
| "Add a map / directions / parking info" | `npx skills find maps`, `npx skills find google maps` |
| "Multi-language" (unlikely, but if asked) | `npx skills find i18n` |
| Any "can you do X" where X is not covered by the seven installed skills | `npx skills find X`, then check `https://skills.sh` leaderboard |

Rules for installing from a search: project-level install (`npx skills add <owner/repo> --skill <name>` run from the repo root, no `-g`), read `SKILL.md` and every bundled script first, record it in `.claude/skills/PROVENANCE.md`, commit skills separately from site code.

## Research

`research/` holds the pre-sales audit of the current site, competitor screenshots and comparisons, and the skills shortlist. Treat it as evidence for the pitch and as the brief for the rebuild. Do not delete screenshots; they are proof. `research/code-references/` pins Lenis, react-three-fiber and two GSAP demo repos as git submodules for reading only (`git submodule update --init --depth 1`). Read its README first; `gsap-collection` has no licence, so take ideas from it, not code.

## Git

- Work on the branch assigned for the session. Never push elsewhere without permission.
- Commit skills and config changes separately from site code.
