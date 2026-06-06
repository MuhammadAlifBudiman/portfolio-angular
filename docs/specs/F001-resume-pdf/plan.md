# Implementation Plan: F001 — Resume PDF

Feature ID: F001  
GitHub Issue: #8  
Spec: `docs/specs/F001-resume-pdf/spec.md`

## Technical Approach

Extend `ButtonComponent` to optionally render as a semantic `<a>` element when `href` is
provided. This keeps one styled control with identical Tailwind classes and hover animation
for both button and anchor modes. No new component is created.

Place `public/resume.pdf` as the static PDF asset. The `download` attribute triggers a browser
download with the filename hint `Muhammad-Alif-Budiman-Resume.pdf`.

## Files Expected to Change

| Path | Change |
|---|---|
| `src/app/components/button/button.component.ts` | Add `href`, `download`, `ariaLabel` inputs |
| `src/app/components/button/button.component.html` | `@if (href)` anchor branch; `@else` existing button |
| `src/app/components/button/button.component.spec.ts` | Add anchor-mode test cases |
| `src/app/pages/about-me/about-me.component.ts` | Add `resumeHref`, `resumeDownloadName`, `resumeButtonText` |
| `src/app/pages/about-me/about-me.component.html` | Add Download Resume `<app-button>` |
| `src/app/pages/about-me/about-me.component.spec.ts` | New — assert anchor presence + attributes |
| `docs/ROADMAP.md` | Check F00B; mark F001 in progress |
| `docs/TRACEABILITY_MATRIX.md` | F001 row: spec folder, status In Progress |

## Risks

| Risk | Mitigation |
|---|---|
| PDF not yet present in `public/` | Code ships first; user adds real PDF before manual UAT |
| ButtonComponent existing callers break | `href` is optional; `@else` branch unchanged |
| Angular strict null check on optional `download` | Bind with `[attr.download]` to emit only when truthy |

## Verification Plan

1. `npm run build` — strict Angular build must pass.
2. `npm test -- --watch=false --browsers=ChromeHeadless` — all button + about-me specs green.
3. Manual UAT: `npm start`, About Me page, Tab to Download Resume, Enter → file downloads.
   Test in both dark and light themes.
