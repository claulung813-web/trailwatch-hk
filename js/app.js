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
  localStorage.setItem(
    TW.MEMBER_AUTH_KEY,
    JSON.stringify({
      name: name,
      displayName: name,
      email: ((data && data.email) || "").trim().toLowerCase(),
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
    const activityTypes = ["records", "plans", "groups", "reports", "gallery"];
    if (h === "dashboard") return "overview";
    if (h === "profile") return "settings";
    if (h === "hikes") return "records";
    if (h === "bookmarks") return "overview";
    if (h === "activity" || h.startsWith("activity&") || h.startsWith("activity?") || h.startsWith("activity/")) {
      const m = h.match(/[?&]type=([a-z]+)/) || h.match(/^activity\/([a-z]+)/);
      if (m && activityTypes.includes(m[1])) return m[1];
      return "activity";
    }
    return h;
  } catch (e) {
    return "";
  }
}

function renderHeader(active) {
  const u = TW.user;
  const lang = TW.getLang();
  const t = TW.t;
  const loggedIn = TW.isLoggedIn();
  const memberName = loggedIn ? TW.memberDisplayName() : "";
  const meHash = twMeHubHash();
  const onMeHub = active === "profile" || !!meHash;
  const activityTypes = ["records", "plans", "groups", "reports", "gallery"];
  const meActive = (section) => {
    if (!onMeHub) return false;
    const cur = meHash || "overview";
    if (section === "activity") return cur === "activity" || activityTypes.includes(cur);
    return cur === section;
  };
  const accountActive = loggedIn && onMeHub;
  const accountNav = loggedIn
    ? `<div class="nav-account ${accountActive ? "has-active" : ""}" id="navAccount">
          <button type="button" class="nav-account-trigger" id="accountToggle" aria-expanded="false" aria-haspopup="true">
            ${twAvatarHtml(u && u.avatar, "avatar-sm", "", u && u.name)}
            <span class="nav-account-trigger-name">${twEsc(memberName)}</span>
          </button>
          <div class="nav-account-menu" id="accountMenu" hidden>
            <p class="nav-account-heading">${twEsc(memberName)}</p>
            <a href="profile.html#overview" class="${meActive("overview") ? "active" : ""}">${t("nav_dashboard")}</a>
            <a href="profile.html#activity" class="${meActive("activity") ? "active" : ""}">${t("nav_my_activity")}</a>
            <a href="profile.html#badges" class="${meActive("badges") ? "active" : ""}">${t("nav_badges")}</a>
            <a href="profile.html#friends" class="${meActive("friends") ? "active" : ""}">${t("nav_friends")}</a>
            <a href="profile.html#settings" class="${meActive("settings") ? "active" : ""}">${t("nav_settings")}</a>
            <button type="button" class="nav-account-logout" id="accountLogout">${t("nav_logout")}</button>
          </div>
        </div>`
    : `<a href="login.html" class="${active === "login" ? "active" : ""}" id="navLogin">${t("nav_login")}</a>`;
  return `
  <header class="site-header">
    <div class="container">
      <a href="index.html" class="logo">
        <img class="logo-img" src="assets/brand/header-logo.webp" alt="TrailWatch" />
      </a>
      <nav class="nav-links" id="navLinks">
        <a href="index.html" class="${active === "home" ? "active" : ""}">${t("nav_home")}</a>
        <a href="explore.html" class="${active === "explore" ? "active" : ""}">${t("nav_explore")}</a>
        <a href="plan.html" class="${active === "plan" ? "active" : ""}">${t("nav_plan")}</a>
        <a href="reports.html" class="${active === "reports" ? "active" : ""}">${t("nav_incidents")}</a>
        <a href="feed.html" class="${active === "feed" ? "active" : ""}">${t("nav_feed")}</a>
        <a href="group-hikes.html" class="${active === "group-hikes" ? "active" : ""}">${t("nav_groups")}</a>
        <a href="articles.html" class="${active === "articles" ? "active" : ""}">${t("nav_articles")}</a>
        <a href="get-app.html" class="nav-app ${active === "app" ? "active" : ""}">${t("nav_app")}</a>

        ${accountNav}
      </nav>
      <div class="header-actions">
        <div class="lang-switch" role="group" aria-label="Language">
          <button type="button" class="${lang === "en" ? "active" : ""}" data-lang="en">EN</button>
          <button type="button" class="${lang === "zh" ? "active" : ""}" data-lang="zh">繁</button>
        </div>
        <button class="icon-btn hide-sm" aria-label="${t("notifications")}">${twIcon("bell")}</button>
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
          <p class="footer-about-bits"><a href="about.html">${t("footer_about_bits")}</a></p>
        </div>
        <div>
          <h4>${t("footer_discover")}</h4>
          <a href="explore.html">${t("footer_routes")}</a>
          <a href="explore.html?tab=records">${t("tab_records")}</a>
          <a href="reports.html">${t("footer_incidents")}</a>
          <a href="feed.html">${t("footer_feed")}</a>
          <a href="plan.html">${t("footer_plan")}</a>
          <a href="group-hikes.html">${t("nav_groups")}</a>
          <a href="articles.html">${t("nav_articles")}</a>
          <a href="gallery.html">${t("nav_gallery")}</a>
        </div>
        <div>
          <h4>${t("footer_you")}</h4>
          <a href="profile.html#overview">${t("nav_dashboard")}</a>
          <a href="profile.html#activity">${t("nav_my_activity")}</a>
          <a href="profile.html#friends">${t("nav_friends")}</a>
          <a href="profile.html#badges">${t("nav_badges")}</a>
          <a href="profile.html#insights">${t("footer_insights")}</a>
          <a href="profile.html#milestones">${t("footer_milestones")}</a>
          <a href="profile.html#settings">${t("nav_settings")}</a>
          <a href="get-app.html">${t("nav_app")}</a>
        </div>
        <div>
          <h4>${t("footer_help")}</h4>
          <a href="about.html">${t("nav_about")}</a>
          <a href="about.html#contact">${t("footer_contact")}</a>
          <a href="about.html#faq">${t("footer_faq")}</a>
          <div class="footer-social" aria-label="Social">
            <a href="https://www.facebook.com/" target="_blank" rel="noopener">Facebook</a>
            <a href="https://www.instagram.com/" target="_blank" rel="noopener">Instagram</a>
            <a href="https://www.youtube.com/" target="_blank" rel="noopener">YouTube</a>
          </div>
        </div>
      </div>
    </div>
    <div class="footer-bottom">${t("footer_copy")}</div>
  </footer>
  <a class="donate-fab" href="donate.html" title="${t("nav_donate")}">${t("nav_donate")}</a>
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
    Sponsored: "tag-sponsored",
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
      ? (inApp ? "record-detail.html" : "record-detail.html") + "?id=" + encodeURIComponent(post.recordId)
      : "";
  const openAttr = recHref
    ? ` role="link" tabindex="0" data-record-href="${recHref}" style="cursor:pointer"`
    : "";

  return `
  <article class="card feed-card"${openAttr}>
    <div class="feed-card-header">
      ${twAvatarHtml(post.avatar, "avatar-sm", "", post.user)}
      <div class="user-info">
        <div class="name">${post.user}</div>
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
          ? `<button type="button" class="btn btn-primary" style="margin-left:auto;padding:0.4rem 0.9rem;font-size:0.8rem" onclick="showToast(TW.t('toast_joined'))">${TW.t("join")}</button>`
          : recHref
            ? `<a class="btn btn-secondary" style="margin-left:auto;padding:0.4rem 0.9rem;font-size:0.8rem" href="${recHref}">${TW.t("rec_detail")}</a>`
            : ""
      }
    </div>
  </article>`;
}

function renderTrailCard(t, opts) {
  opts = opts || {};
  const planned = TW.isPlanned(t.id);
  const title = TW.tt(t, "title");
  const desc = TW.tt(t, "desc");
  const planBtn = opts.hidePlan
    ? ""
    : `<button type="button" class="btn ${planned ? "btn-secondary" : "btn-primary"} plan-btn" data-trail="${t.id}" style="margin-top:0.75rem;width:100%;padding:0.45rem;font-size:0.8rem">
        ${planned ? "✓ " + TW.t("planned") : "+ " + TW.t("mark_plan")}
      </button>`;
  const dupBtn = opts.hideDuplicate
    ? ""
    : `<button type="button" class="btn btn-secondary dup-btn" data-trail="${t.id}" style="margin-top:0.45rem;width:100%;padding:0.45rem;font-size:0.8rem">
        ${TW.t("route_duplicate")}
      </button>`;

  return `
  <article class="trail-card" id="${t.id}">
    <div class="trail-card-img">
      <img src="${t.image}" alt="${title}" loading="lazy" />
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
      ${planBtn}
      ${dupBtn}
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
  const id = btn.dataset.trail;
  const added = TW.togglePlan(id);
  showToast(added ? TW.t("toast_planned") : TW.t("toast_unplanned"));
  btn.className = "btn " + (added ? "btn-secondary" : "btn-primary") + " plan-btn";
  btn.style.cssText = "margin-top:0.75rem;width:100%;padding:0.45rem;font-size:0.8rem";
  btn.textContent = added ? "✓ " + TW.t("planned") : "+ " + TW.t("mark_plan");
  btn.dataset.trail = id;
});

document.addEventListener("click", (e) => {
  const btn = e.target.closest(".dup-btn");
  if (!btn) return;
  e.preventDefault();
  e.stopPropagation();
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
  showToast(TW.isLoggedIn() ? TW.t("toast_duplicated") : TW.t("toast_duplicated_guest"));
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
  return `
  <article class="report-item">
    <div class="report-thumb-wrap">
      <img class="report-thumb" src="${r.image}" alt="" />
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
      <div class="meta"><span>📅 ${r.date || ""}</span><span>📍 ${r.coords || ""}</span></div>
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
