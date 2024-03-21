import { config } from '@porsche-design-system/shared/testing/playwright.vrt';
import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  ...config,
  use: {
    /* Maximum time each action such as `click()` can take. Defaults to 0 (no limit). */
    actionTimeout: 0,

    /* Base URL to use in actions like `await page.goto('/')`. */
    baseURL: 'http://localhost:3000',

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: 'off', // 'on-first-retry' causes CI job to get stuck
    viewport: null,

    // disable JavaScript to simulate SSR behaviour
    javaScriptEnabled: false,
  },
  snapshotPathTemplate: '{testDir}/../../../../nextjs/tests/vrt/specs/__screenshots__/{arg}-{projectName}{ext}',
  projects: [
    {
      name: 'chrome',
      use: {
        ...devices['Desktop Chrome'],
        deviceScaleFactor: 1,
      },
    },
  ],
  webServer: {
    command: 'yarn start-app',
    port: 3000,
  },
});
