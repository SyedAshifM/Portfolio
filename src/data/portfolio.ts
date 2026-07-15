import profileImage from '../assets/Media-beard-trimmed.jpg';
import hrmsImage from '../assets/project-hrms-modern-anonymized.jpg';
import orbitImage from '../assets/project-orbit-modern.jpg';

export const portfolio = {
  name: 'Syed Ashif',
  shortName: 'Ashif.',
  role: 'Junior Software Developer',
  email: 'syedashif71@gmail.com',
  phone: '+91 9360508926',
  location: 'Salem, India',
  linkedin: 'https://www.linkedin.com/in/syed-ashif',
  github: 'https://github.com/SyedAshifM',
  resume: '/SyedAshif%20Resume.pdf',
  profileImage,
  intro:
    'I build responsive, user-friendly web applications with React, Angular, TypeScript, and clean frontend architecture for enterprise product teams.',
  about:
    'Results-driven frontend developer with 2+ years of professional experience designing and developing responsive web applications. Skilled in React.js, Angular, TypeScript, JavaScript, HTML, and CSS, with hands-on experience in Angular CLI, NGXS state management, React Hooks, REST API integration, CI/CD workflows, and scalable UI systems for enterprise applications.',
  highlights: ['2+ Years Experience', 'React Developer', 'Angular Developer', 'Enterprise Applications', 'HRMS', 'ORBit ETL', 'Sierra Digital Inc'],
  skills: [
    { group: 'Frontend', items: ['React.js', 'Angular', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'Angular CLI', 'NGXS'] },
    { group: 'Backend', items: ['Node.js', 'Express.js', 'REST APIs'] },
    { group: 'Databases', items: ['SQL Server', 'MongoDB', 'PostgreSQL', 'MySQL'] },
    { group: 'Tools', items: ['Git', 'GitHub', 'VS Code', 'Postman', 'Docker', 'Linux', 'Nginx', 'PM2', 'Azure DevOps'] },
  ],
  experience: [
    {
      company: 'Sierra Digital Inc',
      title: 'Software Developer',
      period: 'Oct 2023 - Present',
      responsibilities: [
        'Built HRMS onboarding workflows with React.js, TypeScript, JavaScript, Tailwind CSS, Express.js, REST APIs, Nginx, and PM2.',
        'Implemented React Hooks-based state and lifecycle patterns to keep enterprise UI flows predictable, reusable, and maintainable.',
        'Designed and developed ORBit, a scalable ETL platform for data extraction, transformation, loading, monitoring, logging, and error handling.',
        'Created reusable UI components, validation-heavy forms, stepper flows, dashboard views, and API-driven modules for complex business workflows.',
        'Improved frontend performance with modular architecture, lazy loading, optimized data binding, and clean component boundaries.',
        'Supported Git-based collaboration, Azure DevOps CI/CD pipelines, responsive UI delivery, and reliable enterprise deployments.',
      ],
    },
  ],
  projects: [
    {
      title: 'HRMS',
      subtitle: 'Employee Onboarding',
      image: hrmsImage,
      description:
        'A Human Resources Management System focused on employee onboarding, data collection, document submission, and compliance workflows.',
      details:
        'Developed interactive onboarding workflows using React.js and JavaScript, including dynamic multi-step forms, stepper-based progress tracking, field-level validation, REST API integration, and a responsive Tailwind CSS interface for smooth employee onboarding across devices.',
      tech: ['React.js', 'React Hooks', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'Express.js', 'REST APIs', 'Nginx', 'PM2'],
      github: '',
      live: '',
    },
    {
      title: 'ORBit ETL',
      subtitle: 'Enterprise Data Migration Tool',
      image: orbitImage,
      description:
        'A scalable Extract, Transform, Load platform for integrating, transforming, validating, and monitoring enterprise data flows.',
      details:
        'Designed and developed responsive React interfaces for ETL workflow management, including data cleansing, mapping, enrichment, real-time and batch processing support, job monitoring, logging, error handling, performance analysis, and Azure DevOps CI/CD release support.',
      tech: ['React.js', 'React Hooks', 'JavaScript', 'Docker', 'Azure DevOps', 'ETL'],
      github: '',
      live: '',
    },
  ],
};

export type Project = (typeof portfolio.projects)[number];
