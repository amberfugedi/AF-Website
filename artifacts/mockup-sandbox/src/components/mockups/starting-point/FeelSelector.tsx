import { useState } from 'react';
import './FeelSelector_group.css';

type Situation = {
  selectorLabel: string;
  mainStatement: string;
  whatHappening: string;
  howIHelp: string;
  bestStart: string;
  cta: string;
  href: string;
};

const situations: Situation[] = [
  {
    selectorLabel: 'We have no real marketing foundation',
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
    selectorLabel: 'Too much of the marketing depends on me',
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
    selectorLabel: 'We have a team, but the work is not connecting',
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
    selectorLabel: 'I need an experienced person in my corner',
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

export function FeelSelector() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [transitioning, setTransitioning] = useState(false);
  const active = situations[activeIndex];

  const select = (index: number) => {
    if (index === activeIndex || transitioning) return;
    setTransitioning(true);
    window.setTimeout(() => {
      setActiveIndex(index);
      setTransitioning(false);
    }, 200);
  };

  return (
    <section className="feel-selector" aria-label="Find the kind of help that fits">
      {/* Aura washes — match the site's pastel cloud language */}
      <div className="feel-aura feel-aura-peach" aria-hidden="true" />
      <div className="feel-aura feel-aura-lavender" aria-hidden="true" />

      <div className="feel-layout">
        {/* ── Left: heading + selector ── */}
        <aside className="feel-list">
          <h2 className="feel-heading">
            What sounds{' '}
            {/* tab-em butter highlight — matches the site's signature phrase treatment */}
            <span className="feel-tab-em">like you?</span>
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
                  key={item.selectorLabel}
                  className={`feel-option${selected ? ' is-active' : ''}`}
                  type="button"
                  role="tab"
                  aria-selected={selected}
                  onClick={() => select(index)}
                >
                  {/* Butter tab-em highlight on label when active */}
                  <span className={`feel-option-label${selected ? ' is-highlighted' : ''}`}>
                    {item.selectorLabel}
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
          <p className="feel-main-statement">{active.mainStatement}</p>

          <p className="feel-section-label">What may be happening</p>
          <p className="feel-body">{active.whatHappening}</p>

          <p className="feel-section-label">How I help</p>
          <p className="feel-body feel-body-ink">{active.howIHelp}</p>

          {/* Best place to start — styled like a proof chip: slight tilt, raised surface */}
          <div className="feel-start-chip">
            <span className="feel-section-label feel-section-label-inline">Best place to start</span>
            <p className="feel-start-text">{active.bestStart}</p>
          </div>

          {/* Arrow-link — matches the site's arrow-link pattern exactly */}
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
