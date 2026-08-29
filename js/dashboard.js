/** Dashboard — membership, badge picker, milestones & insights helpers */
window.TW = window.TW || {};

TW.dashBase = function () {
  const path = (location.pathname || "").replace(/\\/g, "/");
  return /\/app(?:\/|$)/.test(path) ? "../" : "";
};

TW.SELECTED_BADGE_KEY = "tw_dashboard_badge";

TW.resolveBadgeItem = function (cat, series, badge, state) {
  const zh = TW.getLang() === "zh";
  state = state || (typeof TW.getBadgeProgressState === "function" ? TW.getBadgeProgressState() : {});
  const name = zh ? badge.nameZh || badge.name : badge.name;
  let criteria = zh ? series.criteriaLabelZh || series.criteriaLabel : series.criteriaLabel || series.criteriaLabelZh;
  const extras = [];
  if (badge.image) {
    /* graphic shown in card */
  }
  if (badge.points && badge.points.length) {
    const pts = badge.points
      .map((p) => p.lat.toFixed(4) + ", " + p.lng.toFixed(4) + " (" + p.radiusM + " m)")
      .join(zh ? " 或 " : " OR ");
    extras.push(pts);
  }
  if (badge.planShareUrl) extras.push(badge.planShareUrl);
  if (badge.planRef) extras.push(badge.planRef);
  if (badge.targetKm != null) extras.push((zh ? "目標 " : "Target ") + badge.targetKm + " km");
  if (badge.targetCount != null) extras.push((zh ? "目標 " : "Target ") + badge.targetCount);
  if (badge.totalKm != null) extras.push((zh ? "全長約 " : "About ") + badge.totalKm + " km");
  if (series.hold) extras.push(zh ? "即將推出（暫緩）" : "Coming soon (HOLD)");
  if (badge.optIn) extras.push(zh ? "需報名參加" : "Opt-in required");
  if (badge.timeLimit) extras.push(zh ? "有時限" : "Time-limited");
  if (extras.length) criteria = (criteria || "") + (criteria ? "\n" : "") + extras.join("\n");

  let progress = 0;
  let total = 1;
  let locked = true;
  let showProgress = !!series.showProgress;

  if (series.hold) {
    locked = true;
    showProgress = false;
  } else if (series.criteriaType === "gps" || series.criteriaType === "route_cover") {
    if (badge.totalKm != null) {
      const done = (state.fourTrailKm && state.fourTrailKm[badge.id]) || 0;
      progress = Math.min(badge.totalKm, done);
      total = badge.totalKm;
      locked = progress < total * 0.9;
      showProgress = true;
    } else {
      locked = !(state.gpsUnlocked || []).includes(badge.id);
      progress = locked ? 0 : 1;
      total = 1;
      showProgress = false;
    }
  } else if (series.criteriaType === "lifetime_distance") {
    progress = Math.min(badge.targetKm, Number(state.distanceKm) || 0);
    total = badge.targetKm;
    locked = progress < total;
  } else if (series.criteriaType === "count") {
    let count = 0;
    if (series.id === "overseas") count = state.overseasCount || 0;
    else if (series.id === "group_org") count = state.groupHikesOrganized || 0;
    else if (series.id === "incidents") count = state.incidentReports || 0;
    progress = Math.min(badge.targetCount, count);
    total = badge.targetCount;
    locked = progress < total;
  } else if (series.criteriaType === "cms") {
    locked = !(state.cmsAssigned || []).includes(badge.id);
    progress = locked ? 0 : 1;
    total = 1;
    showProgress = false;
  }

  return {
    id: badge.id,
    cat: cat.id,
    seriesId: series.id,
    seriesName: zh ? series.nameZh || series.name : series.name,
    categoryName: zh ? cat.nameZh || cat.name : cat.name,
    name: name,
    emoji: badge.emoji,
    image: badge.image || "",
    color: badge.color || "#2d8a45",
    locked: locked,
    progress: progress,
    total: total,
    showProgress: showProgress,
    criteria: criteria,
    hold: !!series.hold,
  };
};

TW.getAllResolvedBadges = function () {
  const state = typeof TW.getBadgeProgressState === "function" ? TW.getBadgeProgressState() : {};
  const catalog = typeof TW.getEffectiveBadgeCatalog === "function" ? TW.getEffectiveBadgeCatalog() : TW.badgeCatalog || [];
  const list = [];
  catalog.forEach((cat) => {
    (cat.series || []).forEach((series) => {
      (series.badges || []).forEach((badge) => {
        list.push(TW.resolveBadgeItem(cat, series, badge, state));
      });
    });
  });
  return list;
};

TW.getDashboardBadges = function () {
  const state = typeof TW.getBadgeProgressState === "function" ? TW.getBadgeProgressState() : {};
  const catalog = typeof TW.getEffectiveBadgeCatalog === "function" ? TW.getEffectiveBadgeCatalog() : TW.badgeCatalog || [];
  const categories = catalog.map((cat) => ({
    id: cat.id,
    name: TW.getLang() === "zh" ? cat.nameZh || cat.name : cat.name,
    series: (cat.series || []).map((series) => ({
      id: series.id,
      name: TW.getLang() === "zh" ? series.nameZh || series.name : series.name,
      hold: !!series.hold,
      criteriaLabel:
        TW.getLang() === "zh" ? series.criteriaLabelZh || series.criteriaLabel : series.criteriaLabel,
      badges: (series.badges || []).map((badge) => TW.resolveBadgeItem(cat, series, badge, state)),
    })),
  }));
  const all = [];
  categories.forEach((c) => c.series.forEach((s) => s.badges.forEach((b) => all.push(b))));
  return {
    categories: categories,
    hiking: all.filter((b) => b.cat !== "outside"),
    env: all.filter((b) => b.cat === "outside"),
    all: all,
  };
};

TW.badgeProgressHtml = function (b) {
  if (!b || b.showProgress === false) return "";
  const total = Math.max(1, Number(b.total) || 1);
  const progress = Math.max(0, Math.min(total, Number(b.progress) || 0));
  const pct = Math.round((progress / total) * 100);
  const isKm = b.seriesId === "four_trails" || b.seriesId === "distance";
  const lbl = isKm ? progress + " / " + total + " km" : progress + "/" + total;
  return `<div class="badge-progress" aria-hidden="true"><span style="width:${pct}%"></span></div>
    <div class="badge-progress-lbl">${lbl}</div>`;
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
  const all = groups.all || groups.hiking.concat(groups.env);
  if (id) {
    const found = all.find((b) => b.id === id && !b.locked && !b.hold);
    if (found) return found;
  }
  return all.find((b) => !b.locked && !b.hold) || all[0] || null;
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
    const ico = badge.image
      ? `<img src="${badge.image}" alt="" style="width:1.35rem;height:1.35rem;object-fit:cover;border-radius:6px;vertical-align:middle;margin-right:0.35rem" />`
      : `<span style="font-size:1.25rem;margin-right:0.35rem">${badge.emoji || ""}</span>`;
    nameEl.innerHTML = ico + badge.name;
  }
};

TW.badgeIconHtml = function (b, locked) {
  const bg = locked ? "#d1d5db" : b.color || "#2d8a45";
  if (b.image) {
    return `<span class="ico" style="background:${bg}"><img src="${b.image}" alt="" /></span>`;
  }
  return `<span class="ico" style="background:${bg}">${b.emoji || "🏅"}</span>`;
};

/**
 * @param {HTMLElement} el
 * @param {function} [onSelect]
 * @param {{ compact?: boolean }} [opts] compact = app shell layout with category chips
 */
TW.renderProfileBadgeGrid = function (el, onSelect, opts) {
  if (!el) return;
  opts = opts || el._badgeOpts || {};
  el._badgeOpts = opts;
  el._badgeOnSelect = onSelect;
  const compact = !!opts.compact;
  const groups = TW.getDashboardBadges();
  const sel = TW.getSelectedBadgeId();
  const isPrem = TW.isMemberPremium && TW.isMemberPremium();
  let catFilter = el.dataset.badgeCat || "all";
  if (catFilter !== "all" && !(groups.categories || []).some((c) => c.id === catFilter)) {
    catFilter = "all";
    el.dataset.badgeCat = "all";
  }

  function cards(items) {
    return `<div class="profile-badge-grid${compact ? " profile-badge-grid--compact" : ""}">` +
      items
        .map((b) => {
          const tip = (b.criteria || TW.t("app_badge_criteria")).replace(/"/g, "&quot;");
          const holdTag = b.hold ? `<span class="badge-hold-tag">${TW.t("badge_hold")}</span>` : "";
          const locked = b.locked || b.hold;
          return `<button type="button" class="profile-badge-card ${locked ? "locked" : ""} ${sel === b.id ? "selected" : ""}" data-id="${b.id}" title="${tip}">
            ${TW.badgeIconHtml(b, locked)}
            <span class="name">${b.name}</span>
            ${holdTag}
            <span class="crit">${(b.criteria || "").replace(/\n/g, "<br>")}</span>
            ${TW.badgeProgressHtml(b)}
            ${sel === b.id ? `<span class="sel-tag">${TW.t("dash_selected")}</span>` : ""}
          </button>`;
        })
        .join("") +
      `</div>`;
  }

  const cats = groups.categories || [];
  let html = "";
  if (compact) {
    html += `<div class="badge-cat-chips" role="tablist">`;
    html += `<button type="button" class="chip ${catFilter === "all" ? "active" : ""}" data-badge-cat="all">${TW.t("filter_all")}</button>`;
    cats.forEach((cat) => {
      html += `<button type="button" class="chip ${catFilter === cat.id ? "active" : ""}" data-badge-cat="${cat.id}">${cat.name}</button>`;
    });
    html += `</div>`;
  }

  cats.forEach((cat) => {
    if (catFilter !== "all" && cat.id !== catFilter) return;
    html += `<h3 class="dash-badge-cat">${cat.name}</h3>`;
    (cat.series || []).forEach((series) => {
      html += `<p class="dash-badge-series">${series.name}${series.hold ? " · " + TW.t("badge_hold") : ""}</p>`;
      if (series.criteriaLabel && !compact) {
        html += `<p class="dash-badge-series-crit">${series.criteriaLabel}</p>`;
      } else if (series.criteriaLabel && compact) {
        html += `<p class="dash-badge-series-crit">${series.criteriaLabel}</p>`;
      }
      html += cards(series.badges);
    });
  });

  if (!compact) {
    html += isPrem
      ? `<div class="dash-physical-awards"><strong>${TW.t("dash_physical_awards")}</strong><p>${TW.t("dash_physical_awards_body")}</p></div>`
      : `<p class="meta" style="margin-top:0.75rem">${TW.t("dash_physical_awards_premium")}</p>`;
  } else {
    html += `<p class="meta badge-cms-sync-note">${TW.t("badge_cms_sync")}</p>`;
  }

  el.innerHTML = html;
  el.classList.toggle("badge-picker--compact", compact);

  el.querySelectorAll("[data-badge-cat]").forEach((btn) => {
    btn.addEventListener("click", () => {
      el.dataset.badgeCat = btn.dataset.badgeCat;
      TW.renderProfileBadgeGrid(el, onSelect, opts);
    });
  });

  el.querySelectorAll(".profile-badge-card").forEach((btn) => {
    btn.addEventListener("click", () => {
      el.querySelectorAll(".profile-badge-card").forEach((b) => b.classList.remove("is-open"));
      btn.classList.add("is-open");
      const id = btn.dataset.id;
      const badge = (TW.getDashboardBadges().all || []).find((b) => b.id === id);
      if (!badge) return;
      if (badge.locked || badge.hold) {
        if (typeof showToast === "function") showToast(badge.criteria || TW.t("app_badge_criteria"));
        return;
      }
      TW.setSelectedBadgeId(id);
      if (typeof onSelect === "function") onSelect(id);
      TW.renderProfileBadgeGrid(el, onSelect, opts);
      TW.renderSelectedBadgeCard(null, document.getElementById("selectedBadge"));
    });
  });
};

/** Re-render any mounted badge pickers when CMS catalog/assignments change. */
TW.refreshMountedBadgePickers = function () {
  document.querySelectorAll("[data-badge-picker], #badgePicker").forEach((el) => {
    if (el._badgeOpts || el.id === "badgePicker") {
      TW.renderProfileBadgeGrid(el, el._badgeOnSelect, el._badgeOpts || { compact: !!el.closest(".app-page") });
    }
  });
  const sel = document.getElementById("selectedBadge") || document.getElementById("selBadge");
  if (sel) {
    if (sel.id === "selBadge") {
      const b = TW.resolveDashboardBadge(TW.getSelectedBadgeId());
      const ico = document.getElementById("selBadgeIco");
      if (b && ico) {
        if (b.image) {
          ico.innerHTML = `<img src="${b.image}" alt="" style="width:1.4rem;height:1.4rem;object-fit:cover;border-radius:6px" />`;
        } else {
          ico.textContent = b.emoji || "";
        }
      }
      if (b) sel.textContent = b.name;
    } else {
      TW.renderSelectedBadgeCard(null, sel);
    }
  }
};

/** Listen for CMS badge catalog/assignment updates (same browser, other tabs or after save). */
TW.bindBadgeCatalogSync = function (callback) {
  if (TW._badgeSyncBound) {
    if (typeof callback === "function") TW._badgeSyncCallbacks.push(callback);
    return;
  }
  TW._badgeSyncBound = true;
  TW._badgeSyncCallbacks = typeof callback === "function" ? [callback] : [];
  window.addEventListener("storage", (e) => {
    if (e.key !== "tw_badge_rev" && e.key !== "tw_cms_store") return;
    TW._badgeSyncCallbacks.forEach((fn) => {
      try {
        fn();
      } catch (err) {}
    });
    TW.refreshMountedBadgePickers();
  });
  document.addEventListener("visibilitychange", () => {
    if (document.visibilityState !== "visible") return;
    TW.refreshMountedBadgePickers();
  });
};

TW.renderBadgePicker = function (el, onSelect) {
  if (!el) return;
  const groups = TW.getDashboardBadges();
  const sel = TW.getSelectedBadgeId();
  const isPrem = TW.isMemberPremium && TW.isMemberPremium();
  let html = "";
  (groups.categories || []).forEach((cat) => {
    html += `<p class="dash-badge-cat">${cat.name}</p>`;
    (cat.series || []).forEach((series) => {
      html += `<p class="dash-badge-series">${series.name}${series.hold ? " · " + TW.t("badge_hold") : ""}</p>`;
      html += series.badges
        .map(
          (b) =>
            `<button type="button" class="dash-badge-pick ${b.locked || b.hold ? "locked" : ""} ${sel === b.id ? "selected" : ""}" data-id="${b.id}" ${b.locked || b.hold ? "disabled" : ""}>
          ${TW.badgeIconHtml(b, b.locked || b.hold)}
          <span>${b.name}</span>
          ${sel === b.id ? `<span class="sel-tag">${TW.t("dash_selected")}</span>` : ""}
        </button>`
        )
        .join("");
    });
  });
  el.innerHTML =
    html +
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
  const initial = (toggleEl.querySelector("button.active") && toggleEl.querySelector("button.active").dataset.mode) || "yearly";
  render(initial);
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
  const gate = document.getElementById("dashMoreGate");
  const moreBtn = document.getElementById("dashMoreBtn");
  const morePanel = document.getElementById("dashPremiumMore");
  if (gate) {
    gate.hidden = true;
    gate.innerHTML = "";
  }
  if (morePanel) {
    morePanel.hidden = true;
    morePanel.classList.remove("is-open");
  }
  if (moreBtn) {
    moreBtn.hidden = false;
    const href = TW.insightsPageHref ? TW.insightsPageHref() : "insights.html";
    moreBtn.textContent = prem ? TW.t("dash_view_insights") : TW.t("dash_unlock_insights");
    if (moreBtn.tagName === "A") {
      moreBtn.href = href;
    } else {
      moreBtn.onclick = () => {
        location.href = href;
      };
    }
  }
};

TW.insightsPageHref = function () {
  return "insights.html";
};

TW.premiumPageHref = function () {
  return "premium.html";
};

TW.profilePageHref = function () {
  return "profile.html";
};

TW.renderInsightsTopRecords = function (el, opts) {
  if (!el) return;
  const mil = TW.getMilestonesDemo();
  el.innerHTML =
    `<ul class="highlight-list insights-record-list">` +
    mil.topRecords
      .map(
        (r) =>
          `<li><span class="hl-label">${TW.escapeHtml(TW.t(r.key))}</span><span class="hl-val insight-val">${TW.escapeHtml(r.title)} · ${TW.escapeHtml(r.val)}</span></li>`
      )
      .join("") +
    `</ul>`;
};

TW.renderInsightsHighlights = function (el) {
  if (!el) return;
  const mil = TW.getMilestonesDemo();
  el.innerHTML = mil.highlights
    .map(
      (h) =>
        `<li><span class="hl-icon">${h.icon}</span><span class="hl-label">${TW.escapeHtml(TW.t(h.labelKey))}</span><span class="hl-val insight-val">${TW.escapeHtml(h.val)}</span></li>`
    )
    .join("");
};

TW.renderPaceChartSummary = function () {
  const avg = document.getElementById("avgPace");
  const best = document.getElementById("bestPace");
  if (avg) avg.textContent = (TW.stats && TW.stats.avgPace ? TW.stats.avgPace : "12.4") + " min/km";
  if (best) best.textContent = (TW.stats && TW.stats.bestPace ? TW.stats.bestPace : "9.8") + " min/km";
};

TW.initInsightsPage = function (opts) {
  opts = opts || {};
  const prem = TW.isMemberPremium && TW.isMemberPremium();
  const root = document.getElementById("insightsPage");
  if (root) root.classList.toggle("insights-locked", !prem);

  TW.renderInsightsTopRecords(document.getElementById("dashTopRecords"), { compact: !!opts.compact });
  TW.renderInsightsHighlights(document.getElementById("milHighlights"));
  TW.renderPaceChartSummary();
  TW.bindInsightToggle(document.getElementById("activityToggle"), document.getElementById("activityBars"), "activity");
  TW.bindInsightToggle(document.getElementById("distToggle"), document.getElementById("distBars"), "distance");
  TW.bindInsightToggle(document.getElementById("elevToggle"), document.getElementById("elevBars"), "elevation");
  TW.renderRegionPie(document.getElementById("regionPie"));

  const upgrade = document.getElementById("insightsUpgrade");
  if (upgrade) {
    upgrade.hidden = !!prem;
    const link = upgrade.querySelector("a[data-premium-link]");
    if (link) link.href = TW.premiumPageHref();
  }
};
