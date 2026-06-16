import { Component, OnInit, signal, computed, inject, Input } from '@angular/core';
import { PROJECTS } from '../../data/projects.data';
import { LanguageService } from '../../services/language.service';
import { SeoService } from '../../services/seo.service';
import { ProjectCategory } from '../../models/project.model';
import { ProjectCardComponent } from '../../components/project-card/project-card.component';

export type FilterKey = 'all' | 'featured' | ProjectCategory;

const ALL_FILTERS: FilterKey[] = ['all', 'featured', 'backend', 'fullstack', 'frontend', 'learning', 'restricted'];

@Component({
  selector: 'app-portfolio',
  imports: [ProjectCardComponent],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss',
})
export class PortfolioComponent implements OnInit {
  @Input() pageMode = true;
  readonly allProjects = PROJECTS;
  readonly filters = ALL_FILTERS;
  private lang = inject(LanguageService);
  private seo = inject(SeoService);

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

  ngOnInit(): void {
    if (this.pageMode) {
      this.seo.setMetadata({
        title: this.lang.t('seo.portfolio.title'),
        description: this.lang.t('seo.portfolio.description'),
        canonicalUrl: 'https://muhammadalifbudiman.my.id/portfolio',
      });
    }
  }
}
