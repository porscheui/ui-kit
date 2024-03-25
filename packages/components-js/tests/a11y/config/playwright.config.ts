import { config } from '@porsche-design-system/shared/testing/playwright.a11y';
import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  ...config,
  projects: [
    {
      name: 'chrome',
      use: devices['Desktop Chrome'],
    },
  ],
  webServer: {
    command: 'yarn start-app',
    port: 8575,
  },
});
