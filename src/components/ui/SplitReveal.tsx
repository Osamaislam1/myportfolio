import { useRef, type ElementType, type ReactNode } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap, SplitText, prefersReducedMotion } from '../../lib/gsap';

interface SplitRevealProps {
  children: ReactNode;
  as?: ElementType;
  className?: string;
  delay?: number;
}

/** Reveals text line-by-line (masked rise) when it scrolls into view. */
const SplitReveal = ({ children, as: Tag = 'div', className = '', delay = 0 }: SplitRevealProps) => {
  const ref = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      if (!ref.current || prefersReducedMotion()) return;

      const split = new SplitText(ref.current, { type: 'lines', linesClass: 'split-line-inner' });

      // Wrap each line in an overflow-hidden mask
      split.lines.forEach((line) => {
        const wrapper = document.createElement('div');
        wrapper.className = 'split-line';
        line.parentNode?.insertBefore(wrapper, line);
        wrapper.appendChild(line);
      });

      gsap.from(split.lines, {
        yPercent: 110,
        duration: 1,
        stagger: 0.09,
        delay,
        ease: 'power4.out',
        scrollTrigger: {
          trigger: ref.current,
          start: 'top 88%',
          once: true,
        },
      });

      return () => {
        split.revert();
      };
    },
    { scope: ref }
  );

  return (
    <Tag ref={ref} className={className}>
      {children}
    </Tag>
  );
};

export default SplitReveal;
