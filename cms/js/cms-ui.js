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
  return `<a href="${href}" class="${active === key ? "active" : ""}" data-cms-nav="${key}" data-cms-label="${cmsEsc(label)}">${label}</a>`;
}

function cmsNavGroup(id, title, inner) {
  if (!inner || !String(inner).trim()) return "";
  return `
    <div class="cms-nav-group" data-nav-group="${id}">
      <p class="cms-nav-group-title">${title}</p>
      <div class="cms-nav-group-body">${inner}</div>
    </div>`;
}

function cmsSidebar(active) {
  const admin = typeof CMS !== "undefined" && CMS.getSessionAdmin ? CMS.getSessionAdmin() : null;
  const tier = (admin && admin.tier) || "super";
  const name = (admin && (admin.name || admin.username)) || "staff";
  const tierLabel = typeof CMS !== "undefined" && CMS.adminTierLabel ? CMS.adminTierLabel(tier) : tier;
  const showAdmins = tier === "super";
  const showUsers = tier === "super" || tier === "general";

  const moderate =
    cmsNavLink("incidents.html", "incidents", "Incidents", active) +
    cmsNavLink("feed.html", "feed", "Community feed", active) +
    cmsNavLink("group-hikes.html", "group-hikes", "Group hikes", active) +
    (showUsers ? cmsNavLink("members.html", "members", "Members", active) : "");

  const publish =
    cmsNavLink("homepage.html", "homepage", "Homepage", active) +
    cmsNavLink("banners.html", "banners", "Banners", active) +
    cmsNavLink("trails.html", "trails", "Editor's Choice", active) +
    cmsNavLink("articles.html", "articles", "Articles", active);

  const people =
    (showUsers ? cmsNavLink("users.html", "users", "Users", active) : "") +
    (showAdmins ? cmsNavLink("admins.html", "admins", "Admins", active) : "");

  const ops =
    cmsNavLink("transactions.html", "transactions", "Transactions", active) +
    cmsNavLink("notifications.html", "notifications", "Notifications", active) +
    cmsNavLink("popups.html", "popups", "Pop-ups", active) +
    cmsNavLink("static-pages.html", "static", "Static pages", active);

  const more =
    cmsNavLink("gallery.html", "gallery", "Gallery", active) +
    cmsNavLink("badges.html", "badges", "Badges", active) +
    cmsNavLink("challenges.html", "challenges", "Challenges", active) +
    cmsNavLink("activity-tags.html", "activity-tags", "Activity tags", active) +
    cmsNavLink("donations.html", "donations", "Donations inbox", active) +
    cmsNavLink("feedback.html", "feedback", "Feedback", active) +
    cmsNavLink("content.html", "content", "Site snippets", active);

  return `
  <aside class="cms-sidebar" id="cmsSidebar">
    <div class="brand">🌲 TrailWatch CMS</div>
    <input class="cms-nav-search" id="cmsNavSearch" type="search" placeholder="Search menu…" aria-label="Search menu" />
    ${cmsNavGroup("overview", "Overview", cmsNavLink("dashboard.html", "dash", "Dashboard", active))}
    ${cmsNavGroup("moderate", "Moderate", moderate)}
    ${cmsNavGroup("publish", "Publish", publish)}
    ${cmsNavGroup("people", "People", people)}
    ${cmsNavGroup("ops", "Ops", ops)}
    ${cmsNavGroup("more", "More", more)}
    <div class="side-foot">
      <div class="cms-side-name">${cmsEsc(name)}</div>
      <div class="cms-side-tier">${cmsEsc(tierLabel)}</div>
      <div class="cms-demo-note">Demo — data lives in this browser</div>
      <div class="cms-last-saved" id="cmsLastSaved"></div>
      <a href="../index.html" id="cmsViewSite" target="_blank">View website ↗</a><br/>
      <a href="#" id="cmsLogout">Log out</a>
    </div>
  </aside>`;
}

function cmsBindSidebar() {
  const search = document.getElementById("cmsNavSearch");
  if (search && !search.dataset.bound) {
    search.dataset.bound = "1";
    search.addEventListener("input", () => {
      const q = search.value.trim().toLowerCase();
      document.querySelectorAll(".cms-sidebar a[data-cms-nav]").forEach((a) => {
        const hit = !q || (a.dataset.cmsLabel || a.textContent || "").toLowerCase().indexOf(q) >= 0;
        a.hidden = !hit;
      });
      document.querySelectorAll("[data-nav-group]").forEach((g) => {
        const any = [...g.querySelectorAll("a[data-cms-nav]")].some((a) => !a.hidden);
        g.style.display = any ? "" : "none";
      });
    });
  }
  document.querySelectorAll("[data-nav-toggle]").forEach((btn) => {
    if (btn.dataset.bound) return;
    btn.dataset.bound = "1";
    btn.addEventListener("click", () => {
      const id = btn.dataset.navToggle;
      const g = document.querySelector('[data-nav-group="' + id + '"]');
      if (!g) return;
      g.classList.toggle("is-collapsed");
      localStorage.setItem("tw_cms_nav_" + id, g.classList.contains("is-collapsed") ? "0" : "1");
    });
  });
  const toggle = document.getElementById("cmsNavToggle");
  if (toggle && !toggle.dataset.bound) {
    toggle.dataset.bound = "1";
    toggle.addEventListener("click", () => {
      document.body.classList.toggle("cms-nav-open");
    });
  }
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
    const pageTitle = (shell.querySelector("h1") || {}).textContent || "CMS";
    shell.innerHTML =
      cmsSidebar(active) +
      '<div class="cms-main" id="cmsMain">' +
      shell.innerHTML +
      "</div>";
    shell.className = "cms-shell";
    shell.dataset.ready = "1";
    const main = document.getElementById("cmsMain");
    const h1 = main && main.querySelector("h1");
    const bar = document.createElement("div");
    bar.className = "cms-page-head";
    bar.innerHTML = '<button type="button" class="cms-nav-toggle" id="cmsNavToggle" aria-label="Open menu">☰</button>';
    if (h1) {
      main.insertBefore(bar, h1);
      bar.appendChild(h1);
    } else {
      bar.insertAdjacentHTML("beforeend", '<span class="cms-page-head-title">' + cmsEsc(pageTitle) + "</span>");
      main.insertBefore(bar, main.firstChild);
    }
    document.getElementById("cmsLogout").addEventListener("click", (e) => {
      e.preventDefault();
      CMS.logout();
      location.href = "index.html";
    });
    if (typeof TW !== "undefined" && TW.bindPublicFallbacks) TW.bindPublicFallbacks(shell);
    cmsBindSidebar();
    cmsEnsureDestroyModal();
    cmsEnsureDrawer();
    cmsBindZhParity(shell);
    cmsEnhanceUi(document.getElementById("cmsMain"));
    cmsBindUnsaved(document.getElementById("cmsMain"));
    cmsRefreshLastSaved();
    window.addEventListener("tw-cms-saved", cmsRefreshLastSaved);
    cmsObserveMain();
  }
  return true;
}

function cmsRefreshLastSaved() {
  const el = document.getElementById("cmsLastSaved");
  if (!el || typeof CMS === "undefined") return;
  const at = CMS.getStore().updatedAt;
  el.textContent = at ? "Last saved " + new Date(at).toLocaleString() : "Not saved yet";
}

function cmsBindUnsaved(root) {
  if (!root || root.dataset.unsavedBound === "1") return;
  root.dataset.unsavedBound = "1";
  let dirty = false;
  const mark = () => {
    dirty = true;
  };
  root.addEventListener("input", mark);
  root.addEventListener("change", mark);
  root.addEventListener("submit", () => {
    dirty = false;
  });
  window.addEventListener("tw-cms-saved", () => {
    dirty = false;
  });
  window.addEventListener("beforeunload", (e) => {
    if (!dirty) return;
    e.preventDefault();
    e.returnValue = "";
  });
}

function cmsPreviewHref(kind, id) {
  const map = {
    banner: "../index.html",
    homepage: "../index.html",
    article: "../articles.html",
    incident: "../reports.html",
    trail: "../rec-trail.html?id=" + encodeURIComponent(id || ""),
    group: "../group-hike-detail.html?id=" + encodeURIComponent(id || ""),
    feed: "../feed.html",
    gallery: "../gallery.html",
    static: "../legal.html",
  };
  return map[kind] || "../index.html";
}

function cmsPreviewBtn(kind, id, label) {
  return `<a class="cms-btn cms-btn-secondary cms-btn-sm" href="${cmsEsc(cmsPreviewHref(kind, id))}" target="_blank" rel="noopener">${cmsEsc(label || "View website")}</a>`;
}

function cmsEnsureDrawer() {
  if (document.getElementById("cmsDrawer")) return;
  const wrap = document.createElement("div");
  wrap.id = "cmsDrawer";
  wrap.className = "cms-drawer-backdrop";
  wrap.innerHTML = `
    <div class="cms-drawer" role="dialog" aria-modal="true">
      <h3 id="cmsDrawerTitle">Edit</h3>
      <form class="cms-form" id="cmsDrawerForm"></form>
      <div class="cms-modal-actions">
        <button type="submit" form="cmsDrawerForm" class="cms-btn cms-btn-primary">Save</button>
        <button type="button" class="cms-btn cms-btn-secondary" id="cmsDrawerCancel">Cancel</button>
      </div>
    </div>`;
  document.body.appendChild(wrap);
  document.getElementById("cmsDrawerCancel").addEventListener("click", () => wrap.classList.remove("open"));
}

function cmsOpenDrawer(title, fields, onSave) {
  cmsEnsureDrawer();
  const wrap = document.getElementById("cmsDrawer");
  document.getElementById("cmsDrawerTitle").textContent = title || "Edit";
  const form = document.getElementById("cmsDrawerForm");
  form.innerHTML = (fields || [])
    .map((f) => {
      const id = "drw_" + f.id;
      if (f.type === "textarea") {
        return `<label for="${id}">${cmsEsc(f.label)}</label><textarea id="${id}" rows="${f.rows || 3}">${cmsEsc(f.value || "")}</textarea>`;
      }
      return `<label for="${id}">${cmsEsc(f.label)}</label><input id="${id}" type="${f.type || "text"}" value="${cmsEsc(f.value || "")}" />`;
    })
    .join("");
  wrap.classList.add("open");
  form.onsubmit = (e) => {
    e.preventDefault();
    const values = {};
    (fields || []).forEach((f) => {
      const el = document.getElementById("drw_" + f.id);
      values[f.id] = el ? el.value : "";
    });
    wrap.classList.remove("open");
    if (typeof onSave === "function") onSave(values);
  };
}

function cmsConfirmSend(opts) {
  opts = opts || {};
  return new Promise((resolve) => {
    const channels = opts.channels || [];
    const audience = opts.audience || "all";
    const wrap = document.createElement("div");
    wrap.className = "cms-modal-backdrop open";
    wrap.innerHTML = `
      <div class="cms-modal">
        <h3>${opts.dryRun ? "Dry-run send" : "Confirm send"}</h3>
        <p class="cms-modal-sub">Channels: <strong>${cmsEsc(channels.join(" + ") || "none")}</strong><br/>Audience: <strong>${cmsEsc(audience)}</strong></p>
        ${opts.dryRun ? `<div class="cms-form"><label>Test account (email)</label><input id="cmsDryEmail" type="email" value="alex.wong@email.com" /></div>` : ""}
        <div class="cms-modal-actions">
          <button type="button" class="cms-btn cms-btn-primary" id="cmsSendOk">${opts.dryRun ? "Send dry-run" : "Send"}</button>
          <button type="button" class="cms-btn cms-btn-secondary" id="cmsSendCancel">Cancel</button>
        </div>
      </div>`;
    document.body.appendChild(wrap);
    wrap.querySelector("#cmsSendCancel").addEventListener("click", () => {
      wrap.remove();
      resolve(null);
    });
    wrap.querySelector("#cmsSendOk").addEventListener("click", () => {
      const email = opts.dryRun ? (wrap.querySelector("#cmsDryEmail").value || "").trim() : "";
      if (opts.dryRun && !email) {
        cmsToast("Enter a test email");
        return;
      }
      wrap.remove();
      resolve(opts.dryRun ? { dryRun: true, email: email } : { send: true });
    });
  });
}

function cmsRenderCalendar(items, getDate) {
  const now = new Date();
  const y = now.getFullYear();
  const m = now.getMonth();
  const first = new Date(y, m, 1).getDay();
  const days = new Date(y, m + 1, 0).getDate();
  const byDay = {};
  (items || []).forEach((it) => {
    const raw = getDate(it);
    if (!raw) return;
    const d = new Date(raw);
    if (d.getFullYear() !== y || d.getMonth() !== m) return;
    const day = d.getDate();
    byDay[day] = byDay[day] || [];
    byDay[day].push(it);
  });
  let html = `<div class="cms-cal-head">${now.toLocaleString(undefined, { month: "long", year: "numeric" })}</div><div class="cms-cal">`;
  ["S", "M", "T", "W", "T", "F", "S"].forEach((d) => {
    html += `<div class="cms-cal-dow">${d}</div>`;
  });
  for (let i = 0; i < first; i++) html += `<div></div>`;
  for (let d = 1; d <= days; d++) {
    const n = (byDay[d] || []).length;
    html += `<div class="cms-cal-day${n ? " has-item" : ""}"><span>${d}</span>${n ? `<small>${n}</small>` : ""}</div>`;
  }
  html += "</div>";
  return html;
}

function cmsObserveMain() {
  if (window._cmsUiObs) return;
  const main = document.getElementById("cmsMain");
  if (!main) return;
  let t;
  window._cmsUiObs = new MutationObserver(() => {
    clearTimeout(t);
    t = setTimeout(() => cmsEnhanceUi(main), 80);
  });
  window._cmsUiObs.observe(main, { childList: true, subtree: true });
}

function cmsEnhanceUi(root) {
  if (!root) return;
  cmsLayoutBilingual(root);
  cmsEnhanceMedia(root);
  cmsWrapTables(root);
  cmsNormalizeActions(root);
  cmsAddDragHandles(root);
}

function cmsWrapTables(root) {
  root.querySelectorAll("table.cms-table").forEach((t) => {
    if (t.parentElement && t.parentElement.classList.contains("cms-table-wrap")) return;
    const w = document.createElement("div");
    w.className = "cms-table-wrap";
    t.parentNode.insertBefore(w, t);
    w.appendChild(t);
  });
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

function cmsFieldBlock(el) {
  const bits = [];
  let lab = el.previousElementSibling;
  if (lab && lab.tagName === "LABEL") bits.push(lab);
  bits.push(el);
  let n = el.nextElementSibling;
  if (n && n.classList && n.classList.contains("cms-i18n-hint")) bits.push(n);
  return bits;
}

function cmsLayoutBilingual(root) {
  cmsZhPairs(root).forEach((pair) => {
    if (pair.en.closest(".cms-i18n-row")) return;
    const row = document.createElement("div");
    row.className = "cms-i18n-row";
    const colEn = document.createElement("div");
    const colZh = document.createElement("div");
    colEn.className = "cms-i18n-col";
    colZh.className = "cms-i18n-col";
    const enBits = cmsFieldBlock(pair.en);
    const zhBits = cmsFieldBlock(pair.zh);
    const anchor = enBits[0];
    if (!anchor || !anchor.parentNode) return;
    anchor.parentNode.insertBefore(row, anchor);
    enBits.forEach((n) => colEn.appendChild(n));
    zhBits.forEach((n) => colZh.appendChild(n));
    row.appendChild(colEn);
    row.appendChild(colZh);
    const enLab = colEn.querySelector("label");
    const zhLab = colZh.querySelector("label");
    if (enLab && !/EN|English/i.test(enLab.textContent)) enLab.textContent = enLab.textContent.replace(/\s*$/, "") + " (EN)";
    if (zhLab && !/繁|ZH/i.test(zhLab.textContent)) zhLab.textContent = zhLab.textContent.replace(/\s*$/, "") + " (繁)";
  });
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
  const updateAll = () => {
    cmsLayoutBilingual(root);
    cmsZhPairs(root).forEach(cmsMarkZhPair);
  };
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

function cmsIsMediaInput(input) {
  if (!input || input.type === "hidden" || input.type === "checkbox" || input.type === "file") return false;
  const id = input.id || "";
  if (/icon/i.test(id) && !/image|photo|graphic/i.test(id)) return false;
  if (/image|graphic|photo|cover|poster|thumb|deviceImage|fnImage|ecPhoto/i.test(id)) return true;
  const ph = input.getAttribute("placeholder") || "";
  return /https?:|assets\/|\.jpe?g|\.png|\.webp|\.gif/i.test(ph);
}

function cmsEnhanceMedia(root) {
  root.querySelectorAll("input[id]").forEach((input) => {
    if (!cmsIsMediaInput(input) || input.closest(".cms-media")) return;
    const wrap = document.createElement("div");
    wrap.className = "cms-media";
    input.parentNode.insertBefore(wrap, input);
    wrap.appendChild(input);
    const preview = document.createElement("div");
    preview.className = "cms-media-preview";
    preview.innerHTML = '<span class="cms-media-ph">No image</span><img alt="" />';
    const img = preview.querySelector("img");
    img.addEventListener("error", () => {
      preview.classList.add("is-broken");
      img.removeAttribute("src");
    });
    const tools = document.createElement("div");
    tools.className = "cms-media-tools";
    const file = document.createElement("input");
    file.type = "file";
    file.accept = "image/*";
    file.className = "cms-media-file";
    const pasteBtn = document.createElement("button");
    pasteBtn.type = "button";
    pasteBtn.className = "cms-btn cms-btn-secondary cms-btn-sm";
    pasteBtn.textContent = "Paste image";
    tools.appendChild(file);
    tools.appendChild(pasteBtn);
    wrap.insertBefore(preview, input);
    wrap.appendChild(tools);
    const sync = () => {
      const v = (input.value || "").trim();
      preview.classList.remove("is-broken");
      if (!v) {
        img.removeAttribute("src");
        preview.classList.add("is-empty");
        return;
      }
      preview.classList.remove("is-empty");
      const src = /^https?:|^data:|^blob:|^\//.test(v) || v.indexOf("assets/") === 0 ? (v.indexOf("assets/") === 0 ? "../" + v : v) : v;
      img.src = src;
    };
    input.addEventListener("input", sync);
    input.addEventListener("change", sync);
    file.addEventListener("change", () => {
      const f = file.files && file.files[0];
      if (!f) return;
      const reader = new FileReader();
      reader.onload = () => {
        input.value = reader.result;
        input.dispatchEvent(new Event("input", { bubbles: true }));
        sync();
      };
      reader.readAsDataURL(f);
    });
    pasteBtn.addEventListener("click", async () => {
      try {
        const clip = await navigator.clipboard.read();
        for (const item of clip) {
          const type = item.types.find((t) => t.indexOf("image/") === 0);
          if (!type) continue;
          const blob = await item.getType(type);
          const reader = new FileReader();
          reader.onload = () => {
            input.value = reader.result;
            input.dispatchEvent(new Event("input", { bubbles: true }));
            sync();
          };
          reader.readAsDataURL(blob);
          return;
        }
        const text = await navigator.clipboard.readText();
        if (text) {
          input.value = text.trim();
          input.dispatchEvent(new Event("input", { bubbles: true }));
          sync();
        }
      } catch (err) {
        cmsToast("Paste a URL into the field, or use Upload");
      }
    });
    sync();
  });
}

function cmsNormalizeActions(root) {
  root.querySelectorAll(".cms-table tr").forEach((tr) => {
    const td = tr.lastElementChild;
    if (!td || td.tagName !== "TD") return;
    const btns = [...td.querySelectorAll("button.cms-btn, a.cms-btn")];
    if (btns.length < 2) return;
    const rank = (b) => {
      const t = (b.textContent || "").trim().toLowerCase();
      if (/^view$|^open$/.test(t)) return 0;
      if (/^edit$/.test(t)) return 1;
      if (/delete|remove|disable/.test(t)) return 9;
      return 5;
    };
    btns
      .slice()
      .sort((a, b) => rank(a) - rank(b))
      .forEach((b) => td.appendChild(b));
  });
}

const CMS_DRAG_PAIRS = [
  { up: "rup", down: "rdn" },
  { up: "aup", down: "adn" },
  { up: "fup", down: "fdn" },
  { up: "ecup", down: "ecdn" },
  { up: "cup", down: "cdn" },
  { up: "up", down: "down" },
  { up: "up", down: "dn" },
  { up: "sup", down: "sdn" },
  { up: "bup", down: "bdn" },
];

function cmsAddDragHandles(root) {
  CMS_DRAG_PAIRS.forEach((pair) => {
    root.querySelectorAll("[data-" + pair.up + "]").forEach((up) => {
      const item = up.closest("li, tr") || up.parentElement;
      if (!item) return;
      const down = item.querySelector("[data-" + pair.down + "]");
      if (item.dataset.cmsDragReady === "1") {
        up.classList.add("cms-arrow-hidden");
        if (down) down.classList.add("cms-arrow-hidden");
        return;
      }
      const handle = document.createElement("button");
      handle.type = "button";
      handle.className = "cms-drag";
      handle.title = "Drag to reorder";
      handle.textContent = "⋮⋮";
      up.parentNode.insertBefore(handle, up);
      up.classList.add("cms-arrow-hidden");
      if (down) down.classList.add("cms-arrow-hidden");
      item.dataset.cmsDragReady = "1";
      item.draggable = true;
      item.addEventListener("dragstart", (e) => {
        if (e.target.closest && e.target.closest("input, textarea, select, a")) {
          e.preventDefault();
          return;
        }
        e.dataTransfer.setData("text/plain", up.getAttribute("data-" + pair.up) || "");
        e.dataTransfer.effectAllowed = "move";
        item.classList.add("is-dragging");
        window._cmsDrag = { item: item, up: pair.up, down: pair.down };
      });
      item.addEventListener("dragend", () => {
        item.classList.remove("is-dragging");
        window._cmsDrag = null;
      });
      item.addEventListener("dragover", (e) => {
        e.preventDefault();
        item.classList.add("is-drop");
      });
      item.addEventListener("dragleave", () => item.classList.remove("is-drop"));
      item.addEventListener("drop", (e) => {
        e.preventDefault();
        item.classList.remove("is-drop");
        const drag = window._cmsDrag;
        if (!drag || drag.item === item) return;
        const parent = item.parentNode;
        const items = [...parent.querySelectorAll("[data-cms-drag-ready='1'], [data-cms-drag-ready]")];
        const list = [...parent.children].filter((n) => n.dataset && n.dataset.cmsDragReady === "1");
        const from = list.indexOf(drag.item);
        const to = list.indexOf(item);
        if (from < 0 || to < 0 || from === to) return;
        const steps = Math.abs(to - from);
        const sel = to > from ? "[data-" + drag.down + "]" : "[data-" + drag.up + "]";
        for (let i = 0; i < steps; i++) {
          const btn = drag.item.querySelector(sel);
          if (btn) btn.click();
        }
      });
    });
  });
}

function cmsEnsureDestroyModal() {
  if (document.getElementById("cmsDestroyModal")) return;
  const wrap = document.createElement("div");
  wrap.id = "cmsDestroyModal";
  wrap.className = "cms-modal-backdrop";
  wrap.innerHTML = `
    <div class="cms-modal" role="dialog" aria-modal="true">
      <h3 id="cmsDestroyTitle">Confirm</h3>
      <p class="cms-modal-sub" id="cmsDestroySub"></p>
      <div class="cms-form" id="cmsDestroyReasonWrap">
        <label>Reason (required)</label>
        <textarea id="cmsDestroyReason" rows="3" placeholder="Shown to affected users…"></textarea>
      </div>
      <div class="cms-modal-actions">
        <button type="button" class="cms-btn cms-btn-danger" id="cmsDestroyOk">Confirm</button>
        <button type="button" class="cms-btn cms-btn-secondary" id="cmsDestroyCancel">Cancel</button>
      </div>
    </div>`;
  document.body.appendChild(wrap);
  document.getElementById("cmsDestroyCancel").addEventListener("click", () => wrap.classList.remove("open"));
  if (!window._cmsDestroyClick) {
    window._cmsDestroyClick = true;
    document.addEventListener(
      "click",
      (e) => {
        const btn = e.target.closest && e.target.closest(".cms-btn-danger");
        if (!btn || btn.closest(".cms-modal")) return;
        if (btn.dataset.cmsNoConfirm === "1" || btn._cmsArmed) return;
        if (btn.id === "confirmDisable") return;
        e.preventDefault();
        e.stopImmediatePropagation();
        const label = (btn.textContent || "Delete").trim();
        const needsReason = /disable/i.test(label);
        cmsConfirmDestroy({
          title: label,
          sub: "This cannot be undone in the demo store.",
          reasonRequired: needsReason,
          confirmLabel: label,
        }).then((ok) => {
          if (!ok) return;
          btn._cmsArmed = true;
          btn.click();
          btn._cmsArmed = false;
        });
      },
      true
    );
  }
}

function cmsConfirmDestroy(opts) {
  opts = opts || {};
  return new Promise((resolve) => {
    const wrap = document.getElementById("cmsDestroyModal");
    document.getElementById("cmsDestroyTitle").textContent = opts.title || "Confirm";
    document.getElementById("cmsDestroySub").textContent = opts.sub || "";
    const reasonWrap = document.getElementById("cmsDestroyReasonWrap");
    const reason = document.getElementById("cmsDestroyReason");
    reason.value = "";
    reasonWrap.style.display = opts.reasonRequired ? "" : "none";
    document.getElementById("cmsDestroyOk").textContent = opts.confirmLabel || "Confirm";
    wrap.classList.add("open");
    const ok = document.getElementById("cmsDestroyOk");
    const cancel = document.getElementById("cmsDestroyCancel");
    const done = (val) => {
      wrap.classList.remove("open");
      ok.removeEventListener("click", onOk);
      cancel.removeEventListener("click", onCancel);
      resolve(val);
    };
    const onOk = () => {
      if (opts.reasonRequired && !reason.value.trim()) {
        cmsToast("Please enter a reason");
        return;
      }
      done(opts.reasonRequired ? { reason: reason.value.trim() } : true);
    };
    const onCancel = () => done(false);
    ok.addEventListener("click", onOk);
    cancel.addEventListener("click", onCancel);
  });
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
