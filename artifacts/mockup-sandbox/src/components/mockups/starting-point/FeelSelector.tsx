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
    whatHappening: "You may have grown through referrals, reputation, relationships, or the owner's effort without ever building a clear marketing function. Now you need to understand what matters, what support to hire, and what can wait.",
    howIHelp: 'I help define the audience, positioning, message, priorities, and practical marketing foundation the business actually needs. Then we decide what can be handled internally, what should be outsourced, and what does not need to be done yet.',
    bestStart: 'Build Your Marketing Foundation or a focused strategy engagement.',
    cta: 'Explore the course →',
    href: 'courses.html',
  },
  {
    selectorLabel: 'Too much of the marketing depends on me',
    mainStatement: 'Marketing is happening, but too much of it still relies on you.',
    whatHappening: 'The work lives in your head, your calendar, and a collection of disconnected tools, freelancers, and unfinished ideas. Things are getting done, but they are difficult to maintain, delegate, or improve.',
    howIHelp: 'I clarify what matters most, simplify the work, create more useful systems, and reduce how much of the marketing function depends on one person.',
    bestStart: 'Workflow and AI advisory, focused consulting, or marketing systems work.',
    cta: 'See how I work →',
    href: 'my-approach.html',
  },
  {
    selectorLabel: 'We have a team, but the work is not connecting',
    mainStatement: 'There is plenty of activity. The parts are not working together.',
    whatHappening: 'You may have capable people, useful tools, and active campaigns, but the priorities, ownership, systems, messaging, or decisions are not aligned. The visible marketing problem may actually sit between teams or functions.',
    howIHelp: 'I identify where the work is breaking down, connect marketing to the broader business strategy, and help the team make the most important changes practical and usable.',
    bestStart: 'Strategic consulting, fractional leadership, or a cross-functional project.',
    cta: 'See the expertise in action →',
    href: 'expertise.html',
  },
  {
    selectorLabel: 'I need an experienced person in my corner',
    mainStatement: 'You do not need someone to take over. You need someone experienced to think with.',
    whatHappening: 'You may be leading marketing, inheriting a function, growing into a larger role, building a team, or making important decisions without another experienced person nearby to pressure-test the work.',
    howIHelp: 'I provide practical guidance, honest perspective, and a place to work through decisions. We can review priorities, strategy, team challenges, executive communication, career growth, or the work itself.',
    bestStart: 'One-to-one mentoring, marketing leadership advisory, or ongoing thought partnership.',
    cta: 'Ask about mentoring →',
    href: 'about.html#contact',
  },
];

function PlanningArtifact({ index }: { index: number }) {
  const ruled = [24, 49, 74, 99];
  const ink = '#2E2A27';
  const coral = '#B8354A';
  const text = index === 0 ? ['Audience', 'Positioning', 'Priorities', 'What can wait']
    : index === 1 ? ['Website', 'Email', 'Social', 'Follow-up', 'Reporting']
      : index === 2 ? ['Launch now', 'Campaign ready', 'Wait for sales', 'Need sign-off']
        : ['What am I missing?', 'What needs to happen next?', 'What call do I need to make?'];
  return (
    <figure className="feel-artifact" role="img" aria-hidden="true">
      <svg viewBox="0 0 220 140">
        <line x1="18" y1="8" x2="18" y2="132" stroke={ink} strokeOpacity=".08" />
        {ruled.map((y) => <line key={y} x1="0" y1={y} x2="220" y2={y} stroke={ink} strokeOpacity=".1" strokeWidth=".7" />)}
        {index === 2 && <line x1="110" y1="10" x2="110" y2="108" stroke={ink} strokeOpacity=".1" />}
        {index === 0 && text.map((item, i) => <text key={item} x={29 + (i % 2) * 4} y={34 + i * 19} fill={ink} fillOpacity=".55">{item}</text>)}
        {index === 1 && text.map((item, i) => <text key={item} x="29" y={29 + i * 17} fill={ink} fillOpacity=".55">{item}</text>)}
        {index === 1 && <><line x1="27" y1="80" x2="91" y2="80" stroke={coral} strokeOpacity=".5" /><line x1="27" y1="97" x2="91" y2="97" stroke={coral} strokeOpacity=".5" /><path d="M91 115c14 7 20-5 13-10-5-4-10 0-8 5" fill="none" stroke={coral} strokeWidth="1.2" /></>}
        {index === 2 && <><text x="28" y="39" fill={ink} fillOpacity=".55">{text[0]}</text><text x="28" y="65" fill={ink} fillOpacity=".55">{text[1]}</text><text x="121" y="39" fill={ink} fillOpacity=".55">{text[2]}</text><text x="121" y="65" fill={ink} fillOpacity=".55">{text[3]}</text><text x="94" y="88" fill={coral} fontSize="18">←</text><text x="116" y="88" fill={coral} fontSize="18">→</text></>}
        {index === 3 && text.map((item, i) => <text key={item} x="29" y={32 + i * 22} fill={ink} fillOpacity=".55">{item}</text>)}
        {index === 3 && <path d="M205 18c9 16 9 77 0 93" fill="none" stroke={coral} strokeOpacity=".3" strokeWidth="1.5" />}
        <text className="feel-artifact-note" x={index === 0 ? 76 : index === 1 ? 89 : index === 2 ? 112 : 30} y="126" fill={coral}>{index === 0 ? 'Where do we start?' : index === 1 ? 'All still with me.' : index === 2 ? 'Who owns this?' : 'Talk this through with me.'}</text>
        <path d={index === 1 ? 'M89 130c24-2 60 2 101-1' : index === 3 ? 'M44 130c45-2 115 2 164-1' : index === 2 ? 'M116 130c23-2 55 2 87-1' : 'M116 130c20-2 56 2 86-1'} fill="none" stroke={coral} strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    </figure>
  );
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
          <p className="feel-intro">Start with the situation that feels closest. The right kind of support depends less on the size of the business and more on what the work needs now.</p>
        <div className="feel-situations" role="tablist" aria-label="Situations">
          {situations.map((item, index) => {
            const selected = activeIndex === index;
            return <button key={item.selectorLabel} className={`feel-option${selected ? ' is-active' : ''}`} type="button" role="tab" aria-selected={selected} onClick={() => select(index)}>
              <span className="feel-label">{item.selectorLabel}</span>{selected && <span className="feel-arrow" aria-hidden="true">→</span>}
            </button>;
          })}
        </div>
      </aside>
      <div className={`feel-response${transitioning ? ' is-transitioning' : ''}`} role="tabpanel" aria-live="polite">
        <PlanningArtifact index={activeIndex} />
        <p className="feel-main-statement">{active.mainStatement}</p>
        <p className="feel-label-small">What may be happening</p>
        <p className="feel-happening">{active.whatHappening}</p>
        <p className="feel-label-small">How I help</p>
        <p className="feel-help">{active.howIHelp}</p>
        <p className="feel-label-small feel-start-label">Best place to start</p>
        <p className="feel-start">{active.bestStart}</p>
        <a className="feel-cta" href={active.href}>{active.cta}<span className="feel-cta-mark" aria-hidden="true" /></a>
      </div>
    </div>
  </section>;
}