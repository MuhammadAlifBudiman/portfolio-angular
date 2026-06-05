---
name: implement-portfolio-issue
description: Implement one existing portfolio GitHub Issue in gated phases with build, test, design, security, and QA checks.
argument-hint: "<issue-number-or-url>"
disable-model-invocation: true
allowed-tools: Read, Glob, Grep, Bash, Edit, MultiEdit
---

# Implement Portfolio Issue

Issue:

```text
$ARGUMENTS
```

Required process:
1. Read the issue details using `gh issue view` when available.
2. Confirm branch naming: `type/issue-number-short-title`.
3. Create a phase plan before editing.
4. Implement one phase at a time.
5. After each phase, run the smallest meaningful verification.
6. Before completion, run:
   ```bash
   npm run build
   npm test -- --watch=false --browsers=ChromeHeadless
   ```
7. Invoke or manually apply review gates:
   - UI/UX if templates/styles/copy changed;
   - QA if logic/tests changed;
   - Security if dependencies/contact/env/workflows/external links changed;
   - SEO/performance if metadata/assets/routes changed.
8. Prepare PR summary with `Closes #<issue-number>`.

Do not push or deploy without explicit approval.
