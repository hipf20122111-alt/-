export type Lang = "en" | "ar";

export const translations = {
  en: {
    nav: {
      home: "Home",
      services: "Services",
      wallet: "Wallet",
      junior: "Junior",
      marketplace: "Marketplace",
      pricing: "Pricing",
      about: "About",
      trust: "Trust & Security",
      demo: "Demo",
      login: "Sign In",
      getApp: "Get the App",
    },
    hero: {
      tagline: "Saudi family financial planning, reimagined",
      title: "The Digital Home of",
      titleAccent: "Family Wealth",
      subtitle:
        "One electronic wallet for the whole Saudi family. Connect every bank, manage every bill, save every Riyal — and teach your kids how money really works.",
      ctaPrimary: "Try the Live Demo",
      ctaSecondary: "Watch how it works",
      stat1: "Saudi households",
      stat1Val: "5.6M",
      stat2: "Saudi banks supported",
      stat2Val: "All",
      stat3: "Vision 2030 aligned",
      stat3Val: "4 programs",
    },
    pillars: {
      title: "Built for the family, not the individual",
      subtitle: "Four pillars working as one.",
      familyHub: {
        title: "Family Hub",
        desc: "Multi-bank Open Banking, Three-Bucket allocation, AI Advisor, bill payment, debt visibility.",
      },
      junior: {
        title: "Tharwa Junior",
        desc: "Age-banded learning, Avatar progression, virtual Tadawul Investment Game, parental controls.",
      },
      ai: {
        title: "AI Advisor",
        desc: "Personalized salary distribution, subscription bloat detection, AAOIFI-compliant Smart Zakat.",
      },
      marketplace: {
        title: "Marketplace",
        desc: "Curated financial-literacy courses, expert sessions, advisory packages — for the whole family.",
      },
    },
    problems: {
      title: "10 family problems. One platform.",
      list: [
        {
          q: "Family doesn't know where the money goes",
          a: "Connect every Saudi bank in one dashboard via Open Banking through Neoleap. Each adult keeps individual privacy.",
        },
        {
          q: "No proper salary allocation",
          a: "AI Advisor proposes the right split across Assets, Liabilities, and Expenses.",
        },
        {
          q: "Bills get missed and subscriptions drain the salary",
          a: "Full bill registry + alerts. Subscription detection finds Netflix, Shahid, iCloud, gaming charges.",
        },
        {
          q: "Maid salary paid in cash, no record",
          a: "Monthly tracking + electronic acknowledgement + a certified salary record at end of contract.",
        },
        {
          q: "No way to save for shared family goals",
          a: "Goal-based pots — Hajj, marriage, university, travel — with selective participation across the extended family.",
        },
        {
          q: "Kids don't understand money value",
          a: "Tharwa Junior — AI coach, age-banded tasks, Avatar that grows with savings habits.",
        },
        {
          q: "No safe way to teach kids investing",
          a: "Virtual Tadawul Investment Game with real prices and a virtual balance — for ages 14+.",
        },
        {
          q: "Zakat is hard to calculate across shared pots",
          a: "Smart Zakat engine aligned with AAOIFI Standard 35. Tracks each share's hawl independently.",
        },
        {
          q: "Financial reporting is manual Excel",
          a: "Periodic clear reports + AI Advisor + spending tips, automatically.",
        },
        {
          q: "Adults still need privacy inside a shared family",
          a: "Granular Privacy Center per account, per category, per goal — PDPL-aligned.",
        },
      ],
    },
    cta: {
      title: "Ready to take control of your family's finances?",
      subtitle:
        "Join the waitlist. Be among the first Saudi families to plan, save, and learn — together.",
      button: "Join Early Access",
    },
    footer: {
      tagline: "A Saudi family financial planning platform.",
      product: "Product",
      company: "Company",
      legal: "Legal",
      social: "Follow Us",
      privacy: "Privacy Policy",
      terms: "Terms of Service",
      pdpl: "PDPL Compliance",
      cookies: "Cookie Settings",
      rights: "All rights reserved.",
    },
    cookies: {
      title: "We respect your privacy",
      body: "Tharwa uses cookies to deliver a secure, personalized experience aligned with Saudi PDPL. You can accept all, manage preferences, or reject non-essential cookies.",
      accept: "Accept All",
      reject: "Reject Non-Essential",
      manage: "Manage Preferences",
    },
    pricing: {
      title: "Simple pricing for every Saudi family",
      subtitle: "Start free. Upgrade when your family grows into it.",
      monthly: "Monthly",
      annual: "Annual (save 20%)",
      tiers: [
        {
          name: "Freemium",
          price: "SAR 0",
          period: "forever",
          features: [
            "One bank connection",
            "Basic dashboard",
            "Tharwa Junior — 1 child",
            "AI Advisor — 5 queries/month",
          ],
          cta: "Start Free",
        },
        {
          name: "Family",
          price: "SAR 49",
          period: "/month",
          highlight: true,
          features: [
            "Unlimited bank connections",
            "Unlimited Junior children",
            "Full parental controls",
            "Shared goal pots",
            "Subscription tracker",
            "Debt tracking",
            "Smart Zakat (AAOIFI)",
            "AI Advisor — unlimited",
          ],
          cta: "Start 14-day Trial",
        },
        {
          name: "Family Pro",
          price: "SAR 99",
          period: "/month",
          features: [
            "Everything in Family",
            "Expert advisor escalation",
            "Dedicated account manager",
            "Advanced Zakat planning",
            "Investment recommendations",
            "Multi-family pot sharing",
            "Advanced gamified avatars",
            "Tadawul simulations",
          ],
          cta: "Talk to us",
        },
      ],
    },
    trust: {
      title: "Trust is engineered, not claimed",
      subtitle:
        "Six dimensions of e-commerce security. Saudi-first compliance. Plain language for every parent.",
      pillars: [
        { t: "Integrity", d: "TLS 1.3, AES-256 at rest, signed audit logs." },
        { t: "Authenticity", d: "Nafath / Absher, MFA, biometric on mobile." },
        {
          t: "Confidentiality",
          d: "Role-based access, adult data hidden by default, child data segregated.",
        },
        {
          t: "Privacy",
          d: "Granular Privacy Center. PDPL-aligned export and deletion.",
        },
        {
          t: "Non-repudiation",
          d: "Every consent + approval logged with timestamp, IP, device.",
        },
        { t: "Availability", d: "Multi-AZ cloud. 99.9% uptime. Partner failover." },
      ],
      compliance: "PDPL · SDAIA · NCA · AAOIFI Standard 35 · SAMA Open Banking",
    },
    about: {
      title: "Why we built Tharwa",
      story:
        "Saudi families share money. Apps don't. A father pays the rent, the mother handles groceries, the grandmother sends Eidiya, the uncle wants to help with Hajj. Nobody sees the whole picture. We fixed that.",
      mission:
        "Help Saudi families plan, save, invest long-term, and learn together. Respect each adult's privacy. Stay aligned with PDPL, SDAIA, and AAOIFI Zakat standards.",
      teamTitle: "The founding team",
    },
    wallet: {
      title: "The Family Wallet",
      subtitle: "One wallet. Every Saudi bank. Every family member.",
      totalNetWorth: "Total Family Net Worth",
      buckets: { assets: "Assets", liabilities: "Liabilities", expenses: "Expenses" },
      members: "Family Members",
      goals: "Shared Goals",
      bills: "Upcoming Bills",
      maid: "Domestic Staff Payroll",
      zakat: "Smart Zakat",
    },
    common: {
      learnMore: "Learn more",
      getStarted: "Get started",
      back: "Back",
      next: "Next",
      continue: "Continue",
      tryDemo: "Try the demo",
      switchLang: "العربية",
    },
  },
  ar: {
    nav: {
      home: "الرئيسية",
      services: "الخدمات",
      wallet: "المحفظة",
      junior: "ثروة جونيور",
      marketplace: "المتجر",
      pricing: "الأسعار",
      about: "من نحن",
      trust: "الأمان والثقة",
      demo: "العرض التفاعلي",
      login: "تسجيل الدخول",
      getApp: "حمّل التطبيق",
    },
    hero: {
      tagline: "تخطيط مالي للعائلة السعودية، بشكل جديد",
      title: "البيت الرقمي",
      titleAccent: "لثروة العائلة",
      subtitle:
        "محفظة إلكترونية واحدة لكل أفراد العائلة السعودية. اربط جميع البنوك، أدِر كل فاتورة، ووفّر كل ريال — وعلّم أطفالك المال بطريقة صحيحة.",
      ctaPrimary: "جرّب العرض المباشر",
      ctaSecondary: "شاهد كيف تعمل",
      stat1: "أسرة سعودية",
      stat1Val: "5.6 مليون",
      stat2: "البنوك السعودية",
      stat2Val: "جميعها",
      stat3: "متوافق مع رؤية 2030",
      stat3Val: "٤ برامج",
    },
    pillars: {
      title: "صُمّمت للعائلة، لا للفرد",
      subtitle: "أربعة أعمدة تعمل كمنظومة واحدة.",
      familyHub: {
        title: "مركز العائلة",
        desc: "ربط متعدد البنوك عبر الـOpen Banking، توزيع ثلاثي للدخل، مستشار ذكي، دفع فواتير، رؤية للديون.",
      },
      junior: {
        title: "ثروة جونيور",
        desc: "تعلّم حسب الفئة العمرية، شخصية أفاتار تتطور، لعبة استثمار افتراضية على تداول، تحكم كامل للوالدين.",
      },
      ai: {
        title: "المستشار الذكي",
        desc: "توزيع راتب مخصص، كشف الاشتراكات المهدورة، حساب زكاة ذكي وفق معيار AAOIFI 35.",
      },
      marketplace: {
        title: "المتجر",
        desc: "دورات مالية مختارة، جلسات خبراء، باقات استشارية — لكل أفراد العائلة.",
      },
    },
    problems: {
      title: "١٠ مشكلات للعائلة. منصة واحدة.",
      list: [
        {
          q: "العائلة لا تعرف أين تذهب أموالها",
          a: "اربط جميع البنوك السعودية في لوحة واحدة عبر شراكتنا الاستراتيجية مع نيوليب. كل بالغ يحتفظ بخصوصيته.",
        },
        {
          q: "لا يوجد توزيع صحيح للراتب",
          a: "المستشار الذكي يقترح التوزيع الأنسب بين الأصول والالتزامات والمصروفات.",
        },
        {
          q: "الفواتير تُنسى والاشتراكات تستنزف الراتب",
          a: "سجل فواتير شامل + تنبيهات. كشف الاشتراكات المهدورة من نتفليكس وشاهد وiCloud والألعاب.",
        },
        {
          q: "راتب العاملة المنزلية يُدفع نقداً بدون توثيق",
          a: "متابعة شهرية + إقرار إلكتروني بالاستلام + سجل راتب موثّق في نهاية العقد.",
        },
        {
          q: "لا توجد طريقة لادخار أهداف مشتركة",
          a: "محافظ أهداف — حج، زواج، جامعة، سفر — مع مشاركة انتقائية بين أفراد العائلة الممتدة.",
        },
        {
          q: "الأطفال لا يفهمون قيمة المال",
          a: "ثروة جونيور — مدرّب ذكي، مهام بحسب العمر، أفاتار يكبر مع عادات الادخار.",
        },
        {
          q: "لا توجد طريقة آمنة لتعليم الأطفال الاستثمار",
          a: "لعبة استثمار افتراضية على تداول بأسعار حقيقية ورصيد افتراضي — لمن هم فوق ١٤ سنة.",
        },
        {
          q: "حساب الزكاة معقّد على المحافظ المشتركة",
          a: "محرّك زكاة ذكي وفق معيار AAOIFI رقم ٣٥. يتتبّع حول كل حصة بشكل مستقل.",
        },
        {
          q: "التقارير المالية تعتمد على إكسل يدوي",
          a: "تقارير دورية واضحة + مستشار ذكي + نصائح إنفاق، تلقائياً.",
        },
        {
          q: "البالغون يحتاجون الخصوصية داخل عائلة مشتركة",
          a: "مركز خصوصية دقيق لكل حساب وفئة وهدف — متوافق مع نظام حماية البيانات (PDPL).",
        },
      ],
    },
    cta: {
      title: "جاهز لتسيطر على ماليّة عائلتك؟",
      subtitle:
        "انضم لقائمة الانتظار. كن من أوائل العائلات السعودية التي تخطط وتدّخر وتتعلّم — معاً.",
      button: "سجّل في الوصول المبكر",
    },
    footer: {
      tagline: "منصة تخطيط مالي للعائلة السعودية.",
      product: "المنتج",
      company: "الشركة",
      legal: "قانوني",
      social: "تابعنا",
      privacy: "سياسة الخصوصية",
      terms: "شروط الاستخدام",
      pdpl: "الالتزام بنظام حماية البيانات",
      cookies: "إعدادات ملفات الارتباط",
      rights: "جميع الحقوق محفوظة.",
    },
    cookies: {
      title: "نحترم خصوصيتك",
      body: "تستخدم ثروة ملفات الارتباط لتقديم تجربة آمنة ومخصّصة متوافقة مع نظام حماية البيانات السعودي. يمكنك القبول، أو الإدارة، أو الرفض.",
      accept: "قبول الكل",
      reject: "رفض غير الأساسية",
      manage: "إدارة التفضيلات",
    },
    pricing: {
      title: "أسعار بسيطة لكل عائلة سعودية",
      subtitle: "ابدأ مجاناً. ترقّى عندما تنمو احتياجات عائلتك.",
      monthly: "شهري",
      annual: "سنوي (وفّر ٢٠٪)",
      tiers: [
        {
          name: "مجاني",
          price: "٠ ريال",
          period: "للأبد",
          features: [
            "ربط بنك واحد",
            "لوحة معلومات أساسية",
            "ثروة جونيور — طفل واحد",
            "المستشار الذكي — ٥ استفسارات/شهر",
          ],
          cta: "ابدأ مجاناً",
        },
        {
          name: "العائلة",
          price: "٤٩ ريال",
          period: "/شهرياً",
          highlight: true,
          features: [
            "ربط بنوك غير محدود",
            "أطفال غير محدودين في جونيور",
            "تحكم كامل للوالدين",
            "محافظ أهداف مشتركة",
            "متابعة الاشتراكات",
            "متابعة الديون",
            "زكاة ذكية (AAOIFI)",
            "مستشار ذكي غير محدود",
          ],
          cta: "ابدأ التجربة ١٤ يوم",
        },
        {
          name: "العائلة برو",
          price: "٩٩ ريال",
          period: "/شهرياً",
          features: [
            "كل ما في العائلة",
            "استشارة خبير عند الطلب",
            "مدير حساب مخصّص",
            "تخطيط زكاة متقدم",
            "توصيات استثمارية",
            "مشاركة محافظ متعدد العائلات",
            "أفاتار جوائز متقدم",
            "محاكاة تداول",
          ],
          cta: "تواصل معنا",
        },
      ],
    },
    trust: {
      title: "الثقة تُبنى هندسياً، لا بالكلام",
      subtitle:
        "ستة أبعاد لأمن التجارة الإلكترونية. التزام سعودي أولاً. لغة واضحة لكل والد.",
      pillars: [
        { t: "السلامة", d: "TLS 1.3، تشفير AES-256، سجلات تدقيق موقّعة." },
        { t: "الأصالة", d: "نفاذ / أبشر، توثيق متعدد العوامل، بصمة على الجوال." },
        {
          t: "السرية",
          d: "وصول حسب الدور، بيانات البالغين مخفية افتراضياً، بيانات الأطفال معزولة.",
        },
        {
          t: "الخصوصية",
          d: "مركز خصوصية دقيق. تصدير وحذف وفق نظام حماية البيانات.",
        },
        {
          t: "عدم الإنكار",
          d: "كل موافقة وإقرار يُسجّل بالوقت وعنوان IP والجهاز.",
        },
        { t: "الإتاحة", d: "سحابة متعددة المناطق. ٩٩٫٩٪ تشغيل. تبديل تلقائي للشركاء." },
      ],
      compliance: "PDPL · SDAIA · NCA · معيار AAOIFI رقم ٣٥ · ساما Open Banking",
    },
    about: {
      title: "لماذا بنينا ثروة",
      story:
        "العائلات السعودية تتشارك المال، لكن التطبيقات لا تفعل. الأب يدفع الإيجار، الأم تدير المشتريات، الجدّة ترسل العيدية، العم يريد المساعدة في الحج. لا أحد يرى الصورة كاملة. نحن أصلحنا ذلك.",
      mission:
        "نساعد العائلات السعودية على التخطيط والادخار والاستثمار والتعلّم معاً. نحترم خصوصية كل بالغ. ونلتزم بنظام PDPL وSDAIA ومعايير زكاة AAOIFI.",
      teamTitle: "الفريق المؤسس",
    },
    wallet: {
      title: "محفظة العائلة",
      subtitle: "محفظة واحدة. كل البنوك السعودية. كل أفراد العائلة.",
      totalNetWorth: "صافي ثروة العائلة",
      buckets: { assets: "الأصول", liabilities: "الالتزامات", expenses: "المصروفات" },
      members: "أفراد العائلة",
      goals: "الأهداف المشتركة",
      bills: "الفواتير القادمة",
      maid: "رواتب العاملين",
      zakat: "الزكاة الذكية",
    },
    common: {
      learnMore: "اعرف أكثر",
      getStarted: "ابدأ الآن",
      back: "السابق",
      next: "التالي",
      continue: "متابعة",
      tryDemo: "جرّب العرض",
      switchLang: "English",
    },
  },
} as const;

export type TranslationDict = typeof translations.en;
