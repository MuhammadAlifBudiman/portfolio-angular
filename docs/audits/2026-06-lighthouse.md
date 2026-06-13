# Lighthouse Audit — 2026-06-12

**Feature:** F00M — Phase 3 Quality Pass  
**Build SHA:** 5246a65c9186e35323c629d8e249ba6aeba09dbf (pre-fix; image aspect ratio fix applied on same branch)  
**Lighthouse version:** 13.4.0  
**Chrome:** `/usr/bin/google-chrome-stable` (headless=new, no-sandbox, user-data-dir=/tmp/lh-chrome)  
**Target:** `http://localhost:4200` (dev server, `npm start`)  
**Form factor:** Lighthouse default (mobile, 375 px wide viewport)

---

## Scores — Final (after image-aspect-ratio fix)

| Route | Performance | Accessibility | Best Practices | SEO | Agentic Browsing |
|---|---|---|---|---|---|
| `/` (Home) | 55 | **100** | **100** | **100** | 100 |
| `/about-me` | 55 | **100** | **100** | **100** | 100 |
| `/portfolio` | 56 | **100** | **100** | **100** | 100 |
| `/contact` | 56 | **100** | **100** | **100** | 100 |

**FR-F00M-1 pass criteria (A11y ≥ 90, Best Practices ≥ 90, SEO ≥ 90): ALL PASS ✓**

---

## Pre-fix Scores (for reference)

First run revealed a Best Practices failure (`image-aspect-ratio`) on `/` and `/portfolio`:

| Route | Performance | Accessibility | Best Practices | SEO |
|---|---|---|---|---|
| `/` (Home) | 55 | 100 | 96 | 100 |
| `/about-me` | 56 | 100 | 100 | 100 |
| `/portfolio` | 55 | 100 | 96 | 100 |
| `/contact` | 55 | 100 | 100 | 100 |

---

## Issue Found and Fixed: `image-aspect-ratio`

**Audit:** `image-aspect-ratio` — "Displays images with incorrect aspect ratio"  
**Affected routes:** `/` (MainComponent renders all sections) and `/portfolio`  
**Root cause:** Project card images had `width="560" height="222"` HTML attributes (ratio 2.52:1) but CSS rendered them at ~344×218 (1.58:1) because:
- No `w-full` or `object-fit` CSS was applied
- Width was responsive (container-constrained) while `width="560"` declared a fixed width
- `overflow-hidden` on the `<img>` itself was a workaround rather than a proper `object-fit`

**Fix applied in `src/app/pages/portfolio/portfolio.component.html`:**
- Removed `width="560"` (width is responsive; declared width must match CSS display)
- Added `w-full object-cover` to the class (image fills card width, crops to maintain box; no distortion)
- Removed `overflow-hidden` from img (superseded by `object-cover`)

After fix: Best Practices 100 on all routes.

---

## Performance Notes (not in FR-F00M-1 scope)

Performance scores of 55–56 are expected in this environment and are NOT a Phase 3 blocker:

| Factor | Impact | Status |
|---|---|---|
| Dev server (unminified JS bundles) | LCP, TBT inflate vs production | Expected — audit is dev server only |
| `my-photo.png` — 1128 KB PNG, no WebP | LCP, image delivery | Deferred per Phase 4 (FR-F00I-7) |
| No Angular SSR/prerender | Initial HTML payload | Deferred per Phase 4 (FR-F00I-5) |
| No `manifest.json` or `apple-touch-icon` | Best Practices on deployed HTTPS | Deferred per Phase 4 (FR-F00I-10) |
| SCSS budget exceeded: `header.component.scss` +1.97 kB | Minor | Pre-existing warning; no Lighthouse impact |

For a production Perf baseline, re-run against the deployed site (`https://muhammadalifbudiman.my.id/`) after the next deploy. Performance is not gated in FR-F00M-1.

---

## Raw Report Files

Full JSON/HTML reports in `reports/lighthouse/` (gitignored):
- `home-v2` / `about-me-v2` / `portfolio-v2` / `contact-v2` — final scores after fix
- `home.report.json` / `about-me.report.json` / `portfolio.report.json` / `contact.report.json` — pre-fix

---

## Conclusion

Phase 3 Lighthouse criterion met: **A11y 100, Best Practices 100, SEO 100** on all four routes.  
One real issue found and fixed (image aspect ratio). No new issues filed.
