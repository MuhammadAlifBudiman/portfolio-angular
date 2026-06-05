# DESIGN.md — Portfolio Design System

## Product Identity
This portfolio presents Muhammad Alif Budiman as a practical web developer through concrete work, readable technical evidence, and direct contact paths. The design must support credibility rather than spectacle.

## Anti-AI-Slop Standard
Reject outputs that contain:
- generic hero phrases such as “crafting digital experiences” without project evidence;
- unrelated gradients, glass cards, blobs, emoji decorations, or animated clutter;
- inconsistent spacing, mixed border radii, arbitrary shadows, and ungoverned colors;
- fake metrics, fake testimonials, fake client logos, or unverified certifications;
- dense walls of text that do not help hiring, collaboration, or technical evaluation.

## Visual Direction
- Tone: restrained, technical, precise, and personal.
- Layout: spacious single-page portfolio with clear section hierarchy.
- Motion: subtle, purposeful, and performance-safe; no animation that blocks reading.
- Content: show role, stack, responsibility, project evidence, and outcome where verifiable.
- Inspiration may come from component libraries and portfolio examples, but never copy layout, branding, or content verbatim.

## Current Tokens From `src/styles.scss`
### Dark theme
- Text primary: `#fff`
- Text secondary: `#c6c6c6`
- Accent primary: `#007bff`
- Accent hover: `#65ffd1`
- Background primary: `#000`
- Background gradient: `#00008b`

### Light theme
- Text primary: `#000`
- Text secondary: `#4d4d4d`
- Accent primary: `#4ecba3`
- Accent hover: `#0056b3`
- Background primary: `#fff`
- Background gradient: `#dfe7ef`

### Typography
- Primary font: `Open Sans`, sans-serif.
- Mono font: `Roboto Mono`, monospace.
- Use mono font for section labels, terminal-like microcopy, project IDs, and technical metadata.

## Layout System
- Use existing `.wrapper` utility for full-height section rhythm unless the issue requires a structural refactor.
- Keep section max-widths consistent. Avoid one-off `vh` widths unless necessary for existing behavior.
- Maintain readable line length: body paragraphs should generally stay below `~70ch`.
- Use clear responsive behavior: mobile-first, then `md`, `lg`, `xl` refinements.

## Section Guidance
### Hero / Introduction
- Purpose: state name, role, and concise technical positioning.
- Avoid vague identity claims. Prefer a specific role statement and one direct value proposition.
- CTA should route to a meaningful section and be keyboard-operable.

### About
- Purpose: explain background, technical interests, work style, and proof points.
- Include only information that helps a visitor assess collaboration fit or technical credibility.
- Photo treatment should be restrained and accessible; image alt text must identify the subject or purpose.

### Portfolio
- Purpose: make projects scannable and credible.
- Each project card should include, where available:
  - project name;
  - ownership type: team, personal, client, internal, or restricted;
  - role or responsibility;
  - stack;
  - one-sentence problem/solution;
  - demo/documentation link status.
- Restricted or unavailable links must be labelled honestly.
- Do not create fake “case study” details.

### Contact
- Purpose: provide low-friction contact.
- Contact form states must be explicit: loading, success, error.
- Do not expose private implementation values in the UI.

## Component Rules
- Existing `app-button` must be made or kept accessible before extending usage; div-based click targets require keyboard support or semantic `<button>/<a>` replacement.
- Reusable components should accept typed inputs and expose events/callbacks with clear names.
- Avoid over-abstraction unless at least two real usages benefit.

## Theme Selector Future Rule
For issue #11 or equivalent theme work:
- create a theme-token object or SCSS token map before UI implementation;
- keep light/dark orthogonal to selected style theme;
- persist only non-sensitive preferences in `localStorage`;
- provide default fallback behavior for unknown theme keys;
- test preference load, preference save, and fallback behavior.

## i18n Future Rule
For issue #10 or equivalent language work:
- extract content into translation files before adding UI controls;
- preserve project names and proper nouns unless localized versions are intentional;
- keep language preference non-sensitive and persistable;
- test default language, switch behavior, and missing-key fallback.

## Resume Future Rule
For issue #8 or equivalent resume work:
- prefer a static PDF in `public/` when the resume is finalized;
- generate PDF client-side only if content must be dynamic;
- label file size and update date if available;
- avoid shipping private phone/address data unless intentionally public.

## Accessibility Baseline
- All interactive elements must be keyboard reachable.
- Focus styles must be visible in dark and light themes.
- Images need useful `alt` text or empty alt only when decorative.
- Text contrast must remain readable in both themes.
- Custom cursor must not prevent normal interaction or accessibility tooling.

## SEO Baseline
- `src/index.html` must contain accurate title, description, canonical, and Open Graph/Twitter metadata when SEO work is performed.
- Metadata must describe the actual portfolio and not overstate credentials.
- Project pages or anchors should have stable IDs when used in links.
