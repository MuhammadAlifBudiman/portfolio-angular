# F00L — Test Coverage Baseline: Test Matrix

| FR | Spec file | Cases |
|----|-----------|-------|
| FR-F00L-1 | `email.service.spec.ts` | created; delegates to `sendForm` + resolves; rejects on failure |
| FR-F00L-2 | `contact.component.spec.ts` | create; title on init; in-flight guard; invalid-email guard; time input populated; success alert + reset + loading cleared; 30s cooldown then allowed; error alert without cooldown |
| FR-F00L-3 | `introduction.component.spec.ts` | create; title on init; `navigate()` → `/about-me` |
| FR-F00L-4 | `theme-selector.component.spec.ts` | create; `toggleOpen()` signal; `selectTheme()` delegates + closes; button Escape/ArrowDown(+focus); option Enter/Escape; outside-click close; inside-click keeps open |
| FR-F00L-5 | `custom-cursor.directive.spec.ts` | desktop creates element + listeners; mousemove transform; destroy cleanup; mobile UA no-op; reduced-motion no-op |
| FR-F00L-6 | `app.component.spec.ts` | root creates; renders + attaches `appCustomCursor` without error |
| FR-F00L-7 | `header.component.spec.ts` | toggle on/off persists; restore stored pref; system-pref fallback; signal reflection; scroll sets/clears `isNavbarFixed` |
| FR-F00L-8 | `app.routes.spec.ts` | `/`, `/about-me`, `/portfolio`, `/contact` resolve; unknown path redirects to `/` |
| FR-F00L-9 | `portfolio.component.spec.ts` | card count, title, alt, ownership, id keying via `data-testid` / `[id]`; `openWebsite` safe-rel |
| FR-F00L-10 | `about-me.component.spec.ts` | `navigate()` → `/portfolio` |

**Result:** 85 specs, all passing (`ChromeHeadless`). `npm run build` green.
