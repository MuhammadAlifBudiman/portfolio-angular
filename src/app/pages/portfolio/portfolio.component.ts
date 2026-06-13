import { Component, OnInit, signal, computed, inject } from '@angular/core';
import { ButtonComponent } from '../../components/button/button.component';
import { PROJECTS } from '../../data/projects.data';
import { Title, Meta } from '@angular/platform-browser';
import { LanguageService } from '../../services/language.service';
import { ProjectCategory } from '../../models/project.model';

export type FilterKey = 'all' | 'featured' | ProjectCategory;

const ALL_FILTERS: FilterKey[] = ['all', 'featured', 'backend', 'fullstack', 'frontend', 'learning', 'restricted'];

@Component({
  selector: 'app-portfolio',
  imports: [ButtonComponent],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss',
})
export class PortfolioComponent implements OnInit {
  readonly allProjects = PROJECTS;
  readonly filters = ALL_FILTERS;
  private lang = inject(LanguageService);
  private titleService = inject(Title);
  private metaService = inject(Meta);

  activeFilter = signal<FilterKey>('all');

  private filteredProjects = computed(() => {
    const f = this.activeFilter();
    if (f === 'all') return [...this.allProjects];
    if (f === 'featured') return this.allProjects.filter(p => p.featured);
    if (f === 'restricted') return this.allProjects.filter(p => p.linkStatus === 'restricted');
    return this.allProjects.filter(p => p.categories.includes(f as ProjectCategory));
  });

  featuredProjects = computed(() => this.filteredProjects().filter(p => p.featured));
  otherProjects = computed(() => this.filteredProjects().filter(p => !p.featured));

  get portfolioEyebrow(): string { return this.lang.t('portfolio.eyebrow'); }
  get portfolioTitle(): string { return this.lang.t('portfolio.title'); }
  get featuredTitle(): string { return this.lang.t('portfolio.featuredTitle'); }
  get otherTitle(): string { return this.lang.t('portfolio.otherTitle'); }

  setFilter(key: FilterKey): void { this.activeFilter.set(key); }

  filterLabel(key: FilterKey): string { return this.lang.t(`portfolio.filters.${key}`); }

  ownershipLabel(key: string): string { return this.lang.t(`ownership.${key}`); }

  projectContextLabel(contextId: string): string { return this.lang.t(`projectContext.${contextId}`); }

  projectDescription(id: string): string { return this.lang.t(`projects.${id}.description`); }

  projectImageAlt(id: string): string { return this.lang.t(`projects.${id}.imageAlt`); }

  projectRole(id: string): string { return this.lang.t(`projects.${id}.role`); }

  ctaLabel(type: string): string { return this.lang.t(`portfolio.cta.${type}`); }

  statusLabel(key: string): string { return this.lang.t(`portfolio.status.${key}`); }

  openWebsite(url: string): () => void {
    return () => window.open(url, '_blank', 'noopener,noreferrer');
  }

  ngOnInit(): void {
    this.titleService.setTitle(this.lang.t('seo.portfolio.title'));
    this.metaService.updateTag({ name: 'description', content: this.lang.t('seo.portfolio.description') });
  }
}
