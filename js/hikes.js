/* TrailWatch — Saved tracked hikes (shared by web + app) */
window.TW = window.TW || {};

TW.getHikes = function () {
  try {
    return JSON.parse(localStorage.getItem("tw_hikes") || "[]");
  } catch (e) {
    return [];
  }
};

TW.setHikes = function (list) {
  localStorage.setItem("tw_hikes", JSON.stringify(list));
};

TW.getHike = function (id) {
  return TW.getHikes().find((h) => h.id === id) || null;
};

TW.formatPace = function (seconds, distanceKm) {
  if (!distanceKm || distanceKm < 0.05 || !seconds) return "— /km";
  const minPerKm = seconds / 60 / distanceKm;
  const m = Math.floor(minPerKm);
  const s = Math.round((minPerKm - m) * 60);
  return m + ":" + String(s).padStart(2, "0") + " /km";
};

TW.estimateCalories = function (seconds, distanceKm, elevGain) {
  const hours = (seconds || 0) / 3600;
  const base = (distanceKm || 0) * 55 + (elevGain || 0) * 0.35 + hours * 40;
  return Math.max(0, Math.round(base));
};

TW.formatClock = function (iso) {
  try {
    const d = new Date(iso);
    if (TW.getLang() === "zh") {
      const h = d.getHours();
      const m = String(d.getMinutes()).padStart(2, "0");
      const ap = h < 12 ? "上午" : "下午";
      const h12 = h % 12 || 12;
      return ap + " " + h12 + ":" + m;
    }
    return d.toLocaleTimeString("en-HK", { hour: "numeric", minute: "2-digit" });
  } catch (e) {
    return "—";
  }
};

/**
 * Save a tracked session.
 * @param {object} hike
 */
TW.saveHike = function (hike) {
  const list = TW.getHikes();
  const seconds = hike.seconds || 0;
  const distanceKm = Math.round((hike.distanceKm || 0) * 100) / 100;
  const elevGain = Math.round(hike.elevGain || 0);
  const entry = {
    id: hike.id || "hike_" + Date.now(),
    title: hike.title || "Untitled hike",
    titleZh: hike.titleZh || hike.title || "未命名行程",
    seconds,
    distanceKm,
    elevGain,
    elevLoss: Math.round(hike.elevLoss || 0),
    calories: hike.calories != null ? Math.round(hike.calories) : TW.estimateCalories(seconds, distanceKm, elevGain),
    pace: hike.pace || TW.formatPace(seconds, distanceKm),
    path: hike.path || [],
    photos: Array.isArray(hike.photos) ? hike.photos : [],
    rating: hike.rating != null ? hike.rating : null,
    privacy: hike.privacy || "public",
    photoPrivacy: hike.photoPrivacy || "public",
    district: hike.district || "",
    activityTags: Array.isArray(hike.activityTags) ? hike.activityTags.slice() : [],
    user: hike.user || (TW.user && TW.user.name) || "Hiker",
    avatar: hike.avatar != null ? hike.avatar : (TW.user && TW.user.avatar) || null,
    startedAt: hike.startedAt || new Date().toISOString(),
    endedAt: hike.endedAt || new Date().toISOString(),
  };
  list.unshift(entry);
  if (list.length > 50) list.length = 50;
  TW.setHikes(list);
  return entry;
};

TW.formatDuration = function (seconds) {
  const h = String(Math.floor(seconds / 3600)).padStart(2, "0");
  const m = String(Math.floor((seconds % 3600) / 60)).padStart(2, "0");
  const s = String(seconds % 60).padStart(2, "0");
  return h + ":" + m + ":" + s;
};

/** Compact duration like 2:36 for detail UI */
TW.formatDurationShort = function (seconds) {
  const h = Math.floor(seconds / 3600);
  const m = Math.floor((seconds % 3600) / 60);
  if (h <= 0) return m + ":" + String(seconds % 60).padStart(2, "0");
  return h + ":" + String(m).padStart(2, "0");
};

TW.formatHikeDate = function (iso) {
  try {
    const d = new Date(iso);
    if (TW.getLang() === "zh") {
      return d.getFullYear() + "年" + (d.getMonth() + 1) + "月" + d.getDate() + "日";
    }
    return d.toLocaleDateString("en-HK", { year: "numeric", month: "short", day: "numeric" });
  } catch (e) {
    return iso;
  }
};

/** Seed one demo hike if empty so users can preview the feature */
TW.ensureDemoHike = function () {
  let list = TW.getHikes();
  if (!list.length) {
    const demo = TW.saveHike({
      id: "demo_wilson_s4",
      title: "Wilson Trail Section 4",
      titleZh: "衛奕信徑第四段",
      district: "tai-po",
      activityTags: ["mountain", "woodland", "heritage"],
      seconds: 9360,
      distanceKm: 7.2,
      elevGain: 682,
      elevLoss: 410,
      calories: 632,
      pace: "21:40 /km",
      rating: 3.6,
      photos: [
        "assets/brand/img-hiking.jpg",
        "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=600&q=80",
        "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=600&q=80",
        "assets/brand/img-route.webp",
      ],
      path: [
        [22.4825, 114.218],
        [22.485, 114.222],
        [22.488, 114.228],
        [22.491, 114.234],
        [22.494, 114.240],
        [22.497, 114.246],
        [22.500, 114.252],
      ],
      startedAt: "2024-05-11T07:28:00+08:00",
      endedAt: "2024-05-11T10:04:00+08:00",
    });
    return [demo];
  }
  // Enrich older demos missing Figma detail fields (non-destructive)
  let changed = false;
  list = list.map((h) => {
    const next = { ...h };
    if (!Array.isArray(next.photos) || !next.photos.length) {
      next.photos = [
        "assets/brand/img-hiking.jpg",
        "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=600&q=80",
        "assets/brand/img-route.webp",
      ];
      changed = true;
    }
    if (next.calories == null) {
      next.calories = TW.estimateCalories(next.seconds, next.distanceKm, next.elevGain);
      changed = true;
    }
    if (!next.pace) {
      next.pace = TW.formatPace(next.seconds, next.distanceKm);
      changed = true;
    }
    if (!next.user) {
      next.user = (TW.user && TW.user.name) || "Hiker";
      changed = true;
    }
    if (next.avatar === undefined) {
      next.avatar = (TW.user && TW.user.avatar) || null;
      changed = true;
    }
    if (next.id === "demo_wilson_s4" && (!Array.isArray(next.activityTags) || !next.activityTags.length)) {
      next.activityTags = ["mountain", "woodland", "heritage"];
      changed = true;
    }
    return next;
  });
  if (changed) TW.setHikes(list);
  return list;
};

TW.renderHikeListItem = function (h, detailHref) {
  const title = TW.getLang() === "zh" ? h.titleZh || h.title : h.title;
  const tags = typeof TW.activityTagsHtml === "function" ? TW.activityTagsHtml(h.activityTags) : "";
  return `
  <a class="record-item" href="${detailHref}" style="text-decoration:none;color:inherit">
    <div style="width:96px;height:96px;border-radius:10px;background:linear-gradient(135deg,#c8e6c9,#81c784);display:grid;place-items:center;flex-shrink:0;font-size:1.75rem">🗺</div>
    <div class="body">
      <div class="top"><span>${TW.formatHikeDate(h.endedAt || h.startedAt)}</span><span>📍 GPS</span></div>
      <h4>${title}</h4>
      <div class="trail-meta">
        <span>⏱ ${TW.formatDuration(h.seconds)}</span>
        <span>📏 ${h.distanceKm} km</span>
        <span>⬆ ${h.elevGain} m</span>
      </div>
      ${tags}
    </div>
  </a>`;
};

TW.DEFAULT_ACTIVITY_TAGS = [
  { id: "sunrise", label: "Sunrise", labelZh: "日出" },
  { id: "sunset", label: "Sunset", labelZh: "日落" },
  { id: "woodland", label: "Woodland shade", labelZh: "林蔭" },
  { id: "heritage", label: "Heritage", labelZh: "古蹟" },
  { id: "ecology", label: "Ecology", labelZh: "生態" },
  { id: "mountain", label: "Mountain views", labelZh: "山景" },
  { id: "sea", label: "Sea views", labelZh: "海景" },
  { id: "stream", label: "Streams", labelZh: "河溪" },
  { id: "reservoir", label: "Reservoir", labelZh: "水塘" },
];

TW.getActivityTags = function () {
  try {
    if (typeof CMS !== "undefined" && CMS.getStore) {
      const list = CMS.getStore().activityTags;
      if (Array.isArray(list) && list.length) return list;
    }
  } catch (e) { /* ignore */ }
  return TW.DEFAULT_ACTIVITY_TAGS;
};

TW.activityTagLabel = function (id) {
  const tag = (TW.getActivityTags() || []).find((t) => t.id === id);
  if (!tag) return id;
  return TW.getLang() === "zh" ? tag.labelZh || tag.label : tag.label || tag.labelZh;
};

TW.activityTagsHtml = function (ids) {
  if (!ids || !ids.length) return "";
  const esc = (s) =>
    String(s || "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/"/g, "&quot;");
  return `<div class="activity-tag-row">${ids
    .map((id) => `<span class="activity-tag">${esc(TW.activityTagLabel(id))}</span>`)
    .join("")}</div>`;
};

