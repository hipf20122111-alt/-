"use client";

import Link from "next/link";
import { useI18n } from "@/lib/i18n";
import {
  Wallet,
  GraduationCap,
  Sparkles,
  Store,
  Building2,
  Receipt,
  Bell,
  Target,
  Calculator,
  TrendingUp,
  Shield,
  ArrowRight,
} from "lucide-react";

export default function ServicesPage() {
  const { t, lang } = useI18n();

  const features = [
    {
      icon: Building2,
      t: lang === "ar" ? "ربط البنوك" : "Multi-bank aggregation",
      d: lang === "ar"
        ? "Open Banking عبر نيوليب — كل بنوكك السعودية في لوحة واحدة."
        : "Open Banking via Neoleap — every Saudi bank in one dashboard.",
    },
    {
      icon: Receipt,
      t: lang === "ar" ? "الفواتير والاشتراكات" : "Bills & subscriptions",
      d: lang === "ar"
        ? "سجل فواتير، تنبيهات، كشف الاشتراكات المهدورة."
        : "Bill registry, alerts, wasted-subscription detection.",
    },
    {
      icon: Sparkles,
      t: lang === "ar" ? "المستشار الذكي" : "AI Advisor",
      d: lang === "ar"
        ? "توزيع راتب مخصّص، نصائح، تحذيرات استباقية."
        : "Personalized salary distribution, nudges, proactive warnings.",
    },
    {
      icon: Target,
      t: lang === "ar" ? "محافظ الأهداف" : "Goal-based pots",
      d: lang === "ar"
        ? "حج، زواج، جامعة، طوارئ — مع مشاركة عائلية انتقائية."
        : "Hajj, marriage, university, emergencies — with selective family sharing.",
    },
    {
      icon: Calculator,
      t: lang === "ar" ? "زكاة ذكية" : "Smart Zakat",
      d: lang === "ar"
        ? "محرّك متوافق مع AAOIFI 35 يحسب زكاة المحافظ المشتركة."
        : "AAOIFI Standard 35 engine that calculates Zakat across shared pots.",
    },
    {
      icon: GraduationCap,
      t: lang === "ar" ? "ثروة جونيور" : "Tharwa Junior",
      d: lang === "ar"
        ? "تعلّم حسب العمر، أفاتار، مهام، لعبة استثمار."
        : "Age-banded learning, Avatar, tasks, Investment Game.",
    },
    {
      icon: TrendingUp,
      t: lang === "ar" ? "تقارير دورية" : "Performance reports",
      d: lang === "ar"
        ? "تقارير عائلية شهرية وربع سنوية، تلقائية."
        : "Monthly and quarterly family reports, automatic.",
    },
    {
      icon: Shield,
      t: lang === "ar" ? "خصوصية فردية" : "Granular privacy",
      d: lang === "ar"
        ? "كل بالغ يقرّر ما يُشارَك. متوافق مع PDPL."
        : "Every adult controls what is shared. PDPL-aligned.",
    },
  ];

  return (
    <div className="section">
      <div className="text-center max-w-2xl mx-auto mb-12">
        <span className="chip">{t.nav.services}</span>
        <h1 className="heading-1 mt-4">
          {lang === "ar"
            ? "كل ما تحتاجه عائلتك ماليّاً، في تطبيق واحد"
            : "Everything your family needs financially, in one app"}
        </h1>
        <p className="mt-4 subtle">
          {lang === "ar"
            ? "الأركان الأربعة، عشرة أهداف عمل، عشرات الميزات."
            : "Four pillars, ten business objectives, dozens of features."}
        </p>
      </div>

      {/* Pillars */}
      <div className="grid md:grid-cols-2 gap-6 mb-16">
        {[
          { icon: Wallet, data: t.pillars.familyHub, href: "/wallet" },
          { icon: GraduationCap, data: t.pillars.junior, href: "/junior" },
          { icon: Sparkles, data: t.pillars.ai, href: "/demo" },
          { icon: Store, data: t.pillars.marketplace, href: "/marketplace" },
        ].map((p, i) => {
          const Icon = p.icon;
          return (
            <Link key={i} href={p.href} className="card card-hover group">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-2xl bg-lavender-gradient flex items-center justify-center shadow-glow flex-shrink-0">
                  <Icon size={24} className="text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="heading-3">{p.data.title}</h3>
                  <p className="mt-2 text-navy/70 leading-relaxed">
                    {p.data.desc}
                  </p>
                  <div className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-lavender-600 group-hover:gap-2 transition-all">
                    {t.common.learnMore} <ArrowRight size={14} className="ltr-only" />
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>

      {/* Detailed features */}
      <div className="text-center mb-8">
        <h2 className="heading-2">
          {lang === "ar" ? "كل ميزة. كل تفصيل." : "Every feature. Every detail."}
        </h2>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {features.map((f, i) => {
          const Icon = f.icon;
          return (
            <div key={i} className="card card-hover">
              <div className="w-10 h-10 rounded-xl bg-lavender-100 flex items-center justify-center mb-3">
                <Icon size={18} className="text-lavender-600" />
              </div>
              <h4 className="font-bold text-navy">{f.t}</h4>
              <p className="mt-1.5 text-sm text-navy/70 leading-relaxed">
                {f.d}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
