# Muhammad Alif Budiman — Portfolio

Personal portfolio website for Muhammad Alif Budiman, a full-stack web developer focused on backend APIs and workflow systems.

Live site: [muhammadalifbudiman.my.id](https://muhammadalifbudiman.my.id)

## Features

- Professional introduction with evidence-based quick facts and resume access
- About, Experience, Technologies, Projects, Certifications, and Contact sections
- Filterable project showcase with dedicated case-study routes (`/projects/:slug`)
- English and Indonesian content
- Persistent dark/light mode and selectable accent themes
- EmailJS contact form with validation and accessible status feedback
- Static prerendering for the main pages and five project case studies
- Responsive layouts, keyboard navigation, skip navigation, reduced-motion support, and visible focus states
- Progressive custom cursor enhancement on supported pointer devices

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Angular 20 (standalone components) |
| Language | TypeScript ~5.9 |
| Styling | Tailwind CSS v4, SCSS |
| Rendering | Angular SSR package with static prerendering |
| Contact | EmailJS |
| Unit tests | Karma / Jasmine |
| E2E tests | Playwright |
| Hosting | GitHub Pages with a custom domain |

## Project Structure

```
src/app/
  pages/          # introduction, about-me, portfolio, contact,
                  # project-detail, certifications, experience
  components/     # button, header, footer, project-card,
                  # project-status-badge, theme-selector, language-selector
  services/       # email, language, seo, theme
  directives/     # custom-cursor
  data/           # projects, case-studies, experiences, certifications
  i18n/           # en.ts, id.ts
public/           # static assets, resume.pdf, project images/diagrams
tests/            # Playwright E2E specs
docs/             # product specs, architecture ADRs, roadmap, UAT
```

## Development

Requirements:

- Node.js 20 (CI uses 20.19.5)
- npm

**Install dependencies**

```bash
npm ci
```

**Create local environment files**

```bash
npm run setup:env
```

This copies the safe example configuration to the ignored local environment files. To test contact delivery locally, set your own EmailJS `serviceId`, `templateId`, and `publicKey` in `src/environments/environment.prod.ts`. Never commit real values.

**Development server** — http://localhost:4200

```bash
npm start
```

**Production build**

```bash
npm run build
```

The production build emits the static site under `dist/portfolio/browser`.

**Unit tests**

```bash
npm run test:ci
```

**E2E tests**

```bash
npm run test:ui
```

## Architecture

The application is a standalone-component Angular site with typed data modules for projects, case studies, experience, and certifications. Services manage language, theme, SEO metadata, and EmailJS delivery. Angular's static output mode prerenders public routes at build time; the deployed application has no database, authentication layer, or custom backend.

See [docs/architecture/ARCHITECTURE.md](docs/architecture/ARCHITECTURE.md) for the system design and [docs/product/FEATURE_SPEC.md](docs/product/FEATURE_SPEC.md) for the feature inventory.

## Deployment

Pushes to `main` trigger `.github/workflows/deploy.yml`. The workflow installs dependencies, injects EmailJS values from GitHub Actions secrets, builds the static site, and deploys it to the `gh-pages` branch:

```bash
npx ng deploy --cname=muhammadalifbudiman.my.id
```

Required repository secrets:

- `ENV_SERVICE_ID`
- `ENV_TEMPLATE_ID`
- `ENV_PUBLIC_KEY`

Do not place production credentials in tracked environment files.

### Resume Sync

`public/resume.pdf` is generated from the `external/cv-latex` submodule. Run this after cloning or when the CV source changes:

```bash
git submodule update --init --recursive
npm run resume:sync
```

The deploy workflow runs the same sync before tests and build. A separate `Sync Resume from cv-latex` workflow can be triggered manually or by a `repository_dispatch` event type of `cv-latex-updated`. See [docs/automation/CV_RESUME_SYNC.md](docs/automation/CV_RESUME_SYNC.md) for local setup, dispatch token notes, and troubleshooting.

## License

Personal project — all rights reserved.
