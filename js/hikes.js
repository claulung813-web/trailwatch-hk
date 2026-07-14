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

/**
 * Save a tracked session.
 * @param {object} hike
 * @param {string} hike.id
 * @param {string} hike.title
 * @param {number} hike.seconds
 * @param {number} hike.distanceKm
 * @param {number} hike.elevGain
 * @param {number} hike.elevLoss
 * @param {number[][]} hike.path - [[lat,lng],...]
 * @param {string} [hike.startedAt]
 * @param {string} [hike.endedAt]
 */
TW.saveHike = function (hike) {
  const list = TW.getHikes();
  const entry = {
    id: hike.id || "hike_" + Date.now(),
    title: hike.title || "Untitled hike",
    titleZh: hike.titleZh || hike.title || "未命名行程",
    seconds: hike.seconds || 0,
    distanceKm: Math.round((hike.distanceKm || 0) * 100) / 100,
    elevGain: Math.round(hike.elevGain || 0),
    elevLoss: Math.round(hike.elevLoss || 0),
    path: hike.path || [],
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
  const list = TW.getHikes();
  if (list.length) return list;
  const demo = TW.saveHike({
    id: "demo_ma_on_shan",
    title: "Ma On Shan morning loop",
    titleZh: "馬鞍山清晨環迴",
    seconds: 5077,
    distanceKm: 5.62,
    elevGain: 482,
    elevLoss: 235,
    path: [
      [22.348, 114.242],
      [22.350, 114.248],
      [22.353, 114.252],
      [22.357, 114.255],
      [22.360, 114.258],
      [22.363, 114.262],
      [22.365, 114.268],
    ],
    startedAt: "2026-07-10T06:15:00+08:00",
    endedAt: "2026-07-10T07:39:37+08:00",
  });
  return [demo];
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
