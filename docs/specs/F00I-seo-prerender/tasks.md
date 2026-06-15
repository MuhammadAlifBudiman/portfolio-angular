# Tasks — F00I: SEO / Prerender / Sitemap

Tracked under issue #61, branch feat/61-portfolio-audit-remediation.

## Tasks

- [ ] Audit `angular.json` for existing SSR/prerender configuration
- [ ] Identify all browser-API usages that need `isPlatformBrowser` guards
- [ ] Configure Angular 20 static prerender in `angular.json`
- [ ] Add/update server entry point if needed
- [ ] Guard `localStorage`, `window`, `document` calls with `isPlatformBrowser`
- [ ] Update `sitemap.xml` to include `/portfolio/:slug` routes for 5 featured projects
- [ ] Verify `public/CNAME` contains `muhammadalifbudiman.my.id`
- [ ] Verify build: `npm run build` — confirm prerendered HTML files exist in `dist/`
