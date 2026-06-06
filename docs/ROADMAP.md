# Roadmap — `portfolio-angular`

> Sequencing of features from `docs/product/FEATURE_SPEC.md`. Checkbox state reflects delivery; update on merge. Phases are ordered by dependency, not fixed dates.

## Phase 0 — Baseline (shipped · `v1.0.1`, 2026-04-11)
- [x] F000 Core portfolio shell (routes + single-page composition)
- [x] F00A About / identity
- [x] F00B Portfolio showcase (hard-coded — debt)
- [x] F00C Contact form (EmailJS)
- [x] F00D Dark/light theming baseline
- [x] Automated GitHub Pages deploy

## Phase 1 — Spec & Hygiene (current)
- [ ] Spec layer adopted (PRD, FEATURE_SPEC, USER_STORIES, ACCEPTANCE_CRITERIA, ARCHITECTURE, UAT)
- [x] F00E README version + commit-tooling correction (shipped: README=20.3.x; migrated to husky+commitlint, cz-customizable removed)
- [x] F00B refactor: extract portfolio cards to typed data model (prerequisite for F002) — PR #30
- [x] `app-button` accessibility audit (semantic `<a>`/`<button>` confirmed; spec covers both modes)
- [x] External-link `rel="noopener noreferrer"` audit (all 6 `target="_blank"` links verified)

## Phase 2 — Backlog Features
- [x] F001 Resume PDF (#8) — shipped PR #31
- [ ] F003 Theme selector (#11)
- [ ] F002 i18n EN/ID (#10) — after F00B data extraction

## Phase 3 — Quality Pass
- [ ] Lighthouse audit (A11y/BP/SEO ≥ 90) recorded
- [ ] Open Graph/Twitter metadata verified truthful in `src/index.html`
- [ ] UAT pass on all Phase 2 features (`docs/UAT.md`)

## Dependency Notes
- F002 depends on F00B data extraction.
- F003 depends on a theme-token map existing before UI work (`DESIGN.md`).
- No deploy/secret change proceeds without explicit owner approval.
