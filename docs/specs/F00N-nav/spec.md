# Spec — F00N: Navigation Order & Breakpoint

Tracked under issue #61, branch feat/61-portfolio-audit-remediation.

## Goal

Reorder navigation items to match the canonical portfolio flow and switch the mobile/desktop nav breakpoint from `2xl` to `xl`.

## Canonical Nav Order

01. About
02. Experience
03. Technologies
04. Portfolio
05. Certifications
06. Contact

## Requirements

- FR-F00N-1: Nav items render in the order listed above.
- FR-F00N-2: Mobile hamburger menu appears below `xl` breakpoint (not `2xl`).
- FR-F00N-3: Desktop horizontal nav appears at `xl` and above.
- FR-F00N-4: Scroll anchors / router links for each nav item point to the correct section/route.
- FR-F00N-5: Active state highlights the correct nav item on scroll/route change.
