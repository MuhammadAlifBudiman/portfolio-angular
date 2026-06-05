# Antigravity Project Context: `portfolio-angular`

## Scope
Shared project truth lives in `docs/`, `DESIGN.md`, `AGENTS.md`, and this rule file.

## Mission
Maintain a professional Angular portfolio for **Muhammad Alif Budiman**. Keep implementation and copy specific, evidence-based, accessible, and restrained.

## Required Reads
- `docs/product/PRD.md`
- `docs/product/FEATURE_SPEC.md`
- `docs/product/USER_STORIES.md`
- `docs/product/ACCEPTANCE_CRITERIA.md`
- `docs/ROADMAP.md`
- `docs/architecture/ARCHITECTURE.md`
- `docs/AI_WORKFLOW.md`
- `docs/QUALITY_GATES.md`
- `docs/UAT.md`
- `DESIGN.md`

## Workflow
1. Map work to a Feature ID before source edits.
2. Confirm or create a GitHub Issue unless the user explicitly authorizes skipping it.
3. Link the issue to `Portfolio V1.0` when available.
4. Keep changes small and issue-scoped.
5. Do not push, deploy, or change secrets without explicit approval.

## Commands
Always prefix shell commands with `rtk` when available.

```bash
rtk git status --short
rtk npm run build
rtk npm test -- --watch=false --browsers=ChromeHeadless
```

## Quality Checks
- Build and relevant tests.
- `DESIGN.md` review for visual changes.
- Accessibility review for keyboard, focus, semantics, contrast, alt text, and motion.
- Security review for EmailJS, generated environments, workflows, dependencies, secrets, and external links.
- SEO/performance review for metadata, images, route semantics, and bundle-impacting changes.

Use `docs/AGENTS.md` as role guidance when dedicated subagents are not available.

## Repository Notes
- Angular standalone components under `src/app/pages/` and `src/app/components/`.
- Contact form uses `src/app/services/email.service.ts`.
- Environment files under `src/environments/environment.ts` and `.prod.ts` are generated/local and must not contain committed real values.
- Open issues #8, #10, and #11 are linked to the `Portfolio V1.0` GitHub Project board.

## Antigravity Native Surfaces
- Workspace rules: `.agents/rules/*.md`.
- Workspace skills: `.agents/skills/*/SKILL.md`.
- CLI settings are user-level at `~/.gemini/antigravity-cli/settings.json`.
- Plugins, if installed globally, are staged under `~/.gemini/antigravity-cli/plugins/`.
