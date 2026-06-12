# ADR-003 — i18n Approach (F002)

## Status
Accepted. F00B data extraction is complete; F002 remains planned.

## Decision
Externalize content into translation resources before adding any language UI. Use the existing typed `Project` data model as the source for portfolio translations. Persist language preference in `localStorage`; fall back to a default language on missing keys.

## Reason
Portfolio data now lives in typed project data, which makes project descriptions, roles, ownership labels, link statuses, and alt text practical to translate. Runtime language switching is still required because F002 must update copy without a page reload.

## Consequences
- F002 is unblocked by F00B data extraction.
- Proper nouns preserved unless an intentional localized form is defined.
