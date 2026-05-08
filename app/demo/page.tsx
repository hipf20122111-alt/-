"use client";

import { useI18n } from "@/lib/i18n";
import WalletDemo from "@/components/WalletDemo";
import { PlayCircle } from "lucide-react";

export default function DemoPage() {
  const { lang } = useI18n();
  return (
    <div className="section">
      <div className="text-center max-w-3xl mx-auto mb-10">
        <span className="chip">
          <PlayCircle size={12} />
          {lang === "ar" ? "العرض التفاعلي الكامل" : "Full interactive walkthrough"}
        </span>
        <h1 className="heading-1 mt-4">
          {lang === "ar"
            ? "عشر شاشات. تجربة عائلة كاملة."
            : "Ten screens. A complete family journey."}
        </h1>
        <p className="mt-4 subtle">
          {lang === "ar"
            ? "تنقّل بين الشاشات. بدّل بين رؤية الوالد ورؤية الطفل. كل شيء حقيقي ما عدا البيانات."
            : "Step through the screens. Toggle Parent ↔ Child view. Everything is real except the data."}
        </p>
      </div>
      <WalletDemo />
    </div>
  );
}
