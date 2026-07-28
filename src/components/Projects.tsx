import { useState, useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { ArrowUpRight, X, ExternalLink } from 'lucide-react';
import { gsap, prefersReducedMotion } from '../lib/gsap';
import SectionHeader from './ui/SectionHeader';
import { useReveal } from '../hooks/useReveal';
import { projects, projectCategories, type Project } from '../data/projects';

const Projects = () => {
  const ref = useRef<HTMLElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);
  const [filter, setFilter] = useState('all');
  const [selected, setSelected] = useState<Project | null>(null);
  const [closing, setClosing] = useState(false);

  useReveal(ref);

  const filtered = filter === 'all' ? projects : projects.filter((p) => p.category === filter);

  // Modal open animation
  useGSAP(
    () => {
      if (!selected || !modalRef.current || prefersReducedMotion()) return;
      gsap.from('.modal-overlay', { opacity: 0, duration: 0.3 });
      gsap.from('.modal-panel', {
        yPercent: 8,
        opacity: 0,
        duration: 0.5,
        ease: 'power4.out',
      });
    },
    { dependencies: [selected], scope: modalRef }
  );

  const closeModal = () => {
    if (closing) return;
    if (prefersReducedMotion() || !modalRef.current) {
      setSelected(null);
      return;
    }
    setClosing(true);
    gsap.to('.modal-panel', { yPercent: 6, opacity: 0, duration: 0.3, ease: 'power2.in' });
    gsap.to('.modal-overlay', {
      opacity: 0,
      duration: 0.3,
      onComplete: () => {
        setSelected(null);
        setClosing(false);
      },
    });
  };

  return (
    <section id="projects" className="section-pad hairline" ref={ref}>
      <div className="max-w-content mx-auto">
        <SectionHeader number="03" label="Projects" title="Real products, live in production." />

        {/* Filters */}
        <div className="reveal flex flex-wrap gap-2 mb-10 md:mb-14">
          {projectCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilter(cat.id)}
              className={`px-4 py-2 rounded-full text-sm transition-all duration-300 ${
                filter === cat.id
                  ? 'bg-ink text-paper font-medium'
                  : 'bg-transparent text-ink-dim border border-ink/10 hover:border-ink/40 hover:text-ink'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Project rows */}
        <div key={filter}>
          {filtered.map((project, index) => (
            <button
              key={project.id}
              onClick={() => setSelected(project)}
              data-cursor="view"
              className="project-row reveal group w-full text-left hairline py-8 md:py-12 first:border-t-0 first:pt-0 px-4 md:px-6 -mx-4 md:-mx-6 transition-colors duration-300"
            >
              <div className="grid md:grid-cols-12 gap-4 md:gap-8 items-center">
                <div className="md:col-span-1">
                  <span className="font-mono text-xs text-ink-faint">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>

                <div className="md:col-span-5">
                  <h3 className="font-display text-3xl md:text-4xl lg:text-5xl font-medium text-ink transition-colors duration-300">
                    {project.title}
                  </h3>
                </div>

                <div className="md:col-span-4">
                  <p className="text-sm text-ink-dim leading-relaxed mb-3">{project.description}</p>
                  <div className="flex flex-wrap gap-x-3 gap-y-1">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="font-mono text-[10px] uppercase tracking-widest text-ink-faint"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="md:col-span-2 flex md:justify-end items-center gap-3">
                  <span className="section-label capitalize">{project.category}</span>
                  <ArrowUpRight className="w-5 h-5 text-ink-faint group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Detail modal */}
      {selected && (
        <div ref={modalRef}>
          <div
            className="modal-overlay fixed inset-0 bg-ink/40 backdrop-blur-sm z-50"
            onClick={closeModal}
          />
          <div className="modal-panel fixed inset-4 md:inset-auto md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:max-w-2xl md:w-full z-50 overflow-auto max-h-[90vh] bg-paper border border-ink/10 rounded-2xl shadow-glow">
            <div className="sticky top-0 bg-paper/95 backdrop-blur-sm px-6 md:px-8 py-5 flex items-center justify-between border-b border-ink/10">
              <span className="section-label capitalize text-accent-ink">{selected.category}</span>
              <button
                onClick={closeModal}
                className="p-2 rounded-full hover:bg-ink/5 transition-colors text-ink"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="px-6 md:px-8 py-8">
              <h3 className="font-display text-3xl md:text-4xl font-medium text-ink mb-4">
                {selected.title}
              </h3>
              <p className="text-ink-dim leading-relaxed mb-8">{selected.longDescription}</p>

              <div className="mb-8">
                <p className="section-label mb-4">Features</p>
                <ul className="space-y-2.5">
                  {selected.features.map((f) => (
                    <li key={f} className="flex gap-3 text-ink-dim text-sm">
                      <span className="mt-2 w-1 h-1 rounded-full bg-accent-ink flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-8">
                <p className="section-label mb-4">Tech stack</p>
                <div className="flex flex-wrap gap-2">
                  {selected.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1.5 rounded-full border border-ink/10 text-sm text-ink-dim"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {selected.liveUrl && (
                <a
                  href={selected.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  <ExternalLink className="w-4 h-4" />
                  Live demo
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
