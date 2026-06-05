# Project Context — `portfolio-angular`

## Verified Repository Facts
- Repository: `MuhammadAlifBudiman/portfolio-angular`.
- App purpose: personal portfolio website showing projects, skills/background, and contact information.
- Public repo description states it is a modern responsive Angular portfolio.
- Public GitHub repo shows 54 commits, 3 open issues, 0 pull requests, and a Projects v2 board named `Portfolio V1.0` linked from the open backlog issues.
- Public GitHub repo release area shows latest release `Portfolio Website v1.0.1` dated Apr 11, 2026.
- Local uploaded project uses Angular `^20.3.x` in `package.json`.

## Current Features
- Single-page composition through `MainComponent`: introduction, about, portfolio, contact.
- Separate routes also exist for `/about-me`, `/portfolio`, and `/contact`.
- Contact form uses EmailJS through `EmailService`.
- Theme classes use Tailwind dark variant and SCSS tokens.
- GitHub Pages deployment is automated on push to `main`.

## Open Public Backlog
| Issue | Title | Core request |
|---:|---|---|
| #8 | `[FEAT]: Download Resume sebagai PDF` | Add resume viewer/download as PDF. |
| #10 | `[FEAT]: Dukungan Multibahasa (i18n)` | Add English and Indonesian language support. |
| #11 | `[FEAT]: Sistem Pemilihan Tema (Theme Selector)` | Add multiple visual themes with light/dark variants. |

## Technical Debt Candidates
- README version mismatch: README references Angular CLI 19.0.6 while `package.json` uses Angular 20.3.x.
- Commitizen config references `cz-customizable`, but the dependency is missing from `package-lock.json`.
- Portfolio data is embedded directly in `portfolio.component.html`; a typed data model would simplify i18n, filtering, testing, and future project additions.
- `app-button` is currently a clickable `div`; audit keyboard accessibility and semantics before expanding use.
- External project/social links should be audited for `rel="noopener noreferrer"` when opened in a new tab.
- `src/environments/environment.ts` and `.prod.ts` are generated/local but referenced by imports; keep real values out of source control.

## Development Commands
```bash
npm ci
npm start
npm run build
npm test -- --watch=false --browsers=ChromeHeadless
```

## Deployment Context
- Deploy workflow: `.github/workflows/deploy.yml`.
- Required secrets by workflow name:
  - `ENV_SERVICE_ID`
  - `ENV_TEMPLATE_ID`
  - `ENV_PUBLIC_KEY`
- Deployment command used by workflow: `npx ng deploy --cname=muhammadalifbudiman.my.id`.

## Implementation Constraints
- No feature should be implemented without an issue reference unless the user explicitly authorizes a hotfix/no-issue path.
- Do not refactor unrelated sections during feature implementation.
- Keep issue scope small enough to review in one pull request.
- Use project-specific copy; do not invent achievements.
