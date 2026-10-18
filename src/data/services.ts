export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  highlights: string[];
}

export const services: Service[] = [
  {
    id: 'website-development',
    title: 'Custom Website Development',
    description:
      'Business websites, portfolios, landing pages, and responsive websites built to perform and convert.',
    icon: 'Globe',
    highlights: ['Business websites', 'Portfolios', 'Landing pages', 'Responsive design'],
  },
  {
    id: 'fullstack-apps',
    title: 'Full Stack Web Applications',
    description:
      'Complete applications using React, Java, Spring Boot, REST APIs, and well-structured databases.',
    icon: 'Layers',
    highlights: ['React + Spring Boot', 'REST APIs', 'Database design', 'End-to-end delivery'],
  },
  {
    id: 'ui-implementation',
    title: 'UI Implementation',
    description:
      'Converting designs and ideas into polished, responsive React interfaces with meticulous detail.',
    icon: 'PenTool',
    highlights: ['Design to code', 'Responsive UI', 'Micro-interactions', 'Pixel-perfect'],
  },
  {
    id: 'backend-apis',
    title: 'Backend & API Development',
    description:
      'Secure REST APIs, database integration, authentication, and scalable backend architecture.',
    icon: 'Server',
    highlights: ['REST APIs', 'JWT auth', 'Database design', 'Backend architecture'],
  },
  {
    id: 'ai-integration',
    title: 'AI Integration & Automation',
    description:
      'AI-powered features, third-party API integrations, and workflow automation that save time.',
    icon: 'Sparkles',
    highlights: ['AI features', 'API integrations', 'Workflow automation', 'Gemini API'],
  },
  {
    id: 'deployment-support',
    title: 'Deployment & Technical Support',
    description:
      'Application deployment, domain configuration, SSL, hosting setup, and performance improvements.',
    icon: 'Rocket',
    highlights: ['Server deployment', 'SSL & domains', 'Nginx setup', 'Performance tuning'],
  },
];
