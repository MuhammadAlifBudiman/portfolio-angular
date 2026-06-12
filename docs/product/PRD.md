# Product Requirements Document — `portfolio-angular`

> Source of truth for product intent. GitHub Issues are derived from this document, not the other way around. When intent changes, update this file first, then regenerate affected issues.

## Problem
Hiring managers, collaborators, and clients evaluating a developer need fast, credible, evidence-based proof of skill. Generic portfolios with inflated copy, fake metrics, and decorative noise reduce trust and slow technical evaluation.

## Product
A single-page personal portfolio for **Muhammad Alif Budiman** built with Angular, SCSS, and Tailwind CSS, deployed to GitHub Pages. It presents identity, background, project evidence, and a direct contact path. Tone is restrained, technical, and specific.

## Primary Users
1. **Recruiter / hiring manager** — wants to confirm role, stack, and real work in under one minute.
2. **Potential collaborator / client** — wants to assess fit and contact directly.
3. **Maintainer (site owner)** — wants low-friction content updates and safe deploys.

## Goals
- Present verifiable project evidence without inflated or fabricated claims.
- Provide a low-friction contact path (EmailJS contact form).
- Keep the site fast, accessible, and readable on mobile and desktop, in dark and light themes.
- Allow safe, incremental feature growth via an issue-first, spec-backed workflow.

## Non-Goals
- No backend/server, database, CMS, or authentication.
- No fabricated case studies, testimonials, client logos, or metrics.
- No heavy dependencies added for small UI behavior.
- No collection or storage of sensitive personal data.

## Success Criteria
- Production build (`npm run build`) passes; deploy succeeds on push to `main`.
- Core routes load without console errors: `/`, `/about-me`, `/portfolio`, `/contact`.
- Lighthouse: Accessibility ≥ 90, Best Practices ≥ 90, SEO ≥ 90 (manual periodic check).
- Contact form has explicit loading / success / error states; submissions reach the configured EmailJS template.
- All copy is specific to the owner and real projects (no AI-slop, per `DESIGN.md`).

## Constraints
- Stack pinned in `package.json`: Angular `^20.3.x`, Angular CLI `^20.3.x`, TypeScript `~5.9.3`, Tailwind CSS `^4.1.4`, Karma/Jasmine.
- Hosting: GitHub Pages via `.github/workflows/deploy.yml`, `npx ng deploy --cname=muhammadalifbudiman.my.id`.
- Secrets: `ENV_SERVICE_ID`, `ENV_TEMPLATE_ID`, `ENV_PUBLIC_KEY` (GitHub Secrets only).
- Each change must be issue-scoped and reviewable in one pull request.

## Verified Baseline (shipped — release `v1.0.1`, 2026-04-11)
- Single-page composition: introduction, about, portfolio, contact.
- Separate routes: `/about-me`, `/portfolio`, `/contact`.
- EmailJS contact form via `EmailService`.
- Dark/light theme tokens (Tailwind dark variant + SCSS tokens).
- Automated GitHub Pages deploy on push to `main`.

## Feature Status
| Feature ID | GitHub Issue | Status | Summary |
|---|---|---|---|
| F001 | #8 | Shipped | Resume viewer/download as PDF |
| F002 | #10 | Planned | Multilanguage support (English + Indonesian) |
| F003 | #11 | Shipped | Theme selector (multiple visual themes, light/dark variants) |

## Known Risks / Debt (carried from `PROJECT_CONTEXT.md`)
- ~~README references Angular CLI `19.0.6` while `package.json` uses `20.3.x`~~ — resolved (F00E #26).
- ~~`cz-customizable` referenced by commit config but missing from `package-lock.json`~~ — resolved; migrated to husky + commitlint (F00E #26).
- ~~Portfolio cards hard-coded in `portfolio.component.html`; typed data model needed before i18n/filtering~~ — resolved (F00B #29 / PR #30).
- `app-button` is a clickable `div`; accessibility audit required before reuse.
- External links must enforce `rel="noopener noreferrer"` on new-tab open.

## Traceability
- Features: `docs/product/FEATURE_SPEC.md`
- Stories + acceptance: `docs/product/USER_STORIES.md`, `docs/product/ACCEPTANCE_CRITERIA.md`
- Sequencing: `docs/ROADMAP.md`
- System design: `docs/architecture/ARCHITECTURE.md`, ADRs
- Verification: `docs/UAT.md`, `docs/QUALITY_GATES.md`
