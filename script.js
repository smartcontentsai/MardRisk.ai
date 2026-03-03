(() => {
  // 1) Set your bot link here:
  // Example: https://t.me/YourBotUsername
  const BOT_LINK = "https://t.me/MardRiskv2_bot";

  const $ = (sel) => document.querySelector(sel);

  // CTA links
  const ctas = [
    "#ctaTelegramTop",
    "#ctaTelegramHero",
    "#ctaTelegramCard",
    "#ctaTelegramFree",
    "#ctaTelegramPremium",
    "#ctaTelegramBottom",
    "#ctaTelegramFooter",
    "#ctaTelegramMobile",
  ];

  function applyBotLink() {
    ctas.forEach((id) => {
      const el = $(id);
      if (el) el.href = BOT_LINK;
    });
  }

  // Mobile menu
  const burger = $("#burger");
  const mobileNav = $("#mobileNav");
  if (burger && mobileNav) {
    burger.addEventListener("click", () => {
      const open = mobileNav.classList.toggle("mobileNav--open");
      burger.setAttribute("aria-expanded", String(open));
      mobileNav.setAttribute("aria-hidden", String(!open));
    });

    mobileNav.querySelectorAll("a").forEach((a) => {
      a.addEventListener("click", () => {
        mobileNav.classList.remove("mobileNav--open");
        burger.setAttribute("aria-expanded", "false");
        mobileNav.setAttribute("aria-hidden", "true");
      });
    });
  }

  // Language
  const dict = {
    hy: {
      brandTag: "Ֆինանսական ռիսկի AI օգնական",
      navFeatures: "Ֆունկցիաներ",
      navPricing: "Գներ",
      navHow: "Ինչպես է աշխատում",
      navFaq: "ՀՏՀ",
      ctaSeePricing: "Տեսնել գները",
      ctaOpenBot: "Բացել բոտը",
      ctaHow: "Ինչպես է աշխատում",
      pill: "Telegram Bot • Free + Premium",
      heroTitle: "Քո ֆինանսական ռիսկը՝ պարզ, հասկանալի, վերահսկելի։",
      heroLead: "MardRisk AI-ն օգնում է վերահսկել ծախսերը, հաշվել ռիսկ սքորը, զգուշացնել վտանգավոր գնումներից և տալ AI խորհուրդներ՝ հայերեն, ռուսերեն կամ անգլերեն։",
      statFreeLimit: "Free՝ օրական հարց",
      statPremiumUnlimited: "Premium՝ անսահման",
      statWeeklyPdf: "Շաբաթական հաշվետվություն",
      heroNote: "* Բոտը չի հանդիսանում ֆինանսական խորհրդատվության փոխարինում։ Օգտագործիր որպես օգնական։",
      demoTitle: "Live Demo (օրինակ)",
      demoSub: "Ռիսկ սքոր + գնումի ստուգում",
      badge: "AI",
      demoBot1: "✅ Ծախսը ավելացվեց։",
      demoBot2: "⛔ BLOCK — Ռիսկը բարձր է, գնումը ոչ պարտադիր է։ Առաջարկ՝ նախ բուֆեր + պարտքի նվազեցում։",
      demoBot3: "📉 78/100 • Վտանգավոր — Կրճատիր ոչ պարտադիր ծախսերը, կարգավորիր պարտքի պլանը։",
      trust1: "🔒 Տվյալները պահվում են անվտանգ DB-ում",
      trust2: "🌍 3 լեզու",
      trust3: "⚡ Արագ պատասխաններ",
      featuresTitle: "Ֆունկցիաներ",
      featuresLead: "Free-ը բավարար է սկսելու համար, Premium-ը՝ պրոֆեսիոնալ վերահսկման համար։",
      f1Title: "Ռիսկ սքոր (0–100)",
      f1Body: "Հաշվարկ՝ եկամուտ, պարտք, խնայողություն, ծախսեր։ Ստանում ես նաև վիճակ՝ կայուն/ռիսկային/վտանգավոր։",
      f2Title: "Ծախսերի հաշվառում",
      f2Body: "Ավելացրու ծախսերը ըստ կատեգորիաների և ստացիր ամփոփումներ՝ 7/30 օր։",
      f3Title: "Գնումի ստուգում",
      f3Body: "Ուղարկիր «գումար + ապրանք» — բոտը կասի ALLOW/WARN/BLOCK և կբացատրի ինչու։",
      f4Title: "AI խորհուրդներ",
      f4Body: "Ստացիր գործող քայլեր՝ բյուջե, պարտք, խնայողություն, սովորություններ։ 3 լեզվով։",
      f5Title: "Շաբաթական PDF (Premium)",
      f5Body: "Ավտոմատ հաշվետվություն՝ ծախսերի ամփոփում, կատեգորիաներ, risk score։",
      f6Title: "Ծանուցումներ (Premium)",
      f6Body: "Երբ risk score-ը բարձր է՝ բոտը տեղեկացնում է և առաջարկում արագ քայլեր։",
      pricingTitle: "Գներ",
      pricingLead: "Սկսիր անվճար, անցիր Premium երբ ուզում ես լիարժեք վերահսկում։",
      freeTitle: "Free",
      freePrice: "0",
      perMonth: "/ ամիս",
      freeDesc: "Սկսելու համար՝ հիմնական ֆունկցիաներով։",
      freeL1: "Օրական 10 հարց/գործողություն",
      freeL2: "Ռիսկ սքոր + վիճակ",
      freeL3: "Ծախսերի ավելացում",
      freeL4: "AI խորհուրդներ (սահմանափակ)",
      freeL5: "3 լեզու",
      ctaStartFree: "Սկսել անվճար",
      premiumTitle: "Premium",
      amdPerMonth: "դրամ/ամիս",
      premiumDesc: "Անսահման օգտագործում + PDF + Alerts։",
      pL1: "Անսահման հարցեր/գործողություն",
      pL2: "Շաբաթական PDF հաշվետվություն",
      pL3: "Ռիսկի ավտոմատ ծանուցումներ",
      pL4: "Խորը AI պլան (7 օր)",
      pL5: "Renew anytime",
      ctaBuyPremium: "Գնել Premium",
      paymentNote: "Վճարումը կատարվում է Telegram-ի ներսում (Payments)։",
      teamTitle: "Business",
      teamPrice: "Ըստ պատվերի",
      teamDesc: "Բիզնեսների համար՝ թիմային մուտքեր, custom հաշվետվություններ։",
      tL1: "Բազմաթիվ օգտատերեր/դերեր",
      tL2: "Custom ռիսկ կանոններ",
      tL3: "Integrations (CRM/Sheets)",
      tL4: "Աջակցություն և onboarding",
      ctaContact: "Կապվել",
      howTitle: "Ինչպես է աշխատում",
      howLead: "3 պարզ քայլ և սկսում ես վերահսկել ֆինանսները։",
      s1Title: "Բացիր բոտը",
      s1Body: "Սեղմիր “Բացել բոտը” և /start։ Ընտրիր լեզուն։",
      s2Title: "Կարգավորիր տվյալները",
      s2Body: "Մուտքագրիր եկամուտ, խնայողություն և պարտք՝ բոտը կսկսի հաշվարկել risk score-ը։",
      s3Title: "Օգտագործիր ֆունկցիաները",
      s3Body: "Ավելացրու ծախսեր, ստուգիր գնումներ, ստացիր AI խորհուրդներ։ Premium-ում՝ PDF + Alerts։",
      calloutTitle: "Պատրաստ ես սկսելու՞",
      calloutBody: "Սկսիր անվճար, իսկ Premium-ը կարող ես միացնել մեկ հպումով՝ Telegram-ի ներսում։",
      faqTitle: "ՀՏՀ",
      faqLead: "Հաճախ տրվող հարցեր։",
      q1: "Ի՞նչ տվյալներ են պահվում",
      a1: "Պահվում են քո մուտքագրած պրոֆիլը (եկամուտ/խնայողություն/պարտք) և ծախսերը։ Կարող ես ցանկացած պահի չօգտագործել կամ ջնջել DB-ն քո սերվերում։",
      q2: "Premium-ը ինչպես է ակտիվանում",
      a2: "Telegram Payments-ով վճարելուց հետո Premium-ը ավտոմատ ակտիվանում է, և Premium կոճակները բացվում են հենց բոտում։",
      q3: "AMD-ով վճարումը միշտ աշխատո՞ւմ է",
      a3: "Կախված է payment provider-ից։ Եթե AMD-ը չի ընդունվում, հնարավոր է USD fallback։ (Տեխնիկական՝ “minor units” multiplier)։",
      q4: "Սա ֆինանսական խորհրդատվությո՞ւն է",
      a4: "Ոչ։ Սա օգնական գործիք է՝ կրթական/կազմակերպչական նպատակով։ Վերջնական որոշումները կայացնում ես դու։",
      footerNote: "© <span id='year'></span> MardRisk AI. All rights reserved.",
      copyLink: "Պատճենել բոտի հղումը",
    },
    ru: {
      brandTag: "AI помощник финансового риска",
      navFeatures: "Функции",
      navPricing: "Цены",
      navHow: "Как работает",
      navFaq: "FAQ",
      ctaSeePricing: "Смотреть цены",
      ctaOpenBot: "Открыть бот",
      ctaHow: "Как работает",
      pill: "Telegram Bot • Free + Premium",
      heroTitle: "Твой финансовый риск — просто, понятно, под контролем.",
      heroLead: "MardRisk AI помогает учитывать расходы, считать риск‑скор, предупреждать о рискованных покупках и давать AI советы на русском, армянском или английском.",
      statFreeLimit: "Free: 10/день",
      statPremiumUnlimited: "Premium: безлимит",
      statWeeklyPdf: "Weekly PDF",
      heroNote: "* Это не замена финансовой консультации. Используйте как помощник.",
      demoTitle: "Live Demo (пример)",
      demoSub: "Риск‑скор + проверка покупки",
      badge: "AI",
      demoBot1: "✅ Расход добавлен.",
      demoBot2: "⛔ BLOCK — высокий риск, покупка не обязательная. Совет: подушка + снизить долг.",
      demoBot3: "📉 78/100 • Опасно — сократите необязательные траты и составьте план долга.",
      trust1: "🔒 Данные хранятся в безопасной БД",
      trust2: "🌍 3 языка",
      trust3: "⚡ Быстрые ответы",
      featuresTitle: "Функции",
      featuresLead: "Free — чтобы начать, Premium — для полного контроля.",
      f1Title: "Риск‑скор (0–100)",
      f1Body: "Расчёт на основе дохода, долга, сбережений и расходов. Также статус: стабильно/риск/опасно.",
      f2Title: "Учёт расходов",
      f2Body: "Добавляйте расходы по категориям и получайте сводки за 7/30 дней.",
      f3Title: "Проверка покупки",
      f3Body: "Отправьте «сумма + товар» — получите ALLOW/WARN/BLOCK и объяснение почему.",
      f4Title: "AI советы",
      f4Body: "Практичные шаги: бюджет, долг, накопления, привычки. 3 языка.",
      f5Title: "Weekly PDF (Premium)",
      f5Body: "Авто отчёт: расходы, категории, риск‑скор.",
      f6Title: "Уведомления (Premium)",
      f6Body: "Если риск высокий — бот предупреждает и даёт быстрые рекомендации.",
      pricingTitle: "Цены",
      pricingLead: "Начните бесплатно и включайте Premium когда нужно.",
      freeTitle: "Free",
      freePrice: "0",
      perMonth: "/ мес",
      freeDesc: "Для старта — базовые функции.",
      freeL1: "10 действий/день",
      freeL2: "Риск‑скор + статус",
      freeL3: "Добавление расходов",
      freeL4: "AI советы (лимит)",
      freeL5: "3 языка",
      ctaStartFree: "Начать бесплатно",
      premiumTitle: "Premium",
      amdPerMonth: "AMD/мес",
      premiumDesc: "Безлимит + PDF + Alerts.",
      pL1: "Безлимит действий",
      pL2: "Еженедельный PDF",
      pL3: "Уведомления о риске",
      pL4: "Глубокий план на 7 дней",
      pL5: "Renew anytime",
      ctaBuyPremium: "Купить Premium",
      paymentNote: "Оплата внутри Telegram (Payments).",
      teamTitle: "Business",
      teamPrice: "По запросу",
      teamDesc: "Для бизнеса: роли, отчёты, кастом правила.",
      tL1: "Мульти‑пользователи/роли",
      tL2: "Кастом правила риска",
      tL3: "Интеграции (CRM/Sheets)",
      tL4: "Поддержка и onboarding",
      ctaContact: "Связаться",
      howTitle: "Как работает",
      howLead: "3 шага — и вы в контроле.",
      s1Title: "Откройте бот",
      s1Body: "Нажмите «Открыть бот», затем /start и выберите язык.",
      s2Title: "Настройте профиль",
      s2Body: "Введите доход, сбережения и долг — бот посчитает риск.",
      s3Title: "Пользуйтесь функциями",
      s3Body: "Добавляйте расходы, проверяйте покупки, получайте советы. Premium: PDF + Alerts.",
      calloutTitle: "Готовы начать?",
      calloutBody: "Начните бесплатно и включайте Premium одним нажатием.",
      faqTitle: "FAQ",
      faqLead: "Частые вопросы.",
      q1: "Какие данные сохраняются?",
      a1: "Сохраняются ваш профиль (доход/сбережения/долг) и расходы. База хранится на вашем сервере.",
      q2: "Как активируется Premium?",
      a2: "После оплаты через Telegram Payments Premium активируется автоматически.",
      q3: "Всегда ли работает AMD?",
      a3: "Зависит от провайдера. Если AMD недоступен — возможен переход на USD (minor units).",
      q4: "Это финансовая консультация?",
      a4: "Нет. Это вспомогательный инструмент для планирования и обучения.",
      footerNote: "© <span id='year'></span> MardRisk AI. All rights reserved.",
      copyLink: "Скопировать ссылку на бот",
    },
    en: {
      brandTag: "AI financial risk assistant",
      navFeatures: "Features",
      navPricing: "Pricing",
      navHow: "How it works",
      navFaq: "FAQ",
      ctaSeePricing: "See pricing",
      ctaOpenBot: "Open the bot",
      ctaHow: "How it works",
      pill: "Telegram Bot • Free + Premium",
      heroTitle: "Your financial risk — simple, clear, under control.",
      heroLead: "MardRisk AI helps track expenses, calculate a risk score, warn about risky purchases, and provide AI guidance in Armenian, Russian, or English.",
      statFreeLimit: "Free: 10/day",
      statPremiumUnlimited: "Premium: unlimited",
      statWeeklyPdf: "Weekly report",
      heroNote: "* Not a replacement for professional financial advice. Use as an assistant.",
      demoTitle: "Live Demo (sample)",
      demoSub: "Risk score + purchase check",
      badge: "AI",
      demoBot1: "✅ Expense added.",
      demoBot2: "⛔ BLOCK — high risk, non-essential purchase. Tip: build buffer + reduce debt first.",
      demoBot3: "📉 78/100 • Danger — cut non-essential spending and set a debt plan.",
      trust1: "🔒 Data stored in a safe DB",
      trust2: "🌍 3 languages",
      trust3: "⚡ Fast responses",
      featuresTitle: "Features",
      featuresLead: "Free is great to start. Premium is for full control.",
      f1Title: "Risk score (0–100)",
      f1Body: "Computed from income, debt, savings, and expenses. Includes a clear status.",
      f2Title: "Expense tracking",
      f2Body: "Add expenses by category and get 7/30-day summaries.",
      f3Title: "Purchase check",
      f3Body: "Send “amount + item” — get ALLOW/WARN/BLOCK with a clear reason.",
      f4Title: "AI advice",
      f4Body: "Actionable steps: budget, debt, savings, habits. 3 languages.",
      f5Title: "Weekly PDF (Premium)",
      f5Body: "Auto report: totals, categories, risk score.",
      f6Title: "Alerts (Premium)",
      f6Body: "If your risk is high — the bot notifies you with quick steps.",
      pricingTitle: "Pricing",
      pricingLead: "Start free and upgrade when you need it.",
      freeTitle: "Free",
      freePrice: "0",
      perMonth: "/ mo",
      freeDesc: "Starter plan with core features.",
      freeL1: "10 actions/day",
      freeL2: "Risk score + status",
      freeL3: "Add expenses",
      freeL4: "AI advice (limited)",
      freeL5: "3 languages",
      ctaStartFree: "Start free",
      premiumTitle: "Premium",
      amdPerMonth: "AMD/month",
      premiumDesc: "Unlimited + PDF + Alerts.",
      pL1: "Unlimited actions",
      pL2: "Weekly PDF report",
      pL3: "Risk alerts",
      pL4: "Deep 7-day plan",
      pL5: "Renew anytime",
      ctaBuyPremium: "Buy Premium",
      paymentNote: "Payment happens inside Telegram (Payments).",
      teamTitle: "Business",
      teamPrice: "Custom",
      teamDesc: "For teams: roles, custom rules, reporting.",
      tL1: "Multi-user roles",
      tL2: "Custom risk rules",
      tL3: "Integrations (CRM/Sheets)",
      tL4: "Support and onboarding",
      ctaContact: "Contact",
      howTitle: "How it works",
      howLead: "3 steps to get started.",
      s1Title: "Open the bot",
      s1Body: "Tap “Open the bot”, run /start, and choose a language.",
      s2Title: "Set up your profile",
      s2Body: "Enter income, savings, and debt — the bot computes your risk.",
      s3Title: "Use the features",
      s3Body: "Track expenses, check purchases, get advice. Premium adds PDF + alerts.",
      calloutTitle: "Ready to start?",
      calloutBody: "Start free and upgrade with one tap inside Telegram.",
      faqTitle: "FAQ",
      faqLead: "Common questions.",
      q1: "What data is stored?",
      a1: "Your profile (income/savings/debt) and expense entries. The DB lives on your server.",
      q2: "How does Premium activate?",
      a2: "After Telegram Payments, Premium activates automatically in the bot.",
      q3: "Does AMD always work?",
      a3: "Depends on the provider. If AMD is unavailable, you may switch to USD (minor units).",
      q4: "Is this financial advice?",
      a4: "No. It’s an assistant tool for planning and learning.",
      footerNote: "© <span id='year'></span> MardRisk AI. All rights reserved.",
      copyLink: "Copy bot link",
    }
  };

  const langBtn = $("#langBtn");
  const langMenu = $("#langMenu");
  const langLabel = $("#langLabel");

  function setLang(lang) {
    const data = dict[lang] || dict.hy;
    document.documentElement.lang = lang;
    // label
    langLabel.textContent = lang === "hy" ? "Հայ" : lang === "ru" ? "Рус" : "Eng";
    // translate nodes
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      if (!key) return;
      if (key === "footerNote") {
        el.innerHTML = data[key] || el.innerHTML;
      } else {
        el.textContent = data[key] || el.textContent;
      }
    });
    localStorage.setItem("mardrisk_lang", lang);
    // close menu
    document.body.classList.remove("lang--open");
    langBtn?.setAttribute("aria-expanded", "false");
  }

  function openLangMenu() {
    document.body.classList.add("lang--open");
    langBtn?.setAttribute("aria-expanded", "true");
  }
  function closeLangMenu() {
    document.body.classList.remove("lang--open");
    langBtn?.setAttribute("aria-expanded", "false");
  }

  if (langBtn && langMenu) {
    langBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      const open = document.body.classList.contains("lang--open");
      open ? closeLangMenu() : openLangMenu();
    });
    langMenu.querySelectorAll("button[data-lang]").forEach((btn) => {
      btn.addEventListener("click", () => setLang(btn.dataset.lang));
    });
    document.addEventListener("click", () => closeLangMenu());
  }

  // Copy link
  const copyBtn = $("#copyBotLink");
  if (copyBtn) {
    copyBtn.addEventListener("click", async () => {
      try {
        await navigator.clipboard.writeText(BOT_LINK);
        copyBtn.textContent = "✅ Copied";
        setTimeout(() => {
          // restore label in current language
          const lang = localStorage.getItem("mardrisk_lang") || "hy";
          copyBtn.textContent = (dict[lang] || dict.hy).copyLink;
        }, 1200);
      } catch (_) {
        alert(BOT_LINK);
      }
    });
  }

  // Year
  const yearEl = $("#year");
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());

  // Init
  applyBotLink();
  const saved = localStorage.getItem("mardrisk_lang") || "hy";
  setLang(saved);
})();
