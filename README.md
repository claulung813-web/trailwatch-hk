# TrailWatch HK

Website for planning Hong Kong hikes + a mobile app demo for GPS tracking (inspired by TrailWatch Figma).

## Run locally

```bash
cd ~/Projects/trailwatch-hk
python3 -m http.server 5173
```

Open [http://localhost:5173](http://localhost:5173). Use **EN / 繁** in the header to switch language.

## Website vs App

| Website (planning) | App (`/app`) |
|--------------------|--------------|
| Explore by district & difficulty | GPS track start / pause / save |
| Monthly recommended trails | Report incident **while hiking** (map stays visible) |
| Mark trails for next hike (My Plans) | Photo tagging, live stats |
| Community, reports, trees XP | — |

Tracking is **app-only**. The old `/track.html` redirects to `/app/`.

## Pages

- `index.html` — Community feed  
- `explore.html` — Routes (districts, 5 difficulty levels, monthly picks)  
- `plan.html` — Planned trails  
- `reports.html` — Incidents + map picker overlay  
- `trees.html` — Gamified tree challenges (no adoption)  
- `dashboard.html` / `insights.html` / `milestones.html` / `profile.html`  
- `app/index.html` — Phone-frame tracking app  
