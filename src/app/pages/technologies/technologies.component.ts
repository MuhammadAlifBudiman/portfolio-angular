import { Component, inject } from '@angular/core';
import { LanguageService } from '../../services/language.service';

interface TechGroup {
  key: 'backend' | 'frontend' | 'databases' | 'tools';
  items: string[];
}

@Component({
  selector: 'app-technologies',
  imports: [],
  templateUrl: './technologies.component.html',
  styleUrl: './technologies.component.scss',
})
export class TechnologiesComponent {
  private lang = inject(LanguageService);

  get eyebrow(): string { return this.lang.t('technologies.eyebrow'); }
  get title(): string { return this.lang.t('technologies.title'); }
  groupLabel(key: string): string { return this.lang.t(`technologies.groups.${key}`); }

  readonly techGroups: TechGroup[] = [
    {
      key: 'backend',
      items: ['Go', 'Node.js', 'Express', 'Python', 'Django', 'Django REST Framework', 'Flask', 'REST API', 'OpenAPI / Swagger', 'JWT', 'Keycloak', 'RBAC'],
    },
    {
      key: 'frontend',
      items: ['Angular', 'TypeScript', 'JavaScript', 'HTML', 'CSS', 'SCSS', 'Tailwind CSS'],
    },
    {
      key: 'databases',
      items: ['PostgreSQL', 'MongoDB', 'MySQL', 'SQLite', 'Sequelize'],
    },
    {
      key: 'tools',
      items: ['Git', 'GitHub', 'Postman', 'DBeaver', 'VS Code'],
    },
  ];
}
