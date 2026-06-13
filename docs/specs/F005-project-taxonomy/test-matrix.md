# Test Matrix: F005 — Project Taxonomy, Featured Hierarchy & Filtering

Feature ID: F005
GitHub Issue: TBD

| Case ID | Scenario | Viewport / Browser | Steps | Expected Result | Status |
|---|---|---|---|---|---|
| TM-F005-1 | Featured Projects renders above Other Projects | Chrome desktop | Open portfolio section | Two groups in correct order | Not Run |
| TM-F005-2 | Filter "Backend" shows only backend projects | Chrome desktop | Click Backend filter | Non-backend cards hidden; backend cards visible | Not Run |
| TM-F005-3 | Filter "All" restores all cards | Chrome desktop | Click All after any filter | All project cards visible | Not Run |
| TM-F005-4 | Active filter button has aria-pressed="true" | Chrome desktop a11y tree | Click a filter | Selected button has aria-pressed="true"; others have "false" | Not Run |
| TM-F005-5 | Restricted project links are disabled | Chrome desktop | Find restricted project card | Link not navigatable; no href="#" | Not Run |
| TM-F005-6 | Filter bar keyboard operable | Chrome desktop, keyboard only | Tab to filter bar, press Enter on a filter | Filter activates without mouse | Not Run |
| TM-F005-7 | Card shows year and category badge | Chrome desktop | Inspect a card | Year and at least one category badge visible | Not Run |
| TM-F005-8 | Mobile filter bar | Chrome mobile 375px | Open portfolio | Filter bar scrolls horizontally or wraps without overflow | Not Run |
| TM-F005-9 | Unit: filter logic — Backend filter | Karma/Jasmine | spec | Only projects with "Backend" in categories returned | Not Run |
| TM-F005-10 | Unit: aria-pressed emitted correctly | Karma/Jasmine | spec | FilterBarComponent emits selected value; aria-pressed reflects state | Not Run |
