# Acceptance Criteria — `portfolio-angular`

> Given/When/Then per planned feature. IDs `AC-Fxxx-n`. These become the acceptance checklist in each GitHub Issue and the UAT cases in `docs/UAT.md`.

## F001 — Resume PDF (#8)
- **AC-F001-1** — Given the portfolio is loaded, When the user activates the resume control, Then the resume PDF opens or downloads.
- **AC-F001-2** — Given a static PDF exists in `public/`, When the page renders, Then no client-side PDF generation library is loaded.
- **AC-F001-3** — Given the control is focused, When the user presses Enter/Space, Then the action triggers and focus remains visible.
- **AC-F001-4** — Given the resume is published, When inspected, Then no unintended private phone/address data is present.

## F002 — i18n EN/ID (#10)
- **AC-F002-1** — Given default language, When the page loads, Then all visible copy renders from translation resources (no hard-coded strings in components for translatable text).
- **AC-F002-2** — Given the language toggle, When switched, Then all translatable copy updates without reload.
- **AC-F002-3** — Given a missing translation key, When rendered, Then the default-language value is shown (no blank/placeholder leak).
- **AC-F002-4** — Given a saved language preference, When the user returns, Then the saved language is applied.
- **AC-F002-5** — Given project proper nouns, When language switches, Then they remain unchanged unless an intentional localized form exists.

## F003 — Theme Selector (#11)
- **AC-F003-1** — Given multiple themes defined in a token map, When a theme is selected, Then its tokens apply across the UI.
- **AC-F003-2** — Given a selected style theme, When light/dark is toggled, Then both dimensions apply independently.
- **AC-F003-3** — Given an unknown/corrupt stored theme key, When loaded, Then the default theme applies (no crash, no broken styling).
- **AC-F003-4** — Given a saved theme preference, When the user returns, Then it is restored from `localStorage`.
- **AC-F003-5** — Given the selector, When navigated by keyboard, Then it is operable and focus is visible in every theme.

## Cross-Cutting (every feature)
- **AC-X-1** — `npm run build` completes without error.
- **AC-X-2** — `npm test -- --watch=false --browsers=ChromeHeadless` passes (or new specs added for new logic).
- **AC-X-3** — Routes `/`, `/about-me`, `/portfolio`, `/contact` load with no console errors.
- **AC-X-4** — No secrets/env values committed; external new-tab links use `rel="noopener noreferrer"`.
- **AC-X-5** — Accessibility checklist in `docs/QUALITY_GATES.md` reviewed.
