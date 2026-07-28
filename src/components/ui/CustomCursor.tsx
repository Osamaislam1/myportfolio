import { useRef, useState, useEffect } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap, prefersReducedMotion } from '../../lib/gsap';

const CustomCursor = () => {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [enabled, setEnabled] = useState(false);
  const [label, setLabel] = useState('');

  useEffect(() => {
    setEnabled(
      window.matchMedia('(hover: hover) and (pointer: fine)').matches && !prefersReducedMotion()
    );
  }, []);

  useGSAP(
    () => {
      if (!enabled || !dotRef.current || !ringRef.current) return;

      gsap.set([dotRef.current, ringRef.current], { xPercent: -50, yPercent: -50, opacity: 0 });

      const dotX = gsap.quickTo(dotRef.current, 'x', { duration: 0.12, ease: 'power3' });
      const dotY = gsap.quickTo(dotRef.current, 'y', { duration: 0.12, ease: 'power3' });
      const ringX = gsap.quickTo(ringRef.current, 'x', { duration: 0.35, ease: 'power3' });
      const ringY = gsap.quickTo(ringRef.current, 'y', { duration: 0.35, ease: 'power3' });

      let visible = false;

      const onMove = (e: MouseEvent) => {
        if (!visible) {
          gsap.to([dotRef.current, ringRef.current], { opacity: 1, duration: 0.2 });
          visible = true;
        }
        dotX(e.clientX);
        dotY(e.clientY);
        ringX(e.clientX);
        ringY(e.clientY);
      };

      const onOver = (e: MouseEvent) => {
        const target = e.target as HTMLElement;
        if (target.closest('[data-cursor="view"]')) {
          setLabel('View');
          gsap.to(ringRef.current, {
            scale: 3,
            backgroundColor: 'rgba(17,17,16,0.95)',
            borderColor: 'rgba(17,17,16,0.95)',
            duration: 0.3,
          });
          gsap.to(dotRef.current, { opacity: 0, duration: 0.2 });
        } else if (target.closest('a, button, input, textarea, [role="button"]')) {
          setLabel('');
          gsap.to(ringRef.current, {
            scale: 1.8,
            backgroundColor: 'rgba(17,17,16,0)',
            borderColor: 'rgba(17,17,16,0.5)',
            duration: 0.3,
          });
          gsap.to(dotRef.current, { opacity: 1, scale: 1.5, duration: 0.2 });
        }
      };

      const onOut = (e: MouseEvent) => {
        const target = e.target as HTMLElement;
        if (target.closest('[data-cursor="view"], a, button, input, textarea, [role="button"]')) {
          setLabel('');
          gsap.to(ringRef.current, {
            scale: 1,
            backgroundColor: 'rgba(17,17,16,0)',
            borderColor: 'rgba(17,17,16,0.35)',
            duration: 0.3,
          });
          gsap.to(dotRef.current, { opacity: 1, scale: 1, duration: 0.2 });
        }
      };

      const onLeave = () => {
        gsap.to([dotRef.current, ringRef.current], { opacity: 0, duration: 0.2 });
        visible = false;
      };

      window.addEventListener('mousemove', onMove);
      document.addEventListener('mouseover', onOver);
      document.addEventListener('mouseout', onOut);
      document.documentElement.addEventListener('mouseleave', onLeave);

      return () => {
        window.removeEventListener('mousemove', onMove);
        document.removeEventListener('mouseover', onOver);
        document.removeEventListener('mouseout', onOut);
        document.documentElement.removeEventListener('mouseleave', onLeave);
      };
    },
    { dependencies: [enabled] }
  );

  if (!enabled) return null;

  return (
    <>
      <div
        ref={dotRef}
        className="fixed top-0 left-0 w-2 h-2 rounded-full bg-ink z-[999] pointer-events-none"
      />
      <div
        ref={ringRef}
        className="fixed top-0 left-0 w-10 h-10 rounded-full border border-ink/35 z-[998] pointer-events-none flex items-center justify-center"
      >
        {label && (
          <span className="font-display text-[9px] font-medium text-paper tracking-wide">
            {label}
          </span>
        )}
      </div>
    </>
  );
};

export default CustomCursor;
