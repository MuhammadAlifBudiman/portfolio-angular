# Test Matrix: F001 — Resume PDF

Feature ID: F001  
GitHub Issue: #8

| Case ID | Scenario | Viewport / Browser | Steps | Expected Result | Status |
|---|---|---|---|---|---|
| TM-F001-1 | Download Resume button visible on About Me | Chrome desktop, light theme | Open `/about` | "Download Resume" button visible above fold | Not Run |
| TM-F001-2 | Keyboard focus ring on Download Resume | Chrome desktop | Tab to button | Visible focus ring on control | Not Run |
| TM-F001-3 | Enter activates download | Chrome desktop | Tab to button, press Enter | Browser downloads or opens resume.pdf | Not Run |
| TM-F001-4 | Click activates download | Chrome desktop, dark theme | Click Download Resume | Browser downloads or opens resume.pdf | Not Run |
| TM-F001-5 | Anchor has correct attributes | Unit test | render ButtonComponent with href | `<a>` has `href`, `download` attributes | Not Run |
| TM-F001-6 | Existing View Projects button unchanged | Chrome desktop | Click View Projects | Navigates to /portfolio | Not Run |
| TM-F001-7 | Mobile layout | Chrome mobile 375px | Open `/about` | Both buttons stack vertically, both usable | Not Run |
