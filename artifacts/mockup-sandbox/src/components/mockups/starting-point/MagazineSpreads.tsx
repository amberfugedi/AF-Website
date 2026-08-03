import { useCallback, useEffect, useRef, useState } from "react";
import type { PointerEvent } from "react";

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

export function MagazineSpreads() {
  const [active, setActive] = useState(0);
  const [direction, setDirection] = useState(1);
  const pointerStart = useRef<number | null>(null);
  const dragging = useRef(false);

  const goTo = useCallback((next: number, dir?: number) => {
    if (next === active) return;
    setDirection(dir ?? (next > active ? 1 : -1));
    setActive((next + situations.length) % situations.length);
  }, [active]);

  const next = useCallback(() => goTo((active + 1) % situations.length, 1), [active, goTo]);
  const previous = useCallback(() => goTo((active - 1 + situations.length) % situations.length, -1), [active, goTo]);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "ArrowRight") next();
      if (event.key === "ArrowLeft") previous();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [next, previous]);

  const onPointerDown = (event: PointerEvent<HTMLDivElement>) => {
    pointerStart.current = event.clientX;
    dragging.current = true;
    event.currentTarget.setPointerCapture(event.pointerId);
  };
  const onPointerUp = (event: PointerEvent<HTMLDivElement>) => {
    if (pointerStart.current !== null) {
      const distance = event.clientX - pointerStart.current;
      if (Math.abs(distance) > 48) (distance < 0 ? next : previous)();
    }
    pointerStart.current = null;
    dragging.current = false;
  };

  return (
    <section className="magazine-spreads" aria-label="Choose your starting point">
      <style>{`
        .magazine-spreads {
          --ink: #2E2A27; --cream: #FDF9F5; --coral: #FF6F61; --deep: #B8354A;
          --muted: #5C544B; --line: rgba(46,42,39,.12);
          background: var(--cream); color: var(--ink); padding: clamp(2.5rem, 6vw, 6rem) clamp(1rem, 5vw, 5rem);
          font-family: 'Manrope', sans-serif; overflow: hidden;
        }
        .magazine-spreads__heading {
          font-family: 'Newsreader', Georgia, serif; font-size: clamp(2.6rem, 5vw, 5.2rem);
          font-weight: 400; letter-spacing: -.045em; line-height: .95; margin: 0 auto clamp(2rem, 4vw, 3.5rem);
          max-width: 1240px;
        }
        .magazine-spreads__frame { max-width: 1400px; margin: 0 auto; position: relative; }
        .magazine-spreads__viewport {
          position: relative; height: min(600px, 68vw); min-height: 500px; overflow: hidden;
          touch-action: pan-y; user-select: none; cursor: grab;
        }
        .magazine-spreads__viewport:active { cursor: grabbing; }
        .magazine-spreads__slide {
          position: absolute; inset: 0; transition: transform .5s cubic-bezier(.22,1,.36,1);
          will-change: transform; padding: clamp(2rem, 5vw, 5.5rem);
        }
        .magazine-spreads__label { color: var(--deep); font-size: .7rem; font-weight: 800; letter-spacing: .16em; text-transform: uppercase; }
        .magazine-spreads__body { color: var(--muted); font-size: clamp(.9rem, 1.2vw, 1.08rem); line-height: 1.65; max-width: 31rem; }
        .magazine-spreads__cta { color: var(--deep); font-size: .78rem; font-weight: 800; letter-spacing: .09em; text-decoration: none; text-transform: uppercase; }
        .magazine-spreads__cta:hover { color: var(--coral); }
        .magazine-spreads__rule { width: 60%; border: 0; border-top: 1px solid var(--coral); margin: clamp(1.5rem, 3vw, 2.7rem) 0 1.6rem; }
        .magazine-spreads__arrow {
          position: absolute; z-index: 5; top: 50%; transform: translateY(-50%); width: 3.15rem; height: 3.15rem;
          border: 1px solid var(--deep); border-radius: 50%; background: rgba(253,249,245,.84); color: var(--deep);
          display: grid; place-items: center; font: 2rem/1 'Newsreader', Georgia, serif; cursor: pointer; transition: background .2s, color .2s;
        }
        .magazine-spreads__arrow:hover { background: var(--deep); color: var(--cream); }
        .magazine-spreads__arrow--left { left: -1.55rem; } .magazine-spreads__arrow--right { right: -1.55rem; }
        .magazine-spreads__dots { display: flex; justify-content: center; gap: .6rem; padding-top: 1.4rem; }
        .magazine-spreads__dot { width: .42rem; height: .42rem; border: 0; border-radius: 50%; background: rgba(46,42,39,.2); cursor: pointer; padding: 0; }
        .magazine-spreads__dot[aria-current="true"] { background: var(--deep); transform: scale(1.35); }
        .spread-one { background: linear-gradient(90deg, rgba(252,228,196,.35), rgba(252,228,196,.35)); }
        .spread-one__num { position: absolute; left: 4%; top: 50%; transform: translateY(-54%); color: rgba(46,42,39,.12); font: 400 clamp(8rem,18vw,17rem)/.75 'Newsreader', Georgia, serif; letter-spacing: -.1em; }
        .spread-one__content { position: relative; margin-left: 31%; max-width: 52rem; height: 100%; display: flex; flex-direction: column; align-items: flex-end; text-align: right; }
        .spread-one__content h2 { font: 400 clamp(2.1rem,3.6vw,3.7rem)/.98 'Newsreader', Georgia, serif; letter-spacing: -.045em; max-width: 45rem; margin: 1.8rem 0 0; }
        .spread-one__content .magazine-spreads__body { max-width: 34rem; }
        .spread-one__content .magazine-spreads__cta { margin-top: auto; }
        .spread-two { background: rgba(218,212,245,.3); text-align: center; display: flex; flex-direction: column; align-items: center; }
        .spread-two__num { position: absolute; inset: 10% 0 auto; color: rgba(46,42,39,.08); font: 400 clamp(12rem,24vw,25rem)/.7 'Newsreader', Georgia, serif; letter-spacing: -.12em; }
        .spread-two__content { position: relative; z-index: 1; margin: auto; display: flex; flex-direction: column; align-items: center; }
        .spread-two h2 { max-width: 48rem; font: 400 clamp(2rem,3.2vw,3.35rem)/1 'Newsreader', Georgia, serif; letter-spacing: -.045em; margin: 1.3rem 0 1.4rem; }
        .spread-two .magazine-spreads__body { max-width: 32rem; margin-bottom: 2rem; }
        .spread-two .magazine-spreads__label { position: absolute; right: 0; top: 0; }
        .spread-three { background: rgba(251,237,191,.4); display: grid; grid-template-columns: 1fr 1fr; gap: clamp(2rem, 8vw, 9rem); }
        .spread-three__left { display: flex; flex-direction: column; justify-content: center; }
        .spread-three__left .magazine-spreads__label { color: var(--ink); font: italic 400 clamp(1.7rem,3vw,2.8rem)/1 'Newsreader', Georgia, serif; text-transform: none; letter-spacing: -.035em; }
        .spread-three__left .magazine-spreads__body { margin-top: 2rem; }
        .spread-three__right { position: relative; display: flex; align-items: center; justify-content: center; }
        .spread-three__num { color: rgba(184,53,74,.2); font: 400 clamp(10rem,20vw,20rem)/.7 'Newsreader', Georgia, serif; letter-spacing: -.12em; }
        .spread-three__lines { position: absolute; inset: 18% 0 19%; width: 100%; height: 64%; }
        .spread-three__cta { position: absolute; bottom: 0; right: 0; }
        .spread-four { background: rgba(245,213,213,.3); }
        .spread-four__number { font: 400 1.25rem/1 'Newsreader', Georgia, serif; color: var(--muted); }
        .spread-four__content { height: 100%; display: flex; flex-direction: column; justify-content: flex-end; }
        .spread-four__content .magazine-spreads__body { margin: auto 0 2rem; max-width: 32rem; }
        .spread-four h2 { font: 400 clamp(2.7rem,5vw,5rem)/.93 'Newsreader', Georgia, serif; letter-spacing: -.055em; max-width: 65rem; margin: 0 0 1.3rem; }
        .spread-four__cta { align-self: flex-end; }
        @media (max-width: 700px) {
          .magazine-spreads__viewport { min-height: 590px; height: 145vw; }
          .magazine-spreads__arrow--left { left: .65rem; } .magazine-spreads__arrow--right { right: .65rem; }
          .spread-one__content { margin-left: 8%; padding-top: 20%; }
          .spread-one__num { left: 2%; top: 17%; }
          .spread-one__content h2 { margin-top: 2rem; }
          .spread-three { grid-template-columns: 1fr; gap: 0; }
          .spread-three__left { justify-content: flex-start; padding-top: 12%; }
          .spread-three__right { min-height: 260px; }
          .spread-three__lines { inset: 8% 0 8%; }
          .spread-three__cta { bottom: 0; }
          .spread-two .magazine-spreads__label { top: 1rem; right: 1rem; }
        }
      `}</style>
      <h1 className="magazine-spreads__heading">Choose your starting point</h1>
      <div className="magazine-spreads__frame">
        <button className="magazine-spreads__arrow magazine-spreads__arrow--left" onClick={previous} aria-label="Previous spread">‹</button>
        <div className="magazine-spreads__viewport" onPointerDown={onPointerDown} onPointerUp={onPointerUp} onPointerCancel={onPointerUp}>
          {situations.map((item, index) => {
            const offset = (index - active + situations.length) % situations.length;
            const position = offset === 0 ? 0 : offset === 1 ? 100 : -100;
            const style = { transform: `translateX(${position}%)`, transitionDuration: dragging.current ? "0ms" : "500ms" };
            if (index === 0) return <article key={item.label} className="magazine-spreads__slide spread-one" style={style} aria-hidden={active !== index}>
              <span className="magazine-spreads__label">{item.label}</span><span className="spread-one__num">01</span>
              <div className="spread-one__content"><h2>{item.headline}</h2><hr className="magazine-spreads__rule" /><p className="magazine-spreads__body">{item.body}</p><a className="magazine-spreads__cta" href={item.href}>{item.cta}</a></div>
            </article>;
            if (index === 1) return <article key={item.label} className="magazine-spreads__slide spread-two" style={style} aria-hidden={active !== index}>
              <span className="magazine-spreads__label">{item.label}</span><span className="spread-two__num">02</span>
              <div className="spread-two__content"><span className="magazine-spreads__label">02</span><h2>{item.headline}</h2><p className="magazine-spreads__body">{item.body}</p><a className="magazine-spreads__cta" href={item.href}>{item.cta}</a></div>
            </article>;
            if (index === 2) return <article key={item.label} className="magazine-spreads__slide spread-three" style={style} aria-hidden={active !== index}>
              <div className="spread-three__left"><span className="magazine-spreads__label">{item.label}</span><p className="magazine-spreads__body">{item.body}</p></div>
              <div className="spread-three__right"><span className="spread-three__num">03</span><svg className="spread-three__lines" viewBox="0 0 400 300" fill="none" aria-hidden="true"><path d="M35 250C130 210 210 190 380 30M35 250C160 250 260 220 380 150M35 250C150 275 270 280 380 275M35 250C145 180 260 110 380 90" stroke="#FF6F61" strokeWidth="1"/></svg><a className="magazine-spreads__cta spread-three__cta" href={item.href}>{item.cta}</a></div>
            </article>;
            return <article key={item.label} className="magazine-spreads__slide spread-four" style={style} aria-hidden={active !== index}>
              <div className="spread-four__content"><span className="spread-four__number">04</span><p className="magazine-spreads__body">{item.body}</p><h2>{item.headline}</h2><a className="magazine-spreads__cta spread-four__cta" href={item.href}>{item.cta}</a></div>
            </article>;
          })}
        </div>
        <button className="magazine-spreads__arrow magazine-spreads__arrow--right" onClick={next} aria-label="Next spread">›</button>
        <div className="magazine-spreads__dots" aria-label="Choose a spread">
          {situations.map((item, index) => <button key={item.label} className="magazine-spreads__dot" aria-label={`Show spread ${index + 1}`} aria-current={active === index} onClick={() => goTo(index)} />)}
        </div>
      </div>
    </section>
  );
}