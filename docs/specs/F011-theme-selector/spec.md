# Feature Specification: F003 — Theme Selector

**Feature ID:** F003  
**GitHub Issue:** #11  
**Branch:** feat/11-theme-selector  
**Status:** Done

---

## Problem

The portfolio only supports a single accent palette. Visitors have no way to express a personal colour preference beyond light/dark mode. A style-theme selector makes the portfolio feel more dynamic and demonstrates Angular service/signal patterns.

## Goal

Visitors can select a named visual theme ("Default", "Ocean", "Ember"). Style-theme selection is independent of light/dark mode. Both preferences persist across sessions via `localStorage`.

## Functional Requirements

| ID | Requirement |
|---|---|
| FR-F003-1 | A typed theme-token map exists before any UI work (SCSS `data-style-theme` attribute tokens). |
| FR-F003-2 | Style-theme selection is orthogonal to light/dark mode; changing one must not reset the other. |
| FR-F003-3 | Unknown/corrupt `localStorage` theme keys fall back to `'default'` without crashing. |
| FR-F003-4 | Theme preference is persisted in `localStorage` under key `'style-theme'` (non-sensitive). |
| FR-F003-5 | The selector is keyboard-operable; focus ring is visible in all themes and both modes. |

## Acceptance Criteria

| ID | Given | When | Then |
|---|---|---|---|
| AC-F003-1 | Multiple themes defined in token map | A theme is selected | Its CSS custom properties apply across the UI |
| AC-F003-2 | A style theme is selected | Light/dark is toggled | Both dimensions apply independently |
| AC-F003-3 | An unknown/corrupt stored theme key | Page loads | Default theme applied; no crash, no broken styles |
| AC-F003-4 | A saved theme preference | User returns | It is restored from `localStorage` |
| AC-F003-5 | The selector | Navigated by keyboard | Operable; focus visible in every theme |

## Themes Defined

| ID | Label | Accent (light) | Accent (dark) |
|---|---|---|---|
| `default` | Default | `#4ecba3` | `#007bff` |
| `ocean` | Ocean | `#0097a7` | `#00e5ff` |
| `ember` | Ember | `#e64a19` | `#ff8a65` |

## Files Changed

- `src/styles.scss` — CSS custom property token sets per theme
- `src/app/services/theme.service.ts` — NEW: typed signal-based service
- `src/app/services/theme.service.spec.ts` — NEW: unit tests
- `src/app/components/theme-selector/` — NEW: selector component
- `src/app/components/header/header.component.ts` — inject ThemeService
- `src/app/components/header/header.component.html` — add `<app-theme-selector>`

## Clarifications

All clarification items resolved:
- Selector widget: button-triggered listbox with visible title-cased labels.
- Token extension point: `data-style-theme` attribute on `<html>` (confirmed).
- UI placement: in nav header, next to dark/light toggle.

## Delivery

- GitHub Issue: #11
- PR: #34
- Status reflected in `docs/TRACEABILITY_MATRIX.md` as Done.
