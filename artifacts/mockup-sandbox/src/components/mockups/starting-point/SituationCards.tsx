import { useState } from 'react';

type Situation = {
  number: string;
  title: string;
  situation: string;
  help: string;
  start: string;
  cta: string;
  href: string;
  color: string;
  accent: string;
};

const situations: Situation[] = [
  {
    number: '01',
    title: 'No marketing yet',
    situation:
      'The business works, but marketing has never been clearly defined. You need clarity on what matters, what to build, and what can wait.',
    help:
      'I help create the positioning, priorities, and practical foundation the business actually needs.',
    start: 'Build Your Marketing Foundation or a focused strategy engagement.',
    cta: 'Explore the course',
    href: 'courses.html',
    color: '#FCE4C4',
    accent: '#D88750',
  },
  {
    number: '02',
    title: 'It all depends on me',
    situation:
      'Marketing lives in your head, your calendar, and a collection of disconnected people or tools.',
    help:
      'I simplify the work, create clearer systems, and reduce how much depends on one person.',
    start: 'Workflow and AI advisory or focused consulting.',
    cta: 'See how I work',
    href: 'my-approach.html',
    color: '#DAD4F5',
    accent: '#7162A9',
  },
  {
    number: '03',
    title: 'The team is not aligned',
    situation:
      'There is plenty of activity, but priorities, ownership, messaging, or decisions are not working together.',
    help:
      'I find where the work is breaking down and help the team move the right changes forward.',
    start: 'Strategic consulting, fractional leadership, or a cross-functional project.',
    cta: 'See the expertise in action',
    href: 'expertise.html',
    color: '#FBEDBF',
    accent: '#AE7A27',
  },
  {
    number: '04',
    title: 'I need someone in my corner',
    situation:
      'You are leading the work, growing into a larger role, or making difficult decisions without an experienced person to pressure-test them with.',
    help:
      'I provide practical guidance, honest perspective, and ongoing thought partnership.',
    start: 'One-to-one mentoring or marketing leadership advisory.',
    cta: "Let's talk",
    href: 'about.html#contact',
    color: '#F7D8D5',
    accent: '#B8354A',
  },
];

export function SituationCards() {
  const [openCard, setOpenCard] = useState<number | null>(null);
  const selected = openCard === null ? null : situations[openCard];

  return (
    <section
      className="min-h-[780px] overflow-hidden px-5 py-16 sm:px-8 lg:px-14 lg:py-24"
      style={{ backgroundColor: '#FDF9F5', color: '#2E2A27', fontFamily: "'Manrope', sans-serif" }}
      aria-labelledby="starting-point-heading"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 flex flex-col justify-between gap-5 border-b border-[#2E2A27]/15 pb-7 sm:flex-row sm:items-end lg:mb-16">
          <div>
            <p className="mb-4 text-[11px] font-bold uppercase tracking-[0.22em]" style={{ color: '#B8354A' }}>
              A place to begin
            </p>
            <h2
              id="starting-point-heading"
              className="max-w-xl text-5xl leading-[0.96] tracking-[-0.04em] sm:text-6xl lg:text-7xl"
              style={{ fontFamily: "'Newsreader', Georgia, serif" }}
            >
              Choose your starting point
            </h2>
          </div>
          <p className="max-w-[230px] text-sm leading-6 text-[#5C544B] sm:pb-1">
            The right support depends on what is really happening behind the scenes.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {situations.map((item, index) => {
            const isOpen = openCard === index;
            return (
              <button
                key={item.number}
                type="button"
                aria-expanded={isOpen}
                aria-controls={`situation-panel-${item.number}`}
                onClick={() => setOpenCard(isOpen ? null : index)}
                className="group relative flex min-h-[286px] cursor-pointer flex-col overflow-hidden rounded-[26px] p-6 text-left shadow-[0_8px_0_rgba(46,42,39,0.06)] outline-none transition-transform duration-300 ease-out hover:-translate-y-2 focus-visible:-translate-y-2 focus-visible:ring-2 focus-visible:ring-[#B8354A] focus-visible:ring-offset-4 focus-visible:ring-offset-[#FDF9F5] sm:min-h-[320px] lg:p-7"
                style={{ backgroundColor: item.color }}
              >
                <span
                  className="absolute -right-2 -top-8 select-none text-[144px] leading-none tracking-[-0.12em] opacity-25 transition-transform duration-500 ease-out group-hover:translate-x-1 group-hover:-translate-y-1"
                  style={{ fontFamily: "'Newsreader', Georgia, serif", color: item.accent }}
                  aria-hidden="true"
                >
                  {item.number}
                </span>
                <span className="relative z-10 text-[11px] font-bold tracking-[0.18em]" style={{ color: item.accent }}>
                  {isOpen ? 'OPEN' : 'SITUATION'}
                </span>
                <div className="relative z-10 mt-auto">
                  <h3
                    className="max-w-[210px] text-3xl leading-[0.98] tracking-[-0.035em] sm:text-[2.1rem]"
                    style={{ fontFamily: "'Newsreader', Georgia, serif" }}
                  >
                    {item.title}
                  </h3>
                  <div className="mt-4 grid transition-[grid-template-rows,opacity] duration-300 [grid-template-rows:0fr] opacity-0 group-hover:[grid-template-rows:1fr] group-hover:opacity-100 group-focus-visible:[grid-template-rows:1fr] group-focus-visible:opacity-100">
                    <p className="min-h-0 overflow-hidden text-xs leading-5 text-[#5C544B]">{item.situation}</p>
                  </div>
                </div>
                <span className="absolute bottom-6 right-6 flex h-9 w-9 items-center justify-center rounded-full border border-[#2E2A27]/25 text-lg transition-colors group-hover:bg-[#2E2A27] group-hover:text-[#FDF9F5]">
                  {isOpen ? '−' : '+'}
                </span>
              </button>
            );
          })}
        </div>

        <div
          id={selected ? `situation-panel-${selected.number}` : undefined}
          className={`overflow-hidden transition-[max-height,opacity,margin] duration-500 ease-out ${selected ? 'mt-5 max-h-[700px] opacity-100' : 'max-h-0 opacity-0'}`}
          aria-hidden={!selected}
        >
          {selected && (
            <div className="rounded-[26px] p-6 sm:p-9 lg:p-11" style={{ backgroundColor: selected.color }}>
              <div className="flex flex-col gap-9 lg:flex-row lg:items-start lg:justify-between">
                <div className="max-w-2xl">
                  <div className="mb-5 flex items-center gap-3">
                    <span className="text-sm font-bold" style={{ color: selected.accent }}>{selected.number}</span>
                    <span className="h-px w-9 bg-[#2E2A27]/25" />
                    <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#5C544B]">Your next move</span>
                  </div>
                  <p className="text-lg leading-7 text-[#2E2A27] sm:text-xl sm:leading-8">{selected.situation}</p>
                </div>
                <div className="max-w-sm border-l border-[#2E2A27]/20 pl-5">
                  <p className="mb-2 text-[11px] font-bold uppercase tracking-[0.16em]" style={{ color: selected.accent }}>How I help</p>
                  <p className="text-sm leading-6 text-[#5C544B]">{selected.help}</p>
                  <p className="mt-5 text-xs leading-5 text-[#5C544B]"><strong className="text-[#2E2A27]">Best place to start:</strong> {selected.start}</p>
                </div>
              </div>
              <a
                href={selected.href}
                className="mt-9 inline-flex items-center gap-3 rounded-full bg-[#2E2A27] px-5 py-3 text-sm font-bold text-[#FDF9F5] transition-transform duration-200 hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B8354A] focus-visible:ring-offset-2"
              >
                {selected.cta}
                <span aria-hidden="true" className="text-lg leading-none">↗</span>
              </a>
            </div>
          )}
        </div>

        <p className="mt-9 text-center text-xs text-[#5C544B] sm:text-left">
          Click a card to open the full picture <span className="mx-2 text-[#B8354A]">/</span> Hover to get a feel for it
        </p>
      </div>
    </section>
  );
}