import { useRef } from 'react';
import { MapPin } from 'lucide-react';
import SectionHeader from './ui/SectionHeader';
import SplitReveal from './ui/SplitReveal';
import { useReveal } from '../hooks/useReveal';
import { profile } from '../data/profile';

const About = () => {
  const ref = useRef<HTMLElement>(null);
  useReveal(ref);

  return (
    <section id="about" className="section-pad hairline" ref={ref}>
      <div className="max-w-content mx-auto">
        <SectionHeader number="01" label="About" title="The developer behind the systems." />

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Bio */}
          <div className="lg:col-span-7">
            <SplitReveal
              as="p"
              className="font-display text-2xl md:text-3xl lg:text-4xl text-ink leading-snug font-medium text-balance mb-8"
            >
              {profile.bio}
            </SplitReveal>
            <div className="reveal flex items-center gap-2 text-ink-dim">
              <MapPin className="w-4 h-4 text-accent-ink" />
              <span className="text-sm">{profile.locationDetail}</span>
            </div>
          </div>

          {/* Tech proficiency */}
          <div className="lg:col-span-5">
            <p className="reveal section-label mb-6">Core proficiency</p>
            <div className="space-y-5">
              {profile.aboutTech.map((tech) => (
                <div key={tech.name} className="reveal">
                  <div className="flex justify-between items-baseline mb-2">
                    <span className="text-sm font-medium text-ink">{tech.name}</span>
                    <span className="font-mono text-xs text-ink-faint">{tech.level}%</span>
                  </div>
                  <div className="skill-bar">
                    <div className="skill-bar-fill bar-fill-anim" style={{ width: `${tech.level}%` }} />
                  </div>
                </div>
              ))}
            </div>

            <div className="reveal mt-10 flex flex-wrap gap-2">
              {profile.heroSkills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1.5 rounded-full border border-ink/10 text-xs text-ink-dim tracking-wide hover:border-accent-ink/50 hover:text-accent-ink transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
