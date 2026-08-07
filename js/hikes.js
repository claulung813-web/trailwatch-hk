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
    return next;
  });
  if (changed) TW.setHikes(list);
  return list;
};

TW.renderHikeListItem = function (h, detailHref) {
  const title = TW.getLang() === "zh" ? h.titleZh || h.title : h.title;
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
    </div>
  </a>`;
};
