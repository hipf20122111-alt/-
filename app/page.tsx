"use client";

import Link from "next/link";
import { useI18n } from "@/lib/i18n";
import {
  ArrowRight,
  CircleDollarSign,
  GraduationCap,
  Sparkles,
  Store,
  ShieldCheck,
  TrendingUp,
  Users,
  Wallet,
  PlayCircle,
  Building2,
  CreditCard,
  HeartHandshake,
} from "lucide-react";

export default function HomePage() {
  const { t, lang } = useI18n();

  const pillars = [
    {
      icon: Wallet,
      data: t.pillars.familyHub,
      href: "/wallet",
      color: "from-lavender-500 to-lavender-700",
    },
    {
      icon: GraduationCap,
      data: t.pillars.junior,
      href: "/junior",
      color: "from-lavender-400 to-lavender-600",
    },
    {
      icon: Sparkles,
      data: t.pillars.ai,
      href: "/services",
      color: "from-gold to-gold-400",
    },
    {
      icon: Store,
      data: t.pillars.marketplace,
      href: "/marketplace",
      color: "from-lavender-600 to-navy",
    },
  ];

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden mesh-bg carpet-pattern">
        <div className="max-w-7xl mx-auto px-4 md:px-8 pt-20 pb-24 md:pt-28 md:pb-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-up">
              <span className="chip">
                <Sparkles size={12} />
                {t.hero.tagline}
              </span>
              <h1 className="heading-1 mt-5">
                {t.hero.title}{" "}
                <span className="bg-gradient-to-r from-lavender-500 via-lavender-700 to-gold bg-clip-text text-transparent">
                  {t.hero.titleAccent}
                </span>
              </h1>
              <p className="mt-6 text-lg text-navy/70 leading-relaxed max-w-xl">
                {t.hero.subtitle}
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="/demo" className="btn-primary">
                  <PlayCircle size={18} />
                  {t.hero.ctaPrimary}
                </Link>
                <Link href="/wallet" className="btn-ghost">
                  {t.hero.ctaSecondary}
                  <ArrowRight size={16} className="ltr-only" />
                </Link>
              </div>

              <div className="mt-12 grid grid-cols-3 gap-4 max-w-md">
                <Stat label={t.hero.stat1} value={t.hero.stat1Val} />
                <Stat label={t.hero.stat2} value={t.hero.stat2Val} />
                <Stat label={t.hero.stat3} value={t.hero.stat3Val} />
              </div>
            </div>

            <HeroVisual />
          </div>
        </div>
      </section>

      {/* TRUST STRIP */}
      <section className="border-y border-lavender-100 bg-white/60 backdrop-blur">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-6">
          <p className="text-center text-xs uppercase tracking-widest text-navy/50 mb-3">
            {lang === "ar"
              ? "مبني على شركاء مرخّصين سعوديين"
              : "Built on licensed Saudi partners"}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-navy/60 font-semibold text-sm">
            <span>SAMA Open Banking</span>
            <span className="text-lavender-300">·</span>
            <span>Neoleap (Al Rajhi)</span>
            <span className="text-lavender-300">·</span>
            <span>Nafath / Absher</span>
            <span className="text-lavender-300">·</span>
            <span>AAOIFI Standard 35</span>
            <span className="text-lavender-300">·</span>
            <span>PDPL · SDAIA</span>
            <span className="text-lavender-300">·</span>
            <span>NCA ECC-1</span>
          </div>
        </div>
      </section>

      {/* PILLARS */}
      <section className="section">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="chip">{lang === "ar" ? "الفلسفة" : "Philosophy"}</span>
          <h2 className="heading-2 mt-4">{t.pillars.title}</h2>
          <p className="mt-3 subtle">{t.pillars.subtitle}</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {pillars.map((p, i) => {
            const Icon = p.icon;
            return (
              <Link
                key={i}
                href={p.href}
                className="card card-hover group relative overflow-hidden"
              >
                <div
                  className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${p.color} flex items-center justify-center shadow-soft mb-4`}
                >
                  <Icon size={22} className="text-white" />
                </div>
                <h3 className="font-bold text-lg text-navy">{p.data.title}</h3>
                <p className="mt-2 text-sm text-navy/70 leading-relaxed">
                  {p.data.desc}
                </p>
                <div className="mt-4 flex items-center gap-1 text-sm font-semibold text-lavender-600 group-hover:gap-2 transition-all">
                  {t.common.learnMore}
                  <ArrowRight size={14} className="ltr-only" />
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* PROBLEMS */}
      <section className="section">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="chip">{lang === "ar" ? "المشكلة" : "The problem"}</span>
          <h2 className="heading-2 mt-4">{t.problems.title}</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          {t.problems.list.map((p, i) => (
            <div key={i} className="card card-hover flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-gold-50 text-gold-500 font-bold flex items-center justify-center">
                {String(i + 1).padStart(2, "0")}
              </div>
              <div>
                <h4 className="font-semibold text-navy">{p.q}</h4>
                <p className="mt-1.5 text-sm text-navy/70 leading-relaxed">
                  {p.a}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* MARKET STATS */}
      <section className="section">
        <div className="rounded-4xl bg-lavender-gradient p-8 md:p-14 relative overflow-hidden">
          <div className="absolute inset-0 carpet-pattern opacity-30" />
          <div className="relative">
            <span className="text-gold-200 text-xs font-semibold uppercase tracking-widest">
              {lang === "ar" ? "السوق السعودي" : "The Saudi market"}
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-white mt-3 max-w-3xl">
              {lang === "ar"
                ? "السوق جاهز. اللاعبون موجودون. الفئة الأهم — العائلة — لا تزال شاغرة."
                : "The market is ready. The players exist. The most important category — family — is still empty."}
            </h2>
            <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-6">
              <BigStat n="261" l={lang === "ar" ? "شركة فينتك" : "Fintech firms"} />
              <BigStat n="79%" l={lang === "ar" ? "معاملات رقمية" : "Digital transactions"} />
              <BigStat n="71%" l={lang === "ar" ? "سكان دون 35" : "Under 35"} />
              <BigStat n="97%" l={lang === "ar" ? "انتشار الجوال" : "Smartphone reach"} />
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS — 3 steps */}
      <section className="section">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="chip">{lang === "ar" ? "كيف تعمل" : "How it works"}</span>
          <h2 className="heading-2 mt-4">
            {lang === "ar"
              ? "ثلاث خطوات. كل أفراد العائلة."
              : "Three steps. Your whole family."}
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          <Step
            n="01"
            icon={Building2}
            title={lang === "ar" ? "اربط بنوكك" : "Connect your banks"}
            body={
              lang === "ar"
                ? "Open Banking عبر نيوليب. بنقرة واحدة، كل حساباتك في مكان واحد."
                : "Open Banking via Neoleap. One tap, every account in one place."
            }
          />
          <Step
            n="02"
            icon={Users}
            title={lang === "ar" ? "أضف عائلتك" : "Add your family"}
            body={
              lang === "ar"
                ? "أدوار أبوية، حسابات أطفال، أهداف مشتركة، خصوصية لكل بالغ."
                : "Parent roles, child accounts, shared goals, privacy for every adult."
            }
          />
          <Step
            n="03"
            icon={TrendingUp}
            title={lang === "ar" ? "خطّط، ادّخر، علّم" : "Plan, save, teach"}
            body={
              lang === "ar"
                ? "المستشار الذكي، الزكاة، Junior، لعبة تداول الافتراضية."
                : "AI Advisor, Smart Zakat, Junior, virtual Tadawul Investment Game."
            }
          />
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="rounded-4xl bg-gradient-to-br from-cream via-lavender-50 to-lavender-100 p-8 md:p-14 text-center relative overflow-hidden border border-lavender-200">
          <div className="absolute inset-0 carpet-pattern" />
          <div className="relative">
            <div className="inline-flex items-center gap-2 chip-gold mb-4">
              <HeartHandshake size={12} />
              {lang === "ar" ? "رؤية 2030" : "Vision 2030"}
            </div>
            <h2 className="heading-2">{t.cta.title}</h2>
            <p className="mt-4 text-navy/70 max-w-xl mx-auto">{t.cta.subtitle}</p>
            <div className="mt-7 flex justify-center gap-3 flex-wrap">
              <Link href="/early-access" className="btn-primary">
                {t.cta.button}
                <ArrowRight size={16} className="ltr-only" />
              </Link>
              <Link href="/pricing" className="btn-outline">
                {t.nav.pricing}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="border-l-2 border-lavender-300 pl-3">
      <div className="text-2xl font-bold text-navy">{value}</div>
      <div className="text-xs text-navy/60">{label}</div>
    </div>
  );
}

function BigStat({ n, l }: { n: string; l: string }) {
  return (
    <div>
      <div className="text-4xl md:text-5xl font-bold text-white">{n}</div>
      <div className="text-sm text-lavender-100 mt-1">{l}</div>
    </div>
  );
}

function Step({
  n,
  icon: Icon,
  title,
  body,
}: {
  n: string;
  icon: any;
  title: string;
  body: string;
}) {
  return (
    <div className="card card-hover">
      <div className="flex items-center gap-3 mb-4">
        <span className="text-3xl font-bold text-lavender-200">{n}</span>
        <div className="w-10 h-10 rounded-xl bg-lavender-100 flex items-center justify-center">
          <Icon size={18} className="text-lavender-600" />
        </div>
      </div>
      <h3 className="font-bold text-navy">{title}</h3>
      <p className="mt-2 text-sm text-navy/70 leading-relaxed">{body}</p>
    </div>
  );
}

function HeroVisual() {
  const { lang } = useI18n();
  return (
    <div className="relative">
      <div className="absolute -inset-8 bg-lavender-gradient rounded-full opacity-20 blur-3xl" />
      <div className="relative glass rounded-4xl p-6 shadow-glow">
        {/* Mock dashboard card */}
        <div className="flex items-center justify-between mb-4">
          <div>
            <div className="text-xs text-navy/60">
              {lang === "ar" ? "صافي ثروة العائلة" : "Family Net Worth"}
            </div>
            <div className="text-3xl font-bold text-navy mt-0.5">
              SAR 487,250
            </div>
            <div className="text-xs text-emerald-600 font-semibold mt-1">
              ↑ 8.4% {lang === "ar" ? "هذا الشهر" : "this month"}
            </div>
          </div>
          <div className="w-12 h-12 rounded-2xl bg-lavender-gradient flex items-center justify-center shadow-glow">
            <Wallet size={20} className="text-white" />
          </div>
        </div>

        {/* Three buckets */}
        <div className="grid grid-cols-3 gap-2 my-5">
          <BucketCard
            label={lang === "ar" ? "أصول" : "Assets"}
            value="312K"
            color="bg-emerald-100 text-emerald-700"
          />
          <BucketCard
            label={lang === "ar" ? "التزامات" : "Liabilities"}
            value="98K"
            color="bg-rose-100 text-rose-700"
          />
          <BucketCard
            label={lang === "ar" ? "مصروفات" : "Expenses"}
            value="22K"
            color="bg-amber-100 text-amber-700"
          />
        </div>

        {/* Family members */}
        <div className="space-y-2">
          <FamilyRow
            name={lang === "ar" ? "أحمد · الأب" : "Ahmed · Dad"}
            role="HoF"
            balance="SAR 28,400"
            avatar="👨"
          />
          <FamilyRow
            name={lang === "ar" ? "نورة · الأم" : "Noura · Mom"}
            role="Adult"
            balance="SAR 19,180"
            avatar="👩"
            privacy
          />
          <FamilyRow
            name={lang === "ar" ? "ليان · ١٢" : "Layan · 12"}
            role="Junior"
            balance="SAR 840"
            avatar="🧒"
          />
          <FamilyRow
            name={lang === "ar" ? "سارة · ٨" : "Sara · 8"}
            role="Junior"
            balance="SAR 215"
            avatar="👧"
          />
        </div>

        {/* Goal */}
        <div className="mt-5 p-3 rounded-2xl bg-gold-50 border border-gold-100">
          <div className="flex items-center justify-between text-xs font-semibold text-navy mb-1.5">
            <span>🕋 {lang === "ar" ? "هدف الحج" : "Hajj Goal"}</span>
            <span>74%</span>
          </div>
          <div className="h-2 bg-white rounded-full overflow-hidden">
            <div className="h-full w-[74%] bg-gold-shine rounded-full" />
          </div>
        </div>
      </div>

      {/* Floating chip */}
      <div className="absolute -bottom-4 -right-4 glass rounded-2xl p-3 shadow-soft animate-float">
        <div className="flex items-center gap-2 text-xs">
          <ShieldCheck size={14} className="text-emerald-500" />
          <span className="font-semibold text-navy">PDPL · SAMA</span>
        </div>
      </div>
      <div className="absolute -top-3 -left-3 glass rounded-2xl p-3 shadow-soft animate-float [animation-delay:1.5s]">
        <div className="flex items-center gap-2 text-xs">
          <CreditCard size={14} className="text-lavender-500" />
          <span className="font-semibold text-navy">
            {lang === "ar" ? "كل البنوك" : "All Saudi banks"}
          </span>
        </div>
      </div>
    </div>
  );
}

function BucketCard({
  label,
  value,
  color,
}: {
  label: string;
  value: string;
  color: string;
}) {
  return (
    <div className={`rounded-xl p-2.5 ${color}`}>
      <div className="text-[10px] font-semibold uppercase opacity-80">
        {label}
      </div>
      <div className="text-base font-bold mt-0.5">{value}</div>
    </div>
  );
}

function FamilyRow({
  name,
  role,
  balance,
  avatar,
  privacy = false,
}: {
  name: string;
  role: string;
  balance: string;
  avatar: string;
  privacy?: boolean;
}) {
  return (
    <div className="flex items-center justify-between p-2 rounded-xl hover:bg-lavender-50 transition-colors">
      <div className="flex items-center gap-2">
        <span className="w-8 h-8 rounded-full bg-lavender-100 flex items-center justify-center text-lg">
          {avatar}
        </span>
        <div>
          <div className="text-sm font-semibold text-navy">{name}</div>
          <div className="text-[10px] text-navy/50 uppercase">{role}</div>
        </div>
      </div>
      <div className="text-sm font-bold text-navy">
        {privacy ? "•••••" : balance}
      </div>
    </div>
  );
}
