# Plan — F008: Project Detail / Case-Study Route

Tracked under issue #61, branch feat/61-portfolio-audit-remediation.

## Phases

1. **Audit existing case-study content** — review all project detail pages for BKN claims, raw URL text in prose, and missing bilingual copy.
2. **Add bilingual translations** — ensure every case-study string has both EN and ID keys in translation files.
3. **Remove raw URL text** — replace any raw URL strings in prose with descriptive link labels.
4. **BKN claim audit** — verify all BKN-related claims are factually accurate and dated correctly.
5. **Verification** — `npm run build` + `npm test -- --watch=false --browsers=ChromeHeadless`.
