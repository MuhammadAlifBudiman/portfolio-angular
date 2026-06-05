---
name: portfolio-review-gate
description: Run the final pre-PR review gate against the current portfolio diff. Use before opening or finalizing a PR.
---

# Portfolio Review Gate

Run this review before PR handoff.

1. Collect change context:
   - `git status --short`
   - `git diff --stat`
   - `git diff -- . ':!package-lock.json'`
2. Confirm the diff is issue-scoped.
3. Confirm required verification has run or run `npm run build` and relevant tests.
4. Review against `DESIGN.md`, `docs/QUALITY_GATES.md`, `docs/UAT.md`, and `docs/security/SECURITY_REQUIREMENTS.md`.
5. Produce verdict, commands run, blocking findings, non-blocking findings, and PR-ready summary.
