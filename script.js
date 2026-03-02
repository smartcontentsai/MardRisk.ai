(() => {
  const $ = (sel) => document.querySelector(sel);

  // ===== Theme =====
  const themeToggle = $("#themeToggle");
  const storedTheme = localStorage.getItem("theme");
  if (storedTheme) document.documentElement.setAttribute("data-theme", storedTheme);

  const setThemeIcon = () => {
    const theme = document.documentElement.getAttribute("data-theme");
    themeToggle.querySelector(".icon").textContent = theme === "light" ? "☼" : "☾";
  };
  setThemeIcon();

  themeToggle?.addEventListener("click", () => {
    const current = document.documentElement.getAttribute("data-theme");
    const next = current === "light" ? "" : "light";
    if (next) document.documentElement.setAttribute("data-theme", next);
    else document.documentElement.removeAttribute("data-theme");
    localStorage.setItem("theme", next || "");
    setThemeIcon();
  });

  // ===== Mobile menu =====
  const menuBtn = $("#menuBtn");
  const mobileMenu = $("#mobileMenu");

  const closeMobile = () => {
    if (!mobileMenu) return;
    mobileMenu.hidden = true;
    menuBtn?.setAttribute("aria-expanded", "false");
  };

  menuBtn?.addEventListener("click", () => {
    if (!mobileMenu) return;
    const willOpen = mobileMenu.hidden;
    mobileMenu.hidden = !willOpen;
    menuBtn.setAttribute("aria-expanded", String(willOpen));
  });

  mobileMenu?.addEventListener("click", (e) => {
    if (e.target.matches("a")) closeMobile();
  });

  // Close menu on resize
  window.addEventListener("resize", () => {
    if (window.innerWidth > 980) closeMobile();
  });

  // ===== Scroll progress =====
  const progressBar = $("#progressBar");
  const onScroll = () => {
    const doc = document.documentElement;
    const scrollTop = doc.scrollTop || document.body.scrollTop;
    const height = doc.scrollHeight - doc.clientHeight;
    const p = height ? (scrollTop / height) * 100 : 0;
    if (progressBar) progressBar.style.width = `${p}%`;
  };
  document.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  // ===== Copy bot link =====
  const copyBtn = $("#copyBotLink");
  const hint = $("#copyHint");
  const botLink = "https://t.me/mardriskv2_bot";

  copyBtn?.addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(botLink);
      if (hint) hint.textContent = "Պատճենվեց ✅";
      setTimeout(() => { if (hint) hint.textContent = ""; }, 1800);
    } catch {
      if (hint) hint.textContent = "Չհաջողվեց պատճենել ❌";
      setTimeout(() => { if (hint) hint.textContent = ""; }, 1800);
    }
  });

  // ===== Demo guardrails =====
  const demoItem = $("#demoItem");
  const demoAmount = $("#demoAmount");
  const demoRisk = $("#demoRisk");
  const demoRiskValue = $("#demoRiskValue");
  const demoBtn = $("#demoBtn");
  const demoResult = $("#demoResult");

  const classify = (item) => {
    const s = (item || "").toLowerCase();
    const luxury = ["iphone", "ipad", "macbook", "airpods", "apple watch", "ps5", "xbox", "rolex", "gucci", "louis vuitton", "prada"];
    const essential = ["վարձ", "կոմունալ", "գազ", "ջուր", "լույս", "դեղ", "բուժ", "սնունդ", "մթերք", "տրանսպորտ", "ուսուցում"];
    if (essential.some(k => s.includes(k))) return "ESSENTIAL";
    if (luxury.some(k => s.includes(k))) return "LUXURY";
    return "UNKNOWN";
  };

  const decide = (risk, item, amount) => {
    const cls = classify(item);

    // Simple UX demo logic (կայքի համար դեմո)
    if (risk >= 75 && (cls === "LUXURY" || cls === "UNKNOWN")) {
      return {
        badge: "BLOCK",
        badgeClass: "badge--block",
        emoji: "⛔",
        cls,
        text: "Ռիսկը բարձր է, և գնումը ոչ պարտադիր է։ Խորհուրդ՝ նախ նվազեցրու պարտքը և ստեղծիր 1–2 ամսվա բուֆեր։"
      };
    }

    if (risk >= 50 && cls !== "ESSENTIAL") {
      return {
        badge: "WARN",
        badgeClass: "badge--warn",
        emoji: "⚠️",
        cls,
        text: "Ռիսկը միջին/բարձր է․ եթե գնում ես՝ արա պայմանով (խնայողություն ≥ 1 ամիս ծախս, պարտք նվազեցնել)։"
      };
    }

    return {
      badge: "ALLOW",
      badgeClass: "badge--allow",
      emoji: "✅",
      cls,
      text: "Ընդհանուր պատկերը թույլ է տալիս։ Լավ կլինի՝ չվնասի պարտքերի վճարմանը և բուֆերին։"
    };
  };

  const renderResult = () => {
    const item = demoItem?.value || "";
    const amount = Number(demoAmount?.value || 0);
    const risk = Number(demoRisk?.value || 0);

    const res = decide(risk, item, amount);

    if (demoResult) {
      demoResult.innerHTML = `
        <div class="result__title">${res.emoji} Գնահատում</div>
        <div style="margin:10px 0 12px">
          <span class="badge ${res.badgeClass}">${res.badge}</span>
        </div>
        <div class="result__text">
          <b>Ապրանք՝</b> ${escapeHtml(item)}<br>
          <b>Գին՝</b> ${isFinite(amount) ? amount.toLocaleString("hy-AM") : "—"} դրամ<br>
          <b>Տեսակ՝</b> ${res.cls}<br><br>
          ${res.text}
          <hr style="border:0;border-top:1px solid rgba(255,255,255,.12);margin:12px 0">
          <b>ԹԵՍՏ Telegram-ում՝</b> <span class="mono">/buy ${amount || 600000} ${escapeHtml(item || "iPhone 17")}</span>
        </div>
      `;
    }

    // update CTA meter
    const meterBar = $("#meterBar");
    const meterValue = $("#meterValue");
    if (meterBar) meterBar.style.width = `${risk}%`;
    if (meterValue) meterValue.textContent = `${risk}/100`;
  };

  demoRisk?.addEventListener("input", () => {
    if (demoRiskValue) demoRiskValue.textContent = demoRisk.value;
    renderResult();
  });

  demoBtn?.addEventListener("click", (e) => {
    e.preventDefault();
    renderResult();
  });

  // initial
  if (demoRiskValue && demoRisk) demoRiskValue.textContent = demoRisk.value;
  renderResult();

  // helpers
  function escapeHtml(str) {
    return String(str)
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");
  }
})();
