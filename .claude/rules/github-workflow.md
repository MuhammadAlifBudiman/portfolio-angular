# GitHub Workflow Rule

- Do not edit source files until an issue exists or the user explicitly authorizes skipping issue creation.
- Check current branch and worktree before changes:
  ```bash
  git status --short
  git branch --show-current
  ```
- Use branch naming: `type/issue-number-short-title`.
- Keep each PR issue-scoped.
- Do not push, merge, or deploy without explicit user approval.
- Use `docs/AI_WORKFLOW.md` for the full workflow.
