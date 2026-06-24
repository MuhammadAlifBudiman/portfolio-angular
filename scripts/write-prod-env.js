#!/usr/bin/env node
'use strict';

const fs = require('fs');
const path = require('path');

const outputPath = path.resolve(
  __dirname,
  '..',
  'src',
  'environments',
  'environment.prod.ts'
);

const environment = {
  production: true,
  emailService: {
    serviceId: process.env.ENV_SERVICE_ID || '',
    templateId: process.env.ENV_TEMPLATE_ID || '',
    publicKey: process.env.ENV_PUBLIC_KEY || '',
  },
};

const content = `export const environment = ${JSON.stringify(environment, null, 2)};\n`;

fs.writeFileSync(outputPath, content, { encoding: 'utf8', mode: 0o600 });
console.log(`Wrote ${path.relative(process.cwd(), outputPath)}`);
