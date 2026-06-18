# F00Q — Diagram Theme, Mobile & Accuracy

## Problem
All 6 SVG diagrams use hardcoded dark bg (`#0f172a`) — invisible/clashing in light theme. No `overflow-x` wrapper in `project-detail.component.html` — diagrams unreadable on mobile. `patient-workflow.svg` mixes English and Indonesian.

## Requirements
See `docs/product/FEATURE_SPEC.md` FR-F00Q-1 through FR-F00Q-5.

## Diagrams
- `public/projects/diagrams/bkn-architecture.svg`
- `public/projects/diagrams/bkn-rbac-flow.svg`
- `public/projects/diagrams/blog-api-architecture.svg`
- `public/projects/diagrams/patient-workflow.svg`
- `public/projects/diagrams/taskmaster-reset-flow.svg`
- `public/projects/diagrams/portfolio-architecture.svg`

## Approach
Replace hardcoded `fill="#0f172a"` with `fill="var(--diagram-bg, #f8fafc)"` or a neutral light-works palette. Add CSS in global or component style to set `--diagram-bg` per theme.

Wrap `<img>` in `project-detail.component.html` media figures with:
```html
<div class="overflow-x-auto">
  <img class="min-w-[600px] ..." ...>
</div>
```

## Tests
- `project-detail.component.spec.ts` — verify overflow-x wrapper present for diagram media
