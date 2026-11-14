/* A2 Exteriors prototype — the only script on the site.
   In Webflow: the nav toggle is the native Navbar, the reveal is one IX3
   interaction with a reduced-motion rule, and the gallery filter is a
   CMS Collection List filtered by Service (one list per service tab, or
   Webflow's native CMS filtering). Nothing here needs to be ported. */
(function () {
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.getElementById('site-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var open = nav.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && nav.classList.contains('is-open')) {
        nav.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
        toggle.focus();
      }
    });
  }

  // Close the desktop Services dropdown when clicking elsewhere.
  document.addEventListener('click', function (e) {
    document.querySelectorAll('.nav-dropdown[open]').forEach(function (d) {
      if (!d.contains(e.target)) d.removeAttribute('open');
    });
  });

  // Reveal on scroll. CSS only hides .reveal when motion is allowed.
  var items = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && !matchMedia('(prefers-reduced-motion: reduce)').matches) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add('is-in'); io.unobserve(en.target); }
      });
    }, { rootMargin: '0px 0px -8% 0px' });
    items.forEach(function (el) { io.observe(el); });
  } else {
    items.forEach(function (el) { el.classList.add('is-in'); });
  }

  // Our Work filter.
  var buttons = document.querySelectorAll('.filter-button');
  var cards = document.querySelectorAll('[data-service]');
  var status = document.getElementById('filter-status');
  buttons.forEach(function (b) {
    b.addEventListener('click', function () {
      var f = b.getAttribute('data-filter');
      buttons.forEach(function (x) { x.setAttribute('aria-pressed', x === b ? 'true' : 'false'); });
      var shown = 0;
      cards.forEach(function (c) {
        var match = f === 'all' || c.getAttribute('data-service') === f;
        c.hidden = !match;
        if (match) shown++;
      });
      if (status) status.textContent = shown + (shown === 1 ? ' project' : ' projects') + ' shown';
      var empty = document.getElementById('projects-empty');
      if (empty) empty.hidden = shown !== 0;
    });
  });
})();
