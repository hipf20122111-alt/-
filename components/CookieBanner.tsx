"use client";

import { useEffect, useState } from "react";
import { useI18n } from "@/lib/i18n";
import { Cookie, ShieldCheck } from "lucide-react";

export default function CookieBanner() {
  const { t } = useI18n();
  const [show, setShow] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("tharwa.cookies");
    if (!stored) {
      const timer = setTimeout(() => setShow(true), 800);
      return () => clearTimeout(timer);
    }
  }, []);

  const handle = (choice: "accept" | "reject" | "manage") => {
    localStorage.setItem("tharwa.cookies", choice);
    setShow(false);
  };

  if (!show) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 md:left-6 md:right-auto md:bottom-6 md:max-w-md z-[60] animate-slide-up">
      <div className="glass rounded-3xl shadow-glow p-5 border border-lavender-200">
        <div className="flex items-start gap-3">
          <div className="w-10 h-10 rounded-full bg-lavender-100 flex items-center justify-center flex-shrink-0">
            <Cookie size={18} className="text-lavender-600" />
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-1">
              <h3 className="font-semibold text-navy text-sm">
                {t.cookies.title}
              </h3>
              <span className="chip-gold gap-1">
                <ShieldCheck size={10} />
                PDPL
              </span>
            </div>
            <p className="text-xs text-navy/70 leading-relaxed mb-3">
              {t.cookies.body}
            </p>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => handle("accept")}
                className="px-3 py-1.5 text-xs font-semibold bg-lavender-500 text-white rounded-full hover:bg-lavender-600"
              >
                {t.cookies.accept}
              </button>
              <button
                onClick={() => handle("reject")}
                className="px-3 py-1.5 text-xs font-semibold bg-white text-navy rounded-full border border-lavender-200 hover:bg-lavender-50"
              >
                {t.cookies.reject}
              </button>
              <button
                onClick={() => handle("manage")}
                className="px-3 py-1.5 text-xs font-semibold text-lavender-600 hover:bg-lavender-50 rounded-full"
              >
                {t.cookies.manage}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
