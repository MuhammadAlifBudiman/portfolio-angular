# Feature Specification: F001 — Resume PDF

Feature ID: F001  
GitHub Issue: #8

## Problem

Visitors to the portfolio have no way to obtain or view Muhammad Alif Budiman's resume.
The About Me page is the natural discovery point but provides no download/view control.
Without a resume link, recruiters and collaborators must leave the site to search elsewhere.

## Goal

Add a discoverable, keyboard-operable "Download Resume" control to the About Me page that
serves a static PDF from `public/`. The control must meet WCAG 2.1 AA keyboard and focus
requirements and must not expose private contact data unless intentionally included in the PDF.

## Functional Requirements

| ID | Requirement |
|---|---|
| FR-F001-1 | A discoverable control on the About Me page downloads or opens the resume PDF when activated. |
| FR-F001-2 | The PDF is served as a static file from `public/resume.pdf`; client-side generation is not used. |
| FR-F001-3 | File metadata (size, last-updated date) may be displayed near the control when available; optional for v1. |
| FR-F001-4 | The shipped PDF must not contain private phone number or home address unless the owner intentionally includes them. |
| FR-F001-5 | The download control is keyboard-operable (Tab-reachable, Enter activates) with a visible focus ring. |

## Acceptance Criteria

| ID | Given | When | Then |
|---|---|---|---|
| AC-F001-1 | A visitor opens the About Me page | the page loads | a "Download Resume" control is visible without scrolling on desktop |
| AC-F001-2 | A keyboard user Tabs to the control | the control has focus | a visible focus ring appears that meets WCAG AA contrast |
| AC-F001-3 | A user activates the control | the PDF is present at `public/resume.pdf` | the browser downloads or opens the PDF |
| AC-F001-4 | The control is rendered | any viewport | it uses semantic `<a href download>` markup, not a `<div>` or JS-only click |
| AC-F001-5 | The dark or light theme is active | the page is viewed | the control is readable in both themes |

## Implementation notes

- Extend `ButtonComponent` to conditionally render as `<a [href] [download]>` when `href` input
  is set, preserving identical Tailwind classes and hover animation.
- No `target="_blank"` needed for same-origin PDF — omit to avoid unnecessary focus-loss.
- Place Download Resume button alongside the existing "View Projects" button in `about-me.component.html`.
- PDF filename hint: `Muhammad-Alif-Budiman-Resume.pdf` via the `download` attribute.
- Privacy review (FR-F001-4) is the owner's responsibility before committing the real PDF.

## Out of scope (v1)

- Client-side PDF generation.
- Resume metadata fetch (FR-F001-3) — deferred to a follow-up issue.
- Hosting the PDF on a CDN or external service.
