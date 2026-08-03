import { useState } from 'react';

type Situation = {
  number: string;
  label: string;
  headline: string;
  body: string;
  cta: string;
  href: string;
};

const situations: Situation[] = [
  { number: '01', label: 'No marketing yet', headline: "The business works. Marketing hasn't been defined yet.", body: 'You need clarity on what matters, what to build, and what can wait. I help create the positioning, priorities, and practical foundation the business actually needs.', cta: 'Explore the course →', href: 'courses.html' },
  { number: '02', label: 'It all depends on me', headline: 'Marketing lives in your head, your calendar, your to-do list.', body: 'I simplify the work, create clearer systems, and reduce how much depends on one person.', cta: 'See how I work →', href: 'my-approach.html' },
  { number: '03', label: 'The team is not aligned', headline: "There's plenty of activity. The pieces aren't working together.", body: 'I find where the work is breaking down and help the team move the right changes forward.', cta: 'See the expertise →', href: 'expertise.html' },
  { number: '04', label: 'I need someone in my corner', headline: "You're leading the work and making difficult calls without a thought partner.", body: 'I provide practical guidance, honest perspective, and ongoing thought partnership.', cta: "Let's talk →", href: 'about.html#contact' },
];

const nodes = [
  ['Strategy', 112, 116, 'peach'], ['Channels', 276, 74, 'lavender'], ['Team', 430, 135, 'butter'],
  ['Messaging', 178, 235, 'lavender'], ['Priorities', 326, 202, 'peach'], ['Budget', 492, 268, 'butter'],
  ['Customers', 428, 398, 'peach'], ['Content', 228, 382, 'butter'], ['Sales', 92, 338, 'lavender'],
] as const;
const paths = [
  ['Strategy', 'Channels', 'M86 141 C130 43 208 42 258 76'], ['Strategy', 'Messaging', 'M121 137 C130 177 148 203 168 219'],
  ['Strategy', 'Sales', 'M101 140 C65 207 62 274 83 321'], ['Channels', 'Team', 'M300 79 C346 62 393 84 414 119'],
  ['Channels', 'Priorities', 'M285 95 C292 134 314 166 322 180'], ['Team', 'Budget', 'M447 153 C472 184 487 218 489 247'],
  ['Messaging', 'Priorities', 'M197 232 C238 211 274 205 304 202'], ['Messaging', 'Content', 'M181 253 C187 301 205 346 218 365'],
  ['Priorities', 'Budget', 'M346 211 C392 219 446 241 474 257'], ['Priorities', 'Customers', 'M335 222 C362 288 403 342 421 377'],
  ['Sales', 'Content', 'M106 348 C145 373 177 383 205 385'], ['Content', 'Customers', 'M249 383 C310 406 369 409 406 397'],
] as const;

export function IllustratedScene() {
  const [active, setActive] = useState(0);
  const item = situations[active];
  const is = (name: string) => {
    if (active === 0) return name === 'Strategy';
    if (active === 1) return name === 'Team' || name === 'Priorities';
    if (active === 2) return name === 'Channels' || name === 'Sales' || name === 'Team';
    return name === 'Strategy' || name === 'Customers';
  };

  return (
    <section className="min-h-[700px] overflow-hidden px-5 py-16 sm:px-8 lg:px-14 lg:py-24" style={{ background: '#FDF9F5', color: '#2E2A27', fontFamily: "'Manrope', sans-serif" }}>
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 border-b pb-7" style={{ borderColor: 'rgba(46,42,39,.12)' }}>
          <p className="mb-3 text-[11px] font-bold uppercase tracking-[.22em]" style={{ color: '#B8354A' }}>A place to begin</p>
          <h2 className="text-5xl leading-[.95] tracking-[-.045em] sm:text-6xl" style={{ fontFamily: "'Newsreader', Georgia, serif" }}>Choose your starting point</h2>
        </div>
        <div className="grid items-center gap-10 lg:grid-cols-[1.15fr_.85fr] lg:gap-16">
          <div>
            <div className="rounded-[28px] p-3 sm:p-6" style={{ background: '#FCE4C4' }}>
              <svg viewBox="0 0 600 480" role="img" aria-label="An illustrated map of a marketing system" className="h-auto w-full">
                <defs>
                  <filter id="soft"><feGaussianBlur stdDeviation="5" /></filter>
                  <marker id="arrow" markerWidth="9" markerHeight="9" refX="7" refY="4" orient="auto"><path d="M0 0L8 4L0 8" fill="none" stroke="#B8354A" strokeWidth="1.7" /></marker>
                </defs>
                <g fill="none" stroke="#2E2A27" strokeLinecap="round">
                  {paths.map(([from, to, d]) => <path key={`${from}-${to}`} d={d} className={`${is(from) || is(to) ? 'is-hot' : ''}`} />)}
                  <path d={active === 1 ? 'M453 99 C570 76 570 207 451 163' : 'M0 0'} className={active === 1 ? 'annotation' : 'hidden'} markerEnd="url(#arrow)" />
                  <path d="M78 102 C50 152 48 182 78 207 C104 228 76 249 58 228" className={active === 0 ? 'annotation' : 'hidden'} />
                  <path d="M252 48 C322 10 388 30 447 89 M250 87 C330 114 379 93 440 120" className={active === 2 ? 'annotation' : 'hidden'} markerEnd="url(#arrow)" />
                  <path d="M540 82 C597 147 588 344 506 410 C471 438 456 446 423 451" className={active === 3 ? 'annotation' : 'hidden'} />
                </g>
                <g style={{ fontFamily: "'Manrope', sans-serif" }}>
                  {nodes.map(([name, x, y, fill]) => <g key={name} className={is(name) ? 'node-hot' : ''}>
                    <circle cx={x} cy={y} r="24" className={`node-${fill}`} />
                    <text x={x} y={y + 43} textAnchor="middle">{name}</text>
                  </g>)}
                </g>
              </svg>
            </div>
            <div className="mt-6 flex items-center gap-7" role="tablist" aria-label="Starting points">
              {situations.map((s, index) => <button key={s.number} type="button" role="tab" aria-selected={active === index} onClick={() => setActive(index)} className={`border-b-2 pb-2 text-xs font-bold tracking-[.14em] transition-colors ${active === index ? 'border-[#B8354A] text-[#B8354A]' : 'border-transparent text-[#5C544B]'}`}>{s.number}</button>)}
              <span className="ml-auto hidden text-[11px] uppercase tracking-[.17em] text-[#5C544B] sm:block">Click to explore</span>
            </div>
          </div>
          <div key={item.number} className="animate-[fadeIn_.35s_ease-out]">
            <div className="text-[5rem] leading-none tracking-[-.08em]" style={{ color: '#B8354A', fontFamily: "'Newsreader', Georgia, serif" }}>{item.number}</div>
            <p className="mt-3 text-[11px] font-bold uppercase tracking-[.18em]" style={{ color: '#5C544B' }}>{item.label}</p>
            <h3 className="mt-7 max-w-md text-[2.25rem] leading-[.98] tracking-[-.04em] sm:text-[2.65rem]" style={{ fontFamily: "'Newsreader', Georgia, serif" }}>{item.headline}</h3>
            <p className="mt-6 max-w-md text-[.95rem] leading-7" style={{ color: '#5C544B' }}>{item.body}</p>
            <a href={item.href} className="mt-8 inline-block border-b-2 pb-1 text-sm font-bold transition-colors hover:border-[#FF6F61] hover:text-[#B8354A]" style={{ borderColor: '#B8354A', color: '#B8354A' }}>{item.cta}</a>
          </div>
        </div>
      </div>
      <style>{`
        svg path { stroke-width: 2; opacity: .15; transition: opacity .35s, stroke .35s, stroke-width .35s; }
        svg path.is-hot { opacity: 1; stroke: #B8354A; stroke-width: 3.5; }
        .node-peach { fill:#FCE4C4 } .node-lavender { fill:#DAD4F5 } .node-butter { fill:#FBEDBF }
        svg circle { stroke:#2E2A27; stroke-width:1.5; opacity:.2; transition: opacity .35s, transform .35s; transform-origin:center; }
        svg .node-hot circle { opacity:1; stroke:#B8354A; stroke-width:2.5; animation:pulse 2.2s ease-in-out infinite; }
        svg text { font-size:10px; fill:#5C544B; opacity:.28; transition:opacity .35s; }
        svg .node-hot text { opacity:1; fill:#2E2A27; font-weight:700; }
        .annotation { opacity:1 !important; stroke:#B8354A; stroke-width:3 !important; stroke-dasharray:500; animation:draw .8s ease-out both; }
        .hidden { display:none; }
        @keyframes pulse { 0%,100% { transform:scale(1); } 50% { transform:scale(1.09); } }
        @keyframes draw { from { stroke-dashoffset:500; } to { stroke-dashoffset:0; } }
        @keyframes fadeIn { from { opacity:.2; transform:translateY(5px); } to { opacity:1; transform:translateY(0); } }
      `}</style>
    </section>
  );
}