import type {Metadata} from 'next';
import { Heebo, Inter } from 'next/font/google';
import './globals.css';

const heebo = Heebo({
  subsets: ['hebrew', 'latin'],
  variable: '--font-heebo',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.drorfinder.com';

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: 'דרור פינדר | מומחה ויועץ AI לארגונים – הרצאות וסדנאות בינה מלאכותית',
    template: '%s | דרור פינדר',
  },
  description:
    'דרור פינדר – מומחה AI ויועץ בינה מלאכותית לארגונים. הרצאות, סדנאות והטמעת Generative AI לניהול פרויקטים, ניהול מוצר ותהליכים ארגוניים. 11 שנות ניסיון.',
  keywords: [
    'דרור פינדר',
    'מומחה AI',
    'יועץ AI',
    'יועץ בינה מלאכותית',
    'הרצאות AI',
    'סדנאות AI',
    'הרצאות AI בארגונים',
    'סדנאות בינה מלאכותית',
    'הטמעת AI בארגונים',
    'Generative AI',
    'ChatGPT לארגונים',
    'ייעוץ טכנולוגי',
    'AI consulting Israel',
    'Dror Finder',
    'AI expert Israel',
  ],
  authors: [{ name: 'דרור פינדר', url: baseUrl }],
  creator: 'דרור פינדר',
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  alternates: {
    canonical: baseUrl,
  },
  openGraph: {
    type: 'website',
    locale: 'he_IL',
    url: baseUrl,
    siteName: 'דרור פינדר – מומחה AI',
    title: 'דרור פינדר | מומחה ויועץ AI לארגונים',
    description:
      'הרצאות, סדנאות והטמעת Generative AI לארגונים. 11 שנות ניסיון בטכנולוגיה.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'דרור פינדר | מומחה ויועץ AI לארגונים',
    description:
      'הרצאות, סדנאות והטמעת Generative AI לארגונים. 11 שנות ניסיון בטכנולוגיה.',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Person',
      '@id': `${baseUrl}/#person`,
      name: 'דרור פינדר',
      alternateName: 'Dror Finder',
      url: baseUrl,
      jobTitle: 'מומחה ויועץ בינה מלאכותית',
      description:
        'מומחה AI ויועץ בינה מלאכותית לארגונים. מעביר הרצאות וסדנאות Generative AI, ומטמיע פתרונות AI בתהליכים ארגוניים.',
      sameAs: ['https://www.linkedin.com/in/dror-finder/'],
      knowsAbout: [
        'Generative AI',
        'בינה מלאכותית',
        'ניהול פרויקטים',
        'ניהול מוצר',
        'אוטומציה ארגונית',
      ],
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: '+972-52-3296556',
        email: 'drormoon@gmail.com',
        contactType: 'customer service',
        availableLanguage: ['Hebrew', 'English'],
      },
    },
    {
      '@type': 'ProfessionalService',
      '@id': `${baseUrl}/#business`,
      name: 'דרור פינדר – ייעוץ AI',
      url: baseUrl,
      founder: { '@id': `${baseUrl}/#person` },
      description:
        'ייעוץ, הטמעה וסדנאות Generative AI לארגונים בישראל.',
      areaServed: 'IL',
      serviceType: [
        'ייעוץ בינה מלאכותית',
        'הרצאות AI לארגונים',
        'סדנאות ChatGPT',
        'הטמעת AI בתהליכים ארגוניים',
      ],
      sameAs: ['https://www.linkedin.com/in/dror-finder/'],
    },
  ],
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="he" dir="rtl" className={`${heebo.variable} ${inter.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
