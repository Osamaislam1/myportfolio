export interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  features: string[];
  liveUrl?: string;
  category: 'fullstack' | 'backend' | 'frontend';
}

export const projectCategories = [
  { id: 'all', label: 'All' },
  { id: 'fullstack', label: 'Full Stack' },
  { id: 'backend', label: 'Backend' },
  { id: 'frontend', label: 'Frontend' },
] as const;

export const projects: Project[] = [
  {
    id: 1,
    title: 'MeinHaus',
    description: 'AI-first online general contractor platform for Canadian home renovations',
    longDescription:
      'A full-scale renovation management platform that acts as an online general contractor. Homeowners submit projects through an online quoting system, receive structured pricing, and track the work to completion, while registered contractors apply for matched projects through a separate professional portal. Includes payment protection, project management, and a trust-scoring system for professionals.',
    technologies: ['Laravel', 'PHP', 'MySQL', 'Livewire', 'JavaScript', 'REST API'],
    features: [
      'Online quote system with photo, and scope capture',
      'Contractor portal with credential review and project bidding',
      'Project tracking dashboards for homeowners and staff',
      'Service-area, gallery, blog, and FAQ content management',
    ],
    liveUrl: 'https://meinhaus.ca/',
    category: 'fullstack',
  },
  {
    id: 2,
    title: 'FTscout',
    description: 'AI-powered football scouting platform for scouts, coaches, and agents',
    longDescription:
      'A professional football scouting platform bringing scouts, coaches, sporting directors, and agents onto one system. Combines AI-driven player search with multilingual scouting reports and player management tools, with role-based access tailored to each type of football professional.',
    technologies: ['Laravel', 'PHP', 'MySQL', 'REST API', 'OpenAI API', 'JavaScript'],
    features: [
      'AI-assisted player search and talent discovery',
      'Multilingual scouting report generation',
      'Role-based dashboards for scouts, coaches, directors, and agents',
      'Player profile and squad management tools',
      'Secure authentication with per-role permissions',
    ],
    liveUrl: 'https://ftscout.com/',
    category: 'fullstack',
  },
  {
    id: 3,
    title: 'MashBricks',
    description: 'Interior Estimation & Admin Platform with React frontend',
    longDescription:
      'A full-stack interior design and home services platform featuring interactive estimation tools with complex pricing logic and real-time calculations.',
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
    title: 'Riverina Raptors FC',
    description: 'Football club website for the NSW Riverina region with news and galleries',
    longDescription:
      'A dynamic football club website showcasing the Riverina Raptors, a club bringing together the best talent from the NSW Country Riverina to compete on a national platform. Covers club news, match galleries, team and department structures, sponsor placements, and governance policies.',
    technologies: ['PHP', 'MySQL', 'JavaScript', 'HTML', 'CSS'],
    features: [
      'News and article publishing with dated archives',
      'Match and event photo galleries',
      'Teams, associations, and department listings',
      'Sponsor showcase with tiered placement',
      'Club policy and governance document pages',
    ],
    liveUrl: 'https://riverinaraptors.com.au/',
    category: 'fullstack',
  },
  {
    id: 5,
    title: 'Football Club Website',
    description: 'Dynamic website for Griffith City FC with Admin Panel and Coach Portal',
    longDescription:
      'Developed a dynamic website for Griffith City FC, integrating an Admin Panel and Coach Portal to streamline operations and enhance engagement. The platform ensures efficient match scheduling, event management, news updates, and media uploads.',
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
    id: 6,
    title: 'Link Shortener',
    description: 'Convert long URLs into short links with QR code generation',
    longDescription:
      'A powerful link shortener built using core PHP and MySQL. It provides an easy way to create and manage shortened URLs, link lists, QR codes, and clipboard sharing.',
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
    id: 7,
    title: 'Syllable Highlighter',
    description: 'Convert text into colored syllabary for fun and effective learning',
    longDescription:
      'With this free syllabary converter, you can convert any length of text into colored syllabary. Customize colors or choose from presets, then download as a Word document.',
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
    id: 8,
    title: 'Kliniq Healthcare',
    description: 'Modern healthcare technology landing page with sleek design',
    longDescription:
      'A visually stunning healthcare technology landing page featuring modern UI/UX design principles, smooth animations, and responsive layouts for optimal user experience.',
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
    id: 9,
    title: 'S4 Legacy Estates',
    description: 'Elegant real estate landing page with premium aesthetics',
    longDescription:
      'A beautifully designed real estate landing page showcasing premium properties with elegant visuals, smooth interactions, and a luxury brand feel.',
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
];
