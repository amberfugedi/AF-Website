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
    /* Focus stages: as the page's ideas sharpen, the clouds drift
       gently forward (right and up) — momentum, not decoration.
       Indexed by stage; scaled per cloud depth in frame(). */
    var STAGE_BIAS = [[0, 0], [30, -12], [58, -24], [88, -36]];
    var auraStage = 0;
    var cur = blobs.map(function () { return { x: 0, y: 0 }; });
    var targetX = 0, targetY = 0, targetScroll = 0, rafId = null;

    var frame = function () {
      var settled = true;
      blobs.forEach(function (blob, i) {
        var depthScale = (i % 3 + 1) / 3;
        var tx = targetX * DEPTHS[i % 3] + STAGE_BIAS[auraStage][0] * depthScale;
        var ty = targetY * DEPTHS[i % 3] + STAGE_BIAS[auraStage][1] * depthScale -
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
    var setAuraStage = function (n) {
      if (n === auraStage) return;
      auraStage = n;
      document.body.setAttribute("data-aura-stage", String(n));
      wake();
    };
    /* Home: sections mark the idea's progress from diffuse to focused.
       Sub-pages: a simple two-step (diffuse at the top, focused after
       the first screen). */
    if (document.body.classList.contains("page-home") && "IntersectionObserver" in window) {
      var stageMap = [
        [".hero", 0],
        ["section[aria-labelledby='problem-title']", 1],
        ["section[aria-labelledby='work-title']", 1],
        ["section[aria-labelledby='why-title']", 2],
        ["section[aria-labelledby='offers-title']", 2],
        ["section[aria-labelledby='quotes-title']", 3],
        ["section[aria-labelledby='about-title']", 3],
        [".cta-band-wrap", 3]
      ];
      var stageFor = new Map();
      var stageObserver = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) setAuraStage(stageFor.get(entry.target));
        });
      }, { rootMargin: "-45% 0px -45% 0px" });
      stageMap.forEach(function (pair) {
        var el = document.querySelector(pair[0]);
        if (el) { stageFor.set(el, pair[1]); stageObserver.observe(el); }
      });
    }
    window.addEventListener("scroll", function () {
      targetScroll = window.scrollY;
      if (!document.body.classList.contains("page-home")) {
        setAuraStage(window.scrollY > 360 ? 2 : 0);
      }
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
      var op = Math.max(0, Math.min(1, 1 - (sy - vh * 0.5) / (vh * 0.7)));
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

  /* ---------- Experience timeline: progress line (about) ----------
     The coral fill tracks how far down the career line the reader
     has scrolled, aimed at the viewport's middle. */
  var timeline = document.querySelector(".timeline");
  if (timeline && !reducedMotion) {
    var tlTick = function () {
      var r = timeline.getBoundingClientRect();
      var p = (window.innerHeight * 0.55 - r.top) / r.height;
      p = Math.max(0, Math.min(1, p));
      timeline.style.setProperty("--tl-progress", p.toFixed(4));
    };
    window.addEventListener("scroll", tlTick, { passive: true });
    window.addEventListener("resize", tlTick, { passive: true });
    tlTick();
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
      /* Netlify Forms: URL-encoded POST to the page path. On hosts
         without Netlify, the catch shows an honest email fallback. */
      var submitBtn = form.querySelector("[type='submit']");
      if (submitBtn) submitBtn.disabled = true;
      var showStatus = function (msg) {
        status.textContent = msg;
        status.classList.remove("show");
        void status.offsetWidth; /* restart the entrance on re-submit */
        status.classList.add("show");
      };
      fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(new FormData(form)).toString()
      }).then(function (res) {
        if (!res.ok) throw new Error(res.status);
        showStatus(successMsg);
        form.reset();
      }).catch(function () {
        showStatus("That didn't go through. Email me instead: amberfugedi@gmail.com");
      }).finally(function () {
        if (submitBtn) submitBtn.disabled = false;
      });
    });
  }
  handleForm("contact-form", "contact-status", "Got it — I'll be in touch soon.");
  handleForm("capture-form", "capture-status", "You're on the list.");

  /* CTA intent carries into the form: ?topic=consulting preselects */
  var topicField = document.getElementById("cf-topic");
  if (topicField) {
    var topicParam = new URLSearchParams(window.location.search).get("topic");
    if (topicParam && topicField.querySelector("option[value='" + topicParam + "']")) {
      topicField.value = topicParam;
    }
  }

  /* ---------- Quote marquee: visible pause control ----------
     Hover-pause isn't a mechanism on touch; WCAG 2.2.2 wants a
     control. Hidden on phones, where the quotes render static. */
  document.querySelectorAll(".quote-marquee").forEach(function (marquee) {
    var btn = document.createElement("button");
    btn.className = "marquee-toggle";
    btn.type = "button";
    btn.textContent = "Pause";
    btn.setAttribute("aria-pressed", "false");
    btn.addEventListener("click", function () {
      var paused = marquee.classList.toggle("paused");
      btn.textContent = paused ? "Play" : "Pause";
      btn.setAttribute("aria-pressed", String(paused));
    });
    marquee.parentNode.insertBefore(btn, marquee);
  });

  /* ---------- Footer year ---------- */
  var year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();
})();
