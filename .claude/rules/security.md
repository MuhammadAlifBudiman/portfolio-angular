---
paths:
  - "src/app/services/**/*.ts"
  - "src/app/pages/contact/**/*"
  - "src/environments/**/*"
  - ".github/workflows/**/*"
  - "package.json"
  - "package-lock.json"
---

# Security Rule

- Do not read, print, or commit real environment files.
- EmailJS IDs and keys must come from GitHub Secrets or local generated environment files.
- Treat workflow changes as security-sensitive.
- For dependency additions, check package necessity and run `npm audit --audit-level=moderate` when possible.
- Never add sanitizer bypasses unless the risk and alternative are documented.
- Review external links for reverse-tabnabbing protection.
