"use client";

import { useI18n } from "@/lib/i18n";
import WalletDemo from "@/components/WalletDemo";
import { Sparkles } from "lucide-react";

export default function WalletPage() {
  const { t, lang } = useI18n();
  return (
    <div className="section">
      <div className="text-center max-w-2xl mx-auto mb-10">
        <span className="chip">
          <Sparkles size={12} />
          {lang === "ar" ? "تفاعلي" : "Interactive"}
        </span>
        <h1 className="heading-1 mt-4">{t.wallet.title}</h1>
        <p className="mt-4 subtle">{t.wallet.subtitle}</p>
      </div>
      <WalletDemo />
    </div>
  );
}
