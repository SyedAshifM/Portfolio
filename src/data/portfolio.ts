import profileImage from '../assets/Media-beard-trimmed.jpg';
import hrmsImage from '../assets/project-hrms-modern-anonymized.jpg';
import orbitImage from '../assets/project-orbit-modern.jpg';

export const portfolio = {
  name: 'Syed Ashif',
  shortName: 'Ashif.',
  role: 'Software Developer | Node.js | Python | Linux',
  email: 'syedashif71@gmail.com',
  phone: '+91 9360508926',
  location: 'Salem, India',
  linkedin: 'https://www.linkedin.com/in/syed-ashif',
  github: 'https://github.com/SyedAshifM',
  resume: '/SyedAshif%20Resume.pdf',
  profileImage,
  intro:
    'Software Developer with 3+ years of experience building modern web applications and enterprise solutions using React, Angular, TypeScript, Node.js, and cloud-ready backend services.',
  about:
    'Software Developer with 3+ years of professional experience building enterprise web applications, ETL and data-integration solutions, and business workflows. Strong frontend experience with React.js, Angular, TypeScript, JavaScript, and Tailwind CSS, plus backend and API work with Node.js, Express.js, Python, FastAPI, SQL databases, Redis, SAP integrations, and cloud deployment environments.',
  highlights: ['3+ Years Experience', 'Full Stack Delivery', 'React & Angular', 'Node.js', 'ETL & Data Migration', 'Cloud Deployment', 'HRMS', 'ORBit AI Migration', 'REST APIs'],
  skills: [
    { group: 'Frontend', items: ['React.js', 'Angular', 'TypeScript', 'JavaScript', 'HTML5', 'CSS', 'Tailwind CSS', 'Vite', 'React Hook Form', 'Zod', 'TanStack Query'] },
    { group: 'Backend', items: ['Node.js', 'Express.js', 'Python', 'FastAPI', 'REST APIs', 'SQLAlchemy', 'Pydantic'] },
    { group: 'Database', items: ['PostgreSQL', 'MySQL', 'SQL Server', 'SAP HANA Cloud'] },
    { group: 'Tools / Infrastructure', items: ['Git', 'GitHub', 'Azure DevOps', 'Linux', 'Redis', 'RabbitMQ', 'Docker', 'Nginx', 'PM2', 'Postman'] },
    { group: 'Cloud & Integration', items: ['SAP BTP', 'Cloud Foundry', 'AWS', 'OData', 'SAP Cloud Connector', 'SAP RFC/BAPI', 'Celery'] },
  ],
  experience: [
    {
      company: 'Sierra Digital Inc',
      title: 'Software Developer',
      period: 'Oct 2023 - Present',
      responsibilities: [
        'Develop enterprise web applications with React.js, TypeScript, JavaScript, Python, FastAPI, Node.js, Express.js, and REST APIs.',
        'Build reusable UI components, dynamic forms, data tables, dashboards, and multi-step workflows for HRMS and migration platforms.',
        'Integrate frontend modules with APIs, SQL-backed services, SAP HANA Cloud, PostgreSQL, Redis, and enterprise connectivity layers.',
        'Work on data migration flows covering extraction, staging, mapping, validation, cleansing, loading, monitoring, and logging.',
        'Configure and troubleshoot SAP BTP Cloud Foundry, AWS, Docker, Linux, environment variables, service bindings, routes, and application logs.',
        'Collaborate with developers, QA teams, and business stakeholders through Git, Azure DevOps, and release workflows.',
      ],
    },
  ],
  projects: [
    {
      title: 'ORBit AI Migration Platform',
      subtitle: 'Enterprise Data Migration & Integration',
      image: orbitImage,
      description:
        'An enterprise data migration and integration platform for SAP and non-SAP systems, supporting migration pipelines, connector configuration, mapping, cleansing, monitoring, and cloud deployment.',
      features: [
        'Migration project, connector, and pipeline management UI',
        'Field mapping, validation, staging, transformation, cleansing, and loading flows',
        'FastAPI services with SAP HANA Cloud, SQLAlchemy, Pydantic, Celery, and Redis',
        'SAP BTP, Cloud Foundry, SAP Cloud Connector, RFC/BAPI, Docker, and AWS deployment support',
      ],
      details:
        'Built the React and TypeScript frontend for migration projects, connector configuration, field mapping, pipeline management, execution monitoring, and data-processing workflows. Created dynamic forms, data tables, dashboards, visual pipeline interfaces, and reusable components with React Hook Form, Zod, TanStack Query, React Flow, and Recharts. Developed and supported FastAPI services using SQLAlchemy, Pydantic, SAP HANA Cloud, Celery, and Redis. Worked on extraction, staging, transformation, validation, cleansing, loading, SAP BTP Destinations, SAP Cloud Connector, Java/JCo RFC/BAPI communication, AI-assisted field mapping, AI data-cleansing workflows, Docker, AWS, SAP BTP Cloud Foundry deployment, service bindings, runtime configuration, logs, and troubleshooting.',
      tech: ['React.js', 'TypeScript', 'Python', 'FastAPI', 'SAP HANA Cloud', 'SQLAlchemy', 'Pydantic', 'Celery', 'Redis', 'SAP BTP', 'Cloud Foundry', 'SAP Cloud Connector', 'RFC/BAPI', 'Docker', 'AWS', 'React Hook Form', 'Zod', 'TanStack Query', 'React Flow', 'Recharts'],
      github: '',
      live: '',
    },
    {
      title: 'HRMS',
      subtitle: 'Employee Onboarding & Digital HR Workflow',
      image: hrmsImage,
      description:
        'A Human Resources Management System that digitizes employee onboarding, information collection, validation, document submission, and HR workflows.',
      features: [
        'Multi-step onboarding workflow for employee information collection',
        'Reusable form components with field-level validation and input sanitization',
        'Document upload, file type validation, file size validation, and verification flows',
        'REST API integration, responsive UI, Git collaboration, and frontend/API debugging',
      ],
      details:
        'Developed the employee onboarding application using React.js and Tailwind CSS. Implemented multi-step onboarding flows for personal, address, emergency contact, bank, document, and employment information. Built reusable form components, field-level validation, stepper-based navigation, onboarding progress tracking, document upload and validation workflows, file type and size validation, input sanitization, REST API integration, responsive UI components for different screen sizes, Git collaboration, and frontend/API debugging with backend developers and business teams.',
      tech: ['React.js', 'JavaScript', 'Tailwind CSS', 'REST APIs', 'Multi-Step Forms', 'Stepper Navigation', 'Document Upload', 'File Validation', 'Input Sanitization', 'Responsive UI', 'Git'],
      github: '',
      live: '',
    },
  ],
};

export type Project = (typeof portfolio.projects)[number];
