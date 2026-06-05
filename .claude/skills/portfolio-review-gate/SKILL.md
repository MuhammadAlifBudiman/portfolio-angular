---
name: portfolio-review-gate
description: Run the final pre-PR portfolio review gate against current diff.
argument-hint: "[optional issue-number]"
disable-model-invocation: true
allowed-tools: Read, Glob, Grep, Bash
---

# Portfolio Review Gate

Context:

```text
$ARGUMENTS
```

Collect current change context:
```bash
git status --short
git diff --stat
git diff -- . ':!package-lock.json'
```

Required review:
1. Confirm the diff is issue-scoped.
2. Confirm build/test commands were run or run them now:
   ```bash
   npm run build
   npm test -- --watch=false --browsers=ChromeHeadless
   ```
3. Review against `DESIGN.md`.
4. Review security-sensitive files and dependencies.
5. Review accessibility and SEO/performance where applicable.
6. Produce a PR-ready summary and a blocking/non-blocking finding list.

Output format:
- Verdict: pass / pass with notes / fail.
- Commands run.
- Blocking findings.
- Non-blocking findings.
- PR summary.
