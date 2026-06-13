# Implementation Plan: F006 — Certifications Section

Feature ID: F006
GitHub Issue: TBD
Spec: `docs/specs/F006-certifications/spec.md`

## Technical Approach

Create a typed `Certification` interface and `certifications.data.ts` with the two verified
entries. Build a standalone `CertificationsComponent` that reads the data array and renders
each entry. Translation keys are added to `en.json` and `id.json` under a `certifications`
namespace. The component is inserted after the Portfolio section in the page composition.

Credential links are conditionally rendered: `@if (cert.credentialUrl)` wraps the link
element, so entries without a URL produce no anchor at all.

## Files Expected to Change

| Path | Change |
|---|---|
| `src/app/data/certifications.data.ts` | New — typed certification entries |
| `src/app/pages/certifications/certifications.component.ts` | New — standalone component |
| `src/app/pages/certifications/certifications.component.html` | New — section template |
| `src/app/pages/certifications/certifications.component.scss` | New — section-scoped styles |
| `src/app/pages/certifications/certifications.component.spec.ts` | New — unit tests |
| `src/assets/i18n/en.json` | Add `certifications.*` keys |
| `src/assets/i18n/id.json` | Add `certifications.*` keys (Indonesian) |
| `src/app/app.component.html` (or route shell) | Insert `<app-certifications>` after Portfolio |
| `docs/ROADMAP.md` | Tick F006 when shipped |
| `docs/TRACEABILITY_MATRIX.md` | Update F006 row with issue/PR/status |

## Risks

| Risk | Mitigation |
|---|---|
| Credential URLs not yet confirmed | Data model allows `credentialUrl?: string`; absent field hides the link (FR-F006-3) |
| Fabricated content added later | Code review gate: no credential ID or score may be added without owner verification |
| External link target causes tabnapping | All external links use `rel="noopener noreferrer"` per F00F |

## Verification Plan

1. `npm run build` — strict Angular build must pass.
2. `npm test -- --watch=false --browsers=ChromeHeadless` — certifications component specs green.
3. Manual UAT: scroll to section, verify both entries, test EN/ID toggle, verify disabled/absent link for entry without URL.
