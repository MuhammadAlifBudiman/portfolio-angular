# Implementation Plan: F005 — Project Taxonomy, Featured Hierarchy & Filtering

Feature ID: F005
GitHub Issue: TBD
Spec: `docs/specs/F005-project-taxonomy/spec.md`

## Technical Approach

Extend the existing `Project` model in `src/app/data/projects.data.ts` to add `featured`,
`categories`, `year`, and `links` fields. Update existing project entries with appropriate
values; no existing field is removed.

Add a `FilterBarComponent` (standalone) that emits the selected filter value. The
`PortfolioComponent` holds a `selectedFilter` signal and computes derived `featuredProjects`
and `otherProjects` arrays using Angular signals or computed properties. Filter updates mutate
only in-memory state; no HTTP calls.

Each project card template is updated to show new fields: year, category badges, access-status
chip, and multi-CTA links. Disabled link rendering uses `<button disabled>` for same-page
actions and `<a aria-disabled="true" tabindex="-1">` for anchor elements.

## Files Expected to Change

| Path | Change |
|---|---|
| `src/app/data/projects.data.ts` | Extend `Project` type and all entries with new taxonomy fields |
| `src/app/pages/portfolio/portfolio.component.ts` | Add filter state, featured/other computed views |
| `src/app/pages/portfolio/portfolio.component.html` | Split into Featured / Other groups; add filter bar |
| `src/app/pages/portfolio/portfolio.component.spec.ts` | Update tests for new fields and filter logic |
| `src/app/components/filter-bar/filter-bar.component.ts` | New standalone component |
| `src/app/components/filter-bar/filter-bar.component.html` | Filter buttons with aria-pressed |
| `src/app/components/filter-bar/filter-bar.component.spec.ts` | New — aria-pressed, emit, active style |
| `docs/ROADMAP.md` | Tick F005 when shipped |
| `docs/TRACEABILITY_MATRIX.md` | Update F005 row with issue/PR/status |

## Risks

| Risk | Mitigation |
|---|---|
| Existing project card tests break on new required fields | Make new fields optional where backward-compat is needed; update test fixtures |
| Filter state and groups diverge for edge-case projects | Unit-test filter logic independently from DOM rendering |
| Disabled link semantics inconsistent across browsers | Use both `aria-disabled` and `tabindex="-1"`; test with keyboard |

## Verification Plan

1. `npm run build` — strict Angular build must pass.
2. `npm test -- --watch=false --browsers=ChromeHeadless` — portfolio and filter-bar specs green.
3. Manual UAT: open portfolio, use filter bar with keyboard, verify aria-pressed, verify disabled links are inert.
