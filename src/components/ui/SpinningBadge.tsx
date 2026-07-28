import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { ArrowUpRight } from 'lucide-react';
import { gsap, prefersReducedMotion } from '../../lib/gsap';

interface SpinningBadgeProps {
  text?: string;
  onClick?: () => void;
  className?: string;
}

const SpinningBadge = ({
  text = 'OPEN TO WORK • FULL STACK • LARAVEL • ',
  onClick,
  className = '',
}: SpinningBadgeProps) => {
  const ref = useRef<HTMLButtonElement>(null);

  useGSAP(
    () => {
      if (prefersReducedMotion()) return;
      gsap.to('.badge-spin', { rotate: 360, duration: 22, ease: 'none', repeat: -1 });
    },
    { scope: ref }
  );

  return (
    <button
      ref={ref}
      onClick={onClick}
      aria-label="Go to contact section"
      className={`relative w-32 h-32 lg:w-40 lg:h-40 flex items-center justify-center group ${className}`}
    >
      <svg viewBox="0 0 100 100" className="badge-spin absolute inset-0 w-full h-full">
        <defs>
          <path id="badge-circle" d="M 50,50 m -37,0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" />
        </defs>
        <text className="fill-ink-dim font-mono" style={{ fontSize: '9px', letterSpacing: '0.12em' }}>
          <textPath href="#badge-circle">{text}</textPath>
        </text>
      </svg>

      <span className="w-12 h-12 lg:w-14 lg:h-14 rounded-full bg-ink text-paper flex items-center justify-center transition-colors duration-300 group-hover:bg-accent group-hover:text-ink">
        <ArrowUpRight className="w-5 h-5" />
      </span>
    </button>
  );
};

export default SpinningBadge;
