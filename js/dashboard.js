/** Dashboard — membership, badge picker, milestones & insights helpers */
window.TW = window.TW || {};

TW.dashBase = function () {
  const path = (location.pathname || "").replace(/\\/g, "/");
  return /\/app(?:\/|$)/.test(path) ? "../" : "";
};

TW.SELECTED_BADGE_KEY = "tw_dashboard_badge";

TW.getDashboardBadges = function () {
  const zh = TW.getLang() === "zh";
  const hiking = (TW.badges || []).map((b, i) => ({
    id: "hike_" + i,
    cat: "hike",
    name: zh ? b.nameZh || b.name : b.name,
    emoji: b.emoji,
    color: b.color || "#2d8a45",
    locked: !!b.locked,
  }));
  const env = [];
  const lvl = typeof TW.getEnvLevel === "function" ? TW.getEnvLevel() : 0;
  for (let L = 1; L <= 5; L++) {
    const meta = TW.ENV_BADGE_META && TW.ENV_BADGE_META[L];
    if (!meta) continue;
    env.push({
      id: "env_" + L,
      cat: "env",
      name: zh ? meta.nameZh : meta.name,
      emoji: meta.emoji,
      color: meta.color,
      locked: L > lvl,
    });
  }
  return { hiking, env };
};

TW.getSelectedBadgeId = function () {
  return localStorage.getItem(TW.SELECTED_BADGE_KEY) || "";
};

TW.setSelectedBadgeId = function (id) {
  if (id) localStorage.setItem(TW.SELECTED_BADGE_KEY, id);
  else localStorage.removeItem(TW.SELECTED_BADGE_KEY);
};

TW.resolveDashboardBadge = function (id) {
  const groups = TW.getDashboardBadges();
  const all = groups.hiking.concat(groups.env);
  if (id) {
    const found = all.find((b) => b.id === id && !b.locked);
    if (found) return found;
  }
  return all.find((b) => !b.locked) || all[0] || null;
};

TW.getMembershipDashboard = function () {
  const prem = typeof TW.getMemberPremiumInfo === "function" ? TW.getMemberPremiumInfo() : { active: false, expired: false, end: "" };
  const cms = typeof TW.getMemberCmsUser === "function" ? TW.getMemberCmsUser() : null;
  const loggedIn = TW.isLoggedIn && TW.isLoggedIn();
  let start = (cms && cms.premiumStart) || (TW.user && TW.user.premiumSince) || "";
  if (start && /^\d{4}-\d{2}-\d{2}/.test(start)) {
    const p = start.slice(0, 10).split("-");
    start = p[2] + "/" + p[1] + "/" + p[0];
  }
  if (!start && loggedIn && prem.active) start = "01/03/2019";
  let end = prem.end || (TW.user && TW.user.premiumEnds) || "";
  return {
    loggedIn: loggedIn,
    active: !!prem.active,
    expired: !!prem.expired,
    start: start,
    end: end,
  };
};

TW.getMilestonesDemo = function () {
  const zh = TW.getLang() === "zh";
  return {
    topRecords: [
      { title: "TransLantau '21", val: "74.1 km", key: "mil_longest" },
      { title: zh ? "玉山主峰" : "Yushan Main Peak", val: "3,972 m", key: "mil_highest" },
      { title: zh ? "大雪山縱走" : "Snow Mountain Traverse", val: "1,800 m", key: "mil_max_elev" },
    ],
    highlights: [
      { icon: "📍", labelKey: "mil_region", val: zh ? "西貢 / Sai Kung" : "Sai Kung" },
      { icon: "📏", labelKey: "mil_best_month_dist", val: "432 km · Oct 2019" },
      { icon: "📅", labelKey: "mil_best_month_rec", val: zh ? "28 次 · 2024 年 3 月" : "28 records · Mar 2024" },
      { icon: "🏅", labelKey: "mil_best_year_dist", val: zh ? "1,240 km · 2023" : "1,240 km · 2023" },
      { icon: "🎖", labelKey: "mil_best_year_rec", val: zh ? "180 次 · 2017" : "180 records · 2017" },
    ],
  };
};

TW.insightsDemoData = function () {
  return {
    activityMonthly: [
      { l: "Jan", h: 40 }, { l: "Feb", h: 55 }, { l: "Mar", h: 70 },
      { l: "Apr", h: 62 }, { l: "May", h: 85 }, { l: "Jun", h: 50 },
      { l: "Jul", h: 45 }, { l: "Aug", h: 38 }, { l: "Sep", h: 68 },
      { l: "Oct", h: 92 }, { l: "Nov", h: 78 }, { l: "Dec", h: 60 },
    ],
    activityYearly: [
      { l: "2020", h: 35 }, { l: "2021", h: 48 }, { l: "2022", h: 55 },
      { l: "2023", h: 72 }, { l: "2024", h: 90 }, { l: "2025", h: 68 },
    ],
    distanceMonthly: [
      { l: "Jan", h: 40 }, { l: "Feb", h: 55 }, { l: "Mar", h: 70 },
      { l: "Apr", h: 62 }, { l: "May", h: 85 }, { l: "Jun", h: 50 },
      { l: "Jul", h: 45 }, { l: "Aug", h: 38 }, { l: "Sep", h: 68 },
      { l: "Oct", h: 92 }, { l: "Nov", h: 78 }, { l: "Dec", h: 60 },
    ],
    distanceYearly: [
      { l: "2020", h: 40 }, { l: "2021", h: 55 }, { l: "2022", h: 65 },
      { l: "2023", h: 80 }, { l: "2024", h: 88 }, { l: "2025", h: 70 },
    ],
    elevationMonthly: [
      { l: "Jan", h: 32 }, { l: "Feb", h: 48 }, { l: "Mar", h: 58 },
      { l: "Apr", h: 52 }, { l: "May", h: 75 }, { l: "Jun", h: 44 },
      { l: "Jul", h: 40 }, { l: "Aug", h: 35 }, { l: "Sep", h: 62 },
      { l: "Oct", h: 88 }, { l: "Nov", h: 70 }, { l: "Dec", h: 55 },
    ],
    elevationYearly: [
      { l: "2020", h: 38 }, { l: "2021", h: 50 }, { l: "2022", h: 60 },
      { l: "2023", h: 78 }, { l: "2024", h: 85 }, { l: "2025", h: 65 },
    ],
    regions: [
      { id: "sai-kung", pct: 32, color: "#2d8a45" },
      { id: "hk-island", pct: 22, color: "#3da855" },
      { id: "lantau", pct: 18, color: "#2563eb" },
      { id: "tai-po", pct: 12, color: "#7c3aed" },
      { id: "tsuen-wan", pct: 10, color: "#f1a637" },
      { id: "kowloon", pct: 6, color: "#9ca3af" },
    ],
  };
};

TW.renderInsightBars = function (el, data) {
  if (!el) return;
  el.innerHTML = (data || [])
    .map(
      (b) =>
        `<div class="bar-wrap"><div class="bar" style="height:${b.h}%;background:linear-gradient(to top,var(--green-900),var(--green-600))"></div><div class="bar-label">${b.l}</div></div>`
    )
    .join("");
};

TW.renderRegionPie = function (el, regions) {
  if (!el) return;
  regions = regions || TW.insightsDemoData().regions;
  let acc = 0;
  const stops = regions.map((r) => {
    const start = acc;
    acc += r.pct;
    return `${r.color} ${start}% ${acc}%`;
  });
  const legend = regions
    .map(
      (r) =>
        `<li><span class="pie-dot" style="background:${r.color}"></span>${TW.districtName(r.id)} <strong>${r.pct}%</strong></li>`
    )
    .join("");
  el.innerHTML = `<div class="region-pie-wrap">
    <div class="donut" style="background:conic-gradient(${stops.join(", ")})"></div>
    <ul class="region-legend">${legend}</ul>
  </div>`;
};

TW.renderMembershipHeader = function (el) {
  if (!el) return;
  const m = TW.getMembershipDashboard();
  if (!m.loggedIn) {
    el.innerHTML = `<a class="dash-membership-link" href="${TW.dashBase()}login.html?next=${encodeURIComponent("profile.html#overview")}">${TW.t("dash_subscribe_premium")}</a>`;
    return;
  }
  if (m.active) {
    el.innerHTML = `<span class="dash-premium-pill">${TW.t("dash_premium_active")}</span>`;
    return;
  }
  el.innerHTML = `<a class="dash-membership-link" href="${TW.dashBase()}get-app.html#premium">${TW.t("dash_subscribe_premium")}</a>`;
};

TW.renderMembershipCard = function (el) {
  if (!el) return;
  const m = TW.getMembershipDashboard();
  if (!m.loggedIn) {
    el.innerHTML = `<h3 style="margin:0 0 0.5rem;font-size:1rem;color:var(--green-900)">${TW.t("dash_premium_plan_title")}</h3>
      <p class="page-sub" style="margin:0 0 0.75rem">${TW.t("dash_premium_plan_body")}</p>
      <a class="btn btn-primary" href="${TW.dashBase()}login.html?next=${encodeURIComponent("profile.html#overview")}">${TW.t("login_cta")}</a>`;
    return;
  }
  if (m.active) {
    el.innerHTML = `<h3 style="margin:0 0 0.65rem;font-size:0.85rem;font-weight:800;color:var(--text-muted);text-transform:uppercase;letter-spacing:0.04em">${TW.t("dash_membership")}</h3>
      <div style="display:flex;flex-wrap:wrap;gap:1rem;font-size:0.88rem">
        <div><span style="color:var(--text-muted)">${TW.t("dash_premium_since")}</span><br/><strong style="color:var(--green-900)">${m.start || "—"}</strong></div>
        <div><span style="color:var(--text-muted)">${TW.t("dash_premium_expires")}</span><br/><strong style="color:var(--green-900)">${m.end || "—"}</strong></div>
      </div>`;
    return;
  }
  el.innerHTML = `<h3 style="margin:0 0 0.5rem;font-size:1rem;color:var(--green-900)">${TW.t("dash_premium_plan_title")}</h3>
    <p class="page-sub" style="margin:0 0 0.65rem">${TW.t("dash_premium_plan_body")}</p>
    <ul class="dash-plan-list">${TW.t("dash_premium_plan_items")
      .split("|")
      .map((item) => `<li>${item.trim()}</li>`)
      .join("")}</ul>
    <a class="btn btn-primary" style="margin-top:0.75rem" href="${TW.dashBase()}get-app.html#premium">${TW.t("dash_subscribe_premium")}</a>`;
};

TW.renderSelectedBadgeCard = function (wrapEl, nameEl) {
  const badge = TW.resolveDashboardBadge(TW.getSelectedBadgeId());
  if (nameEl && badge) {
    nameEl.innerHTML = `<span style="font-size:1.25rem;margin-right:0.35rem">${badge.emoji}</span>${badge.name}`;
  }
};

TW.renderBadgePicker = function (el, onSelect) {
  if (!el) return;
  const groups = TW.getDashboardBadges();
  const sel = TW.getSelectedBadgeId();
  const isPrem = TW.isMemberPremium && TW.isMemberPremium();
  function section(titleKey, items) {
    return `<p class="dash-badge-cat">${TW.t(titleKey)}</p>` +
      items
        .map(
          (b) =>
            `<button type="button" class="dash-badge-pick ${b.locked ? "locked" : ""} ${sel === b.id ? "selected" : ""}" data-id="${b.id}" ${b.locked ? "disabled" : ""}>
          <span class="ico" style="background:${b.color}">${b.emoji}</span>
          <span>${b.name}</span>
          ${sel === b.id ? `<span class="sel-tag">${TW.t("dash_selected")}</span>` : ""}
        </button>`
        )
        .join("");
  }
  el.innerHTML =
    section("app_badge_hiking", groups.hiking) +
    section("app_badge_env", groups.env) +
    (isPrem
      ? `<div class="dash-physical-awards"><strong>${TW.t("dash_physical_awards")}</strong><p>${TW.t("dash_physical_awards_body")}</p></div>`
      : `<p class="meta" style="margin-top:0.75rem">${TW.t("dash_physical_awards_premium")}</p>`);
  el.querySelectorAll(".dash-badge-pick:not(.locked)").forEach((btn) => {
    btn.addEventListener("click", () => {
      TW.setSelectedBadgeId(btn.dataset.id);
      if (typeof onSelect === "function") onSelect(btn.dataset.id);
      TW.renderBadgePicker(el, onSelect);
      TW.renderSelectedBadgeCard(null, document.getElementById("selectedBadge"));
    });
  });
};

TW.bindInsightToggle = function (toggleEl, barsEl, dataKey) {
  if (!toggleEl || !barsEl) return;
  const data = TW.insightsDemoData();
  function render(mode) {
    TW.renderInsightBars(barsEl, data[dataKey + (mode === "yearly" ? "Yearly" : "Monthly")]);
  }
  render("monthly");
  toggleEl.querySelectorAll("button").forEach((btn) => {
    btn.addEventListener("click", () => {
      toggleEl.querySelectorAll("button").forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      render(btn.dataset.mode);
    });
  });
};

TW.applyPremiumMoreGate = function () {
  const prem = TW.isMemberPremium && TW.isMemberPremium();
  document.querySelectorAll("[data-premium-more]").forEach((el) => {
    if (prem) {
      el.classList.remove("dash-locked");
      el.removeAttribute("aria-disabled");
    } else {
      el.classList.add("dash-locked");
      el.setAttribute("aria-disabled", "true");
    }
  });
  const gate = document.getElementById("dashMoreGate");
  if (gate && !prem) {
    gate.innerHTML = `<div class="dash-premium-gate card" style="padding:1.25rem;margin-bottom:1.25rem">
      <span class="app-premium-pill">PREMIUM</span>
      <p style="margin:0.65rem 0 1rem;color:var(--text-muted);font-size:0.9rem">${TW.t("dash_more_premium_body")}</p>
      <a class="btn btn-primary" href="${TW.dashBase()}get-app.html#premium">${TW.t("dash_subscribe_premium")}</a>
    </div>`;
  } else if (gate) {
    gate.innerHTML = "";
  }
  document.querySelectorAll("[data-me-jump='insights'], [data-me-jump='milestones'], #meHubNavMore a").forEach((a) => {
    if (a._premBound) return;
    a._premBound = true;
    a.addEventListener("click", (e) => {
      if (TW.isMemberPremium && TW.isMemberPremium()) return;
      const jump = a.getAttribute("data-me-jump") || (a.getAttribute("href") || "").replace(/^#/, "");
      if (jump === "insights" || jump === "milestones") {
        e.preventDefault();
        e.stopPropagation();
        if (typeof showToast === "function") showToast(TW.t("dash_more_premium_body"));
      }
    });
  });
};
