# F00L — Test Coverage Baseline: Spec

## Feature ID
F00L

## GitHub Issue
#40

## Problem
Only 6 of ~16 source units carried a Karma/Jasmine spec, and several behaviourally
significant units were untested — most importantly the contact form (validation, the 30-second
cooldown, EmailJS success/error flows, form reset) and the `EmailService` wrapper.
`app.component.spec.ts` was a placeholder dummy test. The absence of a deterministic test
baseline makes regressions in form, theme, and cursor behaviour invisible to CI.

## Goals
- Every behaviourally significant component, service, and directive has a spec.
- Tests are deterministic — EmailJS, `Date`, `navigator.userAgent`, `matchMedia`, and timers
  are mocked rather than relied on.
- Replace presentational (Tailwind class-chain) selectors with stable `[id]` / `data-testid`
  hooks in the portfolio spec.

## Non-Goals
- No coverage-threshold enforcement in `karma.conf.js` (presence + green is the bar).
- No production behaviour change. The single template touch is a non-visual
  `data-testid="project-card"` hook on the portfolio card.
- `MainComponent` is pure composition (no logic) and is exercised by the route smoke test,
  so it gets no dedicated spec.

## Functional Requirements
- FR-F00L-1: `EmailService` spec mocks `emailjs.sendForm`; covers resolve and reject.
- FR-F00L-2: `ContactComponent` spec covers loading state, success/error alert, form reset,
  time input, invalid-email guard, in-flight guard, and the 30s cooldown; EmailJS and `Date`
  (via `fakeAsync`) are mocked.
- FR-F00L-3: `IntroductionComponent` spec covers `navigate()` with a `Router` spy.
- FR-F00L-4: `ThemeSelectorComponent` spec covers keyboard nav (`fakeAsync`/`tick`),
  outside-click close, `selectTheme()` delegation, and `isOpen()` toggle.
- FR-F00L-5: `CustomCursorDirective` spec covers listener registration, cursor element
  creation, transform update, and `ngOnDestroy` cleanup; `navigator.userAgent` and
  `matchMedia` are stubbed.
- FR-F00L-6: `AppComponent` spec verifies the component creates and `appCustomCursor` attaches
  without error.
- FR-F00L-7: `HeaderComponent` spec covers dark-mode toggle branches (`localStorage`,
  `matchMedia` mocked) and `onWindowScroll` / `isNavbarFixed`.
- FR-F00L-8: Route smoke test verifies `/`, `/about-me`, `/portfolio`, `/contact` resolve to
  their components and `**` redirects to `/`.
- FR-F00L-9: `PortfolioComponent` spec uses `[id]` / `data-testid` selectors instead of
  Tailwind class selectors.
- FR-F00L-10: `AboutMeComponent` spec covers `navigate()`.

## Verification
`npm test -- --watch=false --browsers=ChromeHeadless` (or `:ci`) green; `npm run build` green.
Requires a local `src/environments/environment.ts` (copied from the example, as CI does) so
units importing `EmailService` compile.
