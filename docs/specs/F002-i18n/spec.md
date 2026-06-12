# Feature Specification: F002 — i18n English / Indonesian

**Feature ID:** F002
**GitHub Issue:** #10
**Status:** Ready for implementation
**Dependency:** F00B portfolio data extraction is complete (#29 / PR #30).

## Problem

The portfolio is currently English-only. Indonesian visitors cannot switch the visible interface and content into Indonesian, and the code still keeps user-facing copy in components and data files. This makes content updates harder and blocks the intended bilingual user experience.

## Goal

Provide runtime English/Indonesian language switching without a page reload. English remains the default language, Indonesian is available from a visible selector, and the selected language is restored from `localStorage`.

## Functional Requirements

| ID | Requirement |
|---|---|
| FR-F002-1 | Translatable site copy is externalized into language resources before adding the UI control. |
| FR-F002-2 | A language toggle switches all translatable visible copy without reloading the page. |
| FR-F002-3 | Missing translation keys fall back to the default English value without blank UI or placeholder leakage. |
| FR-F002-4 | Project names and proper nouns remain unchanged unless an intentional localized form exists. |
| FR-F002-5 | Language preference is persisted in `localStorage` under a non-sensitive key. |

## Acceptance Criteria

| ID | Given | When | Then |
|---|---|---|---|
| AC-F002-1 | The default language is active | the portfolio loads | all translatable visible copy renders from translation resources. |
| AC-F002-2 | The language toggle is available | a visitor switches language | visible translatable copy updates without a page reload. |
| AC-F002-3 | A translation key is missing from Indonesian resources | that copy is rendered | the English value is shown instead of a blank or raw key. |
| AC-F002-4 | A saved language preference exists | the visitor returns | the saved language is applied on load. |
| AC-F002-5 | Project names or proper nouns are displayed | language switches | names stay unchanged unless intentionally localized. |

## Translation Surface

- Header navigation, dark/light labels, theme selector labels, and language selector labels.
- Introduction, About, Portfolio, and Contact page headings, body copy, buttons, form labels, loading/success/error messages, and SEO titles/descriptions.
- Portfolio project descriptions, roles, ownership labels, link-status labels, and image alt text. Project titles remain stable proper nouns.

## Implementation Notes

- Use a small runtime translation service rather than Angular compile-time i18n because AC-F002-2 requires no-reload switching.
- Keep language resources typed and version-controlled in the app source; do not fetch translations from a remote service.
- Persist only the language code, for example `en` or `id`, in `localStorage`.
- Keep the implementation dependency-light unless a library clearly reduces code and risk.
