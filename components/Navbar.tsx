"use client";

import Link from "next/link";
import { useState } from "react";
import { useI18n } from "@/lib/i18n";
import { useCart } from "@/lib/cart";
import LanguageToggle from "./LanguageToggle";
import Logo from "./Logo";
import { Menu, ShoppingBag, X } from "lucide-react";

export default function Navbar() {
  const { t } = useI18n();
  const { count } = useCart();
  const [open, setOpen] = useState(false);

  const links = [
    { href: "/", label: t.nav.home },
    { href: "/services", label: t.nav.services },
    { href: "/wallet", label: t.nav.wallet },
    { href: "/junior", label: t.nav.junior },
    { href: "/marketplace", label: t.nav.marketplace },
    { href: "/pricing", label: t.nav.pricing },
    { href: "/about", label: t.nav.about },
    { href: "/trust", label: t.nav.trust },
    { href: "/demo", label: t.nav.demo },
  ];

  return (
    <header className="sticky top-0 z-50 glass border-b border-lavender-100">
      <nav className="max-w-7xl mx-auto px-4 md:px-8 h-16 flex items-center justify-between gap-4">
        <Link href="/" className="flex-shrink-0">
          <Logo />
        </Link>

        <div className="hidden lg:flex items-center gap-1">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="px-3 py-2 text-sm font-medium text-navy/70 hover:text-lavender-600 rounded-lg hover:bg-lavender-50 transition-all"
            >
              {l.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <Link
            href="/cart"
            className="relative p-2 rounded-full hover:bg-lavender-50 transition-colors"
            aria-label="Cart"
          >
            <ShoppingBag size={20} className="text-navy" />
            {count > 0 && (
              <span className="absolute -top-1 -right-1 bg-gold text-navy text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">
                {count}
              </span>
            )}
          </Link>
          <LanguageToggle variant="compact" />
          <Link
            href="/login"
            className="hidden md:inline-flex px-4 py-1.5 text-sm font-semibold text-lavender-700 hover:bg-lavender-50 rounded-full transition-colors"
          >
            {t.nav.login}
          </Link>
          <Link
            href="/early-access"
            className="hidden md:inline-flex px-4 py-1.5 text-sm font-semibold bg-lavender-500 text-white hover:bg-lavender-600 rounded-full shadow-sm transition-all"
          >
            {t.nav.getApp}
          </Link>
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden p-2 rounded-lg hover:bg-lavender-50"
            aria-label="Menu"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="lg:hidden border-t border-lavender-100 bg-white">
          <div className="px-4 py-3 flex flex-col gap-1">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="px-3 py-2 text-sm font-medium text-navy/80 hover:bg-lavender-50 rounded-lg"
              >
                {l.label}
              </Link>
            ))}
            <div className="flex gap-2 pt-2 border-t border-lavender-100 mt-2">
              <Link
                href="/login"
                onClick={() => setOpen(false)}
                className="flex-1 text-center px-4 py-2 text-sm font-semibold text-lavender-700 border border-lavender-200 rounded-full"
              >
                {t.nav.login}
              </Link>
              <Link
                href="/early-access"
                onClick={() => setOpen(false)}
                className="flex-1 text-center px-4 py-2 text-sm font-semibold bg-lavender-500 text-white rounded-full"
              >
                {t.nav.getApp}
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
