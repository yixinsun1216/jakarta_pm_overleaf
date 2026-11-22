(function () {
  const body = document.body;
  const btn = document.querySelector(".menu-btn");

  // mobile contents drawer
  function setNav(open) {
    body.classList.toggle("nav-open", open);
    if (btn) btn.setAttribute("aria-expanded", String(open));
  }
  if (btn) btn.addEventListener("click", () => setNav(!body.classList.contains("nav-open")));
  const scrim = document.querySelector(".scrim");
  if (scrim) scrim.addEventListener("click", () => setNav(false));
  document.querySelectorAll(".sidebar a").forEach((a) => a.addEventListener("click", () => setNav(false)));

  // appendix figure/table chips open the dropdown placed after the paragraph
  function syncChips(d) {
    document.querySelectorAll('a.appx-ref[data-target="' + d.id + '"]').forEach((a) => a.classList.toggle("is-open", d.open));
  }
  document.querySelectorAll("details.appx-float").forEach((d) => d.addEventListener("toggle", () => syncChips(d)));
  document.addEventListener("click", (e) => {
    const a = e.target.closest("a.appx-ref");
    if (!a || !a.getAttribute("href").startsWith("#")) return;
    const d = document.getElementById(a.dataset.target);
    if (!d) return;
    e.preventDefault();
    d.open = !d.open;
    if (d.open) d.scrollIntoView({ behavior: "smooth", block: "nearest" });
  });

  // a table wider than the column shrinks to fit, as \resizebox{\textwidth} does in the PDF (not below 55%)
  function fitTable(box) {
    const t = box.querySelector("table");
    if (!t) return;
    t.style.zoom = "";
    if (!box.clientWidth) return;  // inside a closed dropdown
    if (box.scrollWidth - box.clientWidth > 1) t.style.zoom = Math.max(0.55, box.clientWidth / box.scrollWidth);
  }
  function fitTables(root) { (root || document).querySelectorAll(".float-body").forEach(fitTable); }
  fitTables();
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(() => fitTables());
  window.addEventListener("resize", () => fitTables());
  document.querySelectorAll("details.appx-float").forEach((d) => d.addEventListener("toggle", () => { if (d.open) fitTables(d); }));

  // arriving via a link to an appendix float on another page
  if (location.hash) {
    const el = document.getElementById(decodeURIComponent(location.hash.slice(1)));
    if (el && el.tagName === "DETAILS") { el.open = true; setTimeout(() => el.scrollIntoView({ block: "center" }), 50); }
  }

  // clicking a citation shows the full reference in the right margin (or a card in the corner on narrow screens)
  let pop = null, popFor = null;
  function closePop() {
    if (pop) pop.remove();
    if (popFor) popFor.classList.remove("is-active");
    pop = popFor = null;
  }
  function openPop(a) {
    const src = document.querySelector('.cite-data [data-key="' + CSS.escape(a.dataset.ref) + '"]');
    if (!src) return false;
    closePop();
    pop = document.createElement("aside");
    pop.className = "cite-pop";
    pop.setAttribute("role", "note");
    const x = document.createElement("button");
    x.className = "cite-x"; x.type = "button"; x.setAttribute("aria-label", "Close"); x.textContent = "×";
    x.addEventListener("click", closePop);
    const body = document.createElement("div");
    body.className = "cite-body"; body.innerHTML = src.innerHTML;
    const more = document.createElement("a");
    more.className = "cite-more"; more.href = a.getAttribute("href"); more.textContent = "See in references →";
    pop.append(x, body, more);
    document.body.appendChild(pop);
    popFor = a; a.classList.add("is-active");
    const col = document.querySelector(".content > .prose") || document.querySelector(".content");
    const r = a.getBoundingClientRect(), c = col.getBoundingClientRect();
    const gap = parseFloat(getComputedStyle(document.documentElement).fontSize) * 2;  // same as --gap in style.css
    const left = c.right + gap, w = pop.offsetWidth;
    if (!document.body.classList.contains("cm-open") && window.innerWidth - left - 16 >= w) {
      pop.style.left = left + window.scrollX + "px";
      pop.style.top = Math.max(8, r.top + window.scrollY - 6) + "px";
    } else {
      pop.classList.add("cite-fixed");
    }
    return true;
  }
  document.addEventListener("click", (e) => {
    const a = e.target.closest("a.cite");
    if (a) {
      if (a === popFor) { e.preventDefault(); closePop(); }
      else if (openPop(a)) e.preventDefault();
      return;
    }
    if (pop && !e.target.closest(".cite-pop")) closePop();
  });
  document.addEventListener("keydown", (e) => { if (e.key === "Escape") closePop(); });

  // highlight a margin note while hovering its number
  document.querySelectorAll(".sn").forEach((sn) => {
    const ref = sn.querySelector(".sn-ref"), note = sn.querySelector(".sidenote");
    if (!ref || !note) return;
    ref.addEventListener("mouseenter", () => note.classList.add("hl"));
    ref.addEventListener("mouseleave", () => note.classList.remove("hl"));
  });
})();
