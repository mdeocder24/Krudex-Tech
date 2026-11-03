import { test, expect } from '@playwright/test';

// Runs once (desktop project) and sets its own viewports.
test.skip(({ isMobile }) => isMobile, 'viewport sweep runs in the desktop project only');

const widths = [280, 320, 375, 414, 768, 1024, 1440, 1920, 2560];
const paths = ['/', '/services', '/training', '/about', '/our-team', '/contact', '/privacy', '/terms'];

for (const width of widths) {
  test(`no horizontal scroll at ${width}px`, async ({ page }) => {
    await page.setViewportSize({ width, height: 900 });
    for (const path of paths) {
      await page.goto(path);
      const { scrollWidth, clientWidth } = await page.evaluate(() => ({
        scrollWidth: document.documentElement.scrollWidth,
        clientWidth: document.documentElement.clientWidth,
      }));
      expect(scrollWidth, `${path} overflows at ${width}px`).toBeLessThanOrEqual(clientWidth);
    }
  });
}
