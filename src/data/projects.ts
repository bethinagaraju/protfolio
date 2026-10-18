export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  longDescription: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  caseStudyAvailable: boolean;
  highlightedFeatures: string[];
  status?: string;
  mockupTheme: string;
}

export const projects: Project[] = [
  {
    id: 'numerology-portfolio',
    title: 'Numerology Portfolio Website',
    category: 'Personal Branding',
    description:
      'A premium personal branding website for a numerology professional, focused on elegant visual design and lead generation.',
    longDescription:
      'A refined personal branding experience presenting numerology services with elegant typography, responsive layouts, and clear conversion paths. Designed to build trust and turn visitors into client inquiries.',
    technologies: ['React', 'TypeScript', 'Tailwind CSS'],
    liveUrl: '',
    githubUrl: '',
    caseStudyAvailable: true,
    highlightedFeatures: [
      'Editorial visual design',
      'Service presentation',
      'Fully responsive layouts',
      'Lead generation focus',
    ],
    mockupTheme: 'from-violet-500/20 via-fuchsia-500/10 to-indigo-500/20',
  },
  {
    id: 'ai-crm',
    title: 'AI-Powered CRM Lead Management',
    category: 'SaaS Platform',
    description:
      'A modern CRM application for managing leads and automating workflows with AI-assisted intelligence.',
    longDescription:
      'A workflow-driven CRM that centralizes lead management and automates repetitive tasks. Integrates the Google Gemini API to assist with lead enrichment, summaries, and intelligent nudges across the pipeline.',
    technologies: ['Spring Boot', 'React', 'SQL', 'REST APIs', 'Google Gemini API'],
    liveUrl: '',
    githubUrl: '',
    caseStudyAvailable: true,
    highlightedFeatures: [
      'Lead pipeline management',
      'Workflow automation',
      'Google Gemini API integration',
      'REST API architecture',
    ],
    mockupTheme: 'from-sky-500/20 via-cyan-500/10 to-blue-500/20',
  },
  {
    id: 'doctor-booking',
    title: 'Doctor Appointment Booking Platform',
    category: 'Healthcare',
    description:
      'A healthcare booking platform connecting patients with doctors through a smooth scheduling experience.',
    longDescription:
      'An end-to-end appointment booking platform handling doctor discovery, slot availability, scheduling, and patient data management. Built with a clean, accessible interface and a robust Spring Boot backend.',
    technologies: ['Java', 'Spring Boot', 'React', 'SQL'],
    liveUrl: '',
    githubUrl: '',
    caseStudyAvailable: true,
    highlightedFeatures: [
      'Appointment scheduling',
      'Doctor & patient data management',
      'User-friendly booking flow',
      'Secure backend architecture',
    ],
    mockupTheme: 'from-emerald-500/20 via-teal-500/10 to-green-500/20',
  },
  {
    id: 'instagram-automation',
    title: 'Instagram Automation Platform',
    category: 'Automation',
    description:
      'A platform concept for automating Instagram interactions and managing engagement workflows.',
    longDescription:
      'A platform designed to orchestrate Instagram engagement through webhook-driven workflows and REST API automation. Includes implemented core scheduling alongside planned AI-assisted interaction features.',
    technologies: ['React', 'Spring Boot', 'PostgreSQL', 'REST APIs', 'Webhooks'],
    liveUrl: '',
    githubUrl: '',
    caseStudyAvailable: true,
    highlightedFeatures: [
      'Workflow scheduling (implemented)',
      'Webhook integrations (implemented)',
      'Dashboard analytics (implemented)',
      'AI-assisted interactions (planned)',
    ],
    status: 'Concept / In Progress',
    mockupTheme: 'from-rose-500/20 via-pink-500/10 to-orange-500/20',
  },
];
