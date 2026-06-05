# AI-Assisted Development Workflow

## Non-Negotiable Rule
Agent must not start source-code edits until BOTH are true:
- the work maps to a Feature ID in `docs/product/FEATURE_SPEC.md` (or the spec has been updated to cover it, or the user explicitly authorizes a no-spec path); AND
- one of:
1. an existing GitHub Issue URL/number; or
2. a newly created GitHub Issue; or
3. an explicit user instruction to skip the issue requirement.

## Spec Is Upstream Of Issues
The specification layer is the source of truth. Issues are derived from it, not invented free-form.
- Product intent: `docs/product/PRD.md`
- Features + functional requirements: `docs/product/FEATURE_SPEC.md` (use the `Fxxx` ID)
- Stories + acceptance: `docs/product/USER_STORIES.md`, `docs/product/ACCEPTANCE_CRITERIA.md`
- Sequencing: `docs/ROADMAP.md`
If a request is not yet covered by the spec, update the PRD/FEATURE_SPEC first (or get explicit owner approval to proceed without a spec), then create the issue.

## Workflow State Machine
1. **Intake** — restate the requested outcome; map it to a Feature ID in `FEATURE_SPEC.md`; restate affected routes/components and the acceptance criteria from `ACCEPTANCE_CRITERIA.md`. If no Feature ID fits, update the spec first.
2. **Issue** — create or identify a GitHub Issue using the portfolio issue template; cite the Feature ID and link the acceptance criteria.
3. **Project Link** — link issue to the `Portfolio V1.0` GitHub Project when available.
4. **Plan** — produce a small phased implementation plan and verification plan.
5. **Branch** — create a branch named `type/issue-number-short-title`.
6. **Implement** — change only issue-scoped files.
7. **Verify** — run build/tests and manual review checklist.
8. **Review** — call relevant specialist subagents and summarize findings.
9. **PR** — open a pull request with linked issue, test evidence, screenshots if UI changed, and risk notes.

## GitHub Issue Creation
### Web UI
Use `.github/ISSUE_TEMPLATE/portfolio-feature.yml` or the existing issue forms.

### GitHub CLI fallback
Use `docs/templates/portfolio-feature-issue.md` as the body source:

```bash
cp docs/templates/portfolio-feature-issue.md /tmp/portfolio-issue.md
# Fill placeholders manually before creating the issue.
gh issue create \
  --repo MuhammadAlifBudiman/portfolio-angular \
  --title "[FEAT]: <short title>" \
  --label enhancement \
  --body-file /tmp/portfolio-issue.md
```

## GitHub Project Linking
The open backlog issues are linked to a Projects v2 board named `Portfolio V1.0`. Verify the owner-scoped project number before running:

```bash
OWNER="MuhammadAlifBudiman"
PROJECT_NUMBER="<project-number>"
ISSUE_URL="https://github.com/MuhammadAlifBudiman/portfolio-angular/issues/<issue-number>"

gh project item-add "$PROJECT_NUMBER" --owner "$OWNER" --url "$ISSUE_URL"
```

Recommended project fields:
- Status: Backlog, Ready, In Progress, Review, Done.
- Type: Feature, Bug, Chore, Docs, Security, UX, SEO.
- Priority: P0, P1, P2, P3.
- Area: Design, Frontend, Content, Test, Security, Deployment.

## Phase Format
Each phase must have:
- goal;
- files likely to change;
- verification command or manual check;
- rollback notes for risky changes.

## Subagent Use

- Use `portfolio-ui-ux-reviewer` before accepting visual changes.
- Use `portfolio-accessibility-auditor` before accepting UI changes that affect keyboard, focus, contrast, semantics, or motion.
- Use `portfolio-qa-engineer` before marking implementation complete.
- Use `portfolio-security-analyst` for contact form, dependencies, environment, and workflow edits.
- Use `portfolio-seo-performance-analyst` for metadata, image, route, and performance changes.
- Use `portfolio-frontend-engineer` for Angular architecture or implementation planning.

## Pull Request Requirements
The PR body must include:
- `Closes #<issue-number>`;
- summary of changes;
- screenshots or screen recordings for UI changes;
- commands run and outcomes;
- accessibility review notes;
- security review notes;
- known limitations or follow-up issues.
