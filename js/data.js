/* TrailWatch HK — Shared demo data */
window.TW = window.TW || {};

TW.user = {
  name: "Alex Wong",
  nickname: "山中遊子",
  email: "alex.wong@email.com",
  avatar: "https://images.unsplash.com/photo-1551632811-561732d1e5ec?w=200&h=200&fit=crop",
  rank: "Rare Hiker Level 4",
  rankZh: "稀有行山者 等級 4",
  memberSince: 2017,
  premium: true,
  premiumSince: "01/03/2019",
  premiumEnds: "30/06/2027",
};

TW.homeFigures = {
  routes: 18420,
  distanceKm: 3256780,
  incidents: 2146,
};

TW.stats = {
  records: 384,
  routes: 18,
  bookmarks: 256,
  friends: 34,
  reports: 23,
  badges: 12,
  events: 16,
  trees: 5,
  stories: 28,
  photos: 512,
  groupHikes: 36,
  distanceKm: 1234,
  climbedM: 10456,
  kcal: 142000,
  hikes: 3840,
  elevGain: 30456,
  movingHrs: 48.5,
  caloriesMcal: 13.8,
  descent: 18192,
  avgPace: "15.3",
  bestPace: "10.1",
};

TW.districts = [
  { id: "sai-kung", name: "Sai Kung", nameZh: "西貢" },
  { id: "lantau", name: "Lantau / Islands", nameZh: "大嶼山／離島" },
  { id: "hk-island", name: "Hong Kong Island", nameZh: "香港島" },
  { id: "kowloon", name: "Kowloon", nameZh: "九龍" },
  { id: "sha-tin", name: "Sha Tin", nameZh: "沙田" },
  { id: "tai-po", name: "Tai Po", nameZh: "大埔" },
  { id: "tsuen-wan", name: "Tsuen Wan", nameZh: "荃灣" },
  { id: "north", name: "North", nameZh: "北區" },
  { id: "tuen-mun", name: "Tuen Mun", nameZh: "屯門" },
];

/** Explore trail category filters (aligned with trailwatch.hk/browse) */
TW.trailFilters = [
  { id: "all", labelKey: "filter_all" },
  { id: "accessible", labelKey: "filter_accessible" },
  { id: "long", labelKey: "filter_long" },
  { id: "backyard", labelKey: "filter_backyard" },
  { id: "coastal", labelKey: "filter_coastal" },
  { id: "heritage", labelKey: "filter_heritage" },
  { id: "nature", labelKey: "filter_nature" },
  { id: "country", labelKey: "filter_country" },
  { id: "reservoir", labelKey: "filter_reservoir" },
];

TW.trails = [
  {
    id: "dragons-back",
    sourceId: 10001,
    title: "Dragon's Back",
    titleZh: "龍脊",
    district: "hk-island",
    difficulty: 2,
    desc: "Hong Kong Island classic ridge walk with sea views toward Shek O and Tai Tam.",
    descZh: "港島經典山脊徑，遠眺石澳與大潭海景。",
    distance: "8.5 km",
    duration: "3h 00m",
    elevation: "284 m",
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&q=80",
    tags: ["coastal", "backyard"],
    author: "TrailWatch",
    date: "Aug 2026",
    sourceUrl: "https://www.trailwatch.hk/browse",
    editorChoice: true,
    lat: 22.2445,
    lng: 114.2408,
  },
  {
    id: "lantau-trail-sections-1-12",
    sourceId: 1121559,
    title: "Lantau Trail Sections 1 & 12",
    titleZh: "鳳徑第一、十二段",
    district: "lantau",
    difficulty: 4,
    desc: "Classic Lantau Trail coastal mountain sections with sea views toward south Lantau.",
    descZh: "大嶼山鳳凰徑經典海岸山段，遠眺南大嶼海景。",
    distance: "11.96 km",
    duration: "3h 30m",
    elevation: "127 m",
    rating: 4.3,
    image: "https://www.trailwatch.hk/uploads/route-activity-photo/63703/1e2cc968-cc75-4ae0-b609-b30a35f764d7.jpg",
    tags: ["long", "coastal"],
    author: "TrailWatch community",
    date: "Aug 2026",
    sourceUrl: "https://www.trailwatch.hk/browse",
    monthly: "2026-08",
    lat: 22.240079823,
    lng: 113.957009046,
  },
  {
    id: "maclehose-trail-sections-9-10",
    sourceId: 1121518,
    title: "Maclehose Trail Sections 9 & 10",
    titleZh: "麥理浩徑第九、十段",
    district: "tsuen-wan",
    difficulty: 5,
    desc: "A long New Territories traverse linking ridgelines on the famous Maclehose Trail.",
    descZh: "麥理浩徑長途路段，沿新界山脊遠行。",
    distance: "22.41 km",
    duration: "4h 56m",
    elevation: "478 m",
    rating: 4.7,
    image: "https://www.trailwatch.hk/uploads/route-activity-photo/63703/90f2a883-1bcc-488d-b035-58cd2193b6c2.jpg",
    tags: ["long"],
    author: "TrailWatch community",
    date: "Aug 2026",
    sourceUrl: "https://www.trailwatch.hk/browse",
    monthly: "2026-08",
    lat: 22.40740369,
    lng: 114.105153143,
  },
  {
    id: "tai-long-sai-wan-ham-tin-chek-keng",
    sourceId: 1121483,
    title: "Tai Long Sai Wan · Ham Tin · Chek Keng",
    titleZh: "大浪西灣、鹹田灣、赤徑",
    district: "sai-kung",
    difficulty: 3,
    desc: "Sai Kung East beaches and coastal paths through Tai Long Wan country.",
    descZh: "西貢東大浪灣一帶沙灘與海岸徑。",
    distance: "11.56 km",
    duration: "4h 32m",
    elevation: "117 m",
    rating: 4.1,
    image: "https://www.trailwatch.hk/uploads/route-activity-track/5142/6d559428-1cdb-41a8-a1ff-bb8b68a03ccd.png",
    tags: ["long", "coastal"],
    author: "TrailWatch community",
    date: "Aug 2026",
    sourceUrl: "https://www.trailwatch.hk/browse",
    monthly: "2026-08",
    lat: 22.394848333,
    lng: 114.360201667,
  },
  {
    id: "maclehose-trail-section-1",
    sourceId: 1121477,
    title: "Maclehose Trail Section 1",
    titleZh: "麥理浩徑第一段",
    district: "sai-kung",
    difficulty: 3,
    desc: "The opening Sai Kung section of Hong Kong’s most iconic long-distance trail.",
    descZh: "香港最經典長途徑的西貢起步段。",
    distance: "9.74 km",
    duration: "2h 00m",
    elevation: "19 m",
    rating: 4.2,
    image: "https://www.trailwatch.hk/uploads/route-activity-photo/63703/0d52a7f0-0c61-42e7-98ea-1884e26fd1e9.jpg",
    tags: ["long", "coastal"],
    author: "TrailWatch community",
    date: "Aug 2026",
    sourceUrl: "https://www.trailwatch.hk/browse",
    monthly: "2026-07",
    lat: 22.397531234,
    lng: 114.319282109,
  },
  {
    id: "tung-chung-to-mui-wo",
    sourceId: 1121515,
    title: "Tung Chung to Mui Wo",
    titleZh: "東涌至梅窩",
    district: "lantau",
    difficulty: 3,
    desc: "Cross-island Lantau walk from Tung Chung toward the old ferry town of Mui Wo.",
    descZh: "由東涌橫越大嶼山前往梅窩渡輪小鎮。",
    distance: "9.81 km",
    duration: "2h 40m",
    elevation: "—",
    rating: 4.0,
    image: "https://www.trailwatch.hk/uploads/route-activity-track/91319/fd9bfe0d-f6bf-4c59-80b8-c17d0dd187e1.png",
    tags: ["long"],
    author: "TrailWatch community",
    date: "Aug 2026",
    sourceUrl: "https://www.trailwatch.hk/browse",
    monthly: "2026-07",
    lat: 22.29091234,
    lng: 113.94291883,
  },
  {
    id: "lantau-towards-fan-lau",
    sourceId: 1121595,
    title: "Lantau towards Fan Lau",
    titleZh: "大嶼山往分流",
    district: "lantau",
    difficulty: 3,
    desc: "Remote southwest Lantau coastline heading toward Fan Lau.",
    descZh: "大嶼山西南偏遠海岸，朝分流方向前進。",
    distance: "9.86 km",
    duration: "3h 14m",
    elevation: "72 m",
    rating: 4.0,
    image: "https://www.trailwatch.hk/uploads/route-activity-track/216119/eda6316d-ef73-4774-8c17-6360a860d3e4.png",
    tags: ["long", "coastal"],
    author: "TrailWatch community",
    date: "Aug 2026",
    sourceUrl: "https://www.trailwatch.hk/browse",
    monthly: "2026-07",
    lat: 22.22804997,
    lng: 113.89102321,
  },
  {
    id: "harbourfront-coastal-trail-yue-yi-ching-sha",
    sourceId: 1121517,
    title: "Harbourfront Coastal Trail · Yue Yi & Ching Sha",
    titleZh: "活力環島長廊：漁怡徑、晴沙徑",
    district: "hk-island",
    difficulty: 2,
    desc: "Hong Kong Island harbourfront segments of the Coastal Trail Challenge.",
    descZh: "港島環島徑海濱路段：漁怡徑與晴沙徑。",
    distance: "12.32 km",
    duration: "3h 38m",
    elevation: "—",
    rating: 4.1,
    image: "https://www.trailwatch.hk/uploads/route-activity-track/221904/c8924c6f-1c82-4740-bcc1-bdcda6ccba9d.png",
    tags: ["coastal", "accessible"],
    author: "TrailWatch community",
    date: "Aug 2026",
    sourceUrl: "https://www.trailwatch.hk/browse",
    monthly: "2026-06",
    lat: 22.24946456,
    lng: 114.17494336,
  },
  {
    id: "hk-island-north-harbourfront-promenade",
    sourceId: 1121476,
    title: "HK Island North Harbourfront Promenade",
    titleZh: "港島北海濱長廊",
    district: "hk-island",
    difficulty: 1,
    desc: "An easy urban waterfront stroll along Hong Kong Island’s north shore.",
    descZh: "沿港島北岸輕鬆漫步的海濱長廊。",
    distance: "11.41 km",
    duration: "2h 11m",
    elevation: "185 m",
    rating: 4.3,
    image: "https://www.trailwatch.hk/uploads/route-activity-photo/221904/1201f9b7-82d2-44f4-a221-f01e1df1cc97.jpg",
    tags: ["coastal", "accessible", "backyard"],
    author: "TrailWatch community",
    date: "Aug 2026",
    sourceUrl: "https://www.trailwatch.hk/browse",
    monthly: "2026-06",
    lat: 22.2864829,
    lng: 114.19163841,
  },
  {
    id: "aberdeen-country-park",
    sourceId: 1121484,
    title: "Aberdeen Country Park",
    titleZh: "香港仔郊野公園",
    district: "hk-island",
    difficulty: 2,
    desc: "Woodland country-park paths above Aberdeen on Hong Kong Island.",
    descZh: "港島香港仔郊野公園林間路徑。",
    distance: "8.49 km",
    duration: "4h 47m",
    elevation: "200 m",
    rating: 3.9,
    image: "https://www.trailwatch.hk/uploads/route-activity-track/135600/813017af-6082-4118-a552-b6009b406e72.png",
    tags: ["backyard", "country"],
    author: "TrailWatch community",
    date: "Aug 2026",
    sourceUrl: "https://www.trailwatch.hk/browse",
    monthly: "2026-06",
    lat: 22.257588768,
    lng: 114.193219212,
  },
  {
    id: "the-peak-garden",
    sourceId: 1121548,
    title: "The Peak Garden",
    titleZh: "山頂公園",
    district: "hk-island",
    difficulty: 1,
    desc: "A short high-elevation walk around The Peak Garden lookouts.",
    descZh: "山頂公園附近的短途高處漫步。",
    distance: "3.86 km",
    duration: "2h 32m",
    elevation: "441 m",
    rating: 3.7,
    image: "https://www.trailwatch.hk/uploads/route-activity-track/37913/ca443ae4-2a66-4550-a121-2b3b07acb7b8.png",
    tags: ["backyard", "accessible"],
    author: "TrailWatch community",
    date: "Aug 2026",
    sourceUrl: "https://www.trailwatch.hk/browse",
    monthly: "2026-05",
    lat: 22.271120651,
    lng: 114.149637166,
  },
  {
    id: "kadoorie-farm",
    sourceId: 1121565,
    title: "Kadoorie Farm",
    titleZh: "嘉道理農場",
    district: "tai-po",
    difficulty: 2,
    desc: "Nature and farm trails around Kadoorie Farm and Botanic Garden.",
    descZh: "嘉道理農場暨植物園一帶的自然路徑。",
    distance: "4.67 km",
    duration: "2h 36m",
    elevation: "158 m",
    rating: 3.7,
    image: "https://www.trailwatch.hk/uploads/route-activity-track/37913/66177da7-4e2b-435d-964c-1e20ccea20c6.png",
    tags: ["backyard", "accessible", "nature"],
    author: "TrailWatch community",
    date: "Aug 2026",
    sourceUrl: "https://www.trailwatch.hk/browse",
    monthly: "2026-05",
    lat: 22.433355195,
    lng: 114.117390728,
  },
  {
    id: "lui-kung-tin-to-ho-pui",
    sourceId: 1121564,
    title: "Lui Kung Tin to Ho Pui",
    titleZh: "雷公田至河背",
    district: "tsuen-wan",
    difficulty: 3,
    desc: "New Territories countryside link between Lui Kung Tin and Ho Pui.",
    descZh: "新界雷公田至河背的郊野路線。",
    distance: "10.4 km",
    duration: "3h 27m",
    elevation: "2 m",
    rating: 4.0,
    image: "https://www.trailwatch.hk/uploads/route-activity-track/10084/6ec58f64-dff6-4c49-8a69-7ac1e33f803b.png",
    tags: ["long", "backyard"],
    author: "TrailWatch community",
    date: "Aug 2026",
    sourceUrl: "https://www.trailwatch.hk/browse",
    lat: 22.42711741,
    lng: 114.10826588,
  },
  {
    id: "kwai-chung-kam-shan-loop",
    sourceId: 1121555,
    title: "Kwai Chung · Kam Shan Loop",
    titleZh: "葵涌金山繞一圈",
    district: "kowloon",
    difficulty: 3,
    desc: "Loop via Kam Shan Country Park paths, Shek Lei Pui Reservoir, and Shing Mun.",
    descZh: "經金山郊野公園、石梨貝水塘與城門的繞圈路線。",
    distance: "11.75 km",
    duration: "3h 26m",
    elevation: "6 m",
    rating: 4.3,
    image: "https://www.trailwatch.hk/uploads/route-activity-photo/221904/41a5ca0d-a188-4a1a-b009-813123dfa95b.jpg",
    tags: ["long", "backyard", "heritage", "reservoir", "country"],
    author: "金鷹",
    date: "Aug 2026",
    sourceUrl: "https://www.trailwatch.hk/browse",
    monthly: "2026-08",
    lat: 22.36355971,
    lng: 114.13154029,
  },
  {
    id: "the-twins-tai-shui-wan-half",
    sourceId: 1121485,
    title: "The Twins · Tai Shui Wan (half)",
    titleZh: "雙鹿大水敗半走",
    district: "sai-kung",
    difficulty: 4,
    desc: "Steep Sai Kung steps toward The Twins and Tai Shui Wan coastline.",
    descZh: "西貢雙鹿陡階與大水灣海岸的半日走。",
    distance: "4.59 km",
    duration: "3h 59m",
    elevation: "96 m",
    rating: 3.7,
    image: "https://www.trailwatch.hk/uploads/route-activity-track/64461/cfbaec23-0a9a-485e-9fc3-e7e32fcdad97.png",
    tags: ["long", "coastal"],
    author: "TrailWatch community",
    date: "Aug 2026",
    sourceUrl: "https://www.trailwatch.hk/browse",
    lat: 22.389668333,
    lng: 114.361616667,
  },
  {
    id: "sau-mau-ping-loop",
    sourceId: 1121543,
    title: "Sau Mau Ping Loop",
    titleZh: "秀茂坪走一圈",
    district: "kowloon",
    difficulty: 1,
    desc: "A compact backyard loop around Sau Mau Ping hillsides.",
    descZh: "秀茂坪山邊的短途後花園繞圈。",
    distance: "3.56 km",
    duration: "1h 00m",
    elevation: "73 m",
    rating: 3.7,
    image: "https://www.trailwatch.hk/uploads/route-activity-track/91319/3099cec9-79a8-4ab0-a8e7-8ff80f4b019c.png",
    tags: ["backyard", "accessible"],
    author: "TrailWatch community",
    date: "Aug 2026",
    sourceUrl: "https://www.trailwatch.hk/browse",
    lat: 22.3192142,
    lng: 114.23195429,
  },
  {
    id: "waterfront-thousand-layers",
    sourceId: 1121481,
    title: "Waterfront Thousand Layers",
    titleZh: "水畔千層",
    district: "kowloon",
    difficulty: 2,
    desc: "A rainy solo hike along layered waterfront and hillside paths.",
    descZh: "天雨獨行，沿水畔與山徑層層前進。",
    distance: "8.45 km",
    duration: "2h 30m",
    elevation: "175 m",
    rating: 4.1,
    image: "https://www.trailwatch.hk/uploads/route-activity-photo/70372/53ec84f2-645f-4895-a4dc-5f29c38f69fc.jpg",
    tags: ["backyard", "coastal"],
    author: "TrailWatch community",
    date: "Aug 2026",
    sourceUrl: "https://www.trailwatch.hk/browse",
    lat: 22.38465179,
    lng: 114.14344118,
  },
  {
    id: "morning-walk",
    sourceId: 1121550,
    title: "Morning Walk",
    titleZh: "晨間漫步",
    district: "kowloon",
    difficulty: 1,
    desc: "An easy morning community walk through urban Kowloon edges.",
    descZh: "九龍市區邊緣的輕鬆晨間步行。",
    distance: "6.1 km",
    duration: "1h 59m",
    elevation: "73 m",
    rating: 3.8,
    image: "https://www.trailwatch.hk/uploads/route-activity-track/107955/8fa5296e-384c-4729-9ef5-cd0a8a532733.png",
    tags: ["backyard", "accessible"],
    author: "TrailWatch community",
    date: "Aug 2026",
    sourceUrl: "https://www.trailwatch.hk/browse",
    lat: 22.38588456,
    lng: 114.19412682,
  },
  {
    id: "prince-edward-to-kwun-tong-pier",
    sourceId: 1121500,
    title: "Prince Edward to Kwun Tong Pier",
    titleZh: "太子至觀塘碼頭",
    district: "kowloon",
    difficulty: 2,
    desc: "Cross-Kowloon urban route from Prince Edward toward Kwun Tong Pier.",
    descZh: "由太子橫跨九龍前往觀塘碼頭的市區路線。",
    distance: "10.32 km",
    duration: "1h 56m",
    elevation: "14 m",
    rating: 4.0,
    image: "https://www.trailwatch.hk/uploads/route-activity-track/101813/e2cd7f39-22ff-42ae-85bf-63611515649d.png",
    tags: ["accessible", "coastal"],
    author: "TrailWatch community",
    date: "Aug 2026",
    sourceUrl: "https://www.trailwatch.hk/browse",
    lat: 22.32659744,
    lng: 114.168164098,
  },
];


TW.monthlyMeta = [
  { id: "2026-08", label: "August 2026", labelZh: "2026 年 8 月", current: true },
  { id: "2026-07", label: "July 2026", labelZh: "2026 年 7 月" },
  { id: "2026-06", label: "June 2026", labelZh: "2026 年 6 月" },
  { id: "2026-05", label: "May 2026", labelZh: "2026 年 5 月" },
];

TW.feed = [
  {
    type: "announcement",
    channel: "official",
    pinned: true,
    dateISO: "2026-08-10",
    user: "TrailWatch",
    avatar: null,
    time: "3 days ago",
    timeZh: "三天前",
    tag: "Announcement",
    tagZh: "公告",
    title: "TrailWatch app update — offline maps tip",
    titleZh: "TrailWatch App 更新 — 離線地圖小提示",
    body: "Download country park tiles before you go. Free members: limited packs / month.",
    bodyZh: "出發前先下載郊野公園圖磚。免費會員每月有限額度。",
    more: "Offline packs cover Sai Kung, Lantau, and Tai Tam. Premium members can download unlimited tiles.",
    moreZh: "離線圖磚覆蓋西貢、大嶼山與大潭。Premium 會員可無限下載。",
    url: "get-app.html",
    urlLabel: "Get the app",
    urlLabelZh: "下載 App",
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&q=80",
    likes: 210,
    comments: 18,
  },
  {
    type: "promo",
    channel: "ad",
    pinned: true,
    dateISO: "2026-08-08",
    user: "Parks and Trails",
    avatar: null,
    time: "5 days ago",
    timeZh: "五天前",
    tag: "Sponsored",
    tagZh: "贊助",
    title: "Plant a Tree challenge — August",
    titleZh: "八月植樹挑戰",
    body: "Join the MyTree campaign and log your volunteering miles.",
    bodyZh: "參加 MyTree 活動，記錄你的義工里程。",
    more: "Complete the Plant a Tree challenge to unlock the environmental badge on your profile.",
    moreZh: "完成植樹挑戰即可解鎖個人檔案上的環保徽章。",
    url: "about.html",
    urlLabel: "MyTree / challenges",
    urlLabelZh: "MyTree／挑戰",
    image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&q=80",
    likes: 96,
    comments: 11,
  },
  {
    type: "community",
    channel: "official",
    pinned: false,
    dateISO: "2024-06-06",
    user: "TrailWatch",
    avatar: null,
    time: "2 days ago",
    timeZh: "兩天前",
    tag: "Community",
    tagZh: "社群",
    title: "Tree Planting Day — June 8, 2024",
    titleZh: "植樹日 — 2024 年 6 月 8 日",
    body: "Join us for a countryside volunteering day across Sai Kung Country Park. All hikers welcome!",
    bodyZh: "歡迎參加西貢郊野公園義工植樹日，所有行山友均可參與！",
    image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&q=80",
    likes: 128,
    comments: 24,
  },
  {
    type: "story",
    channel: "friends",
    dateISO: "2026-08-13",
    user: "Sarah Chen",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
    time: "5 hours ago",
    timeZh: "5 小時前",
    tag: "Story",
    tagZh: "故事",
    body: "Caught the last light over Sharp Peak. Worth every step of the ascent.",
    bodyZh: "在蚺蛇尖捕捉最後一束光線，攀升的每一步都值得。",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
    likes: 86,
    comments: 12,
  },
  {
    type: "story",
    channel: "friends",
    dateISO: "2026-08-12",
    user: "山中遊子",
    avatar: "https://images.unsplash.com/photo-1551632811-561732d1e5ec?w=100&h=100&fit=crop",
    time: "Yesterday",
    timeZh: "昨天",
    tag: "Story",
    tagZh: "故事",
    body: "On Lantau Peak, the sea of clouds slowly parted.",
    bodyZh: "在鳳凰山上，雲海緩緩散開。",
    bilingual: true,
    likes: 54,
    comments: 8,
  },
  {
    type: "group",
    channel: "friends",
    dateISO: "2026-08-13",
    user: "James Wilson",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
    time: "3 hours ago",
    timeZh: "3 小時前",
    tag: "Group Hike",
    tagZh: "聯誼行山",
    title: "Lantau Peak Hike",
    titleZh: "鳳凰山行山",
    body: "Weekend group hike — moderate pace, sunrise start. Spaces left!",
    bodyZh: "週末聯誼——中等步速、日出出發，尚有名額！",
    image: "https://images.unsplash.com/photo-1551632811-561732d1e5ec?w=800&q=80",
    distance: "8.6 km",
    duration: "2:45",
    rating: 3.8,
    participants: 6,
    likes: 31,
    comments: 9,
  },
  {
    type: "record",
    channel: "friends",
    dateISO: "2024-05-11",
    recordId: "wilson-trail-section-4",
    user: "Alex Wong",
    avatar: "https://images.unsplash.com/photo-1551632811-561732d1e5ec?w=100&h=100&fit=crop",
    time: "May 11, 2024",
    timeZh: "2024年5月11日",
    tag: "Record",
    tagZh: "記錄",
    title: "Wilson Trail Section 4",
    titleZh: "衛奕信徑第四段",
    body: "Morning section from Ngong Ping Campsite toward Fui Yiu Ha.",
    bodyZh: "清晨由昂坪營地走向灰窰下。",
    distance: "7.2 km",
    duration: "2:36",
    rating: 3.6,
    mapStyle: true,
    likes: 58,
    comments: 7,
  },
  {
    type: "record",
    recordId: "lantau-trail-1-12",
    user: "David Scott",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop",
    time: "6 hours ago",
    timeZh: "6 小時前",
    tag: "Record",
    tagZh: "記錄",
    title: "Dragon's Back Trail",
    titleZh: "龍脊",
    body: "Blue sky day on the island's most famous ridge.",
    bodyZh: "藍天下行畢港島最著名山脊。",
    distance: "8.5 km",
    duration: "3:02",
    rating: 4.6,
    mapStyle: true,
    likes: 42,
    comments: 5,
  },
  {
    type: "route",
    channel: "friends",
    dateISO: "2026-08-14",
    user: "Sarah Chen",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
    time: "1 hour ago",
    timeZh: "1 小時前",
    tag: "Route",
    tagZh: "路線",
    title: "Shared a plan: Dragon’s Back loop",
    titleZh: "分享路線：龍脊環線",
    body: "Easy ridge walk from To Tei Wan — great for sunset. Saved to My Plans.",
    bodyZh: "由土地灣起步的輕鬆山脊，適合日落。已存到我的計劃。",
    image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800&q=80",
    distance: "8.5 km",
    duration: "3:00",
    likes: 22,
    comments: 4,
  },
  {
    type: "incident",
    channel: "friends",
    dateISO: "2026-08-12",
    user: "Elena Green",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
    time: "Yesterday",
    timeZh: "昨天",
    tag: "Incident",
    tagZh: "事故",
    title: "Fallen tree on MacLehose 4",
    titleZh: "麥理浩徑第四段倒樹",
    body: "Large tree blocking the path after storms. Reported so others can reroute.",
    bodyZh: "風暴後大樹阻塞路徑，已舉報方便其他人改道。",
    image: "https://images.unsplash.com/photo-1511497584788-876760111969?w=800&q=80",
    likes: 19,
    comments: 6,
  },
  {
    type: "promo",
    channel: "official",
    dateISO: "2026-08-11",
    user: "Parks and Trails",
    avatar: null,
    time: "4 days ago",
    timeZh: "四天前",
    tag: "PnT Event",
    tagZh: "活動",
    title: "Backyard Trails evening walk — 23 Aug",
    titleZh: "後花園徑黃昏行 — 8 月 23 日",
    body: "Free guided walk in an urban fringe park. Register via Parks and Trails.",
    bodyZh: "免費市區邊緣公園導賞。請到 Parks and Trails 報名。",
    more: "CTC / Parks and Trails evening programme. Bring water and a torch.",
    moreZh: "CTC／Parks and Trails 黃昏活動。請自備水和頭燈。",
    url: "https://www.parksandtrails.org.hk/",
    urlLabel: "Parks and Trails",
    urlLabelZh: "Parks and Trails",
    image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&q=80",
    likes: 64,
    comments: 8,
  },
  {
    type: "ad",
    channel: "ad",
    dateISO: "2026-08-09",
    user: "TrailGear HK",
    avatar: null,
    time: "Sponsored",
    timeZh: "贊助",
    tag: "Ad",
    tagZh: "廣告",
    title: "Lightweight rain shells for typhoon season",
    titleZh: "颱風季輕量雨褸",
    body: "Paid placement. Members get 15% off with code TRAILWATCH.",
    bodyZh: "付費廣告。會員輸入 TRAILWATCH 享 85 折。",
    image: "https://images.unsplash.com/photo-1523987355523-c7b5b0dd90a7?w=800&q=80",
    likes: 12,
    comments: 1,
  },
];

TW.records = [
  {
    id: "wilson-trail-section-4",
    title: "Wilson Trail Section 4",
    titleZh: "衛奕信徑第四段",
    date: "May 11, 2024",
    dateZh: "2024年5月11日",
    rating: 3.6,
    snippet: "Pat Sin Leng country paths from Ngong Ping Campsite toward Fui Yiu Ha.",
    snippetZh: "八仙嶺郊野徑，由昂坪營地走向灰窰下。",
    distance: "7.2 km",
    duration: "2:36",
    isoDate: "2024-05-11",
    activityTags: ["mountain", "woodland", "heritage"],
    elev: "682 m",
    elevGain: 682,
    calories: 632,
    pace: "21:40 /km",
    started: "7:28 AM",
    finished: "10:04 AM",
    startedZh: "上午 7:28",
    finishedZh: "上午 10:04",
    image: "https://www.trailwatch.hk/uploads/route-activity-photo/63703/1e2cc968-cc75-4ae0-b609-b30a35f764d7.jpg",
    user: "Alex Wong",
    avatar: "https://images.unsplash.com/photo-1551632811-561732d1e5ec?w=200&h=200&fit=crop",
    groupId: "meetup_0",
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
  },
  {
    id: "lantau-trail-1-12",
    title: "Lantau Trail Sections 1 & 12",
    titleZh: "鳳徑第一、十二段",
    date: "Aug 4, 2026",
    dateZh: "2026年8月4日",
    rating: 4.3,
    snippet: "Coastal mountain sections on Lantau with strong sea views.",
    snippetZh: "大嶼山海岸山段，海景開闊。",
    distance: "11.96 km",
    duration: "3:30",
    isoDate: "2026-08-04",
    activityTags: ["sea", "mountain", "sunset"],
    elev: "127 m",
    elevGain: 127,
    calories: 780,
    pace: "17:33 /km",
    started: "7:05 AM",
    finished: "10:35 AM",
    startedZh: "上午 7:05",
    finishedZh: "上午 10:35",
    image: "https://www.trailwatch.hk/uploads/route-activity-photo/63703/1e2cc968-cc75-4ae0-b609-b30a35f764d7.jpg",
    user: "TrailWatch community",
    avatar: null,
    photos: [
      "https://www.trailwatch.hk/uploads/route-activity-photo/63703/1e2cc968-cc75-4ae0-b609-b30a35f764d7.jpg",
      "https://images.unsplash.com/photo-1551632811-561732d1e5ec?w=600&q=80",
      "assets/brand/img-hiking.jpg",
    ],
    path: [
      [22.240, 113.957],
      [22.245, 113.965],
      [22.252, 113.972],
      [22.258, 113.980],
      [22.265, 113.988],
    ],
  },
  {
    id: "maclehose-9-10",
    title: "Maclehose Trail Sections 9 & 10",
    titleZh: "麥理浩徑第九、十段",
    date: "Aug 3, 2026",
    dateZh: "2026年8月3日",
    rating: 4.7,
    snippet: "Long New Territories ridgeline day on the classic Maclehose Trail.",
    snippetZh: "麥理浩徑長途山脊日。",
    distance: "22.41 km",
    duration: "4:56",
    isoDate: "2026-08-03",
    activityTags: ["mountain", "sunrise", "woodland"],
    elev: "478 m",
    elevGain: 478,
    calories: 1240,
    pace: "13:12 /km",
    started: "6:40 AM",
    finished: "11:36 AM",
    startedZh: "上午 6:40",
    finishedZh: "上午 11:36",
    image: "https://www.trailwatch.hk/uploads/route-activity-photo/63703/90f2a883-1bcc-488d-b035-58cd2193b6c2.jpg",
    user: "Marcus Lee",
    photos: [
      "https://www.trailwatch.hk/uploads/route-activity-photo/63703/90f2a883-1bcc-488d-b035-58cd2193b6c2.jpg",
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80",
      "assets/brand/img-route.webp",
    ],
    path: [
      [22.407, 114.105],
      [22.410, 114.115],
      [22.415, 114.125],
      [22.420, 114.135],
      [22.425, 114.145],
    ],
  },
  {
    id: "tai-long-sai-wan",
    title: "Tai Long Sai Wan · Ham Tin · Chek Keng",
    titleZh: "大浪西灣、鹹田灣、赤徑",
    date: "Aug 2, 2026",
    dateZh: "2026年8月2日",
    rating: 4.1,
    snippet: "Sai Kung East beaches and quiet coastal paths.",
    snippetZh: "西貢東沙灘與寧靜海岸徑。",
    distance: "11.56 km",
    duration: "4:32",
    isoDate: "2026-08-02",
    activityTags: ["sea", "ecology", "sunrise"],
    elev: "117 m",
    elevGain: 117,
    calories: 690,
    pace: "23:32 /km",
    started: "8:10 AM",
    finished: "12:42 PM",
    startedZh: "上午 8:10",
    finishedZh: "下午 12:42",
    image: "https://www.trailwatch.hk/uploads/route-activity-track/5142/6d559428-1cdb-41a8-a1ff-bb8b68a03ccd.png",
    user: "Sarah Chen",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
    photos: [
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&q=80",
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=600&q=80",
      "assets/brand/img-hiking.jpg",
    ],
    path: [
      [22.395, 114.360],
      [22.398, 114.365],
      [22.402, 114.370],
      [22.406, 114.375],
      [22.410, 114.380],
    ],
  },
  {
    id: "harbourfront-coastal",
    title: "Harbourfront Coastal Trail · Yue Yi & Ching Sha",
    titleZh: "活力環島長廊：漁怡徑、晴沙徑",
    date: "Aug 3, 2026",
    dateZh: "2026年8月3日",
    rating: 4.0,
    snippet: "Hong Kong Island harbourfront segments of the Coastal Trail Challenge.",
    snippetZh: "港島環島徑海濱路段。",
    distance: "12.32 km",
    duration: "3:38",
    isoDate: "2026-08-03",
    activityTags: ["sea", "heritage"],
    elev: "—",
    elevGain: 42,
    calories: 540,
    pace: "17:42 /km",
    started: "9:00 AM",
    finished: "12:38 PM",
    startedZh: "上午 9:00",
    finishedZh: "下午 12:38",
    image: "https://www.trailwatch.hk/uploads/route-activity-track/221904/c8924c6f-1c82-4740-bcc1-bdcda6ccba9d.png",
    user: "TrailWatch community",
    avatar: null,
    photos: [
      "https://images.unsplash.com/photo-1536599018102-9f803c140fc1?w=600&q=80",
      "assets/brand/img-route.webp",
    ],
    path: [
      [22.285, 114.155],
      [22.288, 114.165],
      [22.291, 114.175],
      [22.294, 114.185],
    ],
  },
  {
    id: "kwai-chung-kam-shan",
    title: "Kwai Chung · Kam Shan Loop",
    titleZh: "葵涌金山繞一圈",
    date: "Aug 4, 2026",
    dateZh: "2026年8月4日",
    rating: 4.2,
    snippet: "Kam Shan country paths, reservoir edges, and Shing Mun.",
    snippetZh: "金山郊野徑、水塘邊與城門。",
    distance: "11.75 km",
    duration: "3:26",
    isoDate: "2026-08-04",
    activityTags: ["reservoir", "woodland", "stream"],
    elev: "6 m",
    elevGain: 186,
    calories: 610,
    pace: "17:32 /km",
    started: "7:45 AM",
    finished: "11:11 AM",
    startedZh: "上午 7:45",
    finishedZh: "上午 11:11",
    image: "https://www.trailwatch.hk/uploads/route-activity-photo/221904/41a5ca0d-a188-4a1a-b009-813123dfa95b.jpg",
    user: "金鷹",
    avatar: null,
    photos: [
      "https://www.trailwatch.hk/uploads/route-activity-photo/221904/41a5ca0d-a188-4a1a-b009-813123dfa95b.jpg",
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=600&q=80",
      "assets/brand/img-hiking.jpg",
    ],
    path: [
      [22.370, 114.140],
      [22.375, 114.148],
      [22.380, 114.155],
      [22.385, 114.162],
    ],
  },
];

TW.reports = [
  {
    id: "rep_waste_central",
    title: "Waste Dumping",
    titleZh: "非法棄置廢物",
    desc: "Garbage completely blocks access near the trail junction.",
    descZh: "垃圾完全阻塞路口附近通道。",
    status: "received",
    category: "waste",
    date: "25/05/2026 13:59:46",
    coords: "22.285394, 114.153783",
    lat: 22.285394,
    lng: 114.153783,
    reporter: "Mei Wong",
    reporterZh: "黃美",
    image: "https://images.unsplash.com/photo-1532996122724-e3c354a0b4d5?w=200&q=80",
  },
  {
    id: "rep_tree_saikung",
    title: "Fallen Tree",
    titleZh: "倒樹",
    desc: "Large tree blocking the path after recent storms.",
    descZh: "風暴後大樹阻塞路徑。",
    status: "updated",
    category: "tree",
    date: "22/05/2026 09:12:03",
    coords: "22.381234, 114.268901",
    lat: 22.381234,
    lng: 114.268901,
    reporter: "Jamie Lau",
    reporterZh: "劉家明",
    image: "https://images.unsplash.com/photo-1511497584788-876760111969?w=200&q=80",
  },
  {
    id: "rep_vandalism_island",
    title: "Vandalism",
    titleZh: "破壞行為",
    desc: "Graffiti on trail signage.",
    descZh: "指示牌上的塗鴉。",
    status: "closed",
    category: "vandalism",
    date: "18/05/2026 16:40:11",
    coords: "22.269876, 114.234567",
    lat: 22.269876,
    lng: 114.234567,
    reporter: "Alex Chan",
    reporterZh: "陳志豪",
    image: "https://images.unsplash.com/photo-1569163139394-de440968e51c?w=200&q=80",
  },
  {
    id: "rep_obstruction_lantau",
    title: "Path Obstruction",
    titleZh: "路徑阻塞",
    desc: "Landslip debris covers half the trail near the ridge.",
    descZh: "山脊附近山泥傾瀉碎石覆蓋半條徑。",
    status: "updated",
    category: "obstruction",
    date: "03/07/2026 11:20:00",
    coords: "22.255100, 113.952200",
    lat: 22.2551,
    lng: 113.9522,
    reporter: "Sam Cheung",
    reporterZh: "張心怡",
    image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=200&q=80",
  },
  {
    id: "rep_waste_taipo",
    title: "Illegal camping waste",
    titleZh: "非法露營垃圾",
    desc: "Food packaging and bottles left at a popular campsite.",
    descZh: "熱門營地留下食物包裝與膠樽。",
    status: "closed",
    category: "waste",
    date: "14/06/2026 18:05:22",
    coords: "22.447800, 114.185600",
    lat: 22.4478,
    lng: 114.1856,
    reporter: "Elena Green",
    reporterZh: "Elena Green",
    image: "https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?w=200&q=80",
  },
  {
    id: "rep_tree_kowloon",
    title: "Broken branch hazard",
    titleZh: "斷枝危險",
    desc: "Hanging branch over a busy weekend path.",
    descZh: "週末熱門徑上空有斷枝懸掛。",
    status: "updated",
    category: "tree",
    date: "28/03/2026 08:40:00",
    coords: "22.348200, 114.185100",
    lat: 22.3482,
    lng: 114.1851,
    reporter: "Marcus Lee",
    reporterZh: "李文傑",
    image: "https://images.unsplash.com/photo-1502082553048-f009c37129b9?w=200&q=80",
  },
  {
    id: "rep_vandalism_saikung",
    title: "Damaged waymarker",
    titleZh: "損壞路標",
    desc: "Waymarker post snapped and spray-painted.",
    descZh: "路標柱折斷並被噴漆。",
    status: "closed",
    category: "vandalism",
    date: "09/04/2026 15:12:40",
    coords: "22.395500, 114.312000",
    lat: 22.3955,
    lng: 114.312,
    reporter: "Pat Ho",
    reporterZh: "何柏",
    image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=200&q=80",
  },
  {
    id: "rep_obstruction_shatin",
    title: "Flooded section",
    titleZh: "積水路段",
    desc: "Trail flooded after heavy rain; hard to pass safely.",
    descZh: "暴雨後路徑積水，難以安全通過。",
    status: "received",
    category: "obstruction",
    date: "02/08/2026 07:55:10",
    coords: "22.392000, 114.198000",
    lat: 22.392,
    lng: 114.198,
    reporter: "Sarah Chen",
    reporterZh: "陳思雅",
    image: "https://images.unsplash.com/photo-1433086966358-54843611c2d7?w=200&q=80",
  },
  {
    id: "rep_waste_tuenmun",
    title: "Fly-tipping near trailhead",
    titleZh: "入口附近非法棄置",
    desc: "Construction waste dumped beside the trailhead car park.",
    descZh: "起點停車場旁棄置建築廢料。",
    status: "updated",
    category: "waste",
    date: "19/02/2026 12:30:00",
    coords: "22.391500, 113.972800",
    lat: 22.3915,
    lng: 113.9728,
    reporter: "Chris Ng",
    reporterZh: "吳志成",
    image: "https://images.unsplash.com/photo-1604187351572-beb8ca48adf5?w=200&q=80",
  },
  {
    id: "rep_tree_lantau",
    title: "Uprooted tree across path",
    titleZh: "連根拔起的大樹橫阻路徑",
    desc: "Storm brought down a large tree across the coastal section.",
    descZh: "風暴吹倒大樹橫阻海岸路段。",
    status: "closed",
    category: "tree",
    date: "11/07/2026 16:18:33",
    coords: "22.248800, 113.968900",
    lat: 22.2488,
    lng: 113.9689,
    reporter: "Taylor Ip",
    reporterZh: "葉曉彤",
    image: "https://images.unsplash.com/photo-1448375240586-882707db888b?w=200&q=80",
  },
];

/**
 * Badge catalog (Category → Series → Badge) aligned with product criteria table.
 * HOLD series are shown as coming soon and are not awardable yet.
 */
TW.badgeCatalog = [
  {
    id: "geographical",
    name: "Geographical",
    nameZh: "地理",
    series: [
      {
        id: "peaks",
        name: "Peaks",
        nameZh: "山峰",
        criteriaType: "gps",
        criteriaLabel: "Tracked activity passes listed GPS points (radius buffer).",
        criteriaLabelZh: "追蹤行程經過所列 GPS 座標（緩衝半徑）。",
        badges: [
          { id: "peak_tai_mo_shan", name: "Tai Mo Shan", nameZh: "大帽山", emoji: "⛰", color: "#2d8a45", points: [{ lat: 22.4111, lng: 114.1247, radiusM: 150 }] },
          { id: "peak_lantau", name: "Lantau Peak", nameZh: "鳳凰山", emoji: "🏔", color: "#2563eb", points: [{ lat: 22.2492, lng: 113.9201, radiusM: 25 }] },
          { id: "peak_high_junk", name: "High Junk Peak", nameZh: "釣魚翁", emoji: "🗻", color: "#7c3aed", points: [{ lat: 22.2957, lng: 114.286, radiusM: 25 }] },
          { id: "peak_lion_rock", name: "Lion Rock", nameZh: "獅子山", emoji: "🦁", color: "#b45309", points: [{ lat: 22.3526, lng: 114.1862, radiusM: 100 }] },
          { id: "peak_castle", name: "Castle Peak", nameZh: "青山", emoji: "🏰", color: "#0b421a", points: [{ lat: 22.3884, lng: 113.9532, radiusM: 100 }] },
        ],
      },
      {
        id: "waterfalls",
        name: "Waterfalls",
        nameZh: "瀑布",
        criteriaType: "gps",
        criteriaLabel: "Tracked activity passes listed GPS points (radius buffer).",
        criteriaLabelZh: "追蹤行程經過所列 GPS 座標（緩衝半徑）。",
        badges: [
          {
            id: "wf_brides_pool",
            name: "Bride's Pool",
            nameZh: "新娘潭",
            emoji: "💧",
            color: "#0891b2",
            points: [
              { lat: 22.5031, lng: 114.2372, radiusM: 25 },
              { lat: 22.5041, lng: 114.2415, radiusM: 25 },
            ],
          },
          { id: "wf_little_hawaii", name: "Little Hawaii", nameZh: "小夏威夷", emoji: "🌴", color: "#0d9488", points: [{ lat: 22.3318, lng: 114.2458, radiusM: 50 }] },
          {
            id: "wf_ng_tung_tsai",
            name: "Ng Tung Tsai",
            nameZh: "梧桐寨",
            emoji: "💦",
            color: "#0284c7",
            points: [
              { lat: 22.4272, lng: 114.1318, radiusM: 25 },
              { lat: 22.4241, lng: 114.1318, radiusM: 25 },
              { lat: 22.4237, lng: 114.1316, radiusM: 25 },
              { lat: 22.4232, lng: 114.1309, radiusM: 25 },
            ],
          },
        ],
      },
      {
        id: "reservoir",
        name: "Reservoir circuits",
        nameZh: "環塘路線",
        criteriaType: "route_cover",
        criteriaLabel: "Tracked activity covers 90% of the planned route (buffer).",
        criteriaLabelZh: "追蹤行程覆蓋計劃路線 90%（緩衝距離）。",
        badges: [
          {
            id: "res_shing_mun",
            name: "Shing Mun Reservoir path",
            nameZh: "城門塘畔徑",
            emoji: "🛤",
            color: "#15803d",
            planShareUrl: "https://www.trailwatch.hk/plan-share/239342",
          },
          {
            id: "res_aberdeen",
            name: "Upper + Lower Aberdeen Reservoir",
            nameZh: "上環水塘＋下環水塘",
            emoji: "🌊",
            color: "#1d4ed8",
            planRef: "https://www.hiking.gov.hk/console/public/uploads/others/file/9c5b9e6baa712124b2d3bf99c2b4da5a7b2825f3.pdf",
          },
          {
            id: "res_ho_pui",
            name: "Ho Pui Reservoir",
            nameZh: "河背水塘",
            emoji: "🏞",
            color: "#047857",
            planShareUrl: "https://www.trailwatch.hk/plan-share/108903",
          },
        ],
      },
      {
        id: "ancient",
        name: "Ancient Trails",
        nameZh: "古道",
        criteriaType: "route_cover",
        hold: true,
        criteriaLabel: "Tracked activity covers 90% of the planned route (buffer).",
        criteriaLabelZh: "追蹤行程覆蓋計劃路線 90%（緩衝距離）。",
        badges: [
          { id: "anc_lai_kok", name: "Lai Kok Ancient Trail", nameZh: "荔谷古道", emoji: "🧭", color: "#78716c", timeLimit: true, optIn: true },
          { id: "anc_mau_ping", name: "Mau Ping Ancient Trail", nameZh: "茅坪古道", emoji: "🧭", color: "#78716c", timeLimit: true, optIn: true },
          { id: "anc_tung_o", name: "Tung O Ancient Trail", nameZh: "東澳古道", emoji: "🧭", color: "#78716c", timeLimit: true, optIn: true },
          { id: "anc_yung_pak", name: "Yung Pak Corridor", nameZh: "榕北走廊", emoji: "🧭", color: "#78716c", timeLimit: true, optIn: true },
          { id: "anc_tsi_sha", name: "Tsi Sha Ancient Trail", nameZh: "慈沙古道", emoji: "🧭", color: "#78716c", timeLimit: true, optIn: true },
        ],
      },
    ],
  },
  {
    id: "mileage",
    name: "Mileage",
    nameZh: "里程",
    series: [
      {
        id: "distance",
        name: "Distance",
        nameZh: "距離",
        criteriaType: "lifetime_distance",
        criteriaLabel: "Lifetime total distance tracked.",
        criteriaLabelZh: "終身累計追蹤距離。",
        showProgress: true,
        badges: [
          { id: "dist_50", name: "50 km", nameZh: "50 公里", emoji: "🥾", color: "#65a30d", targetKm: 50 },
          { id: "dist_100", name: "100 km", nameZh: "100 公里", emoji: "🥾", color: "#4d7c0f", targetKm: 100 },
          { id: "dist_200", name: "200 km", nameZh: "200 公里", emoji: "🥾", color: "#3f6212", targetKm: 200 },
          { id: "dist_500", name: "500 km", nameZh: "500 公里", emoji: "🔥", color: "#ca8a04", targetKm: 500 },
          { id: "dist_1000", name: "1000 km", nameZh: "1000 公里", emoji: "🔥", color: "#a16207", targetKm: 1000 },
          { id: "dist_2000", name: "2000 km", nameZh: "2000 公里", emoji: "🔥", color: "#854d0e", targetKm: 2000 },
          { id: "dist_5000", name: "5000 km", nameZh: "5000 公里", emoji: "💯", color: "#b45309", targetKm: 5000 },
          { id: "dist_10k", name: "10k km", nameZh: "1 萬公里", emoji: "💯", color: "#9a3412", targetKm: 10000 },
          { id: "dist_25k", name: "25k km", nameZh: "2.5 萬公里", emoji: "🏆", color: "#7c2d12", targetKm: 25000 },
          { id: "dist_50k", name: "50k km", nameZh: "5 萬公里", emoji: "🏆", color: "#9f1239", targetKm: 50000 },
          { id: "dist_75k", name: "75k km", nameZh: "7.5 萬公里", emoji: "🏆", color: "#881337", targetKm: 75000 },
          { id: "dist_100k", name: "100k km", nameZh: "10 萬公里", emoji: "👑", color: "#4c0519", targetKm: 100000 },
        ],
      },
      {
        id: "four_trails",
        name: "Four trails",
        nameZh: "四徑",
        criteriaType: "route_cover",
        criteriaLabel: "Tracked activity covers 90% of planned route / distance posts (buffer).",
        criteriaLabelZh: "追蹤行程覆蓋計劃路線／標距柱 90%（緩衝距離）。",
        showProgress: true,
        badges: [
          { id: "ft_maclehose", name: "Maclehose", nameZh: "麥理浩徑", emoji: "🗺", color: "#166534", totalKm: 100 },
          { id: "ft_wilson", name: "Wilson", nameZh: "衛奕信徑", emoji: "🗺", color: "#1e40af", totalKm: 78 },
          { id: "ft_island", name: "Island", nameZh: "港島徑", emoji: "🗺", color: "#6d28d9", totalKm: 50 },
          { id: "ft_lantau", name: "Lantau", nameZh: "鳳凰徑", emoji: "🗺", color: "#0e7490", totalKm: 70 },
        ],
      },
    ],
  },
  {
    id: "app",
    name: "App functions",
    nameZh: "App 功能",
    series: [
      {
        id: "overseas",
        name: "Overseas tracking",
        nameZh: "海外追蹤",
        criteriaType: "count",
        criteriaLabel: "Tracked records with GPS points outside Hong Kong territory.",
        criteriaLabelZh: "追蹤記錄含香港境外 GPS 點的次數。",
        showProgress: true,
        badges: [
          { id: "os_1", name: "Tracked once overseas", nameZh: "海外追蹤 1 次", emoji: "✈️", color: "#2563eb", targetCount: 1 },
          { id: "os_5", name: "Tracked 5 times overseas", nameZh: "海外追蹤 5 次", emoji: "✈️", color: "#1d4ed8", targetCount: 5 },
          { id: "os_10", name: "Tracked 10 times overseas", nameZh: "海外追蹤 10 次", emoji: "🌏", color: "#1e40af", targetCount: 10 },
          { id: "os_50", name: "Tracked 50 times overseas", nameZh: "海外追蹤 50 次", emoji: "🌏", color: "#1e3a8a", targetCount: 50 },
          { id: "os_100", name: "Tracked 100 times overseas", nameZh: "海外追蹤 100 次", emoji: "🌐", color: "#172554", targetCount: 100 },
        ],
      },
      {
        id: "group_org",
        name: "Group hike organizer",
        nameZh: "聯誼主辦",
        criteriaType: "count",
        criteriaLabel: "Organized group hikes (count).",
        criteriaLabelZh: "主辦聯誼次數。",
        showProgress: true,
        badges: [
          { id: "gh_5", name: "Organized 5 group hikes", nameZh: "主辦 5 次聯誼", emoji: "👥", color: "#059669", targetCount: 5 },
          { id: "gh_10", name: "Organized 10 group hikes", nameZh: "主辦 10 次聯誼", emoji: "👥", color: "#047857", targetCount: 10 },
          { id: "gh_25", name: "Organized 25 group hikes", nameZh: "主辦 25 次聯誼", emoji: "🧑‍🤝‍🧑", color: "#065f46", targetCount: 25 },
          { id: "gh_50", name: "Organized 50 group hikes", nameZh: "主辦 50 次聯誼", emoji: "🧑‍🤝‍🧑", color: "#064e3b", targetCount: 50 },
          { id: "gh_100", name: "Organized 100 group hikes", nameZh: "主辦 100 次聯誼", emoji: "🏅", color: "#022c22", targetCount: 100 },
        ],
      },
      {
        id: "incidents",
        name: "Incident report",
        nameZh: "個案報告",
        criteriaType: "count",
        criteriaLabel: "Incident reports submitted (count).",
        criteriaLabelZh: "提交個案報告次數。",
        showProgress: true,
        badges: [
          { id: "ir_1", name: "Report 1 incident", nameZh: "報告 1 宗個案", emoji: "⚠️", color: "#ea580c", targetCount: 1 },
          { id: "ir_5", name: "Report 5 incidents", nameZh: "報告 5 宗個案", emoji: "⚠️", color: "#c2410c", targetCount: 5 },
          { id: "ir_10", name: "Report 10 incidents", nameZh: "報告 10 宗個案", emoji: "🚨", color: "#9a3412", targetCount: 10 },
          { id: "ir_25", name: "Report 25 incidents", nameZh: "報告 25 宗個案", emoji: "🚨", color: "#7c2d12", targetCount: 25 },
          { id: "ir_50", name: "Report 50 incidents", nameZh: "報告 50 宗個案", emoji: "🛡️", color: "#431407", targetCount: 50 },
        ],
      },
    ],
  },
  {
    id: "outside",
    name: "Outside app",
    nameZh: "App 以外",
    series: [
      {
        id: "volunteer",
        name: "Volunteer",
        nameZh: "義工",
        criteriaType: "cms",
        criteriaLabel: "Assigned to user on CMS.",
        criteriaLabelZh: "由 CMS 指派予用戶。",
        badges: [
          { id: "vol_become", name: "Become a volunteer", nameZh: "成為義工", emoji: "🤲", color: "#16a34a" },
          { id: "vol_5", name: "Join 5 volunteer activities", nameZh: "參加 5 次義工活動", emoji: "🤲", color: "#15803d" },
        ],
      },
      {
        id: "photos",
        name: "Photos",
        nameZh: "相片",
        criteriaType: "cms",
        criteriaLabel: "Photo selected — assigned to user on CMS.",
        criteriaLabelZh: "相片入選後由 CMS 指派予用戶。",
        badges: [
          { id: "photo_contributor", name: "Photo contributor", nameZh: "相片貢獻者", emoji: "📷", color: "#7c3aed" },
        ],
      },
      {
        id: "donation",
        name: "Donation",
        nameZh: "捐款",
        criteriaType: "cms",
        criteriaLabel: "Donated — assigned to user on CMS.",
        criteriaLabelZh: "完成捐款後由 CMS 指派予用戶。",
        badges: [
          { id: "donor", name: "Donor", nameZh: "捐款者", emoji: "💚", color: "#0b421a" },
        ],
      },
      {
        id: "env_care",
        name: "Environmental Care",
        nameZh: "環境關懷",
        criteriaType: "cms",
        criteriaLabel: "Proof sent externally (e.g. form) — assigned on CMS.",
        criteriaLabelZh: "經外部途徑提交證明（如表格）後由 CMS 指派。",
        badges: [
          { id: "env_trail_cleanup", name: "Trail Cleanup", nameZh: "淨山", emoji: "🧹", color: "#2d8a45" },
          { id: "env_beach_cleaning", name: "Beach cleaning", nameZh: "淨灘", emoji: "🏖", color: "#0891b2" },
        ],
      },
    ],
  },
];

/** Effective catalog: CMS override when present, else built-in defaults. */
TW.getEffectiveBadgeCatalog = function () {
  try {
    if (typeof CMS !== "undefined" && typeof CMS.getBadgeCatalog === "function") {
      const c = CMS.getBadgeCatalog();
      if (Array.isArray(c) && c.length) return c;
    }
  } catch (e) {}
  return TW.badgeCatalog || [];
};

/** Demo progress / unlocks for badge criteria (local MVP). */
TW.getBadgeProgressState = function () {
  const dist = Number((TW.stats && TW.stats.distanceKm) || 0);
  const reports = Number((TW.stats && TW.stats.reports) || 0);
  let cmsAssigned = [];
  let usedCmsAssignments = false;
  try {
    const email =
      (typeof TW.memberEmail === "function" && TW.memberEmail()) ||
      (TW.user && TW.user.email) ||
      "";
    let userId = "";
    if (typeof TW.getMemberAuth === "function") {
      const auth = TW.getMemberAuth();
      userId = (auth && (auth.userId || auth.id)) || "";
    }
    if (typeof CMS !== "undefined" && typeof CMS.getAssignedBadgeIdsForUser === "function") {
      usedCmsAssignments = true;
      cmsAssigned = CMS.getAssignedBadgeIdsForUser(email, userId) || [];
    }
  } catch (e) {}
  if (!usedCmsAssignments) {
    try {
      cmsAssigned = JSON.parse(localStorage.getItem("tw_cms_badges") || "[]");
    } catch (e) {
      cmsAssigned = [];
    }
    if (!cmsAssigned.length) {
      cmsAssigned = ["vol_become", "donor", "photo_contributor"];
      try {
        localStorage.setItem("tw_cms_badges", JSON.stringify(cmsAssigned));
      } catch (e) {}
    }
  }
  return {
    distanceKm: dist,
    overseasCount: 3,
    groupHikesOrganized: 8,
    incidentReports: Math.max(reports, 6),
    gpsUnlocked: ["peak_tai_mo_shan", "peak_lion_rock", "wf_brides_pool", "res_shing_mun"],
    fourTrailKm: {
      ft_maclehose: 42,
      ft_wilson: 18,
      ft_island: 50,
      ft_lantau: 12,
    },
    cmsAssigned: cmsAssigned,
  };
};

/** Flat list kept for older callers; prefer badgeCatalog. */
TW.badges = [];
(function seedLegacyBadges() {
  (TW.badgeCatalog || []).forEach((cat) => {
    (cat.series || []).forEach((series) => {
      (series.badges || []).forEach((b) => {
        TW.badges.push({
          id: b.id,
          name: b.name,
          nameZh: b.nameZh,
          emoji: b.emoji,
          color: b.color,
          category: cat.id,
          series: series.id,
        });
      });
    });
  });
})();

TW.treeGame = {
  level: 7,
  xp: 1280,
  xpNext: 1500,
  streak: 5,
  challenges: [
    { id: "c1", title: "Check in at 3 tree spots", titleZh: "到訪 3 個樹點打卡", progress: 2, total: 3, xp: 80 },
    { id: "c2", title: "Share a biodiversity photo", titleZh: "分享一張生態相片", progress: 0, total: 1, xp: 40 },
    { id: "c3", title: "Week streak × 7", titleZh: "連續到訪 7 天", progress: 5, total: 7, xp: 120 },
  ],
  rewards: [
    { name: "Leaf Scout", nameZh: "葉探", emoji: "🍃" },
    { name: "Bark Reader", nameZh: "樹皮讀家", emoji: "🪵" },
    { name: "Canopy Climber", nameZh: "樹冠攀登者", emoji: "🌳" },
  ],
};

TW.meetups = [
  {
    title: "Sunrise on Sharp Peak",
    titleZh: "蚺蛇尖日出",
    date: "Sat, Jun 15 · 05:30",
    dateZh: "6 月 15 日（六）· 05:30",
    place: "Sai Kung East",
    placeZh: "西貢東",
    spots: "4",
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=600&q=80",
  },
  {
    title: "Family-Friendly Tai Tam",
    titleZh: "親子大潭行",
    date: "Sun, Jun 16 · 09:00",
    dateZh: "6 月 16 日（日）· 09:00",
    place: "HK Island",
    placeZh: "香港島",
    spots: "8",
    image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=600&q=80",
  },
  {
    title: "Lantau Peak Night Hike",
    titleZh: "鳳凰山夜行",
    date: "Fri, Jun 21 · 18:00",
    dateZh: "6 月 21 日（五）· 18:00",
    place: "Lantau",
    placeZh: "大嶼山",
    spots: "2",
    image: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=600&q=80",
  },
];


/** Articles from blog.trailwatch.hk (WordPress REST API) */
TW.articleCategories = [
  { id: "all", labelKey: "article_cat_all" },
  { id: "blog", labelKey: "article_cat_blog" },
  { id: "features", labelKey: "article_cat_features" },
  { id: "hiking-tips", labelKey: "article_cat_hiking_tips" },
  { id: "activity-review", labelKey: "article_cat_activity_review" },
  { id: "whats-new", labelKey: "article_cat_whats_new" },
];

TW.articles = [
  {
    id: "blog-8780",
    sourceId: 8780,
    category: "features",
    featured: true,
    title: "Japanese YouTuber Kato Masahiko on Navigating Hong Kong Trails Like a Local",
    titleZh: "【老外眼中的香港郊野】專訪「MASAまさ千里走」YouTube版主加藤雅彥 拍地道跑山片配廣東話",
    excerpt: "Text: Teddy LAW（Parks and Trails） Photography: Kato Masahiko（MASAまさ千里走） Mr Kato Masahiko’s first impression of Hong Kong was of “a city full of energy”. While gazing up at the towering International Finance Centre, he couldn’t help but dream about establishing his own company. On",
    excerptZh: "文：Teddy LAW（Parks and Trails） 圖：加藤雅彥（MASAまさ千里走） 「活力之城」是他對香港的第一印象。仰望著參天的國際金融中心，他曾憧憬在此創辦一家公司。一年後，他果真實現了這個夢想。 來自日本的加藤雅彥先生，自2005年起不時往返港日兩地工作，直至2018年開始定居香港。加藤不但是一名金融顧問與投資者，也是一名Youtuber。然而，這個影音平台的內容非關投資，而是跑山和跑步的專屬頻道。兩年多前，加藤因看到日本YouTuber一段關於長距離越野跑影片而深受感動，決定開設「MASAまさ千里走」頻道，至今吸引逾3,500人追蹤，",
    date: "2026-07-30",
    author: "bonnie",
    image: "https://blog.trailwatch.hk/wp-content/uploads/2026/07/cover-768x512.jpg",
    url: "https://blog.trailwatch.hk/archives/8780",
    urlZh: "https://blog.trailwatch.hk/zh/archives/8778",
    tags: [{ id: "interview", name: "interview", nameZh: "專訪" }, { id: "trail-running", name: "trail running", nameZh: "越野跑" }, { id: "trails", name: "trails", nameZh: "徑道" }],
  },
  {
    id: "blog-8773",
    sourceId: 8773,
    category: "features",
    featured: true,
    title: "Domestic Helper Mary Jane Escalante on Keeping Hong Kong’s Mountains and Beaches Clean",
    titleZh: "【老外眼中的香港郊野】專訪外傭Mary Jane Escalante 愛上行山不忘淨山淨灘",
    excerpt: "Text: Fiona Leung (Former features reporter) Photography: Mary Jane Escalante Many people took up hiking during the COVID-19 pandemic, and domestic helpers were no exception. Mary Jane Escalante (Jane), who came to Hong Kong from the Philippines 20 years ago, had never tried hiki",
    excerptZh: "文：梁慧琳（前副刊專題記者）圖：Mary Jane Escalante 很多人在新冠疫情期間愛上行山，外傭也不例外。Mary Jane Escalante（Jane）20年前從菲律賓來港，之前在家鄉從未試過行山的她，發現了香港之美，展開在香港的自然之旅，改變她的人生。除了享受自然之美，她亦十分愛護大自然，上山下海時不忘淨山及淨灘。 採訪當天，Jane雖然不是穿運動裝，但她坐下來仍散發無窮活力，沒想過她已近50歲。原以為她年輕時已鍛鍊出運動細胞，誰知她在菲律賓從未行山，也沒有運動習慣，直至在2020年1月才與山結緣。她興高采烈地說：「政府呼籲外傭在休息日盡",
    date: "2026-07-30",
    author: "bonnie",
    image: "https://blog.trailwatch.hk/wp-content/uploads/2026/07/PHOTO-2025-10-02-07-59-43-1-768x512.jpg",
    url: "https://blog.trailwatch.hk/archives/8773",
    urlZh: "https://blog.trailwatch.hk/zh/archives/8769",
    tags: [{ id: "conservation", name: "conservation", nameZh: "保育" }, { id: "interview", name: "interview", nameZh: "專訪" }, { id: "community", name: "community", nameZh: "社群" }],
  },
  {
    id: "blog-8763",
    sourceId: 8763,
    category: "features",
    title: "HK4TUC Finisher Tom Robertshaw on Trail Racing as Meditation and Self-Reflection",
    titleZh: "【老外眼中的香港郊野】專訪四徑完成者Tom Robertshaw 視山賽為冥想和自省之旅",
    excerpt: "Text: Cheng Mei Chi (Media Veteran) The documentary ‘Four Trails’ was released in Hong Kong in late 2024, striking a chord with seasoned and casual hikers alike. Tom Robertshaw appeared in the documentary. What is less know is that in 2017, Tom became the first Hong Kong Four Tra",
    excerptZh: "文：鄭美姿（資深傳媒工作者） 《香港四徑大步走》紀錄片於2024年尾在香港上映，在山系人非山系人、運動人非運動人之間，都取得很大的共鳴和回響。Tom Robertshaw亦曾在紀錄片中現身，有所不知的是，於2017年，他是第一位打破大會紀錄以少於60小時完賽（53小時）的四徑參與者。當人人都驚嘆於298公里的距離有幾長時，Tom卻直言，跑四徑的重點不是你跑得有幾遠，而是你在旅程當中，把自己挖掘得有幾深。 Tom是英國人，2009年來港9個月後，對此地一見鍾情。他說，在英國的Tom討厭跑步，更莫說跑山，但他喜歡旅遊，早於18歲中學一畢業，他便設計了一個孭背",
    date: "2026-07-30",
    author: "bonnie",
    image: "https://blog.trailwatch.hk/wp-content/uploads/2026/07/cover-1-768x512.jpg",
    url: "https://blog.trailwatch.hk/archives/8763",
    urlZh: "https://blog.trailwatch.hk/zh/archives/8742",
    tags: [{ id: "events", name: "events", nameZh: "活動" }, { id: "trail-running", name: "trail running", nameZh: "越野跑" }, { id: "interview", name: "interview", nameZh: "專訪" }, { id: "trails", name: "trails", nameZh: "徑道" }],
  },
  {
    id: "blog-1529",
    sourceId: 1529,
    category: "hiking-tips",
    title: "【Myths of Mountains】 How to Stay Chill on Trails (+ 3 Shady Routes Recommendation)",
    titleZh: "【行山迷思】炎炎夏日 係咪唔可以行山？附夏日短途行山路線推介",
    excerpt: "There is a lot to pay attention to when hiking in summer, not only on the preparation of equipment, but also special route planning is needed. A few routes suitable for hot summer days is recommended for this issue.",
    excerptZh: "夏天行山需要注意的事項相對較多，在行程計劃及裝備上都應加倍準備。TrailWatch推介三段適合夏天慢行、短程而且沿路有林蔭路徑的路線給各位山友參考。",
    date: "2026-06-30",
    author: "admin",
    image: "https://blog.trailwatch.hk/wp-content/uploads/2026/01/201907_newsletter_cover_01b-1-768x512.jpg",
    url: "https://blog.trailwatch.hk/archives/1529",
    urlZh: "https://blog.trailwatch.hk/zh/archives/1524",
    tags: [{ id: "safety", name: "safety", nameZh: "安全" }, { id: "summer", name: "summer hiking", nameZh: "夏日行山" }, { id: "weather", name: "weather", nameZh: "天氣" }, { id: "gear", name: "gear", nameZh: "裝備" }, { id: "trails", name: "trails", nameZh: "徑道" }],
  },
  {
    id: "blog-1496",
    sourceId: 1496,
    category: "hiking-tips",
    title: "【Myths of Mountain】How to Handle Thunderstorms While Hiking in Summer?",
    titleZh: "【行山迷思】夏日行山遇雷暴，留喺「邊樹」安全啲？",
    excerpt: "When hiking in summer, the weather can turn from sunny to stormy in minutes. How should prepare for hiking in summer? What should do if we encounter thunderstorm during a hike?",
    excerptZh: "【行山迷思】行山遇雷暴，留喺「邊樹」安全啲? 夏天的天氣變化很大，可以由晴朗的天氣一瞬間變為雷電交加，活動前應該要怎樣準備？若進行行山活動時才遇上雷暴，又應如何應變？",
    date: "2026-06-27",
    author: "admin",
    image: "https://blog.trailwatch.hk/wp-content/uploads/2026/01/201906_newsletter_cover_02-1-768x512.jpg",
    url: "https://blog.trailwatch.hk/archives/1496",
    urlZh: "https://blog.trailwatch.hk/zh/archives/1493",
    tags: [{ id: "safety", name: "safety", nameZh: "安全" }, { id: "summer", name: "summer hiking", nameZh: "夏日行山" }, { id: "weather", name: "weather", nameZh: "天氣" }, { id: "trails", name: "trails", nameZh: "徑道" }],
  },
  {
    id: "blog-8081",
    sourceId: 8081,
    category: "activity-review",
    title: "Backyard Life · Duckling Journal Trial Play Day Review",
    titleZh: "【後山生活・鴨遊記】將軍澳鴨仔山試玩日活動回顧",
    excerpt: "On 24 May (Sunday), we co-organised the Backyard Life · Duckling Journal Trial Play Day in collaboration with the Vocational Training Council (VTC) and CityUnseen. Duckling Hill backyard trail in Tseung Kwan O is a trail with a unique character. As it is situated near several pub",
    excerptZh: "5月24日（星期日），我們與職業訓練局（VTC）及香港建解（CityUnseen）合辦了【後山生活・鴨遊記】屋企後山試玩日。將軍澳鴨仔山是一條極具特色的山徑，鄰近將軍澳坑口多個屋苑，因而成為附近居民日常休憩與運動的熱門地點。正因如此，山徑內蘊藏了不少居民自發搭建的設施，以及展現其生活痕跡的物品。我們希望透過導賞團及任務形式的活動，讓參加者更深入認識鴨仔山，了解它與周邊地方的連結，並發掘山上獨特的設施與景色，從而令大家更懂得珍惜香港的後山小徑。 是次活動共吸引十多位青少年及附近居民參與。參加者不僅加深了對鴨仔山歷史的認識，也體會到行山除了常規的運動方式外，",
    date: "2026-06-25",
    author: "admin",
    image: "https://blog.trailwatch.hk/wp-content/uploads/2026/06/1-768x512.jpg",
    url: "https://blog.trailwatch.hk/archives/8081",
    urlZh: "https://blog.trailwatch.hk/zh/archives/8050",
    tags: [{ id: "events", name: "events", nameZh: "活動" }, { id: "weather", name: "weather", nameZh: "天氣" }, { id: "backyard", name: "backyard trails", nameZh: "後園徑" }, { id: "trails", name: "trails", nameZh: "徑道" }],
  },
  {
    id: "blog-8070",
    sourceId: 8070,
    category: "features",
    featured: true,
    title: "Trails for All: Hiking with Wheelchair Users",
    titleZh: "無障礙郊遊體驗 輪椅使用者重拾自然樂趣",
    excerpt: "Mr. and Mrs. Chu live in Ma On Shan, and while the country park is right near their home, they hesitated to visit. As they are both wheelchair users, hiking has never been easy or relaxing. “If it weren’t for our daughter and son-in-law, we would never have thought of visiting a ",
    excerptZh: "朱生和朱太家住馬鞍山，馬鞍山郊野公園近在眼前，卻總感到遙不可及。他倆都是輪椅使用者，郊遊從來都不是容易或輕鬆的事。 「如果不是女兒和女婿幫助我們，我們完全不會想去行郊野公園或者家樂徑。」朱生無奈說。有次，女兒、女婿嘗試帶他們行馬鞍山家樂徑。這條熱門的入門級山徑全長約半公里，需時約半小時，適合一家大小及初行山人士，可飽覽沙田、馬鞍山至大埔的景色。可是，山徑梯級密集，平時用的手動輪椅根本過不了，他倆只能改用拐杖，在家人攙扶下慢慢行，「所用時間比一般人多7、8倍，很吃力。」朱生描述當時情形。 常言香港的城市與山野就在「咫尺之間」；然而，這「咫尺之隔」，對輪椅使",
    date: "2026-06-25",
    author: "admin",
    image: "https://blog.trailwatch.hk/wp-content/uploads/2022/06/cover-768x512.jpg",
    url: "https://blog.trailwatch.hk/archives/8070",
    urlZh: "https://blog.trailwatch.hk/zh/archives/8035",
    tags: [{ id: "accessible", name: "accessible hiking", nameZh: "無障礙" }, { id: "events", name: "events", nameZh: "活動" }, { id: "weather", name: "weather", nameZh: "天氣" }, { id: "trails", name: "trails", nameZh: "徑道" }],
  },
  {
    id: "blog-1569",
    sourceId: 1569,
    category: "hiking-tips",
    title: "【Myths of Mountains】Feeling Sick When Hiking: Heat Exhaustion or Heat Stroke?(+3 Reservoir Routes Recommendation)",
    titleZh: "【行山迷思】行山唔舒服 究竟點分中暑定熱衰竭？附夏日水塘路線推介",
    excerpt: "What should you do when you have heat exhaustion or heat stroke in hot summer? We discuss this month the differences between the two and the ways to prevent it. We are also recommending three routes around the reservoirs for everyone to enjoy hiking in summer.",
    excerptZh: "夏天行山行到中途不適，應如何處理？是次TrailWatch推介炎夏適宜，三條平坦易行的水塘路徑，希望大家可以享受夏天的行山樂趣。",
    date: "2026-06-15",
    author: "admin",
    image: "https://blog.trailwatch.hk/wp-content/uploads/2026/01/201908_newsletter_cover_02-1-768x512.jpg",
    url: "https://blog.trailwatch.hk/archives/1569",
    urlZh: "https://blog.trailwatch.hk/zh/archives/1563",
    tags: [{ id: "safety", name: "safety", nameZh: "安全" }, { id: "summer", name: "summer hiking", nameZh: "夏日行山" }, { id: "trails", name: "trails", nameZh: "徑道" }],
  },
  {
    id: "blog-2188",
    sourceId: 2188,
    category: "hiking-tips",
    title: "Hiking in Hot Weather: How to Prevent Heat-related illnesses",
    titleZh: "夏日郊遊安全小貼士（下）：炎夏行山途中，如何避免不適？",
    excerpt: "Tips and Tools to maximise your hiking experience in Hong Kong.",
    excerptZh: "上回提到夏日郊遊出發前的準備，今次分享一下在炎熱天氣下郊遊需注意的事項：",
    date: "2026-06-15",
    author: "admin",
    image: "https://blog.trailwatch.hk/wp-content/uploads/2026/01/2020_0608_FB_01-1-768x768.jpg",
    url: "https://blog.trailwatch.hk/archives/2188",
    urlZh: "https://blog.trailwatch.hk/zh/archives/2185",
    tags: [{ id: "safety", name: "safety", nameZh: "安全" }, { id: "summer", name: "summer hiking", nameZh: "夏日行山" }, { id: "weather", name: "weather", nameZh: "天氣" }, { id: "trails", name: "trails", nameZh: "徑道" }],
  },
  {
    id: "blog-2174",
    sourceId: 2174,
    category: "hiking-tips",
    title: "Hiking in Hot Weather: How to Plan Your Trip and Pack Your Bag",
    titleZh: "夏日郊遊安全小貼士 （上）：炎夏郊遊出發前的準備",
    excerpt: "Tips and Tools to maximise your hiking experience in Hong Kong.",
    excerptZh: "如果大家想在炎熱天氣下行山，就要注意以下幾個安全貼士了",
    date: "2026-05-28",
    author: "admin",
    image: "https://blog.trailwatch.hk/wp-content/uploads/2026/01/2020_0519_FB_01-01-1-768x768.jpg",
    url: "https://blog.trailwatch.hk/archives/2174",
    urlZh: "https://blog.trailwatch.hk/zh/archives/2171",
    tags: [{ id: "safety", name: "safety", nameZh: "安全" }, { id: "summer", name: "summer hiking", nameZh: "夏日行山" }, { id: "weather", name: "weather", nameZh: "天氣" }, { id: "gear", name: "gear", nameZh: "裝備" }, { id: "trails", name: "trails", nameZh: "徑道" }],
  },
  {
    id: "blog-7238",
    sourceId: 7238,
    category: "activity-review",
    title: "Hong Kong Island Coastal Trail Challenge 2025/26 Closing & Award Ceremony",
    titleZh: "香港島環島徑挑戰2025/26 閉幕暨頒獎典禮",
    excerpt: "Hong Kong Island Coastal Trail Challenge 2025/26 Closing & Award Ceremony was successfully held at Museum Cafe8!",
    excerptZh: "香港島環島徑挑戰2025/26閉幕暨頒獎典禮，已於Museum Cafe8順利舉行。",
    date: "2026-02-20",
    author: "admin",
    image: "https://blog.trailwatch.hk/wp-content/uploads/2026/03/DSC_1679-1-768x512.jpg",
    url: "https://blog.trailwatch.hk/archives/7238",
    urlZh: "https://blog.trailwatch.hk/zh/archives/7230",
    tags: [{ id: "events", name: "events", nameZh: "活動" }, { id: "hk-island", name: "Hong Kong Island", nameZh: "香港島" }, { id: "trails", name: "trails", nameZh: "徑道" }],
  },
  {
    id: "blog-7211",
    sourceId: 7211,
    category: "features",
    title: "Trails in Transition",
    titleZh: "變化中的路線",
    excerpt: "Each time we tread the hiking trails, the routes, trail conditions, and scenery change. For those familiar with nature, you may even be able to catch a glimpse of the traces of change over time.",
    excerptZh: "「路係人行出嚟嘅。」走着走着，路線、路況與景觀也有轉變。熟悉山路者，或許可以邊走邊察覺到時移勢易的痕跡。",
    date: "2026-02-20",
    author: "admin",
    image: "https://blog.trailwatch.hk/wp-content/uploads/2026/03/%E7%B4%85%E8%8A%B1%E5%B6%BA1_20251125_151932-1-768x576.jpg",
    url: "https://blog.trailwatch.hk/archives/7211",
    urlZh: "https://blog.trailwatch.hk/zh/archives/7222",
    tags: [{ id: "trails", name: "trails", nameZh: "徑道" }, { id: "interview", name: "interview", nameZh: "專訪" }],
  },
  {
    id: "blog-7189",
    sourceId: 7189,
    category: "whats-new",
    featured: true,
    title: "TrailWatch Revamp Upgrade Announcement",
    titleZh: "TrailWatch 更新：新版本面世通知",
    excerpt: "Our team is currently working with our developer on a range of updates to the website and app.",
    excerptZh: "TrailWatch 團隊正與開發人員合作，為網站及應用程式進行一系列更新。",
    date: "2025-12-30",
    author: "admin",
    image: "https://blog.trailwatch.hk/wp-content/uploads/2026/03/TrailWatch-%E6%9B%B4%E6%96%B0%EF%BC%9A%E6%96%B0%E7%89%88%E9%9D%A2%E9%9D%A2%E4%B8%96%E9%80%9A%E7%9F%A5-TrailWatch-Revamp-Upgrade-Announcement-1-1-768x284.png",
    url: "https://blog.trailwatch.hk/archives/7189",
    urlZh: "https://blog.trailwatch.hk/zh/archives/7187",
    tags: [{ id: "app", name: "app", nameZh: "應用程式" }, { id: "community", name: "community", nameZh: "社群" }],
  },
  {
    id: "blog-7185",
    sourceId: 7185,
    category: "activity-review",
    title: "Nature and Technology: Accessible Hiking Workshop (Session 5) Event Recap",
    titleZh: "「無障礙郊遊工作坊（第五節）」活動回顧",
    excerpt: "Sponsored by “Operation Santa Claus,” the fifth Accessible Hiking Workshop was successfully held on 22 October 2025. Despite a sudden cold snap before the event, it still attracted two wheelchair users, 12 elderly participants, and 16 volunteers from Hong Kong Baptist University.",
    excerptZh: "由「愛心聖誕大行動」捐助的「無障礙郊遊工作坊」第五節已於2025年10月22日在東蒲順利舉行。儘管活動前夕前天氣急速變冷，活動仍吸引2位輪椅使用者、12位長者，以及16位來自浸會大學嘅義工出席活動。",
    date: "2025-11-17",
    author: "admin",
    image: "https://blog.trailwatch.hk/wp-content/uploads/2026/03/Acc202511_01-1-768x512.jpg",
    url: "https://blog.trailwatch.hk/archives/7185",
    urlZh: "https://blog.trailwatch.hk/zh/archives/7178",
    tags: [{ id: "accessible", name: "accessible hiking", nameZh: "無障礙" }, { id: "events", name: "events", nameZh: "活動" }, { id: "weather", name: "weather", nameZh: "天氣" }],
  },
  {
    id: "blog-7171",
    sourceId: 7171,
    category: "features",
    title: "Hear Us Out: This is What Hiking Safety is All About",
    titleZh: "收到收唔到 行山安全要知道",
    excerpt: "As the weather cools and hiking season begins, more hikers are heading to the mountains. In 2024, the Fire Services Department responded to 588 mountain rescue incidents, which resulted in 345 people injured and 15 fatalities. Although these numbers show a slight decrease compare",
    excerptZh: "隨着天氣漸涼、行山季開始，山上的行山客漸多。2024年，消防處接獲588宗攀山救援事故，其中有345人受傷，15人意外身亡。儘管數字相比2022及2023年稍有下降，但依然可觀。行山必須注意安全，在此簡介數項注意事項。最後為大家介紹三條路線，希望大家可以安全地享受今個行山季！",
    date: "2025-11-17",
    author: "admin",
    image: "https://blog.trailwatch.hk/wp-content/uploads/2026/03/FS_202511_01-1-768x512.jpg",
    url: "https://blog.trailwatch.hk/archives/7171",
    urlZh: "https://blog.trailwatch.hk/zh/archives/7154",
    tags: [{ id: "safety", name: "safety", nameZh: "安全" }, { id: "weather", name: "weather", nameZh: "天氣" }, { id: "trails", name: "trails", nameZh: "徑道" }],
  },
  {
    id: "blog-7137",
    sourceId: 7137,
    category: "activity-review",
    title: "Nature and Technology: Accessible Hiking Workshop (Session 3 and 4) Event Recap",
    titleZh: "「無障礙郊遊工作坊（第三及四節）」圓滿結束 探索自然無界限",
    excerpt: "Sponsored by “Operation Santa Claus,” the third and fourth session of the Accessible Hiking Workshops were successfully held on July 17 and August 13, 2025, respectively. The two sessions attracted a total of 8 wheelchair users and 52 elderly participants to explore the joys and ",
    excerptZh: "由「愛心聖誕大行動」捐助的「無障礙郊遊工作坊」第三及四節已分別於2025年7月17日及8月13日在東蒲順利舉行。兩節活動共吸引8位輪椅使用者及52位長者參與，一同探索無障礙郊遊的樂趣與可能性。",
    date: "2025-08-19",
    author: "admin",
    image: "https://blog.trailwatch.hk/wp-content/uploads/2026/03/WC_202508_01-1-768x512.jpg",
    url: "https://blog.trailwatch.hk/archives/7137",
    urlZh: "https://blog.trailwatch.hk/zh/archives/7130",
    tags: [{ id: "accessible", name: "accessible hiking", nameZh: "無障礙" }, { id: "events", name: "events", nameZh: "活動" }],
  },
  {
    id: "blog-7123",
    sourceId: 7123,
    category: "features",
    title: "Train in Nature: 3 Outdoor Gyms to Improve Fitness",
    titleZh: "邊行山邊健身：户外健身室三選",
    excerpt: "Heroes in martial arts novels often retreat to mountains to train, and subsequently emerge with extraordinary skills. But did you know, countryside locations for physical training not only exist in the fictional world, but can also be found in Hong Kong’s nature? Here, TrailWatch",
    excerptZh: "讀武俠小説時常見英雄人物歸隱深山修煉武功，練成驚為天人的獨門秘技。但你又是否知道香港的郊野中也有修身健體之所？TrailWatch 為大家推介三條郊野健身路線，並邀請到來自瑞典的健身導師兼業餘應用程式設計師 Demir Bircan 指導。",
    date: "2025-08-19",
    author: "admin",
    image: "https://blog.trailwatch.hk/wp-content/uploads/2026/03/FS_202508_01-1-768x512.jpg",
    url: "https://blog.trailwatch.hk/archives/7123",
    urlZh: "https://blog.trailwatch.hk/zh/archives/7106",
    tags: [{ id: "app", name: "app", nameZh: "應用程式" }, { id: "fitness", name: "fitness", nameZh: "健身" }, { id: "trails", name: "trails", nameZh: "徑道" }],
  },
  {
    id: "blog-7089",
    sourceId: 7089,
    category: "features",
    featured: true,
    title: "What We Can Learn From a Decade of Hiking Records",
    titleZh: "十年行山數據之觀察",
    excerpt: "In the past ten years, our 200,000+ TrailWatch users recorded over 1 million activities. Recorded routes were over 1.2 million kilometers long, and activity records totalled over 7.5 million hours. TrailWatch’s tenth anniversary is the perfect chance for us to take a look at all ",
    excerptZh: "十年以來，超過20萬名TrailWatch用户一共記錄了逾100萬項活動，路線總長接近120萬公里，活動記錄合共超過750萬小時。藉着十週年的機會，我們分析了十年來的活動記錄，看看香港行山風氣的變化。",
    date: "2025-06-24",
    author: "admin",
    image: "https://blog.trailwatch.hk/wp-content/uploads/2026/03/TW-202506_Cover_logo-1-768x432.jpg",
    url: "https://blog.trailwatch.hk/archives/7089",
    urlZh: "https://blog.trailwatch.hk/zh/archives/7082",
    tags: [{ id: "trails", name: "trails", nameZh: "徑道" }, { id: "data", name: "data insights", nameZh: "數據洞察" }],
  },
  {
    id: "blog-7068",
    sourceId: 7068,
    category: "blog",
    title: "Findings from the TrailWatch Newsletter Reader Survey",
    titleZh: "TrailWatch 通訊讀者問卷結果統計",
    excerpt: "We reached out to our users this April and May through our social media and e-newsletter to invite them to fill out an anonymous survey, in order to learn more about each user, and better understand users’ hiking habits and the issues regarding country parks and trails they are c",
    excerptZh: "我們於今年4至5月間透過社交媒體及電郵通訊邀請讀者填寫不記名問卷，了解用户的遠足習慣及關注的郊野議題。",
    date: "2025-06-17",
    author: "admin",
    image: "https://blog.trailwatch.hk/wp-content/uploads/2026/03/TW-survey-newsletter-graphic-768x576.png",
    url: "https://blog.trailwatch.hk/archives/7068",
    urlZh: "https://blog.trailwatch.hk/zh/archives/7074",
    tags: [{ id: "community", name: "community", nameZh: "社群" }, { id: "trails", name: "trails", nameZh: "徑道" }],
  },
  {
    id: "blog-7062",
    sourceId: 7062,
    category: "activity-review",
    title: "Accessible Hiking Workshop (Session 2) Event Recap",
    titleZh: "「無障礙郊遊工作坊（第二節）」圓滿結束 攜手共創包容戶外體驗",
    excerpt: "Sponsored by “Operation Santa Claus,” the 2nd session of the Accessible Hiking Workshop was successfully held on 16 May at Tung Po. The event brought together 6 wheelchair users, over 10 elderly participants, and 20 student volunteers from Hong Kong Baptist University to explore ",
    excerptZh: "由「愛心聖誕大行動」捐助的無障礙郊遊工作坊（第二節）已於2025年5月16日在東蒲順利舉行。本次活動共吸引六位輪椅使用者、十多位長者，以及二十位香港浸會大學學生義工共同參與，攜手探索無障礙郊遊的樂趣與可能性。",
    date: "2025-06-17",
    author: "admin",
    image: "https://blog.trailwatch.hk/wp-content/uploads/2026/03/202506_acc_01-1-768x512.jpg",
    url: "https://blog.trailwatch.hk/archives/7062",
    urlZh: "https://blog.trailwatch.hk/zh/archives/7055",
    tags: [{ id: "accessible", name: "accessible hiking", nameZh: "無障礙" }, { id: "events", name: "events", nameZh: "活動" }],
  },
];

(function tagArticlePlaces() {
  const map = {
    "blog-8780": { district: "hk-island" },
    "blog-8773": { district: "sai-kung" },
    "blog-8763": { district: "lantau", routeId: "lantau-trail-sections-1-12" },
    "blog-1529": { district: "hk-island", routeId: "dragons-back" },
    "blog-1496": { district: "sai-kung" },
    "blog-8081": { district: "sai-kung" },
    "blog-8070": { district: "sha-tin" },
    "blog-1569": { district: "sha-tin", routeId: "lui-kung-tin-to-ho-pui" },
    "blog-2188": { district: "hk-island" },
    "blog-2174": { district: "hk-island" },
    "blog-7238": { district: "hk-island", routeId: "harbourfront-coastal-trail-yue-yi-ching-sha" },
    "blog-7211": { district: "sai-kung", routeId: "tai-long-sai-wan-ham-tin-chek-keng" },
    "blog-7185": { district: "kowloon" },
    "blog-7171": { district: "sai-kung", routeId: "maclehose-trail-section-1" },
    "blog-7137": { district: "kowloon" },
    "blog-7123": { district: "kowloon", routeId: "sau-mau-ping-loop" },
    "blog-7089": { district: "hk-island", routeId: "dragons-back" },
    "blog-7062": { district: "kowloon" },
  };
  (TW.articles || []).forEach((a) => {
    const extra = map[a.id];
    if (extra) Object.assign(a, extra);
  });
})();

TW.articleCategoryLabel = function (categoryId) {
  const key = ({
    all: "article_cat_all",
    blog: "article_cat_blog",
    features: "article_cat_features",
    "hiking-tips": "article_cat_hiking_tips",
    "activity-review": "article_cat_activity_review",
    "whats-new": "article_cat_whats_new",
  })[categoryId];
  return key ? TW.t(key) : categoryId;
};

TW.articleDateValue = function (a) {
  const raw = (a && a.date) || "";
  const t = Date.parse(raw);
  return Number.isFinite(t) ? t : 0;
};

TW.getArticles = function (opts) {
  opts = opts || {};
  const cat = opts.category || "all";
  const q = (opts.query || "").trim().toLowerCase();
  const sort = opts.sort === "oldest" ? "oldest" : "newest";
  const zh = TW.getLang && TW.getLang() === "zh";
  const district = opts.district || "all";
  const routeId = opts.routeId || "all";
  const dateFrom = opts.dateFrom ? Date.parse(opts.dateFrom) : null;
  const dateTo = opts.dateTo ? Date.parse(opts.dateTo) : null;
  let list = (TW.articles || []).filter((a) => {
    if (opts.featured && !a.featured) return false;
    if (cat && cat !== "all" && a.category !== cat) return false;
    if (district && district !== "all") {
      const trail = a.routeId ? (TW.trails || []).find((t) => t.id === a.routeId) : null;
      const area = a.district || (trail && trail.district);
      if (area !== district) return false;
    }
    if (routeId && routeId !== "all" && a.routeId !== routeId) return false;
    const ts = TW.articleDateValue(a);
    if (dateFrom != null && Number.isFinite(dateFrom) && ts < dateFrom) return false;
    if (dateTo != null && Number.isFinite(dateTo) && ts > dateTo + 86400000 - 1) return false;
    if (!q) return true;
    const title = zh ? a.titleZh : a.title;
    const excerpt = zh ? a.excerptZh : a.excerpt;
    const tags = (a.tags || []).map((t) => (zh ? t.nameZh : t.name)).join(" ");
    const blob = [title, excerpt, tags, a.author, a.category, a.district, a.routeId].join(" ").toLowerCase();
    return blob.includes(q);
  });
  list = list.slice().sort((a, b) => {
    const da = TW.articleDateValue(a);
    const db = TW.articleDateValue(b);
    return sort === "oldest" ? da - db : db - da;
  });
  return list;
};

TW.getArticleFilterRoutes = function () {
  const used = {};
  (TW.articles || []).forEach((a) => {
    if (a.routeId) used[a.routeId] = true;
  });
  return (TW.trails || []).filter((t) => t.editorChoice || used[t.id]);
};

TW.getFeaturedArticles = function () {
  return TW.getArticles({ featured: true, sort: "newest" });
};

TW.hkCenter = [22.3193, 114.1694];

/** Demo friends for invites (website) */
TW.demoFriends = [
  {
    id: "friend_elena",
    name: "Elena Green",
    email: "elena@example.com",
    rank: "Rare Hiker Level 3",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
  },
  {
    id: "friend_marcus",
    name: "Marcus Lee",
    email: "marcus@example.com",
    rank: "Trail Friend Level 2",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
  },
  {
    id: "friend_sarah",
    name: "Sarah Chen",
    email: "sarah@example.com",
    rank: "Weekend Walker",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
  },
];

TW.getPlans = function () {
  try {
    return JSON.parse(localStorage.getItem("tw_plans") || "[]");
  } catch (e) {
    return [];
  }
};

TW.ensureDemoPlans = function () {
  if (TW.getPlans().length) return;
  const ids = (TW.trails || []).slice(2, 5).map((t) => t.id).filter(Boolean);
  if (ids.length) TW.setPlans(ids);
};

TW.setPlans = function (ids) {
  localStorage.setItem("tw_plans", JSON.stringify(ids));
};

TW.togglePlan = function (trailId) {
  const plans = TW.getPlans();
  const i = plans.indexOf(trailId);
  if (i >= 0) {
    plans.splice(i, 1);
    TW.setPlans(plans);
    return false;
  }
  plans.push(trailId);
  TW.setPlans(plans);
  return true;
};

TW.isPlanned = function (trailId) {
  return TW.getPlans().indexOf(trailId) >= 0;
};

TW.BOOKMARK_KEY = "tw_bookmarks";

/** True when the page is under /app/ (phone shell). */
TW.isAppShell = TW.isAppShell || function () {
  return /\/app(?:\/|$)/.test((location.pathname || "").replace(/\\/g, "/"));
};
TW.BOOKMARK_TYPES = ["route", "record", "event"];

TW.normalizeBookmark = function (entry) {
  if (typeof entry === "string" && entry) return { id: entry, type: "route" };
  if (!entry || !entry.id) return null;
  const type = entry.type === "records" || entry.type === "record"
    ? "record"
    : entry.type === "events" || entry.type === "event" || entry.type === "group"
      ? "event"
      : entry.type === "routes" || entry.type === "route"
        ? "route"
        : "route";
  return { id: String(entry.id), type: type };
};

TW.getBookmarks = function () {
  try {
    return JSON.parse(localStorage.getItem(TW.BOOKMARK_KEY) || "[]");
  } catch (e) {
    return [];
  }
};

TW.getBookmarkEntries = function () {
  return (TW.getBookmarks() || []).map(TW.normalizeBookmark).filter(Boolean);
};

TW.setBookmarks = function (ids) {
  const normalized = (ids || []).map(TW.normalizeBookmark).filter(Boolean);
  localStorage.setItem(TW.BOOKMARK_KEY, JSON.stringify(normalized));
};

TW.ensureDemoBookmarks = function () {
  let entries = TW.getBookmarkEntries();
  let seeded = false;
  try {
    seeded = !!localStorage.getItem("tw_bm_seed_v2");
  } catch (e) {}

  if (!entries.length) {
    (TW.trails || []).slice(0, 3).forEach((t) => {
      if (t && t.id) entries.push({ id: t.id, type: "route" });
    });
  }

  if (!seeded) {
    if (!entries.some((e) => e.type === "record")) {
      (TW.records || []).slice(0, 2).forEach((r) => {
        if (r && r.id) entries.push({ id: r.id, type: "record" });
      });
    }
    if (!entries.some((e) => e.type === "event")) {
      entries.push({ id: "meetup_0", type: "event" });
      entries.push({ id: "meetup_1", type: "event" });
    }
    try {
      localStorage.setItem("tw_bm_seed_v2", "1");
    } catch (e) {}
  }

  TW.setBookmarks(entries);
};

TW.guessDistrict = function (item) {
  if (!item) return "";
  if (item.district) return item.district;
  const s = [item.id, item.title, item.titleZh, item.place, item.placeZh, item.snippet, item.snippetZh]
    .filter(Boolean)
    .join(" ")
    .toLowerCase();
  if (/lantau|鳳|大嶼|mui wo|tung chung|fan lau/.test(s)) return "lantau";
  if (/sai kung|sai wan|ham tin|chek keng|tai long|sharp peak|蚺蛇|西貢|大浪/.test(s)) return "sai-kung";
  if (/wilson|pat sin|tai po|kadoorie|八仙|衛奕信|大埔/.test(s)) return "tai-po";
  if (/kam shan|kwai|金山|葵涌/.test(s)) return "tsuen-wan";
  if (/maclehose|麥理浩|needle|荃灣|tsuen/.test(s)) return "tsuen-wan";
  if (/harbour|peak|aberdeen|dragon|港島|龍脊|太平|香港島/.test(s)) return "hk-island";
  if (/kowloon|sau mau|prince edward|kwun tong|九龍/.test(s)) return "kowloon";
  if (/sha tin|沙田/.test(s)) return "sha-tin";
  if (/tuen mun|屯門/.test(s)) return "tuen-mun";
  if (/north|北區/.test(s)) return "north";
  return "";
};

TW.itemTimestamp = function (item) {
  if (!item) return null;
  const raw = item.startedAt || item.endedAt || item.iso || item.date || item.when || "";
  if (!raw) return null;
  if (typeof TW.parseDateValue === "function") {
    const ts = TW.parseDateValue(raw);
    if (ts) return ts;
  }
  const t = Date.parse(raw);
  if (Number.isFinite(t)) return t;
  const zh = /(\d{4})年(\d{1,2})月(\d{1,2})/.exec(String(raw));
  if (zh) return Date.parse(zh[1] + "-" + String(zh[2]).padStart(2, "0") + "-" + String(zh[3]).padStart(2, "0"));
  return null;
};

TW.matchesProfileFilters = function (item, opts) {
  opts = opts || {};
  const q = String(opts.q || "").trim().toLowerCase();
  if (q) {
    const hay = [item.id, item.title, item.titleZh, item.place, item.placeZh, item.snippet, item.snippetZh, item.desc, item.descZh, item.name]
      .filter(Boolean)
      .join(" ")
      .toLowerCase();
    if (hay.indexOf(q) < 0) return false;
  }
  if (opts.district) {
    const d = TW.guessDistrict(item);
    if (d !== opts.district) return false;
  }
  if (opts.from || opts.to) {
    const ts = TW.itemTimestamp(item);
    if (ts != null) {
      if (opts.from) {
        const fromTs = Date.parse(opts.from);
        if (Number.isFinite(fromTs) && ts < fromTs) return false;
      }
      if (opts.to) {
        const toTs = Date.parse(opts.to + "T23:59:59");
        if (Number.isFinite(toTs) && ts > toTs) return false;
      }
    }
  }
  return true;
};

TW.districtSelectHtml = function (id) {
  const opts = [`<option value="">${TW.t("all_districts")}</option>`]
    .concat((TW.districts || []).map((d) => `<option value="${d.id}">${TW.districtName(d.id)}</option>`));
  return `<select class="form-select" id="${id}">${opts.join("")}</select>`;
};

TW.isBookmarked = function (id, type) {
  if (!id) return false;
  const want = TW.normalizeBookmark({ id: id, type: type || "route" });
  if (!want) return false;
  return TW.getBookmarkEntries().some((e) => e.id === want.id && e.type === want.type);
};

TW.toggleBookmark = function (id, type) {
  if (!id) return false;
  const want = TW.normalizeBookmark({ id: id, type: type || "route" });
  if (!want) return false;
  const entries = TW.getBookmarkEntries();
  const i = entries.findIndex((e) => e.id === want.id && e.type === want.type);
  if (i >= 0) {
    entries.splice(i, 1);
    TW.setBookmarks(entries);
    return false;
  }
  entries.push(want);
  TW.setBookmarks(entries);
  return true;
};

/** Resolve bookmarked items for UI (routes, records, group hikes / events). */
TW.resolveBookmarkItems = function () {
  const zh = TW.getLang() === "zh";
  const inApp = typeof TW.isAppShell === "function" ? TW.isAppShell() : /\/app(?:\/|$)/.test((location.pathname || "").replace(/\\/g, "/"));
  return TW.getBookmarkEntries().map((entry) => {
    if (entry.type === "route") {
      const t = (TW.trails || []).find((x) => x.id === entry.id);
      if (!t) return null;
      return {
        type: "route",
        id: t.id,
        title: TW.tt(t, "title"),
        meta: TW.districtName ? TW.districtName(t.district) : "",
        image: t.image || "",
        href: inApp
          ? "route-detail.html?id=" + encodeURIComponent(t.id)
          : "rec-trail.html?id=" + encodeURIComponent(t.id),
      };
    }
    if (entry.type === "record") {
      const rec =
        (TW.records || []).find((x) => x.id === entry.id) ||
        (typeof TW.getHike === "function" ? TW.getHike(entry.id) : null);
      if (!rec) return null;
      const title = TW.tt ? TW.tt(rec, "title") : (zh && rec.titleZh ? rec.titleZh : rec.title);
      return {
        type: "record",
        id: rec.id,
        title: title || entry.id,
        meta: zh && rec.dateZh ? rec.dateZh : (rec.date || rec.distance || ""),
        image: rec.image || (rec.photos && rec.photos[0]) || "",
        href: "record-detail.html?id=" + encodeURIComponent(rec.id),
      };
    }
    if (entry.type === "event") {
      const g = typeof TW.getGroupHike === "function" ? TW.getGroupHike(entry.id) : null;
      const fallbackTitles = {
        meetup_0: { en: "Wilson Trail Section 4 meetup", zh: "衛奕信徑第四段聯誼" },
        meetup_1: { en: "Dragon's Back sunrise hike", zh: "龍脊日出聯誼" },
      };
      const fb = fallbackTitles[entry.id];
      const title = g
        ? (zh && g.titleZh ? g.titleZh : g.title)
        : fb
          ? (zh ? fb.zh : fb.en)
          : entry.id;
      return {
        type: "event",
        id: entry.id,
        title: title,
        meta: TW.t("app_bm_events"),
        image: (g && (g.image || g.cover)) || "",
        href: inApp
          ? "group-detail.html?id=" + encodeURIComponent(entry.id)
          : "group-hike-detail.html?id=" + encodeURIComponent(entry.id),
      };
    }
    return null;
  }).filter(Boolean);
};


TW.galleryCategories = [
  { id: "all", labelKey: "gallery_cat_all" },
  { id: "landscape", labelKey: "gallery_cat_landscape" },
  { id: "wildlife", labelKey: "gallery_cat_wildlife" },
  { id: "trail", labelKey: "gallery_cat_trail" },
  { id: "coastal", labelKey: "gallery_cat_coastal" },
  { id: "community", labelKey: "gallery_cat_community" },
];

/** Public gallery photos (TW + community), with route links and GPS for historical filters */
TW.galleryPhotos = [
  {
    id: "gal_db_2019",
    src: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&q=80",
    date: "2019-10-12",
    category: "landscape",
    description: "Dragon's Back ridge looking east — early autumn haze.",
    descriptionZh: "龍脊東望 — 初秋薄霧。",
    lat: 22.2445,
    lng: 114.2408,
    routeId: "dragons-back",
    recordId: "rec_db_2019",
    user: "TrailWatch",
    source: "tw",
  },
  {
    id: "gal_db_2021",
    src: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800&q=80",
    date: "2021-03-08",
    category: "landscape",
    description: "Same Dragon's Back viewpoint after trail maintenance.",
    descriptionZh: "同一龍脊觀景點，步道維修後。",
    lat: 22.2448,
    lng: 114.2410,
    routeId: "dragons-back",
    recordId: "rec_db_2021",
    user: "TrailWatch",
    source: "tw",
  },
  {
    id: "gal_db_2023",
    src: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=800&q=80",
    date: "2023-11-19",
    category: "landscape",
    description: "Dragon's Back at golden hour — denser shrub cover than 2019.",
    descriptionZh: "龍脊金色時分 — 灌木較 2019 年更茂密。",
    lat: 22.2446,
    lng: 114.2409,
    routeId: "dragons-back",
    recordId: "rec_db_2023",
    user: "TrailWatch",
    source: "tw",
  },
  {
    id: "gal_db_2026",
    src: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&q=80",
    date: "2026-04-02",
    category: "landscape",
    description: "Dragon's Back spring panorama linked to the published route.",
    descriptionZh: "龍脊春日全景，連結已發佈路線。",
    lat: 22.2447,
    lng: 114.2411,
    routeId: "dragons-back",
    recordId: "rec_db_2026",
    user: "TrailWatch",
    source: "tw",
  },
  {
    id: "gal_tl_2018",
    src: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80",
    date: "2018-07-22",
    category: "coastal",
    description: "Tai Long Wan beach before peak weekend crowds.",
    descriptionZh: "大浪灣沙灘 — 旺季人潮前。",
    lat: 22.3950,
    lng: 114.3602,
    routeId: "tai-long-sai-wan-ham-tin-chek-keng",
    recordId: "rec_tl_2018",
    user: "TrailWatch",
    source: "tw",
  },
  {
    id: "gal_tl_2022",
    src: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800&q=80",
    date: "2022-09-14",
    category: "coastal",
    description: "Ham Tin boardwalk and dune edge after typhoon season.",
    descriptionZh: "鹹田棧道與沙丘邊，颱風季後。",
    lat: 22.3952,
    lng: 114.3605,
    routeId: "tai-long-sai-wan-ham-tin-chek-keng",
    recordId: "tai-long-sai-wan",
    user: "Sarah Chen",
    source: "user",
  },
  {
    id: "gal_tl_2026",
    src: "https://images.unsplash.com/photo-1511497584788-876760111969?w=800&q=80",
    date: "2026-08-02",
    category: "coastal",
    description: "Tai Long Sai Wan · Ham Tin · Chek Keng — recent user photo.",
    descriptionZh: "大浪西灣、鹹田灣、赤徑 — 近期用家相片。",
    lat: 22.3948,
    lng: 114.3602,
    routeId: "tai-long-sai-wan-ham-tin-chek-keng",
    recordId: "tai-long-sai-wan",
    user: "Sarah Chen",
    source: "user",
  },
  {
    id: "gal_lantau_2024",
    src: "https://www.trailwatch.hk/uploads/route-activity-photo/63703/1e2cc968-cc75-4ae0-b609-b30a35f764d7.jpg",
    date: "2024-05-18",
    category: "trail",
    description: "Lantau Trail coastal mountain section toward south Lantau.",
    descriptionZh: "鳳凰徑海岸山段，望向南大嶼。",
    lat: 22.2401,
    lng: 113.9570,
    routeId: "lantau-trail-sections-1-12",
    recordId: "lantau-trail-1-12",
    user: "TrailWatch",
    source: "tw",
  },
  {
    id: "gal_lantau_2026",
    src: "https://images.unsplash.com/photo-1551632811-561732d1e5ec?w=800&q=80",
    date: "2026-08-04",
    category: "trail",
    description: "Lantau Trail Sections 1 & 12 — community record photo.",
    descriptionZh: "鳳徑第一、十二段 — 社群記錄相片。",
    lat: 22.2450,
    lng: 113.9650,
    routeId: "lantau-trail-sections-1-12",
    recordId: "lantau-trail-1-12",
    user: "TrailWatch community",
    source: "user",
  },
  {
    id: "gal_mac_2020",
    src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
    date: "2020-12-05",
    category: "trail",
    description: "Maclehose ridgeline winter clarity.",
    descriptionZh: "麥理浩徑山脊冬日能見度佳。",
    lat: 22.4074,
    lng: 114.1052,
    routeId: "maclehose-trail-sections-9-10",
    recordId: "rec_mac_2020",
    user: "TrailWatch",
    source: "tw",
  },
  {
    id: "gal_mac_2026",
    src: "https://www.trailwatch.hk/uploads/route-activity-photo/63703/90f2a883-1bcc-488d-b035-58cd2193b6c2.jpg",
    date: "2026-08-03",
    category: "trail",
    description: "Maclehose Trail Sections 9 & 10 — recent long day.",
    descriptionZh: "麥理浩徑第九、十段 — 近期長途日。",
    lat: 22.4100,
    lng: 114.1150,
    routeId: "maclehose-trail-sections-9-10",
    recordId: "maclehose-9-10",
    user: "TrailWatch community",
    source: "user",
  },
  {
    id: "gal_wild_2025",
    src: "https://images.unsplash.com/photo-1439066615861-d1af74d74000?w=800&q=80",
    date: "2025-02-11",
    category: "wildlife",
    description: "Wild cattle near Kam Shan country paths.",
    descriptionZh: "金山郊野徑附近的野牛。",
    lat: 22.3750,
    lng: 114.1480,
    routeId: "kwai-chung-kam-shan-loop",
    recordId: "kwai-chung-kam-shan",
    user: "金鷹",
    source: "user",
  },
  {
    id: "gal_harbour_2026",
    src: "https://images.unsplash.com/photo-1536599018102-9f803c140fc1?w=800&q=80",
    date: "2026-08-03",
    category: "community",
    description: "Harbourfront Coastal Trail — Yue Yi & Ching Sha segments.",
    descriptionZh: "活力環島長廊：漁怡徑、晴沙徑。",
    lat: 22.2850,
    lng: 114.1550,
    routeId: "harbourfront-coastal-trail-yue-yi-ching-sha",
    recordId: "harbourfront-coastal",
    user: "TrailWatch community",
    source: "user",
  },
  {
    id: "gal_wilson_2024",
    src: "assets/brand/img-hiking.jpg",
    date: "2024-05-11",
    category: "trail",
    description: "Wilson Trail Section 4 near Pat Sin Leng.",
    descriptionZh: "衛奕信徑第四段，八仙嶺附近。",
    lat: 22.4825,
    lng: 114.2180,
    routeId: "lui-kung-tin-to-ho-pui",
    recordId: "wilson-trail-section-4",
    user: "Alex Wong",
    source: "user",
  },
  {
    id: "gal_cleanup_2025",
    src: "assets/brand/img-route.webp",
    date: "2025-11-03",
    category: "community",
    description: "Community cleanup day — before bagging litter at a trail junction.",
    descriptionZh: "社群清潔日 — 在路口裝袋前。",
    lat: 22.3193,
    lng: 114.1694,
    routeId: null,
    recordId: "rec_cleanup_2025",
    user: "TrailWatch",
    source: "tw",
  },
];

TW.galleryDateValue = function (p) {
  const raw = (p && p.date) || "";
  const t = Date.parse(raw);
  return Number.isFinite(t) ? t : 0;
};

TW.haversineKm = function (lat1, lng1, lat2, lng2) {
  const toRad = (d) => (d * Math.PI) / 180;
  const R = 6371;
  const dLat = toRad(lat2 - lat1);
  const dLng = toRad(lng2 - lng1);
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.sin(dLng / 2) * Math.sin(dLng / 2);
  return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
};

TW.getFeaturedGalleryIds = function () {
  try {
    if (typeof CMS !== "undefined" && CMS.getStore) {
      const ids = CMS.getStore().featuredGalleryIds;
      if (Array.isArray(ids) && ids.length) return ids.slice(0, 10);
    }
  } catch (e) {}
  try {
    const raw = localStorage.getItem("tw_featured_gallery");
    if (raw) {
      const ids = JSON.parse(raw);
      if (Array.isArray(ids)) return ids.slice(0, 10);
    }
  } catch (e) {}
  // Default featured (TW historical set + recent highlights)
  return ["gal_db_2026", "gal_tl_2026", "gal_lantau_2026", "gal_mac_2026", "gal_db_2019", "gal_tl_2018", "gal_wild_2025", "gal_harbour_2026"];
};

TW.setFeaturedGalleryIds = function (ids) {
  const next = (ids || []).filter(Boolean).slice(0, 10);
  try {
    localStorage.setItem("tw_featured_gallery", JSON.stringify(next));
  } catch (e) {}
  try {
    if (typeof CMS !== "undefined" && CMS.getStore && CMS.setStore) {
      const store = CMS.getStore();
      store.featuredGalleryIds = next;
      CMS.setStore(store);
    }
  } catch (e) {}
  return next;
};

TW.getGalleryPhotos = function (opts) {
  opts = opts || {};
  const cat = opts.category || "all";
  const q = String(opts.query || "").trim().toLowerCase();
  const sort = opts.sort === "oldest" ? "oldest" : opts.sort === "category" ? "category" : "newest";
  const zh = TW.getLang && TW.getLang() === "zh";
  const dateFrom = opts.dateFrom ? Date.parse(opts.dateFrom) : null;
  const dateTo = opts.dateTo ? Date.parse(opts.dateTo) : null;
  const gpsLat = opts.gpsLat != null && opts.gpsLat !== "" ? Number(opts.gpsLat) : null;
  const gpsLng = opts.gpsLng != null && opts.gpsLng !== "" ? Number(opts.gpsLng) : null;
  const gpsRadius = opts.gpsRadius != null && opts.gpsRadius !== "" ? Number(opts.gpsRadius) : null;
  const useGps = Number.isFinite(gpsLat) && Number.isFinite(gpsLng) && Number.isFinite(gpsRadius) && gpsRadius > 0;

  let list = (TW.galleryPhotos || []).filter((p) => {
    if (opts.featuredOnly) {
      const featured = TW.getFeaturedGalleryIds();
      if (featured.indexOf(p.id) < 0) return false;
    }
    if (opts.excludeFeatured) {
      const featured = TW.getFeaturedGalleryIds();
      if (featured.indexOf(p.id) >= 0) return false;
    }
    if (opts.source && p.source && p.source !== opts.source) return false;
    if (opts.twOnly && p.source !== "tw") return false;
    if (cat && cat !== "all" && p.category !== cat) return false;
    const ts = TW.galleryDateValue(p);
    if (dateFrom != null && Number.isFinite(dateFrom) && ts < dateFrom) return false;
    if (dateTo != null && Number.isFinite(dateTo)) {
      const end = dateTo + 24 * 60 * 60 * 1000 - 1;
      if (ts > end) return false;
    }
    if (useGps) {
      if (p.lat == null || p.lng == null) return false;
      if (TW.haversineKm(gpsLat, gpsLng, p.lat, p.lng) > gpsRadius) return false;
    }
    if (!q) return true;
    const desc = zh ? p.descriptionZh || p.description : p.description;
    const gpsStr = p.lat != null && p.lng != null ? p.lat.toFixed(5) + "," + p.lng.toFixed(5) + " " + p.lat + " " + p.lng : "";
    const blob = [desc, p.category, p.recordId, p.routeId, p.user, p.date, gpsStr, p.id].join(" ").toLowerCase();
    return blob.includes(q);
  });

  list = list.slice().sort((a, b) => {
    if (sort === "category") {
      const c = String(a.category || "").localeCompare(String(b.category || ""));
      if (c) return c;
    }
    const da = TW.galleryDateValue(a);
    const db = TW.galleryDateValue(b);
    return sort === "oldest" ? da - db : db - da;
  });

  if (opts.featuredOnly) {
    const order = TW.getFeaturedGalleryIds();
    list.sort((a, b) => order.indexOf(a.id) - order.indexOf(b.id));
  }
  return list;
};

TW.getFeaturedGalleryPhotos = function () {
  return TW.getGalleryPhotos({ featuredOnly: true });
};

TW.galleryRouteHref = function (p) {
  if (p && p.routeId) {
    const trail = (TW.trails || []).find((t) => t.id === p.routeId);
    if (trail) return "rec-trail.html?id=" + encodeURIComponent(p.routeId);
  }
  if (p && p.recordId) return "record-detail.html?id=" + encodeURIComponent(p.recordId);
  return "explore.html";
};

TW.districtName = function (id) {
  const d = TW.districts.find((x) => x.id === id);
  if (!d) return id;
  return TW.getLang() === "zh" ? d.nameZh : d.name;
};
