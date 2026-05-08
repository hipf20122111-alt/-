"use client";

import Link from "next/link";
import { useState } from "react";
import { useI18n } from "@/lib/i18n";
import Logo from "@/components/Logo";
import { ShieldCheck, Check, ArrowRight } from "lucide-react";

export default function SignupPage() {
  const { lang } = useI18n();
  const [step, setStep] = useState(1);

  return (
    <div className="min-h-[80vh] section">
      <div className="max-w-md mx-auto">
        <Link href="/" className="inline-block mb-8">
          <Logo />
        </Link>

        <div className="flex items-center gap-2 mb-6">
          {[1, 2, 3].map((n) => (
            <div key={n} className="flex-1 flex items-center gap-2">
              <div
                className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold ${
                  n <= step
                    ? "bg-lavender-500 text-white"
                    : "bg-lavender-100 text-lavender-400"
                }`}
              >
                {n < step ? <Check size={14} /> : n}
              </div>
              {n < 3 && (
                <div
                  className={`flex-1 h-0.5 ${
                    n < step ? "bg-lavender-500" : "bg-lavender-100"
                  }`}
                />
              )}
            </div>
          ))}
        </div>

        <h1 className="heading-2 mb-2">
          {step === 1 &&
            (lang === "ar" ? "أنشئ حساب عائلتك" : "Create your family account")}
          {step === 2 && (lang === "ar" ? "تحقّق من الهوية" : "Verify identity")}
          {step === 3 && (lang === "ar" ? "اربط بنوكك" : "Connect your banks")}
        </h1>
        <p className="subtle mb-6 text-sm">
          {step === 1 && (lang === "ar" ? "ابدأ بـ ٣٠ ثانية." : "Takes 30 seconds to start.")}
          {step === 2 && (lang === "ar" ? "عبر نفاذ — آمن ومعتمد." : "Via Nafath — secure and verified.")}
          {step === 3 && (lang === "ar" ? "Open Banking عبر نيوليب." : "Open Banking via Neoleap.")}
        </p>

        <div className="card">
          {step === 1 && (
            <form className="space-y-4">
              <Field label={lang === "ar" ? "الاسم" : "Full name"} placeholder="Ahmed Al Saud" />
              <Field label={lang === "ar" ? "البريد" : "Email"} type="email" placeholder="ahmed@email.com" />
              <Field label={lang === "ar" ? "الجوال" : "Phone"} placeholder="+966 5X XXX XXXX" />
              <Field
                label={lang === "ar" ? "كلمة المرور" : "Password"}
                type="password"
                placeholder="••••••••"
              />
              <label className="flex items-start gap-2 text-xs text-navy/70">
                <input type="checkbox" className="mt-0.5 rounded accent-lavender-500" />
                {lang === "ar"
                  ? "أوافق على الشروط وسياسة الخصوصية وفق نظام حماية البيانات (PDPL)."
                  : "I agree to the Terms and Privacy Policy under Saudi PDPL."}
              </label>
              <button
                type="button"
                onClick={() => setStep(2)}
                className="btn-primary w-full"
              >
                {lang === "ar" ? "متابعة" : "Continue"}
                <ArrowRight size={16} className="ltr-only" />
              </button>
            </form>
          )}

          {step === 2 && (
            <div className="text-center py-4">
              <div className="w-16 h-16 mx-auto rounded-3xl bg-lavender-gradient flex items-center justify-center text-white mb-4">
                <ShieldCheck size={28} />
              </div>
              <p className="text-sm text-navy/70 leading-relaxed mb-5">
                {lang === "ar"
                  ? "افتح تطبيق نفاذ أو أبشر للموافقة على التحقق من هويتك."
                  : "Open the Nafath or Absher app to approve identity verification."}
              </p>
              <div className="text-3xl font-bold tracking-widest text-lavender-600 my-4">
                42
              </div>
              <p className="text-xs text-navy/50">
                {lang === "ar"
                  ? "اختر هذا الرقم في التطبيق"
                  : "Choose this number in the Nafath app"}
              </p>
              <button
                onClick={() => setStep(3)}
                className="btn-primary w-full mt-6"
              >
                {lang === "ar" ? "تحقّقت" : "I've verified"}
              </button>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-3">
              {["Al Rajhi Bank", "SNB", "Riyad Bank", "STC Bank", "AlBilad", "Alinma"].map(
                (b) => (
                  <button
                    key={b}
                    className="w-full flex items-center justify-between p-3 rounded-xl bg-white border border-lavender-200 hover:bg-lavender-50 transition-colors"
                  >
                    <span className="font-semibold text-navy text-sm">{b}</span>
                    <span className="text-xs font-semibold text-lavender-600">
                      {lang === "ar" ? "ربط" : "Connect"} →
                    </span>
                  </button>
                )
              )}
              <Link href="/wallet" className="btn-primary w-full mt-4">
                {lang === "ar" ? "اذهب للمحفظة" : "Go to wallet"}
              </Link>
              <button
                onClick={() => alert("Skipped")}
                className="block w-full text-center text-sm text-navy/60 hover:underline mt-2"
              >
                {lang === "ar" ? "تخطّي للآن" : "Skip for now"}
              </button>
            </div>
          )}
        </div>

        <p className="mt-5 text-center text-xs text-navy/50 flex items-center justify-center gap-1.5">
          <ShieldCheck size={12} />
          {lang === "ar"
            ? "نستخدم Open Banking المرخّص من ساما — لا نخزّن بياناتك البنكية."
            : "Using SAMA-licensed Open Banking — we never store your raw banking data."}
        </p>
      </div>
    </div>
  );
}

function Field({
  label,
  placeholder,
  type = "text",
}: {
  label: string;
  placeholder: string;
  type?: string;
}) {
  return (
    <div>
      <label className="block text-xs font-semibold text-navy/70 mb-1.5">
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        className="w-full px-4 py-3 rounded-xl bg-white border border-lavender-200 focus:outline-none focus:ring-2 focus:ring-lavender-300 text-sm"
      />
    </div>
  );
}
