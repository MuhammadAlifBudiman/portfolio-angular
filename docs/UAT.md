# UAT & Maintenance — `portfolio-angular`

> User Acceptance Testing cases (manual) plus ongoing maintenance procedures. UAT cases trace to `docs/product/ACCEPTANCE_CRITERIA.md`.

## UAT Procedure
1. Build production bundle: `npm run build`.
2. Serve locally (`npm start`) or preview the deployed Pages build.
3. Execute the cases below in latest Chrome + one mobile viewport.
4. Record result (Pass/Fail), notes, and screenshots for UI cases.
5. A feature is accepted only when all its cases pass.

## UAT Cases

### Baseline (regression — run every release)
| Case | Steps | Expected |
|---|---|---|
| UAT-B1 | Load `/`, `/about-me`, `/portfolio`, `/contact` | All render, no console errors |
| UAT-B2 | Tab through interactive elements | All reachable, focus visible |
| UAT-B3 | Submit contact form (valid) | Loading → success state; message delivered |
| UAT-B4 | Submit contact form (empty required) | Validation blocks; error state shown |
| UAT-B5 | Toggle light/dark | Contrast readable in both |
| UAT-B6 | View on mobile width | No content-breaking layout shift |

### F001 — Resume PDF (#8) — traces AC-F001-*
| Case | Steps | Expected |
|---|---|---|
| UAT-F001-1 | Activate resume control | PDF opens/downloads |
| UAT-F001-2 | Activate via keyboard | Triggers; focus visible |
| UAT-F001-3 | Inspect PDF content | No unintended private data |

### F002 — i18n (#10) — traces AC-F002-*
| Case | Steps | Expected |
|---|---|---|
| UAT-F002-1 | Switch language | All translatable copy updates, no reload |
| UAT-F002-2 | Reload after switch | Saved language restored |
| UAT-F002-3 | Force a missing key (test build) | Default-language fallback, no blank |

### F003 — Theme Selector (#11) — traces AC-F003-*
| Case | Steps | Expected |
|---|---|---|
| UAT-F003-1 | Select each theme | Tokens apply across UI |
| UAT-F003-2 | Toggle light/dark per theme | Both dimensions apply independently |
| UAT-F003-3 | Corrupt stored theme key, reload | Default theme applies, no crash |
| UAT-F003-4 | Keyboard-operate selector | Operable; focus visible all themes |

## Maintenance

### Routine
- Run `npm audit --audit-level=moderate`; address moderate+ findings via an issue.
- Keep Angular/CLI/Tailwind within documented majors; bump via a dedicated chore issue with build + UAT-B regression.
- Re-run Lighthouse on significant UI/content change; keep A11y/BP/SEO ≥ 90.

### Content updates
- Treat as issue-scoped (Type: Content); verify copy specificity per `DESIGN.md` (no AI-slop, no fabricated claims).

### Secrets / deploy
- Rotate EmailJS keys via GitHub Secrets only (`ENV_SERVICE_ID`, `ENV_TEMPLATE_ID`, `ENV_PUBLIC_KEY`).
- Never commit real env files; deploy only on explicit owner approval.

### Debt tracking
- Carry only active `FEATURE_SPEC.md` debt items as open issues until closed. F00B hard-coding, `app-button` a11y, and F00E README/`cz-customizable` are closed.
