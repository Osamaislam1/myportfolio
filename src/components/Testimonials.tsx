import { useRef } from 'react';
import SectionHeader from './ui/SectionHeader';
import { useReveal } from '../hooks/useReveal';
import { testimonials } from '../data/testimonials';
import { profile } from '../data/profile';

const Testimonials = () => {
  const ref = useRef<HTMLElement>(null);
  useReveal(ref);

  return (
    <section id="testimonials" className="section-pad hairline" ref={ref}>
      <div className="max-w-content mx-auto">
        <SectionHeader number="05" label="Testimonials" title="What clients say." />

        <div className="grid md:grid-cols-3 gap-6 md:gap-8 mb-8">
          {testimonials.map((t) => (
            <blockquote
              key={t.name}
              className="reveal card-soft p-6 md:p-8 hover:border-accent-ink/25 transition-colors"
            >
              <span className="font-display text-5xl text-accent-ink leading-none block mb-4">
                &ldquo;
              </span>
              <p className="font-display text-xl md:text-2xl text-ink leading-snug font-medium mb-8">
                {t.feedback}
              </p>
              <footer className="flex items-center justify-between">
                <cite className="not-italic text-sm font-medium text-ink">{t.name}</cite>
                <span className="section-label">{t.country}</span>
              </footer>
            </blockquote>
          ))}
        </div>

        <p className="reveal text-sm text-ink-faint">
          From{' '}
          <a
            href={profile.social.freelancer}
            target="_blank"
            rel="noopener noreferrer"
            className="link-underline text-ink-dim hover:text-ink transition-colors"
          >
            Freelancer.com
          </a>
        </p>
      </div>
    </section>
  );
};

export default Testimonials;
