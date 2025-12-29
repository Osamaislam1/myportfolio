import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
    ExternalLink, Code, Server,
    Globe, ChevronRight, X, Eye
} from 'lucide-react';

interface Project {
    id: number;
    title: string;
    description: string;
    longDescription: string;
    technologies: string[];
    features: string[];
    liveUrl?: string;
    category: string;
}

const Projects = () => {
    const { ref, inView } = useInView({
        threshold: 0.1,
        triggerOnce: true,
    });

    const [selectedProject, setSelectedProject] = useState<Project | null>(null);
    const [filter, setFilter] = useState('all');

    const projects: Project[] = [
        {
            id: 1,
            title: 'MeinHaus',
            description: 'Canadian Home Services Platform connecting homeowners with contractors',
            longDescription: 'A digital home services marketplace connecting homeowners with licensed contractors and builders across Canada. Features location-based service discovery and streamlined project management.',
            technologies: ['Laravel', 'MySQL', 'JavaScript', 'Livewire', 'REST API'],
            features: [
                'REST APIs for project requests and contractor matching',
                'Geolocation capabilities for location-based service discovery',
                'Estimate flow optimization and reliability improvements',
                'Payment workflows and user notification systems',
                'Contractor scheduling and availability management',
            ],
            liveUrl: 'https://meinhaus.ca',
            category: 'fullstack',
        },
        {
            id: 2,
            title: 'Borucular',
            description: 'Daily Reporting & Financial Management System for welders',
            longDescription: 'A comprehensive web application for tracking daily work reports for customers and welders, enabling structured submission and review of operational data with financial modules.',
            technologies: ['Laravel', 'PHP', 'MySQL', 'HTML/CSS'],
            features: [
                'Daily work report tracking and submission system',
                'Complex admin panel with role-based access control',
                'Financial modules for payments and expenses tracking',
                'Report-based calculations for accurate billing',
                'Audit-friendly workflows and secure validation logic',
            ],
            liveUrl: 'https://borucular.com',
            category: 'backend',
        },
        {
            id: 3,
            title: 'MashBricks',
            description: 'Interior Estimation & Admin Platform with React frontend',
            longDescription: 'A full-stack interior design and home services platform featuring interactive estimation tools with complex pricing logic and real-time calculations.',
            technologies: ['Laravel', 'Inertia', 'React', 'TypeScript', 'MySQL'],
            features: [
                'Interior Estimate Calculator with dynamic pricing',
                'Painting Cost Estimator with real-time calculations',
                'SPA-like user experience with React and Inertia.js',
                'Admin dashboards for managing estimates and workflows',
                'Complex pricing logic and dynamic form handling',
            ],
            liveUrl: 'https://mashbricks.com',
            category: 'fullstack',
        },
        {
            id: 4,
            title: 'Football Club Website',
            description: 'Dynamic website for Griffith City FC with Admin Panel and Coach Portal',
            longDescription: 'Developed a dynamic website for Griffith City FC, integrating an Admin Panel and Coach Portal to streamline operations and enhance engagement. The platform ensures efficient match scheduling, event management, news updates, and media uploads.',
            technologies: ['PHP', 'JavaScript', 'MySQL', 'HTML'],
            features: [
                'Admin Panel for match scheduling, team line-ups, venues, scores, and player stats',
                'Event management with descriptions, dates, locations, and multimedia',
                'News publishing and media uploads (photos, videos)',
                'Coach Portal for profile management and collaboration',
                'Real-time updates for fans and staff',
            ],
            liveUrl: 'https://griffithcityfc.com.au/',
            category: 'fullstack',
        },
        {
            id: 5,
            title: 'Link Shortener',
            description: 'Convert long URLs into short links with QR code generation',
            longDescription: 'A powerful link shortener built using core PHP and MySQL. It provides an easy way to create and manage shortened URLs, link lists, QR codes, and clipboard sharing.',
            technologies: ['Core PHP', 'MySQL', 'JavaScript'],
            features: [
                'Short links: Convert long URLs into individual short links',
                'Link list: Create personal link collections',
                'QR code: Generate QR codes and download them for free',
                'Clipboard: Share text snippets, codes or any content',
            ],
            liveUrl: 'https://link10.de',
            category: 'backend',
        },
        {
            id: 6,
            title: 'Syllable Highlighter',
            description: 'Convert text into colored syllabary for fun and effective learning',
            longDescription: 'With this free syllabary converter, you can convert any length of text into colored syllabary. Customize colors or choose from presets, then download as a Word document.',
            technologies: ['JavaScript', 'Core PHP', 'HTML', 'CSS', 'Bootstrap'],
            features: [
                'Custom or preset color highlight options',
                'Download converted text as a Word document',
                'Effective tool for interactive reading lessons',
                'Easy to integrate into teaching workflows',
            ],
            liveUrl: 'https://www.silbenschrift.de/',
            category: 'frontend',
        },
        {
            id: 7,
            title: 'Kliniq Healthcare',
            description: 'Modern healthcare technology landing page with sleek design',
            longDescription: 'A visually stunning healthcare technology landing page featuring modern UI/UX design principles, smooth animations, and responsive layouts for optimal user experience.',
            technologies: ['JavaScript', 'CSS3', 'HTML5', 'Responsive Design'],
            features: [
                'Modern, clean healthcare-focused design',
                'Smooth scroll animations and transitions',
                'Fully responsive across all devices',
                'Optimized performance and fast loading',
                'Professional medical industry aesthetics',
            ],
            liveUrl: 'https://kliniq.tech/',
            category: 'frontend',
        },
        {
            id: 8,
            title: 'Market Making Strategies',
            description: 'Professional financial services landing page',
            longDescription: 'A sophisticated landing page for financial market making services, featuring professional design elements, clear value propositions, and trust-building UI components.',
            technologies: ['JavaScript', 'CSS3', 'HTML5', 'Animation'],
            features: [
                'Professional financial industry design',
                'Clear call-to-action sections',
                'Trust indicators and credibility elements',
                'Responsive and mobile-optimized layout',
                'Modern typography and color schemes',
            ],
            liveUrl: 'https://marketmakingstrategies.com/',
            category: 'frontend',
        },
        {
            id: 9,
            title: 'S4 Legacy Estates',
            description: 'Elegant real estate landing page with premium aesthetics',
            longDescription: 'A beautifully designed real estate landing page showcasing premium properties with elegant visuals, smooth interactions, and a luxury brand feel.',
            technologies: ['JavaScript', 'CSS3', 'HTML5', 'UI/UX Design'],
            features: [
                'Luxury real estate visual design',
                'Property showcase with elegant layouts',
                'Smooth animations and micro-interactions',
                'Mobile-first responsive design',
                'Premium brand aesthetics',
            ],
            liveUrl: 'https://s4legacyestates.com/',
            category: 'frontend',
        },
        // {
        //     id: 10,
        //     title: 'Modern 3D Printing Landing Page',
        //     description: 'Visually striking landing page for a 3D printing service provider',
        //     longDescription: 'Developed a visually striking and user-friendly landing page for a 3D printing service provider, highlighting their advanced manufacturing capabilities and innovative solutions.',
        //     technologies: ['JavaScript', 'CSS', 'HTML5'],
        //     liveUrl: 'https://3d-printing-freelancer-contest-v10.netlify.app/',
        //     features: [
        //         'Visually engaging, modern landing page design',
        //         'Project gallery and clear pricing options',
        //         'Interactive "Design Your Part" section',
        //         'Step-by-step overview of the 3D printing process',
        //         'Responsive and accessible from any device',
        //     ],
        //     category: 'frontend',
        // },
    ];

    const categories = [
        { id: 'all', label: 'all', icon: <Code className="w-4 h-4" /> },
        { id: 'fullstack', label: 'fullstack', icon: <Globe className="w-4 h-4" /> },
        { id: 'backend', label: 'backend', icon: <Server className="w-4 h-4" /> },
        { id: 'frontend', label: 'frontend', icon: <Code className="w-4 h-4" /> },
    ];

    const filteredProjects = filter === 'all'
        ? projects
        : projects.filter(p => p.category === filter);

    return (
        <section id="projects" className="min-h-screen py-20 px-4 md:px-8 lg:px-16 relative" ref={ref}>
            <motion.div
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : { opacity: 0 }}
                className="max-w-6xl mx-auto"
            >
                {/* Terminal Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    className="mb-12"
                >
                    <div className="flex items-center gap-2 mb-4 font-mono text-sm">
                        <span className="text-terminal-green">➜</span>
                        <span className="text-terminal-cyan">~/portfolio</span>
                        <span className="text-white">git log --oneline --all --graph</span>
                    </div>

                    <div className="flex items-center gap-4">
                        <div className="h-px flex-grow bg-gradient-to-r from-terminal-green/50 to-transparent" />
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-mono text-terminal-green flex items-center gap-3">
                            <span className="text-terminal-dim">{'//'}</span>
                            PROJECTS
                            <span className="animate-pulse">_</span>
                        </h2>
                        <div className="h-px flex-grow bg-gradient-to-l from-terminal-green/50 to-transparent" />
                    </div>
                </motion.div>

                {/* Filter tabs */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ delay: 0.2 }}
                    className="flex flex-wrap gap-2 mb-8 font-mono"
                >
                    <span className="text-terminal-dim text-sm self-center mr-2">filter:</span>
                    {categories.map((cat) => (
                        <button
                            key={cat.id}
                            onClick={() => setFilter(cat.id)}
                            className={`px-4 py-2 rounded-lg border text-sm flex items-center gap-2 transition-all duration-200 ${filter === cat.id
                                ? 'bg-terminal-green/20 border-terminal-green text-terminal-green shadow-terminal'
                                : 'bg-terminal-dark border-terminal-dim/30 text-terminal-dim hover:border-terminal-green/50 hover:text-terminal-green'
                                }`}
                        >
                            {cat.icon}
                            --{cat.label}
                        </button>
                    ))}
                </motion.div>

                {/* Projects Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <AnimatePresence mode="wait">
                        {filteredProjects.map((project, index) => (
                            <motion.div
                                key={project.id}
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ delay: index * 0.1 }}
                                className="terminal-window group cursor-pointer"
                                onClick={() => setSelectedProject(project)}
                            >
                                <div className="terminal-header">
                                    <div className="terminal-btn terminal-btn-close" />
                                    <div className="terminal-btn terminal-btn-minimize" />
                                    <div className="terminal-btn terminal-btn-maximize" />
                                    <span className="ml-4 text-terminal-dim text-xs font-mono">
                                        project_{project.id}.sh
                                    </span>
                                </div>

                                <div className="p-6">
                                    {/* Project header */}
                                    <div className="flex items-start justify-between mb-4">
                                        <div>
                                            <span className="text-terminal-amber text-xs font-mono mb-2 block">
                                                #{project.category.toUpperCase()}
                                            </span>
                                            <h3 className="text-xl font-bold text-terminal-green font-mono group-hover:glow-text-sm transition-all">
                                                {project.title}
                                            </h3>
                                        </div>
                                        <Eye className="w-5 h-5 text-terminal-dim group-hover:text-terminal-green transition-colors" />
                                    </div>

                                    {/* Description */}
                                    <p className="text-terminal-dim text-sm font-mono mb-4 leading-relaxed">
                                        <span className="text-terminal-cyan">$ echo</span> "{project.description}"
                                    </p>

                                    {/* Tech stack */}
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {project.technologies.slice(0, 4).map((tech) => (
                                            <span
                                                key={tech}
                                                className="px-2 py-1 bg-terminal-green/10 border border-terminal-green/20 rounded text-xs font-mono text-terminal-green"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                        {project.technologies.length > 4 && (
                                            <span className="px-2 py-1 text-xs font-mono text-terminal-dim">
                                                +{project.technologies.length - 4} more
                                            </span>
                                        )}
                                    </div>

                                    {/* Links */}
                                    <div className="flex gap-3 pt-4 border-t border-terminal-green/20">
                                        {project.liveUrl && (
                                            <a
                                                href={project.liveUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                onClick={(e) => e.stopPropagation()}
                                                className="flex items-center gap-2 text-sm text-terminal-dim hover:text-terminal-cyan font-mono transition-colors"
                                            >
                                                <ExternalLink className="w-4 h-4" />
                                                demo
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>

                {/* Project Detail Modal */}
                <AnimatePresence>
                    {selectedProject && (
                        <>
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="fixed inset-0 bg-black/80 z-50 backdrop-blur-sm"
                                onClick={() => setSelectedProject(null)}
                            />

                            <motion.div
                                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                                className="fixed inset-4 md:inset-auto md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:max-w-2xl md:w-full z-50 overflow-auto max-h-[90vh]"
                            >
                                <div className="terminal-window">
                                    <div className="terminal-header sticky top-0 z-10">
                                        <div className="terminal-btn terminal-btn-close" onClick={() => setSelectedProject(null)} />
                                        <div className="terminal-btn terminal-btn-minimize" />
                                        <div className="terminal-btn terminal-btn-maximize" />
                                        <span className="ml-4 text-terminal-dim text-xs font-mono">
                                            {selectedProject.title.toLowerCase().replace(/\s+/g, '_')}.md
                                        </span>
                                        <button
                                            onClick={() => setSelectedProject(null)}
                                            className="ml-auto text-terminal-dim hover:text-terminal-green transition-colors"
                                        >
                                            <X className="w-4 h-4" />
                                        </button>
                                    </div>

                                    <div className="p-6 font-mono text-sm">
                                        <h3 className="text-2xl font-bold text-terminal-green mb-2">
                                            # {selectedProject.title}
                                        </h3>

                                        <p className="text-terminal-dim mb-6 leading-relaxed">
                                            {selectedProject.longDescription}
                                        </p>

                                        <div className="mb-6">
                                            <h4 className="text-terminal-amber mb-3">## Features</h4>
                                            <ul className="space-y-2">
                                                {selectedProject.features.map((feature, i) => (
                                                    <li key={i} className="flex items-start gap-2 text-slate-300">
                                                        <ChevronRight className="w-4 h-4 text-terminal-green flex-shrink-0 mt-0.5" />
                                                        {feature}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        <div className="mb-6">
                                            <h4 className="text-terminal-amber mb-3">## Tech Stack</h4>
                                            <div className="flex flex-wrap gap-2">
                                                {selectedProject.technologies.map((tech) => (
                                                    <span
                                                        key={tech}
                                                        className="px-3 py-1.5 bg-terminal-green/10 border border-terminal-green/30 rounded text-terminal-green"
                                                    >
                                                        {tech}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>

                                        <div className="flex gap-4 pt-4 border-t border-terminal-green/20">
                                            {selectedProject.liveUrl && (
                                                <a
                                                    href={selectedProject.liveUrl}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="flex items-center gap-2 px-4 py-2 bg-terminal-green text-terminal-dark rounded font-bold hover:bg-terminal-green/80 transition-colors"
                                                >
                                                    <ExternalLink className="w-4 h-4" />
                                                    Live Demo
                                                </a>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </>
                    )}
                </AnimatePresence>
            </motion.div>
        </section>
    );
};

export default Projects;
