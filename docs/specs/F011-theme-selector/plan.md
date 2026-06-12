# Implementation Plan: F003 — Theme Selector

Feature ID: `F003`
GitHub Issue: `#11`
Spec: `docs/specs/F011-theme-selector/spec.md`
Status: Done

## Technical Approach

- Define style themes through CSS custom properties selected by `data-style-theme` on `<html>`.
- Use `ThemeService` to manage style theme and dark/light preferences independently.
- Render `ThemeSelectorComponent` in the header beside the dark/light toggle.
- Persist style theme under `style-theme` and fall back to `default` for unknown stored values.

## Files Changed

| Path | Change |
|---|---|
| `src/styles.scss` | Added style-theme token sets. |
| `src/app/services/theme.service.ts` | Added theme state, persistence, fallback, and dark-mode coordination. |
| `src/app/components/theme-selector/` | Added selector UI and keyboard behavior. |
| `src/app/components/header/` | Integrated selector with existing nav controls. |

## Verification Plan

- `npm run build`
- `npm test -- --watch=false --browsers=ChromeHeadless`
- Manual UAT cases in `test-matrix.md`
