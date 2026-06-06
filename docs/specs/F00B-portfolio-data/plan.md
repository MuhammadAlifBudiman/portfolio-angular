# F00B — Portfolio Data Model: Implementation Plan

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
| `docs/TRACEABILITY_MATRIX.md` | F00B in progress, F00F → Done |

## Step order
1. Write `project.model.ts`
2. Write `projects.data.ts`
3. Modify component `.ts`
4. Rewrite component `.html`
5. Write component `.spec.ts`
6. Run `npm run build` — fix if red
7. Run `npm test` — fix if red
8. Update TRACEABILITY_MATRIX
9. Commit + PR
