document.addEventListener("DOMContentLoaded", function () {
  var navToggle = document.querySelector(".nav-toggle");
  var navMain = document.querySelector(".nav-main");
  if (navToggle && navMain) {
    navToggle.setAttribute("aria-expanded", "false");
    navToggle.addEventListener("click", function () {
      navMain.classList.toggle("is-open");
      navToggle.setAttribute("aria-expanded", String(navMain.classList.contains("is-open")));
    });

    navMain.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        navMain.classList.remove("is-open");
        navToggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  var langButtons = document.querySelectorAll("[data-lang-btn]");
  var html = document.documentElement;

  function setLang(lang) {
    html.setAttribute("lang", lang);
    langButtons.forEach(function (btn) {
      btn.classList.toggle("is-active", btn.getAttribute("data-lang-btn") === lang);
    });
    localStorage.setItem("furmus-lang", lang);
  }

  langButtons.forEach(function (btn) {
    btn.addEventListener("click", function () {
      setLang(btn.getAttribute("data-lang-btn"));
    });
  });

  // Read last: if storage is unavailable this throws, and the toggle above
  // still works. Only the saved preference is lost.
  var saved = localStorage.getItem("furmus-lang");
  if (saved === "ja" || saved === "en") {
    setLang(saved);
  }
});
