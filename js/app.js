/* TrailWatch HK — Shared UI helpers */

function twIcon(name) {
  const stroke = 'fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"';
  const icons = {
    home: `<svg width="20" height="20" viewBox="0 0 24 24" ${stroke}><path d="M3 10.5 12 3l9 7.5V21a1 1 0 0 1-1 1h-5v-7H9v7H4a1 1 0 0 1-1-1v-10.5z"/></svg>`,
    explore: `<svg width="20" height="20" viewBox="0 0 24 24" ${stroke}><circle cx="12" cy="12" r="9"/><path d="m16.5 7.5-2.8 7.2L6.5 17.5l2.8-7.2L16.5 7.5z"/></svg>`,
    track: `<svg width="20" height="20" viewBox="0 0 24 24" ${stroke}><path d="M22 2 11 13"/><path d="M22 2 15 22l-4-9-9-4 20-7z"/></svg>`,
    plan: `<svg width="20" height="20" viewBox="0 0 24 24" ${stroke}><path d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2"/><rect x="9" y="3" width="6" height="4" rx="1"/><path d="M9 12h6M9 16h4"/></svg>`,
    dashboard: `<svg width="20" height="20" viewBox="0 0 24 24" ${stroke}><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>`,
    back: `<svg width="20" height="20" viewBox="0 0 24 24" ${stroke}><path d="M15 18l-6-6 6-6"/></svg>`,
    bell: `<svg width="20" height="20" viewBox="0 0 24 24" ${stroke}><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg>`,
    menu: `<svg width="22" height="22" viewBox="0 0 24 24" ${stroke}><path d="M4 6h16M4 12h16M4 18h16"/></svg>`,
    tree: `<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2 7 9h3v3H6l4 5h2v5h2v-5h2l4-5h-4V9h3L12 2z"/></svg>`,
    star: "★",
    /* Portfolio / dashboard (Figma-style outline icons) */
    records: `<svg viewBox="0 0 24 24" ${stroke}><path d="M4 19V5a2 2 0 0 1 2-2h9l5 5v11a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z"/><path d="M14 3v5h5M8 13h8M8 17h5"/></svg>`,
    hikes: `<svg viewBox="0 0 24 24" ${stroke}><path d="M12 21s7-4.5 7-11a7 7 0 1 0-14 0c0 6.5 7 11 7 11z"/><circle cx="12" cy="10" r="2.5"/></svg>`,
    routes: `<svg viewBox="0 0 24 24" ${stroke}><path d="M9 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7"/><path d="M15 4h5a2 2 0 0 1 2 2v13a2 2 0 0 1-2 2h-7"/><circle cx="9" cy="9" r="2"/><circle cx="15" cy="15" r="2"/><path d="M10.5 10.5 13.5 13.5"/></svg>`,
    bookmarks: `<svg viewBox="0 0 24 24" ${stroke}><path d="M6 4h9a2 2 0 0 1 2 2v14l-5.5-3.5L6 20V4z"/></svg>`,
    friends: `<svg viewBox="0 0 24 24" ${stroke}><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/></svg>`,
    reports: `<svg viewBox="0 0 24 24" ${stroke}><path d="M4 19V5a2 2 0 0 1 2-2h8l6 6v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z"/><path d="M14 3v5h5M9 13h6M9 17h4"/><path d="M12 8v3"/></svg>`,
    badges: `<svg viewBox="0 0 24 24" ${stroke}><path d="M12 2 9 8l-6.5.5 5 4.2L5.5 19 12 15.5 18.5 19 16.5 12.7l5-4.2L15 8 12 2z"/></svg>`,
    events: `<svg viewBox="0 0 24 24" ${stroke}><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 10h18M8 3v4M16 3v4"/></svg>`,
    trees: `<svg viewBox="0 0 24 24" ${stroke}><path d="M12 22v-6"/><path d="M12 16 7 10h3L8 5h8l-2 5h3L12 16z"/><path d="M8 22h8"/></svg>`,
    env: `<svg viewBox="0 0 24 24" ${stroke}><path d="M12 22c4-3 7-6.5 7-11a7 7 0 1 0-14 0c0 4.5 3 8 7 11z"/><path d="M9 12c1 2 3 3 3 5 4-3 2-4 3-5"/><path d="M14 10c-1 1-2 2-1 4"/></svg>`,
    photos: `<svg viewBox="0 0 24 24" ${stroke}><rect x="3" y="5" width="18" height="14" rx="2"/><circle cx="9" cy="11" r="2"/><path d="m21 16-4.5-4.5L9 19"/></svg>`,
    groupHikes: `<svg viewBox="0 0 24 24" ${stroke}><path d="m3 20 6-10 4 5 2-3 6 8"/><path d="M14 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4"/><path d="M7 12a2 2 0 1 0 0-4 2 2 0 0 0 0 4"/></svg>`,
    download: `<svg viewBox="0 0 24 24" ${stroke}><path d="M12 3v12"/><path d="m7 10 5 5 5-5"/><path d="M5 21h14"/></svg>`,
    live: `<svg viewBox="0 0 24 24" ${stroke}><path d="M12 21s7-4.5 7-11a7 7 0 1 0-14 0c0 6.5 7 11 7 11z"/><circle cx="12" cy="10" r="2.5"/><circle cx="12" cy="10" r="6" opacity=".35"/></svg>`,
    insights: `<svg viewBox="0 0 24 24" ${stroke}><path d="M4 19V9"/><path d="M10 19V5"/><path d="M16 19v-8"/><path d="M22 19V3"/></svg>`,
    milestones: `<svg viewBox="0 0 24 24" ${stroke}><path d="M8 21h8"/><path d="M12 17V3"/><path d="m7 7 5-4 5 4"/><path d="M5 21h14"/></svg>`,
  };
  return icons[name] || "";
}

/** True when a profile image URL is usable */
function twHasAvatar(url) {
  if (url == null) return false;
  const s = String(url).trim();
  return s !== "" && s !== "null" && s !== "undefined";
}

/** Initials from a display name for avatar fallbacks */
function twAvatarInitials(name) {
  const parts = String(name || "")
    .trim()
    .split(/\s+/)
    .filter(Boolean);
  if (!parts.length) return "?";
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
}

/** img HTML for an avatar — initials fallback when missing (no broken-image icon) */
function twAvatarHtml(url, className, attrs, name) {
  const cls = className || "avatar-sm";
  const extra = attrs ? " " + attrs : "";
  if (!twHasAvatar(url)) {
    const initials = twAvatarInitials(name);
    return `<span class="${cls} avatar-fallback" aria-hidden="true"${extra}>${initials}</span>`;
  }
  const nameAttr = name ? ` data-name="${String(name).replace(/"/g, "&quot;")}"` : "";
  return `<img class="${cls}" src="${url}" alt="" loading="lazy" onerror="TW.replaceBrokenAvatar(this)"${nameAttr}${extra} />`;
}

/** Replace a broken <img> avatar with initials span */
function twReplaceBrokenAvatar(img) {
  if (!img || !img.parentNode) return;
  const name = img.getAttribute("data-name") || img.alt || "";
  const cls = img.className || "avatar-sm";
  const span = document.createElement("span");
  span.className = cls + (cls.indexOf("avatar-fallback") >= 0 ? "" : " avatar-fallback");
  span.setAttribute("aria-hidden", "true");
  span.textContent = twAvatarInitials(name);
  img.parentNode.replaceChild(span, img);
}

/** Set or hide an existing <img> avatar element */
function twSetAvatar(el, url, name) {
  if (!el) return;
  if (!twHasAvatar(url)) {
    if (el.tagName === "IMG") {
      const span = document.createElement("span");
      span.className = (el.className || "avatar-sm") + " avatar-fallback";
      span.setAttribute("aria-hidden", "true");
      span.textContent = twAvatarInitials(name);
      el.parentNode && el.parentNode.replaceChild(span, el);
      return;
    }
    el.removeAttribute("src");
    el.hidden = true;
    el.style.display = "none";
    return;
  }
  el.hidden = false;
  el.style.removeProperty("display");
  if (name) el.setAttribute("data-name", name);
  el.onerror = function () {
    twReplaceBrokenAvatar(this);
  };
  el.src = url;
}

window.TW = window.TW || {};
TW.hasAvatar = twHasAvatar;
TW.avatarInitials = twAvatarInitials;
TW.avatarHtml = twAvatarHtml;
TW.replaceBrokenAvatar = twReplaceBrokenAvatar;
TW.setAvatar = twSetAvatar;

/** Circular mint button with outline icon — portfolio / dashboard tiles */
function twPortfolioIcon(name) {
  return `<span class="icon-btn-fig" aria-hidden="true">${twIcon(name)}</span>`;
}

/** Resolve brand asset path from /app/* or site root */
function twAppBrandSrc(file) {
  const name = file || "icon.svg";
  const path = (location.pathname || "").replace(/\\/g, "/");
  const inApp = /\/app(?:\/|$)/.test(path);
  return (inApp ? "../" : "") + "assets/brand/" + name;
}

/** TrailWatch logo mark (icon.svg by default; use header-logo.webp for wordmark) */
function twAppLogoHtml(opts) {
  const o = opts || {};
  const cls = o.className || "app-brand-mark";
  const file = o.file || "icon.svg";
  const alt = o.alt != null ? o.alt : "TrailWatch";
  return `<img class="${cls}" src="${twAppBrandSrc(file)}" alt="${alt}" width="28" height="28" decoding="async" />`;
}

/**
 * Enhance every .phone-frame into an iPhone-style shell:
 * side buttons, Dynamic Island, status strip with brand mark.
 */
function twMountPhoneShell() {
  document.querySelectorAll(".phone-frame").forEach((frame) => {
    if (frame.dataset.shellReady === "1") return;
    frame.dataset.shellReady = "1";

    if (!frame.querySelector(".phone-btn")) {
      frame.insertAdjacentHTML(
        "afterbegin",
        `<span class="phone-btn phone-btn-silent" aria-hidden="true"></span>` +
          `<span class="phone-btn phone-btn-vol-up" aria-hidden="true"></span>` +
          `<span class="phone-btn phone-btn-vol-down" aria-hidden="true"></span>` +
          `<span class="phone-btn phone-btn-power" aria-hidden="true"></span>`
      );
    }

    const notch = frame.querySelector(".phone-notch, .phone-island");
    if (notch) notch.classList.add("phone-island");

    const screen = frame.querySelector(".phone-screen");
    if (screen && !screen.querySelector(".phone-status")) {
      screen.insertAdjacentHTML(
        "afterbegin",
        `<div class="phone-status" aria-hidden="true">` +
          `<span class="phone-status-lead">` +
          `<span class="phone-status-time">9:41</span>` +
          twAppLogoHtml({ className: "phone-status-logo", alt: "" }) +
          `</span>` +
          `<span class="phone-status-sys">` +
          `<i class="phone-sig"></i><i class="phone-wifi"></i><i class="phone-batt"></i>` +
          `</span></div>`
      );
    }
  });

  document.querySelectorAll("[data-app-logo]").forEach((el) => {
    if (el.dataset.logoReady === "1") return;
    el.dataset.logoReady = "1";
    const file = el.getAttribute("data-app-logo") || "icon.svg";
    const lg = el.classList.contains("lg") ? " app-brand-mark lg" : " app-brand-mark";
    el.innerHTML = twAppLogoHtml({
      file: file === "" ? "icon.svg" : file,
      className: (el.getAttribute("data-logo-class") || lg.trim()),
    });
  });
}

/** App bottom nav: Explore · Community · Map · Profile */
function twAppBottomNav(active) {
  const t = (typeof TW !== "undefined" && TW.t) ? TW.t : (k) => k;
  const items = [
    { id: "explore", href: "explore.html", label: t("nav_explore"), icon: "explore", cls: "nav-explore" },
    { id: "home", href: "home.html", label: t("app_community"), icon: "home" },
    { id: "track", href: "index.html", label: t("app_map"), icon: "track" },
    { id: "profile", href: "profile.html", label: t("app_profile"), icon: "dashboard", cls: "nav-profile" },
  ];
  return `<nav class="app-bottom-nav" aria-label="App">${items.map((it) => {
    const classes = [it.cls, it.id === active ? "active" : ""].filter(Boolean).join(" ");
    const dot = it.id === "profile"
      ? `<span class="nav-notif-dot" aria-hidden="true"></span>`
      : "";
    return `<a href="${it.href}"${classes ? ` class="${classes}"` : ""}><span class="nav-ico" aria-hidden="true">${twIcon(it.icon)}${dot}</span><span>${it.label}</span></a>`;
  }).join("")}</nav>`;
}

function twMountAppNav(active, selector) {
  twMountPhoneShell();
  const el = document.querySelector(selector || "[data-app-nav]");
  if (el) el.outerHTML = twAppBottomNav(active);
}

window.twAppBrandSrc = twAppBrandSrc;
window.twAppLogoHtml = twAppLogoHtml;
window.twMountPhoneShell = twMountPhoneShell;

function difficultyPips(level) {
  let html = '<span class="diff-pips" title="L' + level + '">';
  for (let i = 1; i <= 5; i++) {
    html += '<i class="' + (i <= level ? "on" : "") + '"></i>';
  }
  html += "</span>";
  return html;
}

function difficultyLabel(level) {
  const lang = TW.getLang();
  return (TW.difficultyLabels[lang] || TW.difficultyLabels.en)[level] || "";
}

/** Demo member auth (website). Separate from CMS staff auth (`tw_cms_auth`). */
TW.MEMBER_AUTH_KEY = "tw_member_auth";

TW.getMemberAuth = function () {
  try {
    const a = JSON.parse(localStorage.getItem(TW.MEMBER_AUTH_KEY) || "null");
    return a && a.at ? a : null;
  } catch (e) {
    return null;
  }
};

TW.isLoggedIn = function () {
  return !!TW.getMemberAuth();
};

TW.memberDisplayName = function () {
  const a = TW.getMemberAuth();
  if (!a) return "";
  const name = (a.name || a.displayName || "").trim();
  if (name) return name;
  return TW.t("nav_member");
};

TW.loginMember = function (data) {
  const name = ((data && (data.name || data.displayName)) || "").trim();
  const email = ((data && data.email) || "").trim().toLowerCase();
  let premium = !!(data && data.premium);
  if (typeof CMS !== "undefined" && CMS.getStore && email) {
    try {
      const u = (CMS.getStore().users || []).find((x) => String(x.email || "").trim().toLowerCase() === email);
      if (u && CMS.isUserPremiumNow) premium = !!CMS.isUserPremiumNow(u);
      else if (u) premium = !!u.premium;
    } catch (e) {}
  }
  if (!premium && TW.user && TW.user.premium && TW.user.email && String(TW.user.email).toLowerCase() === email) {
    premium = true;
  }
  localStorage.setItem(
    TW.MEMBER_AUTH_KEY,
    JSON.stringify({
      name: name,
      displayName: name,
      email: email,
      premium: premium,
      at: Date.now(),
    })
  );
};

TW.logoutMember = function () {
  localStorage.removeItem(TW.MEMBER_AUTH_KEY);
};

TW.memberEmail = function () {
  const a = TW.getMemberAuth();
  return a && a.email ? String(a.email).trim().toLowerCase() : "";
};

TW.PUBLIC_GROUP_MIN_PRIVATE_HOSTED = 2;

TW.getMemberCmsUser = function () {
  const email = TW.memberEmail();
  if (!email || typeof CMS === "undefined" || !CMS.getStore) return null;
  try {
    return (CMS.getStore().users || []).find((u) => String(u.email || "").trim().toLowerCase() === email) || null;
  } catch (e) {
    return null;
  }
};

TW.parseDateValue = function (value) {
  if (!value) return null;
  const s = String(value).trim();
  const iso = Date.parse(s);
  if (Number.isFinite(iso)) return iso;
  const m = /^(\d{1,2})\/(\d{1,2})\/(\d{4})$/.exec(s);
  if (m) return Date.parse(m[3] + "-" + m[2].padStart(2, "0") + "-" + m[1].padStart(2, "0"));
  return null;
};

TW.getMemberPremiumInfo = function () {
  const info = { active: false, expired: false, end: "", source: "" };
  if (!TW.isLoggedIn()) return info;
  const cmsUser = TW.getMemberCmsUser();
  if (cmsUser) {
    info.source = "cms";
    info.end = cmsUser.premiumEnd || "";
    const now = typeof CMS !== "undefined" && CMS.isUserPremiumNow ? CMS.isUserPremiumNow(cmsUser) : !!cmsUser.premium;
    info.active = !!now;
    info.expired = !!(cmsUser.premium && !now);
    return info;
  }
  const email = TW.memberEmail();
  if (TW.user && TW.user.email && String(TW.user.email).toLowerCase() === email) {
    info.source = "profile";
    info.end = TW.user.premiumEnds || "";
    const endTs = TW.parseDateValue(TW.user.premiumEnds);
    const still = !!TW.user.premium && (!endTs || endTs + 24 * 60 * 60 * 1000 - 1 >= Date.now());
    info.active = still;
    info.expired = !!(TW.user.premium && !still);
    return info;
  }
  const auth = TW.getMemberAuth();
  info.source = "session";
  info.active = !!(auth && auth.premium);
  return info;
};

TW.isMemberPremium = function () {
  return TW.getMemberPremiumInfo().active;
};

TW.hostedPrivateGroupCount = function () {
  const email = TW.memberEmail();
  if (!email || typeof TW.getGroupHikes !== "function") return 0;
  return TW.getGroupHikes().filter((g) => g.visibility === "private" && g.organizerEmail && g.organizerEmail === email).length;
};

TW.getPublicGroupOrganizeStatus = function () {
  const premium = TW.isMemberPremium();
  const hosted = TW.hostedPrivateGroupCount();
  const minHosted = TW.PUBLIC_GROUP_MIN_PRIVATE_HOSTED;
  const cmsUser = TW.getMemberCmsUser();
  const staffApproved = !!(cmsUser && cmsUser.canHostPublicGroups);
  return {
    premium: premium,
    hosted: hosted,
    minHosted: minHosted,
    staffApproved: staffApproved,
    ok: !!(premium && (staffApproved || hosted >= minHosted)),
  };
};

TW.canOrganizePrivateGroup = function () {
  return TW.isLoggedIn() && TW.isMemberPremium();
};

TW.canOrganizePublicGroup = function () {
  return TW.getPublicGroupOrganizeStatus().ok;
};

TW.requirePremium = function (opts) {
  opts = opts || {};
  if (!TW.requireLogin({ messageKey: opts.loginKey || "login_to_organize", redirect: opts.loginRedirect, delay: opts.delay })) {
    return false;
  }
  if (TW.isMemberPremium()) return true;
  showToast(TW.t(opts.messageKey || "groups_premium_required"));
  if (opts.redirect) {
    clearTimeout(window._premiumRedirect);
    window._premiumRedirect = setTimeout(() => {
      location.href = opts.redirect;
    }, opts.delay != null ? opts.delay : 900);
  }
  return false;
};

/** Rough demo path around a point (Leaflet [lat,lng]) */
TW.demoPathAround = function (lat, lng) {
  const a = Number(lat) || TW.hkCenter[0];
  const b = Number(lng) || TW.hkCenter[1];
  return [
    [a, b],
    [a + 0.006, b + 0.005],
    [a + 0.012, b + 0.014],
    [a + 0.018, b + 0.008],
    [a + 0.024, b + 0.016],
  ];
};

TW.ROUTE_DRAFTS_KEY = "tw_route_drafts";
TW.ACTIVE_DRAFT_KEY = "tw_route_active";

TW.getRouteDrafts = function () {
  try {
    return JSON.parse(localStorage.getItem(TW.ROUTE_DRAFTS_KEY) || "[]");
  } catch (e) {
    return [];
  }
};

TW.setRouteDrafts = function (list) {
  localStorage.setItem(TW.ROUTE_DRAFTS_KEY, JSON.stringify(list || []));
};

TW.getRouteDraft = function (id) {
  return TW.getRouteDrafts().find((d) => d.id === id) || null;
};

TW.saveRouteDraft = function (draft) {
  if (!draft || !draft.id) return null;
  const list = TW.getRouteDrafts().filter((d) => d.id !== draft.id);
  draft.updatedAt = Date.now();
  list.unshift(draft);
  TW.setRouteDrafts(list.slice(0, 40));
  return draft;
};

TW.deleteRouteDraft = function (id) {
  TW.setRouteDrafts(TW.getRouteDrafts().filter((d) => d.id !== id));
  if (localStorage.getItem(TW.ACTIVE_DRAFT_KEY) === id) {
    localStorage.removeItem(TW.ACTIVE_DRAFT_KEY);
  }
};

TW.setActiveDraftId = function (id) {
  if (id) localStorage.setItem(TW.ACTIVE_DRAFT_KEY, id);
  else localStorage.removeItem(TW.ACTIVE_DRAFT_KEY);
};

TW.getActiveDraftId = function () {
  return localStorage.getItem(TW.ACTIVE_DRAFT_KEY) || "";
};

TW.pathDistanceKm = function (path) {
  if (!path || path.length < 2) return 0;
  const toRad = (d) => (d * Math.PI) / 180;
  let sum = 0;
  for (let i = 1; i < path.length; i++) {
    const a = path[i - 1];
    const b = path[i];
    const R = 6371;
    const dLat = toRad(b[0] - a[0]);
    const dLng = toRad(b[1] - a[1]);
    const lat1 = toRad(a[0]);
    const lat2 = toRad(b[0]);
    const h =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(lat1) * Math.cos(lat2) * Math.sin(dLng / 2) * Math.sin(dLng / 2);
    sum += 2 * R * Math.atan2(Math.sqrt(h), Math.sqrt(1 - h));
  }
  return Math.round(sum * 100) / 100;
};

TW.formatHours = function (hours) {
  if (!hours || hours <= 0) return "—";
  const totalMin = Math.max(1, Math.round(hours * 60));
  const h = Math.floor(totalMin / 60);
  const m = totalMin % 60;
  const zh = TW.getLang() === "zh";
  if (zh) {
    if (!h) return m + " 分鐘";
    if (!m) return h + " 小時";
    return h + " 小時 " + m + " 分";
  }
  if (!h) return m + " min";
  if (!m) return h + " h";
  return h + " h " + m + " min";
};

/** Naismith: 5 km/h + 600 m ascent per hour */
TW.estimateDurationHours = function (km, gainM) {
  const d = Number(km) || 0;
  const g = Number(gainM) || 0;
  if (d <= 0) return 0;
  return d / 5 + g / 600;
};

TW.estimateElevFallback = function (km) {
  const d = Number(km) || 0;
  return { gain: Math.round(d * 85), loss: Math.round(d * 80) };
};

TW.samplePathForElevation = function (path, maxPts) {
  if (!path || path.length < 2) return path || [];
  const n = Math.min(maxPts || 20, path.length);
  if (path.length <= n) return path;
  const out = [];
  for (let i = 0; i < n; i++) {
    const idx = Math.round((i * (path.length - 1)) / (n - 1));
    out.push(path[idx]);
  }
  return out;
};

TW.fetchPathElevation = function (path, cb) {
  const pts = TW.samplePathForElevation(path, 20);
  if (!pts.length) {
    cb(null);
    return;
  }
  const lats = pts.map((p) => Number(p[0]).toFixed(5)).join(",");
  const lngs = pts.map((p) => Number(p[1]).toFixed(5)).join(",");
  const url = "https://api.open-meteo.com/v1/elevation?latitude=" + lats + "&longitude=" + lngs;
  fetch(url)
    .then((r) => r.json())
    .then((data) => {
      const elev = data && data.elevation;
      if (!Array.isArray(elev) || elev.length < 2) {
        cb(null);
        return;
      }
      let gain = 0;
      let loss = 0;
      for (let i = 1; i < elev.length; i++) {
        const d = Number(elev[i]) - Number(elev[i - 1]);
        if (!isFinite(d)) continue;
        if (d > 0) gain += d;
        else loss += -d;
      }
      cb({ gain: Math.round(gain), loss: Math.round(loss) });
    })
    .catch(() => cb(null));
};

TW.newRouteDraft = function (opts) {
  opts = opts || {};
  const id = "draft_" + Date.now();
  const draft = {
    id: id,
    name: opts.name || (TW.getLang() === "zh" ? "未命名路線" : "Untitled route"),
    nameZh: opts.nameZh || opts.name || "未命名路線",
    notes: "",
    path: Array.isArray(opts.path) ? opts.path : [],
    sourceId: opts.sourceId || null,
    privacy: "private",
    updatedAt: Date.now(),
  };
  TW.saveRouteDraft(draft);
  TW.setActiveDraftId(id);
  return draft;
};

/** Duplicate a trail/recommended/record into an editable draft */
TW.duplicateRoute = function (source) {
  source = source || {};
  const baseTitle = TW.tt ? TW.tt(source, "title") : source.title || "Route";
  const titleEn = source.title || baseTitle || "Route";
  const titleZh = source.titleZh || source.title || baseTitle || "路線";
  let path = Array.isArray(source.path) ? source.path.map((p) => [Number(p[0]), Number(p[1])]) : [];
  path = path.filter((p) => !isNaN(p[0]) && !isNaN(p[1]));
  if (path.length < 2) {
    path = TW.demoPathAround(source.lat, source.lng);
  }
  const draft = TW.newRouteDraft({
    name: titleEn + " (copy)",
    nameZh: titleZh + "（副本）",
    path: path,
    sourceId: source.id || null,
  });
  draft.name = titleEn + " (copy)";
  draft.nameZh = titleZh + "（副本）";
  draft.start = path[0];
  draft.end = path[path.length - 1];
  draft.vias = path.length > 2 ? path.slice(1, -1) : [];
  draft.pois = [];
  TW.saveRouteDraft(draft);
  return draft;
};

TW.resolveTrailSource = function (id) {
  if (!id) return null;
  const fromTrails = (TW.trails || []).find((t) => t.id === id);
  if (fromTrails) return fromTrails;
  if (typeof TW.getRecommendedTrail === "function") {
    const rec = TW.getRecommendedTrail(id);
    if (rec) return rec;
  }
  const draft = TW.getRouteDraft(id);
  if (draft) {
    return {
      id: draft.id,
      title: draft.name,
      titleZh: draft.nameZh || draft.name,
      path: draft.path,
      lat: draft.path && draft.path[0] ? draft.path[0][0] : null,
      lng: draft.path && draft.path[0] ? draft.path[0][1] : null,
    };
  }
  return null;
};

TW.GROUP_HIKES_KEY = "tw_group_hikes";

TW.getGroupHikes = function () {
  try {
    return JSON.parse(localStorage.getItem(TW.GROUP_HIKES_KEY) || "[]");
  } catch (e) {
    return [];
  }
};

TW.setGroupHikes = function (list) {
  localStorage.setItem(TW.GROUP_HIKES_KEY, JSON.stringify(list || []));
};

TW.getGroupHike = function (id) {
  return TW.getGroupHikes().find((g) => g.id === id) || null;
};

TW.saveGroupHike = function (hike) {
  if (!hike || !hike.id) return null;
  const list = TW.getGroupHikes().filter((g) => g.id !== hike.id);
  hike.updatedAt = Date.now();
  list.unshift(hike);
  TW.setGroupHikes(list.slice(0, 60));
  return hike;
};

TW.makeInviteToken = function () {
  return "inv_" + Math.random().toString(36).slice(2, 10) + Date.now().toString(36).slice(-4);
};

/** Record invite acceptance for a logged-in member */
TW.acceptGroupInvite = function (hike, token) {
  if (!hike || !token || hike.inviteToken !== token) return false;
  if (!TW.isLoggedIn()) return false;
  const email = TW.memberEmail();
  hike.invitedEmails = hike.invitedEmails || [];
  if (email && hike.invitedEmails.indexOf(email) < 0) {
    hike.invitedEmails.push(email);
    TW.saveGroupHike(hike);
  }
  return true;
};

/** Can the current visitor see a private group hike route? */
TW.canViewGroupHike = function (hike, token) {
  if (!hike) return false;
  if (hike.visibility !== "private") return true;
  // Same-browser demo: local creator can open without login
  if (hike.local && (!hike.organizerEmail || hike.organizerEmail === TW.memberEmail())) return true;
  if (token && hike.inviteToken === token) {
    if (!TW.isLoggedIn()) return false;
    TW.acceptGroupInvite(hike, token);
    return true;
  }
  if (!TW.isLoggedIn()) return false;
  const email = TW.memberEmail();
  const name = (TW.memberDisplayName() || "").trim().toLowerCase();
  if (hike.organizerEmail && email && hike.organizerEmail === email) return true;
  if (email && (hike.invitedEmails || []).indexOf(email) >= 0) return true;
  const invites = hike.invited || [];
  const friends = TW.demoFriends || [];
  return invites.some((fid) => {
    const f = friends.find((x) => x.id === fid);
    if (!f) return false;
    if (email && String(f.email || "").toLowerCase() === email) return true;
    if (name && String(f.name || "").toLowerCase() === name) return true;
    return false;
  });
};

TW.authNextUrl = function (fallback) {
  try {
    const next = new URLSearchParams(location.search).get("next");
    if (
      next &&
      !/^https?:/i.test(next) &&
      next.indexOf("//") < 0 &&
      next.indexOf("javascript:") < 0
    ) {
      return next;
    }
  } catch (e) { /* ignore */ }
  return fallback || "profile.html#overview";
};

function twEsc(s) {
  return String(s == null ? "" : s)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function twMeHubHash() {
  try {
    const page = (location.pathname.split("/").pop() || "").toLowerCase();
    if (page !== "profile.html") return "";
    const h = (location.hash || "#overview").replace(/^#/, "") || "overview";
    const profileTypes = ["records", "plans", "groups", "reports", "gallery", "badges"];
    if (h === "dashboard" || h === "insights" || h === "milestones") return "overview";
    if (h === "profile" || h.startsWith("profile&") || h.startsWith("profile?") || h.startsWith("profile/")) return "profile";
    if (h === "activity" || h.startsWith("activity&") || h.startsWith("activity?") || h.startsWith("activity/")) return "profile";
    if (profileTypes.includes(h) || h === "hikes" || h === "trees") return "profile";
    if (h === "bookmarks") return "bookmarks";
    return h;
  } catch (e) {
    return "";
  }
}

TW.demoNotifications = function () {
  const t = TW.t;
  const zh = TW.getLang() === "zh";
  return [
    {
      title: t("notif_invite").replace("{name}", "Sarah Chen").replace("{hike}", zh ? "蚺蛇尖日出" : "Sunrise on Sharp Peak"),
      time: zh ? "2 小時前" : "2h ago",
      href: "group-hikes.html",
    },
    {
      title: t("notif_announce").replace("{title}", zh ? "App 離線地圖小提示" : "Offline maps tip"),
      time: zh ? "昨天" : "Yesterday",
      href: "feed.html",
    },
    {
      title: t("notif_incident"),
      time: zh ? "3 天前" : "3d ago",
      href: "reports.html",
    },
    {
      title: t("notif_group").replace("{hike}", zh ? "親子大潭行" : "Family-Friendly Tai Tam"),
      time: zh ? "本週" : "This week",
      href: "group-hikes.html",
    },
  ];
};

function renderHeader(active) {
  const u = TW.user;
  const lang = TW.getLang();
  const t = TW.t;
  const loggedIn = TW.isLoggedIn();
  const memberName = loggedIn ? TW.memberDisplayName() : "";
  const meHash = twMeHubHash();
  const onMeHub = active === "profile" || !!meHash;
  const profileTypes = ["records", "plans", "groups", "reports", "gallery", "badges", "activity"];
  const joinActive = active === "join" || active === "group-hikes";
  const resourcesActive = active === "articles" || active === "gallery";
  const meActive = (section) => {
    if (!onMeHub) return false;
    const cur = meHash || "overview";
    if (section === "profile") return cur === "profile" || profileTypes.includes(cur);
    if (section === "overview") return cur === "overview" || cur === "dashboard" || cur === "insights" || cur === "milestones";
    return cur === section;
  };
  const accountActive = loggedIn && onMeHub;
  const accountNav = loggedIn
    ? `<div class="nav-account ${accountActive ? "has-active" : ""}" id="navAccount">
          <button type="button" class="nav-account-trigger" id="accountToggle" aria-expanded="false" aria-haspopup="true" aria-label="${t("nav_profile")}">
            ${twAvatarHtml(u && u.avatar, "avatar-sm", "", u && u.name)}
            <span class="nav-account-trigger-name">${twEsc(memberName || t("nav_profile"))}</span>
          </button>
          <div class="nav-account-menu" id="accountMenu" hidden>
            <p class="nav-account-heading">${twEsc(memberName)}</p>
            <a href="profile.html#overview" class="${meActive("overview") ? "active" : ""}">${t("nav_dashboard")}</a>
            <a href="profile.html#profile" class="${meActive("profile") ? "active" : ""}">${t("nav_my_profile")}</a>
            <a href="profile.html#friends" class="${meActive("friends") ? "active" : ""}">${t("nav_friends")}</a>
            <a href="profile.html#bookmarks" class="${meActive("bookmarks") ? "active" : ""}">${t("nav_bookmarks")}</a>
            <a href="profile.html#settings" class="${meActive("settings") ? "active" : ""}">${t("nav_settings")}</a>
            <button type="button" class="nav-account-logout" id="accountLogout">${t("nav_logout")}</button>
          </div>
        </div>`
    : `<a href="login.html" class="nav-login-btn ${active === "login" ? "active" : ""}" id="navLogin">${t("nav_login")}</a>`;
  const notifs = TW.demoNotifications ? TW.demoNotifications() : [];
  const notifItems = notifs.length
    ? notifs
        .map(
          (n) =>
            `<a class="nav-notif-item" href="${twEsc(n.href || "#")}">
              <strong>${twEsc(n.title)}</strong>
              <span>${twEsc(n.time || "")}</span>
            </a>`
        )
        .join("")
    : `<p class="nav-notif-empty">${t("notif_empty")}</p>`;
  return `
  <header class="site-header">
    <div class="container">
      <a href="index.html" class="logo" aria-label="${t("nav_home")}">
        <img class="logo-img" src="assets/brand/header-logo.webp" alt="TrailWatch" />
      </a>
      <nav class="nav-links" id="navLinks">
        <a href="explore.html" class="${active === "explore" ? "active" : ""}">${t("nav_explore")}</a>
        <a href="plan.html" class="${active === "plan" ? "active" : ""}">${t("nav_plan")}</a>
        <a href="feed.html" class="${active === "feed" ? "active" : ""}">${t("nav_feed")}</a>
        <a href="group-hikes.html" class="${joinActive ? "active" : ""}">${t("nav_join")}</a>
        <div class="nav-community ${resourcesActive ? "has-active" : ""}" id="navResources">
          <button type="button" class="nav-community-trigger ${resourcesActive ? "active" : ""}" id="resourcesToggle" aria-expanded="false" aria-haspopup="true">
            ${t("nav_resources")}
            <span class="nav-caret" aria-hidden="true">▾</span>
          </button>
          <div class="nav-community-menu" id="resourcesMenu" hidden>
            <a href="articles.html" class="${active === "articles" ? "active" : ""}">${t("nav_articles")}</a>
            <a href="gallery.html" class="${active === "gallery" ? "active" : ""}">${t("nav_gallery")}</a>
          </div>
        </div>
      </nav>
      <div class="header-actions">
        <div class="lang-switch" role="group" aria-label="Language">
          <button type="button" class="${lang === "en" ? "active" : ""}" data-lang="en">EN</button>
          <button type="button" class="${lang === "zh" ? "active" : ""}" data-lang="zh">CH</button>
        </div>
        <div class="nav-notif" id="navNotif">
          <button type="button" class="icon-btn" id="notifToggle" aria-expanded="false" aria-haspopup="true" aria-label="${t("notifications")}">
            ${twIcon("bell")}
            ${notifs.length ? `<span class="nav-bell-dot" aria-hidden="true"></span>` : ""}
          </button>
          <div class="nav-notif-menu" id="notifMenu" hidden>
            <p class="nav-account-heading">${t("notifications")}</p>
            ${notifItems}
          </div>
        </div>
        ${accountNav}
        <button class="menu-toggle" id="menuToggle" aria-label="${t("menu")}">${twIcon("menu")}</button>
      </div>
    </div>
  </header>`;
}

function renderFooter() {
  const t = TW.t;
  return `
  <footer class="site-footer">
    <div class="container">
      <div class="footer-newsletter">
        <p class="footer-newsletter-label">${t("footer_newsletter")}</p>
        <form class="footer-newsletter-form" id="footerNewsletterForm">
          <input
            class="footer-newsletter-input"
            type="email"
            name="email"
            required
            autocomplete="email"
            placeholder="you@email.com"
            aria-label="${t("footer_newsletter")}"
          />
          <button type="submit" class="footer-newsletter-cta">${t("footer_newsletter_cta")}</button>
        </form>
      </div>
      <div class="footer-cols">
        <div>
          <a href="index.html" class="logo" style="margin-bottom:0.5rem;flex-direction:column;align-items:flex-start;gap:0.65rem">
            <img src="assets/brand/icon.svg" alt="TrailWatch" style="height:40px;width:auto" />
            <img class="logo-img footer" src="assets/brand/footer-logo.webp" alt="TrailWatch Footer Logo" />
          </a>
          <p class="footer-org">${t("footer_org")}</p>
          <h4>${t("footer_about_heading")}</h4>
          <div class="footer-prog">
            <strong>${t("footer_ctc_title")}</strong>
            <p>${t("footer_ctc_body")}</p>
          </div>
          <div class="footer-prog">
            <strong>${t("footer_mytree_title")}</strong>
            <p>${t("footer_mytree_body")}</p>
          </div>
          <div class="footer-prog">
            <strong>${t("footer_backyard_title")}</strong>
            <p>${t("footer_backyard_body")}</p>
          </div>
          <a href="about.html">${t("footer_about_more")}</a>
        </div>
        <div>
          <h4>${t("footer_premium")}</h4>
          <p class="footer-blurb">${t("footer_premium_body")}</p>
          <a href="get-app.html#premium">${t("footer_premium_link")}</a>
          <h4><a href="about.html#contact">${t("footer_contact")}</a></h4>
          <h4><a href="about.html#faq">${t("footer_faq")}</a></h4>
          <h4>${t("footer_legal")}</h4>
          <a href="legal.html#terms">${t("footer_terms")}</a>
          <a href="legal.html#privacy">${t("footer_privacy")}</a>
        </div>
        <div>
          <h4>${t("footer_social")}</h4>
          <div class="footer-social" aria-label="Social">
            <a href="https://www.facebook.com/trailwatchhk" target="_blank" rel="noopener">Facebook</a>
            <a href="https://www.instagram.com/trailwatchhk" target="_blank" rel="noopener">Instagram</a>
            <a href="https://www.youtube.com/@parksandtrails" target="_blank" rel="noopener">YouTube</a>
          </div>
        </div>
      </div>
      <div class="footer-bottom">
        <span>${t("footer_copy")}</span>
        <span class="footer-bottom-links">
          <a href="legal.html#terms">${t("footer_terms")}</a>
          <a href="legal.html#privacy">${t("footer_privacy")}</a>
        </span>
      </div>
    </div>
  </footer>
  <div class="toast" id="toast"></div>`;
}

TW.bindFooterNewsletter = function () {
  const form = document.getElementById("footerNewsletterForm");
  if (!form || form.dataset.bound) return;
  form.dataset.bound = "1";
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    showToast(TW.t("feedback_thanks"));
    form.reset();
  });
};

function showToast(msg) {
  const t = document.getElementById("toast");
  if (!t) return;
  t.textContent = msg;
  t.classList.add("show");
  clearTimeout(window._toastTimer);
  window._toastTimer = setTimeout(() => t.classList.remove("show"), 2400);
}

/** Soft-gate guests: toast + optional redirect to login. Returns true if logged in. */
TW.requireLogin = function (opts) {
  opts = opts || {};
  if (TW.isLoggedIn()) return true;
  const key = opts.messageKey || "login_required";
  showToast(TW.t(key));
  if (opts.redirect !== false) {
    const next = opts.next || (location.pathname.split("/").pop() + location.search + location.hash);
    clearTimeout(window._loginRedirect);
    window._loginRedirect = setTimeout(() => {
      location.href = "login.html?next=" + encodeURIComponent(next);
    }, opts.delay != null ? opts.delay : 900);
  }
  return false;
};

TW.emptyStateHtml = function (message, actionLabel, actionHrefOrAttr) {
  const msg = TW.escapeHtml(message || TW.t("empty_generic"));
  let action = "";
  if (actionLabel && actionHrefOrAttr) {
    if (String(actionHrefOrAttr).indexOf("http") === 0 || String(actionHrefOrAttr).indexOf(".html") >= 0 || String(actionHrefOrAttr).charAt(0) === "#") {
      action = `<p class="empty-state-action"><a class="link-more" href="${TW.escapeHtml(actionHrefOrAttr)}">${TW.escapeHtml(actionLabel)}</a></p>`;
    } else {
      action = `<p class="empty-state-action"><button type="button" class="link-more" ${actionHrefOrAttr}>${TW.escapeHtml(actionLabel)}</button></p>`;
    }
  }
  return `<div class="empty-state"><p>${msg}</p>${action}</div>`;
};

TW.resultCountHtml = function (count, label) {
  return `<span class="result-count">${TW.escapeHtml(String(count))} ${TW.escapeHtml(label || "")}</span>`;
};

function initShell(active) {
  if (!document.querySelector('link[rel="icon"]')) {
    const icon = document.createElement("link");
    icon.rel = "icon";
    icon.type = "image/svg+xml";
    icon.href = "assets/brand/icon.svg";
    document.head.appendChild(icon);
  }
  const mount = document.getElementById("app-header");
  const foot = document.getElementById("app-footer");
  if (mount) mount.innerHTML = renderHeader(active);
  if (foot) {
    foot.innerHTML = renderFooter();
    TW.bindFooterNewsletter();
  }

  const toggle = document.getElementById("menuToggle");
  const links = document.getElementById("navLinks");
  if (toggle && links) {
    toggle.addEventListener("click", () => {
      links.classList.toggle("open");
      const account = document.getElementById("navAccount");
      if (account && !links.classList.contains("open")) {
        account.classList.remove("open");
        const btn = document.getElementById("accountToggle");
        const menu = document.getElementById("accountMenu");
        if (btn) btn.setAttribute("aria-expanded", "false");
        if (menu) menu.hidden = true;
      }
      const resources = document.getElementById("navResources");
      if (resources && !links.classList.contains("open")) {
        resources.classList.remove("open");
        const rBtn = document.getElementById("resourcesToggle");
        const rMenu = document.getElementById("resourcesMenu");
        if (rBtn) rBtn.setAttribute("aria-expanded", "false");
        if (rMenu) rMenu.hidden = true;
      }
    });
  }

  const resourcesToggle = document.getElementById("resourcesToggle");
  const resourcesMenu = document.getElementById("resourcesMenu");
  const navResources = document.getElementById("navResources");
  if (resourcesToggle && resourcesMenu && navResources) {
    resourcesToggle.addEventListener("click", (e) => {
      e.stopPropagation();
      const open = !navResources.classList.contains("open");
      navResources.classList.toggle("open", open);
      resourcesToggle.setAttribute("aria-expanded", open ? "true" : "false");
      resourcesMenu.hidden = !open;
    });
    document.addEventListener("click", (e) => {
      if (!navResources.contains(e.target)) {
        navResources.classList.remove("open");
        resourcesToggle.setAttribute("aria-expanded", "false");
        resourcesMenu.hidden = true;
      }
    });
  }

  const notifToggle = document.getElementById("notifToggle");
  const notifMenu = document.getElementById("notifMenu");
  const navNotif = document.getElementById("navNotif");
  if (notifToggle && notifMenu && navNotif) {
    notifToggle.addEventListener("click", (e) => {
      e.stopPropagation();
      const open = !navNotif.classList.contains("open");
      navNotif.classList.toggle("open", open);
      notifToggle.setAttribute("aria-expanded", open ? "true" : "false");
      notifMenu.hidden = !open;
    });
    document.addEventListener("click", (e) => {
      if (!navNotif.contains(e.target)) {
        navNotif.classList.remove("open");
        notifToggle.setAttribute("aria-expanded", "false");
        notifMenu.hidden = true;
      }
    });
  }

  const accountToggle = document.getElementById("accountToggle");
  const accountMenu = document.getElementById("accountMenu");
  const navAccount = document.getElementById("navAccount");
  if (accountToggle && accountMenu && navAccount) {
    accountToggle.addEventListener("click", (e) => {
      e.stopPropagation();
      const open = !navAccount.classList.contains("open");
      navAccount.classList.toggle("open", open);
      accountToggle.setAttribute("aria-expanded", open ? "true" : "false");
      accountMenu.hidden = !open;
    });
    document.addEventListener("click", (e) => {
      if (!navAccount.contains(e.target)) {
        navAccount.classList.remove("open");
        accountToggle.setAttribute("aria-expanded", "false");
        accountMenu.hidden = true;
      }
    });
  }

  const accountLogout = document.getElementById("accountLogout");
  if (accountLogout) {
    accountLogout.addEventListener("click", () => {
      TW.logoutMember();
      location.href = "index.html";
    });
  }

  document.querySelectorAll(".lang-switch button").forEach((btn) => {
    btn.addEventListener("click", () => {
      TW.setLang(btn.dataset.lang);
      location.reload();
    });
  });

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (!key) return;
    const translated = TW.t(key);
    // Never expose raw keys (e.g. login_email) — keep HTML fallback text instead
    if (translated && translated !== key) el.textContent = translated;
  });
  document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
    const key = el.getAttribute("data-i18n-placeholder");
    if (!key) return;
    const translated = TW.t(key);
    if (translated && translated !== key) el.setAttribute("placeholder", translated);
  });

  if (typeof TW.applyCmsCopy === "function") TW.applyCmsCopy();
}

function tagClass(tag) {
  const map = {
    Community: "tag-community",
    社群: "tag-community",
    Story: "tag-story",
    故事: "tag-story",
    "Group Hike": "tag-group",
    聯誼行山: "tag-group",
    Record: "tag-record",
    記錄: "tag-record",
    Route: "tag-route",
    Incident: "tag-record",
    事故: "tag-record",
    Route: "tag-story",
    路線: "tag-story",
    Ad: "tag-sponsored",
    廣告: "tag-sponsored",
    Promo: "tag-sponsored",
    推廣: "tag-sponsored",
    "PnT Event": "tag-community",
    活動: "tag-community",
  };
  return map[tag] || "tag-community";
}

function renderFeedCard(post) {
  let media = "";
  if (post.image) {
    media = `<div class="feed-media"><img src="${post.image}" alt="" loading="lazy" onerror="this.closest('.feed-media')?.remove()" /></div>`;
  } else if (post.mapStyle) {
    media = `<div class="feed-media" style="background:linear-gradient(135deg,#c8e6c9,#81c784);display:grid;place-items:center;color:#0b421a;font-weight:700;font-size:0.9rem">📍 GPS</div>`;
  }

  let stats = "";
  if (post.distance) {
    stats = `<div class="feed-stats">
      <span>📏 ${post.distance}</span>
      ${post.duration ? `<span>⏱ ${post.duration}</span>` : ""}
      ${post.rating ? `<span>★ ${post.rating}</span>` : ""}
    </div>`;
  }

  const title = TW.tt(post, "title");
  const body = TW.tt(post, "body");
  const tag = TW.tt(post, "tag") || post.tag;
  const time = TW.tt(post, "time") || post.time;
  const inApp = /\/app(?:\/|$)/.test((location.pathname || "").replace(/\\/g, "/"));
  const recHref =
    post.type === "record" && post.recordId
      ? "record-detail.html?id=" + encodeURIComponent(post.recordId)
      : post.type === "incident"
        ? "reports.html"
        : post.type === "route"
          ? "explore.html"
          : post.type === "promo" || post.type === "ad" || post.type === "announcement"
            ? "feed.html"
            : "";
  const openAttr = recHref
    ? ` role="link" tabindex="0" data-record-href="${recHref}" style="cursor:pointer"`
    : "";

  const channel = post.channel || (post.pinned || post.user === "TrailWatch" || /Sponsored|Promo|Ad/i.test(post.tag || "") ? ( /Sponsored|Promo|Ad/i.test(post.tag || "") ? "official" : "official") : "friends");
  const channelClass =
    channel === "official" || post.pinned ? " feed-card--official" : channel === "ad" ? " feed-card--ad" : " feed-card--friends";
  const pinBadge = post.pinned ? `<span class="feed-pin">${TW.t("feed_pinned")}</span>` : "";

  return `
  <article class="card feed-card${channelClass}"${openAttr}>
    <div class="feed-card-header">
      ${twAvatarHtml(post.avatar, "avatar-sm", "", post.user)}
      <div class="user-info">
        <div class="name">${post.user}${pinBadge}</div>
        <div class="time">${time}</div>
      </div>
      <span class="tag ${tagClass(tag)}">${tag}</span>
    </div>
    <div class="feed-card-body">
      ${title ? `<strong style="display:block;margin-bottom:0.35rem">${title}</strong>` : ""}
      ${body ? `<p>${body}</p>` : ""}
      ${media}
      ${stats}
    </div>
    <div class="feed-actions">
      <button type="button" class="like-btn" data-likes="${post.likes}">♥ ${post.likes}</button>
      <button type="button">💬 ${post.comments}</button>
      ${
        post.type === "group"
          ? `<button type="button" class="btn btn-primary join-group-btn" style="margin-left:auto;padding:0.4rem 0.9rem;font-size:0.8rem">${TW.t("join")}</button>`
          : recHref
            ? `<a class="btn btn-secondary" style="margin-left:auto;padding:0.4rem 0.9rem;font-size:0.8rem" href="${recHref}">${TW.t("rec_detail")}</a>`
            : ""
      }
    </div>
  </article>`;
}

TW.escapeHtml = function (s) {
  return String(s == null ? "" : s)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
};

TW.renderArticleCard = function (a, opts) {
  opts = opts || {};
  const zh = TW.getLang() === "zh";
  const title = zh ? a.titleZh || a.title : a.title;
  const excerpt = zh ? a.excerptZh || a.excerpt : a.excerpt;
  const url = zh ? a.urlZh || a.url : a.url;
  const cat = TW.articleCategoryLabel ? TW.articleCategoryLabel(a.category) : a.category || "";
  const esc = TW.escapeHtml;
  const tags = (a.tags || [])
    .map((t) => `<span class="article-tag">${esc(zh ? t.nameZh || t.name : t.name)}</span>`)
    .join("");
  const img = a.image
    ? `<div class="article-card-media"><img src="${esc(a.image)}" alt="" loading="lazy" /></div>`
    : "";
  const author = a.author ? `<span>${esc(TW.t("article_by"))} ${esc(a.author)}</span>` : "";
  const compact = opts.compact ? " article-card--featured" : "";
  const excerptHtml = excerpt
    ? `<p class="article-excerpt${opts.compact ? " article-excerpt--short" : ""}">${esc(excerpt)}</p>`
    : "";
  return `<article class="article-card article-card--rich${compact}">
    ${img}
    <div class="article-card-body">
      <div class="meta">${esc(cat)} · ${esc(a.date || "")}${author ? " · " + author : ""}</div>
      <strong><a href="${esc(url)}" target="_blank" rel="noopener noreferrer">${esc(title)}</a></strong>
      ${excerptHtml}
      ${opts.compact ? "" : `<div class="article-tags">${tags}</div>`}
      <a class="article-more" href="${esc(url)}" target="_blank" rel="noopener noreferrer">${esc(TW.t("article_read_more"))}</a>
    </div>
  </article>`;
};

function renderTrailCard(t, opts) {
  opts = opts || {};
  const planned = TW.isPlanned(t.id);
  const bookmarked = typeof TW.isBookmarked === "function" && TW.isBookmarked(t.id);
  const title = TW.tt(t, "title");
  const desc = TW.tt(t, "desc");
  const planBtn = opts.hidePlan
    ? ""
    : `<button type="button" class="btn ${planned ? "btn-secondary" : "btn-primary"} plan-btn" data-trail="${t.id}">
        ${planned ? "✓ " + TW.t("planned") : "+ " + TW.t("mark_plan")}
      </button>`;
  const dupBtn = opts.hideDuplicate
    ? ""
    : `<button type="button" class="btn btn-secondary dup-btn" data-trail="${t.id}">
        ${TW.t("route_duplicate")}
      </button>`;
  const bookmarkBtn = opts.hideBookmark
    ? ""
    : `<button type="button" class="trail-bookmark bookmark-btn${bookmarked ? " active" : ""}" data-trail="${t.id}" aria-pressed="${bookmarked ? "true" : "false"}" title="${TW.t("rec_bookmark")}">${twIcon("bookmarks")}</button>`;

  return `
  <article class="trail-card" id="${t.id}">
    <div class="trail-card-img">
      <img src="${t.image}" alt="${title}" loading="lazy" />
      ${bookmarkBtn}
      <span class="rating">${twIcon("star")} ${t.rating}</span>
      <span class="diff-badge">L${t.difficulty} · ${difficultyLabel(t.difficulty)}</span>
    </div>
    <div class="trail-card-body">
      <div class="feature-icons">
        <span title="District">${TW.getLang() === "zh" ? "區" : "📍"}</span>
        <span style="width:auto;padding:0 0.45rem;border-radius:999px;font-size:0.65rem;font-weight:600">${TW.districtName(t.district)}</span>
        ${difficultyPips(t.difficulty)}
      </div>
      <h3>${title}</h3>
      <p class="desc">${desc}</p>
      <div class="trail-meta">
        <span>📏 ${t.distance}</span>
        <span>⏱ ${t.duration}</span>
        <span>⬆ ${t.elevation}</span>
      </div>
      <div class="trail-card-actions">
      ${planBtn}
      ${dupBtn}
      </div>
    </div>
  </article>`;
}

function renderRecordItem(r, detailHref) {
  const id = r.id || "";
  const inApp = /\/app(?:\/|$)/.test((location.pathname || "").replace(/\\/g, "/"));
  const href =
    detailHref ||
    (id
      ? (inApp ? "record-detail.html" : "record-detail.html") + "?id=" + encodeURIComponent(id)
      : "#");
  const date = TW.getLang() === "zh" && r.dateZh ? r.dateZh : r.date;
  return `
  <a class="record-item" href="${href}" style="text-decoration:none;color:inherit">
    <img src="${r.image}" alt="" loading="lazy" />
    <div class="body">
      <div class="top"><span>${date || ""}</span><span>★ ${r.rating != null ? r.rating : "—"}</span></div>
      <h4>${TW.tt(r, "title")}</h4>
      <p class="snippet">${TW.tt(r, "snippet")}</p>
      <div class="trail-meta">
        <span>📏 ${r.distance || "—"}</span>
        <span>⏱ ${r.duration || "—"}</span>
        <span>⬆ ${r.elev || (r.elevGain != null ? r.elevGain + " m" : "—")}</span>
      </div>
    </div>
  </a>`;
}

TW.getRecord = function (id) {
  if (!id) return null;
  return (TW.records || []).find((r) => r.id === id) || null;
};

/** Resolve photo URLs for records/hikes relative to current page (app vs root) */
TW.recordPhotoSrc = function (src) {
  if (!src) return "";
  if (/^https?:\/\//i.test(src) || src.startsWith("data:")) return src;
  const inApp = /\/app(?:\/|$)/.test((location.pathname || "").replace(/\\/g, "/"));
  if (src.startsWith("../")) return src;
  if (src.startsWith("assets/") && inApp) return "../" + src;
  return src;
};

/** Draw start (white circle) + end (red square) markers on a Leaflet map */
TW.addRouteEndpoints = function (map, path) {
  if (!map || !path || path.length < 1) return;
  const start = path[0];
  const end = path[path.length - 1];
  L.circleMarker(start, {
    radius: 8,
    color: "#111",
    weight: 2,
    fillColor: "#fff",
    fillOpacity: 1,
  }).addTo(map);
  const endIcon = L.divIcon({
    className: "tw-end-marker",
    html: '<span style="display:block;width:14px;height:14px;background:#e84a3c;border:2px solid #fff;box-shadow:0 0 0 1px #e84a3c;border-radius:2px"></span>',
    iconSize: [14, 14],
    iconAnchor: [7, 7],
  });
  L.marker(end, { icon: endIcon }).addTo(map);
};

document.addEventListener("click", (e) => {
  const card = e.target.closest("[data-record-href]");
  if (!card) return;
  if (e.target.closest("a, button, .like-btn")) return;
  const href = card.getAttribute("data-record-href");
  if (href) location.href = href;
});

document.addEventListener("keydown", (e) => {
  if (e.key !== "Enter" && e.key !== " ") return;
  const card = e.target.closest("[data-record-href]");
  if (!card || e.target !== card) return;
  e.preventDefault();
  const href = card.getAttribute("data-record-href");
  if (href) location.href = href;
});

function bindLikes() {
  document.querySelectorAll(".like-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const liked = btn.classList.toggle("liked");
      let n = parseInt(btn.dataset.likes, 10);
      n = liked ? n + 1 : Math.max(0, n - 1);
      btn.dataset.likes = n;
      btn.textContent = `♥ ${n}`;
    });
  });
}

function bindPlanButtons(root) {
  // Uses delegation via data attribute — single handler registered once
}

document.addEventListener("click", (e) => {
  const btn = e.target.closest(".plan-btn");
  if (!btn) return;
  e.preventDefault();
  e.stopPropagation();
  if (!TW.requireLogin({ messageKey: "login_to_save" })) return;
  const id = btn.dataset.trail;
  const added = TW.togglePlan(id);
  showToast(added ? TW.t("toast_planned") : TW.t("toast_unplanned"));
  btn.className = "btn " + (added ? "btn-secondary" : "btn-primary") + " plan-btn";
  btn.textContent = added ? "✓ " + TW.t("planned") : "+ " + TW.t("mark_plan");
  btn.dataset.trail = id;
});

document.addEventListener("click", (e) => {
  const btn = e.target.closest(".bookmark-btn");
  if (!btn) return;
  e.preventDefault();
  e.stopPropagation();
  if (!TW.requireLogin({ messageKey: "login_to_save" })) return;
  const id = btn.dataset.trail;
  if (!id || typeof TW.toggleBookmark !== "function") return;
  const on = TW.toggleBookmark(id);
  btn.classList.toggle("active", on);
  btn.setAttribute("aria-pressed", on ? "true" : "false");
  showToast(on ? TW.t("toast_bookmarked") : TW.t("toast_unbookmarked"));
});

document.addEventListener("click", (e) => {
  const btn = e.target.closest(".dup-btn");
  if (!btn) return;
  e.preventDefault();
  e.stopPropagation();
  if (!TW.requireLogin({ messageKey: "login_to_duplicate" })) return;
  const id = btn.dataset.trail;
  const source =
    (typeof TW.resolveTrailSource === "function" && TW.resolveTrailSource(id)) ||
    (TW.trails || []).find((t) => t.id === id) ||
    (typeof TW.getRecommendedTrail === "function" ? TW.getRecommendedTrail(id) : null) ||
    null;
  if (!source) {
    showToast(TW.t("route_dup_missing"));
    return;
  }
  const draft = TW.duplicateRoute(source);
  showToast(TW.t("toast_duplicated"));
  setTimeout(() => {
    location.href = "plan.html?edit=" + encodeURIComponent(draft.id);
  }, 450);
});

function bindTabs(selector, onChange) {
  const root = document.querySelector(selector);
  if (!root) return;
  root.querySelectorAll(".tab, .chip").forEach((el) => {
    el.addEventListener("click", () => {
      root.querySelectorAll(".tab, .chip").forEach((x) => x.classList.remove("active"));
      el.classList.add("active");
      if (onChange) onChange(el.dataset.tab || el.dataset.filter || el.textContent.trim());
    });
  });
}

function statusLabel(s) {
  if (window.CMS && CMS.statusLabel) {
    const known = CMS.INCIDENT_STATUSES.some((x) => x.id === s);
    if (known) return CMS.statusLabel(s);
  }
  return TW.t("status_" + s) || s;
}

function statusClass(s) {
  if (s === "published" || s === "handled" || s === "closed") return "status-closed";
  if (s === "reported_govt" || s === "updated" || s === "under_review") return "status-updated";
  if (s === "rejected") return "status-received";
  return { closed: "status-closed", updated: "status-updated", received: "status-received" }[s] || "status-received";
}

function renderReportItem(r) {
  const note = TW.getLang() === "zh" ? r.staffNoteZh || r.staffNote : r.staffNote;
  const reporter =
    TW.getLang() === "zh" ? r.reporterZh || r.reporter : r.reporter || r.reporterZh;
  const catKey = "cat_" + (TW.normalizeReportCategory ? TW.normalizeReportCategory(r.category) : r.category);
  const catLabel = TW.t(catKey) !== catKey ? TW.t(catKey) : r.category || "";
  return `
  <article class="report-item">
    <div class="report-thumb-wrap">
      <img class="report-thumb" src="${r.image || ""}" alt="" />
      <span class="status-badge ${statusClass(r.status)}">${statusLabel(r.status)}</span>
    </div>
    <div>
      <h4>${TW.tt(r, "title")}</h4>
      <p class="desc">${TW.tt(r, "desc")}</p>
      ${
        note
          ? `<p class="desc" style="color:var(--green-800);font-weight:500">${TW.t("staff_update")}: ${note}</p>`
          : ""
      }
      <div class="meta">
        <span>📅 ${r.date || ""}</span>
        ${catLabel ? `<span>${catLabel}</span>` : ""}
        ${reporter ? `<span>👤 ${reporter}</span>` : ""}
        <span>📍 ${r.coords || ""}</span>
      </div>
    </div>
  </article>`;
}

document.addEventListener("DOMContentLoaded", () => {
  document.body.addEventListener("click", (e) => {
    const a = e.target.closest("[data-toast]");
    if (a) {
      e.preventDefault();
      showToast(a.dataset.toast);
    }
  });
});
