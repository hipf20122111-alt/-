"use client";

import Link from "next/link";
import { useState } from "react";
import { useI18n } from "@/lib/i18n";
import { Check, Sparkles } from "lucide-react";

export default function PricingPage() {
  const { t, lang } = useI18n();
  const [annual, setAnnual] = useState(false);

  return (
    <div className="section">
      <div className="text-center max-w-2xl mx-auto mb-10">
        <span className="chip">{t.nav.pricing}</span>
        <h1 className="heading-1 mt-4">{t.pricing.title}</h1>
        <p className="mt-4 subtle">{t.pricing.subtitle}</p>

        <div className="inline-flex items-center mt-7 p-1 bg-lavender-100 rounded-full">
          <button
            onClick={() => setAnnual(false)}
            className={`px-4 py-1.5 text-sm font-semibold rounded-full transition-all ${
              !annual ? "bg-white text-navy shadow-sm" : "text-navy/60"
            }`}
          >
            {t.pricing.monthly}
          </button>
          <button
            onClick={() => setAnnual(true)}
            className={`px-4 py-1.5 text-sm font-semibold rounded-full transition-all ${
              annual ? "bg-white text-navy shadow-sm" : "text-navy/60"
            }`}
          >
            {t.pricing.annual}
          </button>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {t.pricing.tiers.map((tier: any, i) => {
          const isHighlight = tier.highlight;
          return (
            <div
              key={i}
              className={`relative rounded-3xl p-7 transition-all ${
                isHighlight
                  ? "bg-lavender-gradient text-white shadow-glow scale-[1.02]"
                  : "bg-white border border-lavender-100 text-navy"
              }`}
            >
              {isHighlight && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gold text-navy text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1">
                  <Sparkles size={12} />
                  {lang === "ar" ? "الأكثر شعبية" : "Most popular"}
                </div>
              )}
              <h3 className="text-xl font-bold">{tier.name}</h3>
              <div className="mt-4 flex items-baseline gap-1.5">
                <span className="text-4xl font-bold">{tier.price}</span>
                <span
                  className={
                    isHighlight ? "text-lavender-100" : "text-navy/60"
                  }
                >
                  {tier.period}
                </span>
              </div>
              <Link
                href="/early-access"
                className={`mt-5 block w-full text-center px-4 py-2.5 rounded-full font-semibold transition-all ${
                  isHighlight
                    ? "bg-gold text-navy hover:bg-gold-200"
                    : "bg-lavender-500 text-white hover:bg-lavender-600"
                }`}
              >
                {tier.cta}
              </Link>
              <ul className="mt-6 space-y-3">
                {tier.features.map((f: string, j: number) => (
                  <li key={j} className="flex items-start gap-2 text-sm">
                    <Check
                      size={16}
                      className={`mt-0.5 flex-shrink-0 ${
                        isHighlight ? "text-gold-200" : "text-lavender-500"
                      }`}
                    />
                    <span
                      className={
                        isHighlight ? "text-lavender-50" : "text-navy/80"
                      }
                    >
                      {f}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>

      <div className="text-center mt-12 text-sm text-navy/60 max-w-xl mx-auto">
        {lang === "ar"
          ? "كل الأسعار تشمل ضريبة القيمة المضافة. المعاملات والتحويلات الخارجية قد تخضع لرسوم منخفضة موضّحة في كل عملية."
          : "All prices include VAT. External transfers and bill payments may carry a small transparent fee disclosed at the time of each transaction."}
      </div>
    </div>
  );
}
