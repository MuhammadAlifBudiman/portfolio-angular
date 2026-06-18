# F00R — Technologies Section Layout Refinement

## Problem
`technologies.component.html` renders a flat `flex flex-wrap` chip cloud with no visual grouping. Category headings exist but don't have sufficient hierarchy or card structure to scan at a glance.

## Requirements
See `docs/product/FEATURE_SPEC.md` FR-F00R-1 through FR-F00R-6.

## Current categories (from technologies.data.ts)
- backend
- frontend
- databases
- tools

## Target layout
4 responsive grid cards. Each card: `<h3>` category heading + primary chips (text-sm) + secondary chips (text-xs, muted). Responsive: `grid-cols-1 md:grid-cols-2 xl:grid-cols-4`.

## Files to change
- `src/app/pages/technologies/technologies.component.html`
- `src/app/pages/technologies/technologies.component.scss` (if exists) or inline Tailwind
- `src/app/i18n/en.ts` + `id.ts` — category label keys if not already present

## Tests
- `technologies.component.spec.ts` — verify 4 category cards render, no percentage text
