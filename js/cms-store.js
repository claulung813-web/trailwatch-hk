/* TrailWatch CMS — localStorage-backed content store */
window.TW = window.TW || {};
window.CMS = window.CMS || {};

CMS.AUTH_KEY = "tw_cms_auth";
CMS.STORE_KEY = "tw_cms_store";
CMS.DEMO_USER = "staff";
CMS.DEMO_PASS = "trailwatch";

CMS.INCIDENT_STATUSES = [
  { id: "received", label: "Received", labelZh: "已收到" },
  { id: "under_review", label: "Under review", labelZh: "審核中" },
  { id: "reported_govt", label: "Reported to govt bodies", labelZh: "已向政府部門呈報" },
  { id: "handled", label: "Handled / resolved", labelZh: "已處理" },
  { id: "published", label: "Published (public)", labelZh: "已公開發布" },
  { id: "rejected", label: "Rejected (not valid)", labelZh: "駁回（無效）" },
];

CMS.MEMBER_STATUSES = [
  { id: "pending", label: "Pending review", labelZh: "待審核" },
  { id: "approved", label: "Approved", labelZh: "已批准" },
  { id: "suspended", label: "Suspended", labelZh: "已停用" },
  { id: "rejected", label: "Rejected", labelZh: "已拒絕" },
];

CMS.DONATION_STATUSES = [
  { id: "received", label: "Received (demo)", labelZh: "已收到（示範）" },
  { id: "confirmed", label: "Confirmed", labelZh: "已確認" },
  { id: "thanked", label: "Thank-you sent", labelZh: "已發感謝" },
  { id: "refunded", label: "Refunded", labelZh: "已退款" },
];

CMS.FEEDBACK_STATUSES = [
  { id: "new", label: "New", labelZh: "新訊息" },
  { id: "read", label: "Read", labelZh: "已讀" },
  { id: "replied", label: "Replied", labelZh: "已回覆" },
  { id: "closed", label: "Closed", labelZh: "已關閉" },
];

CMS.LOGIN_METHODS = [
  { id: "email", label: "Email / password" },
  { id: "facebook", label: "Facebook" },
  { id: "apple", label: "Apple" },
  { id: "google", label: "Google" },
];

CMS.defaultStore = function () {
  return {
    recommended: [],
    incidents: [],
    challenges: null,
    members: [],
    users: [],
    donations: [],
    feedback: [],
    content: {
      aboutEn: "TrailWatch helps Hong Kong hikers explore country parks, plan trails, track hikes in the app, report incidents, and take part in environmental acts.",
      aboutZh: "TrailWatch 協助香港行山友探索郊野公園、規劃路線、在 App 追蹤行程、舉報事故，並參與環保行動。",
      contactEmail: "hello@trailwatch.hk",
      contactPhone: "+852 1234 5678",
      contactAddress: "Hong Kong · Country parks community",
      contactAddressZh: "香港 · 郊野公園社群",
      translations: {
        hero_tagline_en: "Empower hikers for easy nature access and stewardship",
        hero_tagline_zh: "賦能行山友，輕鬆走進自然並守護郊野",
        footer_extra_en: "Protect Hong Kong's countryside together.",
        footer_extra_zh: "一起守護香港郊野。",
      },
    },
    updatedAt: null,
  };
};

CMS.seedMembers = function () {
  return [
    {
      id: "mem_demo_1",
      name: "Alex Chan",
      email: "alex@example.com",
      phone: "+852 9123 4567",
      newsletter: true,
      status: "approved",
      note: "",
      createdAt: "2026-06-01T10:00:00.000Z",
    },
    {
      id: "mem_demo_2",
      name: "Mei Wong",
      email: "mei.wong@example.com",
      phone: "",
      newsletter: false,
      status: "pending",
      note: "",
      createdAt: "2026-07-10T08:30:00.000Z",
    },
  ];
};

/** App user accounts (distinct from membership registration queue) */
CMS.seedUsers = function () {
  return [
    {
      id: "usr_1001",
      name: "Alex Chan",
      email: "alex@example.com",
      facebookId: "fb_88291001",
      loginMethod: "facebook",
      premium: true,
      premiumStart: "2026-01-01",
      premiumEnd: "2026-12-31",
      hasGps: true,
      trailFeedEditor: false,
      note: "",
      createdAt: "2025-11-02T10:00:00.000Z",
    },
    {
      id: "usr_1002",
      name: "Mei Wong",
      email: "mei.wong@example.com",
      facebookId: "",
      loginMethod: "email",
      premium: false,
      premiumStart: "",
      premiumEnd: "",
      hasGps: true,
      trailFeedEditor: false,
      note: "",
      createdAt: "2026-02-14T08:30:00.000Z",
    },
    {
      id: "usr_1003",
      name: "Jamie Lau",
      email: "jamie@example.com",
      facebookId: "fb_44100233",
      loginMethod: "facebook",
      premium: true,
      premiumStart: "2026-06-01",
      premiumEnd: "2026-08-31",
      hasGps: true,
      trailFeedEditor: true,
      note: "Trail feed editor",
      createdAt: "2025-08-20T12:00:00.000Z",
    },
    {
      id: "usr_1004",
      name: "Chris Ng",
      email: "chris@example.com",
      facebookId: "",
      loginMethod: "apple",
      premium: true,
      premiumStart: "2025-09-01",
      premiumEnd: "2026-02-28",
      hasGps: false,
      trailFeedEditor: false,
      note: "Premium expired Feb 2026",
      createdAt: "2025-09-01T09:00:00.000Z",
    },
    {
      id: "usr_1005",
      name: "Pat Ho",
      email: "pat.ho@example.com",
      facebookId: "fb_99001122",
      loginMethod: "google",
      premium: false,
      premiumStart: "",
      premiumEnd: "",
      hasGps: true,
      trailFeedEditor: false,
      note: "",
      createdAt: "2026-05-18T16:45:00.000Z",
    },
    {
      id: "usr_1006",
      name: "Sam Cheung",
      email: "sam.cheung@example.com",
      facebookId: "",
      loginMethod: "email",
      premium: true,
      premiumStart: "2026-07-01",
      premiumEnd: "2027-06-30",
      hasGps: true,
      trailFeedEditor: false,
      note: "Annual plan",
      createdAt: "2026-07-01T07:20:00.000Z",
    },
    {
      id: "usr_1007",
      name: "Taylor Ip",
      email: "taylor.ip@example.com",
      facebookId: "fb_55667788",
      loginMethod: "facebook",
      premium: false,
      premiumStart: "2025-01-01",
      premiumEnd: "2025-06-30",
      hasGps: true,
      trailFeedEditor: false,
      note: "Duplicate risk with usr_1008",
      createdAt: "2024-12-10T11:00:00.000Z",
    },
    {
      id: "usr_1008",
      name: "Taylor Ip (FB)",
      email: "taylor.fb@example.com",
      facebookId: "fb_55667788",
      loginMethod: "facebook",
      premium: false,
      premiumStart: "",
      premiumEnd: "",
      hasGps: false,
      trailFeedEditor: false,
      note: "Likely duplicate of usr_1007",
      createdAt: "2025-03-22T14:10:00.000Z",
    },
  ];
};

CMS.isUserPremiumNow = function (u, onDate) {
  if (!u || !u.premium) return false;
  const d = onDate ? new Date(onDate) : new Date();
  const day = d.toISOString().slice(0, 10);
  const start = u.premiumStart || "";
  const end = u.premiumEnd || "";
  if (start && day < start) return false;
  if (end && day > end) return false;
  return true;
};

CMS.userPremiumOverlaps = function (u, from, to) {
  if (!u) return false;
  const start = u.premiumStart || "";
  const end = u.premiumEnd || "9999-12-31";
  if (!start && !u.premium) return false;
  if (!start && u.premium) return true;
  const rangeStart = from || "0000-01-01";
  const rangeEnd = to || "9999-12-31";
  return start <= rangeEnd && end >= rangeStart;
};

CMS.loginMethodLabel = function (id) {
  const m = (CMS.LOGIN_METHODS || []).find((x) => x.id === id);
  return m ? m.label : id || "—";
};

CMS.exportUsersGps = function (userIds, format) {
  const store = CMS.getStore();
  const ids = userIds || [];
  const users = (store.users || []).filter((u) => ids.indexOf(u.id) >= 0);
  const tracks = users.map((u, i) => {
    const baseLat = 22.25 + (i % 5) * 0.02;
    const baseLng = 114.1 + (i % 4) * 0.03;
    const points = [];
    for (let p = 0; p < 8; p++) {
      points.push({
        lat: +(baseLat + p * 0.004).toFixed(5),
        lng: +(baseLng + p * 0.003).toFixed(5),
        t: new Date(Date.now() - (8 - p) * 600000).toISOString(),
      });
    }
    return {
      userId: u.id,
      name: u.name,
      email: u.email,
      hasGps: !!u.hasGps,
      summary: {
        trails: 2 + (i % 3),
        distanceKm: +(4.2 + i * 1.7).toFixed(1),
        durationMin: 45 + i * 12,
      },
      sampleTrack: u.hasGps ? points : [],
    };
  });
  const payload = {
    exportedAt: new Date().toISOString(),
    source: "TrailWatch CMS demo",
    userCount: tracks.length,
    tracks: tracks,
  };
  if (format === "csv") {
    const rows = ["userId,name,email,hasGps,trails,distanceKm,durationMin"];
    tracks.forEach((t) => {
      rows.push(
        [
          t.userId,
          JSON.stringify(t.name || ""),
          t.email || "",
          t.hasGps ? "yes" : "no",
          t.summary.trails,
          t.summary.distanceKm,
          t.summary.durationMin,
        ].join(",")
      );
    });
    return { filename: "gps-export-" + Date.now() + ".csv", mime: "text/csv", body: rows.join("\n") };
  }
  return {
    filename: "gps-export-" + Date.now() + ".json",
    mime: "application/json",
    body: JSON.stringify(payload, null, 2),
  };
};

CMS.mergeUsers = function (sourceId, targetId) {
  const store = CMS.getStore();
  const users = store.users || [];
  const srcIdx = users.findIndex((u) => u.id === sourceId);
  const tgtIdx = users.findIndex((u) => u.id === targetId);
  if (srcIdx < 0 || tgtIdx < 0 || sourceId === targetId) return null;
  const src = users[srcIdx];
  const tgt = users[tgtIdx];
  const merged = Object.assign({}, tgt, {
    email: tgt.email || src.email,
    facebookId: tgt.facebookId || src.facebookId,
    loginMethod: tgt.loginMethod || src.loginMethod,
    premium: !!(tgt.premium || src.premium),
    premiumStart: tgt.premiumStart || src.premiumStart,
    premiumEnd: tgt.premiumEnd || src.premiumEnd,
    hasGps: !!(tgt.hasGps || src.hasGps),
    trailFeedEditor: !!(tgt.trailFeedEditor || src.trailFeedEditor),
    note: [tgt.note, src.note ? "Merged from " + src.id + ": " + src.note : "Merged from " + src.id]
      .filter(Boolean)
      .join(" · "),
  });
  if (src.premium && src.premiumEnd && (!tgt.premiumEnd || src.premiumEnd > tgt.premiumEnd)) {
    merged.premiumEnd = src.premiumEnd;
  }
  if (src.premium && src.premiumStart && (!tgt.premiumStart || src.premiumStart < tgt.premiumStart)) {
    merged.premiumStart = src.premiumStart;
  }
  store.users[tgtIdx] = merged;
  store.users.splice(srcIdx, 1);
  CMS.setStore(store);
  return merged;
};

CMS.seedDonations = function () {
  return [
    {
      id: "don_demo_1",
      name: "Anonymous",
      email: "supporter@example.com",
      amount: 200,
      frequency: "once",
      status: "thanked",
      note: "Receipt emailed",
      createdAt: "2026-07-05T14:00:00.000Z",
      source: "web",
    },
    {
      id: "don_demo_2",
      name: "Jamie Lau",
      email: "jamie@example.com",
      amount: 50,
      frequency: "monthly",
      status: "received",
      note: "",
      createdAt: "2026-07-12T09:15:00.000Z",
      source: "web",
    },
  ];
};

CMS.seedFeedback = function () {
  return [
    {
      id: "fb_demo_1",
      name: "Chris",
      email: "chris@example.com",
      subject: "Trail map suggestion",
      message: "Could you add more accessible trail filters near Tuen Mun?",
      status: "new",
      staffReply: "",
      createdAt: "2026-07-11T16:20:00.000Z",
    },
  ];
};

CMS.getStore = function () {
  try {
    const raw = localStorage.getItem(CMS.STORE_KEY);
    if (!raw) {
      const s = CMS.defaultStore();
      // seed recommended from published monthly trails
      if (window.TW && TW.trails) {
        s.recommended = TW.trails
          .filter((t) => t.monthly === "2026-07")
          .slice(0, 3)
          .map((t, i) => CMS.trailToRecommended(t, i));
      }
      // seed incidents from TW.reports
      if (window.TW && TW.reports) {
        s.incidents = TW.reports.map((r, i) => CMS.reportToIncident(r, i));
      }
      s.members = CMS.seedMembers();
      s.users = CMS.seedUsers();
      s.donations = CMS.seedDonations();
      s.feedback = CMS.seedFeedback();
      CMS.setStore(s);
      return s;
    }
    const parsed = JSON.parse(raw);
    const base = CMS.defaultStore();
    const store = Object.assign({}, base, parsed);
    store.content = Object.assign({}, base.content, parsed.content || {});
    store.content.translations = Object.assign(
      {},
      base.content.translations,
      (parsed.content && parsed.content.translations) || {}
    );
    // migrate older stores that pre-date these collections
    let migrated = false;
    const tr = store.content.translations;
    if (tr.hero_tagline_en === "Plan trails on web. Track them on the app.") {
      tr.hero_tagline_en = base.content.translations.hero_tagline_en;
      migrated = true;
    }
    if (tr.hero_tagline_zh === "網頁規劃路線，App 追蹤行程。") {
      tr.hero_tagline_zh = base.content.translations.hero_tagline_zh;
      migrated = true;
    }
    if (!("members" in parsed)) {
      store.members = CMS.seedMembers();
      migrated = true;
    } else store.members = parsed.members || [];
    if (!("users" in parsed) || !(parsed.users && parsed.users.length)) {
      store.users = CMS.seedUsers();
      migrated = true;
    } else store.users = parsed.users || [];
    if (!("donations" in parsed)) {
      store.donations = CMS.seedDonations();
      migrated = true;
    } else store.donations = parsed.donations || [];
    if (!("feedback" in parsed)) {
      store.feedback = CMS.seedFeedback();
      migrated = true;
    } else store.feedback = parsed.feedback || [];
    if (migrated) CMS.setStore(store);
    return store;
  } catch (e) {
    return CMS.defaultStore();
  }
};

CMS.MY_REPORTS_KEY = "tw_my_reports";

CMS.getMyReportIds = function () {
  try {
    return JSON.parse(localStorage.getItem(CMS.MY_REPORTS_KEY) || "[]");
  } catch (e) {
    return [];
  }
};

CMS.rememberMyReport = function (id) {
  const ids = CMS.getMyReportIds();
  if (ids.indexOf(id) < 0) {
    ids.unshift(id);
    localStorage.setItem(CMS.MY_REPORTS_KEY, JSON.stringify(ids.slice(0, 50)));
  }
};

/** Public users submit an incident for staff review */
CMS.submitIncident = function (data) {
  const store = CMS.getStore();
  const id =
    data.id ||
    "inc_" + Date.now().toString(36) + Math.random().toString(36).slice(2, 6);
  const entry = {
    id: id,
    title: data.title || "Untitled report",
    titleZh: data.titleZh || data.title || "",
    desc: data.desc || "",
    descZh: data.descZh || "",
    category: data.category || "waste",
    date: data.date || new Date().toLocaleDateString("en-GB"),
    coords: data.coords || "",
    lat: data.lat || 22.32,
    lng: data.lng || 114.17,
    image:
      data.image ||
      "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=600&q=80",
    status: "received",
    published: false,
    staffNote: "",
    staffNoteZh: "",
    updatedAt: new Date().toISOString(),
  };
  store.incidents.unshift(entry);
  CMS.setStore(store);
  CMS.rememberMyReport(id);
  return entry;
};

CMS.submitMember = function (data) {
  const store = CMS.getStore();
  const id =
    data.id ||
    "mem_" + Date.now().toString(36) + Math.random().toString(36).slice(2, 6);
  const entry = {
    id: id,
    name: (data.name || "").trim(),
    email: (data.email || "").trim().toLowerCase(),
    phone: (data.phone || "").trim(),
    newsletter: !!data.newsletter,
    status: "pending",
    note: "",
    createdAt: new Date().toISOString(),
  };
  store.members = store.members || [];
  store.members.unshift(entry);
  CMS.setStore(store);
  return entry;
};

CMS.submitDonation = function (data) {
  const store = CMS.getStore();
  const id =
    data.id ||
    "don_" + Date.now().toString(36) + Math.random().toString(36).slice(2, 6);
  const entry = {
    id: id,
    name: (data.name || "Anonymous").trim() || "Anonymous",
    email: (data.email || "").trim(),
    amount: Math.max(1, +data.amount || 0),
    frequency: data.frequency === "monthly" ? "monthly" : "once",
    status: "received",
    note: "",
    source: data.source || "web",
    createdAt: new Date().toISOString(),
  };
  store.donations = store.donations || [];
  store.donations.unshift(entry);
  CMS.setStore(store);
  return entry;
};

CMS.submitFeedback = function (data) {
  const store = CMS.getStore();
  const id =
    data.id ||
    "fb_" + Date.now().toString(36) + Math.random().toString(36).slice(2, 6);
  const entry = {
    id: id,
    name: (data.name || "").trim(),
    email: (data.email || "").trim(),
    subject: (data.subject || "").trim(),
    message: (data.message || "").trim(),
    status: "new",
    staffReply: "",
    createdAt: new Date().toISOString(),
  };
  store.feedback = store.feedback || [];
  store.feedback.unshift(entry);
  CMS.setStore(store);
  return entry;
};

CMS.setStore = function (store) {
  store.updatedAt = new Date().toISOString();
  localStorage.setItem(CMS.STORE_KEY, JSON.stringify(store));
};

CMS.trailToRecommended = function (t, i) {
  const centers = {
    lantau: [22.266, 113.95],
    "hk-island": [22.26, 114.2],
    "sai-kung": [22.38, 114.3],
    kowloon: [22.33, 114.18],
    "sha-tin": [22.38, 114.2],
    "tai-po": [22.45, 114.2],
    "tsuen-wan": [22.37, 114.12],
    "tuen-mun": [22.39, 113.97],
    north: [22.49, 114.14],
  };
  const c = centers[t.district] || [22.32, 114.17];
  return {
    id: "rec_" + t.id,
    trailId: t.id,
    title: t.title,
    titleZh: t.titleZh,
    desc: t.desc,
    descZh: t.descZh,
    categories: t.tags || [],
    district: t.district,
    difficulty: t.difficulty,
    distance: t.distance,
    duration: t.duration,
    elevation: t.elevation,
    image: t.image,
    published: true,
    featured: i === 0,
    month: t.monthly || "",
    path: [
      [c[0], c[1]],
      [c[0] + 0.01, c[1] + 0.012],
      [c[0] + 0.018, c[1] + 0.02],
    ],
    createdAt: new Date().toISOString(),
  };
};

CMS.reportToIncident = function (r, i) {
  return {
    id: "inc_" + i + "_" + (r.title || "x").replace(/\s+/g, "_").slice(0, 20),
    title: r.title,
    titleZh: r.titleZh,
    desc: r.desc,
    descZh: r.descZh,
    category: r.category,
    date: r.date,
    coords: r.coords,
    lat: r.lat,
    lng: r.lng,
    image: r.image,
    status: r.status === "closed" ? "handled" : r.status === "updated" ? "under_review" : "received",
    published: r.status === "closed" || r.status === "updated",
    staffNote:
      r.status === "closed"
        ? "Reported to AFCD / relevant departments. Case closed after site follow-up."
        : r.status === "updated"
          ? "Under review by TrailWatch staff. Update forthcoming."
          : "",
    staffNoteZh:
      r.status === "closed"
        ? "已向漁護署／相關部門呈報，實地跟進後結案。"
        : r.status === "updated"
          ? "TrailWatch 職員審核中，稍後更新。"
          : "",
    updatedAt: new Date().toISOString(),
  };
};

CMS.isLoggedIn = function () {
  try {
    const a = JSON.parse(localStorage.getItem(CMS.AUTH_KEY) || "null");
    return !!(a && a.user);
  } catch (e) {
    return false;
  }
};

CMS.login = function (user, pass) {
  if (user === CMS.DEMO_USER && pass === CMS.DEMO_PASS) {
    localStorage.setItem(CMS.AUTH_KEY, JSON.stringify({ user: user, at: Date.now() }));
    return true;
  }
  return false;
};

CMS.logout = function () {
  localStorage.removeItem(CMS.AUTH_KEY);
};

CMS.requireAuth = function () {
  if (!CMS.isLoggedIn()) {
    location.href = "index.html";
    return false;
  }
  return true;
};

CMS.statusLabel = function (id, list) {
  const lists = {
    incident: CMS.INCIDENT_STATUSES,
    member: CMS.MEMBER_STATUSES,
    donation: CMS.DONATION_STATUSES,
    feedback: CMS.FEEDBACK_STATUSES,
  };
  const arr = lists[list] || CMS.INCIDENT_STATUSES;
  const s = arr.find((x) => x.id === id);
  if (!s) return id;
  return window.TW && TW.getLang && TW.getLang() === "zh" ? s.labelZh : s.label;
};

/** Public API for frontend */
TW.getRecommendedTrails = function (filters) {
  filters = filters || {};
  const store = CMS.getStore();
  let list = (store.recommended || []).filter((r) => r.published);
  if (filters.category && filters.category !== "all") {
    list = list.filter((r) => (r.categories || []).indexOf(filters.category) >= 0);
  }
  if (filters.featured) list = list.filter((r) => r.featured);
  return list;
};

TW.getPublicIncidents = function () {
  const store = CMS.getStore();
  return (store.incidents || []).filter((i) => i.published && i.status !== "rejected");
};

/** Published incidents + this browser's pending submissions */
TW.getReportsForUser = function () {
  const store = CMS.getStore();
  const mine = CMS.getMyReportIds();
  const byId = {};
  (store.incidents || []).forEach((i) => {
    if (i.published && i.status !== "rejected") byId[i.id] = i;
    else if (mine.indexOf(i.id) >= 0) byId[i.id] = i;
  });
  return Object.keys(byId).map((k) => byId[k]);
};

TW.getSiteContent = function () {
  return CMS.getStore().content;
};

TW.getChallenges = function () {
  const store = CMS.getStore();
  if (store.challenges && store.challenges.length) return store.challenges;
  return (TW.treeGame && TW.treeGame.challenges) || [];
};

TW.getRecommendedTrail = function (id) {
  return (CMS.getStore().recommended || []).find((r) => r.id === id && r.published) || null;
};

/** Apply CMS translation snippets onto hero / footer when present */
TW.applyCmsCopy = function () {
  const c = TW.getSiteContent();
  const tr = (c && c.translations) || {};
  const zh = TW.getLang && TW.getLang() === "zh";
  const heroOverride = zh ? tr.hero_tagline_zh : tr.hero_tagline_en;
  if (heroOverride) {
    const hero = document.querySelector('[data-i18n="hero_title"]');
    if (hero) hero.textContent = heroOverride;
  }
  const footExtra = zh ? tr.footer_extra_zh : tr.footer_extra_en;
  if (footExtra) {
    const el = document.getElementById("cmsFooterExtra");
    if (el) {
      el.textContent = footExtra;
      el.style.display = "block";
    }
  }
};
