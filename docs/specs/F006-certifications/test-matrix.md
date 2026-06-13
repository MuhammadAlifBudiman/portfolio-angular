# Test Matrix: F006 — Certifications Section

Feature ID: F006
GitHub Issue: TBD

| Case ID | Scenario | Viewport / Browser | Steps | Expected Result | Status |
|---|---|---|---|---|---|
| TM-F006-1 | Section renders after Portfolio | Chrome desktop | Scroll past Portfolio | Certifications section visible with two entries | Not Run |
| TM-F006-2 | LearningX MSIB entry shown | Chrome desktop, EN | Inspect section | Entry name, org, and year rendered in English | Not Run |
| TM-F006-3 | BKN Internship entry shown | Chrome desktop, EN | Inspect section | Entry name, org, and year rendered | Not Run |
| TM-F006-4 | Language toggle updates copy | Chrome desktop | Switch to ID | All Certifications copy in Indonesian | Not Run |
| TM-F006-5 | Missing credential URL hides link | Chrome desktop | Inspect entry without URL | No anchor/link rendered for that entry | Not Run |
| TM-F006-6 | Credential link opens safely | Chrome desktop | Click credential link | Opens in new tab with rel="noopener noreferrer" | Not Run |
| TM-F006-7 | Mobile layout | Chrome mobile 375px | Scroll to section | Cards stack, no overflow | Not Run |
| TM-F006-8 | Unit: no link without credentialUrl | Karma/Jasmine | spec | DOM contains no anchor for entry with undefined URL | Not Run |
