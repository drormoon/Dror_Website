import Image from 'next/image';
import {
  Network,
  Package,
  Share2,
  GraduationCap,
  CheckCircle2,
  ArrowLeft,
  CalendarDays,
  Mail,
  Phone
} from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen rtl font-body">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-deep-navy/95 backdrop-blur-md border-b border-white/10">
        <div className="flex flex-row justify-between items-center px-4 md:px-8 py-4 max-w-7xl mx-auto">
          <a className="font-display text-2xl md:text-3xl font-extrabold text-white tracking-tight" href="#">
            Dror Finder
          </a>
          <div className="hidden md:flex items-center gap-6 text-white/80 font-medium">
            <a className="text-electric-cyan font-bold border-b-2 border-electric-cyan pb-1 transition-colors hover:text-electric-cyan" href="#home">דף הבית</a>
            <a className="hover:text-electric-cyan transition-colors" href="#services">שירותים</a>
            <a className="hover:text-electric-cyan transition-colors" href="#process">תהליך עבודה</a>
            <a className="hover:text-electric-cyan transition-colors" href="#contact">צור קשר</a>
          </div>
          <button className="bg-amber-gold text-deep-navy px-6 py-2 rounded font-bold hover:bg-opacity-90 transition-colors active:scale-95">
            שיחת ייעוץ
          </button>
        </div>
      </nav>

      <main className="pt-24 pb-24">
        {/* Hero Section */}
        <section id="home" className="relative w-full overflow-hidden bg-surface-bright">
          <div className="animated-grid-bg"></div>
          <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-32 flex flex-col md:flex-row items-center gap-12 relative z-10">
          {/* Text Content */}
          <div className="flex-1 space-y-6">
            <span className="font-bold text-xs bg-electric-cyan/10 text-electric-cyan px-3 py-1 rounded-full uppercase tracking-widest inline-block">
              Expert AI Consulting
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-extrabold text-deep-navy leading-tight">
              GENERATIVE AI FOR SERIOUS AND MEASURABLE WORK
            </h1>
            <p className="text-lg md:text-xl text-on-surface-variant max-w-2xl leading-relaxed">
              יעוץ, הטמעה וסדנאות GEN AI לכל שלב בתהליכי הפרויקט. 11 שנות ניסיון בעולם הטכנולוגיה, מ-Startups ועד Enterprise.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button className="bg-deep-navy text-ice-white px-8 py-3 rounded-lg font-medium hover:bg-opacity-90 transition-all shadow-lg hover:shadow-xl">
                בואו נדבר
              </button>
              <button className="border-2 border-electric-cyan text-electric-cyan px-8 py-3 rounded-lg font-medium hover:bg-electric-cyan/5 transition-all">
                סדנאות והרצאות
              </button>
            </div>
          </div>

          {/* Image */}
          <div className="flex-1 w-full max-w-md relative">
            <div className="absolute inset-0 bg-electric-cyan/10 rounded-xl transform translate-x-4 translate-y-4"></div>
            <div className="relative z-10 w-full aspect-[4/5] rounded-xl overflow-hidden shadow-2xl border border-white/20">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBuDjQE0gge6VZKunyn8R9QnXV_-_ZOa2OZyhwZPENhuu15KCCJw9jY59dwZQ8OWTg7SoDr0gI8OG0vzboVnVrcI68gWEp_aicXKoFux7w2pwYweSvRTSmjGPgEWh70cdA-E61EXZypu3LrWhYUthHvyQF8WG1jq2xq5LeTqrFMqe50IFUEhwWfVz9a9gIOvic1vmJdyNo53H3CrV6JxFzyx9lh8ofmwXuPas8FDb2-C-lkn8eFnzkrhTfMPrdaW2ElI3ULA9nxa1U"
                alt="Dror Finder"
                fill
                className="object-cover"
                referrerPolicy="no-referrer"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
          </div>
        </section>

        {/* Logos Section */}
        <section className="bg-deep-navy py-12 border-y border-white/5">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <h2 className="text-center text-sm text-white/50 uppercase tracking-widest font-bold mb-10">
              ניסיון מהשטח — בחברות אמיתיות
            </h2>
            <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-80 invert brightness-0">
              {/* Note: I am directly using next/image with specific dimensions setup, preserving ratio */}
              {[
                "https://lh3.googleusercontent.com/aida-public/AB6AXuCE0sIh8Hxsej3eoUQLnEl3Z-ADOfoBjpACXBkWC_wKCjW1PmKbz_9aoSoAqeYBru_cC4xzg0_Ssx817-jvixPjDqu3GpQOWiFkN3emlqKOBmNfV4Uu4kujbhN0Rbtph5ZmpRm3IPpI4GQ1jXYuwK7p2bVshgxM4gWpI7pwWry6Y6J4qqvp87Tixgsg52rRXxLKEPTkIWBpGFWsfS1kWYRP8cEP7Rv9vLgnTbiUBtRkvuwmUxVS4ZU9UH6u5l-3IBNn7saoE0eOQXY",
                "https://lh3.googleusercontent.com/aida-public/AB6AXuDSwg3e7IeexvkRapITBt2shTodw5BhZneXpMWDW3ri38gJJI3y96o68_T05e_dmzzcfdG1mvLHQnRz4uvsEtMC-m1slQElCVR4kCkqIKAEZeIvrTa61hsbHevj-kiqIofAKSK_5A1lntQYG6VxkJwjdNb_DCY9CYlobva4iM4-7DiHYNOhEwugASpMbOEtixGQOXaypmnl7l14r-W6-R9sAJxEzVAwCFj8ELc-InA0bPtVgfYGPOzqbJW51c3kgQRQ23N-fZkca8o",
                "https://lh3.googleusercontent.com/aida-public/AB6AXuDyGJba6kwIRSXcsGbyTcjz1kQ2Lacun2y9t7J0cdzyrbiv0oSzA0oKmddf9_BK0XoDtqEpnTMJ83hYO_DR2JbBxlGZGvqJHFrbhqrCiImDKymZhsArrpeeTRInxrhKigGUl3Ac1mSygRbZU3IAaxd4KhiKalrIZZ602n8gqpoR0AraCuEJ_SegQat0EIARTzP3Irl3zrkPYAD8UWL0P9vuXvr4U6a6FNcN5C8M2w_BT8moc_G9dtFkgPaRlD14YzsVpr0x5bOs9w4",
                "https://lh3.googleusercontent.com/aida-public/AB6AXuAyaYxUFSi5YIOBns2M1fm1uOaj0xP6E3M9HcuuU6nvTISTxTA4L1T0rioyNWGg6HvXBqABPwOCijvPiAeKCOntR5XQbytkBugo6o4CKWR1q2Ju1Mc3Cv_TTyO_5vGZrHNhTQQGUHd0j9DlvE-Dmgyrjd4URev8GR1FBoZTekaM5MM02TtSuXq01OPPkALbC9Qr4qQQl7oAIfrw-mWapuGS3sGuHmzRDMDJde_w263n4NhWhmstU92KNIYB9fEea7hXyYOKBeidg94",
                "https://lh3.googleusercontent.com/aida-public/AB6AXuCQrfnZwXRs2xIm7XM1-OIFnEGSC_--ccapej0YzOnWjzMCm4z271OVm4_V_XBWQUZk-0RgYoke2TaT5RFUfTnMlBxHVnAJqD0mCmBKOLjt4D2YNPUnwgTiv3MKK89SCozYTKozLO_UBopuu-UlFn6vG1p966MzAA1djidcQFkGIMpYbneqKBAOHCw4UdeT1CVhPURTn-7u4_4Jh6fjvC-gGKyX3RdrBI5cXtpgr-0OR34GjfHjBvM-jpWkQJPOweeNM8BEJtP1YvE"
              ].map((src, i) => (
                <div key={i} className="relative h-10 w-32 md:h-12 md:w-36">
                   <Image src={src} fill alt="Company logo" referrerPolicy="no-referrer" className="object-contain" />
                </div>
              ))}
            </div>
          </div>
        </section>


        {/* Services Bento Grid */}
        <section id="services" className="py-24 px-4 md:px-8 max-w-7xl mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-deep-navy mb-4">
              מה אני מציע — ואיך זה עובד בפועל
            </h2>
            <p className="text-lg text-on-surface-variant leading-relaxed">
              לא ייעוץ תיאורטי. לא מצגת ואז להתראות. הטמעה תהליכית, יחד איתכם, בקצב שמתאים לארגון שלכם.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            {/* Service 1: PM */}
            <div className="md:col-span-12 bg-ice-white rounded-xl p-8 md:p-12 border border-deep-navy/10 hover:border-electric-cyan/50 transition-colors shadow-sm hover:shadow-md flex flex-col md:flex-row gap-8 md:gap-12 group">
              <div className="md:w-1/3">
                <div className="w-16 h-16 bg-surface flex items-center justify-center rounded-full mb-6">
                  <Network className="w-8 h-8 text-electric-cyan" />
                </div>
                <h3 className="font-display text-2xl font-bold text-deep-navy mb-2">AI לניהול פרויקטים</h3>
                <p className="text-on-surface-variant italic mb-6">AI that manages projects with you, not instead of you.</p>
              </div>
              
              <div className="md:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-xs font-bold text-electric-cyan bg-electric-cyan/10 px-3 py-1 rounded-full uppercase inline-block mb-4">הבעיות שאנחנו פותרים</h4>
                  <ul className="space-y-3">
                    {['עומס משימות אדמיניסטרטיביות.', 'חוסר שקיפות בסטטוס הפרויקט.', 'קושי בחיזוי עיכובים.'].map((text, i) => (
                      <li key={i} className="flex items-start gap-2 text-on-surface-variant">
                        <CheckCircle2 className="w-5 h-5 text-electric-cyan shrink-0" />
                        <span>{text}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="text-xs font-bold text-electric-cyan bg-electric-cyan/10 px-3 py-1 rounded-full uppercase inline-block mb-4">מה כולל השירות</h4>
                  <ul className="space-y-3">
                    {['אוטומציה של יצירת משימות ומעקב.', 'דשבורדים חכמים מבוססי AI לחיזוי סיכונים.', 'אינטגרציה לכלים קיימים (Jira, Monday).'].map((text, i) => (
                      <li key={i} className="flex items-start gap-2 text-on-surface-variant">
                        <span className="text-amber-gold font-bold shrink-0 mt-0.5">•</span>
                        <span>{text}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="md:col-span-2 pt-4">
                  <a href="#" className="inline-flex items-center gap-2 border border-electric-cyan text-electric-cyan hover:bg-electric-cyan hover:text-white transition-colors px-6 py-2.5 rounded-lg font-medium group-hover:bg-electric-cyan group-hover:text-white">
                    למידע נוסף
                    <ArrowLeft className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>

            {/* Service 2: Product */}
            <div className="md:col-span-6 bg-ice-white rounded-xl p-8 md:p-10 border border-deep-navy/10 hover:border-electric-cyan/50 transition-colors shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-14 h-14 bg-surface flex items-center justify-center rounded-full mb-6">
                  <Package className="w-7 h-7 text-electric-cyan" />
                </div>
                <h3 className="font-display text-2xl font-bold text-deep-navy mb-2">AI לניהול מוצר</h3>
                <p className="text-on-surface-variant italic mb-8">Think bigger with AI.</p>
                
                <div className="space-y-6">
                  <div>
                    <h4 className="text-xs font-bold text-electric-cyan bg-electric-cyan/10 px-3 py-1 rounded-full uppercase inline-block mb-2">הבעיות שאנחנו פותרים</h4>
                    <p className="text-sm text-on-surface-variant">קושי בניתוח דאטה משתמשים נרחב, תעדוף פיצ'רים איטי, ופספוס מגמות שוק.</p>
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-electric-cyan bg-electric-cyan/10 px-3 py-1 rounded-full uppercase inline-block mb-2">מה כולל השירות</h4>
                    <p className="text-sm text-on-surface-variant">הטמעת כלי AI למחקרי שוק אוטומטיים, ניתוח פידבק משתמשים בסקייל, ובניית מודלי תעדוף חכמים.</p>
                  </div>
                </div>
              </div>
              <div className="pt-8">
                <a href="#" className="inline-flex items-center gap-2 text-electric-cyan hover:text-deep-navy transition-colors font-medium">
                  קראו עוד
                  <ArrowLeft className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Service 3: Processes */}
            <div className="md:col-span-6 bg-ice-white rounded-xl p-8 md:p-10 border border-deep-navy/10 hover:border-electric-cyan/50 transition-colors shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-14 h-14 bg-surface flex items-center justify-center rounded-full mb-6">
                  <Share2 className="w-7 h-7 text-electric-cyan" />
                </div>
                <h3 className="font-display text-2xl font-bold text-deep-navy mb-2">AI לתהליכים ארגוניים</h3>
                <p className="text-on-surface-variant italic mb-8">Work smarter in every department.</p>
                
                <div className="space-y-6">
                  <div>
                    <h4 className="text-xs font-bold text-electric-cyan bg-electric-cyan/10 px-3 py-1 rounded-full uppercase inline-block mb-2">הבעיות שאנחנו פותרים</h4>
                    <p className="text-sm text-on-surface-variant">צווארי בקבוק תפעוליים, עבודת כפיים מיותרת, וחוסר סנכרון בין מחלקות.</p>
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-electric-cyan bg-electric-cyan/10 px-3 py-1 rounded-full uppercase inline-block mb-2">מה כולל השירות</h4>
                    <p className="text-sm text-on-surface-variant">מיפוי תהליכים רוחבי, זיהוי פוטנציאל אוטומציה, והטמעת סוכני AI (Agents) לביצוע משימות חוזרות.</p>
                  </div>
                </div>
              </div>
              <div className="pt-8">
                <a href="#" className="inline-flex items-center gap-2 text-electric-cyan hover:text-deep-navy transition-colors font-medium">
                  קראו עוד
                  <ArrowLeft className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Service 4: Training */}
            <div className="md:col-span-12 bg-deep-navy rounded-xl p-8 md:p-12 relative overflow-hidden text-white flex flex-col md:flex-row gap-8 md:gap-12 mt-4">
              <div className="absolute top-0 right-0 w-full h-full opacity-5 pointer-events-none" style={{ backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)", backgroundSize: "24px 24px" }} />
              
              <div className="relative z-10 md:w-1/3">
                <div className="w-16 h-16 bg-white/10 flex items-center justify-center rounded-full mb-6">
                  <GraduationCap className="w-8 h-8 text-amber-gold" />
                </div>
                <h3 className="font-display text-3xl font-bold mb-2">הכשרות וסדנאות</h3>
                <p className="text-white/70 italic mb-6">AI training people actually use.</p>
              </div>
              
              <div className="relative z-10 md:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-xs font-bold text-deep-navy bg-amber-gold px-3 py-1 rounded-full uppercase inline-block mb-4">הבעיות שאנחנו פותרים</h4>
                  <ul className="space-y-3">
                    {['פחד מטכנולוגיה חדשה בקרב העובדים.', 'שימוש לא יעיל בכלים קיימים.'].map((text, i) => (
                      <li key={i} className="flex items-start gap-2 text-white/90">
                        <CheckCircle2 className="w-5 h-5 text-amber-gold shrink-0" />
                        <span>{text}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="text-xs font-bold text-deep-navy bg-amber-gold px-3 py-1 rounded-full uppercase inline-block mb-4">מה כולל השירות</h4>
                  <ul className="space-y-3">
                    {['סדנאות מעשיות (Hands-on) לשימוש ב-ChatGPT, Claude וכו\'.', 'בניית תוכניות הכשרה פנים-ארגוניות מותאמות אישית.'].map((text, i) => (
                      <li key={i} className="flex items-start gap-2 text-white/90">
                        <span className="text-electric-cyan font-bold shrink-0 mt-0.5">•</span>
                        <span>{text}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="md:col-span-2 pt-4">
                  <a href="#" className="inline-flex items-center gap-2 bg-amber-gold text-deep-navy hover:bg-opacity-90 transition-opacity px-6 py-3 rounded-lg font-bold">
                    הזמן סדנא
                    <CalendarDays className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section id="process" className="bg-surface-container py-24 border-y border-deep-navy/10 relative">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <div className="text-center mb-16">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-deep-navy mb-4">
                תהליך עבודה מדיד וברור
              </h2>
              <p className="text-lg text-on-surface-variant max-w-2xl mx-auto">
                הדרך שלנו להצלחה מבוססת על מתודולוגיה ברורה, שלבים מוגדרים ויעדים מדידים.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
              <div className="hidden md:block absolute top-1/2 right-0 left-0 h-0.5 bg-deep-navy/10 -translate-y-1/2 z-0"></div>
              
              {[
                { step: '01', title: 'מיפוי ואפיון', desc: 'הבנת הצרכים, זיהוי צווארי בקבוק והגדרת מטרות מדידות.' },
                { step: '02', title: 'תכנון פתרון', desc: 'בחירת כלי AI מתאימים ובניית ארכיטקטורת תהליך יעילה.' },
                { step: '03', title: 'פיתוח והטמעה', desc: 'יישום הפתרון בשטח, חיבור למערכות קיימות ויצירת אוטומציות.' },
                { step: '04', title: 'הדרכה וליווי', desc: 'הכשרת הצוות, מעקב ביצועים ושיפור מתמיד של התהליכים.' },
              ].map((item, idx) => (
                <div key={idx} className="relative z-10 bg-ice-white p-6 rounded-xl border border-deep-navy/10 shadow-sm flex flex-col items-start gap-4">
                  <div className="w-12 h-12 bg-deep-navy text-electric-cyan font-display font-bold text-xl flex items-center justify-center rounded-lg">
                    {item.step}
                  </div>
                  <h3 className="font-display text-xl font-bold text-deep-navy">{item.title}</h3>
                  <p className="text-on-surface-variant text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-24 px-4 md:px-8 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-deep-navy mb-4">
                מוכנים לקחת את הארגון קדימה?
              </h2>
              <p className="text-lg text-on-surface-variant leading-relaxed mb-8">
                השאירו פרטים ונחזור אליכם בהקדם לתיאום שיחת היכרות ובחינת התאמה.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4 text-on-surface-variant">
                  <div className="w-12 h-12 bg-electric-cyan/10 rounded-full flex items-center justify-center text-electric-cyan">
                    <Mail className="w-5 h-5" />
                  </div>
                  <span className="font-medium text-lg">contact@drorpinder.com</span>
                </div>
                <div className="flex items-center gap-4 text-on-surface-variant">
                  <div className="w-12 h-12 bg-electric-cyan/10 rounded-full flex items-center justify-center text-electric-cyan">
                    <Phone className="w-5 h-5" />
                  </div>
                  <span className="font-medium text-lg">054-1234567</span>
                </div>
              </div>
            </div>
            
            <div className="bg-ice-white p-8 rounded-xl border border-deep-navy/10 shadow-lg">
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-deep-navy mb-1" htmlFor="name">שם מלא</label>
                  <input id="name" type="text" className="w-full px-4 py-3 rounded-lg border border-deep-navy/20 focus:border-electric-cyan focus:ring-1 focus:ring-electric-cyan outline-none transition-all" placeholder="ישראל ישראלי" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-deep-navy mb-1" htmlFor="email">אימייל</label>
                  <input id="email" type="email" className="w-full px-4 py-3 rounded-lg border border-deep-navy/20 focus:border-electric-cyan focus:ring-1 focus:ring-electric-cyan outline-none transition-all" placeholder="israel@company.com" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-deep-navy mb-1" htmlFor="message">הודעה</label>
                  <textarea id="message" rows={4} className="w-full px-4 py-3 rounded-lg border border-deep-navy/20 focus:border-electric-cyan focus:ring-1 focus:ring-electric-cyan outline-none transition-all resize-none" placeholder="ספר/י לי בקצרה על הצרכים שלכם..."></textarea>
                </div>
                <button type="submit" className="w-full bg-deep-navy text-white px-6 py-3 rounded-lg font-bold hover:bg-electric-cyan transition-colors mt-2 active:scale-95">
                  שלח הודעה
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-deep-navy text-white text-sm border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-10 flex flex-col md:flex-row-reverse justify-between items-center gap-6">
          <div className="font-display font-medium text-amber-gold text-xl">Dror Finder</div>
          <div className="flex gap-6">
            <a href="#" className="text-white/60 hover:text-electric-cyan transition-colors">מדיניות פרטיות</a>
            <a href="#" className="text-white/60 hover:text-electric-cyan transition-colors">תנאי שימוש</a>
            <a href="#" className="text-white/60 hover:text-electric-cyan transition-colors">לינקדאין</a>
          </div>
          <div className="text-white/60">
            © {new Date().getFullYear()} דרור פינדר - ייעוץ AI וניהול מוצר. כל הזכויות שמורות.
          </div>
        </div>
      </footer>
    </div>
  );
}
