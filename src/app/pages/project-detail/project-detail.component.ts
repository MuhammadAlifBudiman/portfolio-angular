import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PROJECTS } from '../../data/projects.data';
import { CASE_STUDIES, CaseStudy } from '../../data/case-studies.data';
import { Project } from '../../models/project.model';
import { LanguageService } from '../../services/language.service';
import { SeoService } from '../../services/seo.service';
import { ButtonComponent } from '../../components/button/button.component';

@Component({
  selector: 'app-project-detail',
  imports: [ButtonComponent],
  templateUrl: './project-detail.component.html',
  styleUrl: './project-detail.component.scss',
})
export class ProjectDetailComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private lang = inject(LanguageService);
  private seo = inject(SeoService);

  project: Project | undefined;
  caseStudy: CaseStudy | undefined;

  get backLabel(): string { return 'Back to Portfolio'; }
  get viewCaseStudy(): string { return this.lang.t('portfolio.cta.caseStudy'); }
  get githubLabel(): string { return this.lang.t('portfolio.cta.github'); }
  get demoLabel(): string { return this.lang.t('portfolio.cta.demo'); }
  get apiDocsLabel(): string { return this.lang.t('portfolio.cta.apiDocs'); }

  ctaLabel(type: string): string { return this.lang.t(`portfolio.cta.${type}`); }
  projectDescription(id: string): string { return this.lang.t(`projects.${id}.description`); }
  ownershipLabel(key: string): string { return this.lang.t(`ownership.${key}`); }
  projectContextLabel(contextId: string): string { return this.lang.t(`projectContext.${contextId}`); }

  ngOnInit(): void {
    const slug = this.route.snapshot.paramMap.get('slug') ?? '';
    this.project = PROJECTS.find(p => p.id === slug);
    this.caseStudy = CASE_STUDIES.find(c => c.id === slug);

    if (!this.project) {
      this.router.navigate(['/']);
      return;
    }

    const titleSuffix = this.lang.t('seo.project.titleSuffix') || '— Muhammad Alif Budiman';
    this.seo.setMetadata({
      title: `${this.project.title} ${titleSuffix}`,
      description: this.projectDescription(this.project.id),
      canonicalUrl: `https://muhammadalifbudiman.my.id/projects/${slug}`,
      ogType: 'article',
    });
  }

  isString(val: string | string[]): val is string {
    return typeof val === 'string';
  }

  isArray(val: string | string[]): val is string[] {
    return Array.isArray(val);
  }

  navigateBack(): void {
    this.router.navigate(['/portfolio']);
  }
}
