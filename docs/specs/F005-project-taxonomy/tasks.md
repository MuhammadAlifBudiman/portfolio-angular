# Task Breakdown: F005 — Project Taxonomy, Featured Hierarchy & Filtering

Feature ID: F005
GitHub Issue: TBD

## Tasks

- [ ] Confirm spec has no `[NEEDS CLARIFICATION]` markers.
- [ ] Create implementation branch from `main`.
- [ ] Extend `Project` model with `featured`, `categories`, `year`, `links` fields.
- [ ] Update all existing project entries in `projects.data.ts` with taxonomy values.
- [ ] Create standalone `FilterBarComponent` with `aria-pressed` buttons.
- [ ] Update `PortfolioComponent` with filter state and Featured / Other project groups.
- [ ] Update portfolio card template to render year, category badges, access-status chip, multi-CTA links.
- [ ] Implement disabled link rendering for restricted/unavailable projects.
- [ ] Update `portfolio.component.spec.ts` for new fields and filter logic.
- [ ] Write `filter-bar.component.spec.ts`.
- [ ] `npm run build` passes.
- [ ] `npm test -- --watch=false --browsers=ChromeHeadless` passes.
- [ ] Manual UAT: filter bar keyboard navigation, aria-pressed, disabled links inert.
- [ ] Update `docs/TRACEABILITY_MATRIX.md` F005 row.
- [ ] Open PR linked to the issue.
