# F00B — Portfolio Data Model: Spec

## Feature ID
F00B (debt clearance)

## GitHub Issue
#29

## Problem
`portfolio.component.html` embeds 12 hard-coded project card blocks (436 lines). The 12 cards share
identical markup; only 7 values differ per card. This prevents F002 (i18n) from externalising
translatable strings and makes the component unmaintainable.

Recorded in `FEATURE_SPEC.md`:
> *data is embedded in `portfolio.component.html`; extract to a typed model before F002.*

## Goals
- Extract card data into a typed, version-controlled data source.
- Render all cards from a single `@for` loop.
- Add a portfolio component spec (none exists today).
- Preserve visual output exactly — this is an internal refactor.

## Non-Goals
- No new projects.
- No enrichment fields (role, stack, linkStatus) — those require real data, deferred.
- No i18n wiring — that is F002.

## Data Shape (faithful-minimal)

```ts
interface Project {
  id: string;           // stable, used as DOM id + track key
  title: string;
  ownership: 'team' | 'personal';
  description: string;
  imageSrc: string;
  imageAlt: string;
  url: string;
}
```

## Functional Requirements
- FR-F00B-D1: All 12 projects in typed array; data verbatim from current HTML.
- FR-F00B-D2: Template renders exactly `PROJECTS.length` cards in declared order.
- FR-F00B-D3: Each card element keeps its `id` attribute (section-link compatibility).
- FR-F00B-D4: Visual output identical to pre-refactor.
- FR-F00B-D5: `openWebsite` continues to use `noopener,noreferrer`.
