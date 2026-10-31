// Theme toggle, mobile nav, publication filter, BibTeX copy.
(function () {
  var root = document.documentElement;

  function storedTheme() {
    try { return localStorage.getItem("theme"); } catch (e) { return null; }
  }
  function currentTheme() {
    var t = root.getAttribute("data-theme");
    if (t) return t;
    return window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }
  var saved = storedTheme();
  if (saved === "light" || saved === "dark") root.setAttribute("data-theme", saved);

  document.addEventListener("DOMContentLoaded", function () {
    var toggle = document.querySelector(".theme-toggle");
    if (toggle) {
      toggle.addEventListener("click", function () {
        var next = currentTheme() === "dark" ? "light" : "dark";
        root.setAttribute("data-theme", next);
        try { localStorage.setItem("theme", next); } catch (e) {}
      });
    }

    var navBtn = document.querySelector(".nav-toggle");
    var navLinks = document.querySelector(".nav-links");
    if (navBtn && navLinks) {
      navBtn.addEventListener("click", function () {
        var open = navLinks.classList.toggle("open");
        navBtn.setAttribute("aria-expanded", open ? "true" : "false");
      });
      navLinks.addEventListener("click", function (e) {
        if (e.target.tagName === "A") {
          navLinks.classList.remove("open");
          navBtn.setAttribute("aria-expanded", "false");
        }
      });
    }

    // Publication filter: buttons carry data-filter, items carry data-tags.
    var filterBtns = document.querySelectorAll(".pub-filter button");
    filterBtns.forEach(function (btn) {
      btn.addEventListener("click", function () {
        var f = btn.getAttribute("data-filter");
        filterBtns.forEach(function (b) { b.setAttribute("aria-pressed", b === btn ? "true" : "false"); });
        document.querySelectorAll(".pub").forEach(function (p) {
          var tags = (p.getAttribute("data-tags") || "").split(" ");
          p.hidden = !(f === "all" || tags.indexOf(f) !== -1);
        });
        document.querySelectorAll(".pub-year").forEach(function (h) {
          var list = h.nextElementSibling;
          var any = list && list.querySelector(".pub:not([hidden])");
          h.hidden = !any;
          if (list) list.hidden = !any;
        });
      });
    });

    document.querySelectorAll(".bib button").forEach(function (btn) {
      btn.addEventListener("click", function () {
        var text = btn.parentElement.querySelector("pre").innerText;
        var done = function () {
          btn.textContent = "Copied";
          setTimeout(function () { btn.textContent = "Copy"; }, 1500);
        };
        if (navigator.clipboard && navigator.clipboard.writeText) {
          navigator.clipboard.writeText(text).then(done, function () {});
        }
      });
    });

    var y = document.getElementById("year");
    if (y) y.textContent = new Date().getFullYear();
  });
})();
