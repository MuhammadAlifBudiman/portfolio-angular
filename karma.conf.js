// @ts-check

// Use Puppeteer's bundled Chromium when no system Chrome is on PATH.
// This lets the canonical test command work in CI and sandboxed environments
// without a separately installed browser.
if (!process.env.CHROME_BIN) {
  try {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const fs = require('fs');
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const puppeteer = require('puppeteer');
    const bundledChrome = puppeteer.executablePath();

    if (fs.existsSync(bundledChrome)) {
      process.env.CHROME_BIN = bundledChrome;
    }
  } catch (_) {
    // Fall through — system Chrome will be used if available.
  }
}

module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine', '@angular-devkit/build-angular'],
    plugins: [
      require('karma-jasmine'),
      require('karma-chrome-launcher'),
      require('karma-jasmine-html-reporter'),
      require('karma-coverage'),
      require('@angular-devkit/build-angular/plugins/karma'),
    ],
    client: {
      jasmine: {},
      clearContext: false,
    },
    jasmineHtmlReporter: {
      suppressAll: true,
    },
    coverageReporter: {
      dir: require('path').join(__dirname, './coverage/portfolio'),
      subdir: '.',
      reporters: [{ type: 'html' }, { type: 'text-summary' }],
    },
    reporters: ['progress', 'kjhtml'],
    // Default browser for `ng test` without --browsers flag.
    // The CI command uses --browsers=ChromeHeadless which maps to this
    // custom launcher so `--no-sandbox` is always applied.
    browsers: ['ChromeHeadlessNoSandbox'],
    customLaunchers: {
      ChromeHeadlessNoSandbox: {
        base: 'ChromeHeadless',
        flags: ['--no-sandbox', '--disable-setuid-sandbox'],
      },
    },
    restartOnFileChange: true,
  });
};
