/* Tiny Kitchen Lab — the only script on the site.
   1. Mobile menu   2. Categories dropdown   3. Category filters */
(function () {
  // 1. Mobile menu
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.getElementById("site-nav");
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var open = toggle.getAttribute("aria-expanded") === "true";
      toggle.setAttribute("aria-expanded", String(!open));
      nav.classList.toggle("is-open", !open);
    });
  }

  // 2. Categories dropdown (hover handles desktop; this handles tap + keyboard)
  document.querySelectorAll(".dropdown-toggle").forEach(function (btn) {
    var item = btn.closest(".has-dropdown");
    btn.addEventListener("click", function () {
      var open = btn.getAttribute("aria-expanded") === "true";
      btn.setAttribute("aria-expanded", String(!open));
      item.classList.toggle("is-open", !open);
    });
    document.addEventListener("click", function (e) {
      if (!item.contains(e.target)) {
        btn.setAttribute("aria-expanded", "false");
        item.classList.remove("is-open");
      }
    });
    item.addEventListener("keydown", function (e) {
      if (e.key === "Escape") {
        btn.setAttribute("aria-expanded", "false");
        item.classList.remove("is-open");
        btn.focus();
      }
    });
  });

  // 3. Filters: <div data-filters> buttons with data-filter="all" or a category key,
  //    cards in [data-filter-target] carry data-category="same key".
  document.querySelectorAll("[data-filters]").forEach(function (group) {
    var target = document.querySelector(group.getAttribute("data-filters"));
    var status = document.querySelector(group.getAttribute("data-status"));
    if (!target) return;
    var cards = target.querySelectorAll("[data-category]");
    group.addEventListener("click", function (e) {
      var btn = e.target.closest("[data-filter]");
      if (!btn) return;
      var key = btn.getAttribute("data-filter");
      var shown = 0;
      group.querySelectorAll("[data-filter]").forEach(function (b) {
        b.setAttribute("aria-pressed", String(b === btn));
      });
      cards.forEach(function (card) {
        var match = key === "all" || card.getAttribute("data-category") === key;
        card.hidden = !match;
        if (match) shown++;
      });
      if (status) {
        status.textContent = "Showing " + shown + (shown === 1 ? " product" : " products") +
          (key === "all" ? "" : " in " + btn.textContent.trim());
      }
    });
  });
})();
