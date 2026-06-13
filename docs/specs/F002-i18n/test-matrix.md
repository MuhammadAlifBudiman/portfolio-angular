# Test Matrix: F002 — i18n English / Indonesian

Feature ID: `F002`  
GitHub Issue: `#10`  
PR: `#48` (merged)  
Status: **Shipped** — UAT execution recorded in `docs/audits/2026-06-uat.md` (UAT-F002-1..3)

| Case ID | Scenario | Viewport / Browser | Steps | Expected Result | Status |
|---|---|---|---|---|---|
| TM-F002-1 | Default language | Chrome desktop | Clear language storage and load `/` | English copy renders from translation resources | See UAT-F002-1 |
| TM-F002-2 | Switch to Indonesian | Chrome desktop | Use the language selector | Visible copy updates to Indonesian without reload | See UAT-F002-1 |
| TM-F002-3 | Saved preference | Chrome desktop | Select Indonesian, reload `/portfolio` | Indonesian remains active | See UAT-F002-2 |
| TM-F002-4 | Missing-key fallback | Unit/integration test | Omit one Indonesian test key | English fallback renders, with no blank or raw key | See UAT-F002-3 |
| TM-F002-5 | Proper nouns | Chrome desktop | Switch languages on `/portfolio` | Project titles and proper nouns remain stable | See UAT-F002-1 |
| TM-F002-6 | Keyboard access | Chrome desktop | Tab to selector and change language by keyboard | Selector is operable and focus remains visible | See UAT-B2 |
| TM-F002-7 | Mobile layout | Mobile viewport | Open mobile nav and use language selector | Controls fit without overlap or clipping | See UAT-B6 |
