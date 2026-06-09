# F00L — Test Coverage Baseline: Plan

## Approach
Tests-only change. Add specs for the untested units and harden two existing specs, matching the
conventions already present in `theme.service.spec.ts`, `button.component.spec.ts`, and
`header.component.spec.ts` (standalone `imports`, `provideRouter([])`, jasmine spies, AC/FR codes
in `describe` names).

## Determinism strategy
- **EmailJS**: `spyOn(emailjs, 'sendForm')` with `resolveTo` / `rejectWith`; in the contact spec,
  inject a `jasmine.SpyObj<EmailService>`.
- **Time**: `ContactComponent` tests run in `fakeAsync` — zone's fake clock makes `Date.now()` /
  `new Date()` consistent, so the cooldown and time-input assertions are stable; `tick(30_000)`
  advances past the cooldown and `flushMicrotasks()` drains the promise chain.
- **Environment**: cursor/UA via `spyOnProperty(navigator, 'userAgent', 'get')` and
  `spyOn(window, 'matchMedia')`; scroll via `spyOnProperty(window, 'pageYOffset', 'get')`.
- **Routes**: `RouterTestingHarness` + the real `routes` array.

## Production touch
`portfolio.component.html` card gains `data-testid="project-card"` (keeps existing `[id]`) so the
spec can select cards without Tailwind class chains (FR-F00L-9). No visual change.

## Local prerequisite
`cp src/environments/example.environment.ts src/environments/environment.ts` (and the prod
variant) — git-ignored placeholders, identical to the CI "Inject environment variables" step.
