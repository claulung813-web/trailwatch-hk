/* Simple CMS rich-text box (titles, bold, italic, font size) */
function cmsSanitizeHtml(html) {
  const allowed = { H1: 1, H2: 1, H3: 1, P: 1, BR: 1, STRONG: 1, B: 1, EM: 1, I: 1, UL: 1, OL: 1, LI: 1, A: 1, SPAN: 1, DIV: 1, FONT: 1 };
  const wrap = document.createElement("div");
  wrap.innerHTML = String(html || "");
  function clean(node) {
    const kids = Array.from(node.childNodes);
    kids.forEach((child) => {
      if (child.nodeType === 3) return;
      if (child.nodeType !== 1) {
        child.remove();
        return;
      }
      const tag = child.tagName;
      if (!allowed[tag]) {
        const frag = document.createDocumentFragment();
        while (child.firstChild) frag.appendChild(child.firstChild);
        node.insertBefore(frag, child);
        child.remove();
        return;
      }
      if (tag === "A") {
        const href = child.getAttribute("href") || "";
        child.removeAttribute("href");
        if (/^https?:\/\//i.test(href) || href.charAt(0) === "/") child.setAttribute("href", href);
        child.setAttribute("rel", "noopener");
        child.setAttribute("target", "_blank");
      }
      if (tag === "SPAN" || tag === "FONT") {
        const size = child.style && child.style.fontSize;
        child.removeAttribute("style");
        child.removeAttribute("class");
        if (size) child.style.fontSize = size;
      } else {
        child.removeAttribute("style");
        child.removeAttribute("class");
      }
      clean(child);
    });
  }
  clean(wrap);
  return wrap.innerHTML;
}

function cmsMountRich(hostId, initialHtml) {
  const host = document.getElementById(hostId);
  host.innerHTML = `
    <div class="cms-rich-bar">
      <button type="button" data-cmd="h2">Title</button>
      <button type="button" data-cmd="h3">Subtitle</button>
      <button type="button" data-cmd="p">Paragraph</button>
      <button type="button" data-cmd="bold"><strong>B</strong></button>
      <button type="button" data-cmd="italic"><em>I</em></button>
      <label class="cms-rich-size">Size
        <select data-size>
          <option value="">—</option>
          <option value="2">Small</option>
          <option value="3">Normal</option>
          <option value="5">Large</option>
          <option value="6">Extra large</option>
        </select>
      </label>
    </div>
    <div class="cms-rich-editor legal-prose" contenteditable="true"></div>`;
  const editor = host.querySelector(".cms-rich-editor");
  editor.innerHTML = initialHtml || "<p></p>";
  host.querySelector(".cms-rich-bar").addEventListener("mousedown", (e) => e.preventDefault());
  host.querySelector(".cms-rich-bar").addEventListener("click", (e) => {
    const btn = e.target.closest("[data-cmd]");
    if (!btn) return;
    editor.focus();
    const cmd = btn.dataset.cmd;
    if (cmd === "h2" || cmd === "h3" || cmd === "p") document.execCommand("formatBlock", false, cmd);
    else document.execCommand(cmd, false, null);
  });
  host.querySelector("[data-size]").addEventListener("change", (e) => {
    const v = e.target.value;
    editor.focus();
    if (v) document.execCommand("fontSize", false, v);
    e.target.value = "";
  });
  return {
    getHtml: function () {
      return cmsSanitizeHtml(editor.innerHTML);
    },
    setHtml: function (html) {
      editor.innerHTML = html || "<p></p>";
    },
  };
}

function cmsIsPlaceholderLegal(s) {
  const t = String(s || "").toLowerCase();
  return !t.trim() || t.indexOf("edit in cms") >= 0 || t.indexOf("demo") >= 0 && t.length < 80;
}

function cmsFetchLiveProse(relHtml) {
  return fetch(relHtml)
    .then((r) => r.text())
    .then((html) => {
      const doc = new DOMParser().parseFromString(html, "text/html");
      const prose = doc.querySelector(".legal-prose");
      return prose ? prose.innerHTML : "";
    })
    .catch(() => "");
}

function cmsBindBilingualLegal(opts) {
  opts = opts || {};
  const key = opts.key;
  const live = opts.liveUrl;
  const pages = CMS.getStore().staticPages || {};
  const editors = { en: null, zh: null };
  function show(which) {
    document.getElementById("paneEn").hidden = which !== "en";
    document.getElementById("paneZh").hidden = which !== "zh";
    document.querySelectorAll(".cms-lang-tabs button").forEach((b) =>
      b.classList.toggle("active", b.dataset.lang === which)
    );
  }
  function boot(which, html, fallbackUrl) {
    const id = which === "en" ? "richEn" : "richZh";
    const ready = (h) => {
      editors[which] = cmsMountRich(id, h);
    };
    if (html && !cmsIsPlaceholderLegal(html)) ready(html);
    else if (fallbackUrl && which === "en") {
      cmsFetchLiveProse(fallbackUrl).then((h) => ready(h || html || "<p></p>"));
    } else ready(html || "<p></p>");
  }
  boot("en", pages[key + "HtmlEn"] || pages[key + "En"] || "", live);
  boot("zh", pages[key + "HtmlZh"] || pages[key + "Zh"] || "", null);
  document.querySelector(".cms-lang-tabs").addEventListener("click", (e) => {
    const b = e.target.closest("[data-lang]");
    if (b) show(b.dataset.lang);
  });
  show("en");
  document.getElementById("saveLegal").addEventListener("click", () => {
    const s = CMS.getStore();
    s.staticPages = Object.assign({}, s.staticPages || {});
    s.staticPages[key + "HtmlEn"] = editors.en ? editors.en.getHtml() : "";
    s.staticPages[key + "HtmlZh"] = editors.zh ? editors.zh.getHtml() : "";
    CMS.setStore(s);
    cmsToast("Saved — open View website to confirm");
  });
}
