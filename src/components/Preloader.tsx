import { useRef, useState } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap, SplitText, prefersReducedMotion } from '../lib/gsap';

interface PreloaderProps {
  /** Fires the moment the curtain starts lifting; use for page-reveal effects. */
  onReveal?: () => void;
  onComplete: () => void;
}

const greetings = ['Hello', 'Bonjour', 'Hola', 'السلام عليكم', 'Hallo', 'Ciao'];

// STEP must exceed SLIDE so a word's exit never overlaps its own entrance;
// each word rolls out exactly as the next rolls in.
const SLIDE = 0.26;
const STEP = 0.3;

const Preloader = ({ onReveal, onComplete }: PreloaderProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [count, setCount] = useState(0);

  useGSAP(
    () => {
      const reduced = prefersReducedMotion();
      const counter = { v: 0 };
      const words = gsap.utils.toArray<HTMLElement>('.greeting');

      const tl = gsap.timeline({ onComplete });

      if (reduced) {
        setCount(100);
        gsap.set('.preloader-progress', { scaleX: 1 });
        gsap.set('.preloader-name', { opacity: 1 });
        tl.call(() => onReveal?.())
          .set('.preloader-panel', { yPercent: -100 })
          .set('.preloader-lime', { yPercent: -100 }, '+=0.05');
        return;
      }

      // --- Stage A: greetings roll while counter + progress line fill ---
      gsap.set(words, { yPercent: 100, opacity: 0 });

      words.forEach((word, i) => {
        const at = i * STEP;
        tl.to(word, { yPercent: 0, opacity: 1, duration: SLIDE, ease: 'power3.out' }, at);
        tl.to(word, { yPercent: -100, opacity: 0, duration: SLIDE, ease: 'power3.in' }, at + STEP);
      });

      // --- Stage B: name wordmark rises where the greetings were ---
      const nameAt = words.length * STEP;
      const nameEl = ref.current?.querySelector('.preloader-name');
      if (nameEl) {
        const split = new SplitText(nameEl, { type: 'chars' });
        gsap.set(nameEl, { opacity: 1 });
        gsap.set(split.chars, { yPercent: 120 });
        tl.to(
          split.chars,
          { yPercent: 0, duration: 0.5, stagger: 0.022, ease: 'power4.out' },
          nameAt
        );
      }
      const nameEnd = nameAt + 0.5;

      // Counter + progress line land exactly when the name does
      tl.to(
        counter,
        {
          v: 100,
          duration: nameEnd,
          ease: 'power1.inOut',
          onUpdate: () => setCount(Math.round(counter.v)),
        },
        0
      );
      tl.to('.preloader-progress', { scaleX: 1, duration: nameEnd, ease: 'power1.inOut' }, 0);

      // Watermark settles over the whole load
      tl.fromTo(
        '.preloader-mark',
        { scale: 1.06 },
        { scale: 1, duration: nameEnd, ease: 'power1.out' },
        0
      );

      // --- Stage C: dual-panel curtain exit (ink lifts, lime flashes after) ---
      tl.call(() => onReveal?.(), undefined, nameEnd + 0.25)
        .to('.preloader-panel', { yPercent: -100, duration: 0.7, ease: 'power4.inOut' }, nameEnd + 0.25)
        .to('.preloader-lime', { yPercent: -100, duration: 0.7, ease: 'power4.inOut' }, nameEnd + 0.37);

      // Continuous asterisk spin, outside the timeline
      gsap.to('.preloader-asterisk', { rotate: 360, duration: 6, ease: 'none', repeat: -1 });
    },
    { scope: ref }
  );

  return (
    <div ref={ref} className="fixed inset-0 z-[100] pointer-events-none">
      {/* Lime under-panel, revealed briefly as the ink panel lifts */}
      <div className="preloader-lime absolute inset-0 bg-accent" />

      {/* Ink panel */}
      <div className="preloader-panel absolute inset-0 bg-ink overflow-hidden">
        {/* Giant outline watermark */}
        <span
          className="preloader-mark absolute inset-0 flex items-center justify-center font-display font-bold leading-none select-none text-[16rem] sm:text-[26rem] md:text-[34rem]"
          style={{ WebkitTextStroke: '1.5px rgba(242,242,239,0.09)', color: 'transparent' }}
          aria-hidden="true"
        >
          OI
        </span>

        {/* Corner metadata */}
        <p className="absolute top-5 left-5 md:top-8 md:left-10 font-mono text-[10px] md:text-xs uppercase tracking-[0.2em] text-paper/40">
          Osama Islam
        </p>
        <p className="absolute top-5 right-5 md:top-8 md:right-10 font-mono text-[10px] md:text-xs uppercase tracking-[0.2em] text-paper/40 text-right">
          Full Stack / Laravel
        </p>
        <p className="absolute bottom-6 left-5 md:bottom-10 md:left-10 font-mono text-[10px] md:text-xs uppercase tracking-[0.2em] text-paper/40">
          Based in India / IST
        </p>
        <div className="absolute bottom-5 right-5 md:bottom-8 md:right-10 font-display text-5xl md:text-7xl font-bold text-accent tabular-nums leading-none">
          {count}
        </div>

        {/* Center stage: spinning asterisk + greeting roll / name beat */}
        <div className="absolute inset-0 flex items-center justify-center gap-4 md:gap-6">
          <span
            className="preloader-asterisk font-display text-3xl md:text-5xl text-accent leading-none select-none"
            aria-hidden="true"
          >
            *
          </span>
          <div className="relative h-[1.5em] w-[70vw] max-w-3xl font-display text-4xl sm:text-6xl md:text-7xl font-medium leading-none text-paper overflow-hidden">
            {greetings.map((word) => (
              <span key={word} className="greeting absolute inset-0 flex items-center justify-center">
                {word}
              </span>
            ))}
            <span className="preloader-name absolute inset-0 flex items-center justify-center opacity-0">
              Osama Islam<span className="text-accent">.</span>
            </span>
          </div>
        </div>

        {/* Progress line */}
        <div className="preloader-progress absolute bottom-0 left-0 right-0 h-[2px] bg-accent origin-left scale-x-0" />
      </div>
    </div>
  );
};

export default Preloader;
