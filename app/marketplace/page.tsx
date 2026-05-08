"use client";

import { useState, useMemo } from "react";
import { useI18n } from "@/lib/i18n";
import { useCart } from "@/lib/cart";
import { products, type Product } from "@/lib/marketplace";
import { Search, ShoppingBag, Star, Plus, Check } from "lucide-react";

const CATEGORIES = [
  { id: "all", en: "All", ar: "الكل" },
  { id: "course", en: "Courses", ar: "دورات" },
  { id: "advisory", en: "Advisory", ar: "استشارات" },
  { id: "report", en: "Reports", ar: "تقارير" },
  { id: "kids", en: "Kids", ar: "للأطفال" },
];

export default function MarketplacePage() {
  const { t, lang } = useI18n();
  const { add, items } = useCart();
  const [query, setQuery] = useState("");
  const [cat, setCat] = useState("all");

  const filtered = useMemo(() => {
    return products.filter((p) => {
      const matchCat = cat === "all" || p.category === cat;
      const matchQuery =
        !query ||
        p.title.en.toLowerCase().includes(query.toLowerCase()) ||
        p.title.ar.includes(query);
      return matchCat && matchQuery;
    });
  }, [query, cat]);

  return (
    <div className="section">
      <div className="text-center max-w-2xl mx-auto mb-10">
        <span className="chip">{t.nav.marketplace}</span>
        <h1 className="heading-1 mt-4">
          {lang === "ar"
            ? "تعلّم. خطّط. ارفع وعي عائلتك المالي."
            : "Learn. Plan. Raise your family's financial awareness."}
        </h1>
        <p className="mt-4 subtle">
          {lang === "ar"
            ? "دورات، استشارات، تقارير، ومحتوى للأطفال — مختار بعناية."
            : "Courses, advisory, reports, and kids' content — handpicked."}
        </p>
      </div>

      {/* Search + filters */}
      <div className="flex flex-col md:flex-row gap-3 mb-6">
        <div className="relative flex-1">
          <Search
            size={16}
            className="absolute top-1/2 -translate-y-1/2 start-3 text-navy/40"
          />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={lang === "ar" ? "ابحث..." : "Search products..."}
            className="w-full px-10 py-3 rounded-full bg-white border border-lavender-200 focus:outline-none focus:ring-2 focus:ring-lavender-300"
          />
        </div>
        <div className="flex gap-2 overflow-x-auto pb-1">
          {CATEGORIES.map((c) => (
            <button
              key={c.id}
              onClick={() => setCat(c.id)}
              className={`px-4 py-2 rounded-full text-sm font-semibold whitespace-nowrap transition-all ${
                cat === c.id
                  ? "bg-lavender-500 text-white shadow-sm"
                  : "bg-white text-navy/70 border border-lavender-200 hover:bg-lavender-50"
              }`}
            >
              {lang === "ar" ? c.ar : c.en}
            </button>
          ))}
        </div>
      </div>

      {/* Product grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {filtered.map((p) => (
          <ProductCard key={p.id} p={p} inCart={items.some((i) => i.id === p.id)} onAdd={() =>
            add({
              id: p.id,
              title: p.title,
              price: p.price,
              category: p.category,
              emoji: p.emoji,
            })
          } />
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-16 text-navy/50">
          {lang === "ar" ? "لا توجد نتائج." : "No results."}
        </div>
      )}
    </div>
  );
}

function ProductCard({
  p,
  inCart,
  onAdd,
}: {
  p: Product;
  inCart: boolean;
  onAdd: () => void;
}) {
  const { lang } = useI18n();
  return (
    <div className="card card-hover flex flex-col">
      <div className="aspect-square rounded-2xl bg-gradient-to-br from-lavender-100 to-lavender-200 flex items-center justify-center text-6xl mb-4">
        {p.emoji}
      </div>
      <div className="flex items-center gap-2 mb-2">
        <span className="chip">
          {p.category}
        </span>
        {p.level && (
          <span className="text-xs text-navy/50 font-semibold uppercase">
            {p.level}
          </span>
        )}
      </div>
      <h3 className="font-bold text-navy text-sm leading-snug">
        {lang === "ar" ? p.title.ar : p.title.en}
      </h3>
      <p className="mt-1.5 text-xs text-navy/60 leading-relaxed flex-1">
        {lang === "ar" ? p.desc.ar : p.desc.en}
      </p>
      <div className="flex items-center gap-2 mt-3 text-xs text-navy/60">
        <Star size={12} className="text-gold fill-gold" />
        <span className="font-semibold">{p.rating}</span>
        {p.duration && <>· <span>{p.duration}</span></>}
      </div>
      <div className="flex items-center justify-between mt-4">
        <div className="text-lg font-bold text-navy">
          SAR {p.price}
        </div>
        <button
          onClick={onAdd}
          disabled={inCart}
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold transition-all ${
            inCart
              ? "bg-emerald-100 text-emerald-700 cursor-default"
              : "bg-lavender-500 text-white hover:bg-lavender-600"
          }`}
        >
          {inCart ? (
            <>
              <Check size={14} />
              {lang === "ar" ? "في السلة" : "In cart"}
            </>
          ) : (
            <>
              <Plus size={14} />
              {lang === "ar" ? "أضف" : "Add"}
            </>
          )}
        </button>
      </div>
    </div>
  );
}
