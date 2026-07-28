export interface EducationItem {
  id: number;
  degree: string;
  institution: string;
  period: string;
  location: string;
  description: string;
  achievements?: string[];
}

export interface Certification {
  name: string;
  issuer: string;
  year: string;
}

export interface LearningItem {
  name: string;
  progress: number;
}

export const education: EducationItem[] = [
  {
    id: 1,
    degree: 'Bachelor of Computer Application (BCA)',
    institution: 'Integral University',
    period: '2019 – 2022',
    location: 'Lucknow, India',
    description:
      'Focused on software development, database management, and web technologies. CGPA: 9.07',
    achievements: [
      'CGPA: 9.07, Outstanding Academic Performance',
      'Specialized in web development technologies',
      'Strong foundation in database management',
    ],
  },
  {
    id: 2,
    degree: 'Intermediate',
    institution: 'N.J.E School',
    period: '2018',
    location: 'India',
    description: 'Foundation in science and mathematics with focus on computer studies.',
  },
];

export const certifications: Certification[] = [
  { name: 'SQL Basic', issuer: 'HackerRank', year: '2023' },
  { name: 'Python Basic', issuer: 'HackerRank', year: '2022' },
  { name: 'IBM Cyber Security Analyst', issuer: 'Coursera', year: '2022' },
  { name: 'Google IT Automation Professional', issuer: 'Coursera', year: '2021' },
  { name: 'Google Technical Support Fundamental', issuer: 'Coursera', year: '2021' },
];

export const currentlyLearning: LearningItem[] = [
  { name: 'Docker & Kubernetes', progress: 65 },
  { name: 'AWS Cloud Services', progress: 45 },
];
