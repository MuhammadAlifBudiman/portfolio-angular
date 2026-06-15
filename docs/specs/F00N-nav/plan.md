# Plan — F00N: Navigation Order & Breakpoint

Tracked under issue #61, branch feat/61-portfolio-audit-remediation.

## Phases

1. **Locate nav component** — find the navbar/header component and its template.
2. **Reorder nav items** — update the template/data array to the canonical order.
3. **Switch breakpoint** — replace `2xl:` Tailwind prefix with `xl:` on nav visibility classes.
4. **Verify scroll anchors** — confirm each nav link scrolls to or routes to the correct target.
5. **Verification** — `npm run build` + Playwright responsive check at 1280px and 1536px.
