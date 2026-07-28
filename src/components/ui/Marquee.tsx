import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap, ScrollTrigger, prefersReducedMotion } from '../../lib/gsap';

interface MarqueeProps {
  items: readonly string[];
}

const Marquee = ({ items }: MarqueeProps) => {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (prefersReducedMotion()) return;

      const track = ref.current?.querySelector('.marquee-track');
      if (!track) return;

      const tween = gsap.to(track, {
        xPercent: -50,
        repeat: -1,
        ease: 'none',
        duration: 24,
      });

      // Speed up / reverse with scroll velocity
      ScrollTrigger.create({
        trigger: ref.current,
        start: 'top bottom',
        end: 'bottom top',
        onUpdate: (self) => {
          const velocity = self.getVelocity();
          const direction = velocity < 0 ? -1 : 1;
          gsap.to(tween, {
            timeScale: direction * Math.min(4, 1 + Math.abs(velocity) / 800),
            duration: 0.4,
            overwrite: true,
          });
        },
      });
    },
    { scope: ref }
  );

  const row = [...items, ...items];

  return (
    <div
      ref={ref}
      className="hairline border-b border-ink/10 py-6 md:py-8 overflow-hidden"
      aria-hidden="true"
    >
      <div className="marquee-track flex w-max items-center gap-8 md:gap-12 whitespace-nowrap">
        {row.map((item, i) => (
          <span key={i} className="flex items-center gap-8 md:gap-12">
            <span className="font-display text-2xl md:text-4xl font-medium text-ink-faint uppercase tracking-tight">
              {item}
            </span>
            <span className="w-2 h-2 rounded-full bg-accent-ink flex-shrink-0" />
          </span>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
