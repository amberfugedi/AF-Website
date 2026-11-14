#!/usr/bin/env python3
"""Build the A2 Exteriors prototype into ./site.

Why a generator: the header, footer, CTA band and mobile bar are shared
on every page, the way Webflow Components are. Rendering them from one
place keeps all pages in sync and mirrors how the Webflow build works.

Content lives in content.py. Tokens used in page bodies:
  @@PHONE@@ @@TEL@@ @@SMS@@      business phone (display / tel: / sms:)
  @@L:route@@                     relative link to a route, e.g. @@L:services/house-washing@@
  @@I:name@@                      inline SVG icon
  [[tbc:text]]                    claim waiting on client confirmation (prototype only)
Run:  python3 build.py
"""
import json
import os
import re
import shutil

from content import BIZ, PAGES, SERVICES

HERE = os.path.dirname(os.path.abspath(__file__))
OUT = os.path.join(HERE, "site")

# Icons: Phosphor (regular weight, MIT), vendored in ./icons. One family only.
ICON_FILES = {
    "phone": "phone", "text": "chat-text", "arrow": "arrow-right", "home": "house",
    "building": "buildings", "camera": "camera", "shield": "shield-check",
    "menu": "list", "mail": "envelope-simple",
}


def _icon(name):
    svg = open(os.path.join(HERE, "icons", ICON_FILES[name] + ".svg")).read().strip()
    return svg.replace("<svg ", '<svg class="icon" aria-hidden="true" focusable="false" ', 1)


ICONS = {k: _icon(k) for k in ICON_FILES}


def route_file(route):
    """'' -> index.html; 'services' -> services/index.html; 'services/x' -> services/x.html"""
    if route == "":
        return "index.html"
    if any(p["route"].startswith(route + "/") for p in PAGES):
        return route + "/index.html"
    return route + ".html"


def rel(from_route, to_route):
    src_dir = os.path.dirname(route_file(from_route))
    target = route_file(to_route)
    href = os.path.relpath(target, src_dir or ".")
    return href.replace(os.sep, "/")


def tokens(html, route):
    html = html.replace("@@PHONE@@", BIZ["phone_display"])
    html = html.replace("@@TEL@@", "tel:" + BIZ["phone_e164"])
    html = html.replace("@@SMS@@", "sms:" + BIZ["phone_e164"])
    html = re.sub(r"@@L:([a-z0-9\-/]*)@@", lambda m: rel(route, m.group(1)), html)
    html = re.sub(r"@@I:([a-z]+)@@", lambda m: ICONS[m.group(1)], html)
    html = re.sub(r"\[\[tbc:(.+?)\]\]", r'<span class="tbc">\1</span>', html, flags=re.S)
    return html


def header(route):
    def cur(r):
        hit = route == r or (r and route.startswith(r + "/"))
        return ' aria-current="page"' if hit else ""
    items = "".join(
        f'<li><a href="@@L:services/{s["slug"]}@@">{s["name"]}</a></li>' for s in SERVICES
    )
    return f"""
<a class="skip-link" href="#main">Skip to content</a>
<!-- COMPONENT: Site Header -->
<header class="site-header">
  <div class="container header-inner">
    <a class="brand" href="@@L:@@">
      <img src="@@IMG@@a2-logo.webp" width="154" height="48" alt="A2 Exteriors home">
    </a>
    <nav class="nav" id="site-nav" aria-label="Main">
      <details class="nav-dropdown">
        <summary class="nav-link"{cur("services")}>Services</summary>
        <ul class="nav-menu">{items}<li><a class="is-all" href="@@L:services@@">All services</a></li></ul>
      </details>
      <a class="nav-link" href="@@L:our-work@@"{cur("our-work")}>Our Work</a>
      <a class="nav-link" href="@@L:about@@"{cur("about")}>About</a>
      <a class="nav-link" href="@@L:service-areas@@"{cur("service-areas")}>Service Areas</a>
      <a class="nav-link" href="@@L:faq@@"{cur("faq")}>FAQ</a>
    </nav>
    <div class="header-actions">
      <a class="header-phone" href="@@TEL@@" data-track="phone-click" aria-label="Call @@PHONE@@">@@I:phone@@<span class="num">@@PHONE@@</span></a>
      <a class="button is-primary" href="@@L:get-a-quote@@" data-track="cta-quote">Get a Quote</a>
      <button class="nav-toggle" type="button" aria-expanded="false" aria-controls="site-nav" aria-label="Menu">@@I:menu@@</button>
    </div>
  </div>
</header>"""


def cta_band():
    return """
<!-- COMPONENT: CTA Band (dark: Lichen button, Deep Ink text) -->
<section class="cta-band" aria-labelledby="cta-band-title">
  <div class="container cta-band-inner">
    <div>
      <h2 id="cta-band-title">Let\u2019s get your property looking its best.</h2>
      <p>Tell us what needs cleaning and where. Photos help us quote faster.</p>
    </div>
    <div class="button-row">
      <a class="button is-primary" href="@@L:get-a-quote@@" data-track="cta-quote">Request a Free Quote</a>
      <a class="button is-ghost-light" href="@@TEL@@" data-track="phone-click">Call or text @@PHONE@@</a>
    </div>
  </div>
</section>"""


def footer():
    svc = "".join(f'<li><a href="@@L:services/{s["slug"]}@@">{s["name"]}</a></li>' for s in SERVICES)
    return f"""
<!-- COMPONENT: Site Footer -->
<footer class="site-footer">
  <div class="container">
    <div class="footer-grid">
      <div>
        <a class="brand" href="@@L:@@">
          <img src="@@IMG@@a2-logo-stacked-white-a.webp" width="140" height="107" alt="A2 Exteriors home" loading="lazy">
        </a>
        <p class="footer-tagline">The outside matters.</p>
        <p>Exterior cleaning for homes and businesses in Central Connecticut.</p>
        <a class="footer-phone" href="@@TEL@@" data-track="phone-click">@@PHONE@@</a>
        <p>Call or text<br><a href="mailto:{BIZ["email"]}">[[tbc:{BIZ["email"]}]]</a></p>
      </div>
      <div>
        <h2>Services</h2>
        <ul>{svc}</ul>
      </div>
      <div>
        <h2>Company</h2>
        <ul>
          <li><a href="@@L:about@@">About</a></li>
          <li><a href="@@L:our-work@@">Our Work</a></li>
          <li><a href="@@L:faq@@">FAQ</a></li>
          <li><a href="@@L:resources@@">Resources</a></li>
          <li><a href="@@L:get-a-quote@@">Get a Quote</a></li>
        </ul>
      </div>
      <div>
        <h2>Service Areas</h2>
        <ul>
          <li><a href="@@L:service-areas/wethersfield-ct@@">Wethersfield, CT</a></li>
          <li>[[tbc:Other towns]]</li>
          <li><a href="@@L:service-areas@@">All service areas</a></li>
        </ul>
      </div>
    </div>
    <div class="footer-bottom">
      <span>© <span data-year>2026</span> A2 Exteriors. All rights reserved.</span>
      <span><a href="@@L:privacy@@">Privacy</a></span>
    </div>
  </div>
</footer>
<!-- COMPONENT: Mobile Action Bar -->
<nav class="mobile-bar" aria-label="Quick contact">
  <a href="@@TEL@@" data-track="phone-click">@@I:phone@@ Call</a>
  <a href="@@SMS@@" data-track="sms-click">@@I:text@@ Text</a>
  <a class="is-primary" href="@@L:get-a-quote@@" data-track="cta-quote">Get a Quote</a>
</nav>"""


def page_hero(p):
    crumbs = p.get("crumbs") or []
    trail = ""
    if crumbs:
        lis = ['<li><a href="@@L:@@">Home</a></li>']
        for name, r in crumbs[:-1]:
            lis.append(f'<li><a href="@@L:{r}@@">{name}</a></li>')
        lis.append(f'<li><span aria-current="page">{crumbs[-1][0]}</span></li>')
        trail = f'<nav aria-label="Breadcrumb"><ol class="breadcrumb">{"".join(lis)}</ol></nav>'
    eyebrow = ""  # breadcrumb already labels the section
    lede = f'<p class="lede">{p["lede"]}</p>' if p.get("lede") else ""
    actions = p.get("hero_actions", "")
    return f"""
<header class="page-hero">
  <div class="container">
    {trail}{eyebrow}
    <h1>{p["h1"]}</h1>
    {lede}{actions}
  </div>
</header>"""


def breadcrumb_ld(p):
    crumbs = [("Home", "")] + list(p.get("crumbs") or [])
    return {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            {"@type": "ListItem", "position": i + 1, "name": n, "item": BIZ["url"] + ("/" + r if r else "/")}
            for i, (n, r) in enumerate(crumbs)
        ],
    }


def render(p):
    route = p["route"]
    canonical = BIZ["url"] + ("/" + route if route else "/")
    ld = list(p.get("schema", []))
    if p.get("crumbs"):
        ld.append(breadcrumb_ld(p))
    ld_html = "".join(
        f'\n<script type="application/ld+json">{json.dumps(x, indent=1, ensure_ascii=False)}</script>' for x in ld
    )
    robots = "noindex, nofollow"  # prototype/staging: never indexable
    hero = p["hero_html"] if "hero_html" in p else page_hero(p)
    band = "" if p.get("no_cta_band") else cta_band()
    html = f"""<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>{p["title"]}</title>
<meta name="description" content="{p["description"]}">
<meta name="robots" content="{robots}">
<link rel="canonical" href="{canonical}">
<meta property="og:type" content="website">
<meta property="og:site_name" content="A2 Exteriors">
<meta property="og:title" content="{p.get("og_title", p["title"])}">
<meta property="og:description" content="{p["description"]}">
<meta property="og:url" content="{canonical}">
<meta property="og:image" content="{BIZ["url"]}/images/og-default.jpg">
<meta name="twitter:card" content="summary_large_image">
<meta name="theme-color" content="#123B51">
<link rel="icon" href="@@IMG@@favicon.png">
<link rel="apple-touch-icon" href="@@IMG@@apple-touch-icon.png">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Manrope:wght@700;800&family=DM+Sans:opsz,wght@9..40,400;9..40,500;9..40,600&family=IBM+Plex+Mono:wght@500&display=swap" rel="stylesheet">
<link rel="stylesheet" href="@@CSS@@">{ld_html}
</head>
<body>
{header(route)}
<main id="main">
{hero}
{p["body"]}
{band}
</main>
{footer()}
<script src="@@JS@@" defer></script>
</body>
</html>
"""
    depth_prefix = os.path.relpath(".", os.path.dirname(route_file(route)) or ".").replace(os.sep, "/")
    prefix = "" if depth_prefix == "." else depth_prefix + "/"
    html = html.replace("@@CSS@@", prefix + "css/a2.css").replace("@@JS@@", prefix + "js/a2.js").replace("@@IMG@@", prefix + "images/")
    return tokens(html, route)


def sitemap():
    urls = "".join(
        f"\n  <url><loc>{BIZ['url']}{'/' + p['route'] if p['route'] else '/'}</loc></url>"
        for p in PAGES if not p.get("exclude_from_sitemap")
    )
    return f'<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">{urls}\n</urlset>\n'


def main():
    for p in PAGES:
        path = os.path.join(OUT, route_file(p["route"]))
        os.makedirs(os.path.dirname(path), exist_ok=True)
        with open(path, "w", encoding="utf-8") as f:
            f.write(render(p))
    with open(os.path.join(OUT, "sitemap.xml"), "w") as f:
        f.write(sitemap())
    with open(os.path.join(OUT, "robots.txt"), "w") as f:
        f.write("# Prototype: block everything. Production robots.txt is set in Webflow.\nUser-agent: *\nDisallow: /\n")
    print(f"built {len(PAGES)} pages into {OUT}")


if __name__ == "__main__":
    main()
