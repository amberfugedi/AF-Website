import { useState } from 'react';
import './FeelSelector_group.css';

type Mark = 'arc' | 'circles' | 'lines' | 'bracket';

type Situation = {
  label: string;
  headline: string;
  body: string;
  cta: string;
  href: string;
  mark: Mark;
};

const situations: Situation[] = [
  {
    label: 'No marketing yet',
    headline: "The business works. Marketing hasn't been defined yet.",
    body: 'You need clarity on what matters, what to build, and what can wait. I help create the positioning, priorities, and practical foundation the business actually needs.',
    cta: 'Explore the course →',
    href: 'courses.html',
    mark: 'arc',
  },
  {
    label: 'It all depends on me',
    headline: 'Marketing lives in your head, your calendar, your to-do list.',
    body: 'I simplify the work, create clearer systems, and reduce how much depends on one person.',
    cta: 'See how I work →',
    href: 'my-approach.html',
    mark: 'circles',
  },
  {
    label: 'The team is not aligned',
    headline: "There's plenty of activity. The pieces aren't working together.",
    body: 'I find where the work is breaking down and help the team move the right changes forward.',
    cta: 'See the expertise →',
    href: 'expertise.html',
    mark: 'lines',
  },
  {
    label: 'I need someone in my corner',
    headline: "You're leading the work and making difficult calls without a thought partner.",
    body: 'I provide practical guidance, honest perspective, and ongoing thought partnership.',
    cta: "Let's talk →",
    href: 'about.html#contact',
    mark: 'bracket',
  },
];

function Mark({ kind }: { kind: Mark }) {
  const stroke = {
    fill: 'none',
    stroke: '#FF6F61',
    strokeWidth: 1.8,
    strokeLinecap: 'round' as const,
  };
  return (
    <svg className="feel-mark" viewBox="0 0 56 40" aria-hidden="true">
      {kind === 'arc' && <path {...stroke} d="M5 31C13 10 30 5 51 9" />}
      {kind === 'circles' && <><circle {...stroke} cx="21" cy="20" r="10" /><circle {...stroke} cx="34" cy="20" r="10" /></>}
      {kind === 'lines' && <><path {...stroke} d="M8 12l17 8-17 8" /><path {...stroke} d="M34 12l14 8-14 8" /></>}
      {kind === 'bracket' && <path {...stroke} d="M35 7c-12 3-12 23 0 26M43 7c12 3 12 23 0 26" />}
    </svg>
  );
}

export function FeelSelector() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [transitioning, setTransitioning] = useState(false);
  const [contentIndex, setContentIndex] = useState(0);
  const active = situations[contentIndex];

  const select = (index: number) => {
    if (index === activeIndex || transitioning) return;
    setActiveIndex(index);
    setTransitioning(true);
    window.setTimeout(() => {
      setContentIndex(index);
      setTransitioning(false);
    }, 175);
  };

  return (
    <section className="feel-selector" aria-label="Find the kind of help that fits">
      <div className="feel-layout">
        <aside className="feel-list">
          <h2>What sounds like you?</h2>
          <p className="feel-intro">Different businesses need different kinds of help. Find the one that fits.</p>
          <div className="feel-situations" role="tablist" aria-label="Situations">
            {situations.map((item, index) => {
              const selected = activeIndex === index;
              return (
                <button
                  key={item.label}
                  className={`feel-option${selected ? ' is-active' : ''}`}
                  type="button"
                  role="tab"
                  aria-selected={selected}
                  onClick={() => select(index)}
                >
                  <span className="feel-indicator" aria-hidden="true" />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </div>
        </aside>

        <div className={`feel-card${transitioning ? ' is-transitioning' : ''}`} role="tabpanel" aria-live="polite">
          <Mark kind={active.mark} />
          <div className="feel-content">
            <p className="feel-eyebrow">0{contentIndex + 1} · {active.label}</p>
            <h3>{active.headline}</h3>
            <p className="feel-body">{active.body}</p>
            <a className="feel-cta" href={active.href}>{active.cta}</a>
          </div>
        </div>
      </div>
    </section>
  );
}