import { useRef } from 'react';
import SectionHeader from './ui/SectionHeader';
import { useReveal } from '../hooks/useReveal';
import { experiences } from '../data/experience';

const Experience = () => {
  const ref = useRef<HTMLElement>(null);
  useReveal(ref);

  return (
    <section id="experience" className="section-pad hairline" ref={ref}>
      <div className="max-w-content mx-auto">
        <SectionHeader number="02" label="Experience" title="Roles that sharpened the craft." />

        <div>
          {experiences.map((exp, index) => (
            <article
              key={exp.id}
              className="reveal hairline py-10 md:py-14 first:border-t-0 first:pt-0"
            >
              <div className="grid md:grid-cols-12 gap-6 md:gap-10">
                <div className="md:col-span-4">
                  <span className="font-mono text-xs text-accent-ink mb-3 block">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <h3 className="font-display text-2xl md:text-3xl font-medium text-ink mb-2">
                    {exp.role}
                  </h3>
                  <p className="text-ink-dim font-medium mb-3">{exp.company}</p>
                  <div className="flex flex-col gap-1 section-label">
                    <span>{exp.period}</span>
                    <span>{exp.location}</span>
                  </div>
                </div>

                <div className="md:col-span-8">
                  <ul className="space-y-3 mb-6">
                    {exp.description.map((item) => (
                      <li key={item} className="flex gap-3 text-ink-dim leading-relaxed">
                        <span className="mt-2.5 w-1 h-1 rounded-full bg-accent-ink flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 rounded-full bg-paper-soft border border-ink/5 text-xs text-ink-dim"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
