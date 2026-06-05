---
paths:
  - "src/**/*.ts"
  - "src/**/*.html"
  - "src/**/*.scss"
---

# Angular Rule

- Use standalone Angular component patterns already present in the project.
- Preserve strict TypeScript behavior from `tsconfig.json`.
- Prefer typed component properties and typed data models over untyped literals when adding logic.
- Keep route changes in `src/app/app.routes.ts` minimal and explicit.
- Avoid incidental refactors in hard-coded portfolio cards unless the issue requires data extraction.
- If adding form behavior, update or add Karma/Jasmine tests.
- If opening external links in templates, use safe link behavior.
