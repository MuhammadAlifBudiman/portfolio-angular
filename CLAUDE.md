# Claude Code Project Context: `portfolio-angular`

## Mission
Build and maintain a professional personal portfolio for **Muhammad Alif Budiman** using Angular, SCSS, and Tailwind CSS. The site must feel human-authored, specific, and evidence-based. Avoid generic AI-generated copy, generic SaaS gradients, random decorative UI, and unverified claims.

## Current Stack
- Angular app with standalone components.
- Package versions in `package.json`: Angular `^20.3.x`, Angular CLI `^20.3.x`, TypeScript `~5.9.3`, Tailwind CSS `^4.1.4`, Karma/Jasmine tests, EmailJS contact form.
- Styling entry points: `src/styles.scss`, `src/tailwind.css`, `src/fonts.scss`.
- Static assets: `public/` and `public/projects/`.
- Deployed through `.github/workflows/deploy.yml` using `npx ng deploy` to GitHub Pages with custom CNAME `muhammadalifbudiman.my.id`.

## Specification Layer (source of truth)
Read before planning any feature. Issues and code derive from these:
- `docs/product/PRD.md` — product intent, goals, scope.
- `docs/product/FEATURE_SPEC.md` — features + functional requirements (`Fxxx` IDs).
- `docs/product/USER_STORIES.md` + `docs/product/ACCEPTANCE_CRITERIA.md`.
- `docs/ROADMAP.md` — sequencing.
- `docs/architecture/ARCHITECTURE.md` + `docs/architecture/ADR-*.md` — system design.
- `docs/UAT.md` — acceptance/maintenance.

## Repository Map
- `src/app/pages/introduction/` — hero/introduction content.
- `src/app/pages/about-me/` — bio, photo, social links.
- `src/app/pages/portfolio/` — hard-coded project showcase cards.
- `src/app/pages/contact/` — contact form and contact metadata.
- `src/app/components/` — shared UI components.
- `src/app/services/email.service.ts` — EmailJS integration.
- `.github/ISSUE_TEMPLATE/` — GitHub issue forms.
- `.claude/agents/` — specialist subagents.
- `.claude/rules/` — path-scoped Claude project rules.
- `.claude/skills/` — manual Claude workflow commands.

## Mandatory Workflow
1. Confirm the work maps to a Feature ID in `docs/product/FEATURE_SPEC.md`; if not, update the spec first (or get explicit no-spec approval).
2. Before code changes, confirm or create a GitHub Issue that cites the Feature ID.
3. Link the issue to the `Portfolio V1.0` GitHub Project when available.
4. Work in small phases: research → plan → implement → test → review → ship.
5. Branch format: `type/issue-number-short-title`, e.g. `feat/11-theme-selector`.
6. Each implementation phase must name its verification command before editing.
7. Do not push, deploy, or change secrets without explicit user approval.

## Canonical Commands
- Install: `npm ci`
- Dev server: `npm start`
- Production build: `npm run build`
- Unit tests: `npm test -- --watch=false --browsers=ChromeHeadless`
- Deployment path: GitHub Actions deploy workflow on `main`.

## Quality Gates
Every non-trivial change must pass:
- `npm run build`
- affected unit tests or `npm test -- --watch=false --browsers=ChromeHeadless`
- manual review against `DESIGN.md`
- security review for contact form, environment files, external links, and dependencies
- accessibility review for keyboard access, semantics, focus, contrast, and alt text

## Design Rules
- Follow `DESIGN.md` for visual direction.
- Preserve the current dark/light token system unless the issue explicitly changes themes.
- UI must be clean, restrained, technical, and portfolio-specific.
- Do not copy another portfolio. Use references only for structure and quality benchmarks.
- Prefer concrete project evidence over inflated descriptors.

## Security Rules
- Never commit real secrets, EmailJS service IDs, template IDs, or public keys outside GitHub Secrets or generated environment files.
- Treat `src/environments/environment.ts` and `src/environments/environment.prod.ts` as generated/local files.
- Do not use unsanitized `innerHTML` or bypass Angular sanitization without a documented reason.
- External links opened with `_blank` must use safe `rel` attributes in HTML or equivalent runtime safeguards.
- Do not store sensitive data in `localStorage`; theme/language preference is acceptable.

## Testing Rules
- Add or update specs when adding component behavior, services, route logic, form logic, or utility functions.
- Keep tests deterministic; mock EmailJS and time-dependent behavior.
- A visual-only copy/style change may skip test additions, but build must still pass.

## Known Repository Issues To Respect
- README says Angular CLI `19.0.6`, while `package.json` uses Angular/CLI `20.3.x`; update README in a docs task.
- `package.json` references `cz-customizable`, but the dependency is not present in `package-lock.json`; verify before relying on `npm run commit`.
- Portfolio cards are currently hard-coded in HTML; data extraction can be a future refactor, not an incidental change.
- Public GitHub repository currently shows open issues #8, #10, and #11 linked to the `Portfolio V1.0` GitHub Project board.

## Specialist Agents
Use subagents when their focused context prevents main-session bloat:
- `portfolio-frontend-engineer` for Angular implementation.
- `portfolio-accessibility-auditor` for WCAG, keyboard, focus, contrast, semantics, and motion checks.
- `portfolio-ui-ux-reviewer` for design quality and anti-AI-slop review.
- `portfolio-qa-engineer` for tests and regression checks.
- `portfolio-security-analyst` for security and dependency review.
- `portfolio-seo-performance-analyst` for metadata, crawlability, performance, and accessibility.

## Useful Manual Skills
- `/start-portfolio-issue` — convert a request into an spec-first, issue-tracked implementation plan.
- `/implement-portfolio-issue` — implement one existing issue in gated phases.
- `/portfolio-review-gate` — perform final pre-PR review.

## Mandatory Source of Truth

- Product requirements live under `docs/product/` and `docs/specs/`.
- GitHub Issues are intake and execution trackers, not the sole source of requirements.
- Before editing source code, map the issue to a Feature ID and ensure the relevant spec has no `[NEEDS CLARIFICATION]` markers.
- For implementation work, create or update `spec.md`, `plan.md`, `tasks.md`, and `test-matrix.md` under `docs/specs/<feature-id-name>/`.
- Update `docs/TRACEABILITY_MATRIX.md` when feature status, issue, PR, or verification changes.
