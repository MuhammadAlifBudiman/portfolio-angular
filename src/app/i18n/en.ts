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
    copyright: '© Muhammad Alif Budiman',
    backToTop: 'Back to top',
  },
  header: {
    lightLabel: 'light',
    darkLabel: 'dark',
    themeLabel: 'Theme',
    themeAriaLabel: 'Select colour theme',
    langAriaLabel: 'Switch language',
    navAriaLabel: 'Toggle navigation menu',
    darkModeAriaLabel: 'Toggle dark mode',
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
      liveApi: 'Live API',
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
    description: 'Open to Backend and Full-Stack Developer opportunities, technical collaboration, and API-driven web projects.',
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
        period: 'Nov 2025 – 23 May 2026',
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
    'stockdata': {
      description: 'Web-based inventory management system developed as a university HCI project for a real client. Features product editing, category management, sorting, search, and live deployment.',
      imageAlt: 'StockData inventory management web application screenshot',
      role: 'Contributed to backend feature development (edit and sorting), frontend implementation, UI mockup design, live hosting setup, and debugging.',
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
    'stockdata-hci': 'Client-Based Team Project · University',
  },
  caseStudies: {
    common: {
      back: 'Back to Portfolio',
      notFound: 'Project not found.',
      comingSoon: 'Detailed case study coming soon.',
    },
    sectionHeadings: {
      overview: 'Overview',
      context: 'Context',
      responsibilities: 'Responsibilities',
      architecture: 'Architecture',
      'engineering-decisions': 'Key Engineering Decisions',
      'technology-stack': 'Technology Stack',
    },
    'bkn-internal-workflow-api': {
      sections: {
        overview:
          'Developed backend API endpoints in Go for an internal government workflow system that supports digital administration processes within a public-sector agency.',
        context:
          'Professional internship at BKN RI (National Civil Service Agency), Nov 2025 – 23 May 2026. Role: Programmer Intern — Digital Systems & Applications.',
        responsibilities: [
          'Implemented Go REST API endpoints for list, detail, and data retrieval operations.',
          'Added filtering, sorting, and pagination to data retrieval endpoints.',
          'Worked with role-based access control through Keycloak integration for authentication and authorization.',
          'Implemented multipart file upload handling for document-based processes.',
          'Maintained OpenAPI/Swagger documentation for implemented endpoints.',
          'Worked on scheduling-related data, document handling, and administrative data management.',
          'Handled workflow transitions by reading and updating status on existing workflow data.',
        ],
        architecture:
          'The system is built using Go for backend services and follows a layered REST API structure. Authentication and authorization are handled through Keycloak integration. File uploads are processed through a multipart handler, and endpoints are described with OpenAPI/Swagger documentation.',
        'engineering-decisions': [
          'Implemented pagination following existing application conventions.',
          'Worked within the established Keycloak integration for authentication and authorization rather than introducing custom auth.',
          'Kept OpenAPI/Swagger documentation in sync with implemented endpoints.',
          'Reused the existing layered structure to keep new endpoints consistent with the rest of the codebase.',
        ],
        'technology-stack':
          'Go · REST API · OpenAPI / Swagger · Keycloak · Multipart File Upload · Filtering · Sorting · Pagination',
      },
      accessNote: 'Internal system — not publicly accessible.',
      confidentialityNote:
        'In compliance with internship confidentiality: no internal endpoint paths, database schemas, workflow names, application names, domain details, or screenshots of real data are included.',
    },
    'blog-api-server': {
      sections: {
        overview:
          'A production-structured REST API for a blog platform, built during the M-Knows Consulting Backend API Development Bootcamp in 2023. Implements full CRUD, authentication, email notification, and API documentation.',
        context:
          'Bootcamp project at M-Knows Consulting — Backend API Development program. Role: Backend Developer. Year: 2023.',
        responsibilities: [
          'Designed and implemented an MVC architecture with Node.js, Express, and TypeScript.',
          'Integrated Sequelize ORM with PostgreSQL for relational data management.',
          'Built JWT-based authentication (register, login, token refresh, protected routes).',
          'Implemented input validation and structured error handling.',
          'Integrated email notification using a third-party email service (Nodemailer).',
          'Set up structured logging with Winston.',
          'Produced API documentation using Postman and a swagger.yaml specification.',
        ],
        architecture:
          'Three-layer MVC: controllers handle HTTP routing, services contain business logic, and models map to PostgreSQL via Sequelize. Authentication middleware guards protected routes, and logging middleware captures request/response metadata.',
        'engineering-decisions': [
          'Chose a layered MVC split so routing, business logic, and data access stay independently testable.',
          'Used JWT with refresh tokens to keep the API stateless while supporting longer sessions.',
          'Centralised validation and error handling so endpoints return consistent error shapes.',
        ],
        'technology-stack':
          'Node.js · Express · TypeScript · Sequelize · PostgreSQL · JWT · Validation · Logging · Email Notification · Postman Documentation · Swagger / OpenAPI',
      },
      accessNote:
        'A public Vercel deployment is available at https://express-blog-dun.vercel.app/. GitHub source code is also available.',
    },
    'patient-management-system': {
      sections: {
        overview:
          'A web-based Patient Management System built for the MSIB Batch 5 capstone project at LearningX (2023). Manages patient registration, appointment queuing, medical records, and administrative workflows for a clinic context.',
        context:
          'MSIB Capstone project at LearningX — Full-Stack Web Development (Batch 5), Aug–Dec 2023. Role: Full-Stack Developer & Team Lead. Team project (3 members).',
        responsibilities: [
          'Led project planning, task distribution, and integration across frontend and backend.',
          'Designed the MongoDB document schema for patients, appointments, queues, and medical records.',
          'Built Flask backend routes for patient CRUD, appointment scheduling, queue management, and CSV export.',
          'Implemented AJAX-based real-time interface updates for queue and appointment status.',
          'Developed admin workflows including medical record entry and appointment management.',
          'Handled deployment to Glitch (now archived).',
        ],
        'technology-stack': 'Python · Flask · MongoDB · HTML · CSS · JavaScript · AJAX',
      },
      accessNote: 'Glitch hosting is no longer available (platform shut down). GitHub source remains accessible.',
    },
    'task-master': {
      sections: {
        overview:
          'Task management web application developed as a CS50W capstone project (2023). Features recurring daily, weekly, and monthly task workflows with timezone-aware automatic resets, a JWT-secured REST API, interactive data tables, and Excel export.',
        context:
          "CS50's Web Programming with Python and JavaScript — Capstone Project. Role: Full-Stack Developer. Year: Jul–Aug 2023.",
        responsibilities: [
          'Designed and implemented the Django REST Framework API with JWT authentication (djangorestframework-simplejwt).',
          'Built timezone-aware scheduled task reset logic for daily, weekly, and monthly task cycles.',
          'Integrated DataTables for server-side pagination, sorting, and filtering of task data.',
          'Implemented Excel export using openpyxl for task history reporting.',
          'Set up Swagger/OpenAPI documentation via drf-spectacular.',
          'Deployed to PythonAnywhere with a PostgreSQL backend.',
        ],
        architecture:
          'Django serves the frontend templates while DRF provides the API layer. Authentication is JWT-based with refresh token support. Scheduled task resets are triggered by Django management commands or cron, and DataTables connects to the DRF API for server-side data handling.',
        'technology-stack':
          'Django · Django REST Framework · PostgreSQL · JWT · Swagger / OpenAPI · DataTables · Excel Export · Scheduled Task Reset',
      },
    },
    'portfolio-website': {
      sections: {
        overview:
          'Personal portfolio website built with Angular 20, SCSS, and Tailwind CSS v4. Features bilingual EN/ID content, multiple colour themes, dark/light mode, a custom cursor directive, an EmailJS contact form, and Karma/Jasmine unit tests.',
        context: 'Independent project. Year: 2025 (active). Role: Developer.',
        responsibilities: [
          'Designed and implemented standalone Angular components for each portfolio section.',
          'Built a custom i18n system using typed TypeScript translation objects with dot-path lookup and EN fallback.',
          'Implemented a ThemeService managing dark/light mode and multiple colour themes via CSS custom properties and localStorage.',
          'Wrote a CustomCursorDirective handling mouse movement for a custom cursor experience.',
          'Integrated EmailJS for serverless contact form submission without a backend.',
          'Set up Karma/Jasmine unit tests covering services, components, directives, and routes.',
          'Deployed via angular-cli-ghpages to GitHub Pages with a custom CNAME.',
        ],
        architecture:
          'Single-Page Application with the Angular router (in-memory scroll + fragment anchors). Each section is a standalone component, translation is resolved at runtime via LanguageService, and themes are applied via document.documentElement CSS variable overrides.',
        'technology-stack':
          'Angular 20 · TypeScript · SCSS · Tailwind CSS v4 · EmailJS · i18n (custom) · Karma / Jasmine · GitHub Pages',
      },
    },
  },
};
