# Plan — F00I: SEO / Prerender / Sitemap

Tracked under issue #61, branch feat/61-portfolio-audit-remediation.

## Phases

1. **Audit current build output** — check whether prerender is already configured; identify browser-API usage that needs guarding.
2. **Configure Angular 20 SSR prerender** — update `angular.json` with `prerender: { discoverRoutes: true }` and add server entry if missing.
3. **Guard browser APIs** — wrap `localStorage`, `window`, `document` accesses with `isPlatformBrowser`.
4. **Update sitemap** — add `/portfolio/:slug` entries for all 5 featured projects.
5. **Verify CNAME** — confirm `public/CNAME` = `muhammadalifbudiman.my.id`.
6. **Verification** — `npm run build` produces prerendered HTML for all routes.
