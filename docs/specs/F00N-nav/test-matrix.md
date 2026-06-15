# Test Matrix — F00N: Navigation Order & Breakpoint

Tracked under issue #61, branch feat/61-portfolio-audit-remediation.

## Test Cases

| ID | Description | Type | Pass Criteria |
|---|---|---|---|
| TM-F00N-1 | Nav renders in canonical order (About first, Contact last) | Unit/Visual | DOM order matches spec |
| TM-F00N-2 | Hamburger visible at viewport < 1280px | Playwright | `.hamburger` or mobile menu visible at 1024px |
| TM-F00N-3 | Desktop nav visible at viewport ≥ 1280px | Playwright | Horizontal nav visible at 1280px |
| TM-F00N-4 | Each nav link navigates/scrolls to correct target | E2E/Manual | Click each link; correct section active |
| TM-F00N-5 | Build passes | CI | `npm run build` exits 0 |
