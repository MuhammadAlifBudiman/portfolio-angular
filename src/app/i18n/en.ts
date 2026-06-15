import { Translation } from '../models/language.model';

export const EN: Translation = {
  nav: {
    aboutMe: 'About Me',
    experience: 'Experience',
    portfolio: 'Portfolio',
    certifications: 'Certifications',
    technologies: 'Technologies',
    contact: 'Contact',
  },
  footer: {
    copyright: '© 2025 Muhammad Alif Budiman',
    backToTop: 'Back to top',
  },
  header: {
    lightLabel: 'light',
    darkLabel: 'dark',
    themeLabel: 'Theme',
    themeAriaLabel: 'Select colour theme',
    langAriaLabel: 'Switch language',
  },
  intro: {
    greeting: 'Hello! My name is',
    role: 'Full-Stack Web Developer',
    body: 'Backend-focused developer building API-driven, workflow-based, and responsive web applications with Go, TypeScript, Angular, Python, and PostgreSQL.',
    viewProjectsBtn: 'View Projects',
    downloadResumeBtn: 'Download Resume',
    availability: 'Open to Full-Stack and Backend Developer roles',
    location: 'Bekasi / Jakarta, Indonesia',
  },
  about: {
    eyebrow: 'Learn more',
    title: 'About Me',
    p1: 'Hello, my name is Muhammad Alif Budiman. I graduated with a Bachelor of Science in Computer Science from Universitas Negeri Jakarta and work as a full-stack web developer with a focus on backend API development.',
    p2: 'My technical experience spans Go, Node.js, TypeScript, Angular, Python, Flask, Django, PostgreSQL, and MongoDB. I have contributed to internal workflow systems, REST API development, OpenAPI documentation, and project-based full-stack programs.',
    p3: 'Projects I have worked on include an internal public-sector backend API at BKN RI, a Patient Management System, a task management application with Django REST Framework, and this portfolio site. I value evidence-based engineering and maintainable, well-documented code.',
    viewProjectsBtn: 'View Projects',
    downloadResumeBtn: 'Download Resume',
    photoAlt: 'Photo of Muhammad Alif Budiman',
  },
  portfolio: {
    eyebrow: 'Discover my work',
    title: 'Portfolio',
    viewProjectBtn: 'View Project',
    featuredTitle: 'Featured Projects',
    otherTitle: 'Other Projects',
    filterAriaLabel: 'Filter projects',
    filters: {
      all: 'All',
      featured: 'Featured',
      backend: 'Backend / API',
      fullstack: 'Full-Stack',
      frontend: 'Frontend',
      learning: 'Learning',
      restricted: 'Restricted',
    },
    cta: {
      demo: 'Live Demo',
      github: 'GitHub',
      apiDocs: 'API Docs',
      caseStudy: 'Case Study',
      restricted: 'Restricted / Internal',
      unavailable: 'Repository unavailable',
      archived: 'Demo Unavailable',
    },
    status: {
      live: 'Live',
      restricted: 'Restricted',
      unavailable: 'Unavailable',
      archived: 'Archived',
    },
  },
  contact: {
    eyebrow: 'Get in touch',
    title: 'Contact',
    description: 'If you have any questions or would like to discuss a project, feel free to reach out!',
    whatsappLabel: 'WhatsApp:',
    emailLabel: 'Email:',
    form: {
      name: 'Name',
      email: 'Email',
      subject: 'Subject',
      message: 'Message',
      send: 'Send',
      sending: 'Sending...',
      successMsg: 'Your message has been sent successfully!',
      errorMsg: 'Failed to send your message. Please try again.',
      rateLimitMsg: 'Please wait 30 seconds before sending again.',
      invalidEmailMsg: 'Please enter a valid email address.',
    },
  },
  ownership: {
    team: 'Team Project',
    personal: 'Personal Project',
    client: 'Client Project',
    internal: 'Internal Project',
    restricted: 'Restricted Project',
  },
  seo: {
    home: {
      title: 'Muhammad Alif Budiman — Full-Stack Web Developer',
      description: 'Computer Science graduate and full-stack web developer specializing in backend APIs, Angular, Go, TypeScript, Python, and Django. View projects and get in touch.',
    },
    about: {
      title: 'About — Muhammad Alif Budiman | Computer Science Graduate',
      description: 'Learn about Muhammad Alif Budiman — Computer Science graduate, full-stack web developer, backend API experience with Go, TypeScript, Angular, Python, and Django.',
    },
    portfolio: {
      title: 'Portfolio — Muhammad Alif Budiman | Backend API & Full-Stack Projects',
      description: 'Backend API, full-stack, and web development projects by Muhammad Alif Budiman including Go APIs, Angular apps, Django systems, and more.',
    },
    contact: {
      title: 'Contact — Muhammad Alif Budiman',
      description: 'Get in touch with Muhammad Alif Budiman — full-stack web developer. Contact via email, WhatsApp, or the contact form.',
    },
    project: {
      titleSuffix: '— Muhammad Alif Budiman',
    },
  },
  experience: {
    eyebrow: 'Work Experience',
    title: 'Experience',
    groups: {
      professional: 'Professional Experience',
      training: 'Training & Programs',
    },
    relatedProject: 'Related Project',
    items: {
      bkn: {
        role: 'Programmer Intern — Digital Systems & Applications',
        period: 'Nov 2025 – May 2026',
        location: 'East Jakarta, Indonesia',
        description:
          'Supported backend development, digital application workflows, and API documentation for internal public-sector systems.',
        contributions: [
          'Developed and refined Go backend endpoints for internal workflow modules, including list/detail retrieval, filtering, sorting, and pagination.',
          'Implemented role-based access control, workflow transitions, and multipart file handling with OpenAPI/Swagger documentation.',
          'Worked on scheduling-related data, document handling, and administrative data management.',
        ],
      },
      'learningx-msib': {
        role: 'Certified Independent Study — Full-Stack Web Development',
        period: 'Aug 2023 – Dec 2023',
        location: 'Remote',
        description:
          'Completed a project-based full-stack web development program (MSIB Batch 5) covering frontend, backend, database, and deployment practice.',
        contributions: [
          'Completed modules in HTML, CSS, JavaScript, Python, Flask, MongoDB, AJAX, CRUD workflows, web scraping, and deployment.',
          'Led a team-based Patient Management System project as full-stack developer and project lead.',
        ],
      },
      mknows: {
        role: 'Backend Developer — Bootcamp Participant',
        period: '2023',
        location: 'Remote',
        description:
          'Completed a backend API development bootcamp at M-Knows Consulting, building a production-structured REST API with Node.js, Express, TypeScript, and PostgreSQL.',
        contributions: [
          'Implemented MVC architecture with Sequelize ORM and PostgreSQL for a blog platform API.',
          'Built JWT authentication, input validation, email notification integration, and structured logging.',
          'Produced API documentation using Postman and Swagger/OpenAPI specification.',
        ],
      },
    },
  },
  certifications: {
    eyebrow: 'Verified Credentials',
    title: 'Certifications',
    items: {
      'bkn-internship': {
        name: 'Internship Certificate — Digital Systems & Applications',
        issuer: 'BKN RI (National Civil Service Agency)',
        period: '2026',
        credentialLabel: 'View Credential',
        credentialLabels: {
          bkn: 'View BKN Certificate',
          kemnaker: 'View Kemnaker Certificate',
        },
      },
      'cs50w': {
        name: "CS50's Web Programming with Python and JavaScript",
        issuer: 'CS50 / HarvardX',
        period: '2023',
        credentialLabel: 'View Certificate',
      },
      'cs50x': {
        name: "CS50's Introduction to Computer Science",
        issuer: 'CS50 / HarvardX',
        period: '2023',
        credentialLabel: 'View Certificate',
      },
      'postman-api-fundamentals': {
        name: 'API Fundamentals Student Expert',
        issuer: 'Postman',
        period: '2025',
        credentialLabel: 'View Badge',
      },
      'dicoding-backend-js': {
        name: 'Belajar Back-End Pemula dengan JavaScript',
        issuer: 'Dicoding',
        period: '2025',
        credentialLabel: 'View Certificate',
      },
      '30-days-of-angular': {
        name: '30 Days of Angular: Build 30 Projects with Angular',
        issuer: 'Udemy',
        period: '2025',
        credentialLabel: 'View Certificate',
      },
      'aws-cloud-gen-ai': {
        name: 'Belajar Dasar Cloud dan Gen AI di AWS',
        issuer: 'Dicoding',
        period: '2025',
        credentialLabel: 'View Certificate',
      },
      'git-github-bootcamp': {
        name: 'The Git & Github Bootcamp',
        issuer: 'Udemy',
        period: '2025',
        credentialLabel: 'View Certificate',
      },
      'learningx-msib': {
        name: 'Full-Stack Web Development',
        issuer: 'LearningX MSIB (Batch 5)',
        period: '2023',
        credentialLabel: 'View Certificate',
      },
    },
  },
  technologies: {
    eyebrow: 'Technical Capabilities',
    title: 'Technologies',
    groups: {
      backend: 'Backend & API',
      frontend: 'Frontend',
      databases: 'Databases',
      tools: 'Engineering Tools',
    },
  },
  projects: {
    'bkn-internal-workflow-api': {
      description: 'Developed and refined Go backend endpoints for internal workflow modules, including list/detail retrieval, filtering, sorting, pagination, workflow transitions, multipart file handling, and OpenAPI documentation.',
      imageAlt: 'Backend API architecture illustration for internal workflow system with Go, RBAC, file upload, and OpenAPI documentation',
      role: 'Backend developer — Go API implementation and Swagger/OpenAPI documentation',
    },
    'blog-api-server': {
      description: 'A TypeScript-based REST API for a blog platform with JWT authentication, input validation, PostgreSQL integration, email notifications, logging, and Postman/Swagger API documentation.',
      imageAlt: 'Backend architecture diagram for Blog API Server with Express API, authentication, Sequelize ORM, PostgreSQL, email notifications, and logging',
      role: 'Backend developer — REST API, authentication, validation, database integration, and documentation',
    },
    'patient-management-system': {
      description: 'Patient Management System built with Flask and MongoDB for patient registration, queue handling, scheduling, medical records, admin workflows, CSV export, and real-time interface updates.',
      imageAlt: 'Screenshot of Patient Management System application dashboard',
      role: 'Full-stack developer — backend API, database design, and team lead',
    },
    'task-master': {
      description: 'Task management web application with recurring daily, weekly, and monthly workflows, JWT-secured REST API, task history, timezone-based automatic resets, Swagger API documentation, interactive data tables, and Excel export.',
      imageAlt: 'Screenshot of Task Master task management application',
      role: 'Full-stack developer — Django REST API, scheduled task resets, and data tables',
    },
    'portfolio-website': {
      description: 'Responsive Angular portfolio website with bilingual content (EN/ID), standalone components, custom directives, dark/light theme support, multiple colour themes, project showcase, and EmailJS contact form.',
      imageAlt: 'Screenshot of Muhammad Alif Budiman portfolio website',
      role: 'Developer — Angular, TypeScript, SCSS, Tailwind CSS, i18n, unit testing',
    },
    'numble': {
      description: 'A web-based number puzzle game where players combine numbers to form a target using mathematical skills. Built as a team project.',
      imageAlt: 'Screenshot of Numble math puzzle game interface',
      role: 'Frontend developer — game logic and UI',
    },
    'password-security': {
      description: 'Angular web app for password security: generates strong passwords, checks for data breaches via the Have I Been Pwned API, analyses password strength, and explains password security best practices.',
      imageAlt: 'Screenshot of Password Security Angular app showing password strength checker and breach detection',
      role: 'Developer — Angular, API integration, password analysis',
    },
    'crypto-charts': {
      description: 'Real-time cryptocurrency price charts and coin information built with Angular, consuming a public crypto API. Developed as part of the 30 Days of Angular course.',
      imageAlt: 'Screenshot of Crypto Charts Angular app showing real-time price charts',
      role: 'Developer — Angular, API integration, data visualisation',
    },
    'resume-builder': {
      description: 'Angular-based web application for creating, editing, and downloading professional resumes. Features an editable form, live preview, and PDF generation.',
      imageAlt: 'Screenshot of Resume Builder with live preview and PDF export',
      role: 'Developer — Angular, form handling, PDF generation',
    },
    'typing-game': {
      description: 'Interactive typing speed and accuracy test with typing challenges, leaderboard, customisable themes, and detailed performance statistics.',
      imageAlt: 'Screenshot of Typing Game speed test interface',
      role: 'Developer — Angular, real-time input handling, stats tracking',
    },
    'checkers': {
      description: 'Web-based Checkers game built with Angular. Features turn-based gameplay, piece movement, capturing, king promotion, and game-over conditions with full rule enforcement.',
      imageAlt: 'Screenshot of Checkers board game in Angular',
      role: 'Developer — Angular, game logic, component architecture',
    },
  },
  projectContext: {
    'bkn-professional': 'Professional Experience · BKN RI',
    'learningx-msib-capstone': 'MSIB Capstone · LearningX',
    'cs50w-capstone': 'Course Capstone · CS50W',
    'mknows-bootcamp': 'Bootcamp Project · M-Knows Consulting',
    'independent': 'Independent Project',
    'udemy-angular': 'Course Exercise · Udemy',
  },
};
