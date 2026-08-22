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

CMS.ADMIN_TIERS = [
  {
    id: "super",
    label: "Super admin",
    desc: "Admin management (add / remove admin and viewer, change permissions) plus all other areas.",
  },
  {
    id: "general",
    label: "General Admin",
    desc: "View and edit all fields except admin management.",
  },
  {
    id: "content",
    label: "Content Admin",
    desc: "View and edit all fields except admin management and user list.",
  },
];

CMS.NOTIF_STATUSES = [
  { id: "draft", label: "Draft" },
  { id: "scheduled", label: "Scheduled" },
  { id: "sent", label: "Sent" },
];

CMS.seedAdmins = function () {
  return [
    {
      id: "adm_super",
      name: "TrailWatch Staff",
      email: "staff@trailwatch.hk",
      username: "staff",
      password: "trailwatch",
      tier: "super",
      active: true,
      createdAt: "2026-01-01T00:00:00.000Z",
    },
    {
      id: "adm_general",
      name: "General Admin",
      email: "admin@trailwatch.hk",
      username: "admin",
      password: "trailwatch",
      tier: "general",
      active: true,
      createdAt: "2026-03-01T00:00:00.000Z",
    },
    {
      id: "adm_content",
      name: "Content Editor",
      email: "content@trailwatch.hk",
      username: "content",
      password: "trailwatch",
      tier: "content",
      active: true,
      createdAt: "2026-04-01T00:00:00.000Z",
    },
  ];
};

CMS.seedAppFunctions = function () {
  return [
    { id: "af_track", order: 0, title: "Plan & Track", titleZh: "規劃與追蹤", body: "GPS tracking with offline maps.", bodyZh: "GPS 追蹤與離線地圖。", image: "assets/brand/device.webp", premium: false },
    { id: "af_offline", order: 1, title: "Offline maps", titleZh: "離線地圖", body: "Download maps before you go.", bodyZh: "出發前下載地圖。", image: "", premium: true },
    { id: "af_groups", order: 2, title: "Group hikes", titleZh: "聯誼行山", body: "Join or organize community hikes.", bodyZh: "參加或舉辦聯誼。", image: "", premium: false },
    { id: "af_report", order: 3, title: "Incident report", titleZh: "事故舉報", body: "Report trail hazards to staff.", bodyZh: "向職員舉報路線危害。", image: "", premium: false },
  ];
};

CMS.seedEditorsChoiceCategories = function () {
  return [
    { id: "ec_family", name: "Family friendly", nameZh: "適合家庭", photo: "", order: 0, routeIds: [] },
    { id: "ec_sunrise", name: "Sunrise & sunset", nameZh: "日出日落", photo: "", order: 1, routeIds: [] },
    { id: "ec_beginner", name: "Beginner picks", nameZh: "新手精選", photo: "", order: 2, routeIds: [] },
  ];
};

CMS.seedIncidentCategories = function () {
  return [
    { id: "waste", name: "Waste / litter", nameZh: "垃圾", icon: "🗑", order: 0 },
    { id: "tree", name: "Fallen tree", nameZh: "塌樹", icon: "🌳", order: 1 },
    { id: "vandalism", name: "Vandalism", nameZh: "破壞", icon: "⚠", order: 2 },
    { id: "obstruction", name: "Obstruction / flood", nameZh: "阻塞／水浸", icon: "🚧", order: 3 },
  ];
};

CMS.seedFeedPosts = function () {
  return [
    {
      id: "feed_cms_1",
      title: "Welcome to the TrailWatch feed",
      titleZh: "歡迎來到 TrailWatch 動態",
      blurb: "Staff picks and stewardship tips.",
      blurbZh: "職員精選與守護貼士。",
      graphic: "",
      body: "Follow this feed for community highlights, trail tips, and stewardship news.",
      bodyZh: "關注動態以獲取社群精華、路線貼士與守護消息。",
      pinned: true,
      removed: false,
      createdAt: "2026-07-01T09:00:00.000Z",
      source: "cms",
    },
  ];
};

CMS.seedArticleTags = function () {
  return [
    { id: "safety", name: "Safety", nameZh: "安全" },
    { id: "stewardship", name: "Stewardship", nameZh: "守護" },
    { id: "howto", name: "How-to", nameZh: "教學" },
    { id: "news", name: "News", nameZh: "消息" },
  ];
};

CMS.seedTransactions = function () {
  return [
    {
      id: "txn_1",
      type: "premium",
      userId: "usr_alex_wong",
      email: "alex.wong@email.com",
      name: "Alex Wong",
      amount: 98,
      currency: "HKD",
      method: "Credit card",
      status: "paid",
      periodStart: "2026-01-01",
      periodEnd: "2027-12-31",
      createdAt: "2026-01-01T08:00:00.000Z",
      details: { plan: "Premium annual", receipt: "RCT-1001" },
    },
    {
      id: "txn_2",
      type: "donation",
      userId: "usr_1001",
      email: "alex@example.com",
      name: "Alex Chan",
      amount: 200,
      currency: "HKD",
      method: "FPS",
      status: "confirmed",
      periodStart: "",
      periodEnd: "",
      createdAt: "2026-06-15T12:00:00.000Z",
      details: { campaign: "Tree planting", note: "Demo donation" },
    },
  ];
};

CMS.seedNotifications = function () {
  return [
    {
      id: "ntf_1",
      kind: "notification",
      title: "Premium tip: offline maps",
      titleZh: "Premium 貼士：離線地圖",
      body: "Download maps before your next hike.",
      bodyZh: "下次行山前先下載地圖。",
      channels: ["web", "app"],
      audience: "premium",
      status: "sent",
      scheduledAt: "2026-07-10T10:00:00.000Z",
      sentAt: "2026-07-10T10:00:00.000Z",
      graphic: "",
    },
  ];
};

CMS.seedPopups = function () {
  return [
    {
      id: "pop_1",
      kind: "popup",
      title: "Support TrailWatch",
      titleZh: "支持 TrailWatch",
      body: "Donate or upgrade to Premium.",
      bodyZh: "捐款或升級 Premium。",
      channels: ["web"],
      audience: "all",
      status: "draft",
      scheduledAt: "",
      sentAt: "",
      graphic: "",
    },
  ];
};

CMS.seedStaticPages = function () {
  return {
    aboutEn: "",
    aboutZh: "",
    termsEn: "Terms of use (demo — edit in CMS).",
    termsZh: "使用條款（示範 — 可於 CMS 編輯）。",
    privacyEn: "Privacy policy (demo — edit in CMS).",
    privacyZh: "私隱政策（示範 — 可於 CMS 編輯）。",
    faqEn: "",
    faqZh: "",
    mapCreditsEn: "Map data © OpenStreetMap contributors. Trails curated by TrailWatch.",
    mapCreditsZh: "地圖資料 © OpenStreetMap 貢獻者。路線由 TrailWatch 整理。",
  };
};

CMS.adminTierLabel = function (id) {
  const t = (CMS.ADMIN_TIERS || []).find((x) => x.id === id);
  return t ? t.label : id || "—";
};

CMS.getSessionAdmin = function () {
  try {
    const a = JSON.parse(localStorage.getItem(CMS.AUTH_KEY) || "null");
    if (!a || !a.user) return null;
    const store = JSON.parse(localStorage.getItem(CMS.STORE_KEY) || "null");
    const admins = (store && store.admins) || CMS.seedAdmins();
    const found =
      admins.find((x) => x.username === a.user || x.email === a.user || x.id === a.adminId) ||
      admins.find((x) => x.tier === "super");
    return found
      ? Object.assign({}, found, { sessionUser: a.user })
      : { id: "adm_legacy", name: a.user, username: a.user, tier: "super", active: true };
  } catch (e) {
    return null;
  }
};

CMS.canAccess = function (section) {
  const admin = CMS.getSessionAdmin();
  const tier = (admin && admin.tier) || "super";
  if (section === "admins") return tier === "super";
  if (section === "users") return tier === "super" || tier === "general";
  return true;
};

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
      figures: {
        routes: 18420,
        distanceKm: 3256780,
        incidents: 2146,
      },
    },
    featuredGalleryIds: [],
    banners: CMS.seedBanners(),
    activityTags: CMS.defaultActivityTags(),
    badgeCatalog: null,
    badgeAssignments: [],
    admins: CMS.seedAdmins(),
    featuredRouteIds: [],
    featuredArticleIds: [],
    appFunctions: CMS.seedAppFunctions(),
    editorsChoiceCategories: CMS.seedEditorsChoiceCategories(),
    incidentCategories: CMS.seedIncidentCategories(),
    feedPosts: CMS.seedFeedPosts(),
    groupHikeModeration: [],
    articles: null,
    articleTags: CMS.seedArticleTags(),
    transactions: CMS.seedTransactions(),
    notifications: CMS.seedNotifications(),
    popups: CMS.seedPopups(),
    staticPages: CMS.seedStaticPages(),
    updatedAt: null,
  };
};

CMS.defaultActivityTags = function () {
  return (window.TW && TW.DEFAULT_ACTIVITY_TAGS
    ? TW.DEFAULT_ACTIVITY_TAGS
    : [
        { id: "sunrise", label: "Sunrise", labelZh: "日出" },
        { id: "sunset", label: "Sunset", labelZh: "日落" },
        { id: "woodland", label: "Woodland shade", labelZh: "林蔭" },
        { id: "heritage", label: "Heritage", labelZh: "古蹟" },
        { id: "ecology", label: "Ecology", labelZh: "生態" },
        { id: "mountain", label: "Mountain views", labelZh: "山景" },
        { id: "sea", label: "Sea views", labelZh: "海景" },
        { id: "stream", label: "Streams", labelZh: "河溪" },
        { id: "reservoir", label: "Reservoir", labelZh: "水塘" },
      ]
  ).map((t) => Object.assign({}, t));
};

/** Deep-clone default badge catalog from TW.badgeCatalog */
CMS.defaultBadgeCatalog = function () {
  if (window.TW && Array.isArray(TW.badgeCatalog) && TW.badgeCatalog.length) {
    return JSON.parse(JSON.stringify(TW.badgeCatalog));
  }
  return [];
};

CMS.getBadgeCatalog = function () {
  const store = CMS.getStore();
  if (Array.isArray(store.badgeCatalog) && store.badgeCatalog.length) {
    return store.badgeCatalog;
  }
  return CMS.defaultBadgeCatalog();
};

CMS.setBadgeCatalog = function (catalog) {
  const store = CMS.getStore();
  store.badgeCatalog = Array.isArray(catalog) ? catalog : [];
  CMS.setStore(store);
  CMS.bumpBadgeRevision();
  return store.badgeCatalog;
};

CMS.resetBadgeCatalog = function () {
  return CMS.setBadgeCatalog(CMS.defaultBadgeCatalog());
};

CMS.bumpBadgeRevision = function () {
  try {
    localStorage.setItem("tw_badge_rev", String(Date.now()));
  } catch (e) {}
};

CMS.getBadgeAssignments = function () {
  const store = CMS.getStore();
  return Array.isArray(store.badgeAssignments) ? store.badgeAssignments : [];
};

CMS.setBadgeAssignments = function (list) {
  const store = CMS.getStore();
  store.badgeAssignments = Array.isArray(list) ? list : [];
  CMS.setStore(store);
  CMS.bumpBadgeRevision();
  return store.badgeAssignments;
};

CMS.seedBadgeAssignments = function () {
  return [
    {
      id: "ba_demo_1",
      badgeId: "vol_become",
      userId: "usr_alex_wong",
      email: "alex.wong@email.com",
      name: "Alex Wong",
      note: "Seed volunteer badge",
      assignedAt: "2026-06-01T10:00:00.000Z",
    },
    {
      id: "ba_demo_2",
      badgeId: "donor",
      userId: "usr_alex_wong",
      email: "alex.wong@email.com",
      name: "Alex Wong",
      note: "Seed donor badge",
      assignedAt: "2026-06-15T10:00:00.000Z",
    },
    {
      id: "ba_demo_3",
      badgeId: "photo_contributor",
      userId: "usr_alex_wong",
      email: "alex.wong@email.com",
      name: "Alex Wong",
      note: "Seed photo badge",
      assignedAt: "2026-07-01T10:00:00.000Z",
    },
  ];
};

CMS.assignBadgeToUser = function (data) {
  data = data || {};
  const badgeId = String(data.badgeId || "").trim();
  const email = String(data.email || "").trim().toLowerCase();
  const userId = String(data.userId || "").trim();
  if (!badgeId || (!email && !userId)) return null;
  const list = CMS.getBadgeAssignments().slice();
  const exists = list.find(
    (a) =>
      a.badgeId === badgeId &&
      ((email && String(a.email || "").toLowerCase() === email) ||
        (userId && a.userId === userId))
  );
  if (exists) {
    exists.note = data.note != null ? String(data.note) : exists.note;
    exists.name = data.name || exists.name;
    exists.email = email || exists.email;
    exists.userId = userId || exists.userId;
    CMS.setBadgeAssignments(list);
    return exists;
  }
  const entry = {
    id: data.id || "ba_" + Date.now().toString(36) + Math.random().toString(36).slice(2, 6),
    badgeId: badgeId,
    userId: userId,
    email: email,
    name: (data.name || "").trim(),
    note: (data.note || "").trim(),
    assignedAt: new Date().toISOString(),
  };
  list.unshift(entry);
  CMS.setBadgeAssignments(list);
  return entry;
};

CMS.unassignBadge = function (assignmentId) {
  const list = CMS.getBadgeAssignments().filter((a) => a.id !== assignmentId);
  CMS.setBadgeAssignments(list);
  return list;
};

/** Badge IDs assigned to a member (by email and/or user id). */
CMS.getAssignedBadgeIdsForUser = function (email, userId) {
  const em = String(email || "").trim().toLowerCase();
  const uid = String(userId || "").trim();
  return CMS.getBadgeAssignments()
    .filter(
      (a) =>
        (em && String(a.email || "").toLowerCase() === em) ||
        (uid && a.userId === uid)
    )
    .map((a) => a.badgeId);
};

/** Flat badge options for CMS selects */
CMS.listCatalogBadges = function (catalog) {
  catalog = catalog || CMS.getBadgeCatalog();
  const out = [];
  (catalog || []).forEach((cat) => {
    (cat.series || []).forEach((series) => {
      (series.badges || []).forEach((b) => {
        out.push({
          id: b.id,
          name: b.name,
          nameZh: b.nameZh,
          emoji: b.emoji,
          category: cat.name,
          series: series.name,
          criteriaType: series.criteriaType,
        });
      });
    });
  });
  return out;
};

CMS.seedBanners = function () {
  return [
    {
      id: "bn_app",
      published: true,
      order: 0,
      showStores: true,
      showDevice: true,
      badge: "Hong Kong hiking app",
      badgeZh: "香港行山 App",
      seo: "Hong Kong hiking · GPS tracking · trail planning · incident report · offline maps · group hike",
      seoZh: "香港行山 · GPS 追蹤 · 路線規劃 · 事故舉報 · 離線地圖 · 聯誼行山",
      title: "Empower hikers for easy nature access and stewardship",
      titleZh: "賦能行山友，輕鬆走進自然並守護郊野",
      body: "GPS route tracking, trail planning, incident reports, offline maps, group hikes, and country-park stewardship. Plan on the web. Track on the TrailWatch app.",
      bodyZh: "GPS 路線追蹤、路線規劃、事故舉報、離線地圖、聯誼行山，守護郊野公園。網頁規劃，TrailWatch App 追蹤。",
      image: "assets/brand/homepage-hero.jpeg",
      deviceImage: "assets/brand/device.webp",
      ctaLabel: "Get the app",
      ctaLabelZh: "下載 App",
      ctaHref: "get-app.html",
      cta2Label: "Explore Trails",
      cta2LabelZh: "探索路線",
      cta2Href: "explore.html",
      appStoreUrl: "https://itunes.apple.com/hk/app/trailwatch/id791098937",
      playStoreUrl: "https://play.google.com/store/apps/details?id=com.computancy.countrypark",
    },
    {
      id: "bn_routes",
      published: true,
      order: 1,
      showStores: false,
      showDevice: false,
      badge: "Recommended routes",
      badgeZh: "推薦路線",
      seo: "Hong Kong country parks · trail exploration · Dragon's Back · Sai Kung · Lantau",
      seoZh: "香港郊野公園 · 路線探索 · 龍脊 · 西貢 · 大嶼山",
      title: "Discover staff-picked trails across Hong Kong",
      titleZh: "探索職員精選的香港路線",
      body: "Browse recommended routes by district, difficulty, and season — then plan your next hike on the web or in the app.",
      bodyZh: "按地區、難度與季節瀏覽推薦路線，然後在網頁或 App 規劃下一次行山。",
      image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1400&q=80",
      deviceImage: "",
      ctaLabel: "Recommended routes",
      ctaLabelZh: "推薦路線",
      ctaHref: "explore.html",
      cta2Label: "Plan a route",
      cta2LabelZh: "規劃路線",
      cta2Href: "plan.html",
      appStoreUrl: "",
      playStoreUrl: "",
    },
    {
      id: "bn_community",
      published: true,
      order: 2,
      showStores: false,
      showDevice: false,
      badge: "Care for Nature",
      badgeZh: "關懷自然",
      seo: "Incident report · photo gallery · group hike · hiking insights · TrailWatch Premium",
      seoZh: "事故舉報 · 相片相簿 · 聯誼行山 · 行山洞察 · TrailWatch Premium",
      title: "Report incidents, share photos, hike together",
      titleZh: "舉報事故、分享相片、一起行山",
      body: "Help keep country parks safe. Log incidents, join group hikes, and unlock insights with TrailWatch Premium.",
      bodyZh: "協助守護郊野公園安全。舉報事故、參加聯誼，並以 TrailWatch Premium 解鎖洞察。",
      image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1400&q=80",
      deviceImage: "",
      ctaLabel: "Report an incident",
      ctaLabelZh: "舉報事故",
      ctaHref: "reports.html",
      cta2Label: "Upgrade to Premium",
      cta2LabelZh: "升級 Premium",
      cta2Href: "get-app.html#premium",
      appStoreUrl: "",
      playStoreUrl: "",
    },
  ];
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
      canHostPublicGroups: false,
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
      canHostPublicGroups: true,
      note: "Trail feed editor · Phase II public group host",
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
    {
      id: "usr_clau",
      name: "clau",
      email: "clau@example.com",
      facebookId: "",
      loginMethod: "email",
      premium: true,
      premiumStart: "2026-01-01",
      premiumEnd: "2027-12-31",
      hasGps: true,
      trailFeedEditor: false,
      canHostPublicGroups: false,
      note: "Demo tester account — Premium for private group hikes",
      createdAt: "2026-08-01T00:00:00.000Z",
    },
    {
      id: "usr_alex_wong",
      name: "Alex Wong",
      email: "alex.wong@email.com",
      facebookId: "",
      loginMethod: "email",
      premium: true,
      premiumStart: "2026-01-01",
      premiumEnd: "2027-12-31",
      hasGps: true,
      trailFeedEditor: false,
      canHostPublicGroups: false,
      note: "Website demo profile — Premium through Dec 2027",
      createdAt: "2017-01-01T00:00:00.000Z",
    },
  ];
};

CMS.addUser = function (data) {
  const store = CMS.getStore();
  const email = String((data && data.email) || "").trim().toLowerCase();
  if (!email) return null;
  const existing = (store.users || []).find((u) => String(u.email || "").toLowerCase() === email);
  if (existing) return existing;
  const id = "usr_" + Date.now();
  const premium = !!(data && data.premium);
  const user = {
    id: id,
    name: ((data && data.name) || email.split("@")[0] || "Member").trim(),
    email: email,
    facebookId: (data && data.facebookId) || "",
    loginMethod: (data && data.loginMethod) || "email",
    premium: premium,
    premiumStart: (data && data.premiumStart) || (premium ? new Date().toISOString().slice(0, 10) : ""),
    premiumEnd: (data && data.premiumEnd) || (premium ? "2027-12-31" : ""),
    hasGps: data && "hasGps" in data ? !!data.hasGps : true,
    trailFeedEditor: !!(data && data.trailFeedEditor),
    canHostPublicGroups: !!(data && data.canHostPublicGroups),
    note: (data && data.note) || "",
    createdAt: new Date().toISOString(),
  };
  store.users = store.users || [];
  store.users.push(user);
  CMS.setStore(store);
  return user;
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
    canHostPublicGroups: !!(tgt.canHostPublicGroups || src.canHostPublicGroups),
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
      s.badgeCatalog = CMS.defaultBadgeCatalog();
      s.badgeAssignments = CMS.seedBadgeAssignments();
      s.admins = CMS.seedAdmins();
      s.featuredRouteIds = window.TW && TW.trails ? TW.trails.slice(0, 6).map((t) => t.id) : [];
      s.featuredArticleIds = window.TW && TW.articles ? TW.articles.slice(0, 4).map((a) => a.id) : [];
      s.appFunctions = CMS.seedAppFunctions();
      s.editorsChoiceCategories = CMS.seedEditorsChoiceCategories();
      s.incidentCategories = CMS.seedIncidentCategories();
      s.feedPosts = CMS.seedFeedPosts();
      s.groupHikeModeration = [];
      s.articleTags = CMS.seedArticleTags();
      s.articles = window.TW && TW.articles ? JSON.parse(JSON.stringify(TW.articles)) : [];
      s.transactions = CMS.seedTransactions();
      s.notifications = CMS.seedNotifications();
      s.popups = CMS.seedPopups();
      s.staticPages = CMS.seedStaticPages();
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
    store.content.figures = Object.assign(
      {},
      base.content.figures,
      (parsed.content && parsed.content.figures) || {}
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
    (store.users || []).forEach((u) => {
      if (typeof u.canHostPublicGroups !== "boolean") {
        u.canHostPublicGroups = u.id === "usr_1003";
        migrated = true;
      }
    });
    if (!(store.users || []).some((u) => u.id === "usr_clau" || String(u.email || "").toLowerCase() === "clau@example.com")) {
      const clau = (CMS.seedUsers() || []).find((u) => u.id === "usr_clau");
      if (clau) {
        store.users.push(clau);
        migrated = true;
      }
    }
    if (!(store.users || []).some((u) => u.id === "usr_alex_wong" || String(u.email || "").toLowerCase() === "alex.wong@email.com")) {
      const alex = (CMS.seedUsers() || []).find((u) => u.id === "usr_alex_wong");
      if (alex) {
        store.users.push(alex);
        migrated = true;
      }
    }
    const todayISO = new Date().toISOString().slice(0, 10);
    const testerEmails = ["clau@example.com", "alex.wong@email.com", "alex@example.com"];
    (store.users || []).forEach((u) => {
      const email = String(u.email || "").toLowerCase();
      const isTester = testerEmails.indexOf(email) >= 0 || u.id === "usr_clau" || u.id === "usr_alex_wong";
      if (!isTester) return;
      if (!u.premium || !u.premiumEnd || u.premiumEnd < todayISO) {
        u.premium = true;
        u.premiumStart = u.premiumStart || "2026-01-01";
        u.premiumEnd = "2027-12-31";
        migrated = true;
      }
    });
    if (!("donations" in parsed)) {
      store.donations = CMS.seedDonations();
      migrated = true;
    } else store.donations = parsed.donations || [];
    if (!("feedback" in parsed)) {
      store.feedback = CMS.seedFeedback();
      migrated = true;
    } else store.feedback = parsed.feedback || [];
    if (!Array.isArray(store.featuredGalleryIds)) {
      store.featuredGalleryIds = [];
      migrated = true;
    }
    if (!Array.isArray(store.activityTags) || !store.activityTags.length) {
      store.activityTags = CMS.defaultActivityTags();
      migrated = true;
    }
    if (!Array.isArray(store.badgeCatalog) || !store.badgeCatalog.length) {
      store.badgeCatalog = CMS.defaultBadgeCatalog();
      migrated = true;
    }
    if (!Array.isArray(store.badgeAssignments)) {
      store.badgeAssignments = CMS.seedBadgeAssignments();
      migrated = true;
    } else if (!store.badgeAssignments.length && !("badgeAssignments" in parsed)) {
      store.badgeAssignments = CMS.seedBadgeAssignments();
      migrated = true;
    }
    if (!Array.isArray(store.banners) || !store.banners.length) {
      store.banners = CMS.seedBanners();
      migrated = true;
    }
    const ensureArr = (key, seedFn) => {
      if (!Array.isArray(store[key]) || (!store[key].length && typeof seedFn === "function")) {
        store[key] = typeof seedFn === "function" ? seedFn() : [];
        migrated = true;
      }
    };
    ensureArr("admins", CMS.seedAdmins);
    if (!Array.isArray(store.featuredRouteIds)) {
      store.featuredRouteIds = (window.TW && TW.trails ? TW.trails.slice(0, 6).map((t) => t.id) : []);
      migrated = true;
    }
    if (!Array.isArray(store.featuredArticleIds)) {
      store.featuredArticleIds = (window.TW && TW.articles ? TW.articles.slice(0, 4).map((a) => a.id) : []);
      migrated = true;
    }
    ensureArr("appFunctions", CMS.seedAppFunctions);
    ensureArr("editorsChoiceCategories", CMS.seedEditorsChoiceCategories);
    ensureArr("incidentCategories", CMS.seedIncidentCategories);
    ensureArr("feedPosts", CMS.seedFeedPosts);
    if (!Array.isArray(store.groupHikeModeration)) {
      store.groupHikeModeration = [];
      migrated = true;
    }
    ensureArr("articleTags", CMS.seedArticleTags);
    if (!Array.isArray(store.articles) || !store.articles.length) {
      store.articles = window.TW && TW.articles ? JSON.parse(JSON.stringify(TW.articles)) : [];
      migrated = true;
    }
    ensureArr("transactions", CMS.seedTransactions);
    ensureArr("notifications", CMS.seedNotifications);
    ensureArr("popups", CMS.seedPopups);
    if (!store.staticPages || typeof store.staticPages !== "object") {
      store.staticPages = CMS.seedStaticPages();
      migrated = true;
    } else {
      store.staticPages = Object.assign({}, CMS.seedStaticPages(), store.staticPages);
    }
    // Refresh community incident seed when demo data grew (keep user-submitted ids)
    if (window.TW && TW.reports && TW.reports.length) {
      const seeded = TW.reports.map((r, i) => CMS.reportToIncident(r, i));
      const existing = store.incidents || [];
      const byId = {};
      existing.forEach((inc) => {
        byId[inc.id] = inc;
      });
      let incidentMigrated = false;
      seeded.forEach((inc) => {
        if (!byId[inc.id]) {
          byId[inc.id] = inc;
          incidentMigrated = true;
        } else {
          // Keep staff edits; backfill reporter/category if missing
          const cur = byId[inc.id];
          if (!cur.reporter && inc.reporter) {
            cur.reporter = inc.reporter;
            cur.reporterZh = inc.reporterZh;
            incidentMigrated = true;
          }
          if (cur.category && /[A-Z]/.test(cur.category)) {
            cur.category = String(cur.category).toLowerCase();
            incidentMigrated = true;
          }
          if (cur.published === false && (cur.status === "received" || !cur.status)) {
            // older seed hid "received" from public map — publish community demos
            if (String(cur.id || "").indexOf("inc_") === 0 || String(cur.id || "").indexOf("rep_") === 0) {
              cur.published = true;
              incidentMigrated = true;
            }
          }
        }
      });
      if (incidentMigrated || existing.length < seeded.length) {
        store.incidents = Object.keys(byId).map((k) => byId[k]);
        migrated = true;
      }
    }
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
    reporter: data.reporter || "",
    reporterZh: data.reporterZh || data.reporter || "",
    status: "received",
    published: data.published !== false,
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
    receiptName: (data.receiptName || data.name || "").trim(),
    amount: Math.max(1, +data.amount || 0),
    frequency: data.frequency === "monthly" ? "monthly" : "once",
    paymentMethod: data.paymentMethod || "card",
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
  try {
    window.dispatchEvent(new CustomEvent("tw-cms-saved", { detail: { at: store.updatedAt } }));
  } catch (e) {}
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
  const cat = String(r.category || "waste").toLowerCase();
  const catMap = {
    waste: "waste",
    tree: "tree",
    vandalism: "vandalism",
    obstruction: "obstruction",
    "fallen tree": "tree",
    "path obstruction": "obstruction",
  };
  const category = catMap[cat] || cat.replace(/\s+/g, "_") || "waste";
  const status =
    r.status === "closed"
      ? "handled"
      : r.status === "updated"
        ? "under_review"
        : r.status === "received"
          ? "received"
          : r.status || "received";
  return {
    id: r.id || "inc_" + i + "_" + (r.title || "x").replace(/\s+/g, "_").slice(0, 20),
    title: r.title,
    titleZh: r.titleZh,
    desc: r.desc,
    descZh: r.descZh,
    category: category,
    date: r.date,
    coords: r.coords,
    lat: r.lat,
    lng: r.lng,
    image: r.image,
    reporter: r.reporter || "",
    reporterZh: r.reporterZh || r.reporter || "",
    status: status,
    // Community map shows all seeded demo reports (incl. newly received)
    published: r.published !== false,
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
  const u = String(user || "").trim();
  const p = String(pass || "");
  let admins = [];
  try {
    const raw = localStorage.getItem(CMS.STORE_KEY);
    admins = raw ? JSON.parse(raw).admins || [] : [];
  } catch (e) {}
  if (!admins.length) admins = CMS.seedAdmins();
  const match = admins.find(
    (a) =>
      a.active !== false &&
      (a.username === u || a.email === u) &&
      String(a.password || "") === p
  );
  if (match) {
    localStorage.setItem(
      CMS.AUTH_KEY,
      JSON.stringify({ user: match.username || match.email, adminId: match.id, tier: match.tier, at: Date.now() })
    );
    return true;
  }
  if (u === CMS.DEMO_USER && p === CMS.DEMO_PASS) {
    localStorage.setItem(
      CMS.AUTH_KEY,
      JSON.stringify({ user: u, adminId: "adm_super", tier: "super", at: Date.now() })
    );
    return true;
  }
  return false;
};

CMS.logout = function () {
  localStorage.removeItem(CMS.AUTH_KEY);
};

CMS.requireAuth = function (section) {
  if (!CMS.isLoggedIn()) {
    location.href = "index.html";
    return false;
  }
  if (section && typeof CMS.canAccess === "function" && !CMS.canAccess(section)) {
    location.href = "dashboard.html";
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

/** Published community incidents + this browser's pending submissions */
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

/** Parse report date strings like "25/05/2026 13:59:46" or ISO */
TW.parseReportDate = function (value) {
  if (!value) return null;
  if (value instanceof Date) return isNaN(value.getTime()) ? null : value;
  const s = String(value).trim();
  const iso = Date.parse(s);
  if (!isNaN(iso)) return new Date(iso);
  const m = /^(\d{1,2})\/(\d{1,2})\/(\d{4})(?:\s+(\d{1,2}):(\d{2})(?::(\d{2}))?)?/.exec(s);
  if (m) {
    return new Date(
      +m[3],
      +m[2] - 1,
      +m[1],
      m[4] ? +m[4] : 0,
      m[5] ? +m[5] : 0,
      m[6] ? +m[6] : 0
    );
  }
  return null;
};

TW.normalizeReportCategory = function (cat) {
  const c = String(cat || "").toLowerCase().trim();
  if (!c || c === "all") return "all";
  if (c.indexOf("waste") >= 0) return "waste";
  if (c.indexOf("tree") >= 0 || c.indexOf("fallen") >= 0) return "tree";
  if (c.indexOf("vandal") >= 0) return "vandalism";
  if (c.indexOf("obstruct") >= 0 || c.indexOf("flood") >= 0) return "obstruction";
  return c;
};

/**
 * Community incident list (everyone's published reports + my pending).
 * opts: { category, dateRange: '6m'|'30d'|'90d'|'year'|'all', from, to }
 */
TW.getCommunityReports = function (opts) {
  opts = opts || {};
  let list = typeof TW.getReportsForUser === "function" ? TW.getReportsForUser() : [];
  const cat = TW.normalizeReportCategory(opts.category || "all");
  if (cat !== "all") {
    list = list.filter((r) => TW.normalizeReportCategory(r.category) === cat);
  }
  const now = new Date();
  let from = opts.from ? TW.parseReportDate(opts.from) : null;
  let to = opts.to ? TW.parseReportDate(opts.to) : null;
  if (!from && opts.dateRange && opts.dateRange !== "all") {
    from = new Date(now.getTime());
    if (opts.dateRange === "30d") from.setDate(from.getDate() - 30);
    else if (opts.dateRange === "90d") from.setDate(from.getDate() - 90);
    else if (opts.dateRange === "year") from.setFullYear(from.getFullYear() - 1);
    else from.setMonth(from.getMonth() - 6); // default / 6m
  }
  if (from || to) {
    list = list.filter((r) => {
      const d = TW.parseReportDate(r.date || r.updatedAt || r.createdAt);
      if (!d) return true;
      if (from && d < from) return false;
      if (to) {
        const end = new Date(to.getTime());
        end.setHours(23, 59, 59, 999);
        if (d > end) return false;
      }
      return true;
    });
  }
  return list.slice().sort((a, b) => {
    const da = TW.parseReportDate(a.date) || new Date(0);
    const db = TW.parseReportDate(b.date) || new Date(0);
    return db - da;
  });
};

TW.getSiteContent = function () {
  return CMS.getStore().content;
};

TW.getHomeFigures = function () {
  const c = typeof CMS !== "undefined" && CMS.getStore ? CMS.getStore().content : null;
  const figs = (c && c.figures) || TW.homeFigures || {};
  return {
    routes: Number(figs.routes) || 18420,
    distanceKm: Number(figs.distanceKm) || 3256780,
    incidents: Number(figs.incidents) || 2146,
  };
};

TW.getHomeBanners = function () {
  const store = typeof CMS !== "undefined" && CMS.getStore ? CMS.getStore() : null;
  const list = (store && store.banners) || [];
  const published = list.filter((b) => b && b.published !== false);
  const source = published.length ? published : CMS.seedBanners();
  return source.slice().sort((a, b) => (a.order || 0) - (b.order || 0)).slice(0, 4);
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
  const staticEl = document.getElementById("legalCmsCopy");
  if (staticEl && typeof CMS !== "undefined" && CMS.getStore) {
    const pages = CMS.getStore().staticPages || {};
    const kind = staticEl.getAttribute("data-legal") || "terms";
    const text = zh ? pages[kind + "Zh"] : pages[kind + "En"];
    if (text && String(text).trim()) {
      staticEl.hidden = false;
      staticEl.textContent = text;
      const fallback = document.querySelector(".legal-prose");
      if (zh && fallback && String(text).length > 40) fallback.hidden = true;
    }
  }
};
