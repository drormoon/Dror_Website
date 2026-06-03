import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'דרור פינדר – מומחה ויועץ AI לארגונים';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#0A1628',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-end',
          justifyContent: 'center',
          padding: '80px',
          fontFamily: 'sans-serif',
          direction: 'rtl',
        }}
      >
        {/* background grid */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage:
              'radial-gradient(circle at 2px 2px, rgba(0,229,255,0.08) 1px, transparent 0)',
            backgroundSize: '32px 32px',
          }}
        />

        {/* cyan accent bar */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            right: 0,
            width: '6px',
            height: '100%',
            background: '#00E5FF',
          }}
        />

        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '16px', zIndex: 10 }}>
          {/* badge */}
          <div
            style={{
              background: 'rgba(0,229,255,0.12)',
              color: '#00E5FF',
              fontSize: '18px',
              fontWeight: 700,
              padding: '8px 20px',
              borderRadius: '999px',
              letterSpacing: '2px',
              textTransform: 'uppercase',
            }}
          >
            מומחה ויועץ AI לארגונים
          </div>

          {/* name */}
          <div
            style={{
              color: '#FFB800',
              fontSize: '88px',
              fontWeight: 900,
              lineHeight: 1,
            }}
          >
            דרור פינדר
          </div>

          {/* tagline */}
          <div
            style={{
              color: 'rgba(255,255,255,0.85)',
              fontSize: '34px',
              fontWeight: 400,
              maxWidth: '700px',
              textAlign: 'right',
              lineHeight: 1.4,
            }}
          >
            הרצאות, סדנאות והטמעת{' '}
            <span style={{ color: '#00E5FF', fontWeight: 700 }}>Generative AI</span>{' '}
            לארגונים
          </div>

          {/* domain */}
          <div style={{ color: 'rgba(255,255,255,0.4)', fontSize: '22px', marginTop: '16px' }}>
            www.drorfinder.com
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
