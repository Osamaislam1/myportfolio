import { useRef } from 'react';
import SectionHeader from './ui/SectionHeader';
import { useReveal } from '../hooks/useReveal';
import { skillCategories, additionalSkills } from '../data/skills';

const Skills = () => {
  const ref = useRef<HTMLElement>(null);
  useReveal(ref);

  return (
    <section id="skills" className="section-pad hairline" ref={ref}>
      <div className="max-w-content mx-auto">
        <SectionHeader number="04" label="Skills" title="A toolkit built for shipping." />

        <div className="grid md:grid-cols-2 gap-6 md:gap-8 mb-12">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="reveal card-soft p-6 md:p-8 hover:border-accent-ink/25 transition-colors"
            >
              <h3 className="font-display text-xl font-medium text-ink mb-6">{category.title}</h3>
              <div className="space-y-4">
                {category.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-baseline mb-1.5">
                      <span className="text-sm text-ink-dim">{skill.name}</span>
                      <span className="font-mono text-xs text-ink-faint">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <div
                        className="skill-bar-fill bar-fill-anim"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="reveal">
          <p className="section-label mb-4">Also working with</p>
          <div className="flex flex-wrap gap-2">
            {additionalSkills.map((skill) => (
              <span
                key={skill}
                className="px-3.5 py-2 rounded-full border border-ink/10 text-sm text-ink-dim hover:border-accent-ink/50 hover:text-accent-ink transition-colors"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
