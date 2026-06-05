---
paths:
  - "src/**/*.spec.ts"
  - "src/**/*.ts"
  - "angular.json"
  - "package.json"
---

# Testing Rule

- For logic changes, add focused Karma/Jasmine specs.
- Mock external services such as EmailJS.
- Prefer testing behavior over implementation details.
- Verification command for complete PR review:
  ```bash
  npm test -- --watch=false --browsers=ChromeHeadless
  ```
- If tests cannot run locally, record the exact blocker and rely on `npm run build` only as a temporary minimum.
