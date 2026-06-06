# Codex / General Agent Context: `portfolio-angular`

## Mission
Build and maintain a professional personal portfolio for **Muhammad Alif Budiman** using Angular, SCSS, and Tailwind CSS. Keep output specific, technical, accessible, and truthful.

## Shell Rule
Prefix shell commands with `rtk` when available to reduce token-heavy output.

```bash
rtk git status --short
rtk npm run build
rtk npm test -- --watch=false --browsers=ChromeHeadless
```

If `rtk` cannot run a command shape cleanly, use the underlying command directly and keep output focused.

## Source Of Truth
Read these before planning feature work:

- `docs/product/PRD.md`
- `docs/product/FEATURE_SPEC.md`
- `docs/product/USER_STORIES.md`
- `docs/product/ACCEPTANCE_CRITERIA.md`
- `docs/ROADMAP.md`
- `docs/architecture/ARCHITECTURE.md`
- `docs/UAT.md`
- `DESIGN.md`

GitHub Issues are execution trackers. Product requirements live in `docs/product/` and `docs/specs/`.

## Repository Map
- `src/app/pages/introduction/` - hero/introduction content.
- `src/app/pages/about-me/` - bio, photo, social links.
- `src/app/pages/portfolio/` - hard-coded project showcase cards.
- `src/app/pages/contact/` - contact form and contact metadata.
- `src/app/components/` - shared UI components.
- `src/app/services/email.service.ts` - EmailJS integration.
- `.github/ISSUE_TEMPLATE/` - GitHub issue forms.
- `.agents/skills/` - Codex and Antigravity workspace skills.
- `.agents/rules/` - Antigravity workspace rules.
- `.codex/agents/` - Codex project custom subagents.
- `.gemini/` and `GEMINI.md` - Gemini CLI context, agents, skills, and commands.
- `.claude/` and `CLAUDE.md` - Claude Code only.

## Mandatory Workflow
1. Confirm the work maps to a Feature ID in `docs/product/FEATURE_SPEC.md`; if not, update the spec first or get explicit no-spec approval.
2. Before source-code edits, confirm or create a GitHub Issue that cites the Feature ID, unless the user explicitly authorizes skipping the issue.
3. Link the issue to the `Portfolio V1.0` GitHub Project when available.
4. Work in small phases: research, plan, implement, test, review, ship.
5. Use branch format `type/issue-number-short-title`, for example `feat/11-theme-selector`.
6. Do not push, deploy, or change secrets without explicit user approval.

## Canonical Commands
- Install: `npm ci`
- Dev server: `npm start`
- Production build: `npm run build`
- Unit tests: `npm test -- --watch=false --browsers=ChromeHeadless`

## Quality Gates
Every non-trivial change must pass:

- `npm run build`
- affected unit tests or `npm test -- --watch=false --browsers=ChromeHeadless`
- manual review against `DESIGN.md`
- accessibility review for keyboard access, semantics, focus, contrast, and alt text
- security review for contact form, environment files, external links, and dependencies

When dedicated subagents are unavailable, use `docs/AGENTS.md` as a role checklist and perform the equivalent reviews in the current agent session.

## Codex Native Surfaces
- Project instructions: `AGENTS.md`.
- Project custom subagents: `.codex/agents/*.toml`.
- Project skills: `.agents/skills/*/SKILL.md`.
- Project rules/hooks, if available later: `.codex/rules/*.rules` and `.codex/hooks.json`.

## Design Rules
- Follow `DESIGN.md` before visual edits.
- Preserve the current dark/light token system unless the issue explicitly changes themes.
- Keep UI clean, restrained, technical, and portfolio-specific.
- Prefer concrete project evidence over inflated descriptors.
- Use semantic HTML for interactive UI whenever feasible.

## Security Rules
- Never commit real secrets, EmailJS service IDs, template IDs, or public keys.
- Treat `src/environments/environment.ts` and `src/environments/environment.prod.ts` as generated/local files.
- Do not use unsanitized `innerHTML` or Angular sanitizer bypasses without a documented reason.
- External links opened with `_blank` must use safe `rel` attributes.
- Store only non-sensitive preferences in `localStorage`.

## Known Repository Issues
- Portfolio cards are hard-coded in HTML; data extraction is a planned refactor (F00B debt, blocks F002).
- Portfolio cards are currently hard-coded in HTML; data extraction is a planned refactor, not incidental cleanup.
- Open issues #8, #10, and #11 are linked to the `Portfolio V1.0` GitHub Project board.

## Graphify
If `graphify-out/graph.json` exists and the task is a codebase question, start with:

```bash
rtk graphify query "<question>" --budget 1800
```

Use direct file reads after Graphify when the graph answer is shallow or stale.
