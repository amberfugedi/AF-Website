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
  var finePointer = window.matchMedia("(pointer: fine)").matches;
  if (aura && !reducedMotion && window.CSS && CSS.supports("translate", "0px")) {
    var blobs = Array.prototype.slice.call(aura.querySelectorAll(".aura-blob"));
    /* Cursor depths (max px offset at viewport edge) and scroll
       depths (fraction of scroll distance). Different rates per
       cloud make the layer read as 3D space. */
    var DEPTHS = [90, 150, 220];
    var SCROLL_DEPTHS = [0.04, 0.07, 0.11];
    /* Cap the scroll recession: early-scroll parallax stays, but the
       clouds never drift fully off the top of long pages. */
    var SCROLL_MAX = [90, 150, 210];
    var cur = blobs.map(function () { return { x: 0, y: 0 }; });
    var targetX = 0, targetY = 0, targetScroll = 0, rafId = null;

    var frame = function () {
      var settled = true;
      blobs.forEach(function (blob, i) {
        var tx = targetX * DEPTHS[i % 3];
        var ty = targetY * DEPTHS[i % 3] -
                 Math.min(targetScroll * SCROLL_DEPTHS[i % 3], SCROLL_MAX[i % 3]);
        cur[i].x += (tx - cur[i].x) * 0.055;
        cur[i].y += (ty - cur[i].y) * 0.055;
        blob.style.translate = cur[i].x.toFixed(2) + "px " + cur[i].y.toFixed(2) + "px";
        if (Math.abs(tx - cur[i].x) > 0.2 || Math.abs(ty - cur[i].y) > 0.2) settled = false;
      });
      rafId = settled ? null : requestAnimationFrame(frame);
    };
    var wake = function () { if (rafId === null) rafId = requestAnimationFrame(frame); };

    if (finePointer) {
      window.addEventListener("mousemove", function (e) {
        /* -0.5..0.5 from viewport center */
        targetX = e.clientX / window.innerWidth - 0.5;
        targetY = e.clientY / window.innerHeight - 0.5;
        wake();
      }, { passive: true });
    } else if ("DeviceOrientationEvent" in window &&
               typeof DeviceOrientationEvent.requestPermission !== "function") {
      /* Touch devices: the clouds lean with the phone instead of the
         cursor. First reading calibrates neutral so any comfortable
         holding angle is "center". iOS is skipped on purpose — its
         permission prompt needs a user gesture, and an aura isn't
         worth a dialog. */
      var baseBeta = null;
      window.addEventListener("deviceorientation", function (e) {
        if (e.beta === null || e.gamma === null) return;
        if (baseBeta === null) baseBeta = e.beta;
        targetX = Math.max(-0.5, Math.min(0.5, e.gamma / 60));
        targetY = Math.max(-0.5, Math.min(0.5, (e.beta - baseBeta) / 60));
        wake();
      }, { passive: true });
    }
    window.addEventListener("scroll", function () {
      targetScroll = window.scrollY;
      wake();
    }, { passive: true });
    targetScroll = window.scrollY;
    wake();
  }

  /* ---------- Hero depth plane: scroll parallax + mouse tilt ----------
     The hero foreground scrolls slower than the page (and fades as it
     leaves), and on fine pointers the whole content plane tilts a
     couple of degrees against the cursor — opposite the aura clouds,
     which follow it — so foreground and background separate in depth. */
  var heroContent = document.querySelector(".hero-content");
  if (heroContent && !reducedMotion) {
    var hCurX = 0, hCurY = 0, hTgtX = 0, hTgtY = 0, hRaf = null, hLastY = -1;

    var hFrame = function () {
      hCurX += (hTgtX - hCurX) * 0.06;
      hCurY += (hTgtY - hCurY) * 0.06;
      var sy = window.scrollY;
      var vh = window.innerHeight;
      var shift = Math.min(sy, vh) * 0.2;
      var op = Math.max(0, 1 - sy / (vh * 0.85));
      heroContent.style.transform =
        "perspective(1000px) translate3d(" + (-hCurX * 12).toFixed(1) + "px," +
        (shift - hCurY * 9).toFixed(1) + "px,0) rotateX(" + (hCurY * 2).toFixed(2) +
        "deg) rotateY(" + (-hCurX * 2.5).toFixed(2) + "deg)";
      heroContent.style.opacity = op.toFixed(3);
      var settled = Math.abs(hTgtX - hCurX) < 0.002 &&
                    Math.abs(hTgtY - hCurY) < 0.002 && sy === hLastY;
      hLastY = sy;
      hRaf = settled ? null : requestAnimationFrame(hFrame);
    };
    var hWake = function () { if (hRaf === null) hRaf = requestAnimationFrame(hFrame); };

    if (finePointer) {
      window.addEventListener("mousemove", function (e) {
        hTgtX = e.clientX / window.innerWidth - 0.5;
        hTgtY = e.clientY / window.innerHeight - 0.5;
        hWake();
      }, { passive: true });
    }
    window.addEventListener("scroll", hWake, { passive: true });
    hWake();
  }

  /* ---------- 3D tilt on cards ----------
     Cards pivot toward the cursor in perspective, easing with a
     small lag; on leave they ease flat and hand control back to
     the stylesheet. Desktop fine-pointer only, skipped under
     reduced motion. */
  if (!reducedMotion && finePointer) {
    var TILT_MAX = 7; /* degrees */
    document.querySelectorAll(".card, .case, .cap-card, .quote-card, .feat-card").forEach(function (card) {
      var tx = 0, ty = 0, cx = 0, cy = 0, hovering = false, tRaf = null;

      var tFrame = function () {
        cx += (tx - cx) * 0.18;
        cy += (ty - cy) * 0.18;
        card.style.transform =
          "perspective(900px) rotateX(" + cy.toFixed(2) + "deg) rotateY(" + cx.toFixed(2) + "deg) translateY(-5px)";
        if (hovering || Math.abs(tx - cx) > 0.05 || Math.abs(ty - cy) > 0.05) {
          tRaf = requestAnimationFrame(tFrame);
        } else {
          card.style.transform = ""; /* back to stylesheet control */
          tRaf = null;
        }
      };

      card.addEventListener("pointermove", function (e) {
        var r = card.getBoundingClientRect();
        tx = ((e.clientX - r.left) / r.width - 0.5) * TILT_MAX * 2;
        ty = -((e.clientY - r.top) / r.height - 0.5) * TILT_MAX * 2;
        hovering = true;
        if (tRaf === null) tRaf = requestAnimationFrame(tFrame);
      });
      card.addEventListener("pointerleave", function () {
        hovering = false;
        tx = 0; ty = 0;
        if (tRaf === null) tRaf = requestAnimationFrame(tFrame);
      });
    });
  }

  /* ---------- Hero sparkles (home only) ----------
     Vanilla port of Magic UI's sparkles-text: a handful of four-point
     stars blink around the whole headline on short staggered loops,
     each jumping to a fresh spot every cycle. Skipped entirely under
     reduced motion; no-JS pages simply never get them. */
  var sparkleHost = document.querySelector(".hero h1");
  if (sparkleHost && !reducedMotion) {
    var SPARKLE_COLORS = ["#7A6DC4", "#D77FA5"];
    var SPARKLE_PATH = "M9.82531 0.843845C10.0553 0.215178 10.9446 0.215178 11.1746 0.843845L11.8618 2.72026C12.4006 4.19229 12.3916 6.39157 13.5 7.5C14.6084 8.60843 16.8077 8.59935 18.2797 9.13822L20.1561 9.82534C20.7858 10.0553 20.7858 10.9447 20.1561 11.1747L18.2797 11.8618C16.8077 12.4007 14.6084 12.3916 13.5 13.5C12.3916 14.6084 12.4006 16.8077 11.8618 18.2798L11.1746 20.1562C10.9446 20.7858 10.0553 20.7858 9.82531 20.1562L9.13819 18.2798C8.59932 16.8077 8.60843 14.6084 7.5 13.5C6.39157 12.3916 4.19225 12.4007 2.72023 11.8618L0.843814 11.1747C0.215148 10.9447 0.215148 10.0553 0.843814 9.82534L2.72023 9.13822C4.19225 8.59935 6.39157 8.60843 7.5 7.5C8.60843 6.39157 8.59932 4.19229 9.13819 2.72026L9.82531 0.843845Z";
    var placeSparkle = function (el) {
      el.style.left = (Math.random() * 104 - 2).toFixed(1) + "%";
      el.style.top = (Math.random() * 116 - 8).toFixed(1) + "%";
      el.style.setProperty("--sparkle-scale", (Math.random() * 0.7 + 0.5).toFixed(2));
    };
    for (var s = 0; s < 7; s++) {
      var sparkle = document.createElement("span");
      sparkle.className = "sparkle";
      sparkle.setAttribute("aria-hidden", "true");
      var sparkleSize = Math.round(14 + Math.random() * 10);
      sparkle.innerHTML = "<svg width='" + sparkleSize + "' height='" + sparkleSize +
        "' viewBox='0 0 21 21'><path d='" + SPARKLE_PATH + "' fill='" +
        SPARKLE_COLORS[s % 2] + "'/></svg>";
      sparkle.style.animationDelay = (Math.random() * 1.8).toFixed(2) + "s";
      sparkle.style.animationDuration = (0.8 + Math.random() * 0.5).toFixed(2) + "s";
      placeSparkle(sparkle);
      sparkle.addEventListener("animationiteration", function (e) { placeSparkle(e.currentTarget); });
      sparkleHost.appendChild(sparkle);
    }
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

  /* ---------- Scroll reveal (auto-staggered inside grids) ---------- */
  var revealEls = document.querySelectorAll(".reveal");
  document.querySelectorAll(".card-grid, .cap-grid").forEach(function (grid) {
    Array.prototype.forEach.call(grid.children, function (child, i) {
      if (child.classList.contains("reveal") && !child.hasAttribute("data-delay")) {
        child.style.transitionDelay = Math.min(i * 0.08, 0.4) + "s";
      }
    });
  });
  if ("IntersectionObserver" in window && !reducedMotion) {
    var revealObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
          revealObserver.unobserve(entry.target);
          /* Clear stagger delay once revealed so hover transitions
             aren't delayed afterwards */
          setTimeout(function () {
            entry.target.classList.add("settled");
            entry.target.style.transitionDelay = "";
          }, 1200);
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
