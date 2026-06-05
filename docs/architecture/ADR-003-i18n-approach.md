# ADR-003 — i18n Approach (F002)

## Status
Proposed.

## Decision
Externalize content into translation resources and introduce a typed `Project` data model before adding any language UI. Persist language preference in `localStorage`; fall back to a default language on missing keys.

## Reason
Portfolio data is currently hard-coded in `portfolio.component.html`, which blocks clean translation. Data extraction is a prerequisite (see ROADMAP Phase 1).

## Consequences
- F002 is sequenced after F00B data extraction.
- Proper nouns preserved unless an intentional localized form is defined.
