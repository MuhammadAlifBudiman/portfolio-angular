import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { EXPERIENCES } from '../../data/experience.data';
import { PROJECTS } from '../../data/projects.data';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-experience',
  imports: [RouterLink],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss',
})
export class ExperienceComponent {
  readonly experiences = EXPERIENCES;
  private lang = inject(LanguageService);

  get eyebrow(): string { return this.lang.t('experience.eyebrow'); }
  get title(): string { return this.lang.t('experience.title'); }
  get experienceGroupProfessional(): string { return this.lang.t('experience.groups.professional'); }
  get experienceGroupTraining(): string { return this.lang.t('experience.groups.training'); }
  get relatedProjectLabel(): string { return this.lang.t('experience.relatedProject'); }

  readonly professionalIds = ['bkn'];
  readonly trainingIds = ['learningx-msib', 'mknows'];

  itemRole(id: string): string { return this.lang.t(`experience.items.${id}.role`); }
  itemPeriod(id: string): string { return this.lang.t(`experience.items.${id}.period`); }
  itemLocation(id: string): string { return this.lang.t(`experience.items.${id}.location`); }
  itemDescription(id: string): string { return this.lang.t(`experience.items.${id}.description`); }
  itemContributions(id: string): string[] {
    const result: string[] = [];
    for (let i = 0; i < 5; i++) {
      const val = this.lang.t(`experience.items.${id}.contributions.${i}`);
      if (val && !val.startsWith('experience.')) result.push(val);
      else break;
    }
    return result;
  }

  relatedProjectForExperience(experienceId: string): { title: string; slug: string } | null {
    const project = PROJECTS.find(
      p => p.context?.relatedExperienceId === experienceId
    );
    if (!project) return null;
    return { title: project.title, slug: project.id };
  }

  experiencesByGroup(ids: string[]): typeof EXPERIENCES {
    return EXPERIENCES.filter(e => ids.includes(e.id));
  }
}
