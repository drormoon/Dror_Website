import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { CheckCircle2, Linkedin, Mail, Phone } from 'lucide-react';

export const metadata: Metadata = {
  title: 'אודות דרור פינדר | מומחה ויועץ AI לארגונים',
  description:
    'דרור פינדר – מומחה בינה מלאכותית עם 11 שנות ניסיון בטכנולוגיה. מעביר הרצאות וסדנאות AI בארגונים, ומלווה חברות בתהליכי הטמעת Generative AI.',
  alternates: { canonical: 'https://www.drorfinder.com/about' },
  openGraph: {
    title: 'אודות דרור פינדר | מומחה ויועץ AI לארגונים',
    description:
      'מומחה בינה מלאכותית עם 11 שנות ניסיון. הרצאות, סדנאות והטמעת AI בארגונים.',
    url: 'https://www.drorfinder.com/about',
  },
};

const expertise = [
  'Generative AI – ChatGPT, Claude, Gemini ויישומים עסקיים',
  'הטמעת AI בתהליכי ניהול פרויקטים ו-Product Management',
  'בניית סוכני AI (Agents) לאוטומציה ארגונית',
  'הכשרת צוותים וסדנאות מעשיות Hands-on',
  'אינטגרציה לכלים קיימים: Jira, Monday, Notion ועוד',
  'ניתוח נתונים ובניית דשבורדים חכמים',
];

const timeline = [
  { year: '2024–היום', role: 'מייסד ומנהל – Dror Finder AI Consulting' },
  { year: '2019–2024', role: 'מנהל מוצר בכיר – חברות Enterprise וסטארט-אפים' },
  { year: '2015–2019', role: 'מנהל פרויקטים טכנולוגיים' },
  { year: '2013', role: 'כניסה לעולם הטכנולוגיה' },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen rtl font-body bg-surface-bright">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-deep-navy/95 backdrop-blur-md border-b border-white/10">
        <div className="flex flex-row justify-between items-center px-4 md:px-8 py-4 max-w-7xl mx-auto">
          <Link className="font-display text-2xl md:text-3xl font-extrabold text-white tracking-tight" href="/">
            Dror Finder
          </Link>
          <div className="hidden md:flex items-center gap-6 text-white/80 font-medium">
            <Link className="hover:text-electric-cyan transition-colors" href="/#services">שירותים</Link>
            <Link className="hover:text-electric-cyan transition-colors" href="/#process">תהליך עבודה</Link>
            <Link className="text-electric-cyan font-bold border-b-2 border-electric-cyan pb-1" href="/about">אודות</Link>
            <Link className="hover:text-electric-cyan transition-colors" href="/#contact">צור קשר</Link>
          </div>
          <Link href="/#contact" className="bg-amber-gold text-deep-navy px-6 py-2 rounded font-bold hover:bg-opacity-90 transition-colors active:scale-95">
            שיחת ייעוץ
          </Link>
        </div>
      </nav>

      <main className="pt-32 pb-24 px-4 md:px-8 max-w-7xl mx-auto">
        {/* Hero */}
        <section className="flex flex-col md:flex-row gap-12 md:gap-20 items-center mb-24">
          <div className="flex-1 w-full max-w-sm relative mx-auto md:mx-0">
            <div className="absolute inset-0 bg-electric-cyan/10 rounded-xl transform translate-x-4 translate-y-4"></div>
            <div className="relative z-10 w-full aspect-[4/5] rounded-xl overflow-hidden shadow-2xl border border-white/20">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBuDjQE0gge6VZKunyn8R9QnXV_-_ZOa2OZyhwZPENhuu15KCCJw9jY59dwZQ8OWTg7SoDr0gI8OG0vzboVnVrcI68gWEp_aicXKoFux7w2pwYweSvRTSmjGPgEWh70cdA-E61EXZypu3LrWhYUthHvyQF8WG1jq2xq5LeTqrFMqe50IFUEhwWfVz9a9gIOvic1vmJdyNo53H3CrV6JxFzyx9lh8ofmwXuPas8FDb2-C-lkn8eFnzkrhTfMPrdaW2ElI3ULA9nxa1U"
                alt="דרור פינדר – מומחה ויועץ AI לארגונים"
                fill
                className="object-cover"
                referrerPolicy="no-referrer"
                sizes="(max-width: 768px) 80vw, 400px"
                priority
              />
            </div>
          </div>

          <div className="flex-1 space-y-6">
            <span className="font-bold text-xs bg-electric-cyan/10 text-electric-cyan px-3 py-1 rounded-full uppercase tracking-widest inline-block">
              מומחה ויועץ AI לארגונים
            </span>
            <h1 className="font-display text-4xl md:text-5xl font-extrabold text-deep-navy leading-tight">
              דרור פינדר
            </h1>
            <p className="text-lg text-on-surface-variant leading-relaxed">
              מומחה בינה מלאכותית עם <strong>11 שנות ניסיון</strong> בעולם הטכנולוגיה. מלווה ארגונים, חברות וסטארט-אפים בתהליכי הטמעת Generative AI, ממיפוי הצרכים ועד פריסה בשטח.
            </p>
            <p className="text-lg text-on-surface-variant leading-relaxed">
              מאמין שבינה מלאכותית צריכה לעבוד בשביל האנשים, לא להחליף אותם. המשימה שלי: לגרום לצוותים לאמץ כלי AI בצורה מעשית, מדידה ובת-קיימא.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <a
                href="https://www.linkedin.com/in/dror-finder/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-deep-navy text-white px-5 py-2.5 rounded-lg font-medium hover:bg-opacity-90 transition-all"
              >
                <Linkedin className="w-4 h-4" />
                LinkedIn
              </a>
              <Link
                href="/#contact"
                className="inline-flex items-center gap-2 border-2 border-electric-cyan text-electric-cyan px-5 py-2.5 rounded-lg font-medium hover:bg-electric-cyan/5 transition-all"
              >
                צרו קשר
              </Link>
            </div>
          </div>
        </section>

        {/* Expertise */}
        <section className="mb-24">
          <h2 className="font-display text-3xl font-bold text-deep-navy mb-10 text-center">
            תחומי מומחיות ב-AI
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {expertise.map((item, i) => (
              <div key={i} className="flex items-start gap-3 bg-ice-white p-5 rounded-xl border border-deep-navy/10 shadow-sm">
                <CheckCircle2 className="w-5 h-5 text-electric-cyan shrink-0 mt-0.5" />
                <span className="text-on-surface-variant">{item}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Timeline */}
        <section className="mb-24 bg-deep-navy rounded-2xl p-8 md:p-12 text-white">
          <h2 className="font-display text-3xl font-bold mb-10 text-center">
            ניסיון מקצועי
          </h2>
          <div className="space-y-6 max-w-2xl mx-auto">
            {timeline.map((item, i) => (
              <div key={i} className="flex gap-6 items-start">
                <div className="shrink-0 text-amber-gold font-bold text-sm w-28 pt-0.5">{item.year}</div>
                <div className="flex-1 border-r border-white/20 pr-6">
                  <p className="text-white/90">{item.role}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="text-center">
          <h2 className="font-display text-3xl font-bold text-deep-navy mb-4">
            מעוניינים בהרצאת AI לארגון או בתהליך ייעוץ?
          </h2>
          <p className="text-lg text-on-surface-variant mb-8 max-w-xl mx-auto">
            נשמח לשמוע על הצרכים שלכם ולבדוק איך אפשר לעבוד יחד.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="mailto:drormoon@gmail.com" className="inline-flex items-center gap-2 bg-deep-navy text-white px-8 py-3 rounded-lg font-bold hover:bg-electric-cyan transition-colors">
              <Mail className="w-5 h-5" />
              drormoon@gmail.com
            </a>
            <a href="tel:+972523296556" className="inline-flex items-center gap-2 border-2 border-deep-navy text-deep-navy px-8 py-3 rounded-lg font-bold hover:bg-deep-navy hover:text-white transition-colors">
              <Phone className="w-5 h-5" />
              052-3296556
            </a>
          </div>
        </section>
      </main>

      <footer className="bg-deep-navy text-white text-sm border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-10 flex flex-col md:flex-row-reverse justify-between items-center gap-6">
          <div className="font-display font-medium text-amber-gold text-xl">Dror Finder</div>
          <div className="flex gap-6">
            <Link href="/privacy" className="text-white/60 hover:text-electric-cyan transition-colors">מדיניות פרטיות</Link>
            <Link href="/terms" className="text-white/60 hover:text-electric-cyan transition-colors">תנאי שימוש</Link>
            <a href="https://www.linkedin.com/in/dror-finder/" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-electric-cyan transition-colors">לינקדאין</a>
          </div>
          <div className="text-white/60">
            © {new Date().getFullYear()} דרור פינדר - ייעוץ ניהול פרויקטי AI. כל הזכויות שמורות.
          </div>
        </div>
      </footer>
    </div>
  );
}
