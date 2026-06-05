# ADR-001 — Frontend Stack

## Status
Accepted (reflects shipped `v1.0.1`).

## Decision
Angular `^20.3.x` (standalone components) + SCSS + Tailwind CSS `^4.1.4` + TypeScript `~5.9.3`, tested with Karma/Jasmine, deployed static to GitHub Pages.

## Reason
Matches existing codebase; type discipline, component boundaries, and CLI deploy support a single-maintainer static portfolio without backend overhead.

## Consequences
- No SSR; SEO relies on static metadata in `src/index.html`.
- Contact requires a third-party (EmailJS) since there is no server.
