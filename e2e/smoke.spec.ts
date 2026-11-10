import { test, expect } from '@playwright/test';

const pages = [
  { path: '/', heading: 'We build SaaS products that scale.' },
  { path: '/services', heading: /.+/ },
  { path: '/training', heading: /.+/ },
  { path: '/about', heading: /.+/ },
  { path: '/our-team', heading: /.+/ },
  { path: '/contact', heading: /Let.s build/i },
  { path: '/privacy', heading: /Privacy Policy/ },
  { path: '/terms', heading: /Terms of Use/ },
];

for (const { path, heading } of pages) {
  test(`${path} renders with title and h1`, async ({ page }) => {
    const res = await page.goto(path);
    expect(res?.status()).toBe(200);
    await expect(page).toHaveTitle(/Krudex Global/);
    // Accessible name, i.e. what screen readers announce.
    await expect(page.getByRole('heading', { level: 1 }).first()).toHaveAccessibleName(heading);
  });
}

test('unknown route returns 404', async ({ page }) => {
  const res = await page.goto('/does-not-exist');
  expect(res?.status()).toBe(404);
});

test('sitemap and robots are served', async ({ request }) => {
  const sitemap = await request.get('/sitemap.xml');
  expect(sitemap.ok()).toBeTruthy();
  expect(await sitemap.text()).toContain('/contact');
  const robots = await request.get('/robots.txt');
  expect(await robots.text()).toContain('Sitemap:');
});

test('llms.txt is served as Markdown', async ({ request }) => {
  const res = await request.get('/llms.txt');
  expect(res.ok()).toBeTruthy();
  expect(res.headers()['content-type']).toContain('text/markdown');
  const body = await res.text();
  expect(body).toMatch(/^# Krudex Global/);
  expect(body).toContain('## Services');
});

test('security headers are set', async ({ request }) => {
  const res = await request.get('/');
  const h = res.headers();
  expect(h['x-frame-options']).toBe('DENY');
  expect(h['x-content-type-options']).toBe('nosniff');
  expect(h['x-powered-by']).toBeUndefined();
});

test('contact form submits (API mocked, nothing written to database)', async ({ page }) => {
  let payload: Record<string, unknown> | null = null;
  await page.route('**/api/contact', async (route) => {
    payload = route.request().postDataJSON();
    await route.fulfill({ status: 201, json: { success: true, id: 'test' } });
  });

  await page.goto('/contact');
  await page.getByLabel('Your name *').fill('Test Visitor');
  await page.getByLabel('Email *').fill('visitor@example.com');
  await page.getByText('Web platform', { exact: true }).click();
  await page.getByRole('button', { name: /Send inquiry/ }).click();

  await expect(page.getByRole('heading', { name: 'Inquiry received.' })).toBeVisible();
  expect(payload).toMatchObject({ name: 'Test Visitor', email: 'visitor@example.com', scope: 'Web platform', website: '' });
});

test('contact form requires a service', async ({ page }) => {
  await page.goto('/contact');
  await page.getByLabel('Your name *').fill('Test Visitor');
  await page.getByLabel('Email *').fill('visitor@example.com');
  await page.getByRole('button', { name: /Send inquiry/ }).click();
  await expect(page.getByText('Pick at least one so we know who should reply.')).toBeVisible();
});
