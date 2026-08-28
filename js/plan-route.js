/**
 * Shared route planning: Mapbox trail routing, known-trail fallback, snap-to-trail.
 */
window.TW = window.TW || {};

TW.PLAN_PROFILE_API = {
  hiking: "walking",
  walking: "walking",
  cycling: "cycling",
  driving: "driving",
};

TW.haversineKm = function (a, b) {
  if (!a || !b) return Infinity;
  const toRad = (d) => (d * Math.PI) / 180;
  const R = 6371;
  const dLat = toRad(Number(b[0]) - Number(a[0]));
  const dLng = toRad(Number(b[1]) - Number(a[1]));
  const lat1 = toRad(Number(a[0]));
  const lat2 = toRad(Number(b[0]));
  const h =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(lat1) * Math.cos(lat2) * Math.sin(dLng / 2) * Math.sin(dLng / 2);
  return 2 * R * Math.atan2(Math.sqrt(h), Math.sqrt(1 - h));
};

TW.nearestOnPolyline = function (pt, path) {
  if (!pt || !path || path.length < 2) return null;
  const py = Number(pt[0]);
  const px = Number(pt[1]);
  let bestDist = Infinity;
  let bestPoint = null;
  let bestIndex = 0;
  let bestT = 0;
  for (let i = 0; i < path.length - 1; i++) {
    const ay = Number(path[i][0]);
    const ax = Number(path[i][1]);
    const by = Number(path[i + 1][0]);
    const bx = Number(path[i + 1][1]);
    const dx = bx - ax;
    const dy = by - ay;
    const len2 = dx * dx + dy * dy;
    let t = len2 ? ((px - ax) * dx + (py - ay) * dy) / len2 : 0;
    t = Math.max(0, Math.min(1, t));
    const qy = ay + t * dy;
    const qx = ax + t * dx;
    const d = TW.haversineKm([py, px], [qy, qx]);
    if (d < bestDist) {
      bestDist = d;
      bestPoint = [qy, qx];
      bestIndex = i;
      bestT = t;
    }
  }
  return { point: bestPoint, distKm: bestDist, index: bestIndex, t: bestT };
};

TW.collectTrailPaths = function () {
  const paths = [];
  const seen = new Set();
  const add = (raw) => {
    if (!Array.isArray(raw) || raw.length < 2) return;
    const p = raw.map((c) => [Number(c[0]), Number(c[1])]).filter((c) => !isNaN(c[0]) && !isNaN(c[1]));
    if (p.length < 2) return;
    const key = p[0][0].toFixed(4) + "," + p[0][1].toFixed(4) + ":" + p.length;
    if (seen.has(key)) return;
    seen.add(key);
    paths.push(p);
  };
  (TW.LIVE_EDITORS_CHOICE || []).forEach((r) => add(r.path));
  (TW.records || []).forEach((r) => add(r.path));
  if (typeof TW.getUserRoutes === "function") (TW.getUserRoutes() || []).forEach((r) => add(r.path));
  return paths;
};

TW.snapPointToTrails = function (pt, maxKm) {
  if (!pt) return pt;
  maxKm = maxKm == null ? 0.25 : Number(maxKm);
  let best = null;
  TW.collectTrailPaths().forEach((path) => {
    const n = TW.nearestOnPolyline(pt, path);
    if (n && n.distKm <= maxKm && (!best || n.distKm < best.distKm)) best = n;
  });
  return best ? best.point.slice() : [Number(pt[0]), Number(pt[1])];
};

TW.subpathAlongPolyline = function (path, startPt, endPt, maxSnapKm) {
  maxSnapKm = maxSnapKm == null ? 0.45 : maxSnapKm;
  const ns = TW.nearestOnPolyline(startPt, path);
  const ne = TW.nearestOnPolyline(endPt, path);
  if (!ns || !ne || ns.distKm > maxSnapKm || ne.distKm > maxSnapKm) return null;
  let i0 = ns.index;
  let i1 = ne.index;
  if (i0 > i1) {
    const tmp = i0;
    i0 = i1;
    i1 = tmp;
  }
  const out = [];
  for (let i = i0; i <= i1 + 1 && i < path.length; i++) {
    out.push([Number(path[i][0]), Number(path[i][1])]);
  }
  if (out.length < 2) return null;
  out[0] = ns.point.slice();
  out[out.length - 1] = ne.point.slice();
  return out;
};

TW.routeSpineOnKnownTrails = function (spine) {
  if (!spine || spine.length < 2) return spine ? spine.map((p) => [Number(p[0]), Number(p[1])]) : [];
  const paths = TW.collectTrailPaths();
  const result = [[Number(spine[0][0]), Number(spine[0][1])]];
  for (let s = 0; s < spine.length - 1; s++) {
    const a = spine[s];
    const b = spine[s + 1];
    let best = null;
    let bestLen = Infinity;
    paths.forEach((path) => {
      const sub = TW.subpathAlongPolyline(path, a, b);
      if (sub && sub.length >= 2) {
        const len = TW.pathDistanceKm(sub);
        if (len < bestLen) {
          bestLen = len;
          best = sub;
        }
      }
    });
    if (best && best.length >= 2) {
      result.push.apply(result, best.slice(1));
    } else {
      result.push([Number(b[0]), Number(b[1])]);
    }
  }
  return result;
};

TW._planRouteFetchId = 0;

TW.fetchMapboxPlanRoute = function (spine, profile, cb) {
  if (!spine || spine.length < 2 || !TW.MAPBOX_TOKEN) {
    cb(null, 0);
    return;
  }
  const limited = spine.slice(0, 25);
  const coords = limited
    .map((p) => Number(p[1]).toFixed(6) + "," + Number(p[0]).toFixed(6))
    .join(";");
  const url =
    "https://api.mapbox.com/directions/v5/mapbox/" +
    (profile || "walking") +
    "/" +
    coords +
    "?geometries=geojson&overview=full&access_token=" +
    encodeURIComponent(TW.MAPBOX_TOKEN);
  const id = ++TW._planRouteFetchId;
  fetch(url)
    .then((r) => r.json())
    .then((data) => {
      if (id !== TW._planRouteFetchId) return;
      if (!data || !data.routes || !data.routes[0] || !data.routes[0].geometry) {
        cb(null, 0);
        return;
      }
      const geom = data.routes[0].geometry.coordinates.map((c) => [c[1], c[0]]);
      const km = (data.routes[0].distance || 0) / 1000;
      cb(geom, km);
    })
    .catch(() => {
      if (id !== TW._planRouteFetchId) return;
      cb(null, 0);
    });
};

/** followTrails: Mapbox + known-trail fallback; false = straight spine only */
TW.fetchPlanRoute = function (spine, opts, cb) {
  opts = opts || {};
  if (!spine || spine.length < 2) {
    cb(null, 0);
    return;
  }
  if (opts.followTrails === false) {
    const manual = spine.map((p) => [Number(p[0]), Number(p[1])]);
    cb(manual, TW.pathDistanceKm(manual));
    return;
  }
  const profile = TW.PLAN_PROFILE_API[opts.profile] || TW.PLAN_PROFILE_API.hiking || "walking";
  TW.fetchMapboxPlanRoute(spine, profile, (geom, km) => {
    if (geom && geom.length >= 2) {
      cb(geom, km || TW.pathDistanceKm(geom));
      return;
    }
    const trail = TW.routeSpineOnKnownTrails(spine);
    cb(trail, TW.pathDistanceKm(trail));
  });
};
