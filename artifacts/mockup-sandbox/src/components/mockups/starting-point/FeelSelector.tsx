import { useState } from 'react';
import './FeelSelector_group.css';

type Mark = 'arc' | 'circles' | 'lines' | 'sweep';
type Situation = {
  label: string;
  description: string;
  howIHelp: string;
  bestStart: string;
  cta: string;
  href: string;
  mark: Mark;
};

const situations: Situation[] = [
  { label: 'No marketing yet', description: 'The business works, but marketing has never been clearly defined. You need clarity on what matters, what to build, and what can wait.', howIHelp: 'I help create the positioning, priorities, and practical foundation the business actually needs.', bestStart: 'Build Your Marketing Foundation or a focused strategy engagement.', cta: 'Explore the course →', href: 'courses.html', mark: 'sweep' },
  { label: 'It all depends on me', description: 'Marketing lives in your head, your calendar, and a collection of disconnected people or tools.', howIHelp: 'I simplify the work, create clearer systems, and reduce how much depends on one person.', bestStart: 'Workflow and AI advisory or focused consulting.', cta: 'See how I work →', href: 'my-approach.html', mark: 'circles' },
  { label: 'The team is not aligned', description: 'There is plenty of activity, but priorities, ownership, messaging, or decisions are not working together.', howIHelp: 'I find where the work is breaking down and help the team move the right changes forward.', bestStart: 'Strategic consulting, fractional leadership, or a cross-functional project.', cta: 'See the expertise →', href: 'expertise.html', mark: 'lines' },
  { label: 'I need someone in my corner', description: 'You are leading the work, growing into a larger role, or making difficult decisions without an experienced person to pressure-test them with.', howIHelp: 'I provide practical guidance, honest perspective, and ongoing thought partnership.', bestStart: 'One-to-one mentoring or marketing leadership advisory.', cta: "Let's talk →", href: 'about.html#contact', mark: 'arc' },
];

function Mark({ kind }: { kind: Mark }) {
  const stroke = { fill: 'none', stroke: '#FF6F61', strokeWidth: 1.7, strokeLinecap: 'round' as const };
  return <svg className="feel-mark" viewBox="0 0 64 24" aria-hidden="true">
    {kind === 'sweep' && <path {...stroke} d="M3 16c12-9 27-7 39-3 7 2 12 2 19-2" />}
    {kind === 'circles' && <path {...stroke} d="M18 12c0-6 8-9 14-5 6 4 4 12-3 14-8 2-15-2-11-9 3-5 12-6 17-2" />}
    {kind === 'lines' && <><path {...stroke} d="M8 5l18 7-18 7" /><path {...stroke} d="M37 5l18 7-18 7" /></>}
    {kind === 'arc' && <path {...stroke} d="M4 17c10-15 28-17 42-8 5 3 9 4 14 2" />}
  </svg>;
}

export function FeelSelector() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [transitioning, setTransitioning] = useState(false);
  const active = situations[activeIndex];

  const select = (index: number) => {
    if (index === activeIndex || transitioning) return;
    setTransitioning(true);
    window.setTimeout(() => { setActiveIndex(index); setTransitioning(false); }, 220);
  };

  return <section className="feel-selector" aria-label="Find the kind of help that fits">
    <div className="feel-wash" aria-hidden="true" />
    <div className="feel-layout">
      <aside className="feel-list">
        <h2>What sounds like you?</h2>
        <p className="feel-intro">Different businesses need different kinds of help. Find the one that fits.</p>
        <div className="feel-situations" role="tablist" aria-label="Situations">
          {situations.map((item, index) => {
            const selected = activeIndex === index;
            return <button key={item.label} className={`feel-option${selected ? ' is-active' : ''}`} type="button" role="tab" aria-selected={selected} onClick={() => select(index)}>
              <span className="feel-label">{item.label}</span>{selected && <span className="feel-arrow" aria-hidden="true">→</span>}
            </button>;
          })}
        </div>
      </aside>
      <div className={`feel-response${transitioning ? ' is-transitioning' : ''}`} role="tabpanel" aria-live="polite">
        <Mark kind={active.mark} />
        <p className="feel-description">{active.description}</p>
        <p className="feel-label-small">How I help</p>
        <p className="feel-help">{active.howIHelp}</p>
        <p className="feel-label-small feel-start-label">Best place to start</p>
        <p className="feel-start">{active.bestStart}</p>
        <a className="feel-cta" href={active.href}>{active.cta}<span className="feel-cta-mark" aria-hidden="true" /></a>
      </div>
    </div>
  </section>;
}