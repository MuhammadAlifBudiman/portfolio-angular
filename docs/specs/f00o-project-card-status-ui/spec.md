# F00O — Project Card & Status-Badge UI Hierarchy

## Problem

Status badges (Restricted, Live, Archived) render inside the same flex row as CTA buttons. `app-button` is hardcoded to `h-[64px]`. The row has no `items-center`, so default `align-items:stretch` causes the short status `<span>` to expand to button height. `rounded-full` turns it into a large oval.

Secondary: Featured and Other project sections duplicate ~250 lines of card HTML. Homepage sections hardcode `min-h-100vh` even when embedded.

## Requirements

- FR-F00O-1 through FR-F00O-9 (see FEATURE_SPEC.md).
- Must not alter project data, links, status values, themes, EN/ID translations, prerender config, or routing.
- No new gradients, shadows, or glassmorphism.
- ButtonComponent default variant: visually unchanged (hero CTAs unaffected).

## Components Added / Modified

| Component | Change |
|---|---|
| `ProjectStatusBadgeComponent` (new) | Compact non-stretching badge |
| `ProjectCardComponent` (new) | De-duplicates card markup |
| `ButtonComponent` | Adds `compact` and `text` variants |
| `PortfolioComponent` | Uses `ProjectCardComponent`, removes duplicated markup |
| `ProjectDetailComponent` | Moves status to meta row, compact CTA buttons |
| `CertificationsComponent` | Compact credential buttons |
| `AboutMeComponent` | `pageMode` wires wrapper class |
| `ContactComponent` | `pageMode` wires wrapper class |
| `PortfolioComponent` | `pageMode` wires wrapper class |
| `styles.scss` | Adds status color tokens |
| `project.model.ts` | Extracts `ProjectLinkStatus` type |
