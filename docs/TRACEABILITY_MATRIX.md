# Traceability Matrix

This file is the control table for requirement traceability. Update it whenever a feature spec, issue, PR, or verification result changes.

| Feature ID | Feature | FR IDs | User Story IDs | AC IDs | Spec Folder | GitHub Issue | PR | Verification | Status |
|---|---|---|---|---|---|---|---|---|---|
| F000 | Core Portfolio Shell | FR-F000-* | US-01, US-07 | AC-X-* | `docs/product/FEATURE_SPEC.md` | N/A | TBD | UAT + build | Done |
| F00A | About / Identity | FR-F00A-* | US-01 | AC-X-* | `docs/product/FEATURE_SPEC.md` | N/A | TBD | UAT + build | Done |
| F00B | Portfolio Showcase (data extraction) | FR-F00B-* | US-02 | AC-X-* | `docs/specs/F00B-portfolio-data/` | #29 | #30 | build + unit tests + visual diff | Done |
| F00C | Contact / EmailJS | FR-F00C-* | US-04 | AC-X-* | `docs/product/FEATURE_SPEC.md` | N/A | TBD | UAT + form check | Done |
| F00D | Theming Baseline | FR-F00D-* | US-07 | AC-X-* | `docs/product/FEATURE_SPEC.md` | N/A | TBD | UAT + contrast check | Done |
| F001 | Resume PDF | FR-F001-* | US-03 | AC-F001-* | `docs/specs/F001-resume-pdf/` | #8 | #31 | build + unit tests + UAT | Done |
| F002 | i18n English / Indonesian | FR-F002-* | US-05 | AC-F002-* | `docs/specs/F002-i18n/` | #10 | #48 | UAT + language fallback (docs/audits/2026-06-uat.md) | Done |
| F003 | Theme Selector | FR-F003-* | US-06 | AC-F003-* | `docs/specs/F011-theme-selector/` | #11 | #34 | UAT + persistence test | Done |
| F00E | README / Docs Correction | FR-F00E-* | N/A | N/A | `docs/product/FEATURE_SPEC.md` | #26 | TBD | docs review + build | Done |
| F00F | Accessibility & Link-Safety Hygiene | FR-F00F-* | US-01, US-02, US-04 | N/A | `docs/product/FEATURE_SPEC.md` | #26 | TBD | build + unit tests + a11y review | Done |
| F00G | Dev Environment & CI Quality | FR-F00G-* | N/A | N/A | `docs/product/FEATURE_SPEC.md` | #35 | #41 | npm run build + npm test green | Done |
| F00H | WCAG 2.1 AA Accessibility Remediation | FR-F00H-* | US-01, US-02, US-04, US-06 | N/A | `docs/product/FEATURE_SPEC.md` | #36 | #41 | a11y auditor re-run + keyboard pass | Done |
| F00I | SEO, Performance & Social Metadata | FR-F00I-* | US-07 | N/A | `docs/product/FEATURE_SPEC.md` | #37 | #41 | Lighthouse ≥ 90 + rich-results test | Done |
| F00J | Security Hardening | FR-F00J-* | US-04 | N/A | `docs/product/FEATURE_SPEC.md` | #38 | #41 | security auditor re-run + npm audit | Done |
| F00K | Content Quality & UI Correctness | FR-F00K-* | US-01, US-02, US-03 | N/A | `docs/product/FEATURE_SPEC.md` | #39 | #41 | ui-ux reviewer re-run + mobile check | Done |
| F00L | Test Coverage Baseline | FR-F00L-* | N/A | AC-X-2, AC-X-3 | `docs/specs/F00L-test-coverage/` | #40 | TBD | npm test green (100 specs) + build | Done |
| F00M | Phase 3 Quality Pass | FR-F00M-* | N/A | N/A | `docs/product/FEATURE_SPEC.md` | #49 | TBD | Lighthouse ≥ 90 + social metadata verified + UAT 0 Fail | In Progress |
| F004 | Professional Experience Section | FR-F004-1, FR-F004-2, FR-F004-3, FR-F004-4 | N/A | AC-F004-* | `docs/specs/F004-experience/` | TBD | TBD | npm run build; npm test | In Progress |
| F005 | Project Taxonomy, Featured Hierarchy & Filtering | FR-F005-1, FR-F005-2, FR-F005-3, FR-F005-4, FR-F005-5, FR-F005-6 | N/A | AC-F005-* | `docs/specs/F005-project-taxonomy/` | TBD | TBD | npm run build; npm test | In Progress |
| F006 | Certifications Section | FR-F006-1, FR-F006-2, FR-F006-3, FR-F006-4 | N/A | AC-F006-* | `docs/specs/F006-certifications/` | TBD | TBD | npm run build; npm test | In Progress |
| F007 | Professional Positioning & Copy Refresh | FR-F007-1, FR-F007-2, FR-F007-3, FR-F007-4, FR-F007-5 | N/A | AC-F007-* | `docs/specs/F007-positioning-refresh/` | TBD | TBD | npm run build; npm test | In Progress |
| F008 | Project Detail / Case-Study Route | FR-F008-1, FR-F008-2, FR-F008-3, FR-F008-4 | N/A | AC-F008-* | `docs/specs/F008-project-detail/` | TBD | TBD | npm run build; npm test | Planned |

Status values: `Draft`, `Ready`, `In Progress`, `Review`, `Done`, `Blocked`.
