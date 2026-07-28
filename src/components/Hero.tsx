import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { ArrowDown, ArrowUpRight, Github, Linkedin } from 'lucide-react';
import { gsap, SplitText, prefersReducedMotion } from '../lib/gsap';
import { scrollToId } from '../lib/scroll';
import { profile } from '../data/profile';
import SpinningBadge from './ui/SpinningBadge';

interface HeroProps {
  start: boolean;
}

const Hero = ({ start }: HeroProps) => {
  const ref = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      if (!start || !ref.current) return;

      if (prefersReducedMotion()) {
        gsap.set('.hero-fade, .hero-line, .hero-underline', { opacity: 1 });
        gsap.set('.hero-underline', { scaleX: 1 });
        // Stacked ticker words would overlap without an animation cycling them
        gsap.set(gsap.utils.toArray('.specialty-word').slice(1), { opacity: 0 });
        return;
      }

      const tl = gsap.timeline();

      // Headline rises word by word, line by line
      const lines = gsap.utils.toArray<HTMLElement>('.hero-line');
      lines.forEach((el, i) => {
        const split = new SplitText(el, { type: 'words' });
        gsap.set(el, { opacity: 1 });
        tl.from(
          split.words,
          {
            yPercent: 115,
            duration: 0.95,
            stagger: 0.06,
            ease: 'power4.out',
          },
          i * 0.14
        );
      });

      tl.to('.hero-underline', { scaleX: 1, duration: 0.7, ease: 'power3.inOut' }, '-=0.35').from(
        '.hero-fade',
        { y: 26, opacity: 0, stagger: 0.09, duration: 0.7, ease: 'power3.out' },
        '-=0.6'
      );

      // Specialty word flipper
      const words = gsap.utils.toArray<HTMLElement>('.specialty-word');
      if (words.length > 1) {
        gsap.set(words, { yPercent: 100, opacity: 0 });
        gsap.set(words[0], { yPercent: 0, opacity: 1 });

        const flip = gsap.timeline({ repeat: -1, delay: 1.6 });
        words.forEach((word, i) => {
          const next = words[(i + 1) % words.length];
          flip
            .to(word, { yPercent: -100, opacity: 0, duration: 0.5, ease: 'power3.in' })
            .fromTo(
              next,
              { yPercent: 100, opacity: 0 },
              { yPercent: 0, opacity: 1, duration: 0.5, ease: 'power3.out' },
              '<0.1'
            )
            .to({}, { duration: 1.7 });
        });
      }

      // Cursor-driven parallax on the decorative layers
      if (window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
        const blobX = gsap.quickTo('.hero-blob', 'x', { duration: 1.2, ease: 'power3' });
        const blobY = gsap.quickTo('.hero-blob', 'y', { duration: 1.2, ease: 'power3' });
        const markX = gsap.quickTo('.hero-mark', 'x', { duration: 1.6, ease: 'power3' });
        const markY = gsap.quickTo('.hero-mark', 'y', { duration: 1.6, ease: 'power3' });

        const onMove = (e: MouseEvent) => {
          const dx = e.clientX / window.innerWidth - 0.5;
          const dy = e.clientY / window.innerHeight - 0.5;
          blobX(dx * 70);
          blobY(dy * 70);
          markX(dx * -40);
          markY(dy * -40);
        };

        window.addEventListener('mousemove', onMove);
        return () => window.removeEventListener('mousemove', onMove);
      }
    },
    { dependencies: [start], scope: ref }
  );

  // Scroll-scrub fade, independent of the intro timeline
  useGSAP(
    () => {
      if (!ref.current || prefersReducedMotion()) return;
      gsap.to('.hero-title-block', {
        yPercent: 16,
        opacity: 0.3,
        ease: 'none',
        scrollTrigger: {
          trigger: ref.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      });
    },
    { scope: ref }
  );

  return (
    <section
      id="home"
      ref={ref}
      className="min-h-screen flex flex-col justify-end relative section-pad pt-28 md:pt-32 pb-14 md:pb-16 overflow-hidden"
    >
      {/* Decorative layers */}
      <div className="hero-blob absolute -top-40 -right-32 w-[34rem] h-[34rem] rounded-full bg-accent/25 blur-3xl pointer-events-none" />
      <span
        className="hero-mark absolute top-1/4 right-6 lg:right-24 font-display text-[14rem] lg:text-[20rem] leading-none text-outline opacity-[0.18] select-none pointer-events-none hidden sm:block"
        aria-hidden="true"
      >
        *
      </span>

      <div className="max-w-content mx-auto w-full relative">
        {/* Eyebrow */}
        <div className="hero-fade flex items-center gap-2.5 mb-6 md:mb-8">
          <span className="w-2 h-2 rounded-full bg-accent-ink animate-pulse" />
          <span className="section-label text-ink-dim">{profile.greeting}</span>
          <span className="hidden sm:inline w-8 h-px bg-ink/20" />
          <span className="hidden sm:inline section-label">{profile.status}</span>
        </div>

        {/* Statement headline + badge */}
        <div className="hero-title-block mb-10 md:mb-12 flex items-end justify-between gap-8">
          <h1 className="font-display font-bold text-display-xl text-ink uppercase">
            {profile.heroHeadline.map((line, i) => {
              const isLast = i === profile.heroHeadline.length - 1;
              return (
                <span key={line} className="block overflow-hidden">
                  <span className={`hero-line block opacity-0 ${isLast ? 'text-outline' : ''}`}>
                    {line}
                  </span>
                  {isLast && (
                    <span className="hero-underline block h-1.5 md:h-2 bg-accent origin-left scale-x-0 mt-2 md:mt-3 max-w-[60%]" />
                  )}
                </span>
              );
            })}
          </h1>

          <div className="hero-fade hidden lg:block flex-shrink-0 pb-4">
            <SpinningBadge onClick={() => scrollToId('contact')} />
          </div>
        </div>

        {/* Specialty ticker */}
        <div className="hero-fade flex items-center gap-3 mb-10 md:mb-14">
          <span className="section-label">Currently shipping</span>
          <ArrowUpRight className="w-4 h-4 text-accent-ink flex-shrink-0" />
          <span className="relative block h-[1.5em] min-w-[12rem] md:min-w-[16rem] font-display text-lg md:text-2xl font-medium leading-none text-ink overflow-hidden">
            {profile.specialties.map((item, i) => (
              <span
                key={item}
                // Hidden until the intro timeline takes over, so the stack is never visible
                className={`specialty-word absolute inset-0 flex items-center whitespace-nowrap ${
                  i === 0 ? '' : 'opacity-0'
                }`}
              >
                {item}
              </span>
            ))}
          </span>
        </div>

        {/* Intro + CTAs */}
        <div className="grid md:grid-cols-12 gap-8 md:gap-12 items-end mb-14 md:mb-16">
          <p className="hero-fade md:col-span-6 text-ink-dim text-base md:text-lg leading-relaxed max-w-xl text-balance">
            {profile.tagline}
          </p>

          <div className="hero-fade md:col-span-6 flex flex-wrap items-center gap-4 md:justify-end">
            <button onClick={() => scrollToId('projects')} className="btn-primary">
              See the work
              <ArrowUpRight className="w-4 h-4" />
            </button>
            <button onClick={() => scrollToId('contact')} className="btn-secondary">
              Start a project
            </button>
            <div className="flex gap-2 ml-2">
              <a
                href={profile.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full border border-ink/15 text-ink-dim hover:text-ink hover:border-ink transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={profile.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full border border-ink/15 text-ink-dim hover:text-ink hover:border-ink transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="hero-fade hairline pt-8 grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
          {profile.stats.map((stat) => (
            <div key={stat.label}>
              <div className="font-display text-3xl md:text-5xl font-bold text-ink mb-1">
                {stat.value}
              </div>
              <div className="section-label">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Scroll cue */}
        <button
          onClick={() => scrollToId('about')}
          className="hero-fade mt-10 md:mt-14 flex items-center gap-2 section-label hover:text-ink transition-colors"
        >
          <ArrowDown className="w-4 h-4 animate-bounce" />
          Scroll to explore
        </button>
      </div>
    </section>
  );
};

export default Hero;
