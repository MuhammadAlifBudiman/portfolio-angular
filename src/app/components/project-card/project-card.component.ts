import { Component, Input, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Project } from '../../models/project.model';
import { ButtonComponent } from '../button/button.component';
import { ProjectStatusBadgeComponent } from '../project-status-badge/project-status-badge.component';
import { LanguageService } from '../../services/language.service';
import { formatProjectPeriod } from '../../utils/project-period.util';

@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [RouterLink, ButtonComponent, ProjectStatusBadgeComponent],
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.scss',
})
export class ProjectCardComponent {
  @Input({ required: true }) project!: Project;
  private lang = inject(LanguageService);

  get projectPeriod(): string | null {
    if (this.project.period) {
      return formatProjectPeriod(this.project.period, this.lang.currentLang());
    }
    return this.project.year ?? null;
  }

  get ownershipLabel(): string { return this.lang.t(`ownership.${this.project.ownership}`); }
  get projectContextLabel(): string | null {
    return this.project.context ? this.lang.t(`projectContext.${this.project.context.id}`) : null;
  }
  get projectDescription(): string { return this.lang.t(`projects.${this.project.id}.description`); }
  get projectImageAlt(): string { return this.lang.t(`projects.${this.project.id}.imageAlt`); }
  get projectRole(): string { return this.lang.t(`projects.${this.project.id}.role`); }
  get statusLabel(): string { return this.lang.t(`portfolio.status.${this.project.linkStatus}`); }
  get projectImageClass(): string {
    const fitClass = this.project.imageFit === 'contain' ? 'object-contain' : 'object-cover';
    const positionClass = this.project.imagePosition === 'top' ? 'object-top' : 'object-center';
    return [
      'z-2 dark:border-dark-text-primary border-light-text-primary dark:hover:border-dark-accent-primary hover:border-light-accent-primary',
      'dark:hover:bg-dark-background-hover hover:bg-light-background-hover h-[222px] w-full rounded-lg border-2',
      fitClass,
      positionClass,
    ].join(' ');
  }
  ctaLabel(type: string): string { return this.lang.t(`portfolio.cta.${type}`); }
}
