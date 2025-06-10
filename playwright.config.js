/* eslint-env node */
// @ts-check

const { defineConfig, devices } = require('@playwright/test');
/**
 * @see https://playwright.dev/docs/test-configuration
 */
 const config = defineConfig({
  testDir: './tests', // Directory where to look for tests
  /* Run tests in files in parallel */
  //timeout by default is 30 seconds, but you can change it for example to 60 seconds
  timeout: 60000, // 60 seconds
  //timeout for assertions is 5 seconds, but you can change it for example to 10 seconds
  expect: {
    timeout: 10000, // 10 seconds
  },
  reporter: "html", // Use HTML reporter to generate a report after tests run
  use: {

    /* Collect screenshots */
    screenshot: 'on',
    browserName: 'chromium', // You can change this to 'firefox' or 'webkit' for other browsers
    // webkit this is Safari browser
    headless: false //same thing as added parameter in cmd --headed
    // headless mode means you will not see the browser UI, it will run in the background
  },
});
module.exports = config; // Export the configuration object so it will be available in all test files

