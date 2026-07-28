export interface ExperienceItem {
  id: number;
  company: string;
  role: string;
  period: string;
  location: string;
  description: string[];
  technologies: string[];
}

export const experiences: ExperienceItem[] = [
  {
    id: 1,
    company: 'Quantum IT Innovation',
    role: 'PHP Developer',
    period: 'Aug 2025 – Present',
    location: 'Remote',
    description: [
      'Leading backend development for business-critical web applications using Laravel and MySQL',
      'Designing RESTful APIs and integrating third-party services to support scalable product features',
      'Collaborating closely with frontend teams (React / Inertia) to deliver seamless end-to-end functionality',
      'Improving performance, security, and code quality through refactoring and best practices',
    ],
    technologies: ['Laravel', 'PHP', 'MySQL', 'REST API', 'React', 'Inertia'],
  },
  {
    id: 2,
    company: 'CodeZones IT Services',
    role: 'PHP Developer',
    period: 'Jan 2023 – Jul 2025',
    location: 'Hybrid',
    description: [
      'Developed and maintained scalable backend systems using Laravel, improving overall application performance',
      'Designed and optimized MySQL schemas, indexes, and queries, achieving up to 2× faster report processing',
      'Built secure RESTful APIs and integrated third-party services including Stripe, Razorpay, and PayPal',
      'Improved application security and stability by implementing OWASP best practices',
    ],
    technologies: ['Laravel', 'PHP', 'MySQL', 'Stripe', 'Razorpay', 'PayPal'],
  },
];
