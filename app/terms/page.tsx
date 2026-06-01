export default function TermsOfUse() {
  const lastUpdated = '1 ביוני 2025';

  return (
    <div className="min-h-screen bg-surface-bright font-body rtl">
      <div className="max-w-3xl mx-auto px-4 md:px-8 py-16 md:py-24">
        <a href="/" className="text-electric-cyan hover:underline text-sm mb-8 inline-block">← חזרה לדף הבית</a>

        <h1 className="font-display text-3xl md:text-4xl font-extrabold text-deep-navy mb-2">תנאי שימוש</h1>
        <p className="text-on-surface-variant text-sm mb-10">עדכון אחרון: {lastUpdated}</p>

        <div className="prose prose-lg max-w-none text-on-surface-variant space-y-8">

          <section>
            <h2 className="font-display text-xl font-bold text-deep-navy mb-3">1. קבלת התנאים</h2>
            <p>
              ברוכים הבאים לאתר דרור פינדר. השימוש באתר זה מהווה הסכמה מלאה לתנאי השימוש המפורטים להלן.
              אם אינך מסכים לתנאים אלו, נא להימנע משימוש באתר.
            </p>
            <p>
              אתר זה מופעל על ידי דרור פינדר, יועץ AI עצמאי, ומיועד לסיפוק מידע אודות שירותי ייעוץ והטמעת AI.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-deep-navy mb-3">2. השירות המוצע</h2>
            <p>
              האתר מספק מידע אודות שירותי ייעוץ, הכשרה והטמעת בינה מלאכותית גנרטיבית לארגונים ועסקים.
              המידע באתר הינו כללי בלבד ואינו מהווה ייעוץ מקצועי מחייב ללא הסכמה כתובה.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-deep-navy mb-3">3. קניין רוחני</h2>
            <p>
              כל התוכן באתר זה — לרבות טקסטים, תמונות, עיצוב, לוגואים וקוד — מוגן בזכויות יוצרים ובזכויות קניין רוחני אחרות
              השייכות לדרור פינדר או לבעליהן החוקיים.
            </p>
            <p className="mt-2">
              אין להעתיק, לשכפל, להפיץ, לשנות או לעשות כל שימוש מסחרי בתוכן ללא אישור מפורש ובכתב.
              מותר לצטט קטעים קצרים לצרכי הפניה, תוך ציון המקור.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-deep-navy mb-3">4. איסורי שימוש</h2>
            <p>המשתמש מתחייב שלא לעשות כל אחד מהבאים:</p>
            <ul className="list-disc list-inside space-y-2 mt-2">
              <li>שימוש באתר למטרות בלתי חוקיות.</li>
              <li>הפצת תוכן פוגעני, מטעה או מזיק.</li>
              <li>ניסיון לפגוע בפעילות האתר או בתשתיותיו.</li>
              <li>איסוף מידע מהאתר באמצעות כלים אוטומטיים ללא אישור מפורש.</li>
              <li>התחזות לגורם אחר.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-deep-navy mb-3">5. הגבלת אחריות</h2>
            <p>
              המידע באתר מוצג "כמות שהוא" (AS IS) ללא אחריות מכל סוג. אנו עושים כמיטב יכולתנו לספק מידע מדויק ועדכני,
              אך איננו אחראים לשגיאות, השמטות, או לכל תוצאה הנובעת מהסתמכות על המידע.
            </p>
            <p className="mt-2">
              בהתאם לדין הישראלי, האחריות שלנו מוגבלת לנזקים ישירים בלבד ולא תעלה על הסכום ששולם בפועל עבור השירות.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-deep-navy mb-3">6. קישורים לאתרים חיצוניים</h2>
            <p>
              האתר עשוי לכלול קישורים לאתרים חיצוניים. קישורים אלו מסופקים לנוחיותך בלבד.
              אין לנו שליטה על תוכן אתרים חיצוניים ואנו לא אחראים להם.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-deep-navy mb-3">7. דין וסמכות שיפוט</h2>
            <p>
              תנאי שימוש אלו כפופים לדין הישראלי בלבד.
              כל מחלוקת הנובעת מהשימוש באתר תובא לפתרון בפני בתי המשפט המוסמכים במחוז תל אביב, ישראל.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-deep-navy mb-3">8. שינויים בתנאים</h2>
            <p>
              אנו שומרים לעצמנו את הזכות לעדכן תנאים אלו בכל עת. המשך השימוש באתר לאחר פרסום שינויים
              מהווה הסכמה לתנאים המעודכנים. מומלץ לבדוק עמוד זה מעת לעת.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-deep-navy mb-3">9. יצירת קשר</h2>
            <p>לשאלות בנוגע לתנאי שימוש אלו:</p>
            <ul className="list-none space-y-1 mt-2">
              <li>דוא"ל: <a href="mailto:drormoon@gmail.com" className="text-electric-cyan hover:underline">drormoon@gmail.com</a></li>
              <li>טלפון: 052-3296556</li>
            </ul>
          </section>

        </div>
      </div>
    </div>
  );
}
