# Task Breakdown: F006 — Certifications Section

Feature ID: F006
GitHub Issue: TBD

## Tasks

- [ ] Confirm spec has no `[NEEDS CLARIFICATION]` markers.
- [ ] Create implementation branch from `main`.
- [ ] Define `Certification` TypeScript interface and `certifications.data.ts` with verified entries.
- [ ] Add `certifications.*` translation keys to `en.json` and `id.json`.
- [ ] Create standalone `CertificationsComponent` (ts, html, scss).
- [ ] Implement conditional credential link rendering (`@if (cert.credentialUrl)`).
- [ ] Insert `<app-certifications>` after Portfolio in the page composition.
- [ ] Write `certifications.component.spec.ts` covering: entries render, no link when URL absent, bilingual toggle.
- [ ] `npm run build` passes.
- [ ] `npm test -- --watch=false --browsers=ChromeHeadless` passes.
- [ ] Manual UAT: verify both entries, absent/disabled link, EN/ID copy.
- [ ] Update `docs/TRACEABILITY_MATRIX.md` F006 row.
- [ ] Open PR linked to the issue.
