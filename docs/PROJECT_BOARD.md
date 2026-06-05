# GitHub Project Board Setup

## Current State
The open backlog issues are linked to a GitHub Projects v2 board named `Portfolio V1.0`. Agents should still verify the current project number before running `gh project` commands because GitHub Projects are owner-scoped.

## Board
Title: `Portfolio V1.0`

### Views
- **Kanban** grouped by Status.
- **Backlog** filtered to Status = Backlog or Ready.
- **Review** filtered to Status = Review.
- **Security/QA** filtered to Type = Security or Area = Test.

### Fields
| Field | Type | Values |
|---|---|---|
| Status | Single select | Backlog, Ready, In Progress, Review, Done |
| Type | Single select | Feature, Bug, Chore, Docs, Security, UX, SEO |
| Priority | Single select | P0, P1, P2, P3 |
| Area | Single select | Design, Frontend, Content, Test, Security, Deployment |
| Phase | Single select | Research, Plan, Build, Verify, Ship |

## Existing Linked Issues
- #8 — Resume PDF.
- #10 — i18n.
- #11 — Theme selector.

## GitHub CLI Notes
GitHub Projects v2 uses owner-scoped project numbers. After creating a board, run:

```bash
gh project list --owner MuhammadAlifBudiman
```

If an issue is missing from the board, add it with:

```bash
gh project item-add <project-number> \
  --owner MuhammadAlifBudiman \
  --url https://github.com/MuhammadAlifBudiman/portfolio-angular/issues/8

gh project item-add <project-number> \
  --owner MuhammadAlifBudiman \
  --url https://github.com/MuhammadAlifBudiman/portfolio-angular/issues/10

gh project item-add <project-number> \
  --owner MuhammadAlifBudiman \
  --url https://github.com/MuhammadAlifBudiman/portfolio-angular/issues/11
```
