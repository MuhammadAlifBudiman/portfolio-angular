# Test Matrix: F003 — Theme Selector

Feature ID: `F003`
GitHub Issue: `#11`
Status: Done

| Case ID | Scenario | Viewport / Browser | Steps | Expected Result | Status |
|---|---|---|---|---|---|
| TM-F003-1 | Select each theme | Chrome desktop | Select Default, Ocean, and Ember | Theme tokens apply across UI | Done |
| TM-F003-2 | Theme with dark/light | Chrome desktop | Select a style theme and toggle light/dark | Style theme and mode remain independent | Done |
| TM-F003-3 | Corrupt stored theme | Unit test | Store an unknown style-theme key and load | Default theme applies without crash | Done |
| TM-F003-4 | Saved preference | Unit test | Store a valid style-theme key and load | Saved theme is restored | Done |
| TM-F003-5 | Keyboard selector | Chrome desktop | Operate selector with keyboard | Selector is usable and focus is visible | Done |
