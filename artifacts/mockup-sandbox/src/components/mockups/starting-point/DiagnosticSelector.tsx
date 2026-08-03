import { useState } from 'react';

type Situation = {
  title: string;
  situation: string;
  help: string;
  start: string;
  cta: string;
  href: string;
  tint: string;
  mark: string;
};

const situations: Situation[] = [
  {
    title: 'No marketing yet',
    situation:
      'The business works, but marketing has never been clearly defined. You need clarity on what matters, what to build, and what can wait.',
    help: 'I help create the positioning, priorities, and practical foundation the business actually needs.',
    start: 'Build Your Marketing Foundation or a focused strategy engagement.',
    cta: 'Explore the course',
    href: 'courses.html',
    tint: '#FCE4C4',
    mark: '—',
  },
  {
    title: 'It all depends on me',
    situation:
      'Marketing lives in your head, your calendar, and a collection of disconnected people or tools.',
    help: 'I simplify the work, create clearer systems, and reduce how much depends on one person.',
    start: 'Workflow and AI advisory or focused consulting.',
    cta: 'See how I work',
    href: 'my-approach.html',
    tint: '#DAD4F5',
    mark: '✳',
  },
  {
    title: 'The team is not aligned',
    situation:
      'There is plenty of activity, but priorities, ownership, messaging, or decisions are not working together.',
    help: 'I find where the work is breaking down and help the team move the right changes forward.',
    start: 'Strategic consulting, fractional leadership, or a cross-functional project.',
    cta: 'See the expertise in action',
    href: 'expertise.html',
    tint: '#FBEDBF',
    mark: '↗',
  },
  {
    title: 'I need someone in my corner',
    situation:
      'You are leading the work, growing into a larger role, or making difficult decisions without an experienced person to pressure-test them with.',
    help: 'I provide practical guidance, honest perspective, and ongoing thought partnership.',
    start: 'One-to-one mentoring or marketing leadership advisory.',
    cta: "Let's talk",
    href: 'about.html#contact',
    tint: '#F7CFC5',
    mark: '♡',
  },
];

export function DiagnosticSelector() {
  const [selected, setSelected] = useState(0);
  const active = situations[selected];

  return (
    <section
      className="min-h-[760px] px-5 py-16 sm:px-10 lg:px-16"
      style={{
        background: '#FDF9F5',
        color: '#2E2A27',
        fontFamily: "'Manrope', sans-serif",
      }}
    >
      <div className="mx-auto max-w-[1180px]">
        <div className="mb-10 flex items-end justify-between gap-6">
          <div>
            <p
              className="mb-4 text-[11px] font-bold uppercase tracking-[0.22em]"
              style={{ color: '#B8354A' }}
            >
              A useful place to begin
            </p>
            <h2
              className="max-w-[700px] text-5xl leading-[0.95] tracking-[-0.045em] sm:text-7xl"
              style={{ fontFamily: "'Newsreader', Georgia, serif" }}
            >
              Choose your starting point
            </h2>
          </div>
          <p className="hidden max-w-[185px] pb-1 text-right text-sm leading-6 sm:block" style={{ color: '#5C544B' }}>
            One honest answer is enough to point you in the right direction.
          </p>
        </div>

        <div className="grid gap-3 md:grid-cols-4" role="tablist" aria-label="Choose your situation">
          {situations.map((item, index) => {
            const isActive = selected === index;
            return (
              <button
                key={item.title}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => setSelected(index)}
                className="group relative min-h-[214px] overflow-hidden rounded-[22px] border-2 p-5 text-left transition-transform duration-300 hover:-translate-y-1 focus:outline-none focus-visible:ring-4"
                style={{
                  background: isActive ? '#B8354A' : item.tint,
                  borderColor: isActive ? '#B8354A' : '#2E2A27',
                  color: isActive ? '#FDF9F5' : '#2E2A27',
                  boxShadow: isActive ? '6px 7px 0 #2E2A27' : '3px 4px 0 rgba(46,42,39,.18)',
                }}
              >
                <span
                  className="absolute right-5 top-4 text-2xl leading-none transition-transform duration-300 group-hover:rotate-12"
                  aria-hidden="true"
                >
                  {item.mark}
                </span>
                <span
                  className="block text-[11px] font-bold uppercase tracking-[0.2em]"
                  style={{ opacity: isActive ? 0.8 : 0.55 }}
                >
                  0{index + 1}
                </span>
                <span
                  className="mt-16 block max-w-[180px] text-[28px] leading-[0.96] tracking-[-0.04em] sm:text-[30px]"
                  style={{ fontFamily: "'Newsreader', Georgia, serif", fontWeight: 700 }}
                >
                  {item.title}
                </span>
                <span
                  className="absolute bottom-5 left-5 h-[2px] w-10 transition-all duration-300 group-hover:w-16"
                  style={{ background: isActive ? '#FCE4C4' : '#B8354A' }}
                />
              </button>
            );
          })}
        </div>

        <div
          key={active.title}
          role="tabpanel"
          className="mt-8 overflow-hidden rounded-[26px] border-2 p-6 sm:p-10"
          style={{
            borderColor: '#2E2A27',
            background: '#FFFDFC',
            boxShadow: '7px 8px 0 #2E2A27',
            animation: 'diagnosticReveal 420ms cubic-bezier(.2,.8,.2,1) both',
          }}
        >
          <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr_auto] lg:items-center">
            <div>
              <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.2em]" style={{ color: '#B8354A' }}>
                Your situation
              </p>
              <h3 className="text-4xl leading-none tracking-[-0.04em] sm:text-5xl" style={{ fontFamily: "'Newsreader', Georgia, serif" }}>
                {active.title}
              </h3>
            </div>
            <div className="space-y-5 text-[15px] leading-7" style={{ color: '#5C544B' }}>
              <p>{active.situation}</p>
              <p>
                <strong style={{ color: '#2E2A27' }}>How I help: </strong>
                {active.help}
              </p>
              <p className="border-l-2 pl-4" style={{ borderColor: '#FF6F61' }}>
                <strong style={{ color: '#2E2A27' }}>Best place to start: </strong>
                {active.start}
              </p>
            </div>
            <a
              href={active.href}
              className="inline-flex min-h-[52px] items-center justify-center whitespace-nowrap rounded-full px-6 text-sm font-bold transition-all duration-200 hover:-translate-y-1 hover:pr-7"
              style={{ background: '#FF6F61', color: '#2E2A27', boxShadow: '3px 4px 0 #2E2A27' }}
            >
              {active.cta} <span className="ml-3 text-lg">→</span>
            </a>
          </div>
        </div>
      </div>
      <style>{`@keyframes diagnosticReveal { from { opacity: 0; transform: translateY(12px); } to { opacity: 1; transform: translateY(0); } }`}</style>
    </section>
  );
}