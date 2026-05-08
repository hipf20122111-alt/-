"use client";

import { useState } from "react";
import { useI18n } from "@/lib/i18n";
import { CheckCircle2, Smartphone, Sparkles } from "lucide-react";

export default function EarlyAccessPage() {
  const { lang } = useI18n();
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="section">
      <div className="max-w-xl mx-auto text-center">
        <span className="chip">
          <Sparkles size={12} />
          {lang === "ar" ? "وصول مبكر" : "Early access"}
        </span>
        <h1 className="heading-1 mt-4">
          {lang === "ar"
            ? "كن من أوّل العائلات السعودية"
            : "Be among the first Saudi families"}
        </h1>
        <p className="mt-4 subtle">
          {lang === "ar"
            ? "سجّل الآن واحصل على شهرين مجاناً عند الإطلاق + جلسة استشارة مجانية."
            : "Sign up now and get 2 months free at launch + a complimentary advisory session."}
        </p>

        {!submitted ? (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSubmitted(true);
            }}
            className="card mt-8 text-start space-y-4"
          >
            <div>
              <label className="block text-xs font-semibold text-navy/70 mb-1.5">
                {lang === "ar" ? "الاسم" : "Name"}
              </label>
              <input
                required
                type="text"
                placeholder="Ahmed"
                className="w-full px-4 py-3 rounded-xl bg-white border border-lavender-200 focus:outline-none focus:ring-2 focus:ring-lavender-300"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-navy/70 mb-1.5">
                {lang === "ar" ? "البريد الإلكتروني" : "Email"}
              </label>
              <input
                required
                type="email"
                placeholder="you@email.com"
                className="w-full px-4 py-3 rounded-xl bg-white border border-lavender-200 focus:outline-none focus:ring-2 focus:ring-lavender-300"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-navy/70 mb-1.5">
                {lang === "ar" ? "حجم العائلة" : "Family size"}
              </label>
              <select className="w-full px-4 py-3 rounded-xl bg-white border border-lavender-200 focus:outline-none focus:ring-2 focus:ring-lavender-300">
                <option>2–3</option>
                <option>4–5</option>
                <option>6+</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-semibold text-navy/70 mb-1.5">
                {lang === "ar" ? "ما الذي يهمّك أكثر؟" : "What matters most to you?"}
              </label>
              <div className="grid grid-cols-2 gap-2">
                {[
                  lang === "ar" ? "تنظيم الفواتير" : "Bills",
                  lang === "ar" ? "تعليم الأطفال" : "Junior",
                  lang === "ar" ? "حساب الزكاة" : "Zakat",
                  lang === "ar" ? "أهداف ادخار" : "Savings goals",
                ].map((c) => (
                  <label
                    key={c}
                    className="flex items-center gap-2 p-2.5 rounded-xl bg-white border border-lavender-200 hover:bg-lavender-50 cursor-pointer text-sm"
                  >
                    <input
                      type="checkbox"
                      className="rounded accent-lavender-500"
                    />
                    {c}
                  </label>
                ))}
              </div>
            </div>
            <button type="submit" className="btn-primary w-full">
              <Smartphone size={16} />
              {lang === "ar" ? "سجّلني" : "Get early access"}
            </button>
          </form>
        ) : (
          <div className="card mt-8 p-10 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-emerald-100 mb-4">
              <CheckCircle2 size={32} className="text-emerald-500" />
            </div>
            <h2 className="heading-3">
              {lang === "ar" ? "تم التسجيل بنجاح!" : "You're on the list!"}
            </h2>
            <p className="subtle mt-2">
              {lang === "ar"
                ? "سنرسل لك بريدًا عند فتح الوصول. شكراً لثقتك."
                : "We'll email you when access opens. Thank you."}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
