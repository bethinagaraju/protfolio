export interface SkillGroup {
  id: string;
  title: string;
  icon: string;
  skills: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    id: 'frontend',
    title: 'Frontend',
    icon: 'Monitor',
    skills: ['React', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'HTML', 'CSS'],
  },
  {
    id: 'backend',
    title: 'Backend',
    icon: 'Server',
    skills: ['Java', 'Spring Boot', 'Spring MVC', 'Spring Data JPA', 'Spring Security'],
  },
  {
    id: 'database',
    title: 'Database',
    icon: 'Database',
    skills: ['PostgreSQL', 'MySQL', 'Oracle SQL'],
  },
  {
    id: 'integrations',
    title: 'Integrations & Tools',
    icon: 'Plug',
    skills: ['REST APIs', 'JWT', 'Webhooks', 'Git', 'GitHub', 'Postman', 'Google Gemini API'],
  },
  {
    id: 'deployment',
    title: 'Deployment',
    icon: 'Cloud',
    skills: ['Linux', 'Nginx', 'VPS Hosting', 'SSL', 'Domain & DNS'],
  },
];

export interface ProcessStep {
  id: string;
  number: string;
  title: string;
  description: string;
  icon: string;
}

export const processSteps: ProcessStep[] = [
  {
    id: 'discover',
    number: '01',
    title: 'Discover',
    description:
      'Understand the business, goals, audience, and requirements before a single line of code is written.',
    icon: 'Search',
  },
  {
    id: 'design',
    number: '02',
    title: 'Design',
    description:
      'Plan the user experience and application structure with a clear, thoughtful blueprint.',
    icon: 'PenTool',
  },
  {
    id: 'develop',
    number: '03',
    title: 'Develop',
    description:
      'Build, integrate, test, and refine the solution with clean, maintainable code.',
    icon: 'Code2',
  },
  {
    id: 'launch',
    number: '04',
    title: 'Launch',
    description:
      'Deploy the project to production and provide the agreed handover or ongoing support.',
    icon: 'Rocket',
  },
];

export const aboutHighlights: string[] = [
  'Full Stack Development',
  'Business-Focused Solutions',
  'Responsive UI Development',
  'API Integrations',
  'Deployment and Optimization',
  'AI-Powered Applications',
];

export const heroStack: string[] = [
  'Java',
  'Spring Boot',
  'React',
  'TypeScript',
  'PostgreSQL',
  'AI Integrations',
];

export const projectTypes: string[] = [
  'Custom Website',
  'Full Stack Web App',
  'UI Implementation',
  'Backend & API',
  'AI Integration',
  'Other',
];

export const budgetRanges: string[] = [
  'Under $1,000',
  '$1,000 – $3,000',
  '$3,000 – $7,000',
  '$7,000 – $15,000',
  '$15,000+',
];
