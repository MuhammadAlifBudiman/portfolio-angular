# Implementation Plan: F002 — i18n English / Indonesian

Feature ID: `F002`
GitHub Issue: `#10`
Spec: `docs/specs/F002-i18n/spec.md`

## Technical Approach

- Add a typed runtime translation resource layer with English as the default language and Indonesian as the secondary language.
- Add a singleton language service that loads, validates, persists, and exposes the active language plus translation lookup with English fallback.
- Replace translatable hard-coded strings in page components/templates, shared components, portfolio data, contact states, and SEO metadata with translation lookups.
- Add a compact, keyboard-operable language selector in the header near existing theme controls.

## Files Expected to Change

| Area | Expected Change |
|---|---|
| Translation resources/service | Add typed EN/ID resources, fallback lookup, and localStorage persistence. |
| Header/shared controls | Add the language selector and translate navigation/theme labels. |
| Page components/data | Translate page copy, form messages, SEO metadata, project descriptions, roles, ownership labels, and alt text. |
| Specs | Cover default load, switching, persistence, fallback, and representative rendered copy. |

## Risks

| Risk | Mitigation |
|---|---|
| Missing keys create blank UI | Unit-test fallback behavior and keep English as the complete default resource. |
| Project proper nouns are accidentally localized | Keep project titles as stable IDs/titles and translate only descriptions/metadata. |
| Header controls become cramped on mobile | Place selector beside existing theme controls and verify mobile nav layout manually. |

## Verification Plan

- `npm run build`
- `npm test -- --watch=false --browsers=ChromeHeadless`
- Manual UAT cases from `test-matrix.md`
