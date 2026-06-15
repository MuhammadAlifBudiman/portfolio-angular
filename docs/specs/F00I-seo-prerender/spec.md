# Spec — F00I: SEO / Prerender / Sitemap

Tracked under issue #61, branch feat/61-portfolio-audit-remediation.

## Goal

Enable Angular 20 SSR static prerender for all portfolio routes so crawlers and social previews receive fully-rendered HTML. Ensure CNAME is correct and sitemap includes project detail routes.

## Routes to prerender (9 total)

- `/` (home / introduction)
- `/about`
- `/experience`
- `/technologies`
- `/portfolio`
- `/certifications`
- `/contact`
- `/portfolio/:id` for each featured project (at least 5 slugs)

## Requirements

- FR-F00I-1: Angular 20 SSR static prerender configured in `angular.json`.
- FR-F00I-2: All 9+ routes produce static HTML in `dist/` after `npm run build`.
- FR-F00I-3: `public/CNAME` contains `muhammadalifbudiman.my.id`.
- FR-F00I-4: `sitemap.xml` includes all project detail route URLs.
- FR-F00I-5: Browser-only APIs (localStorage, window, document) are guarded with `isPlatformBrowser` / `PLATFORM_ID`.

## Out of scope

- Dynamic SSR (server runtime); static prerender only.
- CDN configuration.
