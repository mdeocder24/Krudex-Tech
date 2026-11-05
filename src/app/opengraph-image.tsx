import { ImageResponse } from 'next/og';
import { readFile } from 'node:fs/promises';
import { join } from 'node:path';
import { BRAND } from '@/components/brand/brand';

export const alt = `${BRAND.name} — SaaS products, digital marketing and student training`;
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

// Shared social preview for every route (twitter falls back to og:image).
export default async function Image() {
  const logo = await readFile(join(process.cwd(), 'public', BRAND.logoSrc));
  const logoSrc = `data:image/png;base64,${logo.toString('base64')}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          background: '#000000',
          padding: '0 72px',
          gap: 64,
        }}
      >
        <img src={logoSrc} width={460} height={Math.round((460 * BRAND.logoHeight) / BRAND.logoWidth)} alt="" />
        <div style={{ display: 'flex', flexDirection: 'column', gap: 24, flex: 1 }}>
          <div style={{ fontSize: 62, color: '#FAFAFA', lineHeight: 1.1, fontWeight: 600 }}>
            Build. Solve. Scale.
          </div>
          <div style={{ fontSize: 30, color: '#8F8F8F', lineHeight: 1.4 }}>
            SaaS products, Google Ads &amp; digital marketing, and student training, from Hyderabad to the world.
          </div>
          <div style={{ width: 96, height: 4, background: '#FFFFFF', marginTop: 8 }} />
        </div>
      </div>
    ),
    { ...size }
  );
}
