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
    role: 'Web Developer',
    body: 'I build web applications with Angular, Python, and Flask — from patient management systems and inventory tools to word-guessing games. Currently studying Informatics and open to collaboration.',
    aboutMeBtn: 'About Me',
  },
  about: {
    eyebrow: 'Learn more',
    title: 'About Me',
    p1: 'Hello, my name is Muhammad Alif Budiman. I am studying Informatics and work as a web developer with skills in both frontend and backend development.',
    p2: 'I started learning programming with Python as my first language. Working across projects I have built with Angular, TypeScript, JavaScript, Flask, and MongoDB — covering everything from UI components to REST APIs and database design.',
    p3: 'One of the more involved projects I have worked on is Klinik Google, a patient management system built with Flask and MongoDB that handles patient registration and healthcare data. That project required thinking carefully about data integrity and multi-user workflows, which shaped how I approach backend design.',
    viewProjectsBtn: 'View Projects',
    downloadResumeBtn: 'Download Resume',
    photoAlt: 'Photo of Muhammad Alif Budiman',
  },
  portfolio: {
    eyebrow: 'Discover my work',
    title: 'Portfolio',
    viewProjectBtn: 'View Project',
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
      title: 'Muhammad Alif Budiman — Web Developer | Portfolio',
      description: 'Web developer specializing in Angular and full-stack applications. View my projects and get in touch.',
    },
    about: {
      title: 'About — Muhammad Alif Budiman',
      description: 'Learn about Muhammad Alif Budiman — web developer, background, skills, and experience.',
    },
    portfolio: {
      title: 'Portfolio — Muhammad Alif Budiman',
      description: 'Selected web development projects by Muhammad Alif Budiman including Angular apps, full-stack systems, and browser games.',
    },
    contact: {
      title: 'Contact — Muhammad Alif Budiman',
      description: 'Get in touch with Muhammad Alif Budiman via email, WhatsApp, or the contact form.',
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
    'klinik-google': {
      description: 'This Patient Management System utilizes Flask and MongoDB to enhance patient registration efficiency, healthcare service quality, and patient data management.',
      imageAlt: 'Screenshot of Klinik Google patient management dashboard',
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
      description: 'Task Master is a feature-rich web application that empowers users to efficiently manage their daily, weekly, and monthly tasks.',
      imageAlt: 'Screenshot of Task Master task management application',
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
};
