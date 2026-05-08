"use client";

import { useState } from "react";
import { useI18n } from "@/lib/i18n";
import {
  GraduationCap,
  Trophy,
  TrendingUp,
  Lock,
  Sparkles,
} from "lucide-react";

const AGE_BANDS = [
  { id: "8-10", emoji: "🌱", en: "Ages 8–10", ar: "٨–١٠ سنة" },
  { id: "11-13", emoji: "🌳", en: "Ages 11–13", ar: "١١–١٣ سنة" },
  { id: "14-17", emoji: "🌟", en: "Ages 14–17", ar: "١٤–١٧ سنة" },
];

export default function JuniorPage() {
  const { lang } = useI18n();
  const [age, setAge] = useState("8-10");

  const lessons: Record<string, { t: string; emoji: string; desc: string }[]> = {
    "8-10": [
      {
        t: lang === "ar" ? "احتياج أم رغبة" : "Need vs. want",
        emoji: "🤔",
        desc: lang === "ar" ? "افهم الفرق قبل أي قرار شراء." : "Understand the difference before buying.",
      },
      {
        t: lang === "ar" ? "ادّخار ضمن صندوق" : "Saving in a jar",
        emoji: "🪙",
        desc: lang === "ar" ? "ضع ٢٠٪ من العيدية في صندوق." : "Put 20% of Eidiya in a jar.",
      },
      {
        t: lang === "ar" ? "العيدية الذكية" : "Smart Eidiya",
        emoji: "🧧",
        desc: lang === "ar" ? "وزّع: أنفق، ادّخر، تصدّق." : "Divide: spend, save, give.",
      },
    ],
    "11-13": [
      {
        t: lang === "ar" ? "كيف يعمل البنك" : "How banks work",
        emoji: "🏦",
        desc: lang === "ar" ? "الإيداع، السحب، الفائدة." : "Deposit, withdraw, interest.",
      },
      {
        t: lang === "ar" ? "حساب الزكاة" : "Calculating Zakat",
        emoji: "🕌",
        desc: lang === "ar" ? "النصاب، الحول، النسبة." : "Nisab, hawl, rate.",
      },
      {
        t: lang === "ar" ? "ميزانية المصروف" : "Allowance budgeting",
        emoji: "📊",
        desc: lang === "ar" ? "وزّع مصروفك الأسبوعي." : "Divide your weekly allowance.",
      },
    ],
    "14-17": [
      {
        t: lang === "ar" ? "أساسيات الاستثمار" : "Investing basics",
        emoji: "📈",
        desc: lang === "ar" ? "الأسهم، السندات، الصناديق." : "Stocks, bonds, funds.",
      },
      {
        t: lang === "ar" ? "تداول الافتراضي" : "Tadawul Game",
        emoji: "🎮",
        desc: lang === "ar" ? "تداول بأسعار حقيقية، رصيد افتراضي." : "Trade live prices with virtual balance.",
      },
      {
        t: lang === "ar" ? "خطة جامعة" : "University planning",
        emoji: "🎓",
        desc: lang === "ar" ? "احسب التكلفة. ادّخر مبكراً." : "Estimate cost. Save early.",
      },
    ],
  };

  return (
    <div className="section">
      <div className="text-center max-w-2xl mx-auto mb-12">
        <span className="chip">
          <GraduationCap size={12} />
          {lang === "ar" ? "ثروة جونيور" : "Tharwa Junior"}
        </span>
        <h1 className="heading-1 mt-4">
          {lang === "ar"
            ? "أبناؤك يتعلّمون المال قبل أن يحتاجوه"
            : "Your kids learn money before they need it"}
        </h1>
        <p className="mt-4 subtle">
          {lang === "ar"
            ? "تعلّم حسب العمر، أفاتار يكبر مع الادخار، لعبة تداول افتراضية، وتحكم أبوي كامل."
            : "Age-banded learning, an Avatar that grows with savings, a virtual Tadawul game, and full parental control."}
        </p>
      </div>

      {/* Age tabs */}
      <div className="flex justify-center gap-2 mb-8">
        {AGE_BANDS.map((b) => (
          <button
            key={b.id}
            onClick={() => setAge(b.id)}
            className={`px-5 py-2.5 rounded-full font-semibold text-sm transition-all ${
              age === b.id
                ? "bg-lavender-500 text-white shadow-soft"
                : "bg-white text-navy/70 border border-lavender-200 hover:bg-lavender-50"
            }`}
          >
            <span className="me-1">{b.emoji}</span>
            {lang === "ar" ? b.ar : b.en}
          </button>
        ))}
      </div>

      <div className="grid lg:grid-cols-3 gap-5 mb-12">
        {lessons[age].map((l, i) => (
          <div key={i} className="card card-hover">
            <div className="text-5xl mb-3">{l.emoji}</div>
            <h3 className="font-bold text-navy">{l.t}</h3>
            <p className="mt-2 text-sm text-navy/70 leading-relaxed">{l.desc}</p>
            <div className="mt-4 flex items-center justify-between text-xs">
              <span className="chip">📚 {lang === "ar" ? "درس" : "Lesson"}</span>
              <span className="chip-gold">+15 pts</span>
            </div>
          </div>
        ))}
      </div>

      {/* Avatar showcase */}
      <div className="rounded-4xl bg-gradient-to-br from-lavender-100 to-lavender-200 p-8 md:p-12 text-center mb-12">
        <h2 className="heading-2">
          {lang === "ar"
            ? "أفاتار يكبر مع عاداتك"
            : "An Avatar that grows with your habits"}
        </h2>
        <p className="subtle mt-3 max-w-xl mx-auto">
          {lang === "ar"
            ? "شجرة، قصر، أو سفينة — يختار طفلك. وكل عادة ادخار جديدة تدفعه للمرحلة التالية."
            : "Tree, Palace, or Ship — your child picks. Every new saving habit moves it to the next stage."}
        </p>
        <div className="mt-8 grid grid-cols-3 gap-4 max-w-xl mx-auto">
          <AvatarStage emoji="🌱" stage="1" label={lang === "ar" ? "البذرة" : "Seed"} />
          <AvatarStage emoji="🌳" stage="4" label={lang === "ar" ? "الشجرة" : "Tree"} active />
          <AvatarStage emoji="🌴" stage="7" label={lang === "ar" ? "النخلة" : "Palm"} locked />
        </div>
      </div>

      {/* Parental controls */}
      <div className="grid md:grid-cols-3 gap-4">
        <Card icon={Lock} t={lang === "ar" ? "تحكم أبوي" : "Parental control"} d={lang === "ar" ? "كل عملية مهمة تمر بموافقتك." : "Every important action passes through you."} />
        <Card icon={Trophy} t={lang === "ar" ? "أوسمة وجوائز" : "Badges & rewards"} d={lang === "ar" ? "نقاط حقيقية تتحول لمصروف أو هدف." : "Real points convert to allowance or goal contributions."} />
        <Card icon={TrendingUp} t={lang === "ar" ? "تداول آمن" : "Safe investing"} d={lang === "ar" ? "أسعار حقيقية، رصيد افتراضي، إشراف كامل." : "Live prices, virtual balance, full supervision."} />
      </div>
    </div>
  );
}

function AvatarStage({
  emoji,
  stage,
  label,
  active = false,
  locked = false,
}: {
  emoji: string;
  stage: string;
  label: string;
  active?: boolean;
  locked?: boolean;
}) {
  return (
    <div
      className={`p-5 rounded-3xl ${
        active
          ? "bg-white shadow-glow scale-105"
          : locked
            ? "bg-white/40 opacity-50"
            : "bg-white/70"
      } transition-all`}
    >
      <div className="text-5xl mb-2">{emoji}</div>
      <div className="text-xs text-navy/50 uppercase">Stage {stage}</div>
      <div className="font-bold text-navy mt-1">{label}</div>
      {active && (
        <div className="chip mt-2">
          <Sparkles size={10} /> Now
        </div>
      )}
    </div>
  );
}

function Card({ icon: Icon, t, d }: { icon: any; t: string; d: string }) {
  return (
    <div className="card card-hover">
      <div className="w-10 h-10 rounded-xl bg-lavender-100 flex items-center justify-center mb-3">
        <Icon size={18} className="text-lavender-600" />
      </div>
      <h4 className="font-bold text-navy">{t}</h4>
      <p className="mt-1.5 text-sm text-navy/70 leading-relaxed">{d}</p>
    </div>
  );
}
