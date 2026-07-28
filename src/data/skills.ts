export interface Skill {
  name: string;
  level: number;
}

export interface SkillCategory {
  title: string;
  skills: Skill[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: 'Backend',
    skills: [
      { name: 'PHP', level: 95 },
      { name: 'Laravel', level: 92 },
      { name: 'Node.js', level: 70 },
      { name: 'Python', level: 65 },
      { name: 'REST APIs', level: 90 },
    ],
  },
  {
    title: 'Database',
    skills: [
      { name: 'MySQL', level: 92 },
      { name: 'PostgreSQL', level: 78 },
      { name: 'phpMyAdmin', level: 88 },
    ],
  },
  {
    title: 'Frontend',
    skills: [
      { name: 'JavaScript', level: 85 },
      { name: 'React', level: 78 },
      { name: 'Next.js', level: 74 },
      { name: 'Vue', level: 75 },
      { name: 'Livewire', level: 85 },
      { name: 'Inertia', level: 82 },
      { name: 'jQuery/Ajax', level: 80 },
    ],
  },
  {
    title: 'DevOps & Tools',
    skills: [
      { name: 'Git/GitHub', level: 90 },
      { name: 'Linux (Ubuntu/CentOS)', level: 82 },
      { name: 'VPS/Nginx', level: 75 },
      { name: 'Postman', level: 88 },
    ],
  },
];

export const additionalSkills = [
  'OpenAI API',
  'Gemini API',
  'Prompt Engineering',
  'OWASP Security',
  'Jira',
  'GitLab/Bitbucket',
  'cPanel',
  'Database Design',
  'API Documentation',
  'Payment Integration',
  'Clean Code',
  'Agile/Scrum',
];
