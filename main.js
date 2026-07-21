/* Amber Fugedi — shared behavior for all pages. */
(function () {
  "use strict";

  var reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------- Living aura ----------
     The CSS keyframes handle the slow ~25s drift; here the whole
     aura layer eases toward the cursor with a lag, so the light
     shifts as visitors move. Static under reduced motion or on
     touch-only devices. */
  var aura = document.querySelector(".aura");
  if (aura && !reducedMotion && window.matchMedia("(pointer: fine)").matches) {
    var curX = 0, curY = 0, targetX = 0, targetY = 0, rafId = null;

    var frame = function () {
      curX += (targetX - curX) * 0.04;
      curY += (targetY - curY) * 0.04;
      aura.style.transform = "translate(" + curX.toFixed(2) + "px," + curY.toFixed(2) + "px)";
      if (Math.abs(targetX - curX) > 0.15 || Math.abs(targetY - curY) > 0.15) {
        rafId = requestAnimationFrame(frame);
      } else {
        rafId = null;
      }
    };

    window.addEventListener("mousemove", function (e) {
      /* Map cursor position to a gentle ±45px shift of the glow */
      targetX = (e.clientX / window.innerWidth - 0.5) * 90;
      targetY = (e.clientY / window.innerHeight - 0.5) * 70;
      if (rafId === null) rafId = requestAnimationFrame(frame);
    }, { passive: true });
  }

  /* ---------- Nav: scrolled state + mobile toggle ---------- */
  var nav = document.querySelector(".site-nav");
  var onScroll = function () {
    nav.classList.toggle("scrolled", window.scrollY > 8);
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  var toggle = document.querySelector(".nav-toggle");
  var links = document.getElementById("nav-links");
  if (toggle && links) {
    toggle.addEventListener("click", function () {
      var open = toggle.getAttribute("aria-expanded") === "true";
      toggle.setAttribute("aria-expanded", String(!open));
      links.classList.toggle("open", !open);
    });
    links.addEventListener("click", function (e) {
      if (e.target.tagName === "A") {
        toggle.setAttribute("aria-expanded", "false");
        links.classList.remove("open");
      }
    });
  }

  /* ---------- Scroll reveal ---------- */
  var revealEls = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && !reducedMotion) {
    var revealObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15, rootMargin: "0px 0px -40px 0px" });
    revealEls.forEach(function (el) { revealObserver.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add("in-view"); });
  }

  /* ---------- Services anchor-nav scrollspy ---------- */
  var anchorNav = document.querySelector(".anchor-nav");
  if (anchorNav && "IntersectionObserver" in window) {
    var anchorLinks = anchorNav.querySelectorAll("a[href^='#']");
    var spyObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          anchorLinks.forEach(function (a) {
            a.classList.toggle("active", a.getAttribute("href") === "#" + entry.target.id);
          });
        }
      });
    }, { rootMargin: "-40% 0px -55% 0px" });
    anchorLinks.forEach(function (a) {
      var target = document.getElementById(a.getAttribute("href").slice(1));
      if (target) spyObserver.observe(target);
    });
  }

  /* ---------- Forms (front-end only — wire to a real backend) ---------- */
  function handleForm(formId, statusId, successMsg) {
    var form = document.getElementById(formId);
    var status = document.getElementById(statusId);
    if (!form) return;
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var valid = true;
      form.querySelectorAll("[required]").forEach(function (field) {
        if (!field.value.trim() || (field.type === "email" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(field.value))) {
          valid = false;
          field.setAttribute("aria-invalid", "true");
        } else {
          field.removeAttribute("aria-invalid");
        }
      });
      if (!valid) {
        status.textContent = "Please check the highlighted fields.";
        return;
      }
      /* {{PLACEHOLDER: replace with a real POST to Formspree / Netlify /
         your email platform. Until then, submissions only show a message.}} */
      status.textContent = successMsg;
      form.reset();
    });
  }
  handleForm("contact-form", "contact-status", "Got it — I'll be in touch soon.");
  handleForm("capture-form", "capture-status", "You're on the list.");

  /* ---------- Footer year ---------- */
  var year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();
})();
