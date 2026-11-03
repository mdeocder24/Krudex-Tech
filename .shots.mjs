import { chromium } from '@playwright/test';
const S = process.argv[2];
const b = await chromium.launch({ args: ['--use-gl=angle','--enable-unsafe-swiftshader'] });
const go = async (name, url, opts = {}, fn) => {
  const ctx = await b.newContext({ viewport: opts.vp || { width: 1440, height: 900 }, reducedMotion: opts.rm || 'no-preference', deviceScaleFactor: 2 });
  const p = await ctx.newPage();
  p.on('console', m => m.type() === 'error' && console.log(name, 'console:', m.text()));
  await p.goto('http://localhost:3123' + url, { waitUntil: 'load' });
  await p.waitForTimeout(opts.wait || 1500);
  if (fn) await fn(p, name); else await p.screenshot({ path: `${S}/${name}.png` });
  await ctx.close();
};
await go('nav', '/', {}, async (p, n) => { await p.locator('header, nav').first().screenshot({ path: `${S}/${n}.png` }); });
await go('footer', '/', {}, async (p, n) => { await p.locator('footer').screenshot({ path: `${S}/${n}.png` }); });
await go('hero-rm', '/', { rm: 'reduce' });
await go('404', '/nope', { wait: 4000 });
await go('404-turn', '/nope', { wait: 5600 });
await go('nav-mobile', '/', { vp: { width: 375, height: 700 } }, async (p, n) => { await p.screenshot({ path: `${S}/${n}.png`, clip: { x: 0, y: 0, width: 375, height: 120 } }); });
await b.close();
