"""A2 Exteriors prototype content.

Sources for facts: the A2 yard sign and door hanger (amberfugedi.com
portfolio), Anthony Aubrey's testimonial, and the client brief.
Phone confirmed by Amber 2026-11-14: 860-430-4568.
Anything not in those sources is wrapped [[tbc:...]] and must be confirmed
or removed before launch. General cleaning education is industry-standard
and phrased as general, not as a claim about A2's specific process.
"""

BIZ = {
    "name": "A2 Exteriors",
    "phone_display": "860-430-4568",
    "phone_e164": "+18604304568",
    "email": "{{EMAIL}}",
    "url": "https://{{DOMAIN}}",
    "owner": "Anthony Aubrey",
    "tagline": "Because first impressions matter.",
}

BUSINESS_LD = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    "@id": BIZ["url"] + "/#business",
    "name": "A2 Exteriors",
    "slogan": "Because first impressions matter.",
    "description": "Exterior cleaning for homes and businesses in Central Connecticut: house washing, roof washing, driveway and concrete cleaning, patio and walkway cleaning, and commercial exterior cleaning.",
    "url": BIZ["url"] + "/",
    "telephone": "+1-860-430-4568",
    "logo": BIZ["url"] + "/images/a2-exteriors-logo.png",
    "image": BIZ["url"] + "/images/og-default.jpg",
    "areaServed": [
        {"@type": "City", "name": "Wethersfield", "containedInPlace": {"@type": "State", "name": "Connecticut"}}
    ],
    "_comment": "Add every confirmed town to areaServed, sameAs [GBP URL], and email before launch. No street address: A2 is a service-area business.",
}

WEBSITE_LD = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": BIZ["url"] + "/#website",
    "name": "A2 Exteriors",
    "url": BIZ["url"] + "/",
    "publisher": {"@id": BIZ["url"] + "/#business"},
}


def ph(title, note="", dark=False, extra=""):
    cls = "ph is-dark" if dark else "ph"
    if extra:
        cls += " " + extra
    sub = f"<br>{note}" if note else ""
    return f'<div class="{cls}" role="img" aria-label="Photo placeholder: {title}"><span class="ph-label"><strong>Photo needed</strong>{title}{sub}</span></div>'


def before_after(label, landscape=False, dark=False):
    cls = "before-after is-landscape" if landscape else "before-after"
    return f"""<div class="{cls}">
  <div class="ba-pane is-before"><span class="ba-tag">BEFORE</span>{ph(label + ", before", dark=dark)}</div>
  <div class="ba-pane is-after"><span class="ba-tag">AFTER</span>{ph(label + ", after", dark=dark)}</div>
</div>"""


def faq_html(items, heading_level=None):
    out = []
    for q, a in items:
        out.append(f'<details class="faq-item"><summary>{q}</summary><div class="faq-answer"><p>{a}</p></div></details>')
    return '<div class="faq-list">' + "".join(out) + "</div>"


def faq_ld(items):
    import re
    strip = lambda s: re.sub(r"<[^>]+>", "", re.sub(r"\[\[tbc:(.+?)\]\]", r"\1", s))
    return {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {"@type": "Question", "name": strip(q), "acceptedAnswer": {"@type": "Answer", "text": strip(a)}}
            for q, a in items
        ],
    }


# ---------------------------------------------------------------------
# SERVICES  (Webflow: Services CMS collection, one template page)
# ---------------------------------------------------------------------
SERVICES = [
    {
        "slug": "house-washing",
        "name": "House Washing",
        "short": "Low-pressure washing for siding, trim, and soffits that removes algae, mildew, and dirt.",
        "surfaces": "Vinyl · clapboard · fiber cement · stucco · painted trim",
        "title": "House Washing in Central Connecticut | A2 Exteriors",
        "description": "Soft wash house washing for vinyl, clapboard, and painted siding in Central CT. Removes algae, mildew, and dirt. Free estimates: 860-430-4568.",
        "h1": "House washing for Connecticut homes",
        "lede": "Green film on the north wall, gray streaks under the gutters, dirt splashed up from the garden beds. We wash siding and trim with low pressure and a cleaning solution, the method siding is built to handle.",
        "answer_q": "What is house washing?",
        "answer": "House washing cleans the outside walls of your home: siding, trim, soffits, and the outer faces of gutters. Most siding gets cleaned with low pressure and a solution that kills algae and mildew, followed by a rinse. High pressure is the wrong tool for most siding because it can push water behind panels and strip paint.",
        "body": """
<h2>What a house wash covers</h2>
<ul class="check-list">
  <li>Siding on every side of the house</li>
  <li>Trim, soffits, and fascia</li>
  <li>Outer faces of gutters and downspouts</li>
  <li>[[tbc:Shutters, light fixtures, and the front entry area]]</li>
</ul>
<p>Window glass gets rinsed along with the siding. [[tbc:A house wash is not a window cleaning service]], so expect clean glass, not streak-free glass.</p>

<h2>Problems it fixes</h2>
<p>Connecticut summers stay humid, and shaded walls stay damp long after the sun dries the rest of the house. That is where you see it first:</p>
<ul>
  <li><strong>Green or black algae</strong>, usually on north-facing walls and under trees</li>
  <li><strong>Mildew</strong> in gray or black spots, often near decks and downspouts</li>
  <li><strong>Pollen, dirt, and cobwebs</strong> collected under eaves and around lights</li>
  <li><strong>Mud splash</strong> along the bottom row of siding above mulch beds</li>
</ul>
<p>Some marks need more than washing. Rust streaks, paint overspray, and the chalky film on aging vinyl or aluminum may lighten but not disappear. We point those out before we start.</p>

<h2>How we clean it</h2>
<p>We match the method to the surface. On most homes that means a soft wash:</p>
<ol>
  <li>Wet down plants and shrubs around the house. [[tbc:Plant protection steps]]</li>
  <li>Apply a cleaning solution at low pressure, starting from the bottom and working up.</li>
  <li>Give it a few minutes to break down algae and mildew.</li>
  <li>Rinse from the top down with clean water, then rinse the plants again.</li>
</ol>
<p>[[tbc:Solution and equipment details, once Anthony confirms what A2 uses]]</p>

<h2>What to expect on the day</h2>
<ul>
  <li><strong>Before we arrive:</strong> close windows, bring in pets, and move toys, cushions, and anything fragile away from the walls.</li>
  <li><strong>Water:</strong> [[tbc:we connect to an outdoor faucet, so please make sure one works]].</li>
  <li><strong>Time:</strong> [[tbc:most single-family homes take two to four hours]].</li>
  <li><strong>After:</strong> siding dries within an hour or two in sun. You can open windows once we finish.</li>
</ul>

<h2>When to book</h2>
<p>Late spring, after the pollen settles, is the most common time. A wash also makes sense before you list a house, before a big event at home, or any time you see green spreading on a wall. Most homes need it every one to two years.</p>
""",
        "faqs": [
            ("Can pressure washing damage siding?", "Yes. High pressure can crack vinyl, force water behind siding and into wall cavities, strip paint, and splinter wood. That is why siding gets a low-pressure wash with a cleaning solution, and high pressure stays on concrete."),
            ("How often should a house be washed?", "Most homes need a wash every one to two years. Houses under trees, near wetlands, or with walls that stay in shade often need it every year."),
            ("Do I need to be home during the wash?", "[[tbc:Not usually. If we can reach a working outdoor faucet and get through any gates, you can be at work.]]"),
        ],
        "ba": "House wash",
    },
    {
        "slug": "roof-washing",
        "name": "Roof Washing",
        "short": "Low-pressure roof cleaning that removes black streaks, algae, and moss from shingles.",
        "surfaces": "Asphalt shingles · [[tbc:other roof types]]",
        "title": "Roof Washing in Central CT | A2 Exteriors",
        "description": "Low-pressure roof washing that removes black streaks, algae, and moss from asphalt shingles. Free estimates in Central Connecticut: 860-430-4568.",
        "h1": "Roof washing without high pressure",
        "lede": "Those black streaks running down your roof are algae, and they spread. We clean roofs with a low-pressure treatment, the approach shingle makers recommend, so the granules stay on the shingles.",
        "answer_q": "What causes black streaks on a roof?",
        "answer": "Most dark streaks on Connecticut asphalt roofs come from algae, usually a type called Gloeocapsa magma. It feeds on the limestone filler in shingles and grows on slopes that stay shaded and damp. Algae itself is mostly cosmetic. Moss and lichen are the bigger concern because they hold moisture against the shingles and can lift their edges over time.",
        "body": """
<h2>Why roofs get a soft wash</h2>
<p>Asphalt shingles are covered in mineral granules that protect them from sun and weather. A pressure washer blasts those granules off, which shortens the life of the roof and can void a shingle warranty. The Asphalt Roofing Manufacturers Association advises against pressure washing asphalt roofs for this reason.</p>
<p>A soft wash uses low pressure and a cleaning solution that kills the algae and moss where they grow. The streaks lift off with a rinse or wash away over the following weeks of rain.</p>

<h2>What a roof wash covers</h2>
<ul class="check-list">
  <li>Black streaks and algae staining on shingles</li>
  <li>Moss and lichen treatment</li>
  <li>[[tbc:Rinsing gutters and downspouts after the roof is clean]]</li>
</ul>
<p>Roof types: [[tbc:asphalt shingle roofs. Metal, cedar, and slate roofs on request]].</p>

<h2>What to expect</h2>
<ul>
  <li><strong>Results on the day:</strong> algae streaks usually lighten right away. Thick moss dies on contact but can take a few weeks of rain to let go of the roof.</li>
  <li><strong>Your yard:</strong> we wet plants under the drip line before and after, and rinse anything the runoff touches.</li>
  <li><strong>Access:</strong> [[tbc:how A2 works on roofs: ladder, roof access, steep-pitch limits]].</li>
  <li><strong>Time:</strong> [[tbc:typical duration]].</li>
</ul>

<h2>When to book</h2>
<p>Book when you first notice streaks on the shaded side of the roof. Algae spreads across a slope, and moss is easier to treat before it thickens. A clean roof also helps when you are selling, since buyers and inspectors see the roof in every listing photo.</p>

<h2>Keeping it clean longer</h2>
<p>Algae comes back. How fast depends on shade and moisture. Trimming back overhanging branches lets the roof dry out sooner, and zinc or copper strips near the ridge slow regrowth as rain carries traces of metal down the slope.</p>
""",
        "faqs": [
            ("Can a roof be cleaned without damaging the shingles?", "Yes, with low pressure and a cleaning solution instead of a pressure washer. High pressure strips the protective granules from asphalt shingles. A soft wash kills the algae and moss without blasting the surface."),
            ("Will the black streaks come back?", "Eventually. Algae spores travel on the wind, so regrowth depends on how much shade and moisture your roof gets. Many roofs stay clear for a few years after a cleaning."),
            ("Do you remove moss?", "We treat moss so it dies and releases from the shingles. Thin moss rinses off. Thick patches can take a few weeks of rain to clear after treatment. [[tbc:Whether A2 hand-brushes heavy moss]]"),
        ],
        "ba": "Roof wash",
    },
    {
        "slug": "driveway-concrete-cleaning",
        "name": "Driveway and Concrete Cleaning",
        "short": "Pressure cleaning for driveways, sidewalks, steps, and garage aprons.",
        "surfaces": "Driveways · sidewalks · steps · garage aprons · curbs",
        "title": "Driveway and Concrete Cleaning in CT | A2 Exteriors",
        "description": "Driveway pressure washing and concrete cleaning in Central CT. Removes mildew, tire marks, and leaf stains. Free estimates: 860-430-4568.",
        "h1": "Driveway and concrete cleaning",
        "lede": "Concrete takes a beating from road salt, leaf stains, tire marks, and mildew in the shady spots. Pressure cleaning brings back the original color in even passes, without the stripes a rental washer leaves behind.",
        "answer_q": "How do you remove buildup from concrete?",
        "answer": "Concrete is porous, so dirt, mildew, and tire rubber settle into the surface instead of sitting on top. A rotary surface cleaner run at high pressure lifts most of it in even passes, and a pre-treatment helps with mildew and organic stains. Old oil and rust stains often lighten without disappearing completely.",
        "body": """
<h2>What we clean</h2>
<ul class="check-list">
  <li>Driveways and garage aprons</li>
  <li>Sidewalks, front walks, and steps</li>
  <li>Curbs and concrete edging</li>
  <li>[[tbc:Pool decks, garage floors, other flatwork]]</li>
</ul>

<h2>Problems it fixes</h2>
<ul>
  <li><strong>Black mildew and green algae</strong> in shaded sections and along lawn edges</li>
  <li><strong>Leaf and tannin stains</strong> from fall, the brown outlines oak and maple leaves leave behind</li>
  <li><strong>Tire marks</strong> where cars turn and park</li>
  <li><strong>Winter grime</strong> from road salt and sand</li>
  <li><strong>Oil and rust stains</strong>, which usually lighten but may not lift completely</li>
</ul>

<h2>How we clean it</h2>
<p>[[tbc:We use a rotary surface cleaner]] for open areas. It spins two jets under a hood a few inches above the concrete, so the whole surface gets the same pressure. That avoids the light and dark stripes, sometimes called zebra striping, that a handheld wand leaves. Edges, steps, and corners get detailed by hand. [[tbc:Pre-treatment and hot water details]]</p>

<h2>What to expect</h2>
<ul>
  <li><strong>Before:</strong> move cars, bins, and planters off the concrete.</li>
  <li><strong>During:</strong> the surface stays wet and slippery while we work.</li>
  <li><strong>After:</strong> you can walk and drive on it once it dries, usually within a few hours on a warm day.</li>
</ul>

<h2>When to book</h2>
<p>Spring clears off winter salt and sand. Late fall, after the leaves come down, lifts tannin stains before they set over winter. If you plan to seal your driveway, clean it first so the sealer bonds to concrete, not dirt.</p>
""",
        "faqs": [
            ("Will pressure washing get oil stains out of my driveway?", "It depends on how old the stain is and how deep it soaked in. Fresh stains often come out. Older stains usually get lighter. We will tell you what to expect when we see it."),
            ("Can pressure washing damage concrete?", "It can if someone uses too narrow a tip or holds it too close. That etches the surface and leaves stripes. A surface cleaner keeps the nozzle height and pressure even across the whole slab."),
            ("How soon can I drive on the driveway?", "Once it dries. On a warm, sunny day that is usually a few hours."),
        ],
        "ba": "Driveway cleaning",
    },
    {
        "slug": "patio-walkway-cleaning",
        "name": "Patio and Walkway Cleaning",
        "short": "Cleaning for pavers, brick, and stone that removes slick algae, moss, and grime.",
        "surfaces": "Pavers · brick · bluestone · flagstone · stamped concrete",
        "title": "Patio and Paver Cleaning in Central CT | A2 Exteriors",
        "description": "Patio, paver, and walkway cleaning in Central CT. Removes slippery algae, moss, and grime from pavers, brick, and stone. Call 860-430-4568.",
        "h1": "Patio and walkway cleaning",
        "lede": "Pavers, brick, and stone go green and slick in the shade, and moss fills the joints. We clean them with pressure matched to the material, so you get the color back without chipped edges or etched stone.",
        "answer_q": "Can pavers be pressure washed?",
        "answer": "Yes, with care. Pavers, brick, and most natural stone clean up well with pressure. Too much pressure, though, blasts sand out of the joints, chips paver edges, and etches softer stone like bluestone. The fix is lower pressure, the right nozzle, and a wand that keeps moving.",
        "body": """
<h2>What we clean</h2>
<ul class="check-list">
  <li>Concrete pavers and brick patios</li>
  <li>Bluestone, flagstone, and other natural stone</li>
  <li>Stamped and plain concrete patios</li>
  <li>Front walks, garden paths, and stone steps</li>
</ul>

<h2>Problems it fixes</h2>
<ul>
  <li><strong>Slippery green algae</strong> on walks and steps that stay shaded. Removing it makes the surface safer underfoot.</li>
  <li><strong>Moss and growth in joints</strong> between pavers and stones</li>
  <li><strong>Grill grease, food, and furniture marks</strong> on patios</li>
  <li><strong>General dirt</strong> that dulls the color of brick and stone</li>
</ul>
<p>White haze on pavers, called efflorescence, comes from salts inside the material. Washing alone may not remove it. [[tbc:Whether A2 treats efflorescence]]</p>

<h2>What to expect</h2>
<ul>
  <li><strong>Before:</strong> move furniture, grills, and planters off the patio, [[tbc:or ask us to move them]].</li>
  <li><strong>Joint sand:</strong> cleaning can loosen some sand between pavers. [[tbc:Whether A2 re-sands joints after cleaning]]</li>
  <li><strong>After:</strong> the surface dries in a few hours. Weeds rooted deep in joints can grow back. Cleaning removes surface growth, not roots.</li>
</ul>

<h2>When to book</h2>
<p>Book in spring to get the patio ready for the season, or any time a shaded walk turns slick. If you plan to seal pavers, have them cleaned first.</p>
""",
        "faqs": [
            ("Will cleaning wash out the sand between my pavers?", "Some sand can loosen, especially in older joints. Using lower pressure and angling the spray away from the joints keeps loss to a minimum. [[tbc:Re-sanding availability]]"),
            ("Does patio cleaning kill weeds?", "It removes moss and surface growth from joints. Weeds with deep roots can return, since washing does not reach the root."),
            ("Why is my walkway slippery?", "A thin film of algae grows on stone and concrete that stays shaded and damp. It turns slick when wet. Cleaning removes the film and makes the surface easier to walk on."),
        ],
        "ba": "Patio cleaning",
    },
    {
        "slug": "commercial-exterior-cleaning",
        "name": "Commercial Exterior Cleaning",
        "short": "Exterior cleaning for storefronts, entryways, sidewalks, and building walls.",
        "surfaces": "Storefronts · entryways · sidewalks · building exteriors",
        "title": "Commercial Pressure Washing in Central CT | A2 Exteriors",
        "description": "Commercial exterior cleaning in Central Connecticut for storefronts, entryways, sidewalks, and building walls. Free estimates: 860-430-4568.",
        "h1": "Commercial exterior cleaning",
        "lede": "Customers see your entrance before they see anything inside. We clean storefronts, sidewalks, and building exteriors so your property looks cared for from the parking lot.",
        "answer_q": "What does commercial exterior cleaning include?",
        "answer": "Commercial exterior cleaning covers the outside surfaces customers and tenants see: building walls, storefronts and entryways, sidewalks, and walkways. The method changes by surface. Concrete gets pressure cleaning, and painted or coated walls get a low-pressure wash. Scope gets set on a walkthrough of your property.",
        "body": """
<h2>What we clean</h2>
<ul class="check-list">
  <li>Storefronts and entry areas</li>
  <li>Sidewalks, walkways, and building approaches</li>
  <li>Building walls and facades</li>
  <li>[[tbc:Dumpster pads, drive-throughs, parking areas]]</li>
</ul>

<h2>Properties we work with</h2>
<p>[[tbc:Retail storefronts, offices, restaurants, and multi-unit residential properties]]. If you manage several buildings, we can quote them together.</p>

<h2>How we schedule</h2>
<ul>
  <li>[[tbc:Early morning or after-hours work so customers and tenants are not disrupted]]</li>
  <li>[[tbc:One-time cleanings or a recurring schedule]]</li>
  <li>[[tbc:Certificate of insurance available on request]]</li>
</ul>

<h2>Wash water</h2>
<p>Connecticut has rules about what can go into storm drains, and they apply to commercial washing. [[tbc:How A2 handles runoff on commercial sites]]</p>

<h2>Getting a quote</h2>
<p>Send the property address, what needs cleaning, and a few photos. For larger sites we will set up a walkthrough before quoting.</p>
""",
        "faqs": [
            ("Can you clean outside business hours?", "[[tbc:Yes. We schedule early mornings or evenings so the work does not get in the way of customers.]]"),
            ("Do you offer recurring service?", "[[tbc:Yes. Many commercial properties book quarterly or seasonal cleanings.]]"),
            ("Can you provide a certificate of insurance?", "[[tbc:Yes, on request before work begins.]]"),
        ],
        "ba": "Storefront cleaning",
    },
]

# ---------------------------------------------------------------------
# Shared content blocks
# ---------------------------------------------------------------------
HOME_FAQS = [
    ("What is the difference between pressure washing and soft washing?", "Pressure washing uses high water pressure to remove dirt from hard surfaces like concrete. Soft washing uses low pressure and a cleaning solution to clean surfaces that high pressure can damage, like siding and roofs. Most homes need both, on different surfaces."),
    ("How much does exterior cleaning cost?", "Price depends on the size of the house or surface, how much buildup there is, and access. We give free estimates, and photos texted to @@PHONE@@ help us quote faster."),
    ("Do you clean commercial properties?", "Yes. We clean storefronts, entryways, sidewalks, and building exteriors. See <a href=\"@@L:services/commercial-exterior-cleaning@@\">commercial exterior cleaning</a>."),
    ("What towns do you serve?", "We serve Wethersfield and [[tbc:surrounding Central Connecticut towns]]. See <a href=\"@@L:service-areas@@\">service areas</a> for the current list."),
    ("What should I do before my appointment?", "Close windows, bring pets inside, and move cars, furniture, and anything fragile away from the areas we are cleaning. [[tbc:Make sure an outdoor faucet works.]]"),
]

FAQ_GROUPS = [
    ("Methods and results", [
        HOME_FAQS[0],
        ("Can pressure washing damage siding?", SERVICES[0]["faqs"][0][1]),
        ("Can a roof be cleaned without damaging shingles?", SERVICES[1]["faqs"][0][1]),
        ("What causes dark stains on roofs?", "Most dark streaks on asphalt roofs come from algae, usually Gloeocapsa magma, which grows on shaded, damp slopes and feeds on limestone filler in the shingles. Read more in <a href=\"@@L:resources/black-streaks-on-roof@@\">what causes black streaks on your roof</a>."),
        ("How do you remove buildup from concrete?", SERVICES[2]["answer"]),
        ("Will every stain come out?", "No. Algae, mildew, and dirt usually clean up well. Rust, oil, paint, and the chalky film on old vinyl or aluminum may lighten without disappearing. We point those out before we start so you know what to expect."),
    ]),
    ("Scheduling and preparation", [
        ("What should homeowners do before an exterior cleaning appointment?", "Close windows and doors, bring pets inside, and move cars, patio furniture, toys, and anything fragile away from the areas we are cleaning. Unlock gates. [[tbc:Make sure an outdoor faucet works, since we connect to it.]]"),
        ("How long does an exterior cleaning appointment take?", "[[tbc:A house wash on a typical single-family home takes two to four hours. A driveway or patio often takes one to three hours. Roofs and commercial jobs vary more, and we will give you a time window with your estimate.]]"),
        ("Do I need to be home?", SERVICES[0]["faqs"][2][1]),
        ("What happens if it rains?", "[[tbc:Light rain does not affect most cleaning. In heavy rain, wind, or freezing temperatures we reschedule and let you know as early as we can.]]"),
        ("Is it safe for my plants and pets?", "We wet plants before and after cleaning and rinse anything the runoff touches. Keep pets inside until the work is done and surfaces have been rinsed. [[tbc:Confirm plant care steps]]"),
    ]),
    ("Estimates and timing", [
        ("How do I get an estimate?", "Fill out the <a href=\"@@L:free-estimate@@\">estimate form</a>, or call or text @@PHONE@@. Photos of the areas you want cleaned help us quote faster."),
        ("Are estimates free?", "Yes."),
        ("How often should a house be washed?", SERVICES[0]["faqs"][1][1]),
        ("When should I consider professional cleaning?", "Call a professional when you see algae or mildew spreading, when a roof shows black streaks or moss, when a walkway turns slippery, or before you sell. Professional cleaning also makes sense on roofs and second stories, where ladder work and the wrong pressure carry real risk."),
    ]),
]


# ---------------------------------------------------------------------
# Projects (Webflow: Projects CMS collection). All placeholders.
# ---------------------------------------------------------------------
PROJECTS = [
    ("house-washing", "House wash", "Wethersfield, CT", "Two-story vinyl colonial"),
    ("roof-washing", "Roof wash", "[[tbc:Town]]", "Asphalt shingle roof"),
    ("driveway-concrete-cleaning", "Driveway cleaning", "Wethersfield, CT", "Concrete driveway and walk"),
    ("patio-walkway-cleaning", "Patio cleaning", "[[tbc:Town]]", "Paver patio"),
    ("commercial-exterior-cleaning", "Storefront cleaning", "[[tbc:Town]]", "Retail storefront and sidewalk"),
    ("house-washing", "House wash", "[[tbc:Town]]", "Clapboard cape"),
]


def project_card(p, tag="article"):
    slug, label, town, prop = p
    svc = next(s for s in SERVICES if s["slug"] == slug)
    return f"""<{tag} class="project-card reveal" data-service="{slug}">
  {before_after(label)}
  <div class="project-meta"><span class="tag">{svc["name"]}</span><span class="tag is-plain">{town}</span></div>
  <h3>{prop}</h3>
</{tag}>"""


def services_list():
    rows = []
    for i, s in enumerate(SERVICES, 1):
        rows.append(f"""<li><a class="service-row" href="@@L:services/{s["slug"]}@@">
  <span class="service-num">0{i}</span>
  <h3>{s["name"]}</h3>
  <p>{s["short"]}<span class="service-surfaces">{s["surfaces"]}</span></p>
  <span class="service-arrow">@@I:arrow@@</span>
</a></li>""")
    return '<ul class="service-list">' + "".join(rows) + "</ul>"


def estimate_side_card():
    return """<div class="side-card is-ink">
  <h3>Get a free estimate</h3>
  <p>Text a few photos and your town to @@PHONE@@, or fill out the form.</p>
  <div class="stack">
    <a class="button is-primary is-block" href="@@L:free-estimate@@" data-track="cta-estimate">Get a Free Estimate</a>
    <a class="button is-ghost-light is-block" href="@@SMS@@" data-track="sms-click">@@I:text@@ Text a photo</a>
  </div>
</div>"""


# ---------------------------------------------------------------------
# Page bodies
# ---------------------------------------------------------------------
HOME_HERO = f"""
<section class="hero" aria-labelledby="hero-title">
  <div class="container hero-inner">
    <div>
      <p class="hero-tagline">Because first impressions matter.</p>
      <h1 id="hero-title">Exterior cleaning for Central Connecticut homes and businesses</h1>
      <p class="hero-sub">House and roof washing, driveway and patio cleaning, and commercial exterior cleaning from a locally owned company. Send us a few photos and get a free estimate.</p>
      <div class="button-row">
        <a class="button is-primary" href="@@L:free-estimate@@" data-track="cta-estimate">Get a Free Estimate</a>
        <a class="button is-ghost-light" href="@@TEL@@" data-track="phone-click">@@I:phone@@ Call or text @@PHONE@@</a>
      </div>
      <ul class="hero-points">
        <li>Residential and commercial</li>
        <li>Free estimates</li>
        <li>Text a photo for a quote</li>
      </ul>
    </div>
    <div class="hero-media">
      {before_after("Real A2 house wash", dark=True)}
    </div>
  </div>
</section>
<section class="trust-strip" aria-label="Why customers choose A2 Exteriors">
  <div class="container">
    <ul class="trust-list">
      <li>@@I:home@@<span><strong>Locally owned</strong>Wethersfield neighbors, not a franchise</span></li>
      <li>@@I:building@@<span><strong>Homes and businesses</strong>Residential and commercial work</span></li>
      <li>@@I:camera@@<span><strong>Text a photo</strong>Fast quotes from your phone</span></li>
      <li>@@I:shield@@<span><strong>[[tbc:Licensed and insured]]</strong>Details on request</span></li>
    </ul>
  </div>
</section>"""

HOME_BODY = f"""
<section class="section" aria-labelledby="services-title">
  <div class="container">
    <div class="section-head is-split">
      <div>
        <p class="eyebrow">Services</p>
        <h2 id="services-title">The right method for every surface</h2>
        <p class="lede">Siding and roofs need a gentle wash. Concrete can take real pressure. We clean each part of your property the way that material needs.</p>
      </div>
      <a class="text-link" href="@@L:services@@">All services</a>
    </div>
    {services_list()}
  </div>
</section>

<section class="section is-stone" aria-labelledby="work-title">
  <div class="container">
    <div class="section-head is-split">
      <div>
        <p class="eyebrow">Our Work</p>
        <h2 id="work-title">Before and after</h2>
        <p class="lede">Real jobs from around Central Connecticut. [[tbc:Project photos from Anthony]]</p>
      </div>
      <a class="text-link" href="@@L:our-work@@">See all projects</a>
    </div>
    <div class="project-grid">
      {"".join(project_card(p) for p in PROJECTS[:3])}
    </div>
  </div>
</section>

<section class="section" aria-labelledby="why-title">
  <div class="container">
    <div class="section-head">
      <p class="eyebrow">Why A2 Exteriors</p>
      <h2 id="why-title">A local company that cares how your place looks</h2>
    </div>
    <div class="grid-3">
      <div class="point reveal">
        <h3>The right technique</h3>
        <p>Soft wash for siding and roofs, pressure for concrete. Using the right method protects your home and gets a cleaner result.</p>
      </div>
      <div class="point reveal">
        <h3>Your neighbors</h3>
        <p>A2 is a local company serving Wethersfield and nearby towns. You talk to the owner, Anthony Aubrey, [[tbc:and he works on the jobs himself]].</p>
      </div>
      <div class="point reveal">
        <h3>Straight answers</h3>
        <p>Some stains come out and some only lighten. We tell you which is which before we start, so the result matches what you expected.</p>
      </div>
    </div>
  </div>
</section>

<section class="section is-ink" aria-labelledby="how-title">
  <div class="container">
    <div class="section-head">
      <p class="eyebrow">How it works</p>
      <h2 id="how-title">From photo to clean in three steps</h2>
    </div>
    <ol class="steps">
      <li><h3>Send us the details</h3><p>Fill out the estimate form, or text photos and your town to @@PHONE@@.</p></li>
      <li><h3>Get your estimate</h3><p>We send a price for the work. [[tbc:Most estimates go out within one business day.]] Larger jobs may need a quick visit first.</p></li>
      <li><h3>We clean it</h3><p>Pick a date that works. We show up, do the work, and walk you through the result.</p></li>
    </ol>
  </div>
</section>

<section class="section" aria-labelledby="areas-title">
  <div class="container area-panel">
    <div>
      <p class="eyebrow">Service Areas</p>
      <h2 id="areas-title">Serving Wethersfield and Central Connecticut</h2>
      <p class="lede">We work in Wethersfield and [[tbc:the surrounding towns]]. If you are close by and do not see your town, ask.</p>
      <ul class="area-list">
        <li><a href="@@L:service-areas/wethersfield-ct@@">Wethersfield</a></li>
        <li><span>[[tbc:Town]]</span></li>
        <li><span>[[tbc:Town]]</span></li>
        <li><span>[[tbc:Town]]</span></li>
      </ul>
      <a class="text-link" href="@@L:service-areas@@">All service areas</a>
    </div>
    {ph("Map of confirmed service towns", "Static map image or embedded Google map", extra="is-wide")}
  </div>
</section>

<section class="section is-stone" aria-labelledby="reviews-title">
  <div class="container">
    <div class="section-head">
      <p class="eyebrow">Reviews</p>
      <h2 id="reviews-title">What customers say</h2>
    </div>
    <div class="grid-3">
      <figure class="quote-card is-empty"><blockquote>[[tbc:Approved customer review]]</blockquote><figcaption>Name as permitted · Town · Service</figcaption></figure>
      <figure class="quote-card is-empty"><blockquote>[[tbc:Approved customer review]]</blockquote><figcaption>Name as permitted · Town · Service</figcaption></figure>
      <figure class="quote-card is-empty"><blockquote>[[tbc:Approved customer review]]</blockquote><figcaption>Name as permitted · Town · Service</figcaption></figure>
    </div>
  </div>
</section>

<section class="section" aria-labelledby="faq-title">
  <div class="container is-narrow">
    <div class="section-head">
      <p class="eyebrow">FAQ</p>
      <h2 id="faq-title">Common questions</h2>
    </div>
    {faq_html(HOME_FAQS)}
    <p style="margin-top:2rem"><a class="text-link" href="@@L:faq@@">More questions and answers</a></p>
  </div>
</section>
"""


def service_page(s):
    others = "".join(
        f'<li><a href="@@L:services/{o["slug"]}@@">{o["name"]}</a></li>' for o in SERVICES if o is not s
    )
    body = f"""
<section class="section">
  <div class="container layout-sidebar">
    <article class="prose">
      <div class="answer-box"><span class="label">{s["answer_q"]}</span><p>{s["answer"]}</p></div>
      {s["body"]}
    </article>
    <aside class="sidebar" aria-label="Get an estimate">
      {estimate_side_card()}
      <div class="side-card">
        <h3>Other services</h3>
        <ul class="side-links">{others}</ul>
      </div>
    </aside>
  </div>
</section>
<section class="section is-stone" aria-labelledby="ba-title">
  <div class="container">
    <div class="section-head">
      <p class="eyebrow">Our Work</p>
      <h2 id="ba-title">{s["name"]} before and after</h2>
    </div>
    <div class="grid-2">
      {before_after(s["ba"], landscape=True)}
      {before_after(s["ba"], landscape=True)}
    </div>
    <p style="margin-top:2rem"><a class="text-link" href="@@L:our-work@@">See more projects</a></p>
  </div>
</section>
<section class="section" aria-labelledby="svc-faq-title">
  <div class="container is-narrow">
    <h2 id="svc-faq-title">{s["name"]} questions</h2>
    {faq_html(s["faqs"])}
  </div>
</section>
"""
    service_ld = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": s["name"],
        "serviceType": s["name"],
        "description": s["short"],
        "provider": {"@id": BIZ["url"] + "/#business"},
        "areaServed": BUSINESS_LD["areaServed"],
        "url": BIZ["url"] + "/services/" + s["slug"],
    }
    return {
        "route": "services/" + s["slug"],
        "title": s["title"],
        "description": s["description"],
        "eyebrow": "Services",
        "h1": s["h1"],
        "lede": s["lede"],
        "hero_actions": '<div class="button-row"><a class="button is-primary" href="@@L:free-estimate@@" data-track="cta-estimate">Get a Free Estimate</a><a class="button is-ghost-light" href="@@TEL@@" data-track="phone-click">@@I:phone@@ Call or text @@PHONE@@</a></div>',
        "crumbs": [("Services", "services"), (s["name"], "services/" + s["slug"])],
        "body": body,
        "schema": [service_ld, faq_ld(s["faqs"])],
    }


SERVICES_INDEX_BODY = f"""
<section class="section">
  <div class="container">
    <h2 class="visually-hidden">All services</h2>
    {services_list()}
  </div>
</section>
<section class="section is-stone" aria-labelledby="method-title">
  <div class="container grid-2">
    <div>
      <p class="eyebrow">Our approach</p>
      <h2 id="method-title">Soft wash or pressure wash?</h2>
      <p class="lede">Different surfaces need different cleaning. Getting this wrong is how siding cracks and shingles lose their granules.</p>
      <a class="text-link" href="@@L:resources/pressure-washing-vs-soft-washing@@">Read the full comparison</a>
    </div>
    <div class="grid-2" style="gap:1.5rem">
      <div class="point"><h3>Soft wash</h3><p>Low pressure plus a cleaning solution. Used on siding, roofs, painted surfaces, and stucco.</p></div>
      <div class="point"><h3>Pressure wash</h3><p>High pressure, often with a surface cleaner. Used on concrete, and with care on pavers, brick, and stone.</p></div>
    </div>
  </div>
</section>
"""

OUR_WORK_BODY = f"""
<section class="section">
  <div class="container">
    <h2 class="visually-hidden">Projects</h2>
    <div class="filter-bar" role="group" aria-label="Filter projects by service">
      <button class="filter-button" type="button" data-filter="all" aria-pressed="true">All</button>
      {"".join(f'<button class="filter-button" type="button" data-filter="{s["slug"]}" aria-pressed="false">{s["name"]}</button>' for s in SERVICES)}
    </div>
    <p id="filter-status" class="visually-hidden" aria-live="polite"></p>
    <div class="project-grid">
      {"".join(project_card(p) for p in PROJECTS)}
    </div>
  </div>
</section>
"""

SERVICE_AREAS_BODY = f"""
<section class="section">
  <div class="container area-panel">
    <div>
      <h2>Towns we serve</h2>
      <p>A2 Exteriors is based in Central Connecticut and works in these towns. Each town page shows real jobs we have done there.</p>
      <ul class="area-list">
        <li><a href="@@L:service-areas/wethersfield-ct@@">Wethersfield, CT</a></li>
        <li><span>[[tbc:Town, CT]]</span></li>
        <li><span>[[tbc:Town, CT]]</span></li>
        <li><span>[[tbc:Town, CT]]</span></li>
        <li><span>[[tbc:Town, CT]]</span></li>
      </ul>
      <p>Close to one of these towns but not on the list? Call or text @@PHONE@@ and ask. We may still be able to help.</p>
    </div>
    {ph("Map of confirmed service towns", "Static map image or embedded Google map", extra="is-wide")}
  </div>
</section>
<section class="section is-stone">
  <div class="container">
    <div class="section-head">
      <h2>Services in every town</h2>
      <p class="lede">The same services and the same standards, whichever town you are in.</p>
    </div>
    {services_list()}
  </div>
</section>
"""

WETHERSFIELD_BODY = f"""
<section class="section">
  <div class="container layout-sidebar">
    <article class="prose">
      <p>A2 Exteriors cleans homes and businesses across Wethersfield, from [[tbc:neighborhoods or roads where A2 has worked]] to the storefronts along the Silas Deane Highway [[tbc:if A2 has commercial work there]].</p>
      <h2>Exterior cleaning for Wethersfield homes</h2>
      <p>Wethersfield has houses of every age, from the colonials and capes in Old Wethersfield's historic district to newer homes with vinyl siding. Older homes often have painted wood clapboard, which needs a gentle low-pressure wash. High pressure can strip paint and push water into old wood. Mature trees shade many Wethersfield streets, and shaded walls and roofs are where algae and mildew take hold first.</p>
      <p>[[tbc:Original local detail from Anthony: common problems he sees in Wethersfield, types of jobs, anything specific to the town]]</p>
      <h2>Services in Wethersfield</h2>
      <ul>
        {"".join(f'<li><a href="@@L:services/{s["slug"]}@@">{s["name"]}</a></li>' for s in SERVICES)}
      </ul>
    </article>
    <aside class="sidebar" aria-label="Get an estimate">{estimate_side_card()}</aside>
  </div>
</section>
<section class="section is-stone" aria-labelledby="wf-work">
  <div class="container">
    <div class="section-head">
      <h2 id="wf-work">Recent work in Wethersfield</h2>
      <p class="lede">This page goes live once it has real Wethersfield projects to show.</p>
    </div>
    <div class="project-grid">
      {"".join(project_card(p) for p in PROJECTS if p[2] == "Wethersfield, CT")}
    </div>
  </div>
</section>
"""

ABOUT_BODY = f"""
<section class="section">
  <div class="container grid-2">
    <div class="prose">
      <h2>Meet Anthony</h2>
      <p>A2 Exteriors is owned by Anthony Aubrey. [[tbc:Anthony's story: how he started, why exterior cleaning, background, how long he has been doing this work]]</p>
      <p>A2 cleans siding, roofs, driveways, patios, and commercial buildings. [[tbc:Plans to add services such as gutters, decks, and fences]]</p>
      <h2>How we work</h2>
      <ul class="check-list">
        <li><strong>The right technique for each surface.</strong> Soft wash for siding and roofs, pressure for concrete.</li>
        <li><strong>Honest expectations.</strong> We tell you what will come clean and what may only lighten before we start.</li>
        <li><strong>Respect for your property.</strong> We protect plants, keep the work area tidy, and leave things the way we found them, minus the dirt.</li>
        <li><strong>Local accountability.</strong> We live and work here. You can reach the owner directly at @@PHONE@@.</li>
      </ul>
      <h2>Licensing and insurance</h2>
      <p>[[tbc:Connecticut registration or license number, and insurance details. Shown only once confirmed.]]</p>
    </div>
    <div>{ph("Anthony Aubrey on a job", "Real photo of the owner with equipment or truck", extra="is-tall")}</div>
  </div>
</section>
"""

FAQ_BODY = """
<section class="section">
  <div class="container is-narrow">
    """ + "".join(
    f'<div class="faq-group"><h2>{name}</h2>{faq_html(items)}</div>' for name, items in FAQ_GROUPS
) + """
  </div>
</section>
"""

# ---------------------------------------------------------------------
# Articles (Webflow: Articles CMS collection)
# ---------------------------------------------------------------------
ARTICLES = [
    {
        "slug": "pressure-washing-vs-soft-washing",
        "title": "Pressure washing vs. soft washing: which does your home need?",
        "seo": "Pressure Washing vs. Soft Washing | A2 Exteriors",
        "desc": "Pressure washing uses high pressure for concrete. Soft washing uses low pressure and a cleaning solution for siding and roofs. Which fits each surface.",
        "excerpt": "Two methods, two jobs. Which one belongs on your siding, your roof, and your driveway.",
        "cat": "Methods",
        "date": "{{PUBLISH_DATE}}",
        "answer": "Pressure washing uses high water pressure to blast dirt off hard surfaces like concrete. Soft washing uses low pressure plus a cleaning solution to kill and rinse away algae, mildew, and grime on surfaces high pressure can damage, like siding and roofs. Most homes need both, on different parts of the property.",
        "body": """
<h2>How pressure washing works</h2>
<p>A pressure washer pumps water through a narrow nozzle at high pressure. The force of the water does the cleaning. On concrete, that force lifts dirt, mildew, and tire marks out of the surface. Professionals often attach a rotary surface cleaner, a spinning bar under a round hood, so a whole driveway gets the same pressure and comes out even.</p>

<h2>How soft washing works</h2>
<p>Soft washing uses a pressure close to a garden hose. A cleaning solution does the work: it kills algae, mildew, and moss and loosens dirt, then a low-pressure rinse carries it away. Because the solution kills growth at the root, a soft-washed surface tends to stay clean longer than one that was only blasted.</p>

<h2>Which surfaces get which method</h2>
<table>
  <thead><tr><th scope="col">Surface</th><th scope="col">Usual method</th></tr></thead>
  <tbody>
    <tr><td>Vinyl, aluminum, or fiber cement siding</td><td>Soft wash</td></tr>
    <tr><td>Painted wood clapboard and trim</td><td>Soft wash</td></tr>
    <tr><td>Stucco</td><td>Soft wash</td></tr>
    <tr><td>Asphalt shingle roof</td><td>Soft wash only</td></tr>
    <tr><td>Concrete driveways and sidewalks</td><td>Pressure wash, usually with a surface cleaner</td></tr>
    <tr><td>Pavers, brick, and natural stone</td><td>Moderate pressure, adjusted to the material</td></tr>
  </tbody>
</table>

<h2>What goes wrong with the wrong method</h2>
<p>High pressure on vinyl siding can crack panels and drive water behind them, where it soaks insulation and sheathing. On painted wood it strips paint and raises the grain. On an asphalt roof it knocks off the granules that protect the shingles from the sun, which shortens the roof's life and can void the manufacturer's warranty.</p>
<p>Going too soft on concrete has the opposite problem. A low-pressure rinse leaves embedded dirt and tire marks in place.</p>

<h2>Renting a pressure washer</h2>
<p>A rental pressure washer works for small concrete jobs if you keep the nozzle moving and use a wide tip. Keep it off your siding, your roof, and anything painted. Ladder work with a pressure washer is a common way to get hurt, since the recoil can push you off balance.</p>

<h2>When to call a professional</h2>
<p>Call a professional for roofs, second stories, painted or older siding, and any time you are not sure what the surface can handle. <a href="@@L:free-estimate@@">Request a free estimate</a> and send a few photos.</p>
""",
        "related": ["house-washing", "roof-washing", "driveway-concrete-cleaning"],
    },
    {
        "slug": "black-streaks-on-roof",
        "title": "Black streaks on your roof: what causes them and how to clean them",
        "seo": "What Causes Black Streaks on a Roof? | A2 Exteriors",
        "desc": "Black streaks on asphalt roofs are algae, usually Gloeocapsa magma. Why it grows, whether it harms shingles, and how roofs get cleaned safely.",
        "excerpt": "Those dark stripes on the north side of the roof are alive. Here is what they are and what to do about them.",
        "cat": "Roofs",
        "date": "{{PUBLISH_DATE}}",
        "answer": "Black streaks on asphalt shingle roofs are algae, most often a species called Gloeocapsa magma. It feeds on the limestone filler in shingles and grows where the roof stays shaded and damp. You can remove it with a low-pressure wash and a cleaning solution. Pressure washing a shingle roof causes damage.",
        "body": """
<h2>Why algae grows on roofs</h2>
<p>Algae spores travel on the wind and land on every roof. They take hold where moisture lingers: north-facing slopes, sections under trees, and spots that stay wet after rain. Most asphalt shingles contain crushed limestone as filler, and the algae feeds on it. As it grows, it develops a dark outer layer that protects it from the sun. That dark layer is the streak you see from the street.</p>
<p>Streaks usually start near the top of a slope and run down in the direction water drains, because rain spreads the algae as it flows.</p>

<h2>Algae, moss, or lichen?</h2>
<ul>
  <li><strong>Algae</strong> shows up as black or dark gray streaks. It is mostly cosmetic.</li>
  <li><strong>Moss</strong> is green and fuzzy and grows in clumps, often along shingle edges. It holds water against the roof and can lift shingles as it grows.</li>
  <li><strong>Lichen</strong> looks like flat, crusty spots, often pale green or gray. It grips the surface hard and can take granules with it if scraped off.</li>
</ul>

<h2>Does it damage the roof?</h2>
<p>Algae alone does little structural harm, but it makes a roof look older and can make the attic warmer, because dark streaks absorb more heat. Moss and lichen cause more trouble because they trap moisture. Over time that moisture breaks down shingles and can work its way under them.</p>

<h2>How roofs get cleaned</h2>
<p>The Asphalt Roofing Manufacturers Association advises against pressure washing asphalt shingle roofs. High pressure strips the protective granules. The safer method is a soft wash: a cleaning solution applied at low pressure that kills the algae and moss, followed by a gentle rinse. Algae streaks usually lighten the same day. Moss dies on contact but can take a few weeks of rain to let go.</p>

<h2>Keeping it from coming back</h2>
<ul>
  <li>Trim branches that shade the roof, so it dries faster after rain.</li>
  <li>Keep gutters clear so water drains off the roof edge.</li>
  <li>Install zinc or copper strips near the ridge. Rain carries traces of the metal down the roof and slows regrowth.</li>
  <li>When you replace the roof, ask about algae-resistant shingles, which contain copper granules.</li>
</ul>
<p>Seeing streaks on your roof? <a href="@@L:services/roof-washing@@">Learn about roof washing</a> or <a href="@@L:free-estimate@@">request a free estimate</a>.</p>
""",
        "related": ["roof-washing", "house-washing"],
    },
    {
        "slug": "how-often-to-wash-house",
        "title": "How often should you wash your house in Connecticut?",
        "seo": "How Often Should You Wash Your House? | A2 Exteriors",
        "desc": "Most Connecticut homes need a house wash every one to two years, and shaded homes often need one yearly. Signs to watch for and when to book.",
        "excerpt": "A schedule for siding, roofs, and concrete, based on how Connecticut weather treats a house.",
        "cat": "Maintenance",
        "date": "{{PUBLISH_DATE}}",
        "answer": "Most Connecticut homes do well with a house wash every one to two years. Homes under trees, near wetlands, or with walls that stay shaded and damp often need a wash every year. Roofs and concrete run on their own schedules.",
        "body": """
<h2>Signs your house is due</h2>
<ul>
  <li>Green or black film on the north side of the house or under trees</li>
  <li>Gray or black spots of mildew around decks, downspouts, and corners</li>
  <li>A yellow-green dust of pollen that stays after a rain</li>
  <li>Mud splashed up on the lowest rows of siding</li>
  <li>Cobwebs and dirt collected under the eaves and around outdoor lights</li>
</ul>

<h2>How Connecticut weather adds up</h2>
<p>Spring brings a heavy coat of tree pollen, usually peaking in May. Summer humidity keeps shaded walls damp, which is when algae and mildew spread fastest. Fall drops leaves that stain concrete and clog gutters. Winter adds road salt and sand to driveways and walks. A house that gets a lot of sun and sits away from trees may go two years between washes. A house in the woods may need one every spring.</p>

<h2>The best time of year to book</h2>
<p>Late spring through early fall works best. Cleaning solutions work better in mild temperatures, and surfaces need to dry. Most companies stop washing once overnight temperatures drop near freezing. Booking in late spring, after the pollen settles, gets the house clean for summer.</p>

<h2>Other parts of the house</h2>
<ul>
  <li><strong>Roof:</strong> clean when streaks or moss appear. Many roofs go several years between cleanings.</li>
  <li><strong>Driveway and walks:</strong> once a year or every other year, often in spring or after fall leaves.</li>
  <li><strong>Patios:</strong> once a year before outdoor season, more often in heavy shade.</li>
</ul>
<p>Ready to book? <a href="@@L:services/house-washing@@">See house washing</a> or <a href="@@L:free-estimate@@">request a free estimate</a>.</p>
""",
        "related": ["house-washing", "roof-washing", "driveway-concrete-cleaning"],
    },
]


def article_card(a):
    return f"""<a class="article-card reveal" href="@@L:resources/{a["slug"]}@@">
  {ph(a["title"], "Real photo from a job")}
  <span class="article-meta">{a["cat"]}</span>
  <h3>{a["title"]}</h3>
  <p>{a["excerpt"]}</p>
</a>"""


RESOURCES_BODY = f"""
<section class="section">
  <div class="container">
    <h2 class="visually-hidden">Articles</h2>
    <div class="grid-3">{"".join(article_card(a) for a in ARTICLES)}</div>
  </div>
</section>
"""


def article_page(a):
    rel = "".join(
        f'<li><a href="@@L:services/{r}@@">{next(s["name"] for s in SERVICES if s["slug"] == r)}</a></li>' for r in a["related"]
    )
    body = f"""
<section class="section">
  <div class="container layout-sidebar">
    <article class="prose">
      <p class="article-meta">By A2 Exteriors · <span class="tbc">{a["date"]}</span></p>
      <div class="answer-box"><span class="label">Short answer</span><p>{a["answer"]}</p></div>
      {a["body"]}
    </article>
    <aside class="sidebar" aria-label="Related">
      {estimate_side_card()}
      <div class="side-card"><h3>Related services</h3><ul class="side-links">{rel}</ul></div>
    </aside>
  </div>
</section>
"""
    ld = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": a["title"],
        "description": a["desc"],
        "author": {"@id": BIZ["url"] + "/#business"},
        "publisher": {"@id": BIZ["url"] + "/#business"},
        "mainEntityOfPage": BIZ["url"] + "/resources/" + a["slug"],
        "datePublished": a["date"],
    }
    return {
        "route": "resources/" + a["slug"],
        "title": a["seo"],
        "description": a["desc"],
        "eyebrow": a["cat"],
        "h1": a["title"],
        "crumbs": [("Resources", "resources"), (a["title"], "resources/" + a["slug"])],
        "body": body,
        "schema": [ld],
    }


SERVICE_OPTIONS = "".join(f'<option value="{s["name"]}">{s["name"]}</option>' for s in SERVICES)

ESTIMATE_BODY = f"""
<section class="section">
  <div class="container layout-sidebar">
    <div class="form-card">
      <!-- Webflow: native Form Block named "Estimate Request".
           Redirect on success: /thank-you. Notification email set in
           Site settings → Forms. reCAPTCHA on. File upload needs a paid
           site plan (10 MB limit per file). -->
      <form action="@@L:thank-you@@" method="get" name="estimate-request" aria-describedby="form-intro">
        <h2 class="visually-hidden">Estimate request form</h2>
        <p id="form-intro">Tell us about the job and we will get back to you with a free estimate. Fields marked optional can be skipped.</p>
        <div class="form-grid">
          <div class="field"><label for="f-name">Name</label><input class="input" id="f-name" name="name" type="text" autocomplete="name" required></div>
          <div class="field"><label for="f-phone">Phone</label><input class="input" id="f-phone" name="phone" type="tel" autocomplete="tel" inputmode="tel" required></div>
          <div class="field"><label for="f-email">Email</label><input class="input" id="f-email" name="email" type="email" autocomplete="email" required></div>
          <div class="field"><label for="f-town">Town or ZIP code</label><input class="input" id="f-town" name="town-or-zip" type="text" autocomplete="postal-code" required></div>
          <div class="field is-full">
            <label for="f-service">Service</label>
            <select class="select" id="f-service" name="service" required>
              <option value="">Choose a service</option>
              {SERVICE_OPTIONS}
              <option value="Not sure">Not sure / more than one</option>
            </select>
          </div>
          <div class="field is-full">
            <label for="f-desc">What needs cleaning? <span class="optional">(optional)</span></label>
            <textarea class="textarea" id="f-desc" name="description" placeholder="For example: two-story vinyl house, green on the back wall, plus the front walk."></textarea>
          </div>
          <div class="field is-full">
            <label for="f-photo">Photos <span class="optional">(optional)</span></label>
            <input class="input" id="f-photo" name="photo" type="file" accept="image/*" aria-describedby="f-photo-hint">
            <span class="hint" id="f-photo-hint">Or text photos to @@PHONE@@ after you submit.</span>
          </div>
          <div class="honeypot" aria-hidden="true"><label for="f-website">Website</label><input id="f-website" name="website" type="text" tabindex="-1" autocomplete="off"></div>
        </div>
        <div style="margin-top:1.5rem"><button class="button is-primary is-block" type="submit" data-track="form-submit">Send my estimate request</button></div>
        <p class="form-note">We use your details only to respond to this request. See our <a href="@@L:privacy@@">privacy policy</a>.</p>
      </form>
    </div>
    <aside class="sidebar" aria-label="Other ways to reach us">
      <ul class="contact-methods">
        <li><a class="contact-method" href="@@TEL@@" data-track="phone-click"><span class="icon-box">@@I:phone@@</span><span><strong>@@PHONE@@</strong><span>Call us</span></span></a></li>
        <li><a class="contact-method" href="@@SMS@@" data-track="sms-click"><span class="icon-box">@@I:text@@</span><span><strong>Text a photo</strong><span>Fastest way to get a quote</span></span></a></li>
        <li><a class="contact-method" href="mailto:{BIZ["email"]}"><span class="icon-box">@@I:mail@@</span><span><strong>[[tbc:{BIZ["email"]}]]</strong><span>Email us</span></span></a></li>
      </ul>
      <div class="side-card">
        <h3>What happens next</h3>
        <ol>
          <li>We review your request and photos.</li>
          <li>We send an estimate or set up a quick visit for larger jobs. [[tbc:Response time]]</li>
          <li>You pick a date.</li>
        </ol>
      </div>
    </aside>
  </div>
</section>
"""

THANKS_BODY = """
<section class="section">
  <div class="container is-narrow">
    <h2>What happens next</h2>
    <p>We will review your request and get back to you with an estimate. [[tbc:Most requests get a reply within one business day.]]</p>
    <p>If you have not sent photos yet, text them to <a href="@@SMS@@">@@PHONE@@</a>. They help us price the job without a visit.</p>
    <div class="button-row" style="margin-top:2rem">
      <a class="button is-secondary" href="@@L:our-work@@">See our work</a>
      <a class="button is-secondary" href="@@L:@@">Back to home</a>
    </div>
  </div>
</section>
<!-- Conversion: GA4 event "generate_lead" fires on this page view. -->
"""

PRIVACY_BODY = """
<section class="section">
  <div class="container is-narrow prose">
    <p>[[tbc:Privacy policy text, reviewed by the business owner. Must cover: what the estimate form collects (name, email, phone, town, service, description, photos), how A2 uses it (responding to estimate requests only), Webflow as the form processor and host, Google Analytics if installed, how to request deletion, and contact details.]]</p>
  </div>
</section>
"""

NOT_FOUND_BODY = """
<section class="section">
  <div class="container is-narrow">
    <p class="lede">The page you were looking for is not here. Try one of these instead:</p>
    <div class="button-row" style="margin-top:1.5rem">
      <a class="button is-primary" href="@@L:free-estimate@@">Get a Free Estimate</a>
      <a class="button is-secondary" href="@@L:services@@">Our services</a>
      <a class="button is-secondary" href="@@L:@@">Home</a>
    </div>
  </div>
</section>
"""

ALL_FAQ_ITEMS = [i for _, items in FAQ_GROUPS for i in items]

PAGES = [
    {
        "route": "",
        "title": "Exterior Cleaning in Central Connecticut | A2 Exteriors",
        "description": "House and roof washing, driveway and patio cleaning, and commercial exterior cleaning in Central Connecticut. Free estimates: 860-430-4568.",
        "hero_html": HOME_HERO,
        "body": HOME_BODY,
        "schema": [BUSINESS_LD, WEBSITE_LD, faq_ld(HOME_FAQS)],
    },
    {
        "route": "services",
        "title": "Exterior Cleaning Services | A2 Exteriors",
        "description": "House washing, roof washing, driveway and concrete cleaning, patio and walkway cleaning, and commercial exterior cleaning in Central Connecticut.",
        "eyebrow": "Services",
        "h1": "Exterior cleaning services",
        "lede": "Five services, one standard: the right method for each surface, and a clear picture of the result before we start.",
        "crumbs": [("Services", "services")],
        "body": SERVICES_INDEX_BODY,
    },
    *[service_page(s) for s in SERVICES],
    {
        "route": "our-work",
        "title": "Before and After Photos | Our Work | A2 Exteriors",
        "description": "Before and after photos of house washing, roof washing, driveway, patio, and commercial cleaning jobs by A2 Exteriors in Central Connecticut.",
        "eyebrow": "Our Work",
        "h1": "Before and after",
        "lede": "Real jobs, with the town and service for each one. Filter by service to see the work you are thinking about.",
        "crumbs": [("Our Work", "our-work")],
        "body": OUR_WORK_BODY,
    },
    {
        "route": "service-areas",
        "title": "Service Areas | Central Connecticut | A2 Exteriors",
        "description": "A2 Exteriors provides exterior cleaning in Wethersfield and surrounding Central Connecticut towns. See the towns we serve.",
        "eyebrow": "Service Areas",
        "h1": "Where we work",
        "lede": "Exterior cleaning in Wethersfield and the surrounding Central Connecticut towns.",
        "crumbs": [("Service Areas", "service-areas")],
        "body": SERVICE_AREAS_BODY,
    },
    {
        "route": "service-areas/wethersfield-ct",
        "title": "Pressure Washing in Wethersfield, CT | A2 Exteriors",
        "description": "House washing, roof washing, and driveway and patio cleaning in Wethersfield, CT from a locally owned company. Free estimates: 860-430-4568.",
        "eyebrow": "Service Areas",
        "h1": "Exterior cleaning in Wethersfield, CT",
        "lede": "House washing, roof washing, and concrete and patio cleaning for Wethersfield homes and businesses, from your neighbors at A2 Exteriors.",
        "hero_actions": '<div class="button-row"><a class="button is-primary" href="@@L:free-estimate@@" data-track="cta-estimate">Get a Free Estimate</a></div>',
        "crumbs": [("Service Areas", "service-areas"), ("Wethersfield, CT", "service-areas/wethersfield-ct")],
        "body": WETHERSFIELD_BODY,
    },
    {
        "route": "about",
        "title": "About A2 Exteriors | Locally Owned Exterior Cleaning",
        "description": "A2 Exteriors is a locally owned exterior cleaning company in Central Connecticut, owned by Anthony Aubrey. Learn how we work.",
        "eyebrow": "About",
        "h1": "Because first impressions matter",
        "lede": "A2 Exteriors is a locally owned exterior cleaning company serving homes and businesses in Central Connecticut.",
        "crumbs": [("About", "about")],
        "body": ABOUT_BODY,
    },
    {
        "route": "faq",
        "title": "Exterior Cleaning FAQ | A2 Exteriors",
        "description": "Answers about pressure washing vs. soft washing, roof cleaning, how to prepare for an appointment, how long it takes, and how to get an estimate.",
        "eyebrow": "FAQ",
        "h1": "Questions and answers",
        "lede": "How the cleaning works, how to prepare, and how estimates work. Do not see your question? Call or text @@PHONE@@.",
        "crumbs": [("FAQ", "faq")],
        "body": FAQ_BODY,
        "schema": [faq_ld(ALL_FAQ_ITEMS)],
    },
    {
        "route": "resources",
        "title": "Exterior Cleaning Guides for Homeowners | A2 Exteriors",
        "description": "Plain answers about house washing, roof algae, soft washing, and keeping your home's exterior clean in Connecticut.",
        "eyebrow": "Resources",
        "h1": "Guides for homeowners",
        "lede": "Plain answers about cleaning your home's exterior, from people who do it every day.",
        "crumbs": [("Resources", "resources")],
        "body": RESOURCES_BODY,
    },
    *[article_page(a) for a in ARTICLES],
    {
        "route": "free-estimate",
        "title": "Get a Free Estimate | A2 Exteriors",
        "description": "Request a free exterior cleaning estimate from A2 Exteriors. Fill out the form, or call or text photos to 860-430-4568.",
        "eyebrow": "Free Estimate",
        "h1": "Get a free estimate",
        "lede": "Tell us what needs cleaning. Photos help us quote faster.",
        "crumbs": [("Free Estimate", "free-estimate")],
        "body": ESTIMATE_BODY,
        "no_cta_band": True,
    },
    {
        "route": "thank-you",
        "title": "Thanks for Your Request | A2 Exteriors",
        "description": "Your estimate request was sent to A2 Exteriors.",
        "h1": "Thanks. We got your request.",
        "body": THANKS_BODY,
        "no_cta_band": True,
        "exclude_from_sitemap": True,
    },
    {
        "route": "privacy",
        "title": "Privacy Policy | A2 Exteriors",
        "description": "How A2 Exteriors collects and uses information submitted through this website.",
        "h1": "Privacy policy",
        "crumbs": [("Privacy", "privacy")],
        "body": PRIVACY_BODY,
        "no_cta_band": True,
    },
    {
        "route": "404",
        "title": "Page Not Found | A2 Exteriors",
        "description": "This page could not be found.",
        "h1": "Page not found",
        "body": NOT_FOUND_BODY,
        "no_cta_band": True,
        "exclude_from_sitemap": True,
    },
]
