# F00B — Portfolio Data Model: Implementation Plan

Status: Done (#29 / PR #30)

## Files to create
| File | Purpose |
|---|---|
| `src/app/models/project.model.ts` | `Project` interface + `OWNERSHIP_LABEL` map |
| `src/app/data/projects.data.ts` | `PROJECTS: readonly Project[]` (12 entries) |
| `src/app/pages/portfolio/portfolio.component.spec.ts` | Karma/Jasmine tests |

## Files to modify
| File | Change |
|---|---|
| `src/app/pages/portfolio/portfolio.component.ts` | Import data; expose `projects` + `ownershipLabel` |
| `src/app/pages/portfolio/portfolio.component.html` | Replace 12 blocks with one `@for` loop |
| `docs/TRACEABILITY_MATRIX.md` | F00B marked Done |

## Step order
1. [x] Write `project.model.ts`
2. [x] Write `projects.data.ts`
3. [x] Modify component `.ts`
4. [x] Rewrite component `.html`
5. [x] Write component `.spec.ts`
6. [x] Run `npm run build`
7. [x] Run `npm test`
8. [x] Update TRACEABILITY_MATRIX
9. [x] Open PR
