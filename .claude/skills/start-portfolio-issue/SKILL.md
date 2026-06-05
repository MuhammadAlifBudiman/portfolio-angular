---
name: start-portfolio-issue
description: Convert a portfolio change request into a GitHub Issue-first plan before implementation.
argument-hint: "<feature or bug request>"
disable-model-invocation: true
allowed-tools: Read, Glob, Grep, Bash
---

# Start Portfolio Issue

Input request:

```text
$ARGUMENTS
```

Process:
1. Inspect existing issues if `gh` is authenticated:
   ```bash
   gh issue list --repo MuhammadAlifBudiman/portfolio-angular --state open --limit 20
   ```
2. Determine whether the request maps to an existing issue.
3. If no issue exists, draft an issue body using `docs/templates/portfolio-feature-issue.md`.
4. Ask for approval before running `gh issue create`.
5. If a GitHub Project exists, ask for the project number before linking with `gh project item-add`.
6. Produce a phase plan with verification commands.

Output:
- issue match or issue draft;
- proposed labels/area/priority;
- phased implementation plan;
- verification plan;
- subagents to call.
