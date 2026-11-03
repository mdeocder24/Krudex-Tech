#!/usr/bin/env node
/**
 * Brand guard: keeps every logo on the site coming from one place.
 *
 * Fails (exit 1) when:
 *  1. A file outside src/components/brand/ references a logo image directly
 *     (anything under /brand/, or an old logo filename), instead of using
 *     <BrandLogo/> or the BRAND constants.
 *  2. The retired company name "Krudex Technologies" appears in the site
 *     source (the email inbox address is allowed).
 *  3. A file listed in BRAND, or the favicon / apple icon, is missing.
 *  4. An old logo image is back in public/.
 *
 * Runs automatically before every `npm run build` (prebuild) and in CI.
 */
import { readFileSync, readdirSync, statSync, existsSync } from 'node:fs';
import { join, relative, sep } from 'node:path';

const root = process.cwd();
const errors = [];

function walk(dir, out = []) {
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    if (statSync(p).isDirectory()) walk(p, out);
    else out.push(p);
  }
  return out;
}

const BRAND_DIR = join('src', 'components', 'brand') + sep;
const OLD_LOGO_FILES = /krudex-(bg|bg-gold|logo|nav)\.png|banner\.png/;
const BRAND_ASSET_REF = /["'`(]\/brand\//;
const OLD_NAME = /Krudex Technologies/i;

const sourceFiles = walk(join(root, 'src')).filter((f) => /\.(tsx?|jsx?|css|mdx?)$/.test(f));

for (const file of sourceFiles) {
  const rel = relative(root, file);
  const inBrandDir = rel.startsWith(BRAND_DIR);
  const lines = readFileSync(file, 'utf8').split('\n');
  lines.forEach((line, i) => {
    const at = `${rel}:${i + 1}`;
    if (!inBrandDir && (BRAND_ASSET_REF.test(line) || OLD_LOGO_FILES.test(line))) {
      errors.push(`${at}  logo image referenced directly. Use <BrandLogo/> or BRAND from '@/components/brand'.`);
    }
    if (OLD_NAME.test(line.replace(/krudextechnologies@[\w.]+/gi, ''))) {
      errors.push(`${at}  old company name "Krudex Technologies". Use BRAND.name ("Krudex Global").`);
    }
  });
}

// Every asset BRAND points at must exist.
const brandTs = readFileSync(join(root, 'src/components/brand/brand.ts'), 'utf8');
for (const [, path] of brandTs.matchAll(/:\s*'(\/brand\/[^']+)'/g)) {
  if (!existsSync(join(root, 'public', path))) errors.push(`public${path}  listed in BRAND but missing.`);
}
for (const icon of ['src/app/icon.png', 'src/app/apple-icon.png']) {
  if (!existsSync(join(root, icon))) errors.push(`${icon}  missing (favicon must be the gold KK mark).`);
}

// Old logo images must not be deployed again.
for (const file of walk(join(root, 'public'))) {
  if (OLD_LOGO_FILES.test(file)) errors.push(`${relative(root, file)}  old logo image in public/. Move it to design/brand-archive/.`);
}

if (errors.length) {
  console.error(`\n✖ Brand check failed (${errors.length}):\n`);
  for (const e of errors) console.error(`  ${e}`);
  console.error('\nAll logos come from src/components/brand/. See README → "Brand assets".\n');
  process.exit(1);
}
console.log('✓ Brand check passed: every logo comes from src/components/brand/.');
