# Implementation Plan: F007 — Professional Positioning & Copy Refresh

Feature ID: F007
GitHub Issue: TBD
Spec: `docs/specs/F007-positioning-refresh/spec.md`

## Technical Approach

All hero and about copy lives in `src/assets/i18n/en.json` and `src/assets/i18n/id.json`.
Update the relevant keys (`intro.role`, `intro.body`, `about.p1/p2/p3`, `seo.*`) in both
files. Confirm the owner has approved the new copy before committing.

Static metadata in `src/index.html` (`<title>`, `<meta name="description">`, OG tags,
Twitter tags, JSON-LD `jobTitle`) is updated in place — no structural change to the file.

No Angular component TypeScript or template files require changes unless a key is renamed
(in which case both the translation file and any hardcoded fallback in the component are
updated together).

## Files Expected to Change

| Path | Change |
|---|---|
| `src/assets/i18n/en.json` | Update `intro.role`, `intro.body`, `about.p1/p2/p3`, `seo.*` keys |
| `src/assets/i18n/id.json` | Same keys in Indonesian |
| `src/index.html` | Update `<title>`, meta description, OG, Twitter, JSON-LD jobTitle |
| `docs/ROADMAP.md` | Tick F007 when shipped |
| `docs/TRACEABILITY_MATRIX.md` | Update F007 row with issue/PR/status |

## Risks

| Risk | Mitigation |
|---|---|
| Copy contains unverified claims | Owner must approve all body text before commit; no fabricated metrics or titles |
| Key rename breaks component binding | If key names change, update all component references atomically |
| Indonesian translation lags behind English | Both files updated in the same commit; no partial deploys |

## Verification Plan

1. `npm run build` — strict Angular build must pass.
2. `npm test -- --watch=false --browsers=ChromeHeadless` — no spec regressions from key changes.
3. Manual UAT: `npm start`, read hero and about in EN and ID; inspect `<title>` and meta in browser dev tools.
