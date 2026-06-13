import { Component, inject } from '@angular/core';
import { EXPERIENCES } from '../../data/experience.data';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-experience',
  imports: [],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss',
})
export class ExperienceComponent {
  readonly experiences = EXPERIENCES;
  private lang = inject(LanguageService);

  get eyebrow(): string { return this.lang.t('experience.eyebrow'); }
  get title(): string { return this.lang.t('experience.title'); }

  itemRole(id: string): string { return this.lang.t(`experience.items.${id}.role`); }
  itemPeriod(id: string): string { return this.lang.t(`experience.items.${id}.period`); }
  itemLocation(id: string): string { return this.lang.t(`experience.items.${id}.location`); }
  itemDescription(id: string): string { return this.lang.t(`experience.items.${id}.description`); }
  itemContributions(id: string): string[] {
    // contributions is an array — resolve each index
    const result: string[] = [];
    for (let i = 0; i < 5; i++) {
      const val = this.lang.t(`experience.items.${id}.contributions.${i}`);
      if (val && !val.startsWith('experience.')) result.push(val);
      else break;
    }
    return result;
  }
}
