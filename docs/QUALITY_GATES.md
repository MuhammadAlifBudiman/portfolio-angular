# Quality Gates

## Required For Every PR
```bash
npm ci
npm run build
npm test -- --watch=false --browsers=ChromeHeadless
```

If a command fails, record:
- exact command;
- failure summary;
- first relevant error;
- fix attempt;
- remaining risk if not fixed.

## Security Checklist
- No real secrets committed.
- No environment files with real values committed.
- No unsafe `innerHTML` or sanitizer bypass.
- External links with new tabs are protected with `rel="noopener noreferrer"` or equivalent.
- Contact form validates required fields and handles loading/success/error states.
- Dependency additions are justified and checked with:

```bash
npm audit --audit-level=moderate
```

## Frontend Checklist
- Build succeeds in production mode.
- Routes still work: `/`, `/about-me`, `/portfolio`, `/contact`.
- No console errors during core navigation.
- No layout shift that makes content unreadable on mobile.
- Existing visual theme tokens are preserved unless the issue changes themes.

## Accessibility Checklist
- Interactive elements are keyboard reachable.
- Focus indicators are visible.
- Buttons and links use semantic elements where possible.
- Images have useful alt text.
- Loading and error states are screen-reader comprehensible where applicable.
- Custom cursor does not hide essential browser behavior.

## SEO and Performance Checklist
- Accurate page title and description.
- Open Graph/Twitter metadata only if truthful and project-specific.
- Images are appropriately sized and named.
- Avoid adding heavy dependencies for small UI behavior.
- Prefer static assets for resume download unless dynamic generation is required.

## Design Quality Checklist
- Copy is specific to Muhammad Alif Budiman and actual projects.
- No fake metrics, fake clients, or generic AI-sounding claims.
- Spacing, radius, borders, and colors follow `DESIGN.md`.
- Project cards are scannable and honest about restricted/unavailable links.
- Motion is subtle and does not obstruct reading.
