"use client";

import { useState, useMemo } from "react";
import { useI18n } from "@/lib/i18n";
import {
  Wallet,
  Users,
  Target,
  Receipt,
  Calculator,
  GraduationCap,
  TrendingUp,
  HomeIcon,
  ArrowLeftRight,
  Sparkles,
  Bell,
  Plus,
  Eye,
  EyeOff,
  ShieldCheck,
  Building2,
  Zap,
  Wifi,
  Smartphone as SmartphoneIcon,
  PiggyBank,
  ChevronRight,
  ChevronLeft,
} from "lucide-react";

type Screen =
  | "overview"
  | "buckets"
  | "members"
  | "allocate"
  | "goals"
  | "bills"
  | "maid"
  | "zakat"
  | "junior"
  | "tadawul";

const SCREENS: { id: Screen; iconName: string; en: string; ar: string }[] = [
  { id: "overview", iconName: "HomeIcon", en: "Overview", ar: "النظرة العامة" },
  { id: "buckets", iconName: "Wallet", en: "Three Buckets", ar: "الثلاث محافظ" },
  { id: "members", iconName: "Users", en: "Sub-Wallets", ar: "محافظ الأفراد" },
  { id: "allocate", iconName: "ArrowLeftRight", en: "Allocate", ar: "التوزيع" },
  { id: "goals", iconName: "Target", en: "Goals", ar: "الأهداف" },
  { id: "bills", iconName: "Receipt", en: "Bills", ar: "الفواتير" },
  { id: "maid", iconName: "Building2", en: "Maid Payroll", ar: "العاملة المنزلية" },
  { id: "zakat", iconName: "Calculator", en: "Smart Zakat", ar: "الزكاة الذكية" },
  { id: "junior", iconName: "GraduationCap", en: "Junior Academy", ar: "أكاديمية جونيور" },
  { id: "tadawul", iconName: "TrendingUp", en: "Tadawul Game", ar: "لعبة تداول" },
];

const ICON_MAP: Record<string, any> = {
  HomeIcon,
  Wallet,
  Users,
  ArrowLeftRight,
  Target,
  Receipt,
  Building2,
  Calculator,
  GraduationCap,
  TrendingUp,
};

export default function WalletDemo() {
  const { lang } = useI18n();
  const [active, setActive] = useState<Screen>("overview");
  const [view, setView] = useState<"parent" | "child">("parent");
  const [hidden, setHidden] = useState(false);

  const idx = SCREENS.findIndex((s) => s.id === active);
  const next = () => setActive(SCREENS[(idx + 1) % SCREENS.length].id);
  const prev = () =>
    setActive(SCREENS[(idx - 1 + SCREENS.length) % SCREENS.length].id);

  return (
    <div className="grid lg:grid-cols-[280px_1fr] gap-6">
      {/* Sidebar nav */}
      <aside className="card p-3 lg:sticky lg:top-20 lg:self-start space-y-3">
        {/* View toggle */}
        <div className="bg-lavender-50 rounded-2xl p-1 flex">
          <button
            onClick={() => setView("parent")}
            className={`flex-1 px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${
              view === "parent"
                ? "bg-white text-navy shadow-sm"
                : "text-navy/60"
            }`}
          >
            👤 {lang === "ar" ? "الوالد" : "Parent"}
          </button>
          <button
            onClick={() => setView("child")}
            className={`flex-1 px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${
              view === "child"
                ? "bg-white text-navy shadow-sm"
                : "text-navy/60"
            }`}
          >
            🧒 {lang === "ar" ? "الطفل" : "Child"}
          </button>
        </div>

        {/* Screen list */}
        <div className="space-y-1">
          {SCREENS.map((s, i) => {
            const Icon = ICON_MAP[s.iconName];
            return (
              <button
                key={s.id}
                onClick={() => setActive(s.id)}
                className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                  active === s.id
                    ? "bg-lavender-500 text-white shadow-soft"
                    : "text-navy/70 hover:bg-lavender-50"
                }`}
              >
                <span className="w-6 text-xs opacity-60">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <Icon size={16} />
                <span className="flex-1 text-start">
                  {lang === "ar" ? s.ar : s.en}
                </span>
              </button>
            );
          })}
        </div>
      </aside>

      {/* Main canvas */}
      <div className="space-y-4">
        {/* Top bar */}
        <div className="card flex items-center justify-between p-4">
          <div className="flex items-center gap-3">
            <button
              onClick={prev}
              className="w-9 h-9 rounded-full bg-lavender-50 hover:bg-lavender-100 flex items-center justify-center"
              aria-label="Previous"
            >
              <ChevronLeft size={16} className="ltr-only" />
              <ChevronRight size={16} className="rtl-only" />
            </button>
            <div className="text-sm font-semibold text-navy">
              {lang === "ar"
                ? SCREENS[idx].ar
                : SCREENS[idx].en}
              <span className="text-navy/40 font-normal">
                {" "}
                · {idx + 1}/{SCREENS.length}
              </span>
            </div>
            <button
              onClick={next}
              className="w-9 h-9 rounded-full bg-lavender-50 hover:bg-lavender-100 flex items-center justify-center"
              aria-label="Next"
            >
              <ChevronRight size={16} className="ltr-only" />
              <ChevronLeft size={16} className="rtl-only" />
            </button>
          </div>
          <button
            onClick={() => setHidden(!hidden)}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-lavender-50 text-xs font-semibold text-lavender-700"
          >
            {hidden ? <EyeOff size={12} /> : <Eye size={12} />}
            {hidden
              ? lang === "ar"
                ? "إظهار الأرقام"
                : "Show numbers"
              : lang === "ar"
                ? "إخفاء"
                : "Privacy"}
          </button>
        </div>

        {/* Screen content */}
        <div className="animate-fade-in">
          {active === "overview" && <Overview hidden={hidden} view={view} />}
          {active === "buckets" && <Buckets hidden={hidden} />}
          {active === "members" && <Members hidden={hidden} />}
          {active === "allocate" && <Allocate />}
          {active === "goals" && <Goals />}
          {active === "bills" && <Bills />}
          {active === "maid" && <MaidPayroll />}
          {active === "zakat" && <Zakat />}
          {active === "junior" && <JuniorAcademy />}
          {active === "tadawul" && <TadawulGame />}
        </div>
      </div>
    </div>
  );
}

/* ──────────────────────────  SCREENS  ────────────────────────── */

function Overview({ hidden, view }: { hidden: boolean; view: string }) {
  const { lang } = useI18n();
  const fmt = (n: number) =>
    hidden ? "•••••" : `SAR ${n.toLocaleString()}`;

  return (
    <div className="space-y-4">
      <div className="card bg-lavender-gradient text-white border-0 relative overflow-hidden">
        <div className="absolute inset-0 carpet-pattern opacity-30" />
        <div className="relative">
          <div className="text-xs text-lavender-100 uppercase tracking-widest">
            {lang === "ar" ? "صافي ثروة العائلة" : "Total Family Net Worth"}
          </div>
          <div className="text-5xl font-bold mt-2">
            {hidden ? "•••••••" : "SAR 487,250"}
          </div>
          <div className="text-sm text-gold-200 mt-1 font-semibold">
            ↑ 8.4% {lang === "ar" ? "هذا الشهر" : "this month"}
          </div>

          <div className="mt-6 grid grid-cols-3 gap-3">
            <Mini
              label={lang === "ar" ? "أصول" : "Assets"}
              value={fmt(312500)}
            />
            <Mini
              label={lang === "ar" ? "التزامات" : "Liabilities"}
              value={fmt(98200)}
              negative
            />
            <Mini
              label={lang === "ar" ? "مصروفات" : "Expenses"}
              value={fmt(22150)}
            />
          </div>
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-3">
        <div className="card">
          <div className="flex items-center justify-between mb-3">
            <h4 className="font-semibold text-navy">
              {lang === "ar" ? "النشاط الأخير" : "Recent activity"}
            </h4>
            <span className="text-xs text-lavender-600 font-semibold">
              {lang === "ar" ? "الكل" : "View all"}
            </span>
          </div>
          <Activity emoji="⚡" t={lang === "ar" ? "كهرباء سعودية" : "SEC Electricity"} v="-432.50" date="Today" />
          <Activity emoji="🛒" t={lang === "ar" ? "بنده" : "Panda"} v="-218.40" date="Yesterday" />
          <Activity emoji="💰" t={lang === "ar" ? "راتب أحمد" : "Ahmed Salary"} v="+18,000" date="3 May" pos />
          <Activity emoji="🎒" t={lang === "ar" ? "ليان · مصروف" : "Layan · Allowance"} v="-200" date="1 May" />
        </div>

        <div className="card">
          <h4 className="font-semibold text-navy mb-3">
            {lang === "ar" ? "نصائح المستشار الذكي" : "AI Advisor nudges"}
          </h4>
          <Nudge
            icon={Sparkles}
            t={
              lang === "ar"
                ? "اشتراك Apple TV غير مستخدم منذ ٣ شهور."
                : "Apple TV subscription unused for 3 months."
            }
            cta={lang === "ar" ? "ألغِ" : "Cancel"}
          />
          <Nudge
            icon={Zap}
            t={
              lang === "ar"
                ? "فاتورة كهرباء بعد ٤ أيام: 432 ريال."
                : "Electricity bill due in 4 days: SAR 432."
            }
            cta={lang === "ar" ? "ادفع" : "Pay"}
          />
          <Nudge
            icon={PiggyBank}
            t={
              lang === "ar"
                ? "هدف الحج: تبقّى 12 شهر للوصول."
                : "Hajj goal: 12 months to target."
            }
            cta={lang === "ar" ? "ارفع" : "Boost"}
          />
        </div>
      </div>
    </div>
  );
}

function Mini({
  label,
  value,
  negative = false,
}: {
  label: string;
  value: string;
  negative?: boolean;
}) {
  return (
    <div className="bg-white/15 rounded-2xl p-3 backdrop-blur">
      <div className="text-[10px] text-lavender-100 uppercase">{label}</div>
      <div className={`text-base font-bold mt-1 ${negative ? "text-rose-200" : "text-white"}`}>
        {value}
      </div>
    </div>
  );
}

function Activity({
  emoji,
  t,
  v,
  date,
  pos = false,
}: {
  emoji: string;
  t: string;
  v: string;
  date: string;
  pos?: boolean;
}) {
  return (
    <div className="flex items-center justify-between py-2 border-b border-lavender-100 last:border-0">
      <div className="flex items-center gap-2.5">
        <div className="w-9 h-9 rounded-xl bg-lavender-50 flex items-center justify-center text-base">
          {emoji}
        </div>
        <div>
          <div className="text-sm font-semibold text-navy">{t}</div>
          <div className="text-xs text-navy/50">{date}</div>
        </div>
      </div>
      <div
        className={`text-sm font-bold ${pos ? "text-emerald-600" : "text-navy"}`}
      >
        {pos ? "+" : ""}
        SAR {v}
      </div>
    </div>
  );
}

function Nudge({ icon: Icon, t, cta }: { icon: any; t: string; cta: string }) {
  return (
    <div className="flex items-start gap-2 p-2.5 rounded-xl bg-lavender-50/60 mb-2 last:mb-0">
      <Icon size={14} className="text-lavender-600 mt-0.5 flex-shrink-0" />
      <div className="flex-1 text-xs text-navy/80 leading-relaxed">{t}</div>
      <button className="text-xs font-semibold text-lavender-600 hover:underline flex-shrink-0">
        {cta}
      </button>
    </div>
  );
}

/* ────────────  Three Buckets  ──────────── */
function Buckets({ hidden }: { hidden: boolean }) {
  const { lang } = useI18n();
  const buckets = [
    {
      label: lang === "ar" ? "الأصول" : "Assets",
      total: 312500,
      color: "from-emerald-500 to-emerald-700",
      bg: "bg-emerald-50",
      text: "text-emerald-700",
      items: [
        { t: lang === "ar" ? "حساب توفير" : "Savings", v: 124000, b: "Al Rajhi" },
        { t: lang === "ar" ? "صندوق الحج" : "Hajj fund", v: 47200, b: "Goal pot" },
        { t: lang === "ar" ? "محفظة استثمار" : "Investment", v: 141300, b: "Tadawul" },
      ],
    },
    {
      label: lang === "ar" ? "الالتزامات" : "Liabilities",
      total: 98200,
      color: "from-rose-500 to-rose-700",
      bg: "bg-rose-50",
      text: "text-rose-700",
      items: [
        { t: lang === "ar" ? "قسط السيارة" : "Car loan", v: 62000, b: "SNB" },
        { t: lang === "ar" ? "بطاقة ائتمان" : "Credit card", v: 8400, b: "Al Rajhi" },
        { t: lang === "ar" ? "قرض شخصي" : "Personal loan", v: 27800, b: "Riyad" },
      ],
    },
    {
      label: lang === "ar" ? "المصروفات" : "Expenses",
      total: 22150,
      color: "from-amber-500 to-amber-700",
      bg: "bg-amber-50",
      text: "text-amber-700",
      items: [
        { t: lang === "ar" ? "إيجار" : "Rent", v: 8500, b: "Monthly" },
        { t: lang === "ar" ? "بقالة" : "Groceries", v: 3200, b: "Avg" },
        { t: lang === "ar" ? "اشتراكات" : "Subscriptions", v: 480, b: "Streaming" },
      ],
    },
  ];

  const fmt = (n: number) => (hidden ? "•••" : n.toLocaleString());

  return (
    <div className="grid md:grid-cols-3 gap-4">
      {buckets.map((b, i) => (
        <div key={i} className={`card`}>
          <div
            className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${b.color} flex items-center justify-center shadow-soft mb-3`}
          >
            <Wallet size={20} className="text-white" />
          </div>
          <div className="text-xs uppercase tracking-wider text-navy/60">
            {b.label}
          </div>
          <div className={`text-2xl font-bold mt-1 ${b.text}`}>
            SAR {fmt(b.total)}
          </div>
          <div className="mt-4 space-y-2">
            {b.items.map((it, j) => (
              <div
                key={j}
                className={`p-3 rounded-xl ${b.bg} flex items-center justify-between`}
              >
                <div>
                  <div className="text-sm font-semibold text-navy">{it.t}</div>
                  <div className="text-xs text-navy/50">{it.b}</div>
                </div>
                <div className={`text-sm font-bold ${b.text}`}>
                  {fmt(it.v)}
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

/* ────────────  Members / Sub-wallets  ──────────── */
function Members({ hidden }: { hidden: boolean }) {
  const { lang } = useI18n();
  const members = [
    {
      avatar: "👨",
      name: lang === "ar" ? "أحمد · ٤٢" : "Ahmed · 42",
      role: lang === "ar" ? "ربّ الأسرة" : "Head of Family",
      balance: 28400,
      banks: 3,
      privacy: false,
    },
    {
      avatar: "👩",
      name: lang === "ar" ? "نورة · ٣٨" : "Noura · 38",
      role: lang === "ar" ? "بالغ" : "Adult",
      balance: 19180,
      banks: 2,
      privacy: true,
    },
    {
      avatar: "🧒",
      name: lang === "ar" ? "ليان · ١٢" : "Layan · 12",
      role: "Junior",
      balance: 840,
      banks: 1,
      privacy: false,
    },
    {
      avatar: "👧",
      name: lang === "ar" ? "سارة · ٨" : "Sara · 8",
      role: "Junior",
      balance: 215,
      banks: 1,
      privacy: false,
    },
    {
      avatar: "👶",
      name: lang === "ar" ? "خالد · ٣" : "Khalid · 3",
      role: "Junior",
      balance: 90,
      banks: 1,
      privacy: false,
    },
  ];

  return (
    <div className="card">
      <div className="flex items-center justify-between mb-4">
        <h3 className="heading-3">
          {lang === "ar" ? "محافظ أفراد العائلة" : "Family Sub-Wallets"}
        </h3>
        <button className="btn-ghost py-2 px-3 text-xs">
          <Plus size={14} />
          {lang === "ar" ? "أضف فرد" : "Add member"}
        </button>
      </div>

      <div className="space-y-2">
        {members.map((m) => (
          <div
            key={m.name}
            className="flex items-center gap-4 p-3 rounded-2xl hover:bg-lavender-50 transition-colors group"
          >
            <div className="w-12 h-12 rounded-2xl bg-lavender-gradient flex items-center justify-center text-2xl">
              {m.avatar}
            </div>
            <div className="flex-1 min-w-0">
              <div className="font-semibold text-navy">{m.name}</div>
              <div className="text-xs text-navy/60 flex items-center gap-2">
                <span>{m.role}</span>
                <span>·</span>
                <span>
                  {m.banks} {lang === "ar" ? "بنك" : m.banks > 1 ? "banks" : "bank"}
                </span>
                {m.privacy && (
                  <>
                    <span>·</span>
                    <span className="flex items-center gap-1 text-lavender-600">
                      <ShieldCheck size={10} /> Private
                    </span>
                  </>
                )}
              </div>
            </div>
            <div className="text-end">
              <div className="font-bold text-navy">
                {hidden || m.privacy ? "•••••" : `SAR ${m.balance.toLocaleString()}`}
              </div>
              <div className="text-xs text-navy/40">
                {lang === "ar" ? "متاح" : "Available"}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4 p-3 rounded-2xl bg-lavender-50 flex items-start gap-2 text-xs text-navy/70">
        <ShieldCheck size={14} className="text-lavender-600 flex-shrink-0 mt-0.5" />
        <span>
          {lang === "ar"
            ? "الخصوصية تعني أن الرصيد غير ظاهر للآخرين، حتى داخل العائلة. يمكن لكل بالغ تعديل ذلك."
            : "Privacy means balance is hidden from other family members. Each adult controls this."}
        </span>
      </div>
    </div>
  );
}

/* ────────────  Allocate funds (slider)  ──────────── */
function Allocate() {
  const { lang } = useI18n();
  const [salary] = useState(18000);
  const [pcts, setPcts] = useState({ savings: 30, hajj: 15, layan: 5, sara: 5, household: 45 });

  const total = Object.values(pcts).reduce((a, b) => a + b, 0);

  const update = (key: keyof typeof pcts, value: number) => {
    setPcts((p) => ({ ...p, [key]: Math.max(0, Math.min(100, value)) }));
  };

  const rows: { id: keyof typeof pcts; label: string; emoji: string; color: string }[] = [
    {
      id: "savings",
      label: lang === "ar" ? "ادخار شخصي" : "Personal savings",
      emoji: "💰",
      color: "bg-emerald-500",
    },
    {
      id: "hajj",
      label: lang === "ar" ? "صندوق الحج" : "Hajj fund",
      emoji: "🕋",
      color: "bg-gold",
    },
    {
      id: "layan",
      label: lang === "ar" ? "ليان · مصروف" : "Layan · allowance",
      emoji: "🧒",
      color: "bg-lavender-500",
    },
    {
      id: "sara",
      label: lang === "ar" ? "سارة · مصروف" : "Sara · allowance",
      emoji: "👧",
      color: "bg-lavender-400",
    },
    {
      id: "household",
      label: lang === "ar" ? "مصروفات بيت" : "Household",
      emoji: "🏠",
      color: "bg-amber-500",
    },
  ];

  return (
    <div className="card">
      <h3 className="heading-3">
        {lang === "ar" ? "وزّع الراتب" : "Allocate the salary"}
      </h3>
      <p className="subtle mt-1 text-sm">
        {lang === "ar"
          ? "اسحب لتغيير النسب. المستشار الذكي يقترح التوزيع الأمثل."
          : "Drag to change allocations. The AI Advisor suggests the optimal split."}
      </p>

      <div className="mt-5 p-5 rounded-3xl bg-lavender-gradient text-white">
        <div className="text-xs text-lavender-100">
          {lang === "ar" ? "راتب الشهر" : "Monthly salary"}
        </div>
        <div className="text-4xl font-bold mt-1">
          SAR {salary.toLocaleString()}
        </div>
      </div>

      {/* Stacked bar visualisation */}
      <div className="mt-5 h-6 rounded-full bg-lavender-100 overflow-hidden flex">
        {rows.map((r) => (
          <div
            key={r.id}
            className={`${r.color} transition-all`}
            style={{ width: `${pcts[r.id]}%` }}
            title={`${r.label} ${pcts[r.id]}%`}
          />
        ))}
      </div>
      <div className="text-xs text-navy/50 mt-1.5 text-center">
        {total}% {lang === "ar" ? "من الراتب" : "of salary"}
        {total > 100 && (
          <span className="text-rose-500 ms-2 font-semibold">
            ⚠ {lang === "ar" ? "تجاوز ١٠٠٪" : "Over 100%"}
          </span>
        )}
      </div>

      <div className="mt-5 space-y-3">
        {rows.map((r) => (
          <div key={r.id}>
            <div className="flex items-center justify-between mb-1.5">
              <div className="flex items-center gap-2">
                <span className="text-lg">{r.emoji}</span>
                <span className="text-sm font-semibold text-navy">{r.label}</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-sm font-bold text-navy w-20 text-end">
                  SAR {((salary * pcts[r.id]) / 100).toLocaleString()}
                </span>
                <span className="text-xs font-bold text-lavender-600 w-10 text-end">
                  {pcts[r.id]}%
                </span>
              </div>
            </div>
            <input
              type="range"
              min={0}
              max={100}
              value={pcts[r.id]}
              onChange={(e) => update(r.id, parseInt(e.target.value))}
              className="w-full accent-lavender-500"
            />
          </div>
        ))}
      </div>

      <div className="mt-5 p-3 rounded-2xl bg-emerald-50 flex items-start gap-2 text-xs text-emerald-800">
        <Sparkles size={14} className="flex-shrink-0 mt-0.5" />
        <span>
          {lang === "ar"
            ? "اقتراح المستشار: زِد الادخار ٥٪ بناءً على معدلك الحالي."
            : "AI Advisor suggests: increase savings by 5% based on your current pattern."}
        </span>
      </div>
    </div>
  );
}

/* ────────────  Goals  ──────────── */
function Goals() {
  const { lang } = useI18n();
  const goals = [
    {
      emoji: "🕋",
      title: lang === "ar" ? "حج العائلة" : "Family Hajj",
      target: 60000,
      saved: 44400,
      members: ["👨", "👩", "👨‍🦳"],
      shared: true,
    },
    {
      emoji: "🎓",
      title: lang === "ar" ? "جامعة ليان" : "Layan's University",
      target: 250000,
      saved: 87500,
      members: ["👨", "👩"],
      shared: false,
    },
    {
      emoji: "✈️",
      title: lang === "ar" ? "سفر الصيف" : "Summer trip",
      target: 18000,
      saved: 12200,
      members: ["👨", "👩"],
      shared: false,
    },
    {
      emoji: "🚨",
      title: lang === "ar" ? "احتياطي طوارئ" : "Emergency fund",
      target: 30000,
      saved: 30000,
      members: ["👨", "👩"],
      shared: false,
    },
  ];

  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <h3 className="heading-3">
          {lang === "ar" ? "أهداف الادخار" : "Savings goals"}
        </h3>
        <button className="btn-ghost py-2 px-3 text-xs">
          <Plus size={14} />
          {lang === "ar" ? "هدف جديد" : "New goal"}
        </button>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        {goals.map((g) => {
          const pct = Math.round((g.saved / g.target) * 100);
          const done = pct >= 100;
          return (
            <div key={g.title} className="card card-hover">
              <div className="flex items-start justify-between mb-3">
                <div className="text-3xl">{g.emoji}</div>
                {g.shared && (
                  <span className="chip-gold">
                    🤝 {lang === "ar" ? "مشترك" : "Shared"}
                  </span>
                )}
                {done && (
                  <span className="chip">
                    ✓ {lang === "ar" ? "مكتمل" : "Achieved"}
                  </span>
                )}
              </div>
              <h4 className="font-bold text-navy">{g.title}</h4>
              <div className="mt-2 flex items-center justify-between text-sm">
                <span className="text-navy/60">
                  SAR {g.saved.toLocaleString()}
                </span>
                <span className="text-navy/60">
                  / SAR {g.target.toLocaleString()}
                </span>
              </div>
              <div className="mt-2 h-2 bg-lavender-100 rounded-full overflow-hidden">
                <div
                  className={`h-full transition-all ${
                    done ? "bg-emerald-500" : "bg-lavender-gradient"
                  }`}
                  style={{ width: `${Math.min(100, pct)}%` }}
                />
              </div>
              <div className="flex items-center justify-between mt-3 text-xs">
                <div className="flex -space-x-2">
                  {g.members.map((m, i) => (
                    <span
                      key={i}
                      className="w-6 h-6 rounded-full bg-lavender-100 flex items-center justify-center border-2 border-white text-xs"
                    >
                      {m}
                    </span>
                  ))}
                </div>
                <span className="font-bold text-lavender-600">{pct}%</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

/* ────────────  Bills  ──────────── */
function Bills() {
  const { lang } = useI18n();
  const bills = [
    {
      icon: Zap,
      t: lang === "ar" ? "الكهرباء" : "SEC Electricity",
      due: lang === "ar" ? "بعد ٤ أيام" : "in 4 days",
      amount: 432.5,
      auto: true,
    },
    {
      icon: HomeIcon,
      t: lang === "ar" ? "إيجار" : "Rent",
      due: lang === "ar" ? "بعد ٧ أيام" : "in 7 days",
      amount: 8500,
      auto: false,
    },
    {
      icon: Wifi,
      t: "STC Internet",
      due: lang === "ar" ? "بعد ١٠ أيام" : "in 10 days",
      amount: 350,
      auto: true,
    },
    {
      icon: SmartphoneIcon,
      t: "Mobily 3 lines",
      due: lang === "ar" ? "بعد ١٢ يوم" : "in 12 days",
      amount: 240,
      auto: true,
    },
  ];

  const subs = [
    { t: "Netflix Premium", v: 73, used: true, emoji: "🎬" },
    { t: "Shahid VIP", v: 35, used: true, emoji: "📺" },
    { t: "Apple TV+", v: 25, used: false, emoji: "🎞️" },
    { t: "iCloud 200GB", v: 11, used: true, emoji: "☁️" },
    { t: "PlayStation Plus", v: 47, used: false, emoji: "🎮" },
    { t: "Spotify Family", v: 36, used: true, emoji: "🎵" },
  ];

  return (
    <div className="grid md:grid-cols-2 gap-4">
      <div className="card">
        <h3 className="heading-3 flex items-center gap-2">
          <Receipt size={20} className="text-lavender-600" />
          {lang === "ar" ? "فواتير قادمة" : "Upcoming bills"}
        </h3>
        <div className="mt-4 space-y-2">
          {bills.map((b, i) => {
            const Icon = b.icon;
            return (
              <div
                key={i}
                className="flex items-center gap-3 p-3 rounded-xl bg-lavender-50/50"
              >
                <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center">
                  <Icon size={18} className="text-lavender-600" />
                </div>
                <div className="flex-1">
                  <div className="font-semibold text-navy text-sm">{b.t}</div>
                  <div className="text-xs text-navy/50 flex items-center gap-2">
                    <Bell size={10} /> {b.due}
                    {b.auto && (
                      <span className="text-emerald-600 font-semibold">
                        · Auto-pay
                      </span>
                    )}
                  </div>
                </div>
                <div className="font-bold text-navy">SAR {b.amount}</div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="card">
        <h3 className="heading-3 flex items-center gap-2">
          <Sparkles size={20} className="text-gold" />
          {lang === "ar" ? "كاشف الاشتراكات" : "Subscription detector"}
        </h3>
        <p className="text-xs subtle mt-1">
          {lang === "ar"
            ? "وجدنا ٦ اشتراكات. ٢ غير مستخدمة."
            : "Found 6 subscriptions. 2 unused."}
        </p>
        <div className="mt-4 space-y-2">
          {subs.map((s, i) => (
            <div
              key={i}
              className={`flex items-center gap-3 p-3 rounded-xl ${
                s.used ? "bg-emerald-50/40" : "bg-rose-50"
              }`}
            >
              <div className="text-2xl">{s.emoji}</div>
              <div className="flex-1">
                <div className="font-semibold text-navy text-sm">{s.t}</div>
                <div
                  className={`text-xs font-semibold ${
                    s.used ? "text-emerald-600" : "text-rose-600"
                  }`}
                >
                  {s.used
                    ? lang === "ar"
                      ? "مستخدم"
                      : "Active"
                    : lang === "ar"
                      ? "غير مستخدم — اقترح إلغاء"
                      : "Unused — suggest cancel"}
                </div>
              </div>
              <div className="text-sm font-bold text-navy">SAR {s.v}/mo</div>
            </div>
          ))}
        </div>
        <div className="mt-3 p-3 rounded-2xl bg-gold-50 text-xs text-navy/80 flex items-center gap-2">
          💡{" "}
          {lang === "ar"
            ? "إلغاء غير المستخدم يوفّر 72 ريال شهرياً = 864 ريال سنوياً."
            : "Cancelling unused saves SAR 72/mo = SAR 864/year."}
        </div>
      </div>
    </div>
  );
}

/* ────────────  Maid Payroll  ──────────── */
function MaidPayroll() {
  const { lang } = useI18n();
  const months = [
    { m: "May 2026", paid: true, ack: true, amount: 1500 },
    { m: "Apr 2026", paid: true, ack: true, amount: 1500 },
    { m: "Mar 2026", paid: true, ack: true, amount: 1500 },
    { m: "Feb 2026", paid: true, ack: false, amount: 1500 },
    { m: "Jan 2026", paid: true, ack: true, amount: 1500 },
  ];

  return (
    <div className="grid md:grid-cols-3 gap-4">
      <div className="card md:col-span-1">
        <div className="text-center">
          <div className="w-20 h-20 mx-auto rounded-full bg-lavender-100 flex items-center justify-center text-4xl">
            👩‍🍳
          </div>
          <h3 className="font-bold text-navy mt-3">Maria S.</h3>
          <div className="text-xs text-navy/60">
            {lang === "ar" ? "بدء العقد: ٢٠٢٤" : "Contract: 2024"}
          </div>
          <div className="mt-4 pt-4 border-t border-lavender-100 text-start">
            <Detail k={lang === "ar" ? "الراتب الشهري" : "Monthly salary"} v="SAR 1,500" />
            <Detail k={lang === "ar" ? "إجمالي مدفوع" : "Total paid"} v="SAR 28,500" />
            <Detail k={lang === "ar" ? "الشهور" : "Months"} v="19" />
          </div>
          <button className="btn-primary w-full mt-5 text-sm">
            {lang === "ar" ? "دفع راتب يونيو" : "Pay June Salary"}
          </button>
        </div>
      </div>

      <div className="card md:col-span-2">
        <div className="flex items-center justify-between mb-3">
          <h3 className="heading-3">
            {lang === "ar" ? "السجل الشهري" : "Monthly record"}
          </h3>
          <button className="btn-ghost py-2 px-3 text-xs">
            {lang === "ar" ? "تصدير شهادة" : "Export certificate"}
          </button>
        </div>
        <div className="space-y-2">
          {months.map((m) => (
            <div
              key={m.m}
              className="flex items-center gap-3 p-3 rounded-xl bg-lavender-50/40"
            >
              <div className="flex-1">
                <div className="font-semibold text-navy text-sm">{m.m}</div>
                <div className="text-xs flex items-center gap-2 mt-0.5">
                  <span className="text-emerald-600 font-semibold">
                    ✓ {lang === "ar" ? "مدفوع" : "Paid"}
                  </span>
                  {m.ack ? (
                    <span className="text-emerald-600 font-semibold">
                      ✓ {lang === "ar" ? "موقّع" : "Signed"}
                    </span>
                  ) : (
                    <span className="text-amber-600 font-semibold">
                      ⏳ {lang === "ar" ? "بانتظار التوقيع" : "Pending signature"}
                    </span>
                  )}
                </div>
              </div>
              <div className="font-bold text-navy">SAR {m.amount}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function Detail({ k, v }: { k: string; v: string }) {
  return (
    <div className="flex items-center justify-between py-1.5 text-sm">
      <span className="text-navy/60">{k}</span>
      <span className="font-bold text-navy">{v}</span>
    </div>
  );
}

/* ────────────  Smart Zakat  ──────────── */
function Zakat() {
  const { lang } = useI18n();
  const nisab = 23730;
  const pots = [
    { t: lang === "ar" ? "حساب توفير أحمد" : "Ahmed savings", v: 124000, hawl: 100, included: true },
    { t: lang === "ar" ? "حساب توفير نورة" : "Noura savings", v: 38000, hawl: 92, included: true },
    { t: lang === "ar" ? "هدف الحج (مشترك)" : "Hajj fund (shared)", v: 44400, hawl: 78, included: false },
    { t: lang === "ar" ? "محفظة استثمار" : "Investment portfolio", v: 141300, hawl: 100, included: true },
    { t: lang === "ar" ? "ذهب" : "Gold (estimated)", v: 18000, hawl: 100, included: true },
  ];

  const total = pots.filter((p) => p.included).reduce((a, b) => a + b.v, 0);
  const zakat = total * 0.025;

  return (
    <div className="grid md:grid-cols-3 gap-4">
      <div className="card md:col-span-1 bg-lavender-gradient text-white border-0 relative overflow-hidden">
        <div className="absolute inset-0 carpet-pattern opacity-30" />
        <div className="relative">
          <div className="text-5xl mb-2">🕌</div>
          <div className="text-xs uppercase text-gold-200 tracking-widest">
            {lang === "ar" ? "زكاة هذه السنة" : "Zakat this year"}
          </div>
          <div className="text-4xl font-bold mt-2">
            SAR {zakat.toLocaleString()}
          </div>
          <div className="text-xs text-lavender-100 mt-1">
            {lang === "ar"
              ? `قاعدة الزكاة: SAR ${total.toLocaleString()}`
              : `Zakat base: SAR ${total.toLocaleString()}`}
          </div>
          <div className="mt-4 pt-4 border-t border-white/20 text-xs">
            <div className="flex justify-between mb-1">
              <span>{lang === "ar" ? "النصاب" : "Nisab"}</span>
              <span className="font-bold">SAR {nisab.toLocaleString()}</span>
            </div>
            <div className="flex justify-between">
              <span>{lang === "ar" ? "النسبة" : "Rate"}</span>
              <span className="font-bold">2.5%</span>
            </div>
          </div>
          <button className="w-full mt-5 px-4 py-2 rounded-full bg-gold text-navy font-bold text-sm">
            {lang === "ar" ? "ادفع الزكاة" : "Pay Zakat"}
          </button>
          <div className="text-[10px] text-lavender-200 text-center mt-3">
            AAOIFI Standard 35
          </div>
        </div>
      </div>

      <div className="card md:col-span-2">
        <h3 className="heading-3">
          {lang === "ar" ? "تفصيل قاعدة الزكاة" : "Zakat base breakdown"}
        </h3>
        <p className="text-xs subtle mt-1">
          {lang === "ar"
            ? "يُتتبع حول كل حصة بشكل مستقل وفق معيار AAOIFI رقم ٣٥."
            : "Each share's hawl is tracked independently per AAOIFI Standard 35."}
        </p>
        <div className="mt-4 space-y-2">
          {pots.map((p, i) => (
            <div
              key={i}
              className={`p-3 rounded-xl ${
                p.included ? "bg-emerald-50" : "bg-amber-50"
              } flex items-center gap-3`}
            >
              <div className="flex-1">
                <div className="font-semibold text-navy text-sm">{p.t}</div>
                <div className="text-xs text-navy/60 mt-0.5">
                  {lang === "ar" ? "تقدّم الحول" : "Hawl progress"}: {p.hawl}%
                </div>
                <div className="mt-1 h-1.5 bg-white rounded-full overflow-hidden">
                  <div
                    className={`h-full ${
                      p.hawl === 100 ? "bg-emerald-500" : "bg-amber-500"
                    }`}
                    style={{ width: `${p.hawl}%` }}
                  />
                </div>
              </div>
              <div className="text-end">
                <div className="font-bold text-navy">
                  SAR {p.v.toLocaleString()}
                </div>
                <div
                  className={`text-xs font-semibold ${
                    p.included ? "text-emerald-700" : "text-amber-700"
                  }`}
                >
                  {p.included
                    ? lang === "ar"
                      ? "تجب"
                      : "Zakat due"
                    : lang === "ar"
                      ? "حول غير مكتمل"
                      : "Hawl incomplete"}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ────────────  Junior Academy  ──────────── */
function JuniorAcademy() {
  const { lang } = useI18n();
  const [streak] = useState(14);
  const tasks = [
    { t: lang === "ar" ? "نظّف غرفتك" : "Clean your room", reward: 10, done: true, emoji: "🧹" },
    { t: lang === "ar" ? "اقرأ ١٥ دقيقة" : "Read for 15 min", reward: 5, done: true, emoji: "📚" },
    { t: lang === "ar" ? "ادّخر ٢٠ ريال" : "Save SAR 20", reward: 15, done: false, emoji: "🪙" },
    { t: lang === "ar" ? "أكمل درس الزكاة" : "Finish Zakat lesson", reward: 25, done: false, emoji: "🕌" },
  ];

  return (
    <div className="grid md:grid-cols-3 gap-4">
      {/* Avatar */}
      <div className="card md:col-span-1 text-center bg-gradient-to-br from-lavender-50 to-lavender-100 border-lavender-200">
        <div className="text-7xl mb-3 animate-float">🌳</div>
        <h3 className="font-bold text-navy">
          {lang === "ar" ? "شجرة ليان" : "Layan's Tree"}
        </h3>
        <div className="text-xs text-navy/60 mt-1">
          {lang === "ar" ? "المرحلة ٤ — تنمو" : "Stage 4 — Growing"}
        </div>
        <div className="mt-4 px-3 py-2 rounded-xl bg-white inline-flex items-center gap-2">
          <span className="text-lg">🔥</span>
          <span className="text-sm font-bold text-navy">
            {streak} {lang === "ar" ? "يوم متواصل" : "day streak"}
          </span>
        </div>
        <div className="mt-4 grid grid-cols-3 gap-2 text-center">
          <Mini2 v="840" l={lang === "ar" ? "ريال" : "SAR saved"} />
          <Mini2 v="12" l={lang === "ar" ? "درس" : "lessons"} />
          <Mini2 v="3" l={lang === "ar" ? "أوسمة" : "badges"} />
        </div>
      </div>

      {/* Tasks */}
      <div className="card md:col-span-2">
        <div className="flex items-center justify-between mb-3">
          <h3 className="heading-3">
            {lang === "ar" ? "مهام اليوم" : "Today's tasks"}
          </h3>
          <span className="chip">2 / 4</span>
        </div>
        <div className="space-y-2">
          {tasks.map((t, i) => (
            <div
              key={i}
              className={`p-3 rounded-xl flex items-center gap-3 ${
                t.done
                  ? "bg-emerald-50"
                  : "bg-white border border-lavender-100"
              }`}
            >
              <div className="text-2xl">{t.emoji}</div>
              <div className="flex-1">
                <div
                  className={`font-semibold text-sm ${
                    t.done ? "text-emerald-700 line-through" : "text-navy"
                  }`}
                >
                  {t.t}
                </div>
                <div className="text-xs text-gold-500 font-semibold">
                  +{t.reward} {lang === "ar" ? "نقطة" : "pts"}
                </div>
              </div>
              {t.done ? (
                <span className="w-6 h-6 rounded-full bg-emerald-500 text-white flex items-center justify-center text-xs">
                  ✓
                </span>
              ) : (
                <button className="px-3 py-1.5 text-xs font-bold bg-lavender-500 text-white rounded-full">
                  {lang === "ar" ? "قم بها" : "Do it"}
                </button>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function Mini2({ v, l }: { v: string; l: string }) {
  return (
    <div className="bg-white rounded-xl p-2">
      <div className="text-lg font-bold text-lavender-600">{v}</div>
      <div className="text-[10px] text-navy/50 uppercase">{l}</div>
    </div>
  );
}

/* ────────────  Tadawul Investment Game  ──────────── */
function TadawulGame() {
  const { lang } = useI18n();
  const [virtualBalance] = useState(8420);
  const stocks = [
    { t: "ARAMCO", n: lang === "ar" ? "أرامكو" : "Saudi Aramco", p: 28.45, c: 0.85, holding: 50 },
    { t: "STC", n: "STC", p: 42.10, c: -0.30, holding: 20 },
    { t: "ALRAJHI", n: lang === "ar" ? "الراجحي" : "Al Rajhi", p: 92.50, c: 1.20, holding: 10 },
    { t: "SABIC", n: "SABIC", p: 65.80, c: -0.45, holding: 0 },
    { t: "MAADEN", n: lang === "ar" ? "معادن" : "Ma'aden", p: 51.30, c: 2.10, holding: 0 },
  ];

  return (
    <div className="grid md:grid-cols-3 gap-4">
      <div className="card md:col-span-1 bg-gradient-to-br from-navy to-lavender-800 text-white border-0">
        <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-gold-200 mb-2">
          <TrendingUp size={14} />
          Tadawul Sim
        </div>
        <div className="text-xs text-lavender-200">
          {lang === "ar" ? "رصيد افتراضي" : "Virtual balance"}
        </div>
        <div className="text-3xl font-bold mt-1">
          SAR {virtualBalance.toLocaleString()}
        </div>
        <div className="mt-2 inline-flex items-center gap-1 px-2 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-semibold">
          ↑ +4.8%
        </div>
        <div className="mt-5 pt-5 border-t border-white/10 space-y-1.5">
          <DetailDark k={lang === "ar" ? "العمر" : "Age"} v="14+" />
          <DetailDark k={lang === "ar" ? "إشراف" : "Supervised"} v={lang === "ar" ? "نعم" : "Yes"} />
          <DetailDark
            k={lang === "ar" ? "أرباح حقيقية" : "Real returns"}
            v={lang === "ar" ? "لا · افتراضي" : "No · virtual"}
          />
        </div>
        <div className="mt-4 p-2 rounded-xl bg-white/10 text-xs text-lavender-100">
          {lang === "ar"
            ? "💡 الأفاتار يكافئ عادات الاستثمار، ليس توقيت السوق."
            : "💡 Avatar rewards investing habits, not market timing."}
        </div>
      </div>

      <div className="card md:col-span-2">
        <div className="flex items-center justify-between mb-3">
          <h3 className="heading-3">
            {lang === "ar" ? "السوق الافتراضي" : "Virtual market"}
          </h3>
          <span className="text-xs text-navy/50">
            {lang === "ar" ? "أسعار حقيقية" : "Live Tadawul prices"}
          </span>
        </div>
        <div className="space-y-2">
          {stocks.map((s) => (
            <div
              key={s.t}
              className="flex items-center gap-3 p-3 rounded-xl bg-lavender-50/40"
            >
              <div className="w-10 h-10 rounded-lg bg-lavender-gradient text-white flex items-center justify-center font-bold text-xs">
                {s.t.slice(0, 3)}
              </div>
              <div className="flex-1">
                <div className="font-semibold text-navy text-sm">{s.n}</div>
                <div className="text-xs text-navy/50">{s.t}</div>
              </div>
              <div className="text-end">
                <div className="font-bold text-navy text-sm">SAR {s.p}</div>
                <div
                  className={`text-xs font-semibold ${
                    s.c > 0 ? "text-emerald-600" : "text-rose-600"
                  }`}
                >
                  {s.c > 0 ? "↑" : "↓"} {Math.abs(s.c)}%
                </div>
              </div>
              {s.holding > 0 ? (
                <span className="chip">×{s.holding}</span>
              ) : (
                <button className="px-3 py-1.5 text-xs font-bold bg-lavender-500 text-white rounded-full">
                  {lang === "ar" ? "اشتري" : "Buy"}
                </button>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function DetailDark({ k, v }: { k: string; v: string }) {
  return (
    <div className="flex items-center justify-between text-xs">
      <span className="text-lavender-200">{k}</span>
      <span className="font-bold text-white">{v}</span>
    </div>
  );
}
