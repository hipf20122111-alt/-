"use client";

import Link from "next/link";
import { useI18n } from "@/lib/i18n";
import Logo from "@/components/Logo";
import {
  ShieldCheck,
  Fingerprint,
  KeyRound,
  ArrowRight,
} from "lucide-react";

export default function LoginPage() {
  const { lang } = useI18n();
  return (
    <div className="min-h-[80vh] grid lg:grid-cols-2">
      {/* Form */}
      <div className="flex items-center justify-center p-6 md:p-12">
        <div className="w-full max-w-md">
          <Link href="/" className="inline-block mb-8">
            <Logo />
          </Link>
          <h1 className="heading-2">
            {lang === "ar" ? "أهلاً بعودتك" : "Welcome back"}
          </h1>
          <p className="subtle mt-2">
            {lang === "ar"
              ? "ادخل لإدارة محفظة عائلتك."
              : "Sign in to manage your family wallet."}
          </p>

          <form className="mt-8 space-y-4">
            <div>
              <label className="block text-xs font-semibold text-navy/70 mb-1.5">
                {lang === "ar" ? "البريد الإلكتروني" : "Email"}
              </label>
              <input
                type="email"
                placeholder="ahmed@email.com"
                className="w-full px-4 py-3 rounded-xl bg-white border border-lavender-200 focus:outline-none focus:ring-2 focus:ring-lavender-300"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-navy/70 mb-1.5">
                {lang === "ar" ? "كلمة المرور" : "Password"}
              </label>
              <input
                type="password"
                placeholder="••••••••"
                className="w-full px-4 py-3 rounded-xl bg-white border border-lavender-200 focus:outline-none focus:ring-2 focus:ring-lavender-300"
              />
            </div>

            <div className="flex items-center justify-between">
              <label className="flex items-center gap-2 text-sm text-navy/70">
                <input type="checkbox" className="rounded accent-lavender-500" />
                {lang === "ar" ? "تذكّرني" : "Remember me"}
              </label>
              <Link
                href="#"
                className="text-sm font-semibold text-lavender-600 hover:underline"
              >
                {lang === "ar" ? "نسيت كلمة المرور؟" : "Forgot password?"}
              </Link>
            </div>

            <button type="submit" className="btn-primary w-full">
              {lang === "ar" ? "تسجيل الدخول" : "Sign in"}
              <ArrowRight size={16} className="ltr-only" />
            </button>

            <div className="relative my-6">
              <div className="border-t border-lavender-200" />
              <span className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-3 bg-cream text-xs text-navy/50">
                {lang === "ar" ? "أو ادخل بـ" : "or continue with"}
              </span>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <button
                type="button"
                className="flex items-center justify-center gap-2 py-2.5 rounded-xl bg-white border border-lavender-200 hover:bg-lavender-50 text-sm font-semibold"
              >
                <ShieldCheck size={16} className="text-lavender-600" />
                Nafath
              </button>
              <button
                type="button"
                className="flex items-center justify-center gap-2 py-2.5 rounded-xl bg-white border border-lavender-200 hover:bg-lavender-50 text-sm font-semibold"
              >
                <Fingerprint size={16} className="text-lavender-600" />
                {lang === "ar" ? "بصمة" : "Biometric"}
              </button>
            </div>
          </form>

          <p className="mt-6 text-center text-sm text-navy/60">
            {lang === "ar" ? "ليس لديك حساب؟" : "Don't have an account?"}{" "}
            <Link
              href="/signup"
              className="font-semibold text-lavender-600 hover:underline"
            >
              {lang === "ar" ? "أنشئ حساباً" : "Sign up"}
            </Link>
          </p>
        </div>
      </div>

      {/* Visual */}
      <div className="hidden lg:flex items-center justify-center bg-lavender-gradient relative overflow-hidden">
        <div className="absolute inset-0 carpet-pattern opacity-40" />
        <div className="relative max-w-md text-center text-white p-12">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-3xl bg-white/15 backdrop-blur mb-5">
            <KeyRound size={28} />
          </div>
          <h2 className="text-3xl font-bold">
            {lang === "ar"
              ? "أمان مصرفي بمعنى الكلمة"
              : "Bank-grade security, not just a slogan"}
          </h2>
          <p className="mt-4 text-lavender-100 leading-relaxed">
            {lang === "ar"
              ? "TLS 1.3، AES-256، نفاذ، MFA، توافق PDPL وSAMA. لا نخزّن بياناتك البنكية."
              : "TLS 1.3, AES-256, Nafath, MFA, PDPL & SAMA aligned. We never store your raw banking data."}
          </p>
          <div className="mt-6 flex flex-wrap gap-2 justify-center">
            {["PDPL", "SAMA", "AAOIFI", "PCI-DSS L1", "NCA ECC-1"].map((b) => (
              <span
                key={b}
                className="px-3 py-1 rounded-full bg-white/15 backdrop-blur text-xs font-semibold border border-white/20"
              >
                {b}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
