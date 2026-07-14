/* CMS shared UI helpers */
function cmsToast(msg) {
  let t = document.getElementById("cmsToast");
  if (!t) {
    t = document.createElement("div");
    t.id = "cmsToast";
    t.className = "cms-toast";
    document.body.appendChild(t);
  }
  t.textContent = msg;
  t.classList.add("show");
  clearTimeout(window._cmsToast);
  window._cmsToast = setTimeout(() => t.classList.remove("show"), 2400);
}

function cmsSidebar(active) {
  return `
  <aside class="cms-sidebar">
    <div class="brand">🌲 TrailWatch CMS</div>
    <a href="dashboard.html" class="${active === "dash" ? "active" : ""}">Dashboard</a>
    <a href="trails.html" class="${active === "trails" ? "active" : ""}">Recommended Trails</a>
    <a href="incidents.html" class="${active === "incidents" ? "active" : ""}">Incident Reports</a>
    <a href="members.html" class="${active === "members" ? "active" : ""}">Members</a>
    <a href="donations.html" class="${active === "donations" ? "active" : ""}">Donations</a>
    <a href="feedback.html" class="${active === "feedback" ? "active" : ""}">Feedback</a>
    <a href="challenges.html" class="${active === "challenges" ? "active" : ""}">Challenges</a>
    <a href="content.html" class="${active === "content" ? "active" : ""}">Site Content</a>
    <div class="side-foot">
      <div style="opacity:.7;margin-bottom:.5rem">Logged in as staff</div>
      <a href="../index.html" target="_blank">View website ↗</a><br/>
      <a href="#" id="cmsLogout">Log out</a>
    </div>
  </aside>`;
}

function cmsInitShell(active) {
  if (!CMS.requireAuth()) return false;
  const shell = document.getElementById("cmsShell");
  if (shell && !shell.dataset.ready) {
    shell.innerHTML = cmsSidebar(active) + '<div class="cms-main" id="cmsMain">' + shell.innerHTML + "</div>";
    shell.className = "cms-shell";
    shell.dataset.ready = "1";
    document.getElementById("cmsLogout").addEventListener("click", (e) => {
      e.preventDefault();
      CMS.logout();
      location.href = "index.html";
    });
  }
  return true;
}

function uid(prefix) {
  return prefix + "_" + Date.now().toString(36) + Math.random().toString(36).slice(2, 6);
}
