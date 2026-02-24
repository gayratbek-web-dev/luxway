/* LUXWAY Travel Agency — Vanilla JS single-page logic
   Features:
   - i18n (UZ default) with localStorage persistence
   - Render packages from data array
   - Live filtering (region, destination, type, visa, duration, budget)
   - Modal (ESC, click outside, focus trap)
   - FAQ accordion
   - Mobile menu toggle
   - Smooth scroll + active link highlight
   - Destination tiles auto-fill filters and scroll to packages
   - Contact form validation + translated messages
*/

(() => {
  "use strict";

  const STORAGE_LANG_KEY = "luxway_lang";

  const state = {
    lang: "uz",
    filters: {
      region: "asia", // default: Asia first
      destination: "all",
      packageType: "all",
      visaType: "any",
      duration: "any",
      budget: "any",
    },
    modal: {
      open: false,
      pkgId: null,
      lastFocus: null,
    },
  };

  const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));
  const $ = (sel, root = document) => root.querySelector(sel);

  const clamp = (n, min, max) => Math.max(min, Math.min(max, n));

  function getTranslations() {
    return window.TRANSLATIONS || {};
  }

  function getLang() {
    const saved = localStorage.getItem(STORAGE_LANG_KEY);
    const supported = ["uz", "ru", "en"];
    if (saved && supported.includes(saved)) return saved;
    return "uz";
  }

  function setLang(lang) {
    const supported = ["uz", "ru", "en"];
    if (!supported.includes(lang)) return;
    state.lang = lang;
    localStorage.setItem(STORAGE_LANG_KEY, lang);
    document.documentElement.lang = lang;
    applyI18n();
    renderAll();
  }

  function deepGet(obj, path) {
    return path.split(".").reduce((acc, key) => (acc && acc[key] != null ? acc[key] : undefined), obj);
  }

  function format(str, vars = {}) {
    return String(str).replace(/\{(\w+)\}/g, (_, k) => (vars[k] != null ? String(vars[k]) : `{${k}}`));
  }

  function t(key, vars) {
    const translations = getTranslations();
    const langPack = translations[state.lang] || translations.uz || {};
    const val = deepGet(langPack, key);
    if (val == null) return key;
    if (Array.isArray(val)) return val.map((x) => (typeof x === "string" ? format(x, vars) : x));
    if (typeof val === "string") return format(val, vars);
    return val;
  }

  function applyI18n() {
    // Text nodes
    $$("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      const txt = t(key);
      if (txt != null) el.textContent = txt;
    });

    // Placeholder
    $$("[data-i18n-placeholder]").forEach((el) => {
      const key = el.getAttribute("data-i18n-placeholder");
      el.setAttribute("placeholder", t(key));
    });

    // aria-label
    $$("[data-i18n-aria-label]").forEach((el) => {
      const key = el.getAttribute("data-i18n-aria-label");
      el.setAttribute("aria-label", t(key));
    });

    // title attribute
    $$("[data-i18n-title]").forEach((el) => {
      const key = el.getAttribute("data-i18n-title");
      el.setAttribute("title", t(key));
    });

    // Update language switcher states
    $$(".lang-btn").forEach((btn) => {
      const lang = btn.getAttribute("data-lang");
      const isActive = lang === state.lang;
      btn.setAttribute("aria-pressed", isActive ? "true" : "false");
      btn.classList.toggle("is-active", isActive);
    });
  }

  // --- Data model ---
  const PACKAGES = [
    {
      id: "p1",
      featured: true,
      region: "asia",
      destination: "turkey_istanbul",
      packageType: "city",
      visaType: "tourist",
      visaIncluded: true,
      durationDays: 4,
      nights: 3,
      priceUsd: 499,
      rating: 4.8,
      tags: ["flightIncluded", "hotelIncluded", "bestSeller", "visaIncluded"],
    },
    {
      id: "p2",
      featured: true,
      region: "asia",
      destination: "turkey_antalya",
      packageType: "beach",
      visaType: "tourist",
      visaIncluded: false,
      durationDays: 5,
      nights: 4,
      priceUsd: 629,
      rating: 4.7,
      tags: ["flightIncluded", "hotelIncluded", "family", "flexible"],
    },
    {
      id: "p3",
      featured: true,
      region: "asia",
      destination: "uae_dubai",
      packageType: "city",
      visaType: "tourist",
      visaIncluded: true,
      durationDays: 5,
      nights: 4,
      priceUsd: 899,
      rating: 4.9,
      tags: ["premium", "bestSeller", "visaIncluded", "flightIncluded"],
    },
    {
      id: "p4",
      featured: false,
      region: "asia",
      destination: "uae_abudhabi",
      packageType: "family",
      visaType: "tourist",
      visaIncluded: false,
      durationDays: 5,
      nights: 4,
      priceUsd: 979,
      rating: 4.8,
      tags: ["hotelIncluded", "family", "visaSupport", "flightIncluded"],
    },
    {
      id: "p5",
      featured: true,
      region: "asia",
      destination: "thailand_phuket_bkk",
      packageType: "beach",
      visaType: "other",
      visaIncluded: false,
      durationDays: 6,
      nights: 5,
      priceUsd: 1090,
      rating: 4.8,
      tags: ["flightIncluded", "hotelIncluded", "bestSeller", "visaSupport"],
    },
    {
      id: "p6",
      featured: false,
      region: "asia",
      destination: "malaysia_kl_langkawi",
      packageType: "family",
      visaType: "other",
      visaIncluded: false,
      durationDays: 5,
      nights: 4,
      priceUsd: 990,
      rating: 4.6,
      tags: ["hotelIncluded", "family", "visaSupport"],
    },
    {
      id: "p7",
      featured: true,
      region: "asia",
      destination: "indonesia_bali",
      packageType: "honeymoon",
      visaType: "other",
      visaIncluded: false,
      durationDays: 5,
      nights: 4,
      priceUsd: 1199,
      rating: 4.9,
      tags: ["premium", "honeymoon", "visaSupport", "hotelIncluded"],
    },
    {
      id: "p8",
      featured: false,
      region: "asia",
      destination: "singapore",
      packageType: "city",
      visaType: "other",
      visaIncluded: false,
      durationDays: 4,
      nights: 3,
      priceUsd: 1299,
      rating: 4.7,
      tags: ["premium", "hotelIncluded", "flightIncluded", "visaSupport"],
    },
    {
      id: "p9",
      featured: false,
      region: "asia",
      destination: "korea_seoul",
      packageType: "city",
      visaType: "japanKorea",
      visaIncluded: false,
      durationDays: 4,
      nights: 3,
      priceUsd: 1390,
      rating: 4.8,
      tags: ["premium", "visaSupport", "hotelIncluded"],
    },
    {
      id: "p10",
      featured: false,
      region: "asia",
      destination: "japan_tokyo",
      packageType: "city",
      visaType: "japanKorea",
      visaIncluded: false,
      durationDays: 4,
      nights: 3,
      priceUsd: 1490,
      rating: 4.9,
      tags: ["premium", "visaSupport", "hotelIncluded"],
    },
    {
      id: "p11",
      featured: false,
      region: "asia",
      destination: "vietnam_danang_hanoi",
      packageType: "adventure",
      visaType: "other",
      visaIncluded: false,
      durationDays: 5,
      nights: 4,
      priceUsd: 999,
      rating: 4.6,
      tags: ["flightIncluded", "hotelIncluded", "flexible", "visaSupport"],
    },
    // Europe (visa required)
    {
      id: "p12",
      featured: true,
      region: "europe",
      destination: "italy_rome_venice",
      packageType: "city",
      visaType: "schengen",
      visaIncluded: false,
      durationDays: 8,
      nights: 7,
      priceUsd: 1890,
      rating: 4.8,
      tags: ["premium", "visaSupport", "flightIncluded"],
    },
    {
      id: "p13",
      featured: false,
      region: "europe",
      destination: "france_paris",
      packageType: "honeymoon",
      visaType: "schengen",
      visaIncluded: false,
      durationDays: 4,
      nights: 3,
      priceUsd: 1690,
      rating: 4.7,
      tags: ["premium", "visaSupport", "bestSeller"],
    },
    {
      id: "p14",
      featured: false,
      region: "europe",
      destination: "spain_barcelona",
      packageType: "beach",
      visaType: "schengen",
      visaIncluded: false,
      durationDays: 4,
      nights: 3,
      priceUsd: 1590,
      rating: 4.6,
      tags: ["visaSupport", "hotelIncluded", "flexible"],
    },
    {
      id: "p15",
      featured: false,
      region: "europe",
      destination: "paris_amsterdam",
      packageType: "city",
      visaType: "schengen",
      visaIncluded: false,
      durationDays: 5,
      nights: 4,
      priceUsd: 1990,
      rating: 4.9,
      tags: ["premium", "visaSupport", "bestSeller"],
    },
  ];

  const INCLUDED_KEYS = [
    "hotelIncluded",
    "flightIncluded",
    "visaSupport",
    "flexible",
  ];

  function getDestinationLabel(code) {
    return t(`dict.destinations.${code}`);
  }

  function durationToRangeKey(days) {
    if (days <= 5) return "d3_5";
    if (days <= 8) return "d6_8";
    if (days <= 12) return "d9_12";
    return "d13p";
  }

  function priceToBudgetKey(price) {
    if (price < 500) return "b_lt_500";
    if (price < 1000) return "b_500_999";
    if (price < 1500) return "b_1000_1499";
    return "b_1500p";
  }

  // --- Rendering ---
  function renderFilters() {
    // Region
    const regionSel = $("#filter-region");
    const destSel = $("#filter-destination");
    const typeSel = $("#filter-type");
    const visaSel = $("#filter-visa");
    const durSel = $("#filter-duration");
    const budSel = $("#filter-budget");

    if (!regionSel) return;

    regionSel.value = state.filters.region;
    typeSel.value = state.filters.packageType;
    visaSel.value = state.filters.visaType;
    durSel.value = state.filters.duration;
    budSel.value = state.filters.budget;

    // Destinations list depends on region (for a cleaner UX)
    const dests = getDestinationOptionsForRegion(state.filters.region);
    const current = state.filters.destination;

    destSel.innerHTML = "";
    destSel.appendChild(new Option(t("common.all"), "all"));
    for (const code of dests) {
      destSel.appendChild(new Option(getDestinationLabel(code), code));
    }

    destSel.value = dests.includes(current) ? current : "all";
    state.filters.destination = destSel.value;

    // Translate static option labels that are in HTML
    // (applyI18n already did labels; here only ensures select placeholders are correct)
  }

  function getDestinationOptionsForRegion(region) {
    const codes = PACKAGES.filter((p) => p.region === region).map((p) => p.destination);
    return Array.from(new Set(codes)).sort((a, b) => getDestinationLabel(a).localeCompare(getDestinationLabel(b)));
  }

  function getFilteredPackages() {
    const f = state.filters;
    let list = PACKAGES.slice();

    // Always region-filter (default Asia)
    list = list.filter((p) => p.region === f.region);

    if (f.destination !== "all") list = list.filter((p) => p.destination === f.destination);
    if (f.packageType !== "all") list = list.filter((p) => p.packageType === f.packageType);

    if (f.visaType !== "any") {
      if (f.visaType === "included") list = list.filter((p) => p.visaIncluded === true);
      else if (f.visaType === "notNeeded") list = list.filter((p) => p.visaType === "notNeeded");
      else list = list.filter((p) => p.visaType === f.visaType);
    }

    if (f.duration !== "any") {
      list = list.filter((p) => durationToRangeKey(p.durationDays) === f.duration);
    }

    if (f.budget !== "any") {
      list = list.filter((p) => priceToBudgetKey(p.priceUsd) === f.budget);
    }

    // Featured first, then rating, then price
    list.sort((a, b) => {
      const fa = a.featured ? 1 : 0;
      const fb = b.featured ? 1 : 0;
      if (fa !== fb) return fb - fa;
      if (b.rating !== a.rating) return b.rating - a.rating;
      return a.priceUsd - b.priceUsd;
    });

    return list;
  }

  function renderPackages() {
    const grid = $("#packages-grid");
    const countEl = $("#filter-results");
    const emptyEl = $("#packages-empty");
    if (!grid) return;

    const list = getFilteredPackages();
    if (countEl) countEl.textContent = t("filters.results", { count: list.length });

    grid.innerHTML = "";

    if (list.length === 0) {
      emptyEl?.classList.remove("is-hidden");
      return;
    }
    emptyEl?.classList.add("is-hidden");

    for (const pkg of list) {
      grid.appendChild(renderPackageCard(pkg));
    }
  }

  function renderPackageCard(pkg) {
    const card = document.createElement("article");
    card.className = "card pkg-card";
    card.setAttribute("data-pkg-id", pkg.id);

    const title = t(`pkg.${pkg.id}.title`);
    const subtitle = t(`pkg.${pkg.id}.subtitle`);
    const dest = getDestinationLabel(pkg.destination);
    const durationText = t("packages.card.duration", { days: pkg.durationDays, nights: pkg.nights });

    const tags = renderTags(pkg);

    const badge = pkg.featured
      ? `<span class="badge badge-gold">${escapeHtml(t("packages.badgeFeatured"))}</span>`
      : "";

    const visaMark = pkg.region === "europe"
      ? `<span class="badge badge-outline" title="${escapeHtml(t("common.visaRequired"))}">${escapeHtml(t("common.visaRequired"))}</span>`
      : `<span class="badge badge-green" title="${escapeHtml(t("common.visaSupport"))}">${escapeHtml(t("common.visaSupport"))}</span>`;

    card.innerHTML = `
      <div class="card-top">
        <div class="card-badges">
          ${badge}
          ${visaMark}
        </div>
        <h3 class="pkg-title">${escapeHtml(title)}</h3>
        <p class="pkg-subtitle">${escapeHtml(subtitle)}</p>
        <p class="pkg-dest">
          <span class="dot"></span>
          <span>${escapeHtml(dest)}</span>
        </p>
      </div>

      <div class="pkg-meta">
        <div class="meta-row">
          <div class="meta-item">
            <span class="meta-label">${escapeHtml(t("duration.any"))}</span>
            <span class="meta-value">${escapeHtml(durationText)}</span>
          </div>
          <div class="meta-item">
            <span class="meta-label">${escapeHtml(t("common.rating"))}</span>
            <span class="meta-value">${renderStars(pkg.rating)}</span>
          </div>
        </div>
        <div class="meta-row">
          <div class="price">
            <span class="price-label">${escapeHtml(t("common.startingPrice"))}</span>
            <span class="price-value">$${escapeHtml(String(pkg.priceUsd))}</span>
            <span class="price-sub">${escapeHtml(t("common.perPerson"))}</span>
          </div>
          <button class="btn btn-secondary pkg-details" type="button" data-action="details" aria-haspopup="dialog">
            ${escapeHtml(t("common.details"))}
          </button>
        </div>
      </div>
      <div class="pkg-tags">${tags}</div>
    `;

    // Fix label for duration to something nicer (avoid "Any")
    const durationLabel = card.querySelector(".meta-item .meta-label");
    if (durationLabel) durationLabel.textContent = t("filters.duration");

    return card;
  }

  function renderTags(pkg) {
    const out = [];
    for (const key of pkg.tags) {
      const label = t(`tags.${key}`);
      if (typeof label !== "string") continue;
      const cls = key === "bestSeller" ? "tag tag-gold" : key === "visaIncluded" ? "tag tag-green" : "tag";
      out.push(`<span class="${cls}">${escapeHtml(label)}</span>`);
    }
    return out.join("");
  }

  function renderStars(rating) {
    // rating 0..5 => full star count via rounding to nearest 0.5
    const r = clamp(Number(rating) || 0, 0, 5);
    const full = Math.floor(r);
    const half = r - full >= 0.5 ? 1 : 0;
    const empty = 5 - full - half;
    const stars = "★".repeat(full) + (half ? "⯨" : "") + "☆".repeat(empty);
    const a11y = t("common.starsA11y", { stars: r.toFixed(1) });
    return `<span class="stars" role="img" aria-label="${escapeHtml(a11y)}">${escapeHtml(stars)} <span class="rating-num">${escapeHtml(r.toFixed(1))}</span></span>`;
  }

  function escapeHtml(str) {
    return String(str)
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");
  }

  // --- Modal ---
  function openModal(pkgId) {
    const modal = $("#pkg-modal");
    const overlay = $("#modal-overlay");
    if (!modal || !overlay) return;

    state.modal.open = true;
    state.modal.pkgId = pkgId;
    state.modal.lastFocus = document.activeElement instanceof HTMLElement ? document.activeElement : null;

    renderModalContent(pkgId);

    overlay.classList.add("is-open");
    modal.classList.add("is-open");
    overlay.setAttribute("aria-hidden", "false");
    document.body.classList.add("is-modal-open");

    // Focus the close button
    const closeBtn = $("#modal-close");
    closeBtn?.focus();
  }

  function closeModal() {
    const modal = $("#pkg-modal");
    const overlay = $("#modal-overlay");
    if (!modal || !overlay) return;

    state.modal.open = false;
    state.modal.pkgId = null;

    overlay.classList.remove("is-open");
    modal.classList.remove("is-open");
    overlay.setAttribute("aria-hidden", "true");
    document.body.classList.remove("is-modal-open");

    // Restore focus
    state.modal.lastFocus?.focus?.();
    state.modal.lastFocus = null;
  }

  function renderModalContent(pkgId) {
    const pkg = PACKAGES.find((p) => p.id === pkgId);
    if (!pkg) return;

    const titleEl = $("#modal-title");
    const destEl = $("#modal-destination");
    const priceEl = $("#modal-price");
    const includedList = $("#modal-included");
    const visaNote = $("#modal-visa");
    const itineraryList = $("#modal-itinerary");
    const badgeEl = $("#modal-badges");

    const title = t(`pkg.${pkg.id}.title`);
    const subtitle = t(`pkg.${pkg.id}.subtitle`);
    const dest = getDestinationLabel(pkg.destination);
    const visaText = t(`pkg.${pkg.id}.visaNote`);
    const itinerary = t(`pkg.${pkg.id}.itinerary`);

    if (titleEl) titleEl.textContent = String(title);
    if (destEl) destEl.textContent = `${dest} • ${subtitle}`;
    if (priceEl) priceEl.textContent = `$${pkg.priceUsd} ${t("common.perPerson")}`;
    if (visaNote) visaNote.textContent = String(visaText);

    if (badgeEl) {
      badgeEl.innerHTML = "";
      if (pkg.featured) badgeEl.insertAdjacentHTML("beforeend", `<span class="badge badge-gold">${escapeHtml(t("packages.badgeFeatured"))}</span>`);
      badgeEl.insertAdjacentHTML(
        "beforeend",
        pkg.region === "europe"
          ? `<span class="badge badge-outline">${escapeHtml(t("common.visaRequired"))}</span>`
          : `<span class="badge badge-green">${escapeHtml(t("common.availableNow"))}</span>`
      );
    }

    if (includedList) {
      includedList.innerHTML = "";
      // Use tags for "included" list + some fixed items
      const base = [
        { key: "tags.hotelIncluded", icon: "🏨" },
        { key: "tags.flightIncluded", icon: "✈️" },
        { key: "tags.visaSupport", icon: "🛂" },
        { key: "whyUs.items.insurance.title", icon: "🛡️" },
        { key: "whyUs.items.support.title", icon: "📞" },
      ];
      for (const item of base) {
        const li = document.createElement("li");
        li.className = "inc-item";
        li.innerHTML = `<span class="inc-ico" aria-hidden="true">${item.icon}</span><span>${escapeHtml(t(item.key))}</span>`;
        includedList.appendChild(li);
      }
    }

    if (itineraryList) {
      itineraryList.innerHTML = "";
      if (Array.isArray(itinerary)) {
        for (const line of itinerary) {
          const li = document.createElement("li");
          li.textContent = String(line);
          itineraryList.appendChild(li);
        }
      }
    }
  }

  function trapFocusInModal(e) {
    if (!state.modal.open) return;
    if (e.key !== "Tab") return;
    const modal = $("#pkg-modal");
    if (!modal) return;

    const focusable = $$(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
      modal
    ).filter((el) => !el.hasAttribute("disabled") && !el.getAttribute("aria-hidden"));
    if (focusable.length === 0) return;

    const first = focusable[0];
    const last = focusable[focusable.length - 1];

    const active = document.activeElement;
    if (e.shiftKey) {
      if (active === first || !modal.contains(active)) {
        e.preventDefault();
        last.focus();
      }
    } else {
      if (active === last) {
        e.preventDefault();
        first.focus();
      }
    }
  }

  // --- FAQ Accordion ---
  function initFaq() {
    $$(".faq-item").forEach((item) => {
      const btn = $(".faq-q", item);
      const panel = $(".faq-a", item);
      if (!btn || !panel) return;
      btn.addEventListener("click", () => {
        const expanded = btn.getAttribute("aria-expanded") === "true";
        btn.setAttribute("aria-expanded", expanded ? "false" : "true");
        item.classList.toggle("is-open", !expanded);
        panel.style.maxHeight = expanded ? "0px" : `${panel.scrollHeight}px`;
        btn.setAttribute(
          "aria-label",
          t(expanded ? "a11y.accordionExpand" : "a11y.accordionCollapse")
        );
      });
    });
  }

  function syncFaqHeights() {
    // When language changes, content height changes; keep open panels correct.
    $$(".faq-item.is-open").forEach((item) => {
      const panel = $(".faq-a", item);
      if (panel) panel.style.maxHeight = `${panel.scrollHeight}px`;
    });
  }

  // --- Navigation / scroll spy ---
  function initSmoothScroll() {
    $$('a[href^="#"]').forEach((a) => {
      a.addEventListener("click", (e) => {
        const href = a.getAttribute("href");
        if (!href || href.length < 2) return;
        const target = document.getElementById(href.slice(1));
        if (!target) return;
        e.preventDefault();
        target.scrollIntoView({ behavior: "smooth", block: "start" });
        closeMobileMenu();
      });
    });
  }

  function initScrollSpy() {
    const links = $$("[data-nav-link]");
    const sections = links
      .map((l) => l.getAttribute("href"))
      .filter(Boolean)
      .map((h) => document.querySelector(h))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        // choose the entry with highest intersection ratio
        const visible = entries.filter((e) => e.isIntersecting);
        if (!visible.length) return;
        visible.sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        const id = visible[0].target.getAttribute("id");
        links.forEach((l) => l.classList.toggle("is-active", l.getAttribute("href") === `#${id}`));
      },
      { root: null, threshold: [0.25, 0.5, 0.75], rootMargin: "-20% 0px -65% 0px" }
    );

    sections.forEach((s) => observer.observe(s));
  }

  // --- Mobile menu ---
  function initMobileMenu() {
    const btn = $("#menu-toggle");
    const panel = $("#nav-panel");
    if (!btn || !panel) return;

    btn.addEventListener("click", () => {
      const open = panel.classList.toggle("is-open");
      btn.setAttribute("aria-expanded", open ? "true" : "false");
      btn.setAttribute("aria-label", t(open ? "common.closeMenu" : "common.openMenu"));
    });

    document.addEventListener("click", (e) => {
      if (!panel.classList.contains("is-open")) return;
      const target = e.target;
      if (!(target instanceof Element)) return;
      if (panel.contains(target) || btn.contains(target)) return;
      closeMobileMenu();
    });
  }

  function closeMobileMenu() {
    const btn = $("#menu-toggle");
    const panel = $("#nav-panel");
    if (!btn || !panel) return;
    if (!panel.classList.contains("is-open")) return;
    panel.classList.remove("is-open");
    btn.setAttribute("aria-expanded", "false");
    btn.setAttribute("aria-label", t("common.openMenu"));
  }

  // --- Filters ---
  function initFilters() {
    const regionSel = $("#filter-region");
    const destSel = $("#filter-destination");
    const typeSel = $("#filter-type");
    const visaSel = $("#filter-visa");
    const durSel = $("#filter-duration");
    const budSel = $("#filter-budget");
    const resetBtn = $("#filters-reset");

    const onChange = () => {
      state.filters.region = regionSel.value;
      state.filters.destination = destSel.value;
      state.filters.packageType = typeSel.value;
      state.filters.visaType = visaSel.value;
      state.filters.duration = durSel.value;
      state.filters.budget = budSel.value;
      // When region changes, re-render destination options and reset destination if needed
      renderAll();
    };

    [regionSel, destSel, typeSel, visaSel, durSel, budSel].forEach((el) => {
      el?.addEventListener("change", onChange);
    });

    resetBtn?.addEventListener("click", () => {
      state.filters = {
        region: "asia",
        destination: "all",
        packageType: "all",
        visaType: "any",
        duration: "any",
        budget: "any",
      };
      renderAll();
    });
  }

  // --- Destination tiles ---
  function initDestinations() {
    const tabs = $$(".dest-tab");
    const panels = $$(".dest-panel");

    tabs.forEach((tab) => {
      tab.addEventListener("click", () => {
        const region = tab.getAttribute("data-region");
        tabs.forEach((tbtn) => {
          const active = tbtn === tab;
          tbtn.classList.toggle("is-active", active);
          tbtn.setAttribute("aria-selected", active ? "true" : "false");
          tbtn.setAttribute("tabindex", active ? "0" : "-1");
        });
        panels.forEach((p) => p.classList.toggle("is-active", p.getAttribute("data-region") === region));
      });
    });

    $$(".dest-tile").forEach((tile) => {
      tile.addEventListener("click", () => {
        const region = tile.getAttribute("data-region");
        const dest = tile.getAttribute("data-destination");
        if (!region || !dest) return;
        state.filters.region = region;
        state.filters.destination = dest;
        state.filters.packageType = "all";
        state.filters.visaType = "any";
        state.filters.duration = "any";
        state.filters.budget = "any";
        renderAll();
        $("#packages")?.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    });
  }

  // --- Contact form ---
  function initForm() {
    const form = $("#contact-form");
    if (!form) return;

    const nameEl = $("#cf-name");
    const contactEl = $("#cf-contact");
    const interestEl = $("#cf-interest");
    const messageEl = $("#cf-message");

    function setError(input, msgKeyOrText) {
      const wrap = input.closest(".field");
      const err = wrap?.querySelector(".field-error");
      const msg = msgKeyOrText.includes(".") ? t(msgKeyOrText) : msgKeyOrText;
      wrap?.classList.add("has-error");
      if (err) err.textContent = String(msg);
    }

    function clearError(input) {
      const wrap = input.closest(".field");
      const err = wrap?.querySelector(".field-error");
      wrap?.classList.remove("has-error");
      if (err) err.textContent = "";
    }

    function looksLikeEmail(v) {
      return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i.test(v);
    }

    function looksLikePhone(v) {
      // permissive: digits + + ( ) - spaces
      const cleaned = v.replace(/[()\s-]/g, "");
      return /^\+?\d{7,15}$/.test(cleaned);
    }

    function validate() {
      let ok = true;
      const name = (nameEl.value || "").trim();
      const contact = (contactEl.value || "").trim();
      const msg = (messageEl.value || "").trim();

      clearError(nameEl);
      clearError(contactEl);
      clearError(messageEl);

      if (!name) {
        setError(nameEl, "contact.errors.requiredName");
        ok = false;
      }
      if (!contact) {
        setError(contactEl, "contact.errors.requiredContact");
        ok = false;
      } else if (!looksLikeEmail(contact) && !looksLikePhone(contact)) {
        setError(contactEl, "contact.errors.invalidContact");
        ok = false;
      }
      if (!msg) {
        setError(messageEl, "contact.errors.requiredMessage");
        ok = false;
      }
      return ok;
    }

    [nameEl, contactEl, messageEl].forEach((el) => {
      el?.addEventListener("input", () => clearError(el));
    });

    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const ok = validate();
      if (!ok) return;

      // "Send" without backend: show success toast/panel
      const box = $("#form-success");
      const title = $("#form-success-title");
      const text = $("#form-success-text");
      if (title) title.textContent = t("contact.successTitle");
      if (text) text.textContent = t("contact.successText");
      box?.classList.remove("is-hidden");

      form.reset();
      // keep interest if user filled
      interestEl.value = "";
      setTimeout(() => box?.classList.add("is-hidden"), 7000);
    });
  }

  // --- Language switcher ---
  function initLangSwitcher() {
    $$(".lang-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        const lang = btn.getAttribute("data-lang");
        if (!lang) return;
        setLang(lang);
      });
    });
  }

  // --- Visa checklist mini-modal (reuses main modal style) ---
  function initChecklistModal() {
    const btn = $("#checklist-open");
    const overlay = $("#checklist-overlay");
    const modal = $("#checklist-modal");
    const close = $("#checklist-close");
    const list = $("#checklist-list");
    if (!btn || !overlay || !modal || !close || !list) return;

    const open = () => {
      list.innerHTML = "";
      const items = t("visa.checklistItems");
      const keys = ["passport", "photo", "form", "booking", "insurance", "finance", "ties"];
      for (const k of keys) {
        const li = document.createElement("li");
        li.textContent = String(items[k]);
        list.appendChild(li);
      }
      overlay.classList.add("is-open");
      modal.classList.add("is-open");
      overlay.setAttribute("aria-hidden", "false");
      document.body.classList.add("is-modal-open");
      close.focus();
    };

    const shut = () => {
      overlay.classList.remove("is-open");
      modal.classList.remove("is-open");
      overlay.setAttribute("aria-hidden", "true");
      document.body.classList.remove("is-modal-open");
      btn.focus();
    };

    btn.addEventListener("click", open);
    close.addEventListener("click", shut);
    overlay.addEventListener("click", (e) => {
      if (e.target === overlay) shut();
    });
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && overlay.classList.contains("is-open")) shut();
    });
  }

  // --- Global events ---
  function initGlobalDelegation() {
    // Package details buttons
    document.addEventListener("click", (e) => {
      const target = e.target;
      if (!(target instanceof Element)) return;

      // Details click
      const detailsBtn = target.closest('[data-action="details"]');
      if (detailsBtn) {
        const card = detailsBtn.closest("[data-pkg-id]");
        const id = card?.getAttribute("data-pkg-id");
        if (id) openModal(id);
        return;
      }

      // Modal close
      if (target.closest("#modal-close")) {
        closeModal();
        return;
      }
    });

    // Modal overlay close
    $("#modal-overlay")?.addEventListener("click", (e) => {
      if (e.target === e.currentTarget) closeModal();
    });

    // Keyboard
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && state.modal.open) closeModal();
      trapFocusInModal(e);
    });
  }

  function renderDestinations() {
    // Destination tiles are pre-defined in HTML; we only translate their labels.
    $$(".dest-tile").forEach((tile) => {
      const code = tile.getAttribute("data-destination");
      if (!code) return;
      const label = getDestinationLabel(code);
      const titleEl = $(".dest-name", tile);
      if (titleEl) titleEl.textContent = label;
    });
  }

  function renderAll() {
    applyI18n();
    renderFilters();
    renderPackages();
    renderDestinations();
    syncFaqHeights();
    renderChecklistI18n();
    renderFooterYear();
  }

  function renderChecklistI18n() {
    const title = $("#checklist-title");
    const btn = $("#checklist-open");
    if (title) title.textContent = t("visa.checklistTitle");
    if (btn) btn.textContent = t("visa.checklistBtn");
    const cmTitle = $("#checklist-modal-title");
    if (cmTitle) cmTitle.textContent = t("visa.checklistModalTitle");
  }

  function renderFooterYear() {
    const y = $("#year");
    if (y) y.textContent = String(new Date().getFullYear());
  }

  function initCtas() {
    $("#cta-packages")?.addEventListener("click", () => {
      $("#packages")?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
    $("#cta-visa")?.addEventListener("click", () => {
      $("#visa")?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
    $("#quote-btn")?.addEventListener("click", () => {
      $("#contact")?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
    $("#modal-cta-contact")?.addEventListener("click", () => {
      closeModal();
      setTimeout(() => $("#contact")?.scrollIntoView({ behavior: "smooth", block: "start" }), 50);
    });
    $("#modal-cta-visa")?.addEventListener("click", () => {
      closeModal();
      setTimeout(() => $("#visa")?.scrollIntoView({ behavior: "smooth", block: "start" }), 50);
    });
    $("#visa-request")?.addEventListener("click", () => {
      $("#contact")?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }

  function init() {
    state.lang = getLang();
    document.documentElement.lang = state.lang;

    initLangSwitcher();
    initMobileMenu();
    initSmoothScroll();
    initScrollSpy();
    initFilters();
    initDestinations();
    initFaq();
    initForm();
    initChecklistModal();
    initGlobalDelegation();
    initCtas();

    renderAll();
  }

  document.addEventListener("DOMContentLoaded", init);
})();

