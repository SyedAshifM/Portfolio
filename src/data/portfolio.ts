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
    'I build enterprise web applications, ETL workflows, and cloud-deployed data integration products with React, Angular, TypeScript, Python, FastAPI, and SAP BTP.',
  about:
    'Software Developer with 3+ years of professional experience building enterprise web applications, ETL and data-integration solutions, business workflows, and cloud-deployed applications. Experienced across frontend, backend, API integration, databases, SAP integrations, cloud platforms, and deployment environments.',
  highlights: ['3+ Years Experience', 'Enterprise Web Apps', 'ETL & Data Migration', 'SAP BTP', 'Cloud Deployment', 'HRMS', 'ORBit AI Migration', 'Sierra Digital Inc'],
  skills: [
    { group: 'Frontend', items: ['React.js', 'Angular', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS', 'Vite', 'Redux Toolkit', 'TanStack Query', 'React Hook Form', 'Zod', 'React Flow', 'Recharts'] },
    { group: 'Backend', items: ['Python', 'FastAPI', 'Node.js', 'Express.js', 'REST APIs'] },
    { group: 'Databases', items: ['SAP HANA Cloud', 'PostgreSQL', 'SQL Server', 'MySQL'] },
    { group: 'APIs & Integration', items: ['OData', 'SAP BTP Destinations', 'SAP Cloud Connector', 'SAP RFC/BAPI'] },
    { group: 'Data & Migration', items: ['ETL', 'Data Migration', 'Data Mapping', 'Data Transformation', 'Data Cleansing', 'Data Staging', 'Pipeline Processing'] },
    { group: 'Cloud & Tools', items: ['SAP BTP', 'Cloud Foundry', 'AWS', 'Docker', 'Git', 'Azure DevOps', 'Postman', 'Linux', 'Nginx', 'PM2', 'Redis', 'Celery', 'Uvicorn'] },
  ],
  experience: [
    {
      company: 'Sierra Digital Inc',
      title: 'Software Developer',
      period: 'Oct 2023 - Present',
      responsibilities: [
        'Develop and maintain enterprise applications using React.js, TypeScript, JavaScript, Python, FastAPI, REST APIs, and SQL-backed services.',
        'Build reusable frontend components, dynamic forms, data tables, dashboards, and multi-step business workflows for enterprise users.',
        'Create data migration workflows for extraction, staging, mapping, transformation, validation, cleansing, loading, monitoring, and logging.',
        'Integrate applications with SAP HANA Cloud, PostgreSQL, Redis, SAP BTP Destinations, SAP Cloud Connector, OData, and SAP RFC/BAPI flows.',
        'Configure cloud services, environment variables, service bindings, application routes, and connectivity across SAP BTP Cloud Foundry and AWS.',
        'Troubleshoot frontend, API, database, authentication, SAP connectivity, deployment, and runtime issues across development and production environments.',
        'Collaborate with developers, QA teams, and business stakeholders using Git, Azure DevOps, and release workflows.',
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
      details:
        'Developed the employee onboarding application using React.js and Tailwind CSS. Implemented multi-step onboarding flows for personal, address, emergency contact, bank, document, and employment information. Built reusable form components, field-level validation, stepper-based navigation, onboarding progress tracking, document upload and validation workflows, file type and size validation, input sanitization, REST API integration, responsive UI components for different screen sizes, Git collaboration, and frontend/API debugging with backend developers and business teams.',
      tech: ['React.js', 'JavaScript', 'Tailwind CSS', 'REST APIs', 'Multi-Step Forms', 'Stepper Navigation', 'Document Upload', 'File Validation', 'Input Sanitization', 'Responsive UI', 'Git'],
      github: '',
      live: '',
    },
  ],
};

export type Project = (typeof portfolio.projects)[number];
