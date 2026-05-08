"use client";

import { useI18n } from "@/lib/i18n";
import {
  ShieldCheck,
  Lock,
  Eye,
  EyeOff,
  FileCheck,
  KeyRound,
  Server,
  Globe,
  CreditCard,
  Smartphone,
} from "lucide-react";

const ICONS = [Lock, KeyRound, EyeOff, Eye, FileCheck, Server];

export default function TrustPage() {
  const { t, lang } = useI18n();

  return (
    <div className="section">
      <div className="text-center max-w-2xl mx-auto mb-12">
        <span className="chip">{t.nav.trust}</span>
        <h1 className="heading-1 mt-4">{t.trust.title}</h1>
        <p className="mt-4 subtle">{t.trust.subtitle}</p>
      </div>

      {/* Six dimensions */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {t.trust.pillars.map((p, i) => {
          const Icon = ICONS[i % ICONS.length];
          return (
            <div key={i} className="card card-hover">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-lavender-500 to-lavender-700 flex items-center justify-center shadow-soft mb-4">
                <Icon size={20} className="text-white" />
              </div>
              <h3 className="font-bold text-navy">{p.t}</h3>
              <p className="mt-2 text-sm text-navy/70 leading-relaxed">{p.d}</p>
            </div>
          );
        })}
      </div>

      {/* Compliance bar */}
      <div className="mt-10 rounded-3xl bg-lavender-gradient p-6 text-white text-center">
        <div className="flex items-center justify-center gap-2 mb-2">
          <ShieldCheck size={18} />
          <span className="text-xs font-semibold uppercase tracking-widest text-gold-200">
            {lang === "ar" ? "الالتزام التنظيمي" : "Regulatory compliance"}
          </span>
        </div>
        <p className="font-semibold text-lg">{t.trust.compliance}</p>
      </div>

      {/* Payments */}
      <div className="mt-12">
        <h2 className="heading-2 text-center">
          {lang === "ar" ? "المدفوعات" : "Payments"}
        </h2>
        <p className="text-center subtle mt-3 max-w-xl mx-auto">
          {lang === "ar"
            ? "بوابة دفع PCI-DSS Level 1 مع التوكنة الكاملة. سكك الدفع السعودية المعتمدة."
            : "PCI-DSS Level 1 gateway with full tokenisation. SAMA-regulated rails: SARIE, SADAD, IPS, Open Banking PISP."}
        </p>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 mt-8">
          <PaymentRow
            icon={CreditCard}
            t={lang === "ar" ? "بطاقات الائتمان والخصم" : "Credit/Debit cards"}
            d="Mada · Visa · Mastercard"
          />
          <PaymentRow
            icon={Smartphone}
            t={lang === "ar" ? "محافظ الجوال" : "Mobile wallets"}
            d="Apple Pay · Google Pay · STC Pay"
          />
          <PaymentRow
            icon={Globe}
            t={lang === "ar" ? "Open Banking" : "Open Banking"}
            d="Neoleap (Al Rajhi) · SAMA-regulated"
          />
        </div>
      </div>

      {/* For parents */}
      <div className="mt-16 grid lg:grid-cols-2 gap-6">
        <div className="card">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-2xl">👨‍👩‍👧‍👦</span>
            <h3 className="font-bold text-navy">
              {lang === "ar" ? "لكل والد" : "For every parent"}
            </h3>
          </div>
          <ul className="space-y-2.5 text-sm text-navy/80">
            <li className="flex items-start gap-2">
              <Lock size={14} className="mt-1 text-lavender-500" />
              {lang === "ar"
                ? "بيانات أطفالك معزولة تماماً عن مدخلات الإعلانات."
                : "Your children's data is fully isolated — never used for ads."}
            </li>
            <li className="flex items-start gap-2">
              <Lock size={14} className="mt-1 text-lavender-500" />
              {lang === "ar"
                ? "كل عملية مهمة تمر عبر طبقة موافقة أبوية."
                : "Every important action passes through a parental approval layer."}
            </li>
            <li className="flex items-start gap-2">
              <Lock size={14} className="mt-1 text-lavender-500" />
              {lang === "ar"
                ? "يمكنك تصدير أو حذف بيانات عائلتك في أي وقت."
                : "You can export or delete your family data at any time."}
            </li>
          </ul>
        </div>

        <div className="card">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-2xl">🛡️</span>
            <h3 className="font-bold text-navy">
              {lang === "ar" ? "كيف نختبر أنفسنا" : "How we test ourselves"}
            </h3>
          </div>
          <ul className="space-y-2.5 text-sm text-navy/80">
            <li className="flex items-start gap-2">
              <FileCheck size={14} className="mt-1 text-lavender-500" />
              {lang === "ar"
                ? "اختبارات اختراق سنوية من جهة خارجية."
                : "Annual external penetration tests."}
            </li>
            <li className="flex items-start gap-2">
              <FileCheck size={14} className="mt-1 text-lavender-500" />
              {lang === "ar"
                ? "تدقيق ربع سنوي للخصوصية وحماية الأطفال."
                : "Quarterly privacy & child-data protection audits."}
            </li>
            <li className="flex items-start gap-2">
              <FileCheck size={14} className="mt-1 text-lavender-500" />
              {lang === "ar"
                ? "مستشار CISO خارجي. فريق امتثال داخلي."
                : "External CISO advisor + internal compliance team."}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

function PaymentRow({
  icon: Icon,
  t,
  d,
}: {
  icon: any;
  t: string;
  d: string;
}) {
  return (
    <div className="card card-hover">
      <Icon size={20} className="text-lavender-600 mb-2" />
      <h4 className="font-semibold text-navy text-sm">{t}</h4>
      <p className="text-xs text-navy/60 mt-1">{d}</p>
    </div>
  );
}
