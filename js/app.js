/* TrailWatch HK — Shared UI helpers */

function twIcon(name) {
  const icons = {
    home: '<svg width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M3 10.5 12 3l9 7.5V21a1 1 0 0 1-1 1h-5v-7H9v7H4a1 1 0 0 1-1-1v-10.5z"/></svg>',
    explore: '<svg width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path d="m16 8-2.5 6.5L7 17l2.5-6.5L16 8z"/></svg>',
    plan: '<svg width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2"/><rect x="9" y="3" width="6" height="4" rx="1"/><path d="M9 12h6M9 16h4"/></svg>',
    dashboard: '<svg width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>',
    bell: '<svg width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg>',
    menu: '<svg width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M4 6h16M4 12h16M4 18h16"/></svg>',
    tree: '<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2 7 9h3v3H6l4 5h2v5h2v-5h2l4-5h-4V9h3L12 2z"/></svg>',
    star: "★",
  };
  return icons[name] || "";
}

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

function renderHeader(active) {
  const u = TW.user;
  const lang = TW.getLang();
  const t = TW.t;
  return `
  <header class="site-header">
    <div class="container">
      <a href="index.html" class="logo">
        <span class="logo-mark">${twIcon("tree")}</span>
        <span>${t("brand")}</span>
      </a>
      <nav class="nav-links" id="navLinks">
        <a href="index.html" class="${active === "home" ? "active" : ""}">${t("nav_home")}</a>
        <a href="explore.html" class="${active === "explore" ? "active" : ""}">${t("nav_explore")}</a>
        <a href="plan.html" class="${active === "plan" ? "active" : ""}">${t("nav_plan")}</a>
        <a href="dashboard.html" class="${active === "dashboard" ? "active" : ""}">${t("nav_dashboard")}</a>
        <a href="reports.html" class="${active === "reports" ? "active" : ""}">${t("nav_reports")}</a>
        <a href="trees.html" class="${active === "trees" ? "active" : ""}">${t("nav_trees")}</a>
        <a href="app/index.html" class="nav-app ${active === "app" ? "active" : ""}">${t("nav_app")}</a>
      </nav>
      <div class="header-actions">
        <div class="lang-switch" role="group" aria-label="Language">
          <button type="button" class="${lang === "en" ? "active" : ""}" data-lang="en">EN</button>
          <button type="button" class="${lang === "zh" ? "active" : ""}" data-lang="zh">繁</button>
        </div>
        <button class="icon-btn hide-sm" aria-label="${t("notifications")}">${twIcon("bell")}</button>
        <a href="profile.html" class="hide-sm" title="Profile">
          <img class="avatar-sm" src="${u.avatar}" alt="${u.name}" />
        </a>
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
      <div>
        <a href="index.html" class="logo" style="color:white;margin-bottom:0.75rem">
          <span class="logo-mark">${twIcon("tree")}</span>
          <span>${t("brand")}</span>
        </a>
        <p style="font-size:0.85rem;opacity:0.8;max-width:280px">${t("footer_tagline")}</p>
      </div>
      <div>
        <h4>${t("footer_discover")}</h4>
        <a href="explore.html">${t("footer_routes")}</a>
        <a href="explore.html?tab=incidents">${t("footer_incidents")}</a>
        <a href="index.html">${t("footer_feed")}</a>
        <a href="plan.html">${t("footer_plan")}</a>
      </div>
      <div>
        <h4>${t("footer_you")}</h4>
        <a href="dashboard.html">${t("footer_portfolio")}</a>
        <a href="insights.html">${t("footer_insights")}</a>
        <a href="milestones.html">${t("footer_milestones")}</a>
        <a href="app/index.html">${t("nav_app")}</a>
      </div>
    </div>
    <div class="footer-bottom">${t("footer_copy")}</div>
  </footer>
  <div class="toast" id="toast"></div>`;
}

function showToast(msg) {
  const t = document.getElementById("toast");
  if (!t) return;
  t.textContent = msg;
  t.classList.add("show");
  clearTimeout(window._toastTimer);
  window._toastTimer = setTimeout(() => t.classList.remove("show"), 2400);
}

function initShell(active) {
  const mount = document.getElementById("app-header");
  const foot = document.getElementById("app-footer");
  if (mount) mount.innerHTML = renderHeader(active);
  if (foot) foot.innerHTML = renderFooter();

  const toggle = document.getElementById("menuToggle");
  const links = document.getElementById("navLinks");
  if (toggle && links) {
    toggle.addEventListener("click", () => links.classList.toggle("open"));
  }

  document.querySelectorAll(".lang-switch button").forEach((btn) => {
    btn.addEventListener("click", () => {
      TW.setLang(btn.dataset.lang);
      location.reload();
    });
  });

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (key) el.textContent = TW.t(key);
  });
  document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
    const key = el.getAttribute("data-i18n-placeholder");
    if (key) el.setAttribute("placeholder", TW.t(key));
  });
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
  const avatar =
    post.avatar ||
    "data:image/svg+xml," +
      encodeURIComponent(
        `<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40"><rect fill="#0b421a" width="40" height="40" rx="20"/><text x="20" y="26" text-anchor="middle" fill="white" font-size="16">TW</text></svg>`
      );

  let media = "";
  if (post.image) {
    media = `<div class="feed-media"><img src="${post.image}" alt="" loading="lazy" /></div>`;
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

  return `
  <article class="card feed-card">
    <div class="feed-card-header">
      <img class="avatar-sm" src="${avatar}" alt="" />
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
    </div>
  </article>`;
}

function renderRecordItem(r) {
  return `
  <article class="record-item">
    <img src="${r.image}" alt="" loading="lazy" />
    <div class="body">
      <div class="top"><span>${r.date}</span><span>★ ${r.rating}</span></div>
      <h4>${TW.tt(r, "title")}</h4>
      <p class="snippet">${TW.tt(r, "snippet")}</p>
      <div class="trail-meta">
        <span>📏 ${r.distance}</span>
        <span>⏱ ${r.duration}</span>
        <span>⬆ ${r.elev}</span>
      </div>
    </div>
  </article>`;
}

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
  return TW.t("status_" + s) || s;
}

function statusClass(s) {
  return { closed: "status-closed", updated: "status-updated", received: "status-received" }[s] || "status-received";
}

function renderReportItem(r) {
  return `
  <article class="report-item">
    <div class="report-thumb-wrap">
      <img class="report-thumb" src="${r.image}" alt="" />
      <span class="status-badge ${statusClass(r.status)}">${statusLabel(r.status)}</span>
    </div>
    <div>
      <h4>${TW.tt(r, "title")}</h4>
      <p class="desc">${TW.tt(r, "desc")}</p>
      <div class="meta"><span>📅 ${r.date}</span><span>📍 ${r.coords}</span></div>
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
