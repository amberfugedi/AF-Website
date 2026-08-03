import { useState } from 'react';
import './StageSelector_group.css';

type Situation = {
  label: string;
  headline: string;
  body: string;
  cta: string;
  href: string;
  mark: 'arc' | 'circles' | 'fork' | 'spiral';
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
    mark: 'fork',
  },
  {
    label: 'I need someone in my corner',
    headline: "You're leading the work and making difficult calls without a thought partner.",
    body: 'I provide practical guidance, honest perspective, and ongoing thought partnership.',
    cta: "Let's talk →",
    href: 'about.html#contact',
    mark: 'spiral',
  },
];

function DecorativeMark({ kind }: { kind: Situation['mark'] }) {
  const common = {
    fill: 'none',
    stroke: '#FF6F61',
    strokeWidth: 2.2,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
  };
  return (
    <svg aria-hidden="true" className="pointer-events-none absolute right-7 top-7 h-[66px] w-[88px] opacity-25 sm:right-10 sm:top-9" viewBox="0 0 88 66">
      {kind === 'arc' && <path {...common} d="M6 55C17 18 43 8 80 13" />}
      {kind === 'circles' && (
        <>
          <circle {...common} cx="37" cy="31" r="20" />
          <circle {...common} cx="56" cy="31" r="20" />
        </>
      )}
      {kind === 'fork' && (
        <>
          <path {...common} d="M10 33h27M37 33L72 13M37 33l35 20" />
          <path {...common} d="M65 12l7 1-2 7M65 51l7 2-2 7" />
        </>
      )}
      {kind === 'spiral' && <path {...common} d="M44 32c0-10-15-12-21-2-7 13 9 28 25 20 19-9 14-38-8-44" />}
    </svg>
  );
}

export function StageSelector() {
  const [selected, setSelected] = useState(0);
  const active = situations[selected];

  const moveSelection = (direction: number) => {
    setSelected((current) => (current + direction + situations.length) % situations.length);
  };

  return (
    <section
      className="min-h-[700px] bg-[#FDF9F5] px-6 py-16 text-[#2E2A27] sm:px-10 sm:py-20 lg:px-16"
      aria-label="Choose your starting point"
    >
      <div className="mx-auto grid max-w-[1100px] gap-14 lg:grid-cols-[220px_minmax(0,1fr)] lg:gap-20">
        <aside>
          <h2 className="mb-10 text-[1.6rem] leading-[1.05] tracking-[-0.035em]" style={{ fontFamily: "'Newsreader', Georgia, serif" }}>
            Choose your starting point
          </h2>
          <div className="flex flex-col" role="tablist" aria-label="Situations">
            {situations.map((item, index) => {
              const isSelected = index === selected;
              return (
                <button
                  key={item.label}
                  type="button"
                  role="tab"
                  aria-selected={isSelected}
                  aria-controls="starting-point-stage"
                  tabIndex={isSelected ? 0 : -1}
                  onClick={() => setSelected(index)}
                  onKeyDown={(event) => {
                    if (event.key === 'ArrowDown' || event.key === 'ArrowRight') {
                      event.preventDefault();
                      moveSelection(1);
                    }
                    if (event.key === 'ArrowUp' || event.key === 'ArrowLeft') {
                      event.preventDefault();
                      moveSelection(-1);
                    }
                  }}
                  className="group relative border-b border-[rgba(46,42,39,0.12)] py-5 text-left first:pt-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF6F61] focus-visible:ring-offset-4 focus-visible:ring-offset-[#FDF9F5]"
                >
                  <span
                    className="block text-[3.5rem] leading-[0.78] tracking-[-0.08em] transition-colors duration-300"
                    style={{ fontFamily: "'Newsreader', Georgia, serif", color: isSelected ? '#B8354A' : 'rgba(46,42,39,0.15)' }}
                  >
                    0{index + 1}
                  </span>
                  <span
                    className="mt-3 block text-[0.72rem] font-semibold uppercase tracking-[0.13em] transition-colors duration-300"
                    style={{ color: isSelected ? '#2E2A27' : '#5C544B', fontWeight: isSelected ? 800 : 600 }}
                  >
                    {item.label}
                  </span>
                  {isSelected && <span className="absolute bottom-[-1px] left-0 h-[2px] w-12 bg-[#FF6F61]" aria-hidden="true" />}
                </button>
              );
            })}
          </div>
        </aside>

        <div id="starting-point-stage" role="tabpanel" aria-label={active.label} className="flex min-h-[460px] items-center border border-[rgba(46,42,39,0.12)] bg-[#FDF9F5] px-7 py-12 shadow-[0_18px_45px_rgba(46,42,39,0.06)] sm:px-14 sm:py-16 lg:min-h-[520px] lg:px-20">
          <div key={active.label} className="stage-crossfade relative w-full">
            <DecorativeMark kind={active.mark} />
            <p className="mb-7 text-[0.72rem] font-bold uppercase tracking-[0.19em] text-[#B8354A]">0{selected + 1} / {active.label}</p>
            <h3 className="max-w-[640px] text-[2.35rem] leading-[0.98] tracking-[-0.045em] sm:text-[3.6rem]" style={{ fontFamily: "'Newsreader', Georgia, serif" }}>
              {active.headline}
            </h3>
            <p className="mt-8 max-w-[50ch] text-[0.98rem] leading-[1.8] text-[#5C544B]">{active.body}</p>
            <a href={active.href} className="mt-9 inline-block text-[0.9rem] font-bold text-[#B8354A] underline decoration-[#FF6F61] decoration-1 underline-offset-8 transition-colors duration-200 hover:text-[#2E2A27] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF6F61]">
              {active.cta}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}