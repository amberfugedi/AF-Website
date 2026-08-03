const situations = [
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
    tint: '#FDF9F5',
    accent: '#FCE4C4',
    mark: 'loop',
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
    tint: '#FFF8F0',
    accent: '#FBEDBF',
    mark: 'lines',
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
    tint: '#FDF9F5',
    accent: '#DAD4F5',
    mark: 'spark',
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
    tint: '#F9F7FD',
    accent: '#FF6F61',
    mark: 'arc',
  },
] as const;

function AccentMark({ type, accent }: { type: string; accent: string }) {
  if (type === 'lines') {
    return (
      <svg viewBox="0 0 180 120" aria-hidden="true" className="h-28 w-40">
        <path d="M19 29c29-17 83-22 140-3M18 55c37-11 89-13 141 0M23 83c38-8 91-4 132 11" fill="none" stroke={accent} strokeWidth="5" strokeLinecap="round" />
        <circle cx="149" cy="28" r="4" fill="#FF6F61" />
      </svg>
    );
  }
  if (type === 'spark') {
    return (
      <svg viewBox="0 0 180 140" aria-hidden="true" className="h-32 w-40">
        <path d="M86 16l7 40 30-26-18 35 42 5-42 10 25 31-35-22-7 35-8-36-36 22 25-32-39-8 40-7-27-33 36 22z" fill="none" stroke={accent} strokeWidth="4" strokeLinejoin="round" />
      </svg>
    );
  }
  if (type === 'arc') {
    return (
      <svg viewBox="0 0 180 120" aria-hidden="true" className="h-28 w-40">
        <path d="M20 90C39 25 115 6 161 53c9 9 12 18 13 28" fill="none" stroke={accent} strokeWidth="6" strokeLinecap="round" />
        <path d="M143 76l30 6-17 21" fill="none" stroke="#B8354A" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 180 120" aria-hidden="true" className="h-28 w-40">
      <path d="M20 66c20-43 69-53 103-29 20 14 27 31 31 54" fill="none" stroke="#FF6F61" strokeWidth="5" strokeLinecap="round" />
      <path d="M26 81c29 12 54 14 80 5 17-6 29-15 41-28" fill="none" stroke={accent} strokeWidth="4" strokeLinecap="round" />
    </svg>
  );
}

export function EditorialStack() {
  return (
    <main
      className="min-h-[100dvh] overflow-hidden"
      style={{ backgroundColor: '#FDF9F5', color: '#2E2A27', fontFamily: "'Manrope', sans-serif" }}
    >
      <header className="mx-auto max-w-[1440px] px-6 pb-12 pt-14 sm:px-10 sm:pb-16 sm:pt-20 lg:px-16">
        <div className="flex items-start justify-between gap-8">
          <div>
            <p className="mb-6 text-[11px] font-bold uppercase tracking-[0.24em]" style={{ color: '#B8354A' }}>
              A place to begin
            </p>
            <h1
              className="max-w-3xl text-[clamp(3.4rem,8vw,7.8rem)] leading-[0.88] tracking-[-0.055em]"
              style={{ fontFamily: "'Newsreader', Georgia, serif" }}
            >
              Choose your
              <br />
              <em className="not-italic" style={{ color: '#B8354A' }}>starting point.</em>
            </h1>
          </div>
          <div className="hidden pt-8 text-right text-sm leading-6 md:block" style={{ color: '#5C544B' }}>
            <span className="block">Four honest places</span>
            <span className="block">to meet the work.</span>
          </div>
        </div>
      </header>

      <section aria-label="Starting points">
        {situations.map((item, index) => (
          <article
            key={item.number}
            className="relative border-t"
            style={{ backgroundColor: item.tint, borderColor: 'rgba(46,42,39,.2)' }}
          >
            <div className="mx-auto grid max-w-[1440px] grid-cols-1 gap-8 px-6 py-12 sm:px-10 sm:py-16 md:grid-cols-[minmax(110px,17%)_minmax(0,1fr)_190px] md:gap-8 md:py-20 lg:grid-cols-[minmax(150px,19%)_minmax(0,1fr)_240px] lg:px-16">
              <div
                aria-hidden="true"
                className="select-none text-[8rem] leading-[0.67] tracking-[-0.1em] md:text-[11rem] lg:text-[15rem]"
                style={{ color: '#2E2A27', fontFamily: "'Newsreader', Georgia, serif", opacity: 0.09 }}
              >
                {item.number}
              </div>
              <div className="max-w-3xl">
                <h2 className="mb-7 text-[clamp(2.35rem,4vw,4.4rem)] leading-[0.93] tracking-[-0.045em]" style={{ fontFamily: "'Newsreader', Georgia, serif" }}>
                  {item.title}
                </h2>
                <div className="grid gap-6 text-[15px] leading-7 sm:grid-cols-2 sm:gap-10" style={{ color: '#5C544B' }}>
                  <p>{item.situation}</p>
                  <p>
                    <span className="mb-1 block text-[10px] font-bold uppercase tracking-[0.18em]" style={{ color: '#2E2A27' }}>
                      How I help
                    </span>
                    {item.help}
                  </p>
                </div>
                <p className="mt-8 max-w-xl border-l-2 pl-4 text-sm leading-6" style={{ borderColor: '#FF6F61', color: '#2E2A27' }}>
                  <span className="font-bold">Best place to start:</span> {item.start}
                </p>
                <a href={item.href} className="group mt-8 inline-flex items-center gap-3 text-sm font-bold no-underline" style={{ color: '#B8354A' }}>
                  <span>{item.cta}</span>
                  <span className="text-xl transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true">→</span>
                </a>
              </div>
              <div className="hidden items-center justify-center md:flex">
                <div className="flex h-36 w-44 items-center justify-center rounded-[42%] border" style={{ borderColor: `${item.accent}aa`, backgroundColor: `${item.accent}35`, transform: `rotate(${index % 2 ? '-3deg' : '3deg'})` }}>
                  <AccentMark type={item.mark} accent={item.accent} />
                </div>
              </div>
            </div>
          </article>
        ))}
      </section>
      <footer className="mx-auto flex max-w-[1440px] justify-between px-6 py-10 text-[11px] uppercase tracking-[0.16em] sm:px-10 lg:px-16" style={{ color: '#5C544B' }}>
        <span>Amber Fugedi / Marketing strategy</span>
        <span>Start where you are</span>
      </footer>
    </main>
  );
}