/* TrailWatch — Environmental Badge system (Acts A–E, Levels 0–5) */
window.TW = window.TW || {};

TW.ENV_THRESHOLDS = {
  0: { A: 0, B: 0, C: 0, D: 0, E: 0 },
  1: { A: 10, B: 10, C: 3, D: 10, E: 10 },
  2: { A: 24, B: 24, C: 8, D: 24, E: 24 },
  3: { A: 40, B: 40, C: 15, D: 40, E: 40 },
  4: { A: 60, B: 60, C: 25, D: 60, E: 60 },
  5: { A: 80, B: 80, C: 35, D: 80, E: 80 },
};

TW.ENV_BADGE_META = {
  1: { name: "Green Starter", nameZh: "綠色新手", emoji: "🌱", color: "#6b9b37" },
  2: { name: "Trail Keeper", nameZh: "徑道守護者", emoji: "🍃", color: "#2d8a45" },
  3: { name: "Nature Ally", nameZh: "自然盟友", emoji: "🌿", color: "#0b421a" },
  4: { name: "Eco Guardian", nameZh: "生態衛士", emoji: "🛡️", color: "#1a6b32" },
  5: { name: "Earth Steward", nameZh: "地球管家", emoji: "🌏", color: "#0f5c24" },
};

TW.PHOTO_QUOTA_LIMIT = 500;

function _envDefaultState() {
  return {
    A: 0,
    B: 0,
    C: 0,
    D: 0,
    E: 0,
    history: [],
    /** Photos that count toward TW gallery quota (excludes cleanup_*) */
    quotaPhotos: 12,
    /** Cleanup photos stored separately — do NOT count toward quota */
    cleanupPhotos: 0,
  };
}

TW.getEnvState = function () {
  try {
    const raw = localStorage.getItem("tw_env_badge");
    if (!raw) {
      // Demo seed: close to Level 1 so a few acts show progress / unlock
      const seeded = Object.assign(_envDefaultState(), {
        A: 9,
        B: 9,
        C: 2,
        D: 9,
        E: 9,
        quotaPhotos: 48,
        cleanupPhotos: 4,
      });
      TW.setEnvState(seeded);
      return seeded;
    }
    return Object.assign(_envDefaultState(), JSON.parse(raw));
  } catch (e) {
    return _envDefaultState();
  }
};

TW.setEnvState = function (state) {
  localStorage.setItem("tw_env_badge", JSON.stringify(state));
};

/** Highest level fully unlocked (0–5). Badges are cumulative. */
TW.getEnvLevel = function (state) {
  state = state || TW.getEnvState();
  let level = 0;
  for (let L = 1; L <= 5; L++) {
    const t = TW.ENV_THRESHOLDS[L];
    if (state.A >= t.A && state.B >= t.B && state.C >= t.C && state.D >= t.D && state.E >= t.E) {
      level = L;
    } else break;
  }
  return level;
};

/** Cumulative unlocked levels [1..highest] */
TW.getUnlockedEnvBadges = function (state) {
  const highest = TW.getEnvLevel(state);
  const list = [];
  for (let L = 1; L <= highest; L++) list.push(L);
  return list;
};

TW.getEnvProgressToNext = function (state) {
  state = state || TW.getEnvState();
  const current = TW.getEnvLevel(state);
  if (current >= 5) {
    return { current: 5, next: null, requirements: null, remaining: null };
  }
  const next = current + 1;
  const t = TW.ENV_THRESHOLDS[next];
  const remaining = {
    A: Math.max(0, t.A - state.A),
    B: Math.max(0, t.B - state.B),
    C: Math.max(0, t.C - state.C),
    D: Math.max(0, t.D - state.D),
    E: Math.max(0, t.E - state.E),
  };
  return { current, next, requirements: t, remaining, counts: { A: state.A, B: state.B, C: state.C, D: state.D, E: state.E } };
};

/**
 * Record an environmental act.
 * @param {'A'|'B'|'C'|'D'|'E'} act
 * @param {object} [meta]
 * @returns {{ ok: boolean, reason?: string, leveledUp?: number, state: object }}
 */
TW.recordEnvAct = function (act, meta) {
  meta = meta || {};
  const state = TW.getEnvState();
  const before = TW.getEnvLevel(state);

  if (!"ABCDE".includes(act)) {
    return { ok: false, reason: "invalid", state };
  }

  // Per-hike caps for A and E (caller should also enforce; this is a safety net via hikeId)
  if ((act === "A" || act === "E") && meta.hikeId) {
    const already = state.history.some(
      (h) => h.act === act && h.hikeId === meta.hikeId
    );
    if (already) {
      return { ok: false, reason: "per_hike_cap", state };
    }
  }

  // Act B: nature photos only during active track (caller sets duringTrack)
  if (act === "B" && meta.duringTrack === false) {
    return { ok: false, reason: "not_during_track", state };
  }

  // Photo quota: nature / gallery count; cleanup does not
  if (act === "B") {
    if (state.quotaPhotos >= TW.PHOTO_QUOTA_LIMIT) {
      return { ok: false, reason: "quota_full", state };
    }
    state.quotaPhotos += 1;
  }
  if (act === "D") {
    // Before and/or after cleanup photos — excluded from TW photo quota
    const n = meta.photoCount || 1;
    state.cleanupPhotos += n;
  }

  state[act] += 1;
  state.history.unshift({
    act,
    at: new Date().toISOString(),
    hikeId: meta.hikeId || null,
    note: meta.note || "",
    photoType: meta.photoType || null,
  });
  if (state.history.length > 200) state.history.length = 200;

  TW.setEnvState(state);
  const after = TW.getEnvLevel(state);
  return {
    ok: true,
    state,
    leveledUp: after > before ? after : 0,
    level: after,
  };
};

TW.getPhotoQuotaStatus = function () {
  const state = TW.getEnvState();
  return {
    used: state.quotaPhotos,
    limit: TW.PHOTO_QUOTA_LIMIT,
    cleanupCount: state.cleanupPhotos,
    cleanupExcluded: true,
  };
};

TW.renderEnvBadgeSection = function (container) {
  if (!container) return;
  const state = TW.getEnvState();
  const level = TW.getEnvLevel(state);
  const unlocked = TW.getUnlockedEnvBadges(state);
  const prog = TW.getEnvProgressToNext(state);
  const t = TW.t;
  const lang = TW.getLang();

  const actLabels = {
    A: t("env_act_a_short"),
    B: t("env_act_b_short"),
    C: t("env_act_c_short"),
    D: t("env_act_d_short"),
    E: t("env_act_e_short"),
  };

  let badgesHtml = "";
  for (let L = 1; L <= 5; L++) {
    const meta = TW.ENV_BADGE_META[L];
    const name = lang === "zh" ? meta.nameZh : meta.name;
    const on = unlocked.indexOf(L) >= 0;
    badgesHtml += `
      <div class="badge-item env-badge-item ${on ? "" : "locked"}" title="${name}">
        <div class="badge-shield ${on ? "" : "locked"}" style="background:${on ? meta.color : "#d1d5db"}">${meta.emoji}</div>
        <div class="name">L${L}<br/>${name}</div>
      </div>`;
  }

  const acts = ["A", "B", "C", "D", "E"]
    .map((k) => {
      const need = prog.next ? prog.requirements[k] : state[k];
      const cur = state[k];
      const pct = prog.next ? Math.min(100, Math.round((cur / need) * 100)) : 100;
      return `
        <div class="env-act-row">
          <div class="env-act-head">
            <strong>${k}</strong>
            <span>${actLabels[k]}</span>
            <span class="env-act-count">${cur}${prog.next ? " / " + need : ""}</span>
          </div>
          <div class="progress-mini"><span style="width:${pct}%"></span></div>
        </div>`;
    })
    .join("");

  const quota = TW.getPhotoQuotaStatus();

  container.innerHTML = `
    <div class="section-head">
      <h2>${t("env_title")}</h2>
      <span class="meta">${t("env_current")}: ${t("trees_level")} ${level}</span>
    </div>
    <p style="font-size:0.85rem;color:var(--text-muted);margin-bottom:1rem">${t("env_sub")}</p>
    <div class="badge-scroll mb-2">${badgesHtml}</div>
    <div class="xp-bar-wrap" style="margin-bottom:1rem">
      <div style="font-weight:700;color:var(--green-900);margin-bottom:0.75rem">
        ${prog.next ? t("env_progress_next").replace("{n}", String(prog.next)) : t("env_max_level")}
      </div>
      ${acts}
      <p style="font-size:0.75rem;color:var(--text-muted);margin-top:0.85rem">
        ${t("env_quota_note")
          .replace("{used}", String(quota.used))
          .replace("{limit}", String(quota.limit))
          .replace("{cleanup}", String(quota.cleanupCount))}
      </p>
    </div>`;
};
