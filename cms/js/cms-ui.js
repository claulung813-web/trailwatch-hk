/* CMS shared UI helpers */
function cmsToast(msg) {
  let t = document.getElementById("cmsToast");
  if (!t) {
    t = document.createElement("div");
    t.id = "cmsToast";
    t.className = "cms-toast";
    document.body.appendChild(t);
  }
  t.textContent = msg;
  t.classList.add("show");
  clearTimeout(window._cmsToast);
  window._cmsToast = setTimeout(() => t.classList.remove("show"), 2400);
}

function cmsNavLink(href, key, label, active) {
  return `<a href="${href}" class="${active === key ? "active" : ""}" data-cms-nav="${key}">${label}</a>`;
}

function cmsSidebar(active) {
  const admin = typeof CMS !== "undefined" && CMS.getSessionAdmin ? CMS.getSessionAdmin() : null;
  const tier = (admin && admin.tier) || "super";
  const name = (admin && (admin.name || admin.username)) || "staff";
  const tierLabel = typeof CMS !== "undefined" && CMS.adminTierLabel ? CMS.adminTierLabel(tier) : tier;
  const showAdmins = tier === "super";
  const showUsers = tier === "super" || tier === "general";

  return `
  <aside class="cms-sidebar">
    <div class="brand">🌲 TrailWatch CMS</div>
    <div class="cms-nav-group">Overview</div>
    ${cmsNavLink("dashboard.html", "dash", "Dashboard", active)}

    ${showAdmins || showUsers ? `<div class="cms-nav-group">People</div>` : ""}
    ${showAdmins ? cmsNavLink("admins.html", "admins", "Admin management", active) : ""}
    ${showUsers ? cmsNavLink("users.html", "users", "User management", active) : ""}
    ${showUsers ? cmsNavLink("members.html", "members", "Members", active) : ""}

    <div class="cms-nav-group">Homepage</div>
    ${cmsNavLink("banners.html", "banners", "Hero banners", active)}
    ${cmsNavLink("homepage.html", "homepage", "Featured & app functions", active)}

    <div class="cms-nav-group">Content</div>
    ${cmsNavLink("trails.html", "trails", "Editor's Choice routes", active)}
    ${cmsNavLink("articles.html", "articles", "Articles", active)}
    ${cmsNavLink("feed.html", "feed", "Community feed", active)}
    ${cmsNavLink("group-hikes.html", "group-hikes", "Group hikes", active)}
    ${cmsNavLink("incidents.html", "incidents", "Incident reports", active)}
    ${cmsNavLink("badges.html", "badges", "Badges", active)}
    ${cmsNavLink("gallery.html", "gallery", "Gallery", active)}
    ${cmsNavLink("challenges.html", "challenges", "Challenges", active)}
    ${cmsNavLink("activity-tags.html", "activity-tags", "Activity tags", active)}

    <div class="cms-nav-group">Ops</div>
    ${cmsNavLink("transactions.html", "transactions", "Transactions", active)}
    ${cmsNavLink("donations.html", "donations", "Donations inbox", active)}
    ${cmsNavLink("feedback.html", "feedback", "Feedback", active)}
    ${cmsNavLink("notifications.html", "notifications", "Notifications", active)}
    ${cmsNavLink("popups.html", "popups", "Pop-ups / overlays", active)}
    ${cmsNavLink("static-pages.html", "static", "Static pages", active)}
    ${cmsNavLink("content.html", "content", "Site snippets", active)}

    <div class="side-foot">
      <div style="opacity:.85;margin-bottom:.25rem;font-weight:600">${name}</div>
      <div style="opacity:.65;margin-bottom:.5rem;font-size:0.75rem">${tierLabel}</div>
      <a href="../index.html" id="cmsViewSite" target="_blank">View website ↗</a><br/>
      <a href="#" id="cmsLogout">Log out</a>
    </div>
  </aside>`;
}

function cmsInitShell(active) {
  const sectionKey =
    active === "admins" ? "admins" : active === "users" || active === "members" ? "users" : null;
  if (!CMS.requireAuth(sectionKey === "admins" ? "admins" : sectionKey === "users" ? "users" : undefined)) {
    return false;
  }
  if (active === "admins" && !CMS.canAccess("admins")) {
    location.href = "dashboard.html";
    return false;
  }
  if ((active === "users" || active === "members") && !CMS.canAccess("users")) {
    location.href = "dashboard.html";
    return false;
  }
  const shell = document.getElementById("cmsShell");
  if (shell && !shell.dataset.ready) {
    shell.innerHTML = cmsSidebar(active) + '<div class="cms-main" id="cmsMain">' + shell.innerHTML + "</div>";
    shell.className = "cms-shell";
    shell.dataset.ready = "1";
    document.getElementById("cmsLogout").addEventListener("click", (e) => {
      e.preventDefault();
      CMS.logout();
      location.href = "index.html";
    });
    if (typeof TW !== "undefined" && TW.bindPublicFallbacks) TW.bindPublicFallbacks(shell);
    cmsBindZhParity(shell);
  }
  return true;
}

function cmsZhPairs(scope) {
  const root = scope || document;
  const pairs = [];
  root.querySelectorAll("input[id$='Zh'], textarea[id$='Zh'], input[id$='zh'], textarea[id$='zh']").forEach((zh) => {
    const base = zh.id.replace(/Zh$/i, "");
    if (!base || base === zh.id) return;
    const en =
      root.querySelector("#" + CSS.escape(base)) ||
      root.querySelector("#" + CSS.escape(base + "En")) ||
      root.querySelector("#" + CSS.escape(base + "en"));
    if (!en) return;
    pairs.push({ en: en, zh: zh });
  });
  return pairs;
}

function cmsMarkZhPair(pair) {
  const enVal = String(pair.en.value || "").trim();
  const zhVal = String(pair.zh.value || "").trim();
  const missing = !!enVal && !zhVal;
  pair.zh.classList.toggle("cms-i18n-missing", missing);
  let hint = pair.zh.nextElementSibling;
  if (!hint || !hint.classList || !hint.classList.contains("cms-i18n-hint")) {
    hint = document.createElement("div");
    hint.className = "cms-i18n-hint";
    hint.textContent = "Missing translation";
    pair.zh.insertAdjacentElement("afterend", hint);
  }
  hint.classList.toggle("show", missing);
  return missing;
}

function cmsBindZhParity(scope) {
  const root = scope || document;
  const updateAll = () => cmsZhPairs(root).forEach(cmsMarkZhPair);
  root.addEventListener("input", (e) => {
    const el = e.target;
    if (!el || !el.id) return;
    if (/Zh$/i.test(el.id) || root.querySelector("#" + CSS.escape(el.id) + "Zh") || root.querySelector("#" + CSS.escape(el.id) + "zh")) {
      updateAll();
    }
  });
  if (!window._cmsZhSubmitBound) {
    window._cmsZhSubmitBound = true;
    document.addEventListener(
      "submit",
      (e) => {
        const form = e.target;
        if (!form || !form.closest || !form.closest(".cms-body")) return;
        const missing = cmsZhPairs(form).filter(cmsMarkZhPair);
        if (!missing.length) return;
        e.preventDefault();
        e.stopImmediatePropagation();
        const names = missing.map((p) => p.zh.id.replace(/Zh$/i, "")).join(", ");
        cmsToast("Missing 繁 for: " + names + " (or clear the English field)");
      },
      true
    );
  }
  updateAll();
  setTimeout(updateAll, 400);
}

function uid(prefix) {
  return prefix + "_" + Date.now().toString(36) + Math.random().toString(36).slice(2, 6);
}

function cmsEsc(s) {
  return String(s == null ? "" : s)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/"/g, "&quot;");
}

function cmsDownloadText(filename, text, mime) {
  const blob = new Blob([text], { type: mime || "text/plain;charset=utf-8" });
  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = filename;
  a.click();
  setTimeout(() => URL.revokeObjectURL(a.href), 1500);
}

function cmsMoveItem(list, id, dir) {
  const i = list.findIndex((x) => x.id === id);
  if (i < 0) return list;
  const j = i + dir;
  if (j < 0 || j >= list.length) return list;
  const copy = list.slice();
  const tmp = copy[i];
  copy[i] = copy[j];
  copy[j] = tmp;
  return copy;
}
