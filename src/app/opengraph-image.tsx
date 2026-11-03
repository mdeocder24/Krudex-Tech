import { ImageResponse } from 'next/og';
import { readFile } from 'node:fs/promises';
import { join } from 'node:path';

export const alt = 'Krudex Global — SaaS products, digital marketing and student training';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

// Shared social preview for every route (twitter falls back to og:image).
export default async function Image() {
  const logo = await readFile(join(process.cwd(), 'public/brand/krudex-global-mark-512.png'));
  const logoSrc = `data:image/png;base64,${logo.toString('base64')}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          background: '#0A0908',
          padding: '0 80px',
          gap: 56,
        }}
      >
        <img src={logoSrc} width={380} height={380} alt="" />
        <div style={{ display: 'flex', flexDirection: 'column', gap: 24, flex: 1 }}>
          <div style={{ fontSize: 64, color: '#F5EFE4', lineHeight: 1.1, fontWeight: 600 }}>
            Build. Solve. Scale.
          </div>
          <div style={{ fontSize: 30, color: '#9A9184', lineHeight: 1.4 }}>
            SaaS products, Google Ads &amp; digital marketing, and student training — from Hyderabad.
          </div>
          <div style={{ width: 96, height: 4, background: '#D4B483', marginTop: 8 }} />
        </div>
      </div>
    ),
    { ...size }
  );
}
