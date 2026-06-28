import profileImage from '../assets/Media-beard-trimmed.jpg';
import hrmsImage from '../assets/project-hrms.jpg';
import orbitImage from '../assets/project-orbit.jpg';
import portfolioImage from '../assets/project-portfolio.jpg';

export const portfolio = {
  name: 'Syed Ashif',
  shortName: 'Ashif.',
  role: 'Frontend Developer',
  email: 'syedashif@example.com',
  location: 'India',
  linkedin: 'https://www.linkedin.com/',
  github: 'https://github.com/',
  resume: '/SyedAshif%20Resume.pdf',
  profileImage,
  intro:
    'I build modern web applications with precise interfaces, resilient architecture, and the kind of small details that make enterprise software feel effortless.',
  about:
    'Frontend developer focused on building scalable React experiences for enterprise teams. I enjoy turning complex workflows into clean, accessible interfaces, integrating REST APIs, and collaborating across product, backend, and database layers to ship software people can trust every day.',
  highlights: ['3+ Years Experience', 'React Developer', 'Enterprise Applications', 'HRMS', 'ORBit ETL', 'Node.js', 'PostgreSQL', 'Express'],
  skills: [
    { group: 'Frontend', items: ['React', 'Angular', 'TypeScript', 'JavaScript', 'Tailwind', 'HTML', 'CSS'] },
    { group: 'Backend', items: ['Node', 'Express'] },
    { group: 'Databases', items: ['PostgreSQL', 'MySQL'] },
    { group: 'Tools', items: ['Git', 'GitHub', 'VS Code', 'Postman', 'Docker'] },
  ],
  experience: [
    {
      company: 'Current Company',
      title: 'Software Developer',
      period: 'Present',
      responsibilities: [
        'Develop enterprise applications with clean, reusable frontend systems.',
        'Build scalable React applications with accessible, responsive UI patterns.',
        'Integrate REST APIs, authentication flows, and stateful product workflows.',
        'Connect frontend experiences with database-backed services and reporting needs.',
      ],
    },
  ],
  projects: [
    {
      title: 'HRMS',
      subtitle: 'Employee Onboarding',
      image: hrmsImage,
      description:
        'A human resource platform for onboarding, employee lifecycle management, and structured operational workflows.',
      details:
        'Built reusable React interfaces for employee records, onboarding milestones, validation-heavy forms, role-aware views, and responsive dashboards designed for daily HR operations.',
      tech: ['React', 'TypeScript', 'Tailwind', 'Node.js', 'PostgreSQL'],
      github: 'https://github.com/',
      live: 'https://example.com',
    },
    {
      title: 'ORBit ETL',
      subtitle: 'Enterprise Data Migration Tool',
      image: orbitImage,
      description:
        'A data migration and ETL workspace for mapping, validating, and monitoring enterprise data movement.',
      details:
        'Designed data-focused UI flows for source-to-target mapping, migration status, validation summaries, and operational visibility across complex import pipelines.',
      tech: ['React', 'Express', 'PostgreSQL', 'REST APIs', 'Docker'],
      github: 'https://github.com/',
      live: 'https://example.com',
    },
    {
      title: 'Personal Portfolio',
      subtitle: 'Design-led Developer Website',
      image: portfolioImage,
      description:
        'A modern portfolio experience with smooth motion, accessible sections, project modals, and maintainable content data.',
      details:
        'Crafted as a polished personal brand surface with Framer Motion, Tailwind CSS, SEO metadata, structured data, and responsive layouts from mobile to ultra-wide screens.',
      tech: ['React 19', 'Vite', 'Framer Motion', 'Tailwind CSS'],
      github: 'https://github.com/',
      live: 'https://example.com',
    },
  ],
};

export type Project = (typeof portfolio.projects)[number];
