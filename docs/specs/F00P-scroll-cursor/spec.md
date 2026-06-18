# F00P — Scroll UX & Custom Cursor Resilience

## Problem
`src/styles.scss` hides scrollbars on every element globally. On a long portfolio, visitors lose positional context. Separately, `cursor:none` is applied via a global `@media (pointer:fine)` rule regardless of whether the custom-cursor JS actually initialized — so on reduced-motion, touch, coarse-pointer, or SSR paths, the native cursor is invisible with no replacement.

## Requirements
See `docs/product/FEATURE_SPEC.md` FR-F00P-1 through FR-F00P-5.

## Files to change
- `src/styles.scss` — remove global scrollbar-hide; scope `cursor:none` under `.custom-cursor-active`
- `src/app/directives/custom-cursor.directive.ts` — add/remove class on `<html>` on init/destroy

## Tests
- `custom-cursor.directive.spec.ts` — verify `.custom-cursor-active` is added on init, removed on destroy, not added when reduced-motion/mobile
