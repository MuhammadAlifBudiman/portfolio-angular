# Test Matrix: F004 — Professional Experience Section

Feature ID: F004
GitHub Issue: TBD

| Case ID | Scenario | Viewport / Browser | Steps | Expected Result | Status |
|---|---|---|---|---|---|
| TM-F004-1 | Section renders between About Me and Portfolio | Chrome desktop | Open homepage, scroll | Experience section visible between About Me and Portfolio | Not Run |
| TM-F004-2 | Entry shows role, period, org, location, description | Chrome desktop, EN | Inspect first entry | All fields rendered with correct EN copy | Not Run |
| TM-F004-3 | Language toggle switches copy to Indonesian | Chrome desktop | Switch to ID | All experience text updates to Indonesian | Not Run |
| TM-F004-4 | Heading hierarchy is semantic | Chrome desktop a11y tree | Inspect DOM | Section `<h2>`, each entry `<h3>` | Not Run |
| TM-F004-5 | Section readable in dark theme | Chrome desktop, dark | Scroll to section | Text contrast meets AA; no invisible text | Not Run |
| TM-F004-6 | Section readable in light theme | Chrome desktop, light | Scroll to section | Text contrast meets AA | Not Run |
| TM-F004-7 | Mobile layout | Chrome mobile 375px | Scroll to section | Section stacks correctly; no overflow | Not Run |
| TM-F004-8 | Unit: component renders with mock data | Karma/Jasmine | spec | Component instance created; DOM contains role text | Not Run |
