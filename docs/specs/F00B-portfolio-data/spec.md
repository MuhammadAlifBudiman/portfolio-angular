# F00B — Portfolio Data Model: Spec

## Feature ID
F00B (debt clearance)

## GitHub Issue
#29

## Status
Done (#29 / PR #30). Later F00K content work enriched the model with role, stack, link status, and expanded ownership values.

## Problem
`portfolio.component.html` embedded repeated hard-coded project card blocks. The cards shared identical markup with only data values changing. This prevented F002 (i18n) from externalising translatable strings and made the component unmaintainable.

This debt has been cleared: portfolio cards now render from `src/app/data/projects.data.ts`.

## Goals
- [x] Extract card data into a typed, version-controlled data source.
- [x] Render all cards from a single `@for` loop.
- [x] Add a portfolio component spec.
- [x] Preserve visual output for the data extraction refactor.

## Non-Goals
- No i18n wiring — that remains F002.

## Data Shape (faithful-minimal)

```ts
interface Project {
  id: string;
  title: string;
  ownership: 'team' | 'personal' | 'client' | 'internal' | 'restricted';
  description: string;
  imageSrc: string;
  imageAlt: string;
  url: string;
  stack: string[];
  role?: string;
  linkStatus: 'live' | 'restricted' | 'unavailable';
}
```

## Functional Requirements
- FR-F00B-D1: All projects in typed array.
- FR-F00B-D2: Template renders exactly `PROJECTS.length` cards in declared order.
- FR-F00B-D3: Each card element keeps its `id` attribute (section-link compatibility).
- FR-F00B-D4: Visual output remains scannable and consistent after data extraction.
- FR-F00B-D5: `openWebsite` continues to use `noopener,noreferrer`.
