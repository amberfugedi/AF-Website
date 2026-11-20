# A2 Exteriors: SEO, structure, and alt text audit

Date: 2026-11-14. Scope: all 20 prototype pages. Method: scripted checks over every
page (`seo_audit.py` logic summarised below), plus a manual read of every alt text.

## Passing

| Check | Result |
|---|---|
| One `<h1>` per page | 20/20 |
| Heading order (no skipped levels) | No skips on any page |
| Unique titles / descriptions / H1s | No duplicates |
| Title length 30-60 | 18/20 (404 and Privacy are 29, fine for utility pages) |
| Description length 70-160 | 18/20 (404 and Thank-you are short; both stay noindex) |
| `lang`, viewport, canonical, OG title/description/url/image, Twitter card | Present on all pages |
| JSON-LD parses | All blocks valid JSON |
| Schema coverage | Home: HomeAndConstructionBusiness + WebSite + FAQPage. Service pages: Service + FAQPage + BreadcrumbList. Articles: Article + BreadcrumbList. FAQ page: FAQPage. All interior pages: BreadcrumbList |
| FAQ schema matches visible text | 0 mismatches |
| NAP consistency | Phone appears 89 times, one format (860-430-4568) |
| Image alt text | Every `<img>` has descriptive alt; none empty, none filename-like |
| Image width/height attributes | All images (prevents layout shift) |
| Image file names | Descriptive and keyword-relevant (e.g. `patio-herringbone-walkway-farmington-after`) |
| Sitemap | Every indexable page listed; 404 and Thank-you excluded |
| Accessibility (axe, WCAG 2 A/AA) | 0 violations, 20 pages, desktop and mobile |
| Broken internal links | 0 |

## Fixed in this pass

1. **Alt text over 125 characters** (half-cleaned patio): shortened.
2. **Schema:** added `founder` (Anthony Aubrey) and `sameAs` (A2's Instagram) to the
   business entity; removed a non-standard `_comment` property validators flag.
   Instagram link added to the footer so the `sameAs` claim is visible on the page.
3. **Internal links to articles:** service pages now carry a "Related guides" card.
   Article inbound links: How often to wash 1 -> 2, Black streaks 2 -> 3, Pressure vs.
   soft washing 2 -> 5.
4. **Page weight:** seven photos over 140KB recompressed (largest now 137KB WebP).
5. **Loading priority:** the About photo and the first Our Work project load eagerly
   with high fetch priority instead of lazily (both sit at the top of the page, so
   lazy loading delayed Largest Contentful Paint).
6. **Social share images:** service pages with real photos, Our Work, and About now use
   their own 1200x630 share images instead of the single default.

## Needs content or launch settings (cannot be fixed in the prototype)

| Item | Where | Action |
|---|---|---|
| `{{DOMAIN}}` in canonicals, OG URLs, schema | All pages | Set when the domain is confirmed |
| `{{PUBLISH_DATE}}` in Article schema | 3 articles | Set real publish dates |
| `noindex, nofollow` and robots `Disallow: /` | All pages | Prototype only. In Webflow: indexable on production, noindex on the staging subdomain, 404 and Thank-you noindex |
| Photo placeholders | Homepage hero, Roof card, 3 article images, Service Areas map | Real photos (hero needs a wide original camera file) |
| Reviews section "Read on Google" link is `href="#"` | Homepage | Real Google review URL; section stays hidden until a genuine review exists |
| Google Business Profile URL | Schema `sameAs` | Add when available; must match NAP exactly |
| Email | Footer, contact, schema | Confirm and add |

## Recommendations (not applied: copy or structure decisions)

- **Brand-led H1s carry no search terms** on About ("Because first impressions
  matter"), Our Work ("Before and after"), Service Areas ("Where we work"), FAQ
  ("Questions and answers"). Titles carry the keywords, so this is acceptable. If you
  want stronger on-page signals, add a descriptive line in the H1 or directly below it,
  e.g. "Before and after: exterior cleaning projects in Connecticut".
- **Town pages:** only Wethersfield exists, and it has no project yet. Farmington and
  Simsbury now have real jobs; either could become a town page with genuine local
  content. Wethersfield should stay unpublished until it has a real project.
- **Gutter cleaning** is a stated service with no page. A dedicated page would capture
  "gutter cleaning [town] CT" searches.
- **Anchor text:** "View Project" (x4) and "See Our Work" (x9) all go to Our Work. Fine
  for users; individual project pages (Projects CMS template in Webflow) would let each
  card link to a specific, indexable project.
- **Roof washing** has a full page but no photos; it is the weakest page for
  conversion and image search.

## Recommendations applied (2026-11-14)

1. **Descriptive H1s:** Our Work "Before and after: exterior cleaning projects in
   Connecticut"; Service Areas "Exterior cleaning service areas in Central Connecticut";
   About "Locally owned exterior cleaning in Central Connecticut" (tagline moved to the
   lede); FAQ "Exterior cleaning questions and answers".
2. **Town pages:** `/service-areas/farmington-ct` and `/service-areas/simsbury-ct`, each
   built on the real jobs in that town, with local detail from Anthony flagged.
   Wethersfield removed from the sitemap until it has a real project (page kept, links kept).
3. **Gutter Cleaning page:** `/services/gutter-cleaning`, added to nav, footer, services
   list, quote form options, and service schema. A2-specific method, cleanup, and repair
   scope flagged for Anthony. No photos yet.
4. **Project pages:** four real jobs, one page each under `/our-work/`
   (house wash, Simsbury restaurant, Farmington pavers, Simsbury dumpster enclosure),
   grouping every photo from the job. Our Work moved to `/our-work/` (folder index);
   project titles on cards link to their pages; homepage "View Project" links go to the
   specific project. Placeholder projects stay card-only.

Pages: 20 -> 27. Sitemap: 24 URLs.
