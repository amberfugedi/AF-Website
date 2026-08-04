import { useState } from 'react';
import './FeelSelector_group.css';

type Situation = {
  shortLabel: string;
  /* Per-situation pastel identity — mirrors the site's colored service cards */
  tint: string;        // strong-ish pastel for washes
  tintSoft: string;    // very light version for artifact paper + option bg
  mainStatement: string;
  whatHappening: string;
  howIHelp: string;
  bestStart: string;
  cta: string;
  href: string;
};

const situations: Situation[] = [
  {
    shortLabel: 'No marketing foundation',
    tint: 'rgba(252, 228, 196, 0.85)',   /* peach — matches Courses card */
    tintSoft: 'rgba(252, 228, 196, 0.30)',
    mainStatement: 'The business works. Marketing has never been clearly built around it.',
    whatHappening:
      "You may have grown through referrals, reputation, relationships, or the owner's effort without ever building a clear marketing function. Now you need to understand what matters, what support to hire, and what can wait.",
    howIHelp:
      'I help define the audience, positioning, message, priorities, and practical marketing foundation the business actually needs. Then we decide what can be handled internally, what should be outsourced, and what does not need to be done yet.',
    bestStart: 'Build Your Marketing Foundation or a focused strategy engagement.',
    cta: 'Explore the course',
    href: 'courses.html',
  },
  {
    shortLabel: 'Too much depends on me',
    tint: 'rgba(218, 212, 245, 0.85)',   /* lavender — matches Workflow & AI card */
    tintSoft: 'rgba(218, 212, 245, 0.30)',
    mainStatement: 'Marketing is happening, but too much of it still relies on you.',
    whatHappening:
      'The work lives in your head, your calendar, and a collection of disconnected tools, freelancers, and unfinished ideas. Things are getting done, but they are difficult to maintain, delegate, or improve.',
    howIHelp:
      'I clarify what matters most, simplify the work, create more useful systems, and reduce how much of the marketing function depends on one person.',
    bestStart: 'Workflow and AI advisory, focused consulting, or marketing systems work.',
    cta: 'See how I work',
    href: 'my-approach.html',
  },
  {
    shortLabel: 'The team is not connecting',
    tint: 'rgba(251, 237, 191, 0.90)',   /* butter — the site's highlight color */
    tintSoft: 'rgba(251, 237, 191, 0.35)',
    mainStatement: 'There is plenty of activity. The parts are not working together.',
    whatHappening:
      'You may have capable people, useful tools, and active campaigns, but the priorities, ownership, systems, messaging, or decisions are not aligned. The visible marketing problem may actually sit between teams or functions.',
    howIHelp:
      'I identify where the work is breaking down, connect marketing to the broader business strategy, and help the team make the most important changes practical and usable.',
    bestStart: 'Strategic consulting, fractional leadership, or a cross-functional project.',
    cta: 'See the expertise in action',
    href: 'expertise.html',
  },
  {
    shortLabel: 'I need someone in my corner',
    tint: 'rgba(255, 111, 97, 0.30)',    /* soft coral rose — personal, warm */
    tintSoft: 'rgba(255, 111, 97, 0.10)',
    mainStatement: 'You do not need someone to take over. You need someone experienced to think with.',
    whatHappening:
      'You may be leading marketing, inheriting a function, growing into a larger role, building a team, or making important decisions without another experienced person nearby to pressure-test the work.',
    howIHelp:
      'I provide practical guidance, honest perspective, and a place to work through decisions. We can review priorities, strategy, team challenges, executive communication, career growth, or the work itself.',
    bestStart: 'One-to-one mentoring, marketing leadership advisory, or ongoing thought partnership.',
    cta: 'Ask about mentoring',
    href: 'about.html#contact',
  },
];

// Small planning fragment SVGs — the changing visual payoff.
// Each one is a sparse, hand-feel note: ruled lines + sparse text + coral annotation.
// Newsreader italic inside the SVG matches the site's handwritten-feel notes.
function Artifact({ index, tintSoft }: { index: number; tintSoft: string }) {
  const ink = '#2E2A27';
  const coral = '#B8354A';
  const rules = [22, 44, 66, 88, 110];

  return (
    <figure className="feel-artifact" aria-hidden="true" style={{ background: `linear-gradient(${tintSoft}, ${tintSoft}), #FFFFFF` }}>
      <svg viewBox="0 0 200 128" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Ruled lines */}
        {rules.map(y => (
          <line key={y} x1="0" y1={y} x2="200" y2={y} stroke={ink} strokeOpacity="0.08" strokeWidth="0.7" />
        ))}
        {/* Margin rule */}
        <line x1="22" y1="0" x2="22" y2="128" stroke={ink} strokeOpacity="0.07" strokeWidth="0.7" />

        {index === 0 && <>
          {/* Blank plan — sparse items, open space suggesting "not yet defined" */}
          <text x="30" y="19" fill={ink} fillOpacity="0.45" fontFamily="Newsreader, Georgia, serif" fontStyle="italic" fontSize="11">Audience</text>
          <text x="30" y="41" fill={ink} fillOpacity="0.45" fontFamily="Newsreader, Georgia, serif" fontStyle="italic" fontSize="11">Positioning</text>
          <text x="30" y="63" fill={ink} fillOpacity="0.45" fontFamily="Newsreader, Georgia, serif" fontStyle="italic" fontSize="11">Priorities</text>
          <text x="30" y="85" fill={ink} fillOpacity="0.30" fontFamily="Newsreader, Georgia, serif" fontStyle="italic" fontSize="11">What can wait</text>
          {/* Coral annotation */}
          <text x="28" y="115" fill={coral} fontFamily="Newsreader, Georgia, serif" fontStyle="italic" fontSize="12">Where do we start?</text>
          <path d="M28 119 Q110 117 178 120" stroke={coral} strokeWidth="1.2" strokeLinecap="round" />
        </>}

        {index === 1 && <>
          {/* Overloaded task list — some items crossed out */}
          <text x="30" y="19" fill={ink} fillOpacity="0.50" fontFamily="Newsreader, Georgia, serif" fontStyle="italic" fontSize="11">Website</text>
          <text x="30" y="41" fill={ink} fillOpacity="0.50" fontFamily="Newsreader, Georgia, serif" fontStyle="italic" fontSize="11">Email</text>
          <text x="30" y="63" fill={ink} fillOpacity="0.50" fontFamily="Newsreader, Georgia, serif" fontStyle="italic" fontSize="11">Social</text>
          {/* Struck-through items — suggests overload */}
          <text x="30" y="85" fill={ink} fillOpacity="0.35" fontFamily="Newsreader, Georgia, serif" fontStyle="italic" fontSize="11">Follow-up</text>
          <line x1="28" y1="82" x2="104" y2="82" stroke={coral} strokeOpacity="0.55" strokeWidth="1" />
          {/* Looping arrow suggesting "still mine" */}
          <path d="M148 30 C168 30 172 60 152 68 C136 75 124 62 134 50" stroke={coral} strokeOpacity="0.55" strokeWidth="1.3" strokeLinecap="round" />
          <path d="M134 50 L130 57 M134 50 L141 52" stroke={coral} strokeOpacity="0.55" strokeWidth="1.3" strokeLinecap="round" />
          <text x="24" y="115" fill={coral} fontFamily="Newsreader, Georgia, serif" fontStyle="italic" fontSize="12">All still with me.</text>
          <path d="M24 119 Q80 117 148 120" stroke={coral} strokeWidth="1.2" strokeLinecap="round" />
        </>}

        {index === 2 && <>
          {/* Two-column conflicting notes */}
          <line x1="100" y1="8" x2="100" y2="100" stroke={ink} strokeOpacity="0.10" strokeWidth="0.8" />
          <text x="28" y="30" fill={ink} fillOpacity="0.50" fontFamily="Newsreader, Georgia, serif" fontStyle="italic" fontSize="11">Launch now</text>
          <text x="28" y="52" fill={ink} fillOpacity="0.45" fontFamily="Newsreader, Georgia, serif" fontStyle="italic" fontSize="11">Campaign ready</text>
          <text x="108" y="30" fill={ink} fillOpacity="0.50" fontFamily="Newsreader, Georgia, serif" fontStyle="italic" fontSize="11">Wait for sales</text>
          <text x="108" y="52" fill={ink} fillOpacity="0.45" fontFamily="Newsreader, Georgia, serif" fontStyle="italic" fontSize="11">Need sign-off</text>
          {/* Opposing arrows */}
          <path d="M78 72 L60 72" stroke={coral} strokeOpacity="0.7" strokeWidth="1.4" strokeLinecap="round" />
          <path d="M64 68 L60 72 L64 76" stroke={coral} strokeOpacity="0.7" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M120 72 L138 72" stroke={coral} strokeOpacity="0.7" strokeWidth="1.4" strokeLinecap="round" />
          <path d="M134 68 L138 72 L134 76" stroke={coral} strokeOpacity="0.7" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
          <text x="52" y="115" fill={coral} fontFamily="Newsreader, Georgia, serif" fontStyle="italic" fontSize="12">Who owns this?</text>
          <path d="M50 119 Q100 117 154 120" stroke={coral} strokeWidth="1.2" strokeLinecap="round" />
        </>}

        {index === 3 && <>
          {/* Focused decision questions */}
          <text x="30" y="22" fill={ink} fillOpacity="0.45" fontFamily="Newsreader, Georgia, serif" fontStyle="italic" fontSize="10.5">What am I missing?</text>
          <text x="30" y="44" fill={ink} fillOpacity="0.45" fontFamily="Newsreader, Georgia, serif" fontStyle="italic" fontSize="10.5">What needs to happen next?</text>
          <text x="30" y="66" fill={ink} fillOpacity="0.45" fontFamily="Newsreader, Georgia, serif" fontStyle="italic" fontSize="10.5">What call do I need to make?</text>
          {/* Bracket holding the questions together */}
          <path d="M186 14 C194 14 196 28 196 44 C196 60 194 74 186 74" stroke={coral} strokeOpacity="0.30" strokeWidth="1.5" strokeLinecap="round" fill="none" />
          <text x="24" y="115" fill={coral} fontFamily="Newsreader, Georgia, serif" fontStyle="italic" fontSize="12">Talk this through with me.</text>
          <path d="M24 119 Q100 117 174 120" stroke={coral} strokeWidth="1.2" strokeLinecap="round" />
        </>}
      </svg>
    </figure>
  );
}

export function FeelSelector() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [contentIndex, setContentIndex] = useState(0);
  const [transitioning, setTransitioning] = useState(false);
  const active = situations[contentIndex];

  const select = (index: number) => {
    if (index === activeIndex || transitioning) return;
    setActiveIndex(index);
    setTransitioning(true);
    window.setTimeout(() => {
      setContentIndex(index);
      setTransitioning(false);
    }, 200);
  };

  return (
    <section className="feel-selector" aria-label="Find the kind of help that fits">
      <div className="feel-aura feel-aura-peach" aria-hidden="true" />
      <div className="feel-aura feel-aura-lavender" aria-hidden="true" />

      <div className="feel-layout">
        {/* ── Left: heading + selector ── */}
        <aside className="feel-list">
          <h2 className="feel-heading">
            What sounds <span className="feel-tab-em">like you?</span>
          </h2>
          <p className="feel-intro">
            Start with the situation that feels closest. The right kind of support depends less on
            the size of the business and more on what the work needs now.
          </p>

          <div className="feel-situations" role="tablist" aria-label="Situations">
            {situations.map((item, index) => {
              const selected = activeIndex === index;
              return (
                <button
                  key={item.shortLabel}
                  className={`feel-option${selected ? ' is-active' : ''}`}
                  type="button"
                  role="tab"
                  aria-selected={selected}
                  onClick={() => select(index)}
                  style={selected ? { background: item.tintSoft } : undefined}
                >
                  <span className={`feel-option-label${selected ? ' is-highlighted' : ''}`}>
                    {item.shortLabel}
                  </span>
                  <span className="feel-option-arrow" aria-hidden="true">→</span>
                </button>
              );
            })}
          </div>
        </aside>

        {/* ── Right: response ── */}
        <div
          className={`feel-response${transitioning ? ' is-out' : ''}`}
          role="tabpanel"
          aria-live="polite"
        >
          {/* Color wash behind the response — shifts with each situation,
              echoing the site's tinted service cards */}
          <div className="feel-response-wash" aria-hidden="true" style={{ background: active.tint }} />

          {/* Compact changing artifact — the visual payoff */}
          <Artifact index={contentIndex} tintSoft={active.tintSoft} />

          {/* Main statement — dominant, clear */}
          <p className="feel-main-statement">{active.mainStatement}</p>

          <p className="feel-section-label">What may be happening</p>
          <p className="feel-body">{active.whatHappening}</p>

          <p className="feel-section-label">How I help</p>
          <p className="feel-body feel-body-ink">{active.howIHelp}</p>

          {/* Best place to start — plain, separated by rule, no card */}
          <div className="feel-start-block">
            <p className="feel-section-label feel-section-label-start">Best place to start</p>
            <p className="feel-start-text">{active.bestStart}</p>
          </div>

          <a className="feel-cta" href={active.href}>
            {active.cta}
            <svg className="feel-cta-arrow" viewBox="0 0 20 10" aria-hidden="true">
              <path d="M0 5h17M12 1l5 4-5 4" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
