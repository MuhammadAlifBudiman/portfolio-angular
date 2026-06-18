#!/usr/bin/env node
/**
 * Prerender regression guard for the Angular SSG portfolio build.
 *
 * Checks each expected route's index.html in the dist output directory for:
 *   1. File size > 50 KB  (proves a full prerender, not a CSR shell)
 *   2. Presence of ng-server-context="ssg"  (definitive SSG marker from Angular)
 *
 * Usage:
 *   node scripts/check-prerender.js [dist-dir]
 *
 * Default dist-dir: dist/portfolio/browser
 * Exit code 0 = all checks pass; 1 = one or more failures.
 */

'use strict';

const fs = require('fs');
const path = require('path');

const distDir = process.argv[2] || 'dist/portfolio/browser';

const ROUTES = [
  'index.html',
  'about-me/index.html',
  'portfolio/index.html',
  'contact/index.html',
  'projects/task-master/index.html',
  'projects/patient-management-system/index.html',
  'projects/blog-api-server/index.html',
  'projects/portfolio-website/index.html',
  'projects/bkn-internal-workflow-api/index.html',
];

const MIN_SIZE_BYTES = 50 * 1024; // 50 KB
const SSG_MARKER = 'ng-server-context="ssg"';

let failed = false;

for (const route of ROUTES) {
  const filePath = path.join(distDir, route);

  // Check file exists
  if (!fs.existsSync(filePath)) {
    console.error(`FAIL [missing]  ${route}`);
    console.error(`  Expected file not found: ${filePath}`);
    failed = true;
    continue;
  }

  const stat = fs.statSync(filePath);
  const content = fs.readFileSync(filePath, 'utf8');

  // Check 1: minimum file size
  if (stat.size <= MIN_SIZE_BYTES) {
    console.error(`FAIL [size]     ${route}`);
    console.error(`  File size ${stat.size} bytes is not > ${MIN_SIZE_BYTES} bytes (50 KB).`);
    console.error('  This may indicate a CSR shell was emitted instead of a full prerender.');
    failed = true;
  }

  // Check 2: SSG marker
  if (!content.includes(SSG_MARKER)) {
    console.error(`FAIL [ssg]      ${route}`);
    console.error(`  Missing "${SSG_MARKER}" in ${filePath}`);
    console.error('  This means Angular did not mark the file as a static prerender output.');
    failed = true;
  }

  if (stat.size > MIN_SIZE_BYTES && content.includes(SSG_MARKER)) {
    const sizeKb = (stat.size / 1024).toFixed(1);
    console.log(`PASS            ${route}  (${sizeKb} KB, ssg=true)`);
  }
}

if (failed) {
  console.error('\nPrerender check FAILED. One or more routes did not meet quality criteria.');
  process.exit(1);
} else {
  console.log('\nPrerender check PASSED. All 9 routes are fully prerendered with SSG markers.');
  process.exit(0);
}
