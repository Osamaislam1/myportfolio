import { useRef } from 'react';
import { GraduationCap } from 'lucide-react';
import SectionHeader from './ui/SectionHeader';
import { useReveal } from '../hooks/useReveal';
import { education, certifications, currentlyLearning } from '../data/education';

const Education = () => {
  const ref = useRef<HTMLElement>(null);
  useReveal(ref);

  return (
    <section id="education" className="section-pad hairline" ref={ref}>
      <div className="max-w-content mx-auto">
        <SectionHeader number="05" label="Education" title="Strong foundations, still learning." />

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Degrees */}
          <div className="space-y-8">
            <p className="reveal section-label">Academic background</p>
            {education.map((edu) => (
              <div key={edu.id} className="reveal flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-paper-soft border border-ink/10 flex items-center justify-center">
                  <GraduationCap className="w-4 h-4 text-accent-ink" />
                </div>
                <div>
                  <h3 className="font-display text-xl font-medium text-ink mb-1">{edu.degree}</h3>
                  <p className="text-ink-dim text-sm mb-2">{edu.institution}</p>
                  <p className="section-label mb-3">
                    {edu.period} · {edu.location}
                  </p>
                  <p className="text-sm text-ink-faint leading-relaxed mb-3">{edu.description}</p>
                  {edu.achievements && (
                    <ul className="space-y-1.5">
                      {edu.achievements.map((a) => (
                        <li key={a} className="text-sm text-ink-dim flex gap-2">
                          <span className="text-accent-ink">·</span>
                          {a}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Certs + learning */}
          <div>
            <p className="reveal section-label mb-6">Certifications</p>
            <div className="space-y-0 mb-10">
              {certifications.map((cert) => (
                <div
                  key={cert.name}
                  className="reveal flex items-center justify-between py-4 hairline first:border-t-0 first:pt-0"
                >
                  <div>
                    <p className="text-sm font-medium text-ink">{cert.name}</p>
                    <p className="section-label mt-1">
                      {cert.issuer} · {cert.year}
                    </p>
                  </div>
                  <span className="font-mono text-[10px] uppercase tracking-widest text-accent-ink">
                    Verified
                  </span>
                </div>
              ))}
            </div>

            <p className="reveal section-label mb-6">Currently learning</p>
            <div className="space-y-5">
              {currentlyLearning.map((item) => (
                <div key={item.name} className="reveal">
                  <div className="flex justify-between mb-2">
                    <span className="text-sm text-ink-dim">{item.name}</span>
                    <span className="font-mono text-xs text-ink-faint">{item.progress}%</span>
                  </div>
                  <div className="skill-bar">
                    <div
                      className="skill-bar-fill bar-fill-anim"
                      style={{ width: `${item.progress}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
