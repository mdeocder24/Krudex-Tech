import { ImageResponse } from 'next/og';
import { readFile } from 'node:fs/promises';
import { join } from 'node:path';
import { BRAND } from '@/components/brand/brand';

export const alt = `${BRAND.name} — SaaS products, digital marketing and student training`;
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

// Shared social preview for every route (twitter falls back to og:image).
// The lockup PNG is a render of <BrandLogo variant="stacked" />; see README → "Brand assets".
export default async function Image() {
  const lockup = await readFile(join(process.cwd(), 'public', BRAND.lockupSrc));
  const lockupSrc = `data:image/png;base64,${lockup.toString('base64')}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          background: '#0A0908',
          padding: '0 72px',
          gap: 64,
        }}
      >
        <img src={lockupSrc} width={400} height={486} alt="" />
        <div style={{ display: 'flex', flexDirection: 'column', gap: 24, flex: 1 }}>
          <div style={{ fontSize: 62, color: '#F5EFE4', lineHeight: 1.1, fontWeight: 600 }}>
            Build. Solve. Scale.
          </div>
          <div style={{ fontSize: 30, color: '#9A9184', lineHeight: 1.4 }}>
            SaaS products, Google Ads &amp; digital marketing, and student training, from Hyderabad to the world.
          </div>
          <div style={{ width: 96, height: 4, background: '#D4B483', marginTop: 8 }} />
        </div>
      </div>
    ),
    { ...size }
  );
}
