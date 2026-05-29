import type {Metadata} from 'next';
import { Heebo, Inter } from 'next/font/google';
import './globals.css'; // Global styles

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

export const metadata: Metadata = {
  title: 'דרור פינדר - המומחה AI',
  description: 'יעוץ, הטמעה וסדנאות GEN AI לכל שלב בתהליכי הפרויקט.',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="he" dir="rtl" className={`${heebo.variable} ${inter.variable}`}>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
