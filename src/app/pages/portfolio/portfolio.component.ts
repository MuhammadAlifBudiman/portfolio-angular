import { Component, OnInit, inject } from '@angular/core';
import { ButtonComponent } from '../../components/button/button.component';
import { PROJECTS } from '../../data/projects.data';
import { Title, Meta } from '@angular/platform-browser';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-portfolio',
  imports: [ButtonComponent],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss',
})
export class PortfolioComponent implements OnInit {
  readonly projects = PROJECTS;
  private lang = inject(LanguageService);
  private titleService = inject(Title);
  private metaService = inject(Meta);

  get portfolioEyebrow(): string { return this.lang.t('portfolio.eyebrow'); }
  get portfolioTitle(): string { return this.lang.t('portfolio.title'); }
  get viewProjectBtn(): string { return this.lang.t('portfolio.viewProjectBtn'); }

  ownershipLabel(key: string): string {
    return this.lang.t(`ownership.${key}`);
  }

  projectDescription(id: string): string {
    return this.lang.t(`projects.${id}.description`);
  }

  projectImageAlt(id: string): string {
    return this.lang.t(`projects.${id}.imageAlt`);
  }

  ngOnInit(): void {
    this.titleService.setTitle(this.lang.t('seo.portfolio.title'));
    this.metaService.updateTag({ name: 'description', content: this.lang.t('seo.portfolio.description') });
  }

  openWebsite(url: string): () => void {
    return () => window.open(url, '_blank', 'noopener,noreferrer');
  }
}
