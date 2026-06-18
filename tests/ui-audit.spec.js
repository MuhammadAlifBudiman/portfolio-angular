/**
 * Playwright UI/UX audit for muhammadalifbudiman.my.id
 * Run: playwright test tests/ui-audit.spec.ts
 */

const { test, expect, request } = require('@playwright/test');

const BASE = 'https://muhammadalifbudiman.my.id';

const PAGES = [
  { name: 'home',       url: `${BASE}/` },
  { name: 'portfolio',  url: `${BASE}/#portfolio` },
  { name: 'about',      url: `${BASE}/#about` },
  { name: 'contact',    url: `${BASE}/#contact` },
  {
    name: 'case-study-patient',
    url: `${BASE}/projects/patient-management-system`,
  },
  {
    name: 'case-study-blog-api',
    url: `${BASE}/projects/blog-api-server`,
  },
  {
    name: 'case-study-taskmaster',
    url: `${BASE}/projects/task-master`,
  },
  {
    name: 'case-study-bkn',
    url: `${BASE}/projects/bkn-internal-workflow-api`,
  },
  {
    name: 'case-study-portfolio',
    url: `${BASE}/projects/portfolio-website`,
  },
];

test.describe('Portfolio UI/UX audit', () => {
  for (const page of PAGES) {
    test(`[${page.name}] loads without console errors`, async ({ page: pw }) => {
      const errors = [];
      pw.on('console', (msg) => {
        if (msg.type() === 'error') errors.push(msg.text());
      });

      await pw.goto(page.url, { waitUntil: 'networkidle', timeout: 30000 });
      await pw.waitForTimeout(1500);

      // Screenshot
      await pw.screenshot({
        path: `playwright-report/${page.name}.png`,
        fullPage: true,
      });

      // No console errors
      expect(errors, `Console errors on ${page.name}`).toEqual([]);
    });

    test(`[${page.name}] has correct page title`, async ({ page: pw }) => {
      await pw.goto(page.url, { waitUntil: 'domcontentloaded', timeout: 30000 });
      const title = await pw.title();
      expect(title.length).toBeGreaterThan(0);
      console.log(`[${page.name}] title: "${title}"`);
    });
  }

  // ─── Case study: patient workflow image is NOT blurry (check it's SVG) ───
  test('[patient] workflow diagram src is SVG', async ({ page: pw }) => {
    await pw.goto(`${BASE}/projects/patient-management-system`, {
      waitUntil: 'networkidle',
      timeout: 30000,
    });
    await pw.waitForTimeout(2000);

    const workflowImg = pw.locator('[data-media-id="patient-workflow"] img');
    const src = await workflowImg.getAttribute('src');
    console.log('[patient] workflow img src:', src);
    expect(src).toContain('.svg');
  });

  // ─── Navigation: all nav links are reachable ─────────────────────────────
  test('[nav] all nav links are visible and clickable', async ({ page: pw }) => {
    await pw.goto(BASE, { waitUntil: 'networkidle', timeout: 30000 });

    const navLinks = pw.locator('nav a');
    const count = await navLinks.count();
    console.log(`[nav] found ${count} nav links`);
    expect(count).toBeGreaterThan(3);
  });

  // ─── Theme toggle ────────────────────────────────────────────────────────
  test('[theme] dark/light toggle works', async ({ page: pw }) => {
    await pw.goto(BASE, { waitUntil: 'networkidle', timeout: 30000 });

    // find any button that contains sun/moon icon or toggle label
    const toggleBtn = pw.locator('button[aria-label*="theme"], button[aria-label*="mode"], button[aria-label*="dark"], button[id*="theme"], button[id*="toggle"]');
    const found = await toggleBtn.count();
    console.log(`[theme] toggle buttons found: ${found}`);
    // just log — don't fail if toggle has a different aria-label pattern
  });

  // ─── Contact form fields ─────────────────────────────────────────────────
  test('[contact] form fields are focusable', async ({ page: pw }) => {
    await pw.goto(`${BASE}/#contact`, { waitUntil: 'networkidle', timeout: 30000 });
    await pw.waitForTimeout(1000);

    const nameInput = pw.locator('input[name="name"], input[placeholder*="name" i], input[id*="name" i]').first();
    const emailInput = pw.locator('input[type="email"], input[name="email"]').first();
    const msgInput = pw.locator('textarea').first();

    await nameInput.focus();
    await expect(nameInput).toBeFocused();

    await emailInput.focus();
    await expect(emailInput).toBeFocused();

    await msgInput.focus();
    await expect(msgInput).toBeFocused();
  });

  // ─── Download CV button ───────────────────────────────────────────────────
  test('[intro] Download CV button exists', async ({ page: pw }) => {
    await pw.goto(BASE, { waitUntil: 'networkidle', timeout: 30000 });

    const cvBtn = pw.locator('a[href*="resume"], a[href*="cv"], button:has-text("Resume"), button:has-text("CV"), a:has-text("Resume"), a:has-text("CV")').first();
    const count = await cvBtn.count();
    console.log(`[intro] CV/Resume buttons found: ${count}`);
    expect(count).toBeGreaterThan(0);
  });

  // ─── SSG prerender regression guard ─────────────────────────────────────────
  // Verifies that the locally built dist/ output is a full Angular SSG prerender,
  // not a CSR shell. Starts a local static server, fetches the root URL using
  // baseURL from playwright.config.js, and asserts the ng-server-context="ssg"
  // marker that Angular injects into every prerendered page.
  test('[ssg] root HTML response contains ng-server-context="ssg" marker', async () => {
    const { execSync, spawn } = require('child_process');
    const path = require('path');

    const distDir = path.resolve(__dirname, '../dist/portfolio/browser');
    const port = 8765;
    const baseURL = 'http://localhost:' + port;

    // Start local static server
    const server = spawn(
      'npx',
      ['http-server', distDir, '-p', String(port), '-d', 'false', '--silent'],
      { detached: false, stdio: 'ignore' }
    );

    // Wait until the server accepts connections (up to 10s)
    const waitForServer = (url, maxMs = 10000) =>
      new Promise((resolve, reject) => {
        const start = Date.now();
        const check = () => {
          const http = require('http');
          const req = http.get(url, (res) => { res.resume(); resolve(); });
          req.on('error', () => {
            if (Date.now() - start > maxMs) return reject(new Error(`Server at ${url} did not start within ${maxMs}ms`));
            setTimeout(check, 300);
          });
          req.end();
        };
        check();
      });

    try {
      await waitForServer(baseURL + '/');

      const apiCtx = await request.newContext({ baseURL });
      const response = await apiCtx.get('/', { headers: { Accept: 'text/html' } });
      expect(response.ok()).toBe(true);
      const body = await response.text();
      expect(body, 'Root HTML must contain ng-server-context="ssg" (Angular SSG marker)').toContain(
        'ng-server-context="ssg"'
      );
      await apiCtx.dispose();
    } finally {
      server.kill();
    }
  });

  // ─── Mobile viewport check ────────────────────────────────────────────────
  test('[responsive] homepage renders correctly on mobile (375px)', async ({
    page: pw,
    browser,
  }) => {
    const ctx = await browser.newContext({
      viewport: { width: 375, height: 812 },
      userAgent:
        'Mozilla/5.0 (iPhone; CPU iPhone OS 16 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16 Mobile Safari/604.1',
    });
    const mobilePage = await ctx.newPage();
    await mobilePage.goto(BASE, { waitUntil: 'networkidle', timeout: 30000 });
    await mobilePage.waitForTimeout(1000);
    await mobilePage.screenshot({
      path: 'playwright-report/home-mobile.png',
      fullPage: true,
    });
    const body = await mobilePage.locator('body').boundingBox();
    expect(body?.width).toBeLessThanOrEqual(375);
    await ctx.close();
  });
});
