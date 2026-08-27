/**
 * Compact Leaflet route editor (start / via / end, draggable markers).
 * Used by group hike create; mirrors plan.html drawing behaviour.
 */
TW.createRouteMapEditor = function (opts) {
  opts = opts || {};
  const mapEl = document.getElementById(opts.mapId);
  const ctxEl = document.getElementById(opts.ctxId);
  if (!mapEl || !ctxEl || typeof L === "undefined") return null;

  let draftId = opts.draftId || "";
  let start = null;
  let end = null;
  let vias = [];
  let drawMode = "menu";
  let line = null;
  let markers = [];
  let pendingLatLng = null;
  let longPressTimer = null;
  let longPressMoved = false;
  let suppressClick = false;
  let onChange = typeof opts.onChange === "function" ? opts.onChange : function () {};

  const map = L.map(mapEl, { doubleClickZoom: false }).setView(TW.hkCenter, 12);
  TW.addMapTiles(map, { maxZoom: 19 });

  function spinePoints() {
    const pts = [];
    if (start) pts.push(start);
    vias.forEach((v) => pts.push(v));
    if (end) pts.push(end);
    return pts;
  }

  function syncFromPath(path) {
    if (!path || path.length < 1) {
      start = end = null;
      vias = [];
      return;
    }
    start = [Number(path[0][0]), Number(path[0][1])];
    if (path.length === 1) {
      end = null;
      vias = [];
      return;
    }
    end = [Number(path[path.length - 1][0]), Number(path[path.length - 1][1])];
    vias = path.slice(1, -1).map((p) => [Number(p[0]), Number(p[1])]);
  }

  function iconFor(type, viaIndex) {
    if (type === "start") {
      return L.divIcon({
        className: "marker-label",
        html: '<div class="mk mk-start">A</div>',
        iconSize: [24, 24],
        iconAnchor: [12, 12],
      });
    }
    if (type === "end") {
      return L.divIcon({
        className: "marker-label",
        html: '<div class="mk mk-end">B</div>',
        iconSize: [24, 24],
        iconAnchor: [12, 12],
      });
    }
    const n = viaIndex != null ? viaIndex + 1 : "V";
    return L.divIcon({
      className: "marker-label",
      html: '<div class="mk mk-via">' + n + "</div>",
      iconSize: [22, 22],
      iconAnchor: [11, 11],
    });
  }

  function hideCtx() {
    ctxEl.style.display = "none";
    pendingLatLng = null;
  }

  function refreshCtxOptions() {
    const startBtn = ctxEl.querySelector('[data-type="start"]');
    const endBtn = ctxEl.querySelector('[data-type="end"]');
    if (startBtn) startBtn.hidden = !!start;
    if (endBtn) endBtn.hidden = !!end;
  }

  function showCtx(latlng, containerPoint) {
    pendingLatLng = [latlng.lat, latlng.lng];
    refreshCtxOptions();
    let x = containerPoint.x + 12;
    let y = containerPoint.y + 12;
    ctxEl.style.display = "block";
    const w = ctxEl.offsetWidth || 210;
    const h = ctxEl.offsetHeight || 180;
    const mapRect = mapEl.getBoundingClientRect();
    if (x + w > mapRect.width - 8) x = containerPoint.x - w - 8;
    if (y + h > mapRect.height - 8) y = containerPoint.y - h - 8;
    ctxEl.style.left = Math.max(8, x) + "px";
    ctxEl.style.top = Math.max(8, y) + "px";
  }

  function clearLayers() {
    if (line) {
      map.removeLayer(line);
      line = null;
    }
    markers.forEach((m) => map.removeLayer(m));
    markers = [];
  }

  function notifyChange() {
    onChange({
      draftId: draftId,
      path: spinePoints(),
      hasRoute: !!(start && end),
      distanceKm: TW.pathDistanceKm(spinePoints()),
    });
  }

  function addDraggable(latlng, type, index) {
    const m = L.marker(latlng, { icon: iconFor(type, index), draggable: true }).addTo(map);
    m._twType = type;
    m._twIndex = index;
    m.on("drag", () => {
      const ll = m.getLatLng();
      const pt = [ll.lat, ll.lng];
      if (type === "start") start = pt;
      else if (type === "end") end = pt;
      else if (type === "via") vias[index] = pt;
      const path = spinePoints();
      if (path.length >= 2) {
        if (line) line.setLatLngs(path);
        else line = L.polyline(path, { color: "#2563eb", weight: 5, opacity: 0.9 }).addTo(map);
      }
      notifyChange();
    });
    m.on("dragend", () => {
      const ll = m.getLatLng();
      const pt = [ll.lat, ll.lng];
      if (type === "start") start = pt;
      else if (type === "end") end = pt;
      else if (type === "via") vias[index] = pt;
      redraw();
    });
    m.on("click", (e) => {
      L.DomEvent.stop(e);
      showCtx(e.latlng, map.latLngToContainerPoint(e.latlng));
    });
    m.on("contextmenu", (e) => {
      L.DomEvent.stop(e);
      showCtx(e.latlng, map.latLngToContainerPoint(e.latlng));
    });
    if (type === "via") {
      m.on("dblclick", (e) => {
        L.DomEvent.stop(e);
        vias.splice(index, 1);
        redraw();
      });
      m.bindTooltip(TW.t("plan_ctx_remove"), { direction: "top" });
    }
    markers.push(m);
  }

  function redraw() {
    clearLayers();
    const path = spinePoints();
    if (path.length >= 2) {
      line = L.polyline(path, { color: "#2563eb", weight: 5, opacity: 0.9 }).addTo(map);
    }
    if (start) addDraggable(start, "start");
    vias.forEach((v, i) => addDraggable(v, "via", i));
    if (end) addDraggable(end, "end");
    notifyChange();
  }

  function addClickPoint(latlng) {
    const pt = [latlng.lat, latlng.lng];
    if (!start) start = pt;
    else if (!end) end = pt;
    else vias.push(pt);
    redraw();
  }

  function applyMenuAction(type) {
    if (type === "cancel" || !pendingLatLng) {
      hideCtx();
      return;
    }
    const pt = pendingLatLng.slice();
    if (type === "start") start = pt;
    else if (type === "end") end = pt;
    else if (type === "via") vias.push(pt);
    hideCtx();
    redraw();
  }

  function setDrawMode(mode) {
    drawMode = mode;
    if (opts.toolbarEl) {
      opts.toolbarEl.querySelectorAll("[data-draw]").forEach((c) => {
        c.classList.toggle("active", c.dataset.draw === mode);
      });
    }
    map.getContainer().style.cursor =
      mode === "click" ? "pointer" : "crosshair";
    hideCtx();
  }

  map.on("click", (e) => {
    if (suppressClick) {
      suppressClick = false;
      return;
    }
    if (drawMode === "click") {
      hideCtx();
      addClickPoint(e.latlng);
      return;
    }
    showCtx(e.latlng, e.containerPoint);
  });

  map.on("contextmenu", (e) => {
    L.DomEvent.preventDefault(e);
    showCtx(e.latlng, e.containerPoint);
  });

  mapEl.addEventListener(
    "touchstart",
    (ev) => {
      if (!ev.touches || ev.touches.length !== 1) return;
      longPressMoved = false;
      const touch = ev.touches[0];
      const rect = mapEl.getBoundingClientRect();
      const point = L.point(touch.clientX - rect.left, touch.clientY - rect.top);
      longPressTimer = setTimeout(() => {
        if (longPressMoved) return;
        const latlng = map.containerPointToLatLng(point);
        suppressClick = true;
        showCtx(latlng, point);
      }, 520);
    },
    { passive: true }
  );
  mapEl.addEventListener(
    "touchmove",
    () => {
      longPressMoved = true;
      if (longPressTimer) {
        clearTimeout(longPressTimer);
        longPressTimer = null;
      }
    },
    { passive: true }
  );
  mapEl.addEventListener(
    "touchend",
    () => {
      if (longPressTimer) {
        clearTimeout(longPressTimer);
        longPressTimer = null;
      }
    },
    { passive: true }
  );

  ctxEl.addEventListener("click", (e) => {
    const btn = e.target.closest("button[data-type]");
    if (!btn) return;
    e.stopPropagation();
    applyMenuAction(btn.dataset.type);
  });

  document.addEventListener("keydown", function escHandler(e) {
    if (e.key === "Escape") hideCtx();
  });
  document.addEventListener("click", function outsideHandler(e) {
    if (!ctxEl.contains(e.target) && !mapEl.contains(e.target)) hideCtx();
  });

  if (opts.toolbarEl) {
    opts.toolbarEl.querySelectorAll("[data-draw]").forEach((btn) => {
      btn.addEventListener("click", () => setDrawMode(btn.dataset.draw));
    });
    const undoBtn = opts.toolbarEl.querySelector("[data-route-undo]");
    if (undoBtn) {
      undoBtn.addEventListener("click", () => {
        if (vias.length) vias.pop();
        else if (end) end = null;
        else if (start) start = null;
        hideCtx();
        redraw();
      });
    }
    const clearBtn = opts.toolbarEl.querySelector("[data-route-clear]");
    if (clearBtn) {
      clearBtn.addEventListener("click", () => {
        start = end = null;
        vias = [];
        hideCtx();
        redraw();
      });
    }
  }

  function fitPath(path) {
    const pts = (path || spinePoints()).filter((p) => !isNaN(p[0]) && !isNaN(p[1]));
    if (pts.length) map.fitBounds(L.latLngBounds(pts).pad(0.2));
  }

  return {
    getPath() {
      return spinePoints();
    },
    getDraftId() {
      return draftId;
    },
    hasRoute() {
      return !!(start && end);
    },
    loadDraft(id) {
      const d = TW.getRouteDraft(id);
      if (!d) return false;
      draftId = d.id;
      start = d.start ? [Number(d.start[0]), Number(d.start[1])] : null;
      end = d.end ? [Number(d.end[0]), Number(d.end[1])] : null;
      vias = Array.isArray(d.vias) ? d.vias.map((p) => [Number(p[0]), Number(p[1])]) : [];
      if (!start && !end && Array.isArray(d.path) && d.path.length >= 1) {
        syncFromPath(d.path);
      }
      redraw();
      fitPath();
      return true;
    },
    loadPath(path) {
      draftId = "";
      syncFromPath(path);
      redraw();
      fitPath();
    },
    reset() {
      draftId = "draft_" + Date.now();
      start = end = null;
      vias = [];
      hideCtx();
      redraw();
      map.setView(TW.hkCenter, 12);
    },
    saveDraft(name) {
      if (!start || !end) return null;
      if (!draftId) draftId = "draft_" + Date.now();
      const path = spinePoints();
      const zh = TW.getLang() === "zh";
      const label = (name || "").trim() || (zh ? "聯誼路線" : "Group hike route");
      const draft = {
        id: draftId,
        name: label,
        nameZh: label,
        notes: "",
        path: path,
        start: start,
        end: end,
        vias: vias,
        pois: [],
        privacy: "private",
      };
      TW.saveRouteDraft(draft);
      TW.setActiveDraftId(draftId);
      notifyChange();
      return draft;
    },
    undo() {
      if (vias.length) vias.pop();
      else if (end) end = null;
      else if (start) start = null;
      hideCtx();
      redraw();
    },
    clear() {
      start = end = null;
      vias = [];
      hideCtx();
      redraw();
    },
    invalidateSize() {
      setTimeout(() => map.invalidateSize(), 150);
    },
    setDrawMode,
  };
};
