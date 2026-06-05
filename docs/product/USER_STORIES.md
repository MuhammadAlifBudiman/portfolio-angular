# User Stories — `portfolio-angular`

> Format: `As a <user>, I want <capability>, so that <value>.` Each story maps to a Feature ID and carries acceptance criteria. Detailed Given/When/Then lives in `docs/product/ACCEPTANCE_CRITERIA.md`.

## Recruiter / Hiring Manager

### US-01 — Assess identity fast (F000, F00A)
As a recruiter, I want to see name, role, and stack immediately, so that I can decide to keep reading.
- [ ] Hero states name, role, and a concrete value proposition (no vague identity claims).
- [ ] CTA routes to a meaningful section and is keyboard-operable.

### US-02 — Evaluate real work (F00B)
As a recruiter, I want scannable project cards with role/stack/outcome, so that I can judge skill without guessing.
- [ ] Each card shows name, ownership type, role, stack, one-line problem/solution, link status.
- [ ] Restricted links are labeled honestly; no fabricated case studies.

### US-03 — Download resume (F001 · #8)
As a recruiter, I want to download the resume as PDF, so that I can share it internally.
- [ ] A discoverable control downloads/opens the PDF.
- [ ] Metadata (size, update date) shown when available; control keyboard-operable.
- [ ] No unintended private data shipped.

## Collaborator / Client

### US-04 — Make contact (F00C)
As a collaborator, I want to send a message via a form, so that I can reach the owner without leaving the site.
- [ ] Required fields validated; loading/success/error states explicit.
- [ ] Submission routed through EmailJS; no secrets exposed in UI.

### US-05 — Read in my language (F002 · #10)
As an Indonesian or English speaker, I want to switch language, so that I can read comfortably.
- [ ] Toggle switches all translatable copy.
- [ ] Missing keys fall back to default language; preference persisted.

## Any Visitor

### US-06 — Choose a comfortable theme (F003 · #11)
As a visitor, I want to pick a visual theme and light/dark mode, so that the site is comfortable to read.
- [ ] Style theme is orthogonal to light/dark; unknown keys fall back safely.
- [ ] Selector keyboard-operable; focus visible in all themes; preference persisted.

### US-07 — Accessible, fast experience (F000, F00D)
As a visitor using assistive tech or a slow device, I want accessible, fast pages, so that I can use the site regardless of context.
- [ ] Interactive elements keyboard reachable with visible focus.
- [ ] Images have useful `alt`; contrast readable in both themes.
- [ ] No layout shift that makes content unreadable on mobile; no console errors on core navigation.

## Maintainer

### US-08 — Safe, issue-scoped changes (workflow)
As the maintainer, I want every change traced to a spec-backed issue, so that scope and history stay reviewable.
- [ ] Each change references a Feature ID and a GitHub Issue.
- [ ] One PR per issue; build/tests pass; no secrets committed.

## Global Acceptance (applies to every story)
- [ ] `npm run build` passes.
- [ ] Relevant Karma/Jasmine tests pass or are added.
- [ ] Accessibility, security, and `DESIGN.md` checklists reviewed (`docs/QUALITY_GATES.md`).
