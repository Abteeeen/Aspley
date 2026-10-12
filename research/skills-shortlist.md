# Skills shortlist — Aspley Hotel website (Next.js + Tailwind)

Researched 2026-10-12. Sources browsed: claudemarketplace.net (home, /skills, category pages, /search for ~20 topics), skills.sh (leaderboard, /topic/design, /topic/nextjs, /topic/testing, /topic/marketing, per-skill pages), github.com/anthropics/skills, github.com/vercel-labs/agent-skills, github.com/pbakaus/impeccable, ComposioHQ/awesome-claude-skills (76.9k stars), plus direct repo reads for every shortlisted skill.

**Already installed — not re-listed below:** `frontend-design`, `web-design-guidelines`, `react-best-practices`, `composition-patterns`, `ui-ux-pro-max`, `find-skills`, and the full `impeccable` skill (all 24 commands: `critique`, `polish`, `typeset`, `colorize`, `layout`, `animate`, `audit`, `optimize`, `harden`, `adapt`, `clarify`, `delight`, `onboard`, …). Because `impeccable` is installed whole, the impeccable sub-skills that appear as separate entries on the marketplaces (`polish`, `critique`, `distill`, `quieter`, `normalize`, `extract`, `onboard`) are already covered and are **not** recommended again.

Install counts are from skills.sh unless noted; stars are repo-level GitHub stars at time of research. "Audits" = the three automated scans skills.sh shows (Gen Agent Trust Hub / Socket / Snyk).

---

## 1. Ranked table

### Must-have (install before the first page is built)

| # | Skill | Source | Purpose for Aspley | Install |
|---|---|---|---|---|
| 1 | `high-end-visual-design` | Leonxlnx/taste-skill | Premium/"agency" aesthetic rules: bans default fonts/icons/borders, demands whitespace, editorial layouts, choreographed motion. The client-winning look. | `npx skills add https://github.com/leonxlnx/taste-skill --skill high-end-visual-design` |
| 2 | `emil-design-eng` | emilkowalski/skills | Interaction and motion craft (easing, duration, when *not* to animate, press feedback, reduced motion). Complements `/impeccable animate` with concrete CSS/Motion technique. | `npx skills add https://github.com/emilkowalski/skills --skill emil-design-eng` |
| 3 | `schema` | coreyhaines31/marketingskills | JSON-LD structured data: LocalBusiness, Event, BreadcrumbList, Organization, WebSite, FAQ. Needed for Google rich results on rooms, dining, functions, What's On. | `npx skills add https://github.com/coreyhaines31/marketingskills --skill schema` |
| 4 | `seo-audit` | coreyhaines31/marketingskills | Technical + on-page SEO audit with prioritised action plan; the pitch evidence against the current site, and the pre-launch gate. | `npx skills add https://github.com/coreyhaines31/marketingskills --skill seo-audit` |
| 5 | `core-web-vitals` | addyosmani/web-quality-skills | LCP/INP/CLS diagnosis and fixes using traces + CrUX; hero video/gallery-heavy hotel pages live or die on this. | `npx skills add https://github.com/addyosmani/web-quality-skills --skill core-web-vitals` |
| 6 | `accessibility` | addyosmani/web-quality-skills | WCAG 2.2 audit (keyboard, screen reader, contrast) beyond `web-design-guidelines`' lint-style rules. Hospitality sites have legal exposure here (DDA in Australia). | `npx skills add https://github.com/addyosmani/web-quality-skills --skill accessibility` |
| 7 | `webapp-testing` | anthropics/skills (official) | Playwright scripts against the local dev server: screenshots at phone/desktop widths for the client, console-error checks, flow verification. | `npx skills add https://github.com/anthropics/skills --skill webapp-testing` |
| 8 | `copywriting` | coreyhaines31/marketingskills | Homepage/landing/room/function page copy frameworks; turns the venue's notes into persuasive, scannable copy. | `npx skills add https://github.com/coreyhaines31/marketingskills --skill copywriting` |
| 9 | `baseline-ui` | ibelick/ui-skills | Tailwind-specific guardrails: ≤200 ms interactions, compositor-only animation, `h-dvh` not `h-screen`, `text-balance`, accessible primitives (Radix/Base UI/React Aria). Review mode reports violations with fixes. | `npx skills add https://github.com/ibelick/ui-skills --skill baseline-ui` |
| 10 | `shadcn` | shadcn-ui/ui (official) | Correct use of the shadcn CLI (`info --json`, `docs <component>`) so components are added and themed properly on Tailwind v4. | `npx skills add https://github.com/shadcn-ui/ui --skill shadcn` |

### Recommended (install when the relevant workstream starts)

| # | Skill | Source | Purpose for Aspley | Install |
|---|---|---|---|---|
| 11 | `react-view-transitions` | vercel-labs/agent-skills (official) | Native `<ViewTransition>` page/shared-element transitions in Next.js App Router, no animation library; e.g. room card → room detail morph. | `npx skills add https://github.com/vercel-labs/agent-skills --skill react-view-transitions` |
| 12 | `gsap-framer-scroll-animation` | github/awesome-copilot (GitHub-maintained) | Scroll-driven motion (GSAP ScrollTrigger / Motion v12 `useScroll`): hero parallax, pinned gallery, scroll reveals. Only if the design calls for it. | `npx skills add https://github.com/github/awesome-copilot --skill gsap-framer-scroll-animation` |
| 13 | `fixing-accessibility` | ibelick/ui-skills | Fix pass for ARIA labels, focus order, contrast, form error announcements — pairs with #6's audit. | `npx skills add https://github.com/ibelick/ui-skills --skill fixing-accessibility` |
| 14 | `cro` | coreyhaines31/marketingskills | Conversion optimisation for "Book Now", functions enquiry form, bottle-shop CTAs; covers form CRO and page CRO. | `npx skills add https://github.com/coreyhaines31/marketingskills --skill cro` |
| 15 | `analytics` | coreyhaines31/marketingskills | GA4 event-tracking plan (book-now clicks, enquiry submits, menu PDF opens, phone taps) and attribution. | `npx skills add https://github.com/coreyhaines31/marketingskills --skill analytics` |
| 16 | `deploy-to-vercel` | vercel-labs/agent-skills (official) | Preview deploys for client review; handles link/login/git-push paths and a no-auth "claimable" deploy. | `npx skills add https://github.com/vercel-labs/agent-skills --skill deploy-to-vercel` |
| 17 | `sanity-best-practices` | sanity-io/agent-toolkit (official vendor) | If the venue needs to self-edit What's On, menus, specials: schema design, GROQ, Visual Editing, Next.js integration. | `npx skills add https://github.com/sanity-io/agent-toolkit --skill sanity-best-practices` |
| 18 | `agent-browser` | vercel-labs/agent-browser (official) | Rust CLI: screenshots, visual diff, embedded axe-core a11y audit, `vitals` (LCP/CLS/INP), device emulation. Heavier alternative/complement to #7. | `npx skills add https://github.com/vercel-labs/agent-browser --skill agent-browser` then `npm i -g agent-browser && agent-browser install` |

### Optional (situational)

| # | Skill | Source | Purpose for Aspley | Install |
|---|---|---|---|---|
| 19 | `web-typography` | wondelai/skills | 10-point typography diagnostic (measure, line-height, font payload <200 KB, FOIT). Overlaps `/impeccable typeset`; useful as a second-opinion score. | `npx skills add https://github.com/wondelai/skills --skill web-typography` |
| 20 | `react-doctor` | millionco/react-doctor | Deterministic React/Next lint (state/effects, perf, a11y, security). CLI + skill; can gate PRs. | `npx react-doctor@latest install` (then `npx react-doctor@latest` from repo root) |
| 21 | `figma-generate-design` / `figma-use` | figma/mcp-server-guide (official Figma) | Push built pages into Figma for client sign-off, or pull a Figma comp into code. Requires the Figma MCP (already connected in this workspace). | `npx skills add https://github.com/figma/mcp-server-guide --skill figma-generate-design` |
| 22 | `react-email` + `resend` | resend/resend-skills (official vendor) | Functions/events enquiry form → branded confirmation email to venue and guest. Needs a Resend account/API key. | `npx skills add resend/resend-skills` (select `react-email`, `resend`) |
| 23 | `playwright-best-practices` | currents-dev/playwright-best-practices-skill | Only if a persistent e2e suite is wanted (visual regression, a11y tests, GitHub Actions). | `npx skills add https://github.com/currents-dev/playwright-best-practices-skill` |
| 24 | `claude-seo` plugin (`/seo local`, `/seo maps`, `/seo images`, `/seo schema`) | AgriciDaniel/claude-seo | Deep local-SEO toolkit: Google Business Profile, geo-grid, map pack, image optimisation analysis, Lighthouse multi-page runner. Very relevant for a suburban Brisbane venue, but it is a heavy plugin (Python runtime + Chromium + hooks + subagents). | `/plugin marketplace add AgriciDaniel/claude-seo` then `/plugin install claude-seo@agricidaniel-claude-seo` then `/seo setup` |
| 25 | `seo-aeo-best-practices` | sanity-io/agent-toolkit | SEO/AEO (AI answer engines) incl. JSON-LD, OG, sitemaps, hreflang. Overlaps #3/#4; take it only if Sanity is adopted. | `npx skills add https://github.com/sanity-io/agent-toolkit --skill seo-aeo-best-practices` |
| 26 | `writing-guidelines` | vercel-labs/agent-skills (official) | Prose review against Vercel's writing handbook. Docs-oriented; marginal for marketing copy. | `npx skills add https://github.com/vercel-labs/agent-skills --skill writing-guidelines` |
| 27 | `vercel-optimize` | vercel-labs/agent-skills (official) | Post-launch: cost/caching/reliability audit from Vercel metrics. Needs a deployed, linked project. | `npx skills add https://github.com/vercel-labs/agent-skills --skill vercel-optimize` |

### Checked and rejected / no good skill exists

- **Hospitality-specific:** nothing worth installing. Search found `hospitality-expert` (personamanagmentlayer/pcl — PMS/front-desk data structures, not web), `hotel-receptionist`, `pricewin-booking-assistant`, `booking-cli` (Booking.com search), `manage-booking` — all operational or consumer-side, none about building a hotel website or integrating a booking engine (SiteMinder, Mews, RMS, Little Hotelier). Booking-engine integration will be hand-rolled from the vendor's docs.
- **Next.js framework skill:** `vercel-labs/next-skills` has retired `next-best-practices`; Next.js ≥16.3 auto-generates `AGENTS.md`/`CLAUDE.md` from bundled docs, and on ≤16.1 run `npx @next/codemod@canary agents-md`. Do that instead of installing a Next.js skill.
- **Image optimisation:** no standalone quality skill. Covered by `react-best-practices` (already installed), #5 `core-web-vitals`, and `/seo images` in #24. `baoyu-compress-image` (jimliu/baoyu-skills, 18.3k stars) is a WebP batch-compress helper if an asset pipeline is needed; it shells out to image tools, so review before use.
- **Forms (react-hook-form/zod):** no credible skill found on any registry; `jezweb/claude-skills` lists one but it is not in the repo any more. Use #14 `cro` for form UX and hand-write the validation layer.
- **Tailwind v4 reference skills:** only small community ones (paulrberg, vudovn, joe-bell/cva). `baseline-ui` (#9) plus Tailwind's own docs are a better bet.
- **Brand voice:** `arnabbagxd/brand-building-skills --skill brand-voice` and `rampstackco/claude-skills brand-voice` produce voice guides; neither is hospitality-specific and `copywriting` (#8) plus `/impeccable init` (PRODUCT.md) covers the need. Revisit only if the client wants a formal tone-of-voice document.
- **i18n / email-marketing / Three.js:** not needed for this brief.
- **squirrelscan `audit-website`:** requires a third-party CLI and account; skipped.
- **lackeyjb/playwright-skill:** solid (3.2k stars, MIT) but runs `npm run setup` to install Playwright + Chromium and a `run.js` executor; `webapp-testing` (official) covers the same ground with less surface.

---

## 2. Per-skill details

### 1. high-end-visual-design
- **Source:** https://github.com/Leonxlnx/taste-skill — path `soft-skill/` (install name `high-end-visual-design`). skills.sh: https://skills.sh/leonxlnx/taste-skill/high-end-visual-design
- **Stars / installs:** 94.7k stars; 431K installs.
- **Purpose:** Enforces a premium-agency aesthetic: bans Inter/Roboto/Arial/Helvetica and thick icon sets; prescribes large whitespace (`py-24`–`py-40`), nested "double-bezel" cards, asymmetric/editorial layouts, custom cubic-bezier motion on transform/opacity only, staggered IntersectionObserver reveals; three "vibe archetypes" (Ethereal Glass, Editorial Luxury, Soft Structuralism).
- **Why for Aspley:** This is the single biggest lever for a site that *looks* expensive. "Editorial Luxury" maps directly to a hotel/dining brand. Use it to steer `frontend-design` away from generic output.
- **Install:** `npx skills add https://github.com/leonxlnx/taste-skill --skill high-end-visual-design`
- **License:** MIT.
- **Trust:** Community (single author, very widely installed). Markdown only in the skill folder; all three skills.sh audits pass. Repo root has `install.sh`/`skill.sh` but the `npx skills add` path does not run them. Caution: it has no contrast/accessibility rules, so pair with #6/#9 and let `web-design-guidelines` win on contrast. Per CLAUDE.md rule 2, `impeccable`/`frontend-design` still decide ties.

### 2. emil-design-eng
- **Source:** https://github.com/emilkowalski/skills — path `skills/emil-design-eng/`. skills.sh: https://skills.sh/emilkowalski/skills/emil-design-eng
- **Stars / installs:** 45.5k stars; 344K installs.
- **Purpose:** Emil Kowalski's design-engineering rules: the "frequency rule" (never animate high-repeat actions), purposeful motion, easing/duration selection, press feedback, origin-aware popovers, gestures, `prefers-reduced-motion`, `@starting-style`, WAAPI, Motion (`useSpring`, `useInView`). Includes a mandatory Before/After review table.
- **Why for Aspley:** `/impeccable animate` says *what* to animate; this says *how*, with production CSS/Motion patterns. Also gives a concrete motion review checklist for the client demo.
- **Install:** `npx skills add https://github.com/emilkowalski/skills --skill emil-design-eng`
- **License:** MIT.
- **Trust:** Community (well-known design engineer, Vercel alumni). Single SKILL.md, no scripts; audits pass. Sibling skills `review-animations`, `animation-performance`, `break-ui` (worst-case data testing) are worth adding later from the same repo.

### 3. schema
- **Source:** https://github.com/coreyhaines31/marketingskills — path `skills/schema/`. skills.sh: https://skills.sh/coreyhaines31/marketingskills/schema
- **Stars / installs:** 54.3k stars; 70.9K installs.
- **Purpose:** Implements and validates JSON-LD. Covers Organization, WebSite, LocalBusiness, Event, BreadcrumbList, Article, Product, FAQPage/HowTo (with the warning Google no longer shows rich results for FAQ/HowTo). Workflow: assess → confirm Google support → implement → validate (Schema.org validator, Rich Results Test) → monitor GSC.
- **Why for Aspley:** Rooms, restaurant, bar, functions and gig listings all benefit from structured data; `Event` for What's On, `BreadcrumbList` site-wide, `LocalBusiness` with opening hours/geo for the map pack. **Gap:** it does not cover `Hotel`/`LodgingBusiness`, `Restaurant`, `BarOrPub`, `Menu`/`MenuItem`, `Offer`/`Room`; add those by hand from schema.org and validate the same way.
- **Install:** `npx skills add https://github.com/coreyhaines31/marketingskills --skill schema`
- **License:** MIT.
- **Trust:** Community (Corey Haines, marketer; most-installed marketing skill set). Markdown + `references/schema-examples.md`; no scripts; audits pass.

### 4. seo-audit
- **Source:** https://github.com/coreyhaines31/marketingskills — path `skills/seo-audit/`.
- **Stars / installs:** 54.3k stars; ~78K installs (claudemarketplace.net).
- **Purpose:** Technical and on-page SEO audit producing a prioritised action plan (crawlability, metadata, headings, internal links, canonical, sitemap/robots).
- **Why for Aspley:** Run it on the *current* aspleyhotel site for the pitch deck, then on the rebuild before launch. Pairs with `site-architecture` (same repo) if the IA is contested.
- **Install:** `npx skills add https://github.com/coreyhaines31/marketingskills --skill seo-audit` (or install several at once: `npx skills add coreyhaines31/marketingskills --skill schema seo-audit copywriting cro analytics`)
- **License:** MIT.
- **Trust:** Community; markdown only; audits pass.

### 5. core-web-vitals
- **Source:** https://github.com/addyosmani/web-quality-skills — path `skills/core-web-vitals/`. skills.sh: https://skills.sh/addyosmani/web-quality-skills/core-web-vitals
- **Stars / installs:** 2.9k stars; 29.8K installs.
- **Purpose:** Targeted LCP/INP/CLS optimisation: check CrUX p75, record a performance trace, analyse only insights tied to the failing metric, re-measure. Uses Chrome DevTools MCP when present; otherwise Lighthouse CLI / PageSpeed Insights / static inspection. Distinguishes measured failures from source-code hypotheses.
- **Why for Aspley:** Full-bleed hero imagery/video, galleries and web fonts are the classic hotel-site LCP/CLS killers. Gives a repeatable, evidence-based perf gate.
- **Install:** `npx skills add https://github.com/addyosmani/web-quality-skills --skill core-web-vitals`
- **License:** MIT.
- **Trust:** Community but authored by Addy Osmani (Chrome team). Markdown + `references/`; no scripts; audits pass. Optional dependency on Chrome DevTools MCP (`npx chrome-devtools-mcp`) for live traces. Sibling `web-quality-audit` orchestrates all six skills if a one-shot full audit is wanted.

### 6. accessibility
- **Source:** https://github.com/addyosmani/web-quality-skills — path `skills/accessibility/`.
- **Stars / installs:** 2.9k stars (repo).
- **Purpose:** WCAG 2.2 audit: Lighthouse accessibility, rendered accessibility-tree snapshots, keyboard/screen-reader manual checks.
- **Why for Aspley:** `web-design-guidelines` is a code-lint; this is an outcome-level audit. Public venues in Australia carry DDA obligations, and accessibility is a differentiator in the pitch.
- **Install:** `npx skills add https://github.com/addyosmani/web-quality-skills --skill accessibility`
- **License:** MIT. **Trust:** as #5.

### 7. webapp-testing
- **Source:** https://github.com/anthropics/skills — path `skills/webapp-testing/`. skills.sh: https://skills.sh/anthropics/skills/webapp-testing
- **Stars / installs:** 180.6k stars (repo); 175K installs.
- **Purpose:** Agent writes Python Playwright scripts against the local app; `scripts/with_server.py` starts/stops `npm run dev` (multi-server capable); examples for element discovery, static HTML, console-log capture.
- **Why for Aspley:** Phone/tablet/desktop screenshots of every page for the client, booking-flow smoke tests, console-error sweeps before each demo.
- **Install:** `npx skills add https://github.com/anthropics/skills --skill webapp-testing`. Requires Python 3 + `pip install playwright && playwright install chromium`.
- **License:** Open-source Anthropic skill (repo README: non-document skills are Apache-2.0; confirm in the skill's `LICENSE.txt`).
- **Trust:** Official Anthropic. Bundles `scripts/with_server.py` and `examples/*.py`; skills.sh shows Socket/Snyk "Warn" purely because scripts are present. Read `with_server.py` before first run (it spawns the dev server command you pass it).

### 8. copywriting
- **Source:** https://github.com/coreyhaines31/marketingskills — path `skills/copywriting/`.
- **Stars / installs:** 54.3k stars; ~69K installs.
- **Purpose:** Frameworks for homepage, landing, feature and about pages; headline/subhead/CTA patterns; reads a product-marketing context doc if present.
- **Why for Aspley:** Rooms, dining, bar, functions and bottle-shop pages each need distinct, non-generic copy from thin client notes. Pair with `/impeccable clarify` for UX microcopy and `copy-editing` (same repo) for polishing client-supplied text.
- **Install:** `npx skills add https://github.com/coreyhaines31/marketingskills --skill copywriting`
- **License:** MIT. **Trust:** community; markdown only; audits pass.

### 9. baseline-ui
- **Source:** https://github.com/ibelick/ui-skills — path `skills/baseline-ui/`. skills.sh: https://skills.sh/ibelick/ui-skills/baseline-ui
- **Stars / installs:** 9.6k stars; 22.1K installs.
- **Purpose:** Tailwind-project guardrails: interactions ≤200 ms, animate only compositor props, respect `prefers-reduced-motion`, accessible primitives for interactive elements, `text-balance` on headings, `tabular-nums` on prices/data, `h-dvh` over `h-screen`, no arbitrary z-index. Review mode reports violations with snippet + fix.
- **Why for Aspley:** Stops the small Tailwind sins that make a premium site feel cheap on mobile (viewport jump, janky hover, orphaned headings). Fast to run on every component.
- **Install:** `npx skills add https://github.com/ibelick/ui-skills --skill baseline-ui`
- **License:** MIT.
- **Trust:** Community (Julien Thibeaut, design engineer). Markdown only; audits pass. The repo also ships an `npx ui-skills` CLI and MCP; not needed.

### 10. shadcn
- **Source:** https://github.com/shadcn-ui/ui — skill `shadcn`. skills.sh: https://skills.sh/shadcn-ui/ui/shadcn
- **Stars / installs:** 125.3k stars; 102K installs.
- **Purpose:** Teaches the agent to drive the shadcn CLI correctly (`shadcn@latest info --json`, `shadcn@latest docs <component>`, add components via the project's package runner).
- **Why for Aspley:** If shadcn/Radix is the component base (likely with Tailwind v4), this prevents hand-rolled or stale component code and keeps theming consistent with `design-system/aspley/MASTER.md`.
- **Install:** `npx skills add https://github.com/shadcn-ui/ui --skill shadcn`
- **License:** MIT.
- **Trust:** Official vendor. SKILL.md contains shell-command directives (it tells the agent to run the shadcn CLI), hence Socket/Snyk "Warn"; no bundled scripts. Acceptable.

### 11. react-view-transitions
- **Source:** https://github.com/vercel-labs/agent-skills — path `skills/react-view-transitions/`.
- **Stars / installs:** 32.3k stars.
- **Purpose:** React `<ViewTransition>` (bundled with Next.js App Router's React canary): shared-element morphs, Suspense reveals, directional page transitions via `transitionTypes` on `next/link`/`useRouter`, required reduced-motion CSS block. Chromium 125+/Safari 18.2+/Firefox 144+, graceful fallback.
- **Why for Aspley:** Room card → room page image morph and dining/bar section transitions without adding Motion/GSAP weight.
- **Install:** `npx skills add https://github.com/vercel-labs/agent-skills --skill react-view-transitions`
- **License:** MIT. **Trust:** Official Vercel; markdown + `references/`; no scripts.

### 12. gsap-framer-scroll-animation
- **Source:** https://github.com/github/awesome-copilot — path `skills/gsap-framer-scroll-animation/`.
- **Stars / installs:** 33k stars (repo); ~2.6K installs.
- **Purpose:** Scroll-driven motion with GSAP ScrollTrigger (`@gsap/react` `useGSAP`, pinning, scrub, horizontal scroll, Lenis) and Motion v12 (`useScroll`, `useTransform`, `whileInView`); rules: transform/opacity only, reduced-motion check. References a companion `premium-frontend-ui` skill for the "why".
- **Why for Aspley:** Only if the design direction wants cinematic scroll (pinned gallery, parallax hero). Otherwise skip — `emil-design-eng` + view transitions are lighter.
- **Install:** `npx skills add https://github.com/github/awesome-copilot --skill gsap-framer-scroll-animation`
- **License:** awesome-copilot repo is MIT (verify in repo LICENSE). **Trust:** GitHub-maintained community collection; markdown + `references/`; no scripts.

### 13. fixing-accessibility
- **Source:** https://github.com/ibelick/ui-skills — path `skills/fixing-accessibility/`.
- **Purpose:** Fix-oriented pass: ARIA labels, keyboard navigation, focus management, contrast, form error handling.
- **Why for Aspley:** Turn #6's findings into code changes, especially on the enquiry/booking forms.
- **Install:** `npx skills add https://github.com/ibelick/ui-skills --skill fixing-accessibility`
- **License:** MIT. **Trust:** as #9.

### 14. cro
- **Source:** https://github.com/coreyhaines31/marketingskills — path `skills/cro/` (appears on marketplaces as `page-cro`/`form-cro`).
- **Purpose:** Conversion analysis for landing pages and forms: hierarchy, friction, CTA placement, trust signals.
- **Why for Aspley:** The site's job is bookings, table reservations and function enquiries. Apply to Book Now placement, functions form length, bottle-shop specials.
- **Install:** `npx skills add https://github.com/coreyhaines31/marketingskills --skill cro`
- **License:** MIT. **Trust:** community; markdown only.

### 15. analytics
- **Source:** https://github.com/coreyhaines31/marketingskills — path `skills/analytics/` (listed as `analytics-tracking`).
- **Purpose:** Event-tracking plans, GA4 setup, attribution frameworks.
- **Why for Aspley:** Define and implement booking-click, phone-tap, enquiry-submit, menu-download events; gives the client proof of ROI. (PostHog alternative: official plugin moved to `PostHog/ai-plugin`, `claude plugin install posthog`.)
- **Install:** `npx skills add https://github.com/coreyhaines31/marketingskills --skill analytics`
- **License:** MIT. **Trust:** community; markdown only.

### 16. deploy-to-vercel
- **Source:** https://github.com/vercel-labs/agent-skills — path `skills/deploy-to-vercel/`.
- **Purpose:** Preview-by-default deploys; detects git remote/`.vercel` link/CLI login and picks git-push, `vercel deploy`, link-then-deploy, or a no-auth "claimable" deploy (returns Preview URL + Claim URL to transfer into the owner's account). Confirms before pushing or choosing a team.
- **Why for Aspley:** Shareable preview links for the client at each milestone without manual Vercel setup.
- **Install:** `npx skills add https://github.com/vercel-labs/agent-skills --skill deploy-to-vercel`
- **License:** MIT.
- **Trust:** Official Vercel. **Bundles `resources/deploy.sh` and `resources/deploy-codex.sh`** which tar the project (excluding `node_modules`, `.git`, `.env`) and upload it to Vercel for the no-auth path. Read both before use; prefer the authenticated git-push path for this project.

### 17. sanity-best-practices
- **Source:** https://github.com/sanity-io/agent-toolkit — path `skills/sanity-best-practices/`.
- **Stars / installs:** 188 stars.
- **Purpose:** Schema design, GROQ performance, TypeGen, Visual Editing, Portable Text, images, localisation, migrations, Next.js integration; 25 reference guides.
- **Why for Aspley:** If the venue must edit What's On, menus, specials and function packages themselves, Sanity + Next.js is the lowest-friction headless CMS and this is the vendor's own guidance. Companion repo `sanity-io/next-sanity` has `sanity-live-cache-components` for Next 16 cache components.
- **Install:** `npx skills add https://github.com/sanity-io/agent-toolkit --skill sanity-best-practices` (also `/plugin install sanity@claude-plugins-official` for MCP + slash commands).
- **License:** MIT. **Trust:** Official vendor; markdown + `references/`; no scripts in skill folders. Decide CMS first; do not install speculatively.

### 18. agent-browser
- **Source:** https://github.com/vercel-labs/agent-browser — skill `skills/agent-browser/`. skills.sh: https://skills.sh/vercel-labs/agent-browser/agent-browser
- **Stars / installs:** 43.8k stars; 1.1M installs.
- **Purpose:** Rust CLI for agents: accessibility-tree snapshots with element refs, full-page/annotated screenshots, `diff screenshot --baseline` visual regression, `a11y` (embedded axe-core), `vitals` (LCP/CLS/TTFB/FCP/INP), device emulation, HAR/trace/video.
- **Why for Aspley:** One tool for screenshots, a11y and vitals on the running site; good for client-facing before/after evidence. Overlaps #5/#6/#7, so treat as an upgrade path rather than day-one.
- **Install:** `npx skills add https://github.com/vercel-labs/agent-browser --skill agent-browser`, then `npm i -g agent-browser && agent-browser install` (downloads Chrome for Testing). The SKILL.md is a stub; the real guide is `agent-browser skills get core`.
- **License:** Apache-2.0. **Trust:** Official Vercel Labs; installs a native binary and a browser — larger footprint than #7. Snyk "Warn".

### 19. web-typography
- **Source:** https://github.com/wondelai/skills — `web-typography`. skills.sh: https://skills.sh/wondelai/skills/web-typography
- **Stars / installs:** 2.4k stars; 8.5K installs.
- **Purpose:** Type pairing/implementation guide with a 10-row diagnostic (≥16 px body, measure <75ch, line-height ≥1.4, font payload <200 KB, fallbacks, survives 200% zoom) scored /10.
- **Why for Aspley:** Second opinion after `/impeccable typeset` and `ui-ux-pro-max` pairing data; the payload and FOIT checks tie into #5.
- **Install:** `npx skills add https://github.com/wondelai/skills --skill web-typography`
- **License:** MIT. **Trust:** community; markdown only; audits pass. Sibling `refactoring-ui` (Wathan/Schoger principles) is a good optional too.

### 20. react-doctor
- **Source:** https://github.com/millionco/react-doctor
- **Stars:** 15k. **Purpose:** Deterministic React checks (state/effects, performance, architecture, security, accessibility, maintainability) for Next.js/Vite; `scan <url>` records a DevTools trace; CI mode comments on PRs.
- **Why for Aspley:** Catches agent-written React mistakes `react-best-practices` describes but cannot enforce.
- **Install:** `npx react-doctor@latest install` (adds the skill for Claude Code); run `npx react-doctor@latest` from repo root.
- **License:** MIT. **Trust:** Community (Million.js team). It is a CLI, collects anonymous telemetry (`--no-telemetry` to opt out).

### 21. figma-generate-design / figma-use
- **Source:** https://github.com/figma/mcp-server-guide — skills `figma-generate-design`, `figma-use`, `implement-design`.
- **Stars:** 1.4k. **Purpose:** Official guides for the Figma MCP: push code pages into Figma with design-system components, or implement a Figma node as code.
- **Why for Aspley:** Client sign-off on comps in Figma, or if the client supplies Figma files. The Figma MCP is already connected in this workspace, and its server instructions say to load these skills before `use_figma`/`get_design_context`.
- **Install:** `npx skills add https://github.com/figma/mcp-server-guide --skill figma-generate-design` (and `--skill figma-use`).
- **License:** check repo (not shown on listing). **Trust:** Official Figma; markdown; relies on the MCP, no scripts.

### 22. react-email + resend
- **Source:** https://github.com/resend/resend-skills — `react-email`, `resend`, `email-best-practices`.
- **Stars:** 200. **Purpose:** Build HTML emails from React components; send via Resend API; deliverability/compliance guidance.
- **Why for Aspley:** Functions/events enquiry and table-booking confirmations emailed to venue and guest, on-brand.
- **Install:** `npx skills add resend/resend-skills` then select `react-email` and `resend`. Needs `RESEND_API_KEY` and a verified sending domain.
- **License:** MIT. **Trust:** Official vendor; markdown; requires an external paid/free-tier account.

### 23. playwright-best-practices
- **Source:** https://github.com/currents-dev/playwright-best-practices-skill
- **Stars:** 395. **Purpose:** 57 reference docs (selectors, fixtures, visual regression, axe a11y tests, CI sharding, GitHub Actions).
- **Why for Aspley:** Only if a maintained e2e suite is in scope; otherwise #7 suffices.
- **Install:** `npx skills add https://github.com/currents-dev/playwright-best-practices-skill`
- **License:** MIT. **Trust:** vendor (Currents.dev) community skill; markdown only.

### 24. claude-seo (plugin)
- **Source:** https://github.com/AgriciDaniel/claude-seo
- **Stars:** 18.7k. **Purpose:** 30+ `/seo` commands: `audit`, `technical`, `schema`, `images`, `local` (GBP, citations, reviews, map pack), `maps` (geo-grid), `sitemap`, `google` (GSC/PageSpeed/CrUX/GA4), `unlighthouse` multi-page Lighthouse.
- **Why for Aspley:** Local SEO is where a suburban hotel wins or loses ("hotel near Aspley", "function rooms Brisbane north"); nothing else on the registries covers GBP/map-pack work.
- **Install:** `/plugin marketplace add AgriciDaniel/claude-seo` → `/plugin install claude-seo@agricidaniel-claude-seo` → `/seo setup`.
- **License:** MIT (FLOW prompts CC BY 4.0).
- **Trust:** Community, large surface. `install.sh` git-clones a pinned tag and copies skills, hooks and subagents into `~/.claude/`; `/seo setup` creates an isolated Python runtime and downloads Chromium; `scripts/render_page.py`/`fetch_page.py` fetch live URLs. Review before installing; install user-level, not into this repo; consider only after the site is live.

### 25–27. seo-aeo-best-practices, writing-guidelines, vercel-optimize
- `seo-aeo-best-practices` (sanity-io/agent-toolkit, MIT, official vendor, markdown): JSON-LD/OG/sitemaps/EEAT; redundant with #3/#4 unless Sanity is adopted.
- `writing-guidelines` (vercel-labs/agent-skills, MIT, official): WebFetches `vercel-labs/writing-guidelines/main/command.md` at review time (network dependency, no scripts); docs-flavoured, marginal for marketing copy.
- `vercel-optimize` (vercel-labs/agent-skills, MIT, official): post-launch Vercel cost/caching audit; needs a linked deployed project.

---

## 3. Suggested install order

All installs run from the repo root, project-level (no `-g`), per CLAUDE.md: read `SKILL.md` and every bundled script first, record the commit/hash in `.claude/skills/PROVENANCE.md`, commit skills separately from site code. The `skills` CLI pins hashes in `skills-lock.json`.

**Phase 0 — before any page is designed (today)**
1. `npx skills add https://github.com/leonxlnx/taste-skill --skill high-end-visual-design`
2. `npx skills add https://github.com/emilkowalski/skills --skill emil-design-eng`
3. `npx skills add https://github.com/ibelick/ui-skills --skill baseline-ui`
4. `npx skills add https://github.com/wondelai/skills --skill web-typography` (optional)
   Then add a conflict rule to CLAUDE.md: `high-end-visual-design` informs aesthetics but `impeccable`/`frontend-design` decide ties, and `web-design-guidelines`/`accessibility` override its font/contrast bans where accessibility is affected.

**Phase 1 — scaffold (once Next.js + Tailwind are initialised)**
5. `npx skills add https://github.com/shadcn-ui/ui --skill shadcn` (if shadcn is chosen)
6. `npx @next/codemod@canary agents-md` (or rely on Next ≥16.3 auto-generated `AGENTS.md`) — framework docs instead of a Next.js skill
7. `npx skills add https://github.com/vercel-labs/agent-skills --skill react-view-transitions`
8. `npx react-doctor@latest install` (optional CI gate)

**Phase 2 — content and SEO (as pages are written)**
9. `npx skills add coreyhaines31/marketingskills --skill copywriting schema seo-audit cro analytics`
10. Hand-add `Hotel`/`LodgingBusiness`, `Restaurant`, `BarOrPub`, `Menu`, `Event`, `Offer` JSON-LD that `schema` does not template; validate with Rich Results Test.
11. `npx skills add https://github.com/github/awesome-copilot --skill gsap-framer-scroll-animation` (only if the approved design calls for scroll choreography)

**Phase 3 — quality gates (before every client demo)**
12. `npx skills add https://github.com/anthropics/skills --skill webapp-testing` + `pip install playwright && playwright install chromium`
13. `npx skills add https://github.com/addyosmani/web-quality-skills --skill core-web-vitals`
14. `npx skills add https://github.com/addyosmani/web-quality-skills --skill accessibility`
15. `npx skills add https://github.com/ibelick/ui-skills --skill fixing-accessibility`
16. Optionally `npx skills add https://github.com/vercel-labs/agent-browser --skill agent-browser` + `npm i -g agent-browser && agent-browser install` if visual-diff/axe/vitals in one tool is wanted.

**Phase 4 — ship (preview links, CMS, email)**
17. `npx skills add https://github.com/vercel-labs/agent-skills --skill deploy-to-vercel` (read `resources/deploy.sh` first; prefer the authenticated git-push path)
18. If CMS approved: `npx skills add https://github.com/sanity-io/agent-toolkit --skill sanity-best-practices`
19. If enquiry emails approved: `npx skills add resend/resend-skills` (select `react-email`, `resend`)
20. If Figma sign-off wanted: `npx skills add https://github.com/figma/mcp-server-guide --skill figma-generate-design --skill figma-use`

**Post-launch**
21. `claude-seo` plugin for Google Business Profile / map-pack work (user-level install, after security review)
22. `vercel-optimize` once the project is linked and has traffic.
