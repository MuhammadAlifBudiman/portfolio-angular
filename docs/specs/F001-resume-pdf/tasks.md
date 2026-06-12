# Task Breakdown: F001 — Resume PDF

Feature ID: F001  
GitHub Issue: #8

## Tasks

- [x] Confirm spec has no unresolved clarification markers.
- [x] Create implementation branch `feat/8-resume-pdf` from `main`.
- [x] Rename spec folder from `F008-resume-pdf` to `F001-resume-pdf`.
- [x] Rewrite spec.md, plan.md, tasks.md, test-matrix.md with FR-F001-* content.
- [ ] Extend `ButtonComponent` with optional `href`, `download`, `ariaLabel` inputs.
- [ ] Add Download Resume `<app-button>` to `about-me.component.html`.
- [ ] Update `about-me.component.ts` with typed resume properties.
- [ ] Add anchor-mode tests to `button.component.spec.ts`.
- [ ] Create `about-me.component.spec.ts` asserting Download Resume anchor.
- [ ] `npm run build` passes.
- [ ] `npm test -- --watch=false --browsers=ChromeHeadless` passes.
- [ ] Update `docs/ROADMAP.md` (check F00B, F001 in progress).
- [ ] Update `docs/TRACEABILITY_MATRIX.md` F001 row.
- [ ] Add `public/resume.pdf` (owner supplies real file before manual UAT).
- [ ] Open PR linked to issue #8.
- [ ] Manual UAT: Tab focus → visible ring; Enter/click → PDF download.
