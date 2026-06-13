import { Translation } from '../models/language.model';

export const EN: Translation = {
  nav: {
    aboutMe: 'About Me',
    portfolio: 'Portfolio',
    contact: 'Contact',
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
    body: 'Computer Science graduate focused on backend API development, workflow systems, and responsive web applications using Go, TypeScript, Angular, Python, Flask, Django, PostgreSQL, and MongoDB.',
    aboutMeBtn: 'About Me',
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
    },
    status: {
      live: 'Live',
      restricted: 'Restricted',
      unavailable: 'Unavailable',
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
  },
  experience: {
    eyebrow: 'Work Experience',
    title: 'Experience',
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
          'Completed a project-based full-stack web development program covering frontend, backend, database, and deployment practice.',
        contributions: [
          'Completed modules in HTML, CSS, JavaScript, Python, Flask, MongoDB, AJAX, CRUD workflows, web scraping, and deployment.',
          'Contributed to a team-based Patient Management System as full-stack developer.',
        ],
      },
    },
  },
  certifications: {
    eyebrow: 'Certifications',
    title: 'Certifications',
    items: {
      'learningx-msib': {
        name: 'Full-Stack Web Development',
        issuer: 'LearningX MSIB',
        period: '2023',
      },
      'bkn-internship': {
        name: 'Internship Certificate',
        issuer: 'BKN RI (National Civil Service Agency)',
        period: '2026',
      },
    },
  },
  projects: {
    'bkn-internal-workflow-api': {
      description: 'Developed and refined Go backend endpoints for internal workflow modules, including list/detail retrieval, filtering, sorting, pagination, workflow transitions, multipart file handling, and OpenAPI documentation.',
      imageAlt: 'Backend API architecture illustration for internal workflow system with Go, RBAC, file upload, and OpenAPI documentation',
      role: 'Backend developer — Go API implementation and Swagger/OpenAPI documentation',
    },
    'blog-api-server': {
      description: 'A TypeScript-based REST API for a blog platform with authentication, validation, PostgreSQL integration, email notifications, logging, and API documentation.',
      imageAlt: 'Backend architecture diagram for Blog API Server with Express API, authentication, Sequelize ORM, PostgreSQL, email notifications, and logging',
      role: 'Backend developer — REST API, authentication, validation, database integration, and documentation',
    },
    'patient-management-system': {
      description: 'Patient Management System built with Flask and MongoDB for patient registration, queue handling, scheduling, medical records, admin workflows, CSV export, and real-time interface updates.',
      imageAlt: 'Screenshot of Patient Management System application dashboard',
      role: 'Full-stack developer — backend API and database design',
    },
    'numble': {
      description: 'Numble is an engaging and addictive web-based number puzzle game that challenges players to use their mathematical skills.',
      imageAlt: 'Screenshot of Numble math word-guessing game interface',
      role: 'Frontend developer — game logic and UI',
    },
    'bemy': {
      description: 'Platform for individuals to find chat friends and engage in virtual conversations.',
      imageAlt: 'Screenshot of BeMy friend chat matching application',
      role: 'Frontend developer — matching interface and chat UI',
    },
    'stock-data': {
      description: 'An Inventory Control website to facilitate stock management and ensure product availability across various marketplaces.',
      imageAlt: 'Screenshot of StockData inventory management system',
      role: 'Full-stack developer — inventory logic and marketplace sync',
    },
    'task-master': {
      description: 'Task management web application with recurring daily, weekly, and monthly workflows, JWT-secured REST API, task history, timezone-based automatic resets, Swagger API documentation, interactive data tables, and Excel export.',
      imageAlt: 'Screenshot of Task Master task management application',
      role: 'Full-stack developer — Django REST API, scheduled task resets, and data tables',
    },
    'portfolio-website': {
      description: 'Responsive Angular portfolio website with bilingual content (EN/ID), reusable standalone components, custom directives, dark/light theme support, project showcase, and EmailJS contact form.',
      imageAlt: 'Screenshot of Muhammad Alif Budiman portfolio website',
      role: 'Developer — Angular, TypeScript, SCSS, Tailwind CSS, i18n',
    },
    'color-tap': {
      description: 'This addictive web-based game is designed to test your reflexes and color recognition skills in a fun and engaging way.',
      imageAlt: 'Screenshot of Color Tap browser tapping game',
    },
    'coffee-shop': {
      description: 'The CoffeeShop website is your one-stop destination for a delightful coffee experience.',
      imageAlt: 'Screenshot of Coffee Shop web application',
    },
    'checkers': {
      description: 'A web-based Checkers game built with Angular, featuring turn-based gameplay, piece movement, capturing, king promotion, and game-over conditions. It enforces Checkers rules and has a modular structure for scalability.',
      imageAlt: 'Screenshot of Checkers board game in Angular',
    },
    'minesweeper': {
      description: 'A web-based implementation of the classic Minesweeper game built with Angular. Players uncover cells on a grid to avoid hidden mines and reveal numbers indicating adjacent mines.',
      imageAlt: 'Screenshot of Minesweeper game grid interface',
    },
    'resume-builder': {
      description: 'ResumeBuilder is an Angular-based web application that helps users create, edit, and download professional resumes. It features an editable form for inputting details, a live preview of the resume, and PDF generation.',
      imageAlt: 'Screenshot of Resume Builder with live preview and PDF export',
    },
    'quiz-app': {
      description: 'QuizzApp is a web-based quiz application built with Angular. It allows users to take quizzes, create custom quizzes, and view their quiz history.',
      imageAlt: 'Screenshot of Quiz App showing quiz creation and history',
    },
    'typing-game': {
      description: 'TypingGame is a web-based app that helps users improve typing speed and accuracy through interactive tests. It features typing challenges, a leaderboard, customizable themes, and detailed performance stats.',
      imageAlt: 'Screenshot of Typing Game speed test interface',
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
