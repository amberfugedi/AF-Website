# Case study audit, before the redesign

Required by section 2 of the brief. Measured on the live pages, not
read off the stylesheet.

## What is working and stays

| Component | Why it stays |
|---|---|
| The type scale and tokens | One fluid system, seven sizes, 390 to 1440. Nothing here needs a new size. |
| `.case-metrics` / `.cm-fig` | The figure-plus-label-plus-period shape is right. Only its container is wrong. |
| `.quote-card` | Works, and a client's own words are often the strongest evidence on a page. |
| `.art-open` lightbox | Lets an artifact be shown small and read full size. Keep. |
| `.cta-band` | The one dark surface on the site. Distinctive, and it closes a page well. |
| `.crumbs` | Fine as is. |
| `.cst-rel-list` | Hairline rows rather than cards, which is what the brief asks for. |
| The aura | The brand's own background system. No case study needs a different one. |
| `.pf-*` hub previews | Rebuilt this week, three unequal weights, working. |

## What is not working

**Everything is the same weight.** `.cst-sec` is a serif heading over a
paragraph, repeated. No section is louder than another, so nothing is
emphasised and the page has no rhythm. This is the single biggest
problem and it is what makes a short case read as dead.

**The page does not use its width.** The prose column measures 63% of
its container, so the right side is empty from the band to the footer.

**The meta card is the only card on the page.** It reads as bolted on
rather than designed in.

**The outcome band is a filled strip.** The brief asks for thin
separators and minimal background; this is a tinted full-width band
that reads closer to a dashboard than to a report.

**Missing entirely:** sticky section navigation, a before-and-after
component, any chart system, a workstream treatment, a featured-insight
type treatment, previous/next navigation.

**Content, not design.** Four of the ten pages carry no image, no quote
and no closing beat. Scan-Optics is 64 words of body, roughly half of
which restate the intro. No layout fixes that, and the redesign should
make the gap visible rather than hide it.

## Measurements

| Page | Body words | Height | Chrome | Images |
|---|---:|---:|---:|---:|
| Scan-Optics | 64 | 2,691px | 58% | 0 |
| StormwaterONE | 86 | 2,826px | 55% | 1 |
| Marketing operations | 206 | 2,965px | 57% | 0 |
| PERQ | 227 | 3,283px | 49% | 0 |
| Demand gen to revenue | 611 | 4,259px | 38% | 0 |
| Marketing function, next stage | 648 | 4,122px | 37% | 0 |

## Token mapping for the brief's colour names

paper `--bg` · ink `--ink` · berry `--coral-deep` · coral `--coral`
(fill only, never text) · butter `--peach` · lilac `--lavender` · plus
`--blush` and `--sage`. No new values.

## One conflict to raise

**The flagship is the anonymized case study, and it has no approved
figures.** The brief asks for a key results strip with large numerical
typography, and for a business impact section with headline metrics and
comparative charts.

Neither can exist on that page. There are only two ways to put numbers
on it, and both are wrong: invent them, or import PERQ's, which would
de-anonymize a page whose whole premise is that it is not named. The
brief's own wording allows for this ("where supported by the case
study", "where approved results already exist"), so the flagship ships
with no results strip and no charts, and its evidence is the decisions
and the transformation instead.

The results strip and the chart system are still built, and land on
PERQ, Scan-Optics, StormwaterONE and MembersFirst where real approved
figures exist.

## Status, 2026-11-20

Built on the flagship, `/projects/marketing-function-next-stage`:

- Six chapters of deliberately unequal composition. Two have no
  heading, one is a numbered list of five, one is a two-column duo,
  one is a quiet closing panel.
- Sticky section nav, scoped to the reading body, marking the chapter
  at mid-screen.
- Before-and-after rows, the workstream treatment, the featured-insight
  type treatment, the meta strip, related work as hairline rows.
- Chapter rhythm fixed: `.cst-chapter` was taking the global
  `section` padding and carrying 104px of nothing after every chapter.
  The page lost 959px without losing a word.

Not built, and why: the results strip and the chart system. The
flagship has no approved figures and is anonymized, so there is nothing
to put in them. The `mf-*` bar and share-bar CSS proven on the
MembersFirst draft is the thing to promote into the shared sheet when
PERQ, Scan-Optics, StormwaterONE and MembersFirst are converted, and
that happens with real numbers in hand, not before.

Two confidentiality leaks found and fixed on the anonymized pages: the
JSON-LD `worksFor` naming the employer, and a Related work row linking
to the named version of the same work. See MASTER.md.
