#!/usr/bin/env node
/**
 * Renders the static brand files from the Cube mark in src/components/brand/brand.ts:
 *
 *   public/brand/krudex-global-mark.png      1024×1024, transparent
 *   public/brand/krudex-global-mark-512.png   512×512, transparent (JSON-LD logo)
 *   public/brand/krudex-global-lockup.png     stacked lockup, transparent (OG image)
 *   src/app/icon.png                          512×512 favicon, no core (reference: 32px/16px)
 *   src/app/apple-icon.png                    180×180, dark tile (reference: app icon)
 *
 * Usage: npm run brand:render   (needs `npx playwright install chromium` and network
 * access for the Plus Jakarta Sans webfont used by the lockup).
 */
import { chromium } from '@playwright/test';
import { join } from 'node:path';
import { CUBE } from '../src/components/brand/brand.ts';

const root = process.cwd();
const out = (p) => join(root, p);

function glyph({ height, core = true }) {
  const c = CUBE.color;
  return `<svg viewBox="${CUBE.viewBox}" style="height:${height};width:auto;aspect-ratio:${CUBE.aspect};display:block">
    <polygon points="${CUBE.faces.top}" fill="${c.top}"/>
    <polygon points="${CUBE.faces.left}" fill="${c.left}"/>
    <polygon points="${CUBE.faces.right}" fill="${c.right}"/>
    ${core ? `<circle cx="${CUBE.core.cx}" cy="${CUBE.core.cy}" r="${CUBE.core.r}" fill="${c.core}"/>` : ''}
  </svg>`;
}

const page = (body, bg = 'transparent') => `<!doctype html><html><head>
<link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@600;800&display=block" rel="stylesheet">
<style>html,body{margin:0;background:${bg}}#t{display:inline-flex;align-items:center;justify-content:center}</style>
</head><body>${body}</body></html>`;

// Square tile with the mark centred at `scale` of the tile height.
const tile = (size, { scale, core = true, bg = 'transparent' }) =>
  page(`<div id="t" style="width:${size}px;height:${size}px;background:${bg}">${glyph({ height: `${size * scale}px`, core })}</div>`);

// Mirrors <BrandLogo variant="stacked" /> at a 72px wordmark.
const lockup = page(`<div id="t" style="flex-direction:column;gap:0.5em;font-size:72px;padding:0.2em;font-family:'Plus Jakarta Sans',sans-serif;line-height:1">
  ${glyph({ height: '3.2em' })}
  <div style="display:flex;flex-direction:column;align-items:center">
    <span style="font-weight:800;letter-spacing:0.12em;padding-left:0.12em;color:#F5EFE4">KRUDEX</span>
    <span style="margin-top:0.147em;display:flex;width:100%;align-items:center;gap:0.206em">
      <span style="height:1px;flex:1;background:#2B2721"></span>
      <span style="font-size:0.28em;font-weight:600;letter-spacing:0.62em;padding-left:0.62em;color:#D4B483">GLOBAL</span>
      <span style="height:1px;flex:1;background:#2B2721"></span>
    </span>
  </div>
</div>`);

const jobs = [
  ['public/brand/krudex-global-mark.png', tile(1024, { scale: 0.9 })],
  ['public/brand/krudex-global-mark-512.png', tile(512, { scale: 0.9 })],
  ['src/app/icon.png', tile(512, { scale: 0.96, core: false })],
  ['src/app/apple-icon.png', tile(180, { scale: 0.56, bg: 'linear-gradient(160deg,#1C1915 0%,#0A0908 100%)' })],
  ['public/brand/krudex-global-lockup.png', lockup, 2],
];

const browser = await chromium.launch();
try {
  for (const [file, html, dpr = 1] of jobs) {
    const ctx = await browser.newContext({ deviceScaleFactor: dpr });
    const p = await ctx.newPage();
    await p.setContent(html, { waitUntil: 'networkidle' });
    await p.evaluate(() => document.fonts.ready);
    await p.locator('#t').screenshot({ path: out(file), omitBackground: true });
    await ctx.close();
    console.log(`✓ ${file}`);
  }
} finally {
  await browser.close();
}
