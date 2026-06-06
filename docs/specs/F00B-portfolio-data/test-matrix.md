# F00B — Portfolio Data Model: Test Matrix

| ID | Test | Type | File | Status |
|---|---|---|---|---|
| T-F00B-1 | Component creates without error | Unit | `portfolio.component.spec.ts` | Planned |
| T-F00B-2 | Renders exactly 12 card wrappers (`.mb-12`) | Unit | `portfolio.component.spec.ts` | Planned |
| T-F00B-3 | First card title matches `PROJECTS[0].title` | Unit | `portfolio.component.spec.ts` | Planned |
| T-F00B-4 | First card img alt matches `PROJECTS[0].imageAlt` | Unit | `portfolio.component.spec.ts` | Planned |
| T-F00B-5 | First card ownership label renders "Team Project" | Unit | `portfolio.component.spec.ts` | Planned |
| T-F00B-6 | `openWebsite(url)()` calls `window.open(url, '_blank', 'noopener,noreferrer')` | Unit | `portfolio.component.spec.ts` | Planned |
| T-F00B-7 | `npm run build` passes | Build | CI | Planned |
| T-F00B-8 | Visual output identical pre/post refactor | Manual | browser `/portfolio` | Planned |
