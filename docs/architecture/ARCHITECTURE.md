# Architecture — `portfolio-angular`

> System design overview (SDD). Decisions are recorded as ADRs in `docs/architecture/`. This is a static, client-only Angular site; there is no backend.

## System Context
- **Type:** Static single-page application (SPA), client-only.
- **Repo:** `MuhammadAlifBudiman/portfolio-angular`.
- **Hosting:** GitHub Pages (custom domain `muhammadalifbudiman.my.id`).
- **External service:** EmailJS (contact form delivery). No server, DB, or auth.

```
Visitor browser
   │  HTTPS
   ▼
GitHub Pages (static Angular bundle)
   │  client-side call
   ▼
EmailJS API  ──►  Owner inbox
```

## Frontend Architecture
- Angular standalone components; routes in `src/app/app.routes.ts`.
- Pages: `introduction`, `about-me`, `portfolio`, `contact` (`src/app/pages/`).
- Shared UI in `src/app/components/`.
- `EmailService` (`src/app/services/email.service.ts`) wraps EmailJS.
- Styling: `src/styles.scss`, `src/tailwind.css`, `src/fonts.scss`; tokens per `DESIGN.md`.
- Static assets: `public/`, `public/projects/`.

## Data Model (current + target)
- **Current:** project data is embedded in `portfolio.component.html` (debt).
- **Target:** typed `Project` model (name, ownershipType, role, stack[], summary, links[], status) consumed by the portfolio page. Required before i18n (F002) and filtering.

## Configuration & Secrets
- EmailJS values injected via generated env files from CI secrets: `ENV_SERVICE_ID`, `ENV_TEMPLATE_ID`, `ENV_PUBLIC_KEY`.
- `src/environments/environment.ts` / `environment.prod.ts` are generated/local; never commit real values.

## Build & Deploy Pipeline
```
push to main
   ▼
.github/workflows/deploy.yml
   ▼ npm ci → write env from secrets → npm run build → npx ng deploy --cname=muhammadalifbudiman.my.id
   ▼
GitHub Pages
```

## Quality / Test Architecture
- Unit: Karma/Jasmine (`*.spec.ts`), EmailJS and time mocked.
- Gates: `npm run build`, unit tests, manual a11y/security/design review (`docs/QUALITY_GATES.md`).
- UAT: manual cases in `docs/UAT.md`.

## Non-Functional Requirements
- **Performance:** avoid heavy deps for small UI; static PDF preferred over client generation.
- **Accessibility:** keyboard reachable, visible focus, semantic elements, alt text, dual-theme contrast.
- **Security:** no committed secrets, no unsanitized `innerHTML`, safe `rel` on new-tab links, only non-sensitive prefs in `localStorage`.
- **SEO:** truthful title/description/canonical/OG metadata in `src/index.html`.

## Cross-References
PRD `docs/product/PRD.md` · Features `docs/product/FEATURE_SPEC.md` · ADRs `docs/architecture/ADR-*.md` · Workflow `docs/AI_WORKFLOW.md`.
