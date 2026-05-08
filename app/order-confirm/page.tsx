"use client";

import Link from "next/link";
import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { useI18n } from "@/lib/i18n";
import { CheckCircle2, Mail, Download, ArrowRight } from "lucide-react";

function OrderConfirmInner() {
  const { lang } = useI18n();
  const params = useSearchParams();
  const total = params.get("total") || "0.00";
  const orderId =
    "TH-" + Math.random().toString(36).slice(2, 8).toUpperCase();

  return (
    <div className="section">
      <div className="max-w-2xl mx-auto">
        <div className="card text-center p-10">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-emerald-100 mb-5 animate-fade-in">
            <CheckCircle2 size={40} className="text-emerald-500" />
          </div>
          <h1 className="heading-2">
            {lang === "ar" ? "تم الدفع بنجاح!" : "Payment successful!"}
          </h1>
          <p className="mt-3 subtle">
            {lang === "ar"
              ? "شكراً لك. وصلت طلبيّتك بسلام."
              : "Thank you. Your order is confirmed."}
          </p>

          <div className="mt-6 grid sm:grid-cols-2 gap-3 text-start">
            <Detail
              k={lang === "ar" ? "رقم الطلب" : "Order ID"}
              v={orderId}
            />
            <Detail
              k={lang === "ar" ? "الإجمالي" : "Total paid"}
              v={`SAR ${total}`}
            />
            <Detail
              k={lang === "ar" ? "طريقة الدفع" : "Payment method"}
              v="Mada •••• 4521"
            />
            <Detail
              k={lang === "ar" ? "التاريخ" : "Date"}
              v={new Date().toLocaleDateString(
                lang === "ar" ? "ar-SA" : "en-GB"
              )}
            />
          </div>

          <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
            <button className="btn-ghost">
              <Download size={16} />
              {lang === "ar" ? "تحميل الفاتورة" : "Download invoice"}
            </button>
            <button className="btn-ghost">
              <Mail size={16} />
              {lang === "ar" ? "إرسال للبريد" : "Email receipt"}
            </button>
          </div>

          <div className="mt-8 pt-6 border-t border-lavender-100">
            <p className="text-sm text-navy/60 mb-3">
              {lang === "ar"
                ? "تم تسليم محتواك إلى حسابك. استمتع!"
                : "Your content has been delivered to your account. Enjoy!"}
            </p>
            <Link href="/marketplace" className="btn-primary">
              {lang === "ar" ? "تابع التسوق" : "Continue shopping"}
              <ArrowRight size={16} className="ltr-only" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

function Detail({ k, v }: { k: string; v: string }) {
  return (
    <div className="bg-lavender-50 rounded-2xl p-3">
      <div className="text-xs text-navy/60">{k}</div>
      <div className="font-semibold text-navy mt-0.5">{v}</div>
    </div>
  );
}

export default function OrderConfirmPage() {
  return (
    <Suspense fallback={<div className="section">Loading…</div>}>
      <OrderConfirmInner />
    </Suspense>
  );
}
