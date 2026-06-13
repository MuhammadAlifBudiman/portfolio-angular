# Roadmap — `portfolio-angular`

> Sequencing of features from `docs/product/FEATURE_SPEC.md`. Checkbox state reflects delivery; update on merge. Phases are ordered by dependency, not fixed dates.

## Phase 0 — Baseline (shipped · `v1.0.1`, 2026-04-11)
- [x] F000 Core portfolio shell (routes + single-page composition)
- [x] F00A About / identity
- [x] F00B Portfolio showcase (typed data model)
- [x] F00C Contact form (EmailJS)
- [x] F00D Dark/light theming baseline
- [x] Automated GitHub Pages deploy

## Phase 1 — Spec & Hygiene
- [x] Spec layer adopted (PRD, FEATURE_SPEC, USER_STORIES, ACCEPTANCE_CRITERIA, ARCHITECTURE, UAT)
- [x] F00E README version + commit-tooling correction (shipped: README=20.3.x; migrated to husky+commitlint, cz-customizable removed)
- [x] F00B refactor: extract portfolio cards to typed data model (prerequisite for F002) — PR #30
- [x] `app-button` accessibility audit (semantic `<a>`/`<button>` confirmed; spec covers both modes)
- [x] External-link `rel="noopener noreferrer"` audit (all 6 `target="_blank"` links verified)

## Phase 2 — Backlog Features
- [x] F001 Resume PDF (#8) — shipped PR #31
- [x] F003 Theme selector (#11) — shipped PR #34
- [x] F002 i18n EN/ID (#10) — after F00B data extraction · PR #48

## Phase 3 — Quality Pass (F00M · issue #49)
- [x] Lighthouse audit (A11y/BP/SEO ≥ 90) recorded — `docs/audits/2026-06-lighthouse.md` · A11y 100 / BP 100 / SEO 100 all routes
- [x] Open Graph/Twitter metadata verified truthful in `src/index.html` — `docs/audits/2026-06-social-metadata.md`
- [ ] UAT pass on all Phase 2 features (`docs/UAT.md`) — `docs/audits/2026-06-uat.md` (execution TODO)

## Phase 4 — Audit Remediation (audit 2026-06-06) · shipped
- [x] F00G Dev environment & CI quality (#35) — karma.conf, local env bootstrap, CI permissions · PR #41
- [x] F00H WCAG 2.1 AA accessibility remediation (#36) — contrast, landmarks, headings, cursor, ARIA · PR #41
- [x] F00I SEO, performance & social metadata (#37) — meta tags, structured data, per-route title · PR #41 (image WebP + prerender + manifest deferred)
- [x] F00J Security hardening (#38) — contact form spam guard, dependency updates, CI permissions · PR #41
- [x] F00K Content quality & UI correctness (#39) — copy, project cards, layout, mobile nav · PR #41 + commit e43d1dc
- [x] F00L Test coverage baseline (#40) — EmailService, ContactComponent, ThemeSelector, directives · PR #40

## Dependency Notes
- F002 dependency on F00B data extraction is satisfied.
- F003 dependency on a theme-token map is satisfied.
- No deploy/secret change proceeds without explicit owner approval.
