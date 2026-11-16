# Marketing command center · concept case study copy

Draft copy for the portfolio piece. Not served publicly (`/plans/*` returns
404 in `_redirects`). Companion to the anonymized walkthrough video.

**Disclosure line, to appear on the page and under the video:**

> Company name, screens and figures are fictional. The real tool is internal and confidential.

---

## 1. Page copy

### Title

Marketing command center

### Subtitle

One app for the whole team. Leadership, finance, marketing and sales each
get their own view, and every page says when it was last updated.

### The problem

Marketing data lived in separate exports, spreadsheets and tools. Answering
one question meant opening several of them.

Leadership, finance and the marketing team each needed a different view of
the same numbers. So the same figures got rebuilt by hand, in different
places, on different days.

The harder part was freshness. Nobody could tell how current any number was.
A number with no date on it is a number you have to go and check.

### Why I built it

The answer was not another report. It was one place where the number is the
number, and where the person reading it can see how old it is.

Leadership, finance and the marketing team do not want the same screen. They
want the same data doing three different jobs. Sales needed something
different again: not the numbers, but what is coming up and what it can use.

So I built the app around the person opening it rather than around the data
source.

### What I built

One app. A dashboard each for the CEO, for finance and for the marketing
manager, and a single login for sales. Everything in it sits behind
role-based access that I assign myself.

- **Lead and campaign performance** from the CRM, with the attribution method
  shown on the page, so nobody has to ask which one was used.
- **Event results at 60, 90 and 180 days**, with an executive summary.
- **Email and deliverability performance.**
- **Budget and expense tracking**, with receipts attached to each line.
- **One login for sales**, covering upcoming events, lists and playbooks.

### What runs automatically

Scheduled tasks refresh the data on a fixed rhythm. Email performance weekly.
Event summaries monthly. The expense tracker every Monday.

Receipts dropped into a shared folder are matched to their expense line
automatically. Lines without a receipt show as missing, so a gap is visible
rather than discovered later.

Every page states when its data was last updated.

### Where AI helped

I built the app with Claude, one working feature at a time, in plain English.
Not a specification handed over and a finished product handed back. One
feature described, built and checked, then the next one.

I also use it to assemble reporting from CRM data.

Two limits, on purpose. The app only reads from the CRM and the email
platform, and never publishes or changes anything on its own. Sensitive data
is limited by role, so what you can see depends on who you are.

### What's next

**Planned, not built.** Neither of these exists yet.

- A budget projection tool that turns a revenue target into the spend needed
  and how that spend splits.
- A library of validated case studies that sales can use to draft outreach.

### Result

OMITTED. The brief left the result placeholder unfilled, and its own
instruction was to omit the section in that case. Add one approved range or
percentage and this becomes a short closing section.

---

## 2. Card copy

**Tagline (one sentence)**

One app, a view for every role, and every number carries the date it was pulled.

**Blurb (25 words)**

Marketing data lived in separate exports and tools. I built one app: a
dashboard each for leadership, finance and marketing, plus one login for
sales.

---

## 3. Page title and meta description

**Title**

Marketing command center, a concept | Amber Fugedi

**Meta description**

A concept case study: one role-aware app giving leadership, finance,
marketing and sales their own view of the work, with every page dated.

---

## 4. LinkedIn post

Marketing data lives in separate exports, spreadsheets and tools.
Leadership, finance and marketing each need a different view of the same
numbers, and nobody knows how fresh any of them are.

So I built one app where each of them gets a dashboard, and sales gets one
login for upcoming events, lists and playbooks. Scheduled tasks refresh the
data on a fixed rhythm. Receipts match themselves to expense lines. Every
page says when it was last updated.

I built it with Claude, one working feature at a time, in plain English. It
reads from the CRM and the email platform. It never publishes or changes
anything itself.

The real tool is internal, so here is an anonymized concept version.

---

## Notes for Amber

- **The video and the brief disagree in two places.** The walkthrough shows
  two navigation items, Efficiency and Content studio, that are not in the
  approved facts, so the copy does not mention them. It also opens on
  "Marketing data lived in six places"; six is not in the facts either, so
  the copy says "separate exports, spreadsheets and tools" instead. Say the
  word and either can go in.
- **The copy uses the video's fictional company, Brightwell**, nowhere in the
  text, because the text never needs to name it. The name only appears
  on screen. That keeps the page safe to reuse if the video is ever recut.
- **The video already does the anonymizing work**: "Sample data" on every
  screen and a "Roadmap concept" chip on Projections and Case studies, which
  matches the two roadmap items above. The page copy and the video agree on
  what is built and what is planned.
