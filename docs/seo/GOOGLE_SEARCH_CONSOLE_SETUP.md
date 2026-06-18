# Google Search Console Setup

## Recommended: Domain Property

1. Go to [Google Search Console](https://search.google.com/search-console/welcome)
2. Under **Domain**, enter exactly:
   ```
   muhammadalifbudiman.my.id
   ```
   Do **not** enter the `https://` URL here — the Domain field expects only the hostname.
3. Click **Continue**.

A Domain property covers HTTP + HTTPS, `www` + non-`www`, and all subdomains simultaneously.

### DNS Verification

Google will provide a TXT record in this format:
```
google-site-verification=<YOUR_TOKEN_FROM_GOOGLE>
```

**Do not invent or modify the token.** Copy the exact value Google shows.

1. Add the TXT record to your DNS provider managing `muhammadalifbudiman.my.id`.
2. Wait for DNS propagation (can take minutes to hours).
3. Return to Search Console and click **Verify**.
4. **Keep the TXT record permanently** — removing it will unverify the property.

## Fallback: URL Prefix Property

Only if Domain/DNS verification is unavailable:

- Under **URL prefix**, enter:
  ```
  https://muhammadalifbudiman.my.id/
  ```

Domain property is strongly preferred because it covers all URL variants.

## After Verification: Submit Sitemap

1. In the Search Console sidebar, go to **Sitemaps**.
2. Click **Add a new sitemap**.
3. Enter: `sitemap.xml`
4. Full URL Google will fetch:
   ```
   https://muhammadalifbudiman.my.id/sitemap.xml
   ```

The sitemap lists all 9 prerendered routes.

## Request Indexing (URL Inspection)

Use the **URL Inspection** tool to request indexing for key pages:

```
https://muhammadalifbudiman.my.id/
https://muhammadalifbudiman.my.id/portfolio
https://muhammadalifbudiman.my.id/projects/bkn-internal-workflow-api
https://muhammadalifbudiman.my.id/projects/blog-api-server
https://muhammadalifbudiman.my.id/projects/patient-management-system
https://muhammadalifbudiman.my.id/projects/task-master
https://muhammadalifbudiman.my.id/projects/portfolio-website
```

For each URL: paste it into the inspection bar → **Request Indexing**.

> **Indexing is asynchronous.** Google crawls and indexes on its own schedule.
> Requesting indexing does not guarantee immediate or eventual indexing.

## Distinction: Crawlability vs Indexing

| State | Meaning |
|---|---|
| **Crawlable** | Googlebot can fetch and read the HTML. The site already achieves this via SSG prerendering. |
| **Indexed** | Google has chosen to include the page in search results. Requires Search Console ownership verification + sitemap submission + time. |
| **Ranking** | The page appears for relevant queries. Requires indexing + content quality + backlinks. |

Completing this guide addresses the Search Console ownership step only.
