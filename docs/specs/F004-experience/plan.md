# Implementation Plan: F004 — Professional Experience Section

Feature ID: F004
GitHub Issue: TBD
Spec: `docs/specs/F004-experience/spec.md`

## Technical Approach

Create a new standalone `ExperienceComponent` under `src/app/pages/experience/`.
Experience data lives in `src/app/data/experience.data.ts` as a typed array of `Experience`
objects (role, period, organisation, location, description, contributions[]).
Translation keys for descriptions and contributions are added to both `en.json` and `id.json`
under a top-level `experience` namespace.
The homepage composition (`app.component.html` or the route shell) inserts `<app-experience>`
between the About Me and Portfolio sections.

## Files Expected to Change

| Path | Change |
|---|---|
| `src/app/data/experience.data.ts` | New — typed experience entries |
| `src/app/pages/experience/experience.component.ts` | New — standalone component |
| `src/app/pages/experience/experience.component.html` | New — section template |
| `src/app/pages/experience/experience.component.scss` | New — section-scoped styles |
| `src/app/pages/experience/experience.component.spec.ts` | New — unit tests |
| `src/assets/i18n/en.json` | Add `experience.*` keys |
| `src/assets/i18n/id.json` | Add `experience.*` keys (Indonesian) |
| `src/app/app.component.html` (or route shell) | Insert `<app-experience>` in correct position |
| `docs/ROADMAP.md` | Tick F004 when shipped |
| `docs/TRACEABILITY_MATRIX.md` | Update F004 row with issue/PR/status |

## Risks

| Risk | Mitigation |
|---|---|
| Translation key conflicts with existing namespaces | Scope all keys under `experience.*` |
| Section insertion breaks homepage scroll order | Verify DOM order in dev server before PR |
| Missing Indonesian translations left blank | All ID keys must be present; LanguageService fallback to EN as safety net |

## Verification Plan

1. `npm run build` — strict Angular build must pass.
2. `npm test -- --watch=false --browsers=ChromeHeadless` — experience component specs green.
3. Manual UAT: `npm start`, scroll to Experience, verify EN and ID content; verify heading hierarchy with browser a11y tree.
