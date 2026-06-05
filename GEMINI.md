# Gemini CLI Project Context: `portfolio-angular`

## Mission
Build and maintain a professional personal portfolio for **Muhammad Alif Budiman** using Angular, SCSS, and Tailwind CSS. Keep output specific, technical, accessible, and truthful.

## Required Context
Before feature work, read:

- `docs/product/PRD.md`
- `docs/product/FEATURE_SPEC.md`
- `docs/product/USER_STORIES.md`
- `docs/product/ACCEPTANCE_CRITERIA.md`
- `docs/ROADMAP.md`
- `docs/architecture/ARCHITECTURE.md`
- `docs/UAT.md`
- `DESIGN.md`
- `docs/AI_WORKFLOW.md`
- `docs/QUALITY_GATES.md`

## Workflow
1. Map work to a Feature ID in `docs/product/FEATURE_SPEC.md`.
2. Confirm or create a GitHub Issue before source edits unless the user explicitly skips that requirement.
3. Link the issue to the `Portfolio V1.0` GitHub Project when available.
4. Keep changes issue-scoped and avoid incidental refactors.
5. Do not push, deploy, or change secrets without explicit user approval.

## Commands
Prefix shell commands with `rtk` when available.

```bash
rtk npm ci
rtk npm run build
rtk npm test -- --watch=false --browsers=ChromeHeadless
```

## Quality Gates
- Build passes.
- Relevant tests pass or the blocker is recorded.
- UI changes are checked against `DESIGN.md`.
- Accessibility is checked for keyboard, focus, semantics, contrast, alt text, and motion.
- Security-sensitive changes are reviewed for secrets, EmailJS, environments, dependencies, external links, and workflows.

Use `docs/AGENTS.md` as role guidance for frontend, accessibility, UI/UX, QA, security, and SEO/performance reviews when Gemini CLI cannot invoke subagents.

## Repository Map
- `src/app/pages/` - standalone page components.
- `src/app/components/` - shared UI.
- `src/app/services/email.service.ts` - EmailJS integration.
- `public/` - static assets.
- `.github/workflows/deploy.yml` - GitHub Pages deployment.
- `.gemini/agents/` - Gemini CLI project subagents.
- `.gemini/commands/` - Gemini CLI project slash commands.
- `.gemini/skills/` - Gemini CLI project skills.
- `.gemini/settings.json` - Gemini CLI hooks/settings.
- `.claude/` - Claude Code only.

## Gemini Native Surfaces
- Project memory/context: `GEMINI.md`.
- Project settings: `.gemini/settings.json`.
- Project subagents: `.gemini/agents/*.md`.
- Project slash commands: `.gemini/commands/*.toml`.
- Project skills: `.gemini/skills/*/SKILL.md`.

## Graphify
This project has a knowledge graph at `graphify-out/`.

Rules:
- For codebase questions, first run `rtk graphify query "<question>"` when `graphify-out/graph.json` exists.
- Use `graphify path "<A>" "<B>"` for relationships and `graphify explain "<concept>"` for focused concepts.
- Read `graphify-out/GRAPH_REPORT.md` only for broad architecture review or when query/path/explain do not surface enough context.
- After modifying code, run `rtk graphify update .` when practical to keep the graph current.
