# Test Matrix — F00I: SEO / Prerender / Sitemap

Tracked under issue #61, branch feat/61-portfolio-audit-remediation.

## Test Cases

| ID | Description | Type | Pass Criteria |
|---|---|---|---|
| TM-F00I-1 | Build produces prerendered HTML for `/` | CI | `dist/browser/index.html` exists and contains rendered content |
| TM-F00I-2 | Build produces prerendered HTML for all 9+ routes | CI | HTML files exist in `dist/browser/` for each route |
| TM-F00I-3 | No browser-API crash during prerender | CI | `npm run build` exits 0 with no SSR errors |
| TM-F00I-4 | CNAME is correct | Manual | `public/CNAME` = `muhammadalifbudiman.my.id` |
| TM-F00I-5 | Sitemap includes project detail routes | Manual | `sitemap.xml` has entries for all 5 featured project slugs |
| TM-F00I-6 | Unit tests pass | CI | `npm test -- --watch=false --browsers=ChromeHeadless` exits 0 |
