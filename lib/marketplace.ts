export interface Product {
  id: string;
  title: { en: string; ar: string };
  desc: { en: string; ar: string };
  category: "course" | "advisory" | "report" | "kids";
  price: number;
  emoji: string;
  duration?: string;
  level?: "Beginner" | "Intermediate" | "Advanced";
  rating: number;
}

export const products: Product[] = [
  {
    id: "p-zakat-101",
    title: {
      en: "Smart Zakat 101 — AAOIFI Standard 35",
      ar: "الزكاة الذكية ١٠١ — معيار AAOIFI 35",
    },
    desc: {
      en: "Master Zakat calculation across shared family pots, hawl tracking, and compliance.",
      ar: "إتقان حساب الزكاة على المحافظ العائلية المشتركة، تتبّع الحول، والامتثال.",
    },
    category: "course",
    price: 149,
    emoji: "🕌",
    duration: "3h 20m",
    level: "Beginner",
    rating: 4.9,
  },
  {
    id: "p-debt-saudi",
    title: {
      en: "Saudi Family Debt Survival Guide",
      ar: "دليل النجاة من الديون للعائلات السعودية",
    },
    desc: {
      en: "Practical playbook to reduce 40% DSTI to under 20% in 18 months.",
      ar: "دليل عملي لخفض نسبة خدمة الدين من ٤٠٪ إلى أقل من ٢٠٪ خلال ١٨ شهراً.",
    },
    category: "course",
    price: 199,
    emoji: "💳",
    duration: "5h 10m",
    level: "Intermediate",
    rating: 4.8,
  },
  {
    id: "p-junior-game",
    title: {
      en: "Tharwa Junior — Investment Game Workbook",
      ar: "ثروة جونيور — كتيّب لعبة الاستثمار",
    },
    desc: {
      en: "Workbook for kids 14+ paired with our virtual Tadawul simulator.",
      ar: "كتيّب للأطفال فوق ١٤ مع محاكي تداول الافتراضي.",
    },
    category: "kids",
    price: 79,
    emoji: "🎮",
    duration: "2h 00m",
    level: "Beginner",
    rating: 4.7,
  },
  {
    id: "p-advisor-1on1",
    title: {
      en: "1:1 Family Financial Advisor (60 min)",
      ar: "جلسة مستشار مالي للعائلة (٦٠ دقيقة)",
    },
    desc: {
      en: "One-on-one session with a SOCPA/CFA-certified advisor — in Arabic or English.",
      ar: "جلسة فردية مع مستشار معتمد SOCPA/CFA — بالعربية أو الإنجليزية.",
    },
    category: "advisory",
    price: 599,
    emoji: "🧑‍💼",
    duration: "60 min",
    rating: 5.0,
  },
  {
    id: "p-newlywed",
    title: {
      en: "Newlyweds Money Playbook",
      ar: "دليل المال للعرسان الجدد",
    },
    desc: {
      en: "Joint accounts, privacy, first goal pots, Hajj fund — first 3 years.",
      ar: "الحسابات المشتركة، الخصوصية، أهداف أولى، صندوق الحج — أول ٣ سنوات.",
    },
    category: "course",
    price: 129,
    emoji: "💍",
    duration: "2h 40m",
    level: "Beginner",
    rating: 4.9,
  },
  {
    id: "p-maid-payroll",
    title: {
      en: "Maid Payroll & Documentation Kit",
      ar: "حزمة رواتب وتوثيق العاملة المنزلية",
    },
    desc: {
      en: "Templates + walkthrough for monthly receipts and end-of-contract records.",
      ar: "قوالب وشرح للإيصالات الشهرية وسجل نهاية العقد.",
    },
    category: "report",
    price: 49,
    emoji: "🏠",
    rating: 4.6,
  },
  {
    id: "p-kids-saving",
    title: {
      en: "Saving Habits for Kids 8–12",
      ar: "عادات الادخار للأطفال ٨-١٢",
    },
    desc: {
      en: "Story-based learning with Avatar progression and 30-day micro-tasks.",
      ar: "تعلّم قصصي مع تطور الأفاتار و٣٠ مهمة صغيرة.",
    },
    category: "kids",
    price: 99,
    emoji: "🌱",
    duration: "3h 00m",
    level: "Beginner",
    rating: 4.8,
  },
  {
    id: "p-quarterly-report",
    title: {
      en: "Quarterly Family Financial Report",
      ar: "تقرير مالي عائلي ربع سنوي",
    },
    desc: {
      en: "Detailed PDF with category breakdowns, AI insights, and action items.",
      ar: "PDF مفصّل بتقسيم الفئات، رؤى ذكية، ومهام عمل.",
    },
    category: "report",
    price: 89,
    emoji: "📊",
    rating: 4.7,
  },
];
