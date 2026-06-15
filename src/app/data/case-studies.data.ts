export interface CaseStudySection {
  heading: string;
  content: string | string[];
}

export interface CaseStudy {
  id: string;
  sections: CaseStudySection[];
  /** Short note shown when demo is restricted or archived. */
  accessNote?: string;
  confidentialityNote?: string;
}

export const CASE_STUDIES: readonly CaseStudy[] = [
  {
    id: 'bkn-internal-workflow-api',
    confidentialityNote:
      'This project was developed for an internal government agency and is restricted. No endpoint paths, database schemas, internal application names, or screenshots can be shared.',
    accessNote: 'Internal system — not publicly accessible.',
    sections: [
      {
        heading: 'Overview',
        content:
          'Developed backend API endpoints in Go for an internal government workflow system, supporting digital administration processes within a public-sector agency.',
      },
      {
        heading: 'Context',
        content:
          'Professional internship at BKN RI (National Civil Service Agency), Nov 2025 – May 2026. Role: Programmer Intern — Digital Systems & Applications.',
      },
      {
        heading: 'Responsibilities',
        content: [
          'Implemented Go REST API endpoints for list, detail, creation, update, and delete operations across multiple workflow modules.',
          'Added filtering, sorting, and pagination to data retrieval endpoints.',
          'Implemented role-based access control (RBAC) using Keycloak for authentication and authorization.',
          'Built multipart file upload handling for document-based workflows.',
          'Wrote and maintained OpenAPI/Swagger documentation for all implemented endpoints.',
          'Worked on scheduling-related data, document handling, and administrative data management modules.',
        ],
      },
      {
        heading: 'Architecture',
        content:
          'The system follows a layered REST API architecture with Go on the backend. Authentication and authorization are delegated to Keycloak using RBAC. File uploads are processed through a multipart handler. The API is fully documented with OpenAPI/Swagger and validated against the specification.',
      },
      {
        heading: 'Key Engineering Decisions',
        content: [
          'Used Go for its performance characteristics in concurrent API handling.',
          'Keycloak for centralized RBAC rather than building custom auth — reduces security surface and aligns with enterprise standards.',
          'OpenAPI-first documentation to ensure consistent API contracts across teams.',
          'Pagination implemented using cursor/offset patterns to handle large government data sets efficiently.',
        ],
      },
      {
        heading: 'Technology Stack',
        content: 'Go · REST API · OpenAPI / Swagger · Keycloak · RBAC · Multipart File Upload · Workflow System · Filtering · Sorting · Pagination',
      },
    ],
  },
  {
    id: 'blog-api-server',
    accessNote: 'Vercel deployment is no longer active. GitHub source and Postman/Swagger documentation available.',
    sections: [
      {
        heading: 'Overview',
        content:
          'A production-structured REST API for a blog platform, built during the M-Knows Consulting Backend API Development Bootcamp in 2023. Implements full CRUD, authentication, email notification, and API documentation.',
      },
      {
        heading: 'Context',
        content:
          'Bootcamp project at M-Knows Consulting — Backend API Development program. Role: Backend Developer. Year: 2023.',
      },
      {
        heading: 'Responsibilities',
        content: [
          'Designed and implemented MVC architecture with Node.js, Express, and TypeScript.',
          'Integrated Sequelize ORM with PostgreSQL for relational data management.',
          'Built JWT-based authentication (register, login, token refresh, protected routes).',
          'Implemented input validation and structured error handling.',
          'Integrated email notification using a third-party email service (Nodemailer).',
          'Set up structured logging with Winston.',
          'Produced API documentation using Postman and a swagger.yaml specification.',
        ],
      },
      {
        heading: 'Architecture',
        content:
          'Three-layer MVC: controllers handle HTTP routing, services contain business logic, and models map to PostgreSQL via Sequelize. Authentication middleware guards protected routes. Logging middleware captures request/response metadata.',
      },
      {
        heading: 'Technology Stack',
        content: 'Node.js · Express · TypeScript · Sequelize · PostgreSQL · JWT · Validation · Logging · Email Notification · Postman Documentation · Swagger / OpenAPI',
      },
      {
        heading: 'Links',
        content: 'GitHub: https://github.com/MuhammadAlifBudiman/be-mknows-4',
      },
    ],
  },
  {
    id: 'patient-management-system',
    accessNote: 'Glitch hosting is no longer available (platform shut down). GitHub source remains accessible.',
    sections: [
      {
        heading: 'Overview',
        content:
          'A web-based Patient Management System built for the MSIB Batch 5 capstone project at LearningX (2023). Manages patient registration, appointment queuing, medical records, and administrative workflows for a clinic context.',
      },
      {
        heading: 'Context',
        content:
          'MSIB Capstone project at LearningX — Full-Stack Web Development (Batch 5), Aug–Dec 2023. Role: Full-Stack Developer & Team Lead. Team project (3 members).',
      },
      {
        heading: 'Responsibilities',
        content: [
          'Led project planning, task distribution, and integration across frontend and backend.',
          'Designed the MongoDB document schema for patients, appointments, queues, and medical records.',
          'Built Flask backend routes for patient CRUD, appointment scheduling, queue management, and CSV export.',
          'Implemented AJAX-based real-time interface updates for queue and appointment status.',
          'Developed admin workflows including medical record entry and appointment management.',
          'Handled deployment to Glitch (now archived).',
        ],
      },
      {
        heading: 'Architecture',
        content:
          'Flask serves both HTML templates and API endpoints. MongoDB stores patient, appointment, and medical record documents. AJAX calls update specific UI sections without full page reloads. CSV export is generated server-side.',
      },
      {
        heading: 'Technology Stack',
        content: 'Python · Flask · MongoDB · HTML · CSS · JavaScript · AJAX',
      },
      {
        heading: 'Links',
        content: 'GitHub: https://github.com/MuhammadAlifBudiman/Sistem-Pengelolaan-Pasien',
      },
    ],
  },
  {
    id: 'task-master',
    sections: [
      {
        heading: 'Overview',
        content:
          'Task management web application developed as a CS50W capstone project (2023). Features recurring daily, weekly, and monthly task workflows with timezone-aware automatic resets, JWT-secured REST API, interactive data tables, and Excel export.',
      },
      {
        heading: 'Context',
        content:
          "CS50's Web Programming with Python and JavaScript — Capstone Project. Role: Full-Stack Developer. Year: Jul–Aug 2023.",
      },
      {
        heading: 'Responsibilities',
        content: [
          'Designed and implemented the Django REST Framework API with JWT authentication (djangorestframework-simplejwt).',
          'Built timezone-aware scheduled task reset logic for daily, weekly, and monthly task cycles.',
          'Integrated DataTables for server-side pagination, sorting, and filtering of task data.',
          'Implemented Excel export using openpyxl for task history reporting.',
          'Set up Swagger/OpenAPI documentation via drf-spectacular.',
          'Deployed to PythonAnywhere with PostgreSQL backend.',
        ],
      },
      {
        heading: 'Architecture',
        content:
          'Django serves the frontend templates; DRF provides the API layer. Authentication is JWT-based with refresh token support. Scheduled task resets are triggered by Django management commands or cron. DataTables connects to the DRF API for server-side data handling.',
      },
      {
        heading: 'Technology Stack',
        content: 'Django · Django REST Framework · PostgreSQL · JWT · Swagger / OpenAPI · DataTables · Excel Export · Scheduled Task Reset',
      },
      {
        heading: 'Links',
        content: [
          'Live demo: https://alif.pythonanywhere.com/',
          'API documentation: https://alif.pythonanywhere.com/api/docs',
          'GitHub: https://github.com/MuhammadAlifBudiman/TaskMaster',
        ],
      },
    ],
  },
  {
    id: 'portfolio-website',
    sections: [
      {
        heading: 'Overview',
        content:
          'Personal portfolio website built with Angular 20, SCSS, and Tailwind CSS v4. Features bilingual EN/ID content, multiple colour themes, dark/light mode, custom cursor directive, EmailJS contact form, and Karma/Jasmine unit tests.',
      },
      {
        heading: 'Context',
        content: 'Independent project. Year: 2025 (active). Role: Developer.',
      },
      {
        heading: 'Responsibilities',
        content: [
          'Designed and implemented standalone Angular components for each portfolio section.',
          'Built a custom i18n system using typed TypeScript translation objects with dot-path lookup and EN fallback.',
          'Implemented a ThemeService managing dark/light mode and multiple colour themes via CSS custom properties and localStorage.',
          'Wrote a CustomCursorDirective handling mouse movement for a custom cursor experience.',
          'Integrated EmailJS for serverless contact form submission without a backend.',
          'Set up Karma/Jasmine unit tests covering services, components, directives, and routes.',
          'Deployed via angular-cli-ghpages to GitHub Pages with a custom CNAME.',
        ],
      },
      {
        heading: 'Architecture',
        content:
          'Single-Page Application with Angular router (in-memory scroll + fragment anchors). Each section is a standalone component. Translation is resolved at runtime via LanguageService. Themes are applied via document.documentElement CSS variable overrides.',
      },
      {
        heading: 'Technology Stack',
        content: 'Angular 20 · TypeScript · SCSS · Tailwind CSS v4 · EmailJS · i18n (custom) · Karma / Jasmine · GitHub Pages',
      },
      {
        heading: 'Links',
        content: [
          'Live site: https://muhammadalifbudiman.my.id/',
          'GitHub: https://github.com/MuhammadAlifBudiman/portfolio-angular',
        ],
      },
    ],
  },
];
