"use client";

import { useI18n } from "@/lib/i18n";
import { Globe } from "lucide-react";

export default function LanguageToggle({
  variant = "default",
}: {
  variant?: "default" | "compact";
}) {
  const { lang, toggle } = useI18n();
  const label = lang === "en" ? "العربية" : "English";

  if (variant === "compact") {
    return (
      <button
        onClick={toggle}
        className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/70 hover:bg-white border border-lavender-200 text-sm font-semibold text-lavender-700 transition-all"
        aria-label="Toggle language"
      >
        <Globe size={14} />
        {label}
      </button>
    );
  }

  return (
    <button
      onClick={toggle}
      className="flex items-center gap-2 px-4 py-2 rounded-full bg-white hover:bg-lavender-50 border border-lavender-200 text-sm font-semibold text-navy transition-all shadow-sm"
      aria-label="Toggle language"
    >
      <Globe size={16} />
      {label}
    </button>
  );
}
