/* Amber Fugedi — shared behavior for all pages. */
(function () {
  "use strict";

  var reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------- Living aura ----------
     The CSS keyframes handle the slow drift; here each cloud also
     eases toward the cursor at its own rate (parallax), so the
     light visibly follows the mouse. Uses the CSS `translate`
     property, which composes with the keyframes' `transform`
     instead of overriding it. Static under reduced motion or on
     touch-only devices. */
  var aura = document.querySelector(".aura");
  if (aura && !reducedMotion && window.matchMedia("(pointer: fine)").matches &&
      window.CSS && CSS.supports("translate", "0px")) {
    var blobs = Array.prototype.slice.call(aura.querySelectorAll(".aura-blob"));
    /* How strongly each cloud follows the cursor (max px offset at
       the viewport edge). Different depths make the layer feel 3D. */
    var DEPTHS = [90, 150, 220];
    var cur = blobs.map(function () { return { x: 0, y: 0 }; });
    var targetX = 0, targetY = 0, rafId = null;

    var frame = function () {
      var settled = true;
      blobs.forEach(function (blob, i) {
        var depth = DEPTHS[i % DEPTHS.length];
        var tx = targetX * depth, ty = targetY * depth;
        cur[i].x += (tx - cur[i].x) * 0.055;
        cur[i].y += (ty - cur[i].y) * 0.055;
        blob.style.translate = cur[i].x.toFixed(2) + "px " + cur[i].y.toFixed(2) + "px";
        if (Math.abs(tx - cur[i].x) > 0.2 || Math.abs(ty - cur[i].y) > 0.2) settled = false;
      });
      rafId = settled ? null : requestAnimationFrame(frame);
    };

    window.addEventListener("mousemove", function (e) {
      /* -0.5..0.5 from viewport center */
      targetX = e.clientX / window.innerWidth - 0.5;
      targetY = e.clientY / window.innerHeight - 0.5;
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

  /* ---------- Forms (front-only — wire to a real backend) ----------
     Per ux-guidelines: validate on blur, show the error below its own
     field (aria-invalid + linked .field-error), and focus the first
     invalid field on a failed submit. */
  var EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  function fieldError(field) {
    var ids = (field.getAttribute("aria-describedby") || "").split(/\s+/);
    for (var i = 0; i < ids.length; i++) {
      var el = document.getElementById(ids[i]);
      if (el && el.classList.contains("field-error")) return el;
    }
    return null;
  }

  function validateField(field) {
    var msg = "";
    if (!field.value.trim()) {
      msg = "This field is required.";
    } else if (field.type === "email" && !EMAIL_RE.test(field.value)) {
      msg = "Enter a valid email address, like you@company.com.";
    }
    var err = fieldError(field);
    if (err) {
      err.textContent = msg;
      err.classList.toggle("show", !!msg);
    }
    if (msg) field.setAttribute("aria-invalid", "true");
    else field.removeAttribute("aria-invalid");
    return !msg;
  }

  function handleForm(formId, statusId, successMsg) {
    var form = document.getElementById(formId);
    var status = document.getElementById(statusId);
    if (!form) return;
    var fields = form.querySelectorAll("[required]");

    fields.forEach(function (field) {
      field.addEventListener("blur", function () {
        if (field.value.trim()) validateField(field);
      });
      field.addEventListener("input", function () {
        if (field.getAttribute("aria-invalid")) validateField(field);
      });
    });

    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var firstInvalid = null;
      fields.forEach(function (field) {
        if (!validateField(field) && !firstInvalid) firstInvalid = field;
      });
      if (firstInvalid) {
        status.textContent = "";
        firstInvalid.focus();
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
