# Traceability Matrix

This file is the control table for requirement traceability. Update it whenever a feature spec, issue, PR, or verification result changes.

| Feature ID | Feature | FR IDs | User Story IDs | AC IDs | Spec Folder | GitHub Issue | PR | Verification | Status |
|---|---|---|---|---|---|---|---|---|---|
| F000 | Core Portfolio Shell | FR-F000-* | US-01, US-07 | AC-X-* | `docs/product/FEATURE_SPEC.md` | N/A | TBD | UAT + build | Done |
| F00A | About / Identity | FR-F00A-* | US-01 | AC-X-* | `docs/product/FEATURE_SPEC.md` | N/A | TBD | UAT + build | Done |
| F00B | Portfolio Showcase (data extraction) | FR-F00B-* | US-02 | AC-X-* | `docs/specs/F00B-portfolio-data/` | #29, #57 | #30 | build + unit tests + visual diff + screenshot asset check | Done |
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
| F00K | Content Quality & UI Correctness | FR-F00K-* | US-01, US-02, US-03 | N/A | `docs/product/FEATURE_SPEC.md` | #39, #57 | #41 | ui-ux reviewer re-run + mobile check + viewport overflow sweep | Done |
| F00L | Test Coverage Baseline | FR-F00L-* | N/A | AC-X-2, AC-X-3 | `docs/specs/F00L-test-coverage/` | #40 | TBD | npm test green (100 specs) + build | Done |
| F00M | Phase 3 Quality Pass | FR-F00M-* | N/A | N/A | `docs/product/FEATURE_SPEC.md` | #49 | TBD | Lighthouse ≥ 90 + social metadata verified + UAT 0 Fail | In Progress |
| F004 | Professional Experience Section | FR-F004-1, FR-F004-2, FR-F004-3, FR-F004-4 | N/A | AC-F004-* | `docs/specs/F004-experience/` | #61 | TBD | npm run build; npm test | In Progress |
| F005 | Project Taxonomy, Featured Hierarchy & Filtering | FR-F005-1, FR-F005-2, FR-F005-3, FR-F005-4, FR-F005-5, FR-F005-6 | N/A | AC-F005-* | `docs/specs/F005-project-taxonomy/` | #57, #61 | TBD | npm run build; npm test; project image check | In Progress |
| F006 | Certifications Section | FR-F006-1, FR-F006-2, FR-F006-3, FR-F006-4 | N/A | AC-F006-* | `docs/specs/F006-certifications/` | #57 | TBD | npm run build; npm test; credential link safety check | In Progress |
| F007 | Professional Positioning & Copy Refresh | FR-F007-1, FR-F007-2, FR-F007-3, FR-F007-4, FR-F007-5 | N/A | AC-F007-* | `docs/specs/F007-positioning-refresh/` | TBD | TBD | npm run build; npm test | In Progress |
| F008 | Project Detail / Case-Study Route | FR-F008-1, FR-F008-2, FR-F008-3, FR-F008-4 | N/A | AC-F008-* | `docs/specs/F008-project-detail/` | #57, #61 | TBD | npm run build; npm test | In Progress |
| F00I | SEO, Performance & Social Metadata (prerender) | FR-F00I-* | US-07 | N/A | `docs/specs/F00I-seo-prerender/` | #37, #61 | TBD | npm run build (prerender output) | In Progress |
| F00N | Navigation Order & Breakpoint | FR-F00N-* | N/A | N/A | `docs/specs/F00N-nav/` | #61 | TBD | npm run build; Playwright responsive check | In Progress |
| F002 | i18n English / Indonesian (case-study + aria-labels) | FR-F002-* | US-05 | AC-F002-* | `docs/specs/F002-i18n/` | #10, #61 | #48 | UAT + language fallback + case-study translations | In Progress |
| F00O | Project Card & Status-Badge UI Hierarchy | FR-F00O-1 through FR-F00O-9 | US-02 | N/A | `docs/specs/f00o-project-card-status-ui/` | #63, #71 | TBD | npm run build; npm run test:ci; playwright screenshots | In Progress |
| F00P | Scroll UX & Custom Cursor Resilience | FR-F00P-1 through FR-F00P-5 | N/A | N/A | `docs/specs/F00P-scroll-cursor/` | #68 | TBD | build + manual scroll/cursor check | In Progress |
| F00Q | Diagram Theme, Mobile & Accuracy | FR-F00Q-1 through FR-F00Q-5 | N/A | N/A | `docs/specs/F00Q-diagrams/` | #72 | TBD | build + playwright 320px + light/dark visual | In Progress |
| F00R | Technologies Section Layout Refinement | FR-F00R-1 through FR-F00R-6 | US-03 | N/A | `docs/specs/F00R-technologies-layout/` | #74 | TBD | build + npm test + playwright responsive | In Progress |
| F00S | Contact Section Two-Column Layout | FR-F00S-1 through FR-F00S-6 | US-04 | N/A | `docs/specs/F00S-contact-layout/` | #75 | TBD | build + npm test + playwright desktop/mobile | In Progress |
| F00E (ext) | README Documentation Sync | FR-F00E-* | N/A | N/A | `docs/product/FEATURE_SPEC.md` | #76 | TBD | manual README review + build | In Progress |
| F00H+F00L (ext) | A11y Audit + Test Coverage Update | FR-F00H-* + FR-F00L-* | US-01, US-04 | N/A | `docs/specs/F00L-test-coverage/` | #77 | TBD | npm run test:ci + npm run test:ui + build | In Progress |

Status values: `Draft`, `Ready`, `In Progress`, `Review`, `Done`, `Blocked`.
