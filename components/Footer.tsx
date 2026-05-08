"use client";

import Link from "next/link";
import { useI18n } from "@/lib/i18n";
import Logo from "./Logo";
import { Instagram, Twitter, Linkedin } from "lucide-react";

export default function Footer() {
  const { t, lang } = useI18n();
  const year = new Date().getFullYear();

  return (
    <footer className="mt-24 border-t border-lavender-100 bg-gradient-to-b from-cream to-lavender-50/40">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          <div className="col-span-2">
            <Logo />
            <p className="mt-3 text-sm text-navy/60 max-w-xs leading-relaxed">
              {t.footer.tagline}
            </p>
            <div className="mt-4 flex items-center gap-3">
              <a
                href="https://instagram.com/tharwa"
                className="p-2 rounded-full bg-white border border-lavender-200 hover:bg-lavender-50"
                aria-label="Instagram"
              >
                <Instagram size={16} />
              </a>
              <a
                href="https://x.com/tharwa"
                className="p-2 rounded-full bg-white border border-lavender-200 hover:bg-lavender-50"
                aria-label="X"
              >
                <Twitter size={16} />
              </a>
              <a
                href="https://linkedin.com/company/tharwa"
                className="p-2 rounded-full bg-white border border-lavender-200 hover:bg-lavender-50"
                aria-label="LinkedIn"
              >
                <Linkedin size={16} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-navy mb-3 text-sm">
              {t.footer.product}
            </h4>
            <ul className="space-y-2 text-sm text-navy/70">
              <li>
                <Link href="/wallet" className="hover:text-lavender-600">
                  {t.nav.wallet}
                </Link>
              </li>
              <li>
                <Link href="/junior" className="hover:text-lavender-600">
                  {t.nav.junior}
                </Link>
              </li>
              <li>
                <Link href="/marketplace" className="hover:text-lavender-600">
                  {t.nav.marketplace}
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="hover:text-lavender-600">
                  {t.nav.pricing}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-navy mb-3 text-sm">
              {t.footer.company}
            </h4>
            <ul className="space-y-2 text-sm text-navy/70">
              <li>
                <Link href="/about" className="hover:text-lavender-600">
                  {t.nav.about}
                </Link>
              </li>
              <li>
                <Link href="/trust" className="hover:text-lavender-600">
                  {t.nav.trust}
                </Link>
              </li>
              <li>
                <Link href="/demo" className="hover:text-lavender-600">
                  {t.nav.demo}
                </Link>
              </li>
              <li>
                <Link href="/early-access" className="hover:text-lavender-600">
                  {t.nav.getApp}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-navy mb-3 text-sm">
              {t.footer.legal}
            </h4>
            <ul className="space-y-2 text-sm text-navy/70">
              <li>
                <Link href="/trust" className="hover:text-lavender-600">
                  {t.footer.privacy}
                </Link>
              </li>
              <li>
                <Link href="/trust" className="hover:text-lavender-600">
                  {t.footer.terms}
                </Link>
              </li>
              <li>
                <Link href="/trust" className="hover:text-lavender-600">
                  {t.footer.pdpl}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-lavender-100 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-xs text-navy/50">
            © {year} Tharwa. {t.footer.rights}
          </p>
          <p className="text-xs text-navy/50">
            {lang === "ar"
              ? "مرخّص ضمن منظومة فينتك السعودية"
              : "Built within the Saudi FinTech ecosystem · PDPL compliant"}
          </p>
        </div>
      </div>
    </footer>
  );
}
