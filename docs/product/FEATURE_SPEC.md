# Feature Specification — `portfolio-angular`

> Defines every feature with a stable ID and functional requirements (FR). Issues, branches, and tests reference these IDs. Derived from `docs/product/PRD.md`.

## ID Scheme
- `Fxxx` = feature. `FR-Fxxx-n` = functional requirement under a feature.
- Status: `shipped`, `planned`, `in-progress`.

---

## F000 — Core Portfolio Shell (shipped)
**Routes:** `/`, `/about-me`, `/portfolio`, `/contact`.
- FR-F000-1: Single-page composition renders introduction, about, portfolio, contact sections.
- FR-F000-2: Standalone routes resolve and render their corresponding section.
- FR-F000-3: Navigation between sections/routes works without console errors.
- FR-F000-4: Layout is responsive (mobile-first → `md`/`lg`/`xl`).

## F00A — About / Identity (shipped)
- FR-F00A-1: Displays name, role, technical positioning, background, social links.
- FR-F00A-2: Photo has descriptive `alt`; treatment is restrained and accessible.
- FR-F00A-3: No fabricated credentials or metrics.

## F00B — Portfolio Showcase (shipped, debt: hard-coded)
- FR-F00B-1: Each project card shows name; ownership type (team/personal/client/internal/restricted); role; stack; one-sentence problem/solution; link status.
- FR-F00B-2: Restricted/unavailable links are labeled honestly.
- FR-F00B-3: Cards are keyboard-scannable and readable on mobile.
- Debt: data is embedded in `portfolio.component.html`; extract to a typed model before F002.

## F00C — Contact (shipped)
- FR-F00C-1: Form validates required fields.
- FR-F00C-2: Form exposes explicit loading / success / error states.
- FR-F00C-3: Submission uses `EmailService` (EmailJS); IDs/keys come only from env/secrets.
- FR-F00C-4: No private implementation values exposed in the UI.

## F00D — Theming Baseline (shipped)
- FR-F00D-1: Dark and light themes use existing SCSS/Tailwind tokens (`DESIGN.md`).
- FR-F00D-2: Both themes maintain readable contrast and visible focus styles.

---

## F001 — Resume PDF (planned · issue #8)
**Goal:** Visitor can view/download the resume as PDF.
- FR-F001-1: A discoverable control downloads/opens the resume PDF.
- FR-F001-2: Prefer a static PDF in `public/`; generate client-side only if content must be dynamic.
- FR-F001-3: Display file metadata (size, update date) when available.
- FR-F001-4: Do not ship private phone/address data unless intentionally public.
- FR-F001-5: Control is keyboard-operable with visible focus.

## F002 — Multilanguage / i18n (planned · issue #10)
**Goal:** Site supports English and Indonesian.
- FR-F002-1: Content is externalized into translation resources before any UI control is added.
- FR-F002-2: A language toggle switches all translatable copy.
- FR-F002-3: Missing keys fall back to a default language (no blank UI).
- FR-F002-4: Project names/proper nouns preserved unless localized intentionally.
- FR-F002-5: Language preference persisted in `localStorage` (non-sensitive).
- Dependency: requires F00B data extraction to a typed model.

## F003 — Theme Selector (planned · issue #11)
**Goal:** Multiple visual themes, each with light/dark variants.
- FR-F003-1: A theme-token object/SCSS token map exists before UI implementation.
- FR-F003-2: Style-theme selection is orthogonal to light/dark mode.
- FR-F003-3: Unknown theme keys fall back to a default theme.
- FR-F003-4: Theme preference persisted in `localStorage` (non-sensitive).
- FR-F003-5: Selector is keyboard-operable; focus visible in all themes.

## F00E — README/Docs Correction (planned · debt)
- FR-F00E-1: README Angular CLI version corrected to match `package.json` (`20.3.x`).
- FR-F00E-2: `cz-customizable` discrepancy resolved or documented.

## F00F — Accessibility & Link-Safety Hygiene (cross-cutting)
- FR-F00F-1: The shared `app-button` renders a native, focusable, keyboard-operable control (Enter/Space) with a visible focus indicator.
- FR-F00F-2: All `target="_blank"` links and `window.open` calls use `rel="noopener noreferrer"` / `noopener,noreferrer` to prevent reverse tabnabbing.

## Out of Scope (all features)
Backend, DB, auth, analytics that track individuals, fabricated content, heavy dependencies for trivial UI.
