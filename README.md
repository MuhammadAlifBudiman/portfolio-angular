# Portfolio

This is a personal portfolio web application built with [Angular CLI](https://github.com/angular/angular-cli) version 19.0.6. The project showcases your work, skills, and contact information in a modern, responsive design.

## Features

- **About Me**: Introduction and background information.
- **Portfolio**: Gallery of projects with images and descriptions.
- **Contact**: Contact form for visitors to reach out.
- **Custom Components**: Reusable UI elements (buttons, header, etc.).
- **Custom Directives**: Enhanced interactivity (e.g., custom cursor).
- **Responsive Design**: Optimized for desktop and mobile devices.
- **Modern Styling**: Uses SCSS and Tailwind CSS for styling.

## Project Structure

- `src/app/components/`: Shared UI components (e.g., button, header).
- `src/app/pages/`: Main pages (about-me, contact, introduction, main, portfolio).
- `src/app/services/`: Application services (e.g., email service).
- `src/app/directives/`: Custom Angular directives.
- `public/`: Static assets and project images.

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- [Angular CLI](https://angular.dev/tools/cli)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/MuhammadAlifBudiman/portfolio-angular
   cd portfolio
   ```
2. Install dependencies:
   ```bash
   npm install
   ```

### Development Server

Start the local development server:

```bash
ng serve
```

Navigate to [http://localhost:4200/](http://localhost:4200/) in your browser. The app will reload automatically on code changes.

### Code Scaffolding

Generate a new component:

```bash
ng generate component component-name
```

For more schematics:

```bash
ng generate --help
```

### Building

Build the project for production:

```bash
ng build
```

The build artifacts will be stored in the `dist/` directory.

### Running Unit Tests

Run unit tests with Karma:

```bash
ng test
```

### Running End-to-End Tests

Run e2e tests (if configured):

```bash
ng e2e
```

> Note: Angular CLI does not include an e2e framework by default. You can add one as needed.

## Customization

- Update your personal information and project details in the relevant components under `src/app/pages/`.
- Add or replace project images in `public/projects/`.

## Additional Resources

- [Angular CLI Documentation](https://angular.dev/tools/cli)
- [Angular Official Documentation](https://angular.dev/)
