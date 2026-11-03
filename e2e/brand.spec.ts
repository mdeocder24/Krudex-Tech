import { test, expect } from '@playwright/test';

// The logo must come from src/components/brand on every page.
// (Static references are also enforced by scripts/check-brand.mjs.)
const paths = ['/', '/services', '/training', '/about', '/our-team', '/contact', '/privacy', '/terms', '/does-not-exist'];

for (const path of paths) {
  test(`${path} shows the Krudex Global logo in navbar and footer`, async ({ page }) => {
    await page.goto(path);
    const home = page.getByRole('link', { name: 'Krudex Global — home' });
    await expect(home).toHaveCount(2); // navbar + footer
    for (const link of await home.all()) {
      await expect(link.locator('img[src*="brand%2Fkrudex-global-logo"]:visible')).toHaveCount(1);
    }
    await expect(page.locator('img[src*="krudex-bg"], img[src*="krudex-logo"], img[src*="krudex-nav"]')).toHaveCount(0);
  });
}

test('favicon, apple icon and social card are served', async ({ page, request }) => {
  await page.goto('/');
  for (const rel of ['icon', 'apple-touch-icon']) {
    const href = await page.locator(`link[rel="${rel}"]`).first().getAttribute('href');
    expect(href, `${rel} link`).toBeTruthy();
    expect((await request.get(href!)).ok()).toBeTruthy();
  }
  const og = await page.locator('meta[property="og:image"]').getAttribute('content');
  const ogRes = await request.get(new URL(og!).pathname + new URL(og!).search);
  expect(ogRes.headers()['content-type']).toContain('image/png');
});
