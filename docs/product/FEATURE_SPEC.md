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

## F00B — Portfolio Showcase (shipped)
- FR-F00B-1: Each project card shows name; ownership type (team/personal/client/internal/restricted); role; stack; one-sentence problem/solution; link status.
- FR-F00B-2: Restricted/unavailable links are labeled honestly.
- FR-F00B-3: Cards are keyboard-scannable and readable on mobile.
- Data is extracted to a typed model in `src/app/data/projects.data.ts`, unblocking F002.

## F00C — Contact (shipped)
- FR-F00C-1: Form validates required fields.
- FR-F00C-2: Form exposes explicit loading / success / error states.
- FR-F00C-3: Submission uses `EmailService` (EmailJS); IDs/keys come only from env/secrets.
- FR-F00C-4: No private implementation values exposed in the UI.

## F00D — Theming Baseline (shipped)
- FR-F00D-1: Dark and light themes use existing SCSS/Tailwind tokens (`DESIGN.md`).
- FR-F00D-2: Both themes maintain readable contrast and visible focus styles.
- FR-F00D-3: `@theme` block in `styles.scss` includes `--radius-*`, `--shadow-*` tokens; ad-hoc arbitrary values for shadows and border-radius are replaced with token utilities across components.
- FR-F00D-4: Theme-selector accent swatches reference the CSS accent tokens for each theme variant rather than hardcoded hex literals.

---

## F001 — Resume PDF (shipped · issue #8 · PR #31)
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

## F003 — Theme Selector (shipped · issue #11 · PR #34)
**Goal:** Multiple visual themes, each with light/dark variants.
- FR-F003-1: A theme-token object/SCSS token map exists before UI implementation.
- FR-F003-2: Style-theme selection is orthogonal to light/dark mode.
- FR-F003-3: Unknown theme keys fall back to a default theme.
- FR-F003-4: Theme preference persisted in `localStorage` (non-sensitive).
- FR-F003-5: Selector is keyboard-operable; focus visible in all themes.

## F00E — README/Docs Correction (shipped · #26)
- FR-F00E-1: README Angular CLI version corrected to match `package.json` (`20.3.x`). ✓ README:3 reads "version 20.3.x".
- FR-F00E-2: `cz-customizable` discrepancy resolved. ✓ Migrated to husky + `@commitlint/config-conventional`; `cz-customizable` removed.

## F00F — Accessibility & Link-Safety Hygiene (cross-cutting)
- FR-F00F-1: The shared `app-button` renders a native, focusable, keyboard-operable control (Enter/Space) with a visible focus indicator.
- FR-F00F-2: All `target="_blank"` links and `window.open` calls use `rel="noopener noreferrer"` / `noopener,noreferrer` to prevent reverse tabnabbing.

## F00G — Dev Environment & CI Quality (shipped · #35 · PR #41)
**Goal:** Local build + test commands work without manual workarounds; CI hygiene verified.
- FR-F00G-1: `npm run build` succeeds locally with a documented env bootstrap (`npm run setup:env` or equivalent).
- FR-F00G-2: `npm test -- --watch=false --browsers=ChromeHeadless` passes without manual env-var overrides (requires `karma.conf.js` with `ChromeHeadlessNoSandbox` launcher).
- FR-F00G-3: `CHROME_BIN` / sandbox requirements are documented for contributors.
- FR-F00G-4: CI workflow uses `contents: write` only at job scope; top-level permission is `read`.
- FR-F00G-5: `setup-node` action version is verified or pinned to a known SHA.

## F00H — WCAG 2.1 AA Accessibility Remediation (shipped · #36 · PR #41)
**Goal:** All pages and components meet WCAG 2.1 AA across keyboard, contrast, semantics, and motion.
- FR-F00H-1: A `<main id="main-content">` landmark wraps page content; a skip-navigation link is the first focusable element.
- FR-F00H-2: Each page has a single logical `<h1>`; section titles on the composite `/` route are `<h2>`.
- FR-F00H-3: The logo home link has an accessible name (`aria-label` or SVG `<title>`/`aria-labelledby`).
- FR-F00H-4: `cursor: none` is scoped to `@media (pointer: fine)` or equivalent; keyboard-focused elements retain pointer affordance; JS cursor is suppressed when `prefers-reduced-motion: reduce` is set.
- FR-F00H-5: Default light accent `#4ecba3` is replaced or darkened where used as text/UI-component colour to meet 4.5:1 (text) and 3:1 (non-text) ratios; active theme-option text meets 4.5:1.
- FR-F00H-6: Contact alert text (success and error) meets 4.5:1 in all themes.
- FR-F00H-7: Contact form loading indicator has `role="status"` and `aria-live="polite"`.
- FR-F00H-8: Mobile nav menu closes on Escape; `<nav>` has `aria-hidden` toggled with the menu state.
- FR-F00H-9: Social icon SVGs use `aria-labelledby` pointing to `<title id>`, or links carry `aria-label` and SVG is `aria-hidden`.
- FR-F00H-10: Theme-selector trigger uses `role="button"` with `aria-haspopup="listbox"` and `aria-expanded`; `role="combobox"` is removed.
- FR-F00H-11: Social icon anchor links in About Me have `focus-visible` outline styles matching the focus ring pattern used by form inputs and `app-button`.
- FR-F00H-12: Portfolio "Other" project cards use `<h3>` (not `<h4>`) so heading level matches the identical "Featured" cards; heading order within the portfolio section is consistent.
- FR-F00H-13: `mailto:` links do not carry `target="_blank"` or `rel` attributes; only `https://` external links use `target="_blank" rel="noopener noreferrer"`.
- FR-F00H-14: The invalid Tailwind utility `lg:max-width-[550px]` in `introduction.component.html` is replaced with the correct `lg:max-w-[550px]`; hero width cap is verified to apply at `lg` breakpoints.
- FR-F00H-15: The redundant `role="button"` attribute is removed from the native `<button>` element in `theme-selector.component.html`.

## F00I — SEO, Performance & Social Metadata (shipped · #37 · PR #41)
**Goal:** All pages are crawlable, social-preview-ready, and performant on initial load.
- FR-F00I-1: `src/index.html` contains `<meta name="description">`, canonical, OG, Twitter Card, and `<meta name="author">` with truthful values.
- FR-F00I-2: `<title>` includes a keyword descriptor (e.g. "Muhammad Alif Budiman — Web Developer | Portfolio").
- FR-F00I-3: JSON-LD `ProfilePage`/`Person` structured data is present in `<head>`.
- FR-F00I-4: `public/robots.txt` and `public/sitemap.xml` exist and reference all four routes.
- FR-F00I-5: Angular prerender is enabled for `/`, `/about-me`, `/portfolio`, `/contact`; `prerendered-routes.json` lists all four; route `index.html` files contain rendered text.
- FR-F00I-6: Per-route `<title>` and `<meta name="description">` are updated via Angular `Title`/`Meta` services in each page component.
- FR-F00I-7: Hero photo (`my-photo.png`) is converted to WebP at ≤ 80 KB and has explicit `width`/`height` attributes; `<img>` carries `loading="lazy"` or `fetchpriority="high"` as appropriate.
- FR-F00I-8: Project images have `loading="lazy"`, explicit dimensions, and a WebP variant at reduced file size.
- FR-F00I-9: `<link rel="preconnect">` hints exist for both Google Fonts origins; Roboto Mono import is narrowed to used weights only.
- FR-F00I-10: Favicon set includes apple-touch-icon (180×180) and `manifest.json` with `theme-color`.

## F00J — Security Hardening (shipped · #38 · PR #41)
**Goal:** Contact form and CI/CD pipeline are hardened against abuse and supply-chain risk.
- FR-F00J-1: `ButtonComponent` exposes a `disabled` input; the contact form submit button is bound to `[disabled]="isLoading"` to prevent double-submit.
- FR-F00J-2: A 30-second client-side cooldown is enforced after a successful send; state is in component memory (not `localStorage`).
- FR-F00J-3: `sendData()` performs programmatic validation (required, email format, maxlength) before calling `EmailService`.
- FR-F00J-4: Contact form fields have `maxlength` attributes (100 for name/subject, 2000 for message).
- FR-F00J-5: `emailjs-com` is replaced with `@emailjs/browser`; `puppeteer` is removed if unused.
- FR-F00J-6: CI workflow top-level `permissions` is `contents: read`; `contents: write` is granted only at job scope.
- FR-F00J-7: Secret interpolation into `environment.prod.ts` uses a Node.js script or heredoc to avoid shell expansion risks.
- FR-F00J-8: Dark/light theme storage is consolidated into `ThemeService` using a single `localStorage` key; `HeaderComponent` delegates to the service.
- FR-F00J-9: EmailJS domain allowlist requirement is documented in `docs/security/EMAILJS.md`.

## F00K — Content Quality & UI Correctness (shipped · #39 · PR #41)
**Goal:** All copy is specific and evidence-based; layout is correct at all viewports; project cards satisfy FR-F00B-1.
- FR-F00K-1: Hero `introductionText` names the current tech stack and references at least one project type; "eager to learn" phrase is removed.
- FR-F00K-2: About-Me paragraphs name specific tools/frameworks; "eager to learn" and other generic filler are removed; photo `alt` is descriptive and capitalised.
- FR-F00K-3: All project `imageAlt` values describe screenshot content, not deploy URLs.
- FR-F00K-4: Contact form wrapper has `max-w-xl` (or equivalent) to cap line length on wide viewports.
- FR-F00K-5: Width-relative `%` margins (`mt-[-5%]`, `mb-[1%]`, `mb-[5%]`, `mb-[5%]` on labels) are replaced with fixed Tailwind spacing utilities.
- FR-F00K-6: `Project` model includes `role?: string`, `stack: string[]`, and `linkStatus: 'live' | 'restricted' | 'unavailable'`; ownership union extended to `'team' | 'personal' | 'client' | 'internal' | 'restricted'`.
- FR-F00K-7: Project cards display `stack` and `linkStatus`; team-project entries include a `role` value.
- FR-F00K-8: Mobile nav closes when a `routerLink` item is clicked and when the user taps/clicks outside the menu.
- FR-F00K-9: `transition-[colors, transform]` Tailwind v4 syntax is corrected to a valid form.
- FR-F00K-10: Dark-mode toggle `<input>` has `aria-label="Toggle dark mode"`; `<label>` has a visible focus ring.

## F00L — Test Coverage Baseline (shipped · #40)
**Goal:** All behaviorally significant components, services, and directives have a Karma/Jasmine spec; tests are deterministic.
- FR-F00L-1: `EmailService` has a spec that mocks `emailjs.sendForm` and covers resolve and reject branches.
- FR-F00L-2: `ContactComponent` has a spec covering: loading state, success/error alert, form reset, time input, and the early-return guard; EmailJS and `Date` are mocked.
- FR-F00L-3: `IntroductionComponent` has a spec covering `navigate()` with a `Router` spy.
- FR-F00L-4: `ThemeSelectorComponent` has a spec covering keyboard navigation (`fakeAsync`/`tick`), outside-click close, `selectTheme()` delegation, and `isOpen()` toggle.
- FR-F00L-5: `CustomCursorDirective` has a spec covering listener registration, cursor element creation, transform update, and `ngOnDestroy` cleanup; `navigator.userAgent` is stubbed.
- FR-F00L-6: `AppComponent` spec verifies the component creates and `appCustomCursor` attaches without error.
- FR-F00L-7: `HeaderComponent` spec covers dark-mode toggle branches (`localStorage`, `matchMedia` mocked) and `onWindowScroll` / `isNavbarFixed`.
- FR-F00L-8: A route smoke test verifies that `/`, `/about-me`, `/portfolio`, `/contact` resolve to their components and `**` redirects to `/`.
- FR-F00L-9: `PortfolioComponent` spec uses `[id]` or `data-testid` selectors instead of Tailwind class selectors.
- FR-F00L-10: `AboutMeComponent` spec covers `navigate()`.

## F00M — Phase 3 Quality Pass (in-progress)
**Goal:** Evidence-backed close-out of v1.0 — Lighthouse scores recorded, social metadata verified truthful, UAT passed for all Phase 2 features.
- FR-F00M-1: Lighthouse runs on `/`, `/about-me`, `/portfolio`, `/contact` (desktop + mobile); A11y, Best Practices, and SEO each ≥ 90; results recorded in `docs/audits/2026-06-lighthouse.md`.
- FR-F00M-2: OG/Twitter metadata values in `src/index.html` are verified truthful (image resolves, description matches content, canonical matches origin, JSON-LD sameAs URLs resolve); results recorded in `docs/audits/2026-06-social-metadata.md`.
- FR-F00M-3: All UAT cases in `docs/UAT.md` (baseline UAT-B1..6, F001-1..3, F002-1..3, F003-1..4) are executed and Pass/Fail recorded in `docs/audits/2026-06-uat.md`.
- FR-F00M-4: F002 row in `docs/TRACEABILITY_MATRIX.md` updated to status `Done` with PR #48.
- FR-F00M-5: Three Phase 3 checkboxes in `docs/ROADMAP.md` are ticked once all audits pass.

## F004 — Professional Experience Section (in-progress)
**Goal:** Display professional work experience (internship + MSIB) in a dedicated section above portfolio.
- FR-F004-1: Experience section renders on the homepage between About Me and Portfolio.
- FR-F004-2: Each entry shows role, period, location, description, and contributions list.
- FR-F004-3: All text is bilingual (EN/ID) via the existing LanguageService.
- FR-F004-4: Section is accessible: semantic heading hierarchy, readable contrast, keyboard scannable.

## F005 — Project Taxonomy, Featured Hierarchy & Filtering (in-progress)
**Goal:** Separate featured backend/full-stack projects from learning projects; add accessible filter bar.
- FR-F005-1: Projects tagged with `featured`, `categories[]`, `year?`, `links[]` in the data model.
- FR-F005-2: Portfolio renders Featured Projects and Other Projects groups separately.
- FR-F005-3: Filter bar (All / Featured / Backend / Full-Stack / Frontend / Learning / Restricted) updates visible cards without page reload.
- FR-F005-4: Filter buttons have `aria-pressed` state; active filter is visually distinct.
- FR-F005-5: Cards show role, year, category, access-status chip, stack badges, and multi-CTA links.
- FR-F005-6: Restricted/unavailable links render as disabled (no `#` hrefs).

## F006 — Certifications Section (in-progress)
**Goal:** Display verified certifications (LearningX MSIB + BKN internship) after the Portfolio section.
- FR-F006-1: Certifications section renders two entries: LearningX MSIB Full-Stack Web Development (2023) and BKN Internship (2026).
- FR-F006-2: Only verified certificates are shown — no fabricated credential IDs or metrics.
- FR-F006-3: If no credential URL is available, the credential link is absent or disabled.
- FR-F006-4: All copy is bilingual via LanguageService.

## F007 — Professional Positioning & Copy Refresh (in-progress)
**Goal:** Replace student wording ("studying Informatics") with graduate + full-stack/backend positioning throughout hero, about, and SEO metadata.
- FR-F007-1: `intro.role` changed to "Full-Stack Web Developer" in EN and ID.
- FR-F007-2: `intro.body` removed "studying Informatics"; reflects CS graduate, backend API and workflow systems experience.
- FR-F007-3: `about.p1/p2/p3` rewritten as graduate with real project/internship evidence; no fabricated claims.
- FR-F007-4: All `seo.*` titles/descriptions updated to match the new positioning.
- FR-F007-5: `src/index.html` static title, meta description, OG/Twitter tags, and JSON-LD jobTitle updated.

## F00N — Footer & Navigation Completeness (planned)
**Goal:** Add a site footer and in-page nav anchors for all main sections.
- FR-F00N-1: A minimal `app-footer` standalone component renders below `<main>` in `app.component.html`; uses `<footer>` semantic element with copyright and quick links.
- FR-F00N-2: Footer is tokenized (no hardcoded hex) and renders correctly in dark/light × all 3 accent themes.
- FR-F00N-3: Footer is keyboard-operable; any links use `app-button` or standard `<a>` with visible focus.
- FR-F00N-4: Header nav includes scroll anchors for Experience and Certifications sections (or standalone routes if they exist); both are reachable from keyboard nav.
- FR-F00N-5: `app-footer` has a Karma/Jasmine spec covering creation and basic rendering.

## F008 — Project Detail / Case-Study Route (planned · deferred)
**Goal:** Add /portfolio/:id detail pages with problem/context/contribution/technical-implementation sections.
- Status: planned — deferred to Phase 6; NOT implemented in the current branch.
- FR-F008-1: Route /portfolio/:id resolves a project by id.
- FR-F008-2: Detail page shows title, role, year, summary, problem, contribution, stack, links.
- FR-F008-3: BKN detail page uses only anonymized, non-confidential content.
- FR-F008-4: All content bilingual via LanguageService.

## Out of Scope (all features)
Backend, DB, auth, analytics that track individuals, fabricated content, heavy dependencies for trivial UI.
