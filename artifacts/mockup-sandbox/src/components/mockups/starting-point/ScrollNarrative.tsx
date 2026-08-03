import { useEffect, useRef, useState } from "react";

type Situation = {
  label: string;
  headline: string;
  body: string;
  cta: string;
  href: string;
};

const situations: Situation[] = [
  {
    label: "No marketing yet",
    headline: "The business works. Marketing hasn't been defined yet.",
    body: "You need clarity on what matters, what to build, and what can wait. I help create the positioning, priorities, and practical foundation the business actually needs.",
    cta: "Explore the course →",
    href: "courses.html",
  },
  {
    label: "It all depends on me",
    headline: "Marketing lives in your head, your calendar, your to-do list.",
    body: "I simplify the work, create clearer systems, and reduce how much depends on one person.",
    cta: "See how I work →",
    href: "my-approach.html",
  },
  {
    label: "The team is not aligned",
    headline: "There's plenty of activity. The pieces aren't working together.",
    body: "I find where the work is breaking down and help the team move the right changes forward.",
    cta: "See the expertise →",
    href: "expertise.html",
  },
  {
    label: "I need someone in my corner",
    headline: "You're leading the work and making difficult calls without a thought partner.",
    body: "I provide practical guidance, honest perspective, and ongoing thought partnership.",
    cta: "Let's talk →",
    href: "about.html#contact",
  },
];

export function ScrollNarrative() {
  const driverRef = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [hasScrolled, setHasScrolled] = useState(false);
  const [changing, setChanging] = useState(false);

  useEffect(() => {
    let frame = 0;
    let previous = 0;
    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const el = driverRef.current;
        if (!el) return;
        const bounds = el.getBoundingClientRect();
        const travel = Math.max(el.offsetHeight - window.innerHeight, 1);
        const nextProgress = Math.min(1, Math.max(0, -bounds.top / travel));
        const nextIndex = Math.min(
          situations.length - 1,
          Math.floor(nextProgress * situations.length),
        );
        setProgress(nextProgress);
        if (nextProgress > 0.015) setHasScrolled(true);
        if (nextIndex !== previous) {
          previous = nextIndex;
          setChanging(true);
          window.setTimeout(() => setChanging(false), 400);
          setIndex(nextIndex);
        }
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(frame);
    };
  }, []);

  const situation = situations[index];

  return (
    <section ref={driverRef} className="sn-driver">
      <style>{`
        .sn-driver, .sn-driver * { box-sizing: border-box; }
        .sn-driver {
          --ink: #2E2A27;
          --cream: #FDF9F5;
          --coral: #FF6F61;
          --deep: #B8354A;
          --muted: #5C544B;
          position: relative;
          height: 500vh;
          background: var(--cream);
          color: var(--ink);
          font-family: 'Manrope', sans-serif;
        }
        .sn-sticky {
          position: sticky;
          top: 0;
          height: 100vh;
          min-height: 620px;
          overflow: hidden;
          background: var(--cream);
          display: flex;
          align-items: center;
        }
        .sn-sticky::before {
          content: "";
          position: absolute;
          inset: 0;
          pointer-events: none;
          opacity: .34;
          background-image: radial-gradient(rgba(46,42,39,.08) .55px, transparent .55px);
          background-size: 7px 7px;
          mix-blend-mode: multiply;
        }
        .sn-rule {
          position: absolute;
          top: 33px;
          left: clamp(24px, 5vw, 80px);
          right: clamp(24px, 5vw, 80px);
          height: 1px;
          background: rgba(46,42,39,.12);
        }
        .sn-counter {
          position: absolute;
          top: 51px;
          right: clamp(24px, 5vw, 80px);
          font-size: 11px;
          letter-spacing: .18em;
          color: var(--deep);
          font-weight: 700;
        }
        .sn-number {
          position: absolute;
          left: 1vw;
          bottom: -7vw;
          font-family: 'Newsreader', Georgia, serif;
          font-size: clamp(15rem, 27vw, 29rem);
          line-height: .68;
          letter-spacing: -.08em;
          color: rgba(46,42,39,.08);
          user-select: none;
          transform: translateY(${changing ? "8vh" : "0"});
          transition: transform 700ms cubic-bezier(.2,.8,.2,1);
        }
        .sn-content {
          position: relative;
          z-index: 1;
          width: min(820px, 72vw);
          margin-left: clamp(24px, 16vw, 240px);
          padding-bottom: 3vh;
          opacity: ${changing ? 0 : 1};
          transform: translateY(${changing ? "-20px" : "0"});
          transition: opacity 400ms ease-out, transform 400ms ease-out;
        }
        .sn-label {
          display: inline-block;
          margin-bottom: 22px;
          color: var(--deep);
          font-size: 12px;
          font-weight: 800;
          letter-spacing: .18em;
          text-transform: uppercase;
        }
        .sn-headline {
          max-width: 780px;
          margin: 0;
          font-family: 'Newsreader', Georgia, serif;
          font-size: clamp(2.55rem, 4.5vw, 4.65rem);
          font-weight: 400;
          letter-spacing: -.045em;
          line-height: .98;
        }
        .sn-body {
          max-width: 575px;
          margin: 30px 0 35px;
          color: var(--muted);
          font-size: 16px;
          line-height: 1.72;
        }
        .sn-link {
          color: var(--deep);
          font-size: 14px;
          font-weight: 800;
          letter-spacing: .015em;
          text-decoration: none;
          border-bottom: 1px solid rgba(184,53,74,.35);
          padding-bottom: 5px;
          transition: color 180ms ease, border-color 180ms ease;
        }
        .sn-link:hover { color: var(--coral); border-color: var(--coral); }
        .sn-hint {
          position: absolute;
          bottom: 54px;
          left: clamp(24px, 5vw, 80px);
          color: var(--muted);
          font-size: 10px;
          font-weight: 700;
          letter-spacing: .14em;
          text-transform: uppercase;
          opacity: ${hasScrolled ? 0 : 1};
          transform: translateY(${hasScrolled ? "8px" : "0"});
          transition: opacity 350ms ease, transform 350ms ease;
        }
        .sn-hint span {
          display: inline-block;
          margin-right: 10px;
          color: var(--deep);
          font-size: 18px;
          line-height: 0;
          transform: translateY(2px);
        }
        .sn-progress {
          position: absolute;
          right: 0;
          bottom: 0;
          left: 0;
          height: 5px;
          background: rgba(184,53,74,.1);
        }
        .sn-progress-fill {
          height: 100%;
          width: ${progress * 100}%;
          background: var(--deep);
          transition: width 120ms linear;
        }
        @media (max-width: 700px) {
          .sn-sticky { min-height: 560px; }
          .sn-content { width: auto; margin: 0 25px; padding-bottom: 5vh; }
          .sn-headline { font-size: clamp(2.5rem, 11vw, 4rem); line-height: 1.02; }
          .sn-body { margin-top: 24px; font-size: 15px; line-height: 1.6; }
          .sn-number { left: -1vw; bottom: 1vh; font-size: 57vw; }
          .sn-hint { bottom: 42px; }
        }
      `}</style>
      <div className="sn-sticky">
        <div className="sn-rule" />
        <div className="sn-counter">{String(index + 1).padStart(2, "0")} / 04</div>
        <div className="sn-number" aria-hidden="true">
          {String(index + 1).padStart(2, "0")}
        </div>
        <div className="sn-content" key={index}>
          <div className="sn-label">{situation.label}</div>
          <h2 className="sn-headline">{situation.headline}</h2>
          <p className="sn-body">{situation.body}</p>
          <a className="sn-link" href={situation.href}>{situation.cta}</a>
        </div>
        <div className="sn-hint"><span>↓</span>Scroll to continue</div>
        <div className="sn-progress" aria-label={`Narrative progress ${Math.round(progress * 100)} percent`}>
          <div className="sn-progress-fill" />
        </div>
      </div>
    </section>
  );
}