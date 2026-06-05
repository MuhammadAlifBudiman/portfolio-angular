---
name: implement-portfolio-issue
description: Implement one existing portfolio GitHub Issue in gated phases with build, test, design, accessibility, security, and QA checks.
---

# Implement Portfolio Issue

Use this workflow only after an issue and Feature ID are known, unless the user explicitly authorizes a no-issue path.

1. Read the linked issue, `docs/product/FEATURE_SPEC.md`, acceptance criteria, and any matching `docs/specs/` files.
2. Confirm there are no unresolved `[NEEDS CLARIFICATION]` markers for implementation-critical behavior.
3. Check `git status --short` and preserve unrelated user changes.
4. Create a small implementation plan with goal, files likely to change, verification command before each phase, and rollback notes for risky changes.
5. Implement only issue-scoped files.
6. Verify with `npm run build` and relevant unit tests or `npm test -- --watch=false --browsers=ChromeHeadless`.
7. Perform design, accessibility, security, and QA review.
8. Update traceability docs when status, issue, PR, or verification changes.
