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
    speaker: `<svg viewBox="0 0 24 24" ${stroke}><path d="M11 5 6 9H2v6h4l5 4V5z"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14"/></svg>`,
    insights: `<svg viewBox="0 0 24 24" ${stroke}><path d="M4 19V9"/><path d="M10 19V5"/><path d="M16 19v-8"/><path d="M22 19V3"/></svg>`,
    milestones: `<svg viewBox="0 0 24 24" ${stroke}><path d="M8 21h8"/><path d="M12 17V3"/><path d="m7 7 5-4 5 4"/><path d="M5 21h14"/></svg>`,
    settings: `<svg width="20" height="20" viewBox="0 0 24 24" ${stroke}><circle cx="12" cy="12" r="3"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>`,
    facebook: `<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M14 9h3V6h-3c-1.7 0-3 1.3-3 3v2H9v3h2v7h3v-7h2.5l.5-3H14V9z"/></svg>`,
    instagram: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg>`,
    youtube: `<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2 31.5 31.5 0 0 0 0 12a31.5 31.5 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1A31.5 31.5 0 0 0 24 12a31.5 31.5 0 0 0-.5-5.8zM9.8 15.5v-7l6.2 3.5-6.2 3.5z"/></svg>`,
    support: `<svg width="20" height="20" viewBox="0 0 24 24" ${stroke}><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>`,
    gift: `<svg width="20" height="20" viewBox="0 0 24 24" ${stroke}><rect x="3" y="8" width="18" height="13" rx="2"/><path d="M12 8v13M3 12h18"/><path d="M12 8c-2.5 0-4-1.5-4-3.5S9.5 1 12 3c2.5-2 4-1.5 4 0.5S14.5 8 12 8z"/></svg>`,
    volunteer: `<svg width="20" height="20" viewBox="0 0 24 24" ${stroke}><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`,
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

/** True when running under /app/ shell */
window.TW = window.TW || {};
TW.isAppShell = function () {
  return /\/app(?:\/|$)/.test((location.pathname || "").replace(/\\/g, "/"));
};

/**
 * Map website paths to in-app equivalents so users stay in the app shell.
 * Leaves get-app / login / cms / external URLs alone.
 */
TW.toAppHref = function (href) {
  if (!href || !TW.isAppShell()) return href;
  const raw = String(href).trim();
  if (/^(https?:|mailto:|tel:|#)/i.test(raw)) return raw;
  if (raw.indexOf("get-app.html") >= 0 || raw.indexOf("login.html") >= 0 || raw.indexOf("/cms/") >= 0) {
    return raw;
  }
  let path = raw.replace(/^\.\.\//, "");
  let hash = "";
  let query = "";
  const hashIdx = path.indexOf("#");
  if (hashIdx >= 0) {
    hash = path.slice(hashIdx);
    path = path.slice(0, hashIdx);
  }
  const qIdx = path.indexOf("?");
  if (qIdx >= 0) {
    query = path.slice(qIdx);
    path = path.slice(0, qIdx);
  }
  const file = path.split("/").pop() || path;
  const map = {
    "rec-trail.html": "route-detail.html",
    "route-detail.html": "route-detail.html",
    "record-detail.html": "record-detail.html",
    "hike-detail.html": "hike-detail.html",
    "group-hike-detail.html": "group-detail.html",
    "group-detail.html": "group-detail.html",
    "group-hikes.html": "hikes.html",
    "feed.html": "home.html",
    "explore.html": "explore.html",
    "plan.html": "index.html",
    "profile.html": "profile.html",
    "reports.html": "explore.html",
    "articles.html": "home.html",
    "gallery.html": "gallery.html",
    "donate.html": "donate.html",
    "bookmarks.html": "profile.html",
  };
  let mapped = map[file] || file;
  // Keep app Plan & Track (index.html) as-is; only remap bare site index when leaving app shell paths
  if (file === "index.html") mapped = "index.html";
  let q = query;
  if (file === "reports.html" && mapped === "explore.html") {
    q = q ? (q + "&tab=incidents") : "?tab=incidents";
  }
  if (file === "bookmarks.html" || (file === "profile.html" && hash.indexOf("bookmark") >= 0)) {
    mapped = "profile.html";
    hash = "#bookmarks";
  }
  return mapped + q + hash;
};

/** Rewrite in-app <a href> targets that point at website pages. */
TW.bindAppLinkRewrites = function (root) {
  if (!TW.isAppShell()) return;
  const scope = root || document;
  scope.querySelectorAll("a[href]").forEach((a) => {
    const href = a.getAttribute("href");
    if (!href || href.charAt(0) === "#") return;
    if (a.dataset.appHrefDone === "1") return;
    const next = TW.toAppHref(href);
    if (next && next !== href) {
      a.setAttribute("href", next);
      a.dataset.appHrefDone = "1";
    }
  });
};

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

/** App bottom nav: Community · Explore · Plan & Track · Profile */
function twAppBottomNav(active) {
  const t = (typeof TW !== "undefined" && TW.t) ? TW.t : (k) => k;
  const items = [
    { id: "home", href: "home.html", label: t("app_community"), icon: "friends" },
    { id: "explore", href: "explore.html", label: t("nav_explore"), icon: "explore", cls: "nav-explore" },
    { id: "track", href: "index.html", label: t("app_plan_track"), icon: "track" },
    { id: "profile", href: "profile.html", label: t("app_profile"), icon: "dashboard", cls: "nav-profile" },
  ];
  return `<nav class="app-bottom-nav" aria-label="App">${items.map((it) => {
    const classes = [it.cls, it.id === active ? "active" : ""].filter(Boolean).join(" ");
    let unread = false;
    try {
      unread = it.id === "profile" && localStorage.getItem("tw_app_notif_read") !== "1";
    } catch (e) {}
    const dot = unread
      ? `<span class="nav-notif-dot" aria-hidden="true"></span>`
      : "";
    return `<a href="${it.href}"${classes ? ` class="${classes}"` : ""}><span class="nav-ico" aria-hidden="true">${twIcon(it.icon)}${dot}</span><span>${it.label}</span></a>`;
  }).join("")}</nav>`;
}

function twAppCommunityTabs(active) {
  const t = (typeof TW !== "undefined" && TW.t) ? TW.t : (k) => k;
  return `<div class="app-subtabs" role="tablist">
    <a href="home.html" class="${active === "feed" ? "active" : ""}">${t("feed_title")}</a>
    <a href="hikes.html" class="${active === "groups" ? "active" : ""}">${t("home_feat_groups")}</a>
  </div>`;
}

function twMountAppNav(active, selector) {
  twMountPhoneShell();
  if (typeof TW !== "undefined" && typeof TW.bindPublicFallbacks === "function") {
    TW.bindPublicFallbacks(document);
  }
  if (typeof TW !== "undefined" && typeof TW.bindAppLinkRewrites === "function") {
    TW.bindAppLinkRewrites(document);
    if (!window._twAppLinkObserver) {
      window._twAppLinkObserver = true;
      document.addEventListener(
        "click",
        (e) => {
          const a = e.target.closest("a[href]");
          if (!a || !TW.isAppShell()) return;
          const href = a.getAttribute("href");
          if (!href || href.charAt(0) === "#") return;
          const next = TW.toAppHref(href);
          if (next && next !== href) {
            e.preventDefault();
            location.href = next;
          }
        },
        true
      );
    }
  }
  const el = document.querySelector(selector || "[data-app-nav]");
  if (el) el.outerHTML = twAppBottomNav(active);
}

window.twAppBrandSrc = twAppBrandSrc;
window.twAppLogoHtml = twAppLogoHtml;
window.twMountPhoneShell = twMountPhoneShell;
window.twAppCommunityTabs = twAppCommunityTabs;

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
  if (typeof TW.getUserRoute === "function") {
    const ur = TW.getUserRoute(id);
    if (ur) return ur;
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

TW.groupHikeMe = function () {
  return {
    email: (TW.memberEmail && TW.memberEmail()) || "",
    name: (TW.memberDisplayName && TW.memberDisplayName()) || (TW.user && TW.user.name) || "Hiker",
    avatar: (TW.user && TW.user.avatar) || "",
  };
};

TW.isGroupHikeHost = function (hike) {
  if (!hike || !TW.isLoggedIn()) return false;
  const email = TW.memberEmail();
  if (hike.organizerEmail && email && hike.organizerEmail === email) return true;
  if (hike.local && (!hike.organizerEmail || hike.organizerEmail === email)) return true;
  return false;
};

TW.ensureGroupHikeRoster = function (hike) {
  if (!hike) return hike;
  hike.members = Array.isArray(hike.members) ? hike.members : [];
  hike.discussion = Array.isArray(hike.discussion) ? hike.discussion : [];
  const hostEmail = (hike.organizerEmail || "").toLowerCase();
  if (hostEmail && !hike.members.some((m) => String(m.email || "").toLowerCase() === hostEmail)) {
    hike.members.unshift({
      email: hike.organizerEmail,
      name: hike.organizerName || "Host",
      avatar: hike.organizerAvatar || "",
      host: true,
      joinedAt: hike.createdAt || Date.now(),
    });
  }
  return hike;
};

TW.isGroupHikeParticipant = function (hike) {
  if (!hike || !TW.isLoggedIn()) return false;
  if (TW.isGroupHikeHost(hike)) return true;
  const email = (TW.memberEmail() || "").toLowerCase();
  if (!email) return false;
  return (hike.members || []).some((m) => String(m.email || "").toLowerCase() === email);
};

TW.joinGroupHike = function (hike) {
  if (!hike || !TW.isLoggedIn()) return false;
  TW.ensureGroupHikeRoster(hike);
  const me = TW.groupHikeMe();
  if (!me.email) return false;
  if (hike.members.some((m) => String(m.email || "").toLowerCase() === me.email.toLowerCase())) {
    hike.joined = true;
    TW.saveGroupHike(hike);
    return true;
  }
  hike.members.push({
    email: me.email,
    name: me.name,
    avatar: me.avatar,
    joinedAt: Date.now(),
  });
  hike.joined = true;
  TW.saveGroupHike(hike);
  return true;
};

TW.leaveGroupHike = function (hike) {
  if (!hike || TW.isGroupHikeHost(hike)) return false;
  const email = (TW.memberEmail() || "").toLowerCase();
  hike.members = (hike.members || []).filter((m) => String(m.email || "").toLowerCase() !== email);
  hike.joined = false;
  TW.saveGroupHike(hike);
  return true;
};

TW.kickGroupHikeMember = function (hike, email) {
  if (!hike || !TW.isGroupHikeHost(hike) || !email) return false;
  const host = (hike.organizerEmail || "").toLowerCase();
  if (String(email).toLowerCase() === host) return false;
  const target = String(email).toLowerCase();
  hike.members = (hike.members || []).filter((m) => String(m.email || "").toLowerCase() !== target);
  hike.invitedEmails = (hike.invitedEmails || []).filter((e) => String(e).toLowerCase() !== target);
  TW.saveGroupHike(hike);
  return true;
};

TW.postGroupDiscussion = function (hike, text) {
  const body = String(text || "").trim();
  if (!hike || !body || !TW.isGroupHikeParticipant(hike)) return false;
  TW.ensureGroupHikeRoster(hike);
  const me = TW.groupHikeMe();
  hike.discussion.push({
    id: "msg_" + Date.now(),
    email: me.email,
    name: me.name,
    text: body.slice(0, 500),
    at: Date.now(),
  });
  if (hike.discussion.length > 80) hike.discussion = hike.discussion.slice(-80);
  TW.saveGroupHike(hike);
  return true;
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
  return fallback || "profile.html";
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
      icon: "groupHikes",
      title: t("notif_invite").replace("{name}", "Sarah Chen").replace("{hike}", zh ? "蚺蛇尖日出" : "Sunrise on Sharp Peak"),
      time: zh ? "2 小時前" : "2h ago",
      href: "group-hikes.html",
    },
    {
      icon: "speaker",
      title: t("notif_announce").replace("{title}", zh ? "App 離線地圖小提示" : "Offline maps tip"),
      time: zh ? "昨天" : "Yesterday",
      href: "feed.html",
    },
    {
      icon: "reports",
      title: t("notif_incident"),
      time: zh ? "3 天前" : "3d ago",
      href: "reports.html",
    },
    {
      icon: "events",
      title: t("notif_group").replace("{hike}", zh ? "親子大潭行" : "Family-Friendly Tai Tam"),
      time: zh ? "本週" : "This week",
      href: "group-hikes.html",
    },
  ];
};

function renderNotifItem(n) {
  const iconName = n.icon || "bell";
  return `<a class="nav-notif-item" href="${twEsc(n.href || "#")}">
    <span class="nav-notif-item-icon" aria-hidden="true">${twIcon(iconName)}</span>
    <span class="nav-notif-item-body">
      <strong>${twEsc(n.title)}</strong>
      <span>${twEsc(n.time || "")}</span>
    </span>
  </a>`;
}

/** Account dropdown profile card — avatar, premium mark, or upgrade CTA */
function renderAccountMenuProfile(u, memberName, t) {
  const isPremium = TW.isMemberPremium && TW.isMemberPremium();
  const premiumMark = isPremium
    ? `<span class="nav-account-premium-mark" title="${twEsc(t("app_premium"))}" aria-label="${twEsc(t("app_premium"))}">★</span>`
    : "";
  const premiumLabel = isPremium
    ? `<span class="nav-account-premium-label">${twEsc(t("dash_premium_active"))}</span>`
    : "";
  const upgradeBtn = !isPremium
    ? `<a href="premium.html" class="nav-account-upgrade-btn">${twEsc(t("home_premium_cta"))}</a>`
    : "";
  return `<div class="nav-account-profile">
    <div class="nav-account-avatar-wrap">
      ${twAvatarHtml(u && u.avatar, "avatar-sm nav-account-avatar", "", u && u.name)}
      ${premiumMark}
    </div>
    <span class="nav-account-profile-name">${twEsc(memberName)}</span>
    ${premiumLabel}
    ${upgradeBtn}
  </div>`;
}

function renderHeader(active) {
  const u = TW.user;
  const lang = TW.getLang();
  const t = TW.t;
  const loggedIn = TW.isLoggedIn();
  const memberName = loggedIn ? TW.memberDisplayName() : "";
  const onProfilePage = active === "profile";
  const joinActive = active === "join" || active === "group-hikes";
  const resourcesActive = active === "articles" || active === "gallery";
  const accountNav = loggedIn
    ? `<div class="nav-account ${onProfilePage ? "has-active" : ""}" id="navAccount">
          <button type="button" class="nav-account-trigger" id="accountToggle" aria-expanded="false" aria-haspopup="true" aria-label="${t("nav_profile")}">
            ${twAvatarHtml(u && u.avatar, "avatar-sm", "", u && u.name)}
            <span class="nav-account-trigger-name">${twEsc(memberName || t("nav_profile"))}</span>
          </button>
          <div class="nav-account-menu" id="accountMenu" hidden>
            ${renderAccountMenuProfile(u, memberName, t)}
            <a href="profile.html" class="${onProfilePage ? "active" : ""}">${t("nav_my_profile")}</a>
            <button type="button" class="nav-account-logout" id="accountLogout">${t("nav_logout")}</button>
          </div>
        </div>`
    : `<a href="login.html" class="nav-login-btn ${active === "login" ? "active" : ""}" id="navLogin">${t("nav_login")}</a>`;
  const notifs = TW.demoNotifications ? TW.demoNotifications() : [];
  const notifItems = notifs.length
    ? notifs.map((n) => renderNotifItem(n)).join("")
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
        <a href="donate.html" class="nav-support-link ${active === "donate" || active === "support" ? "active" : ""}" aria-label="${t("nav_support")}">
          ${twIcon("support")}
          <span class="nav-support-label">${t("nav_support")}</span>
        </a>
        <div class="lang-switch" role="group" aria-label="Language">
          <button type="button" class="${lang === "en" ? "active" : ""}" data-lang="en">EN</button>
          <button type="button" class="${lang === "zh" ? "active" : ""}" data-lang="zh">繁</button>
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
        </div>
        <div>
          <h4><a href="about.html">${t("footer_about_heading")}</a></h4>
          <h4><a href="about.html#contact">${t("footer_contact")}</a></h4>
          <h4><a href="about.html#feedback">${t("feedback_title")}</a></h4>
          <h4><a href="donate.html">${t("nav_support")}</a></h4>
          <h4><a href="faq.html">${t("footer_faq")}</a></h4>
          <h4><a href="premium.html">${t("footer_premium")}</a></h4>
          <a href="terms.html">${t("footer_terms")}</a>
          <a href="privacy.html">${t("footer_privacy")}</a>
          <a href="map-credits.html">${t("footer_map_credits")}</a>
        </div>
        <div>
          <h4>${t("footer_social")}</h4>
          <div class="footer-social" aria-label="Social">
            <a href="https://www.facebook.com/trailwatchhk" target="_blank" rel="noopener" aria-label="Facebook">${twIcon("facebook")}</a>
            <a href="https://www.instagram.com/trailwatchhk" target="_blank" rel="noopener" aria-label="Instagram">${twIcon("instagram")}</a>
            <a href="https://www.youtube.com/@parksandtrails" target="_blank" rel="noopener" aria-label="YouTube">${twIcon("youtube")}</a>
          </div>
        </div>
      </div>
      <div class="footer-bottom">
        <span>${t("footer_copy")}</span>
        <span class="footer-bottom-links">
          <a href="terms.html">${t("footer_terms")}</a>
          <a href="privacy.html">${t("footer_privacy")}</a>
          <a href="map-credits.html">${t("footer_map_credits")}</a>
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

/** Mapbox raster tiles (same style as trailwatch.hk) — use instead of OSM */
TW.MAPBOX_TOKEN = ["pk", "eyJ1IjoibmVtb3RzZSIsImEiOiJjbW5zaHRmd20wYWphMnJzZm84am82Mmx4In0", "6S614iOQEA4TFnMnHvl00g"].join(".");
TW.MAPBOX_STYLE = "nemotse/cmhuo7m4z001301sfhvju0yc2";

TW.addMapTiles = function (map, opts) {
  opts = opts || {};
  if (!map || typeof L === "undefined") return null;
  const layer = L.tileLayer(
    "https://api.mapbox.com/styles/v1/" + TW.MAPBOX_STYLE + "/tiles/{z}/{x}/{y}?access_token=" + TW.MAPBOX_TOKEN,
    {
      attribution:
        '© <a href="https://www.mapbox.com/about/maps/">Mapbox</a> © <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      tileSize: 512,
      zoomOffset: -1,
      maxZoom: opts.maxZoom != null ? opts.maxZoom : 22,
      minZoom: opts.minZoom != null ? opts.minZoom : 0,
    }
  );
  layer.addTo(map);
  return layer;
};

TW.prepareLeafletMap = function (map) {
  if (!map || !map.scrollWheelZoom) return map;
  map.scrollWheelZoom.disable();
  const el = map.getContainer();
  el.setAttribute("tabindex", "0");
  el.addEventListener("focus", () => map.scrollWheelZoom.enable());
  el.addEventListener("blur", () => map.scrollWheelZoom.disable());
  el.addEventListener("keydown", (e) => {
    if (e.key === "Escape") el.blur();
  });
  map.on("popupopen", (ev) => {
    const close = ev.popup && ev.popup.getElement() && ev.popup.getElement().querySelector(".leaflet-popup-close-button");
    if (close) close.setAttribute("aria-label", "Close");
  });
  let failed = false;
  map.on("tileerror", () => {
    if (failed) return;
    failed = true;
    let bar = el.parentNode && el.parentNode.querySelector(".map-tile-error");
    if (!bar) {
      bar = document.createElement("div");
      bar.className = "map-tile-error";
      bar.innerHTML =
        "<p>" +
        TW.escapeHtml(TW.t("empty_map_tiles")) +
        '</p><button type="button" class="btn btn-secondary btn-sm">' +
        TW.escapeHtml(TW.t("empty_try_again")) +
        "</button>";
      el.parentNode.insertBefore(bar, el.nextSibling);
      bar.querySelector("button").addEventListener("click", () => {
        failed = false;
        bar.remove();
        map.eachLayer((layer) => {
          if (layer.redraw) layer.redraw();
        });
      });
    }
  });
  return map;
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
      const next = btn.dataset.lang === "zh" ? "zh" : "en";
      if (TW.getLang() === next) return;
      TW.setLang(next);
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

TW.FEED_USER_KEY = "tw_user_feed";
TW.FEED_SOCIAL_KEY = "tw_feed_social";

TW.feedPostKey = function (p) {
  if (p && p.id) return String(p.id);
  return ["fp", (p && p.user) || "", (p && p.dateISO) || "", (p && p.title) || (p && p.body) || ""].join("_").slice(0, 90);
};

TW.getUserFeedPosts = function () {
  try {
    return JSON.parse(localStorage.getItem(TW.FEED_USER_KEY) || "[]");
  } catch (e) {
    return [];
  }
};

TW.addUserFeedPost = function (post) {
  const list = TW.getUserFeedPosts();
  const zh = TW.getLang && TW.getLang() === "zh";
  const entry = Object.assign(
    {
      id: "ufp_" + Date.now(),
      dateISO: new Date().toISOString().slice(0, 10),
      time: zh ? "剛剛" : "Just now",
      timeZh: "剛剛",
      likes: 0,
      comments: 0,
      channel: "friends",
      user: (TW.user && TW.user.name) || (typeof TW.memberDisplayName === "function" && TW.memberDisplayName()) || "You",
      avatar: (TW.user && TW.user.avatar) || null,
    },
    post
  );
  list.unshift(entry);
  localStorage.setItem(TW.FEED_USER_KEY, JSON.stringify(list.slice(0, 40)));
  return entry;
};

TW.demoShareToFeed = function (kind, text) {
  const note = String(text || "").trim();
  if (kind === "story") {
    if (!note) return null;
    return TW.addUserFeedPost({
      type: "story",
      tag: "Story",
      tagZh: "故事",
      body: note,
      bodyZh: note,
    });
  }
  if (kind === "record") {
    const h = (typeof TW.getHikes === "function" && TW.getHikes()[0]) || (TW.records || [])[0] || {};
    return TW.addUserFeedPost({
      type: "record",
      tag: "Record",
      tagZh: "記錄",
      title: h.title || "My hike",
      titleZh: h.titleZh || h.title || "我的行程",
      body: note || h.snippet || h.body || "",
      bodyZh: note || h.snippetZh || "",
      recordId: h.id,
      distance: h.distance || (h.distanceKm != null ? h.distanceKm + " km" : ""),
      duration: h.duration || "",
      mapStyle: true,
    });
  }
  if (kind === "plan") {
    const tr = (TW.trails || [])[0] || {};
    return TW.addUserFeedPost({
      type: "route",
      tag: "Route",
      tagZh: "路線",
      title: (TW.getLang() === "zh" ? "分享計劃：" : "Shared a plan: ") + (TW.tt(tr, "title") || tr.title || ""),
      titleZh: "分享計劃：" + (tr.titleZh || tr.title || ""),
      body: note || tr.desc || "",
      bodyZh: note || tr.descZh || "",
      image: tr.image,
      distance: tr.distance,
      duration: tr.duration,
    });
  }
  if (kind === "incident") {
    const r = (TW.reports || [])[0] || {};
    return TW.addUserFeedPost({
      type: "incident",
      tag: "Incident",
      tagZh: "事故",
      title: TW.tt(r, "title") || r.title || (TW.getLang() === "zh" ? "事故舉報" : "Incident report"),
      titleZh: r.titleZh || r.title || "事故舉報",
      body: note || r.desc || "",
      bodyZh: note || r.descZh || "",
    });
  }
  return null;
};

TW.cmsFeedAsPosts = function () {
  if (typeof CMS === "undefined" || !CMS.getStore) return [];
  const zh = TW.getLang && TW.getLang() === "zh";
  return (CMS.getStore().feedPosts || [])
    .filter((p) => p && !p.removed)
    .map((p) => ({
      id: p.id,
      type: "announcement",
      channel: "official",
      source: "cms",
      pinned: !!p.pinned,
      user: "TrailWatch",
      avatar: null,
      dateISO: String(p.createdAt || "").slice(0, 10),
      createdAt: p.createdAt,
      time: zh ? "職員" : "Staff",
      timeZh: "職員",
      tag: "Announcement",
      tagZh: "公告",
      title: p.title || "",
      titleZh: p.titleZh || p.title || "",
      body: p.blurb || p.body || "",
      bodyZh: p.blurbZh || p.bodyZh || p.blurb || p.body || "",
      more: p.body || "",
      moreZh: p.bodyZh || p.body || "",
      image: p.graphic || "",
      likes: 0,
      comments: 0,
    }));
};

TW.applyFeedPinOverrides = function (post) {
  if (!post || typeof CMS === "undefined" || !CMS.getStore) return post;
  const store = CMS.getStore();
  const id = TW.feedPostKey(post);
  const pins = store.feedPinIds || [];
  const unpins = store.feedUnpinIds || [];
  let pinned = !!post.pinned;
  if (pins.indexOf(id) >= 0) pinned = true;
  if (unpins.indexOf(id) >= 0) pinned = false;
  if (pinned === !!post.pinned) return post;
  return Object.assign({}, post, { pinned: pinned });
};

TW.allFeedPosts = function () {
  const cms = TW.cmsFeedAsPosts ? TW.cmsFeedAsPosts() : [];
  const cmsIds = {};
  cms.forEach((p) => {
    cmsIds[TW.feedPostKey(p)] = true;
  });
  const catalog = (TW.feed || []).filter((p) => !cmsIds[TW.feedPostKey(p)]);
  return TW.getUserFeedPosts()
    .concat(cms)
    .concat(catalog)
    .map((p) => (TW.applyFeedPinOverrides ? TW.applyFeedPinOverrides(p) : p));
};

TW.isFeedOfficial = function (post) {
  if (!post) return false;
  if (post.channel === "official" || post.source === "cms") return true;
  if (post.user === "TrailWatch") return true;
  return /Announcement/i.test(post.tag || "") && !/Sponsored|Ad|Promo/i.test(post.tag || "");
};

TW.getFeedSocial = function () {
  try {
    return JSON.parse(localStorage.getItem(TW.FEED_SOCIAL_KEY) || "{}");
  } catch (e) {
    return {};
  }
};

TW.setFeedSocial = function (s) {
  localStorage.setItem(TW.FEED_SOCIAL_KEY, JSON.stringify(s));
};

TW.toggleFeedLike = function (key, baseLikes) {
  const s = TW.getFeedSocial();
  const row = s[key] || { liked: false, extraComments: [] };
  row.liked = !row.liked;
  s[key] = row;
  TW.setFeedSocial(s);
  return (baseLikes || 0) + (row.liked ? 1 : 0);
};

TW.addFeedComment = function (key, text) {
  const msg = String(text || "").trim();
  if (!msg) return null;
  const s = TW.getFeedSocial();
  const row = s[key] || { liked: false, extraComments: [] };
  const name = (TW.user && TW.user.name) || (typeof TW.memberDisplayName === "function" && TW.memberDisplayName()) || "You";
  const c = { name: name, text: msg, at: Date.now() };
  row.extraComments = (row.extraComments || []).concat([c]);
  s[key] = row;
  TW.setFeedSocial(s);
  return c;
};

function renderFeedCard(post, opts) {
  opts = opts || {};
  const inApp = /\/app(?:\/|$)/.test((location.pathname || "").replace(/\\/g, "/"));

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
  const more = TW.tt(post, "more") || post.more;
  const tag = TW.tt(post, "tag") || post.tag;
  const time = TW.tt(post, "time") || post.time;
  const recHref =
    post.type === "record" && post.recordId
      ? (typeof TW.recordDetailHref === "function"
          ? TW.recordDetailHref(post.recordId, { inApp })
          : (inApp ? "record-detail.html" : "user-route.html") + "?id=" + encodeURIComponent(post.recordId))
      : post.type === "incident"
        ? inApp ? "../reports.html" : "reports.html"
        : post.type === "route"
          ? inApp ? "explore.html" : "explore.html"
          : post.type === "group"
            ? inApp ? "hikes.html" : "group-hikes.html"
            : "";
  const routeMediaHref =
    post.type === "route" && post.routeId
      ? (() => {
          const trail = (TW.trails || []).find((x) => x.id === post.routeId);
          return trail && typeof TW.routeDetailHref === "function"
            ? TW.routeDetailHref(trail)
            : "rec-trail.html?id=" + encodeURIComponent(post.routeId);
        })()
      : "";
  let media = "";
  if (post.image) {
    const imgHtml = `<img src="${post.image}" alt="" loading="lazy" onerror="this.closest('.feed-media')?.classList.add('is-empty')" />`;
    const mediaHref = post.type === "record" ? recHref : routeMediaHref;
    media = mediaHref
      ? `<a class="feed-media feed-media--link" href="${mediaHref}">${imgHtml}</a>`
      : `<div class="feed-media">${imgHtml}</div>`;
  } else if (post.mapStyle) {
    media = `<div class="feed-media feed-media--map" aria-hidden="true"><span>📍</span></div>`;
  }
  const key = TW.feedPostKey(post);
  const social = (TW.getFeedSocial() || {})[key] || {};
  const liked = !!social.liked;
  const likeN = (post.likes || 0) + (liked ? 1 : 0);
  const extras = social.extraComments || [];
  const commentN = (post.comments || 0) + extras.length;
  const url = post.url || "";
  const urlLabel = TW.tt(post, "urlLabel") || post.urlLabel || TW.t("feed_external");
  const bodyLong = ((title || "") + " " + (body || "")).trim().length > 140;
  const expandable = !!(more || url || bodyLong || (!opts.hideComments && extras.length));

  const isOfficial = typeof TW.isFeedOfficial === "function" ? TW.isFeedOfficial(post) : false;
  const channel = post.channel || (isOfficial || post.pinned ? "official" : /Sponsored|Promo|Ad/i.test(post.tag || "") ? "ad" : "friends");
  const channelClass =
    isOfficial || channel === "official"
      ? " feed-card--official"
      : channel === "ad"
        ? " feed-card--ad"
        : " feed-card--friends";
  const pinBadge = post.pinned ? `<span class="feed-pin" title="${TW.escapeHtml(TW.t("feed_pinned"))}">📌</span>` : "";
  const avatarHtml = isOfficial
    ? `<img class="avatar-sm feed-tw-logo" src="${twAppBrandSrc("icon.svg")}" alt="TrailWatch" width="36" height="36" />`
    : twAvatarHtml(post.avatar, "avatar-sm", "", post.user);
  const extraHtml = opts.hideComments
    ? ""
    : extras
        .map((c) => `<div class="feed-comment"><strong>${TW.escapeHtml(c.name)}</strong> ${TW.escapeHtml(c.text)}</div>`)
        .join("");
  const commentBlock = opts.hideComments
    ? ""
    : `${extraHtml}
        <form class="feed-comment-form">
          <input class="form-input" name="comment" maxlength="280" placeholder="${TW.escapeHtml(TW.t("feed_comment_ph"))}" />
          <button type="submit" class="btn btn-secondary" style="padding:0.35rem 0.65rem;font-size:0.75rem">${TW.t("feed_comment_send")}</button>
        </form>`;
  const commentBtn = opts.hideComments
    ? ""
    : `<button type="button" data-feed-toggle="${TW.escapeHtml(key)}">💬 ${commentN}</button>`;
  const linkBtn =
    post.type === "group"
      ? `<a class="feed-ig-link" href="${inApp ? "group-detail.html?id=0&stage=recruiting" : "group-hikes.html"}">${TW.t("join")}</a>`
      : recHref
        ? `<a class="feed-ig-link" href="${recHref}">${TW.t("rec_detail")}</a>`
        : url
          ? `<a class="feed-ig-link" href="${TW.escapeHtml(url)}" target="_blank" rel="noopener noreferrer">${TW.escapeHtml(urlLabel)}</a>`
          : "";

  if (opts.layout === "ig" || opts.ig) {
    if (!media) {
      media = `<div class="feed-media feed-media--text" aria-hidden="true"><span>${TW.escapeHtml((title || body || "TW").slice(0, 1).toUpperCase())}</span></div>`;
    }
    const captionBits = [];
    if (title) captionBits.push(`<span class="feed-ig-caption-title">${TW.escapeHtml(title)}</span>`);
    if (body) captionBits.push(`<span class="feed-ig-caption-body">${TW.escapeHtml(body)}</span>`);
    const captionInner = captionBits.join(captionBits.length > 1 ? " " : "");
    const moreInline = expandable
      ? ` <button type="button" class="feed-more-link" data-feed-toggle="${TW.escapeHtml(key)}">${TW.t("feed_expand")}</button>`
      : "";
    return `
  <article class="feed-card feed-card--ig${channelClass}" data-feed-key="${TW.escapeHtml(key)}">
    <div class="feed-card-header">
      ${avatarHtml}
      <div class="user-info">
        <div class="name">${TW.escapeHtml(post.user || "")}${pinBadge}</div>
        <div class="time">${TW.escapeHtml(time || "")}${tag ? ` · ${TW.escapeHtml(tag)}` : ""}</div>
      </div>
    </div>
    ${media}
    <div class="feed-actions feed-ig-actions">
      <button type="button" class="like-btn${liked ? " liked" : ""}" data-likes="${post.likes || 0}" data-feed-like="${TW.escapeHtml(key)}" aria-label="Like">♥</button>
      <span class="feed-ig-likes">${likeN}</span>
      ${linkBtn}
    </div>
    <div class="feed-ig-caption">
      <span class="feed-ig-caption-text"><strong>${TW.escapeHtml(post.user || "")}</strong> ${captionInner}${moreInline}</span>
      ${stats}
    </div>
    <div class="feed-expand-body">
      ${more ? `<p>${TW.escapeHtml(more)}</p>` : ""}
      ${url && !linkBtn ? `<p><a href="${TW.escapeHtml(url)}" target="_blank" rel="noopener noreferrer">${TW.escapeHtml(urlLabel)} →</a></p>` : ""}
      ${commentBlock}
    </div>
  </article>`;
  }

  const compactClass = opts.compact ? " feed-card--compact" : "";

  return `
  <article class="card feed-card${channelClass}${compactClass}" data-feed-key="${TW.escapeHtml(key)}">
    <div class="feed-card-header">
      ${avatarHtml}
      <div class="user-info">
        <div class="name">${TW.escapeHtml(post.user || "")}${pinBadge}</div>
        <div class="time">${TW.escapeHtml(time || "")}</div>
      </div>
      <span class="tag ${tagClass(tag)}">${TW.escapeHtml(tag || "")}</span>
    </div>
    <div class="feed-card-body">
      ${title ? `<strong class="feed-card-title">${TW.escapeHtml(title)}</strong>` : ""}
      ${body ? `<p>${TW.escapeHtml(body)}</p>` : ""}
      ${media}
      ${stats}
      <div class="feed-expand-body">
        ${more ? `<p>${TW.escapeHtml(more)}</p>` : ""}
        ${url ? `<p><a href="${TW.escapeHtml(url)}" target="_blank" rel="noopener noreferrer">${TW.escapeHtml(urlLabel)} →</a></p>` : ""}
        ${commentBlock}
      </div>
    </div>
    <div class="feed-actions">
      <button type="button" class="like-btn${liked ? " liked" : ""}" data-likes="${post.likes || 0}" data-feed-like="${TW.escapeHtml(key)}">♥ ${likeN}</button>
      ${commentBtn}
      ${expandable ? `<button type="button" class="feed-expand-btn" data-feed-toggle="${TW.escapeHtml(key)}">${TW.t("feed_expand")}</button>` : ""}
      ${
        post.type === "group"
          ? `<a class="btn btn-primary" style="margin-left:auto;padding:0.4rem 0.9rem;font-size:0.8rem" href="${inApp ? "group-detail.html?id=0&stage=recruiting" : "group-hikes.html"}">${TW.t("join")}</a>`
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
  const featured = opts.featured != null ? opts.featured : TW.isArticleFeatured ? TW.isArticleFeatured(a) : !!a.featured;
  const zh = TW.getLang() === "zh";
  const title = zh ? a.titleZh || a.title : a.title;
  const excerpt = zh ? a.excerptZh || a.excerpt || a.summaryZh || a.summary : a.excerpt || a.summary;
  const url = zh ? a.urlZh || a.url : a.url;
  const esc = TW.escapeHtml;
  const typeTag = TW.articleTypeTagHtml ? TW.articleTypeTagHtml(a) : "";
  const contentTags = (TW.normalizeArticleTags ? TW.normalizeArticleTags(a) : a.tags || [])
    .slice(0, 3)
    .map((t) => `<span class="article-tag">${esc(zh ? t.nameZh || t.name : t.name)}</span>`)
    .join("");
  const img = a.image
    ? `<div class="article-card-media"><img src="${esc(a.image)}" alt="${esc(title)}" loading="lazy" /></div>`
    : "";
  const featBadge = featured
    ? `<span class="article-featured-badge">${esc(TW.t("articles_featured"))}</span>`
    : "";
  const excerptHtml = excerpt
    ? `<p class="article-excerpt">${esc(excerpt)}</p>`
    : "";
  return `<article class="article-card article-card--rich media-card">
    ${img}
    <div class="article-card-body">
      <div class="article-tags">${featBadge}${typeTag}${contentTags}</div>
      <strong><a href="${esc(url)}" target="_blank" rel="noopener noreferrer">${esc(title)}</a></strong>
      ${excerptHtml}
      <div class="article-card-foot">
        <span class="article-date">${esc(a.date || "")}</span>
        <a class="article-more" href="${esc(url)}" target="_blank" rel="noopener noreferrer">${esc(TW.t("article_read_more"))}</a>
      </div>
    </div>
  </article>`;
};

function renderTrailCard(t, opts) {
  opts = opts || {};
  const planned = TW.isPlanned(t.id);
  const bookmarked = typeof TW.isBookmarked === "function" && TW.isBookmarked(t.id);
  const title = TW.tt(t, "title");
  const desc = TW.tt(t, "desc");
  const detailHref =
    TW.routeDetailHref ? TW.routeDetailHref(t) : "rec-trail.html?id=" + encodeURIComponent(t.id);
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
  <article class="trail-card media-card" id="${t.id}">
    <div class="trail-card-img">
      <a class="trail-card-media-link" href="${detailHref}" aria-label="${TW.escapeHtml(title)}">
        <img src="${t.image}" alt="${title}" loading="lazy" />
      </a>
      ${bookmarkBtn}
      <span class="rating">${twIcon("star")} ${t.rating}</span>
    </div>
    <div class="trail-card-body">
      <div class="feature-icons">
        <span class="district-chip">${TW.districtName(t.district)}</span>
      </div>
      <div class="trail-diff-row" title="L${t.difficulty}">
        ${difficultyPips(t.difficulty)}
        <span class="trail-diff-label">L${t.difficulty} · ${difficultyLabel(t.difficulty)}</span>
      </div>
      <h3><a href="${detailHref}">${title}</a></h3>
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
  const href =
    detailHref ||
    (id
      ? typeof TW.recordDetailHref === "function"
        ? TW.recordDetailHref(id)
        : "user-route.html?id=" + encodeURIComponent(id)
      : "#");
  const date = TW.getLang() === "zh" && r.dateZh ? r.dateZh : r.date;
  return `
  <a class="record-item media-card" href="${href}">
    <img src="${r.image}" alt="${TW.escapeHtml(TW.tt(r, "title"))}" loading="lazy" />
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
  return (
    (TW.records || []).find((r) => r.id === id) ||
    (typeof TW.getUserRoute === "function" ? TW.getUserRoute(id) : null)
  );
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
    html: '<span style="display:block;width:12px;height:12px;background:#d64545;border:2px solid #fff;box-shadow:0 1px 4px rgba(0,0,0,.35)"></span>',
    iconSize: [12, 12],
    iconAnchor: [6, 6],
  });
  L.marker(end, { icon: endIcon }).addTo(map);
};

/** Nice tick values for elevation y-axis (like trailwatch.hk Recharts) */
TW._elevNiceTicks = function (lo, hi, count) {
  count = count || 5;
  const span = Math.max(1e-6, hi - lo);
  const rough = span / (count - 1);
  const pow = Math.pow(10, Math.floor(Math.log(rough) / Math.LN10));
  const err = rough / pow;
  let step = pow;
  if (err >= 7.5) step = 10 * pow;
  else if (err >= 3) step = 5 * pow;
  else if (err >= 1.5) step = 2 * pow;
  const niceLo = Math.floor(lo / step) * step;
  const niceHi = Math.ceil(hi / step) * step;
  const ticks = [];
  for (let v = niceLo; v <= niceHi + step * 0.5; v += step) {
    ticks.push(Math.round(v * 1000) / 1000);
    if (ticks.length > 12) break;
  }
  if (ticks.length < 2) {
    ticks.length = 0;
    ticks.push(lo, hi);
  }
  return { lo: ticks[0], hi: ticks[ticks.length - 1], ticks };
};

/** Elevation (+ optional pace) profile SVG with left y-axis + dashed grid */
TW.elevChartHtml = function (opts) {
  opts = opts || {};
  let max = Number(opts.elevMax);
  let min = Number(opts.elevMin);
  const pace = Number(opts.paceKmh);
  const showPace = opts.showPace !== false && !isNaN(pace) && pace > 0;
  const profile = Array.isArray(opts.elevProfile)
    ? opts.elevProfile.map(Number).filter((v) => !isNaN(v))
    : [];

  let elevSeries = profile;
  if (!elevSeries.length) {
    const hi0 = !isNaN(max) ? max : 180;
    const lo0 = !isNaN(min) ? min : Math.max(0, hi0 * 0.35);
    const span0 = Math.max(1, hi0 - lo0);
    const n = 36;
    elevSeries = [];
    for (let i = 0; i <= n; i++) {
      const t = i / n;
      const wave = Math.sin(t * Math.PI) * 0.72 + Math.sin(t * Math.PI * 2.4) * 0.18 + t * 0.1;
      elevSeries.push(lo0 + span0 * Math.max(0, Math.min(1, wave)));
    }
  }

  const dataMin = Math.min.apply(null, elevSeries);
  const dataMax = Math.max.apply(null, elevSeries);
  if (isNaN(min)) min = dataMin;
  if (isNaN(max)) max = dataMax;
  /* Prefer real profile range when stored max/min are missing or zeroed */
  if ((min === 0 && max === 0 && dataMax > 0) || max < dataMax || min > dataMin) {
    min = dataMin;
    max = dataMax;
  }

  const axis = TW._elevNiceTicks(min, max, 5);
  const lo = axis.lo;
  const hi = axis.hi;
  const span = Math.max(1e-6, hi - lo);

  const w = 640;
  const h = 160;
  const padL = 36;
  const padR = 12;
  const padT = 10;
  const padB = 10;
  const plotW = w - padL - padR;
  const plotH = h - padT - padB;

  const elevXY = elevSeries.map((elev, i) => {
    const t = elevSeries.length === 1 ? 0 : i / (elevSeries.length - 1);
    const x = padL + t * plotW;
    const y = padT + plotH - ((elev - lo) / span) * plotH;
    return [x, y];
  });

  const paceVals = elevSeries.map((_, i) => {
    const t = elevSeries.length === 1 ? 0 : i / (elevSeries.length - 1);
    const paceWave = 0.82 + Math.sin(t * Math.PI * 1.6) * 0.12 + Math.sin(t * Math.PI * 3.1) * 0.06;
    return pace * paceWave;
  });
  const paceMin = Math.min.apply(null, paceVals) * 0.85;
  const paceMax = Math.max.apply(null, paceVals) * 1.1;
  const paceSpan = Math.max(0.1, paceMax - paceMin);
  const paceXY = paceVals.map((p, i) => {
    const t = elevSeries.length === 1 ? 0 : i / (elevSeries.length - 1);
    const x = padL + t * plotW;
    const y = padT + plotH - ((p - paceMin) / paceSpan) * plotH;
    return [x, y];
  });

  const elevLine = elevXY.map((p, i) => (i ? "L" : "M") + p[0].toFixed(1) + " " + p[1].toFixed(1)).join(" ");
  const elevArea =
    elevLine +
    " L" +
    (padL + plotW).toFixed(1) +
    " " +
    (padT + plotH).toFixed(1) +
    " L" +
    padL.toFixed(1) +
    " " +
    (padT + plotH).toFixed(1) +
    " Z";
  const paceLine = paceXY.map((p, i) => (i ? "L" : "M") + p[0].toFixed(1) + " " + p[1].toFixed(1)).join(" ");
  const uid = "elevGrad" + Math.floor(Math.random() * 1e6);

  const grid = axis.ticks
    .map((v) => {
      const y = padT + plotH - ((v - lo) / span) * plotH;
      const label = Math.round(v) + "m";
      return (
        `<line class="elev-grid" x1="${padL}" y1="${y.toFixed(1)}" x2="${(padL + plotW).toFixed(1)}" y2="${y.toFixed(1)}" />` +
        `<text class="elev-y-label" x="${padL - 6}" y="${y.toFixed(1)}" dy="0.35em">${label}</text>`
      );
    })
    .join("");

  const maxLabel = Math.round(max) + "m";
  const minLabel = Math.round(min) + "m";
  return `
  <div class="route-share-elev-chart${showPace ? " has-pace" : ""}">
    <div class="route-share-elev-legend">
      <span class="leg-elev">${TW.t("rec_elev_label")}</span>
      ${showPace ? `<span class="leg-pace">${TW.t("rec_avg_pace")}</span>` : ""}
    </div>
    <svg class="elev-chart" viewBox="0 0 ${w} ${h}" preserveAspectRatio="xMidYMid meet" aria-hidden="true">
      <defs>
        <linearGradient id="${uid}" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#8fbc7a" stop-opacity="0.55"/>
          <stop offset="100%" stop-color="#8fbc7a" stop-opacity="0.08"/>
        </linearGradient>
        <clipPath id="${uid}clip">
          <rect x="${padL}" y="${padT}" width="${plotW}" height="${plotH}"/>
        </clipPath>
      </defs>
      ${grid}
      <g clip-path="url(#${uid}clip)">
        <path class="area" d="${elevArea}" style="fill:url(#${uid})"/>
        <path class="line elev-line" d="${elevLine}"/>
        ${showPace ? `<path class="line pace-line" d="${paceLine}"/>` : ""}
      </g>
    </svg>
    <div class="route-share-elev-meta">
      <span>${TW.t("rec_elev_max")} ${maxLabel}</span>
      <span>${TW.t("rec_elev_min")} ${minLabel}</span>
    </div>
  </div>`;
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
  document.querySelectorAll(".like-btn[data-feed-like]").forEach((btn) => {
    if (btn.dataset.bound === "1") return;
    btn.dataset.bound = "1";
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation();
      const key = btn.getAttribute("data-feed-like");
      const base = parseInt(btn.dataset.likes, 10) || 0;
      const n = TW.toggleFeedLike(key, base);
      const liked = ((TW.getFeedSocial() || {})[key] || {}).liked;
      btn.classList.toggle("liked", !!liked);
      btn.textContent = "♥ " + n;
    });
  });
  document.querySelectorAll("[data-feed-toggle]").forEach((btn) => {
    if (btn.dataset.bound === "1") return;
    btn.dataset.bound = "1";
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation();
      const card = btn.closest(".feed-card");
      if (!card) return;
      const on = card.classList.toggle("expanded");
      card.querySelectorAll(".feed-expand-btn, .feed-more-link").forEach((b) => {
        b.textContent = TW.t(on ? "feed_collapse" : "feed_expand");
      });
    });
  });
  document.querySelectorAll(".feed-comment-form").forEach((form) => {
    if (form.dataset.bound === "1") return;
    form.dataset.bound = "1";
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      e.stopPropagation();
      const card = form.closest(".feed-card");
      const key = card && card.getAttribute("data-feed-key");
      const input = form.querySelector("input[name='comment']");
      if (!key || !input) return;
      const c = TW.addFeedComment(key, input.value);
      if (!c) return;
      input.value = "";
      const wrap = form.parentNode;
      const row = document.createElement("div");
      row.className = "feed-comment";
      row.innerHTML = "<strong>" + TW.escapeHtml(c.name) + "</strong> " + TW.escapeHtml(c.text);
      wrap.insertBefore(row, form);
      const countBtn = card.querySelector("[data-feed-toggle]");
      if (countBtn && /^💬/.test(countBtn.textContent)) {
        const n = ((TW.getFeedSocial()[key] || {}).extraComments || []).length;
        const base = parseInt((card.querySelector(".like-btn") || {}).dataset.comments, 10);
        countBtn.textContent = "💬 " + ((parseInt(countBtn.textContent.replace(/\D/g, ""), 10) || 0) + 1);
      }
      showToast(TW.t("feed_comment_send"));
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
  const id = btn.dataset.trail || btn.dataset.id;
  const type = btn.dataset.bmType || "route";
  if (!id || typeof TW.toggleBookmark !== "function") return;
  const on = TW.toggleBookmark(id, type);
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
  const pub = TW.normalizeReportStatus ? TW.normalizeReportStatus(s) : s;
  if (pub === "new") return TW.t("status_new");
  if (pub === "update") return TW.t("status_updated");
  if (pub === "closed") return TW.t("status_closed");
  if (window.CMS && CMS.statusLabel) {
    const known = CMS.INCIDENT_STATUSES.some((x) => x.id === s);
    if (known) return CMS.statusLabel(s);
  }
  return TW.t("status_" + s) || s;
}

function statusClass(s) {
  const pub = TW.normalizeReportStatus ? TW.normalizeReportStatus(s) : s;
  if (pub === "closed") return "status-closed";
  if (pub === "update") return "status-updated";
  if (pub === "new") return "status-received";
  if (s === "published" || s === "handled" || s === "closed") return "status-closed";
  if (s === "reported_govt" || s === "updated" || s === "under_review" || s === "update") return "status-updated";
  if (s === "rejected") return "status-received";
  return { closed: "status-closed", updated: "status-updated", received: "status-received", new: "status-received" }[s] || "status-received";
}

function renderReportItem(r) {
  const note = TW.getLang() === "zh" ? r.staffNoteZh || r.staffNote : r.staffNote;
  const reporter =
    TW.getLang() === "zh" ? r.reporterZh || r.reporter : r.reporter || r.reporterZh;
  const catId = TW.normalizeReportCategory ? TW.normalizeReportCategory(r.category) : r.category;
  const catKey = "cat_" + catId;
  let catLabel = TW.t(catKey);
  if (catLabel === catKey) {
    catLabel =
      TW.getLang() === "zh"
        ? r.categoryLabelZh || r.categoryLabel || r.category || ""
        : r.categoryLabel || r.categoryLabelZh || r.category || "";
  }
  const href =
    "incident-detail.html?id=" + encodeURIComponent(r.id || r.sourceId || "");
  const desc = TW.tt(r, "desc") || "";
  return `
  <a class="report-item media-card" href="${href}">
    <div class="report-thumb-wrap">
      <img class="report-thumb" src="${r.image || ""}" alt="${TW.escapeHtml(TW.tt(r, "title"))}" loading="lazy" />
      <span class="status-badge ${statusClass(r.status)}">${statusLabel(r.status)}</span>
    </div>
    <div>
      <h4>${TW.escapeHtml(TW.tt(r, "title"))}</h4>
      ${desc ? `<p class="desc">${TW.escapeHtml(desc)}</p>` : ""}
      ${
        note
          ? `<p class="desc" style="color:var(--green-800);font-weight:500">${TW.t("staff_update")}: ${TW.escapeHtml(note)}</p>`
          : ""
      }
      <div class="meta">
        <span>📅 ${TW.escapeHtml(r.date || "")}</span>
        ${catLabel ? `<span>${TW.escapeHtml(catLabel)}</span>` : ""}
        ${reporter ? `<span>👤 ${TW.escapeHtml(reporter)}</span>` : ""}
      </div>
    </div>
  </a>`;
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
