# Test Matrix: F002 — i18n English / Indonesian

Feature ID: `F002`
GitHub Issue: `#10`

| Case ID | Scenario | Viewport / Browser | Steps | Expected Result | Status |
|---|---|---|---|---|---|
| TM-F002-1 | Default language | Chrome desktop | Clear language storage and load `/` | English copy renders from translation resources | Not Run |
| TM-F002-2 | Switch to Indonesian | Chrome desktop | Use the language selector | Visible copy updates to Indonesian without reload | Not Run |
| TM-F002-3 | Saved preference | Chrome desktop | Select Indonesian, reload `/portfolio` | Indonesian remains active | Not Run |
| TM-F002-4 | Missing-key fallback | Unit/integration test | Omit one Indonesian test key | English fallback renders, with no blank or raw key | Not Run |
| TM-F002-5 | Proper nouns | Chrome desktop | Switch languages on `/portfolio` | Project titles and proper nouns remain stable | Not Run |
| TM-F002-6 | Keyboard access | Chrome desktop | Tab to selector and change language by keyboard | Selector is operable and focus remains visible | Not Run |
| TM-F002-7 | Mobile layout | Mobile viewport | Open mobile nav and use language selector | Controls fit without overlap or clipping | Not Run |
