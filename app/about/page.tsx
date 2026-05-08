"use client";

import { useI18n } from "@/lib/i18n";
import { Building2, Users, Target, Sparkles } from "lucide-react";

export default function AboutPage() {
  const { t, lang } = useI18n();

  const team = [
    {
      name: "Rayan Z. Alahmadi",
      role: "CIO",
      owns:
        lang === "ar"
          ? "الاستراتيجية، التمويل، العلاقات المؤسسية، الموقع السوقي."
          : "Strategy, fundraising, institutional relationships, market positioning.",
      avatar: "RA",
    },
    {
      name: "Mohannad Fallatah",
      role: "CFO",
      owns:
        lang === "ar"
          ? "التخطيط المالي، التمويل، إدارة الموردين، التقارير."
          : "Financial planning, fundraising, vendor management, reporting.",
      avatar: "MF",
    },
    {
      name: "Hamza Darandari",
      role: "CTO",
      owns:
        lang === "ar"
          ? "البنية، الأمان، الواجهات البرمجية، نموذج البيانات، الاعتمادية."
          : "Architecture, security, APIs, data model, platform reliability.",
      avatar: "HD",
    },
    {
      name: "Abdullah Almalki",
      role: "Head of Product",
      owns:
        lang === "ar"
          ? "تجربة الوالدين والـJunior، البحث، تحديد الأولويات."
          : "Parent and Junior experiences, research, prioritisation.",
      avatar: "AA",
    },
  ];

  return (
    <div className="section">
      <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
        <div>
          <span className="chip">{t.nav.about}</span>
          <h1 className="heading-1 mt-4">{t.about.title}</h1>
          <p className="mt-5 text-lg text-navy/80 leading-relaxed">
            {t.about.story}
          </p>
        </div>
        <div className="card bg-lavender-gradient text-white border-0">
          <div className="flex items-center gap-2 mb-3">
            <Target size={18} className="text-gold-200" />
            <span className="text-xs uppercase tracking-widest text-gold-200">
              {lang === "ar" ? "مهمتنا" : "Our mission"}
            </span>
          </div>
          <p className="text-lg leading-relaxed">{t.about.mission}</p>
        </div>
      </div>

      {/* Vision 2030 alignment */}
      <div className="mb-16">
        <div className="text-center mb-8">
          <h2 className="heading-2">
            {lang === "ar" ? "متوافق مع رؤية 2030" : "Aligned with Vision 2030"}
          </h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          <V30
            t={
              lang === "ar"
                ? "تطوير القطاع المالي"
                : "Financial Sector Development"
            }
            d={
              lang === "ar"
                ? "ادخار وأهداف عبر شركاء مرخّصين."
                : "Goal-based savings via licensed partners."
            }
          />
          <V30
            t={lang === "ar" ? "جودة الحياة" : "Quality of Life"}
            d={
              lang === "ar"
                ? "تخفيف الضغط المالي بالشفافية."
                : "Reducing financial stress with transparency."
            }
          />
          <V30
            t={
              lang === "ar"
                ? "تنمية القدرات البشرية"
                : "Human Capability Development"
            }
            d={
              lang === "ar"
                ? "Junior يكمل ما تعلّمه المدرسة."
                : "Junior delivers what schools teach."
            }
          />
          <V30
            t={lang === "ar" ? "الاقتصاد الرقمي" : "Digital Economy"}
            d={
              lang === "ar"
                ? "عيدية رقمية، فواتير، Open Banking."
                : "Digital Eidiya, bills, Open Banking."
            }
          />
        </div>
      </div>

      {/* Team */}
      <div>
        <div className="text-center mb-8">
          <h2 className="heading-2">{t.about.teamTitle}</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {team.map((m) => (
            <div key={m.name} className="card card-hover text-center">
              <div className="w-20 h-20 mx-auto rounded-full bg-lavender-gradient text-white flex items-center justify-center text-2xl font-bold shadow-glow">
                {m.avatar}
              </div>
              <h3 className="mt-4 font-bold text-navy">{m.name}</h3>
              <div className="text-xs font-semibold text-lavender-600 mt-0.5 uppercase tracking-wide">
                {m.role}
              </div>
              <p className="mt-2 text-sm text-navy/70 leading-relaxed">
                {m.owns}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Partners */}
      <div className="mt-16 rounded-4xl bg-soft-lavender p-8 md:p-12">
        <div className="flex items-center gap-2 justify-center mb-2">
          <Building2 size={18} className="text-lavender-600" />
          <span className="text-xs uppercase tracking-widest text-lavender-700">
            {lang === "ar" ? "الشركاء الاستراتيجيون" : "Strategic partners"}
          </span>
        </div>
        <h3 className="text-center heading-3 mb-6">
          {lang === "ar"
            ? "نُبنى على المرخّص. ونتميّز فيما لا يستطيع أحد نسخه."
            : "Built on the licensed. Differentiated on what no one can copy."}
        </h3>
        <div className="grid md:grid-cols-3 gap-4">
          <Partner
            t="Neoleap (نيوليب)"
            sub={
              lang === "ar" ? "Open Banking · Al Rajhi" : "Open Banking · Al Rajhi"
            }
          />
          <Partner
            t="CMA-licensed brokers"
            sub={
              lang === "ar"
                ? "استثمار حقيقي للأطفال (السنة الثانية)"
                : "Real kids' investing (Year 2)"
            }
          />
          <Partner
            t="Nafath / Absher"
            sub={
              lang === "ar" ? "هوية وطنية مدمجة" : "National identity verification"
            }
          />
        </div>
      </div>
    </div>
  );
}

function V30({ t, d }: { t: string; d: string }) {
  return (
    <div className="card card-hover">
      <Sparkles size={18} className="text-gold mb-2" />
      <h4 className="font-bold text-navy text-sm">{t}</h4>
      <p className="mt-1.5 text-xs text-navy/70 leading-relaxed">{d}</p>
    </div>
  );
}

function Partner({ t, sub }: { t: string; sub: string }) {
  return (
    <div className="bg-white rounded-2xl p-5 border border-lavender-100 text-center">
      <div className="font-bold text-navy">{t}</div>
      <div className="text-xs text-navy/60 mt-0.5">{sub}</div>
    </div>
  );
}
