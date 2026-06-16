import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectLinkStatus } from '../../models/project.model';

@Component({
  selector: 'app-project-status-badge',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './project-status-badge.component.html',
  styleUrl: './project-status-badge.component.scss',
})
export class ProjectStatusBadgeComponent {
  @Input({ required: true }) status!: ProjectLinkStatus;
  @Input({ required: true }) label!: string;
  @Input() projectTitle?: string;

  get ariaLabel(): string {
    return this.projectTitle ? `${this.label}: ${this.projectTitle}` : this.label;
  }

  get statusClasses(): string {
    const base = 'inline-flex h-fit shrink-0 items-center justify-center gap-1.5 rounded-full border px-2.5 py-1 text-xs font-medium leading-none';
    const map: Record<ProjectLinkStatus, string> = {
      live: 'border-status-live-border-light bg-status-live-background-light text-status-live-text-light dark:border-status-live-border-dark dark:bg-status-live-background-dark dark:text-status-live-text-dark',
      restricted: 'border-status-restricted-border-light bg-status-restricted-background-light text-status-restricted-text-light dark:border-status-restricted-border-dark dark:bg-status-restricted-background-dark dark:text-status-restricted-text-dark',
      archived: 'border-status-archived-border-light bg-status-archived-background-light text-status-archived-text-light dark:border-status-archived-border-dark dark:bg-status-archived-background-dark dark:text-status-archived-text-dark',
      unavailable: 'border-status-unavailable-border-light bg-status-unavailable-background-light text-status-unavailable-text-light dark:border-status-unavailable-border-dark dark:bg-status-unavailable-background-dark dark:text-status-unavailable-text-dark',
    };
    return `${base} ${map[this.status]}`;
  }
}
