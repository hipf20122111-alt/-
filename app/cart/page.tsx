"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useI18n } from "@/lib/i18n";
import { useCart } from "@/lib/cart";
import {
  Minus,
  Plus,
  Trash2,
  ShoppingBag,
  Lock,
  CreditCard,
  Smartphone,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";

export default function CartPage() {
  const { lang } = useI18n();
  const { items, total, setQty, remove, clear } = useCart();
  const router = useRouter();
  const [step, setStep] = useState<"cart" | "shipping" | "payment">("cart");
  const [paymentMethod, setPaymentMethod] = useState<"mada" | "applepay" | "stcpay">("mada");

  const vat = total * 0.15;
  const grand = total + vat;

  if (items.length === 0) {
    return (
      <div className="section">
        <div className="text-center py-20">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-lavender-100 mb-5">
            <ShoppingBag size={32} className="text-lavender-500" />
          </div>
          <h1 className="heading-2">
            {lang === "ar" ? "سلتك فارغة" : "Your cart is empty"}
          </h1>
          <p className="mt-3 subtle">
            {lang === "ar"
              ? "تصفّح المتجر للعثور على دورات وتقارير ومحتوى عائلي."
              : "Browse the marketplace for courses, reports, and family content."}
          </p>
          <Link
            href="/marketplace"
            className="btn-primary mt-6 inline-flex"
          >
            {lang === "ar" ? "اذهب للمتجر" : "Go to marketplace"}
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="section">
      <div className="mb-8">
        <h1 className="heading-2">
          {lang === "ar" ? "سلة المشتريات" : "Your cart"}
        </h1>
        <Steps step={step} />
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-3">
          {step === "cart" && (
            <>
              {items.map((item) => (
                <div
                  key={item.id}
                  className="card flex items-center gap-4"
                >
                  <div className="w-16 h-16 rounded-2xl bg-lavender-100 flex items-center justify-center text-3xl flex-shrink-0">
                    {item.emoji}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-xs text-lavender-600 font-semibold uppercase">
                      {item.category}
                    </div>
                    <h3 className="font-semibold text-navy truncate">
                      {lang === "ar" ? item.title.ar : item.title.en}
                    </h3>
                    <div className="text-sm text-navy/60 mt-1">
                      SAR {item.price}
                    </div>
                  </div>
                  <div className="flex items-center gap-2 bg-lavender-50 rounded-full p-1">
                    <button
                      onClick={() => setQty(item.id, item.qty - 1)}
                      className="w-7 h-7 rounded-full bg-white text-navy hover:bg-lavender-100 flex items-center justify-center"
                    >
                      <Minus size={12} />
                    </button>
                    <span className="text-sm font-bold text-navy min-w-[20px] text-center">
                      {item.qty}
                    </span>
                    <button
                      onClick={() => setQty(item.id, item.qty + 1)}
                      className="w-7 h-7 rounded-full bg-white text-navy hover:bg-lavender-100 flex items-center justify-center"
                    >
                      <Plus size={12} />
                    </button>
                  </div>
                  <button
                    onClick={() => remove(item.id)}
                    className="p-2 text-navy/40 hover:text-rose-500 transition-colors"
                    aria-label="Remove"
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              ))}
            </>
          )}

          {step === "shipping" && <ShippingForm lang={lang} />}

          {step === "payment" && (
            <PaymentForm
              lang={lang}
              method={paymentMethod}
              setMethod={setPaymentMethod}
            />
          )}
        </div>

        {/* Summary */}
        <div className="lg:col-span-1">
          <div className="card sticky top-20">
            <h3 className="font-bold text-navy mb-4">
              {lang === "ar" ? "ملخص الطلب" : "Order summary"}
            </h3>
            <Row
              k={lang === "ar" ? "المجموع الفرعي" : "Subtotal"}
              v={`SAR ${total.toFixed(2)}`}
            />
            <Row
              k={lang === "ar" ? "ضريبة القيمة المضافة (١٥٪)" : "VAT (15%)"}
              v={`SAR ${vat.toFixed(2)}`}
            />
            <div className="border-t border-lavender-100 my-3" />
            <Row
              k={lang === "ar" ? "الإجمالي" : "Total"}
              v={`SAR ${grand.toFixed(2)}`}
              bold
            />

            <button
              onClick={() => {
                if (step === "cart") setStep("shipping");
                else if (step === "shipping") setStep("payment");
                else {
                  clear();
                  router.push(`/order-confirm?total=${grand.toFixed(2)}`);
                }
              }}
              className="btn-primary w-full mt-5"
            >
              {step === "cart" &&
                (lang === "ar" ? "متابعة الشراء" : "Continue to checkout")}
              {step === "shipping" &&
                (lang === "ar" ? "اذهب للدفع" : "Go to payment")}
              {step === "payment" &&
                (lang === "ar" ? "ادفع الآن" : "Pay now")}
              <ArrowRight size={16} className="ltr-only" />
            </button>

            <div className="mt-4 flex items-center justify-center gap-2 text-xs text-navy/60">
              <Lock size={12} />
              <span>
                {lang === "ar"
                  ? "دفع آمن · PCI-DSS Level 1"
                  : "Secure payment · PCI-DSS Level 1"}
              </span>
            </div>
            <div className="mt-3 flex items-center justify-center gap-2 text-xs text-navy/60">
              <ShieldCheck size={12} className="text-emerald-500" />
              <span>
                {lang === "ar"
                  ? "ضمان استرداد ١٤ يوم"
                  : "14-day money-back guarantee"}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Steps({ step }: { step: string }) {
  const { lang } = useI18n();
  const labels = [
    { id: "cart", label: lang === "ar" ? "السلة" : "Cart" },
    { id: "shipping", label: lang === "ar" ? "البيانات" : "Details" },
    { id: "payment", label: lang === "ar" ? "الدفع" : "Payment" },
  ];
  return (
    <div className="flex items-center gap-2 mt-4">
      {labels.map((l, i) => (
        <div key={l.id} className="flex items-center gap-2">
          <div
            className={`flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold ${
              step === l.id
                ? "bg-lavender-500 text-white"
                : "bg-lavender-100 text-lavender-700"
            }`}
          >
            <span>{i + 1}</span>
            <span>{l.label}</span>
          </div>
          {i < labels.length - 1 && (
            <div className="w-6 h-px bg-lavender-200" />
          )}
        </div>
      ))}
    </div>
  );
}

function Row({ k, v, bold = false }: { k: string; v: string; bold?: boolean }) {
  return (
    <div
      className={`flex items-center justify-between py-1.5 ${
        bold ? "font-bold text-navy text-lg" : "text-sm text-navy/70"
      }`}
    >
      <span>{k}</span>
      <span>{v}</span>
    </div>
  );
}

function ShippingForm({ lang }: { lang: string }) {
  return (
    <div className="card space-y-4">
      <h3 className="font-bold text-navy">
        {lang === "ar" ? "بيانات الفاتورة" : "Billing details"}
      </h3>
      <div className="grid sm:grid-cols-2 gap-3">
        <Field label={lang === "ar" ? "الاسم الأول" : "First name"} placeholder="Ahmed" />
        <Field label={lang === "ar" ? "الاسم الأخير" : "Last name"} placeholder="Al Saud" />
      </div>
      <Field label={lang === "ar" ? "البريد الإلكتروني" : "Email"} type="email" placeholder="ahmed@email.com" />
      <Field label={lang === "ar" ? "رقم الجوال" : "Phone"} placeholder="+966 5X XXX XXXX" />
      <Field label={lang === "ar" ? "المدينة" : "City"} placeholder={lang === "ar" ? "الرياض" : "Riyadh"} />

      <div className="rounded-2xl bg-lavender-50 p-3 flex items-start gap-2 text-xs text-navy/70 mt-2">
        <ShieldCheck size={14} className="text-lavender-600 flex-shrink-0 mt-0.5" />
        <span>
          {lang === "ar"
            ? "بياناتك محمية وفق نظام حماية البيانات السعودي (PDPL)."
            : "Your data is protected under Saudi PDPL with encryption at rest and in transit."}
        </span>
      </div>
    </div>
  );
}

function PaymentForm({
  lang,
  method,
  setMethod,
}: {
  lang: string;
  method: "mada" | "applepay" | "stcpay";
  setMethod: (m: "mada" | "applepay" | "stcpay") => void;
}) {
  const methods = [
    { id: "mada", label: "Mada / Visa / Mastercard", icon: CreditCard },
    { id: "applepay", label: "Apple Pay", icon: Smartphone },
    { id: "stcpay", label: "STC Pay", icon: Smartphone },
  ] as const;

  return (
    <div className="card space-y-4">
      <h3 className="font-bold text-navy">
        {lang === "ar" ? "اختر طريقة الدفع" : "Choose a payment method"}
      </h3>
      <div className="space-y-2">
        {methods.map((m) => {
          const Icon = m.icon;
          const active = method === m.id;
          return (
            <button
              key={m.id}
              onClick={() => setMethod(m.id)}
              className={`w-full flex items-center gap-3 p-4 rounded-2xl border-2 transition-all text-start ${
                active
                  ? "border-lavender-500 bg-lavender-50"
                  : "border-lavender-100 bg-white hover:bg-lavender-50/50"
              }`}
            >
              <div
                className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                  active ? "border-lavender-500" : "border-lavender-200"
                }`}
              >
                {active && (
                  <div className="w-2.5 h-2.5 rounded-full bg-lavender-500" />
                )}
              </div>
              <Icon size={20} className="text-lavender-600" />
              <span className="font-semibold text-navy">{m.label}</span>
            </button>
          );
        })}
      </div>

      {method === "mada" && (
        <div className="space-y-3 pt-2">
          <Field
            label={lang === "ar" ? "رقم البطاقة" : "Card number"}
            placeholder="•••• •••• •••• ••••"
          />
          <div className="grid grid-cols-2 gap-3">
            <Field label="MM/YY" placeholder="12/28" />
            <Field label="CVC" placeholder="•••" />
          </div>
        </div>
      )}

      <div className="rounded-2xl bg-emerald-50 p-3 flex items-start gap-2 text-xs text-emerald-800 mt-3">
        <Lock size={14} className="flex-shrink-0 mt-0.5" />
        <span>
          {lang === "ar"
            ? "بطاقتك محميّة بتوكنة وتشفير TLS 1.3. لا نخزّن بيانات البطاقة."
            : "Your card is protected by tokenisation and TLS 1.3. We never store card data."}
        </span>
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
  placeholder?: string;
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
        className="w-full px-4 py-2.5 rounded-xl bg-white border border-lavender-200 focus:outline-none focus:ring-2 focus:ring-lavender-300 text-sm"
      />
    </div>
  );
}
