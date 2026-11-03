import { defineConfig, devices } from '@playwright/test';

const PORT = Number(process.env.PW_PORT) || 3155;

export default defineConfig({
  testDir: './e2e',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 1 : 0,
  reporter: process.env.CI ? 'github' : 'list',
  use: {
    baseURL: `http://localhost:${PORT}`,
    trace: 'on-first-retry',
    // Locally, PW_CHANNEL=chrome reuses installed Chrome instead of downloading Chromium.
    channel: process.env.PW_CHANNEL || undefined,
  },
  projects: [
    { name: 'desktop', use: { ...devices['Desktop Chrome'] } },
    { name: 'mobile', use: { ...devices['Pixel 7'] } },
  ],
  webServer: {
    // Runs against a production build; `npm run build` must run first.
    command: `npx next start -p ${PORT}`,
    url: `http://localhost:${PORT}`,
    // Never reuse: another app on the same port would silently be tested instead.
    reuseExistingServer: false,
    timeout: 60_000,
  },
});
