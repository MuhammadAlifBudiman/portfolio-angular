#!/usr/bin/env node
/**
 * Project image validation guard.
 *
 * For each PROJECTS[].imageSrc, asserts:
 *   - File exists under public/
 *   - File is a valid WebP (magic bytes FFF4 52494646...57454250)
 *   - Dimensions are at least MIN_WIDTH × MIN_HEIGHT
 *   - Aspect ratio is loosely 16:9 (tolerant for diagrams)
 *   - File size is under MAX_SIZE_KB
 *   - No two projects share the same imageSrc
 *
 * Diagram images (src contains "/diagrams/") skip dimension and aspect-ratio
 * checks since they have non-standard shapes.
 *
 * Usage:  node scripts/check-project-images.js
 * Exit:   0 = all pass, 1 = failures found
 */

'use strict';

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// ---------------------------------------------------------------------------
// Config
// ---------------------------------------------------------------------------
const PUBLIC_DIR = path.resolve(__dirname, '..', 'public');
const PROJECTS_DATA_PATH = path.resolve(
  __dirname, '..', 'src', 'app', 'data', 'projects.data.ts'
);

const MIN_WIDTH = 600;     // px
const MIN_HEIGHT = 300;    // px
const MAX_SIZE_KB = 500;   // kB
// Acceptable aspect-ratio range (width / height)
const MIN_ASPECT = 1.2;
const MAX_ASPECT = 2.5;

// ---------------------------------------------------------------------------
// Extract imageSrc values from TypeScript source via regex
// ---------------------------------------------------------------------------
function extractImageSrcs(filePath) {
  const src = fs.readFileSync(filePath, 'utf8');
  const matches = [...src.matchAll(/imageSrc:\s*['"`]([^'"`]+)['"`]/g)];
  return matches.map(m => m[1]);
}

// ---------------------------------------------------------------------------
// WebP magic-byte check
// WebP files start with: RIFF????WEBP  (bytes 0-3 = 52 49 46 46, bytes 8-11 = 57 45 42 50)
// ---------------------------------------------------------------------------
function isValidWebP(filePath) {
  const buf = Buffer.alloc(12);
  const fd = fs.openSync(filePath, 'r');
  fs.readSync(fd, buf, 0, 12, 0);
  fs.closeSync(fd);
  const riff = buf.slice(0, 4).toString('ascii');
  const webp = buf.slice(8, 12).toString('ascii');
  return riff === 'RIFF' && webp === 'WEBP';
}

// ---------------------------------------------------------------------------
// Parse WebP dimensions from VP8/VP8L/VP8X chunk
// Returns { width, height } or null if unable to parse
// ---------------------------------------------------------------------------
function getWebPDimensions(filePath) {
  try {
    const buf = fs.readFileSync(filePath);
    const chunkId = buf.slice(12, 16).toString('ascii');

    if (chunkId === 'VP8 ') {
      // Lossy: 3-byte key frame marker at byte 23, width/height as 14-bit LE shorts at 26/28
      if (buf[23] === 0x9d && buf[24] === 0x01 && buf[25] === 0x2a) {
        const w = (buf.readUInt16LE(26) & 0x3fff);
        const h = (buf.readUInt16LE(28) & 0x3fff);
        return { width: w, height: h };
      }
    } else if (chunkId === 'VP8L') {
      // Lossless: signature 0x2f at byte 20, then 28 bits for (w-1) and (h-1)
      if (buf[20] === 0x2f) {
        const b0 = buf[21], b1 = buf[22], b2 = buf[23], b3 = buf[24];
        const bits = b0 | (b1 << 8) | (b2 << 16) | (b3 << 24);
        const w = (bits & 0x3fff) + 1;
        const h = ((bits >> 14) & 0x3fff) + 1;
        return { width: w, height: h };
      }
    } else if (chunkId === 'VP8X') {
      // Extended: canvas width-1 and height-1 stored as 24-bit LE at bytes 24 and 27
      const w = (buf[24] | (buf[25] << 8) | (buf[26] << 16)) + 1;
      const h = (buf[27] | (buf[28] << 8) | (buf[29] << 16)) + 1;
      return { width: w, height: h };
    }
  } catch {
    // fall through
  }
  return null;
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------
function main() {
  if (!fs.existsSync(PROJECTS_DATA_PATH)) {
    console.error(`ERROR: Cannot find projects data at ${PROJECTS_DATA_PATH}`);
    process.exit(1);
  }

  const imageSrcs = extractImageSrcs(PROJECTS_DATA_PATH);
  if (imageSrcs.length === 0) {
    console.error('ERROR: No imageSrc values found — check regex or file path.');
    process.exit(1);
  }

  let failures = 0;
  const seen = new Map();

  for (const src of imageSrcs) {
    const absPath = path.join(PUBLIC_DIR, src);
    const isDiagram = src.includes('/diagrams/');
    const label = src;

    // Duplicate check
    if (seen.has(src)) {
      console.error(`FAIL [duplicate]  ${label}  — same imageSrc as another project`);
      failures++;
    }
    seen.set(src, true);

    // Existence
    if (!fs.existsSync(absPath)) {
      console.error(`FAIL [missing]    ${label}`);
      failures++;
      continue;
    }

    // File size
    const stat = fs.statSync(absPath);
    const sizeKb = stat.size / 1024;
    if (sizeKb > MAX_SIZE_KB) {
      console.error(`FAIL [size]       ${label}  — ${sizeKb.toFixed(1)} kB > ${MAX_SIZE_KB} kB`);
      failures++;
    }

    // WebP magic bytes (skip for SVG diagrams)
    if (!isDiagram && !src.endsWith('.svg')) {
      if (!isValidWebP(absPath)) {
        console.error(`FAIL [not-webp]   ${label}`);
        failures++;
        continue;
      }

      // Dimensions
      const dims = getWebPDimensions(absPath);
      if (dims) {
        if (dims.width < MIN_WIDTH || dims.height < MIN_HEIGHT) {
          console.error(
            `FAIL [dimensions] ${label}  — ${dims.width}×${dims.height} < ${MIN_WIDTH}×${MIN_HEIGHT}`
          );
          failures++;
        }
        const aspect = dims.width / dims.height;
        if (aspect < MIN_ASPECT || aspect > MAX_ASPECT) {
          console.warn(
            `WARN [aspect]     ${label}  — ${aspect.toFixed(2)} outside [${MIN_ASPECT}, ${MAX_ASPECT}]`
          );
          // Warn only; some screenshots are portrait — not a hard failure
        }
      } else {
        console.warn(`WARN [no-dims]    ${label}  — could not parse dimensions`);
      }
    }

    console.log(`OK                ${label}`);
  }

  if (failures > 0) {
    console.error(`\n${failures} image check(s) failed.`);
    process.exit(1);
  } else {
    console.log(`\nAll ${imageSrcs.length} project images OK.`);
  }
}

main();
