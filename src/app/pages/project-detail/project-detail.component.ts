import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PROJECTS } from '../../data/projects.data';
import { CASE_STUDIES, CaseStudy } from '../../data/case-studies.data';
import { Project } from '../../models/project.model';
import { LanguageService } from '../../services/language.service';
import { SeoService } from '../../services/seo.service';
import { EN } from '../../i18n/en';
import { ID } from '../../i18n/id';
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

  get viewCaseStudy(): string { return this.lang.t('portfolio.cta.caseStudy'); }
  get githubLabel(): string { return this.lang.t('portfolio.cta.github'); }
  get demoLabel(): string { return this.lang.t('portfolio.cta.demo'); }
  get apiDocsLabel(): string { return this.lang.t('portfolio.cta.apiDocs'); }

  /** Reactive translation lookup for use in the template. */
  t(key: string): string { return this.lang.t(key); }

  ctaLabel(type: string): string { return this.lang.t(`portfolio.cta.${type}`); }
  projectDescription(id: string): string { return this.lang.t(`projects.${id}.description`); }
  ownershipLabel(key: string): string { return this.lang.t(`ownership.${key}`); }
  projectContextLabel(contextId: string): string { return this.lang.t(`projectContext.${contextId}`); }

  /** Localised heading for a structural case-study section. */
  getSectionHeading(sectionId: string): string {
    return this.lang.t(`caseStudies.sectionHeadings.${sectionId}`);
  }

  /** Localised content (paragraph string or list of strings) for a section. */
  getSectionContent(caseStudyId: string, sectionId: string): string | string[] {
    const lang = this.lang.currentLang();
    const resource = (lang === 'id' ? ID : EN) as Record<string, unknown>;
    const value = this.resolveSection(resource, caseStudyId, sectionId)
      ?? this.resolveSection(EN as unknown as Record<string, unknown>, caseStudyId, sectionId);
    return value ?? this.lang.t(`caseStudies.${caseStudyId}.sections.${sectionId}`);
  }

  private resolveSection(
    resource: Record<string, unknown>,
    caseStudyId: string,
    sectionId: string,
  ): string | string[] | undefined {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const sections = (resource as any)?.caseStudies?.[caseStudyId]?.sections;
    const value = sections?.[sectionId];
    if (typeof value === 'string' || Array.isArray(value)) return value;
    return undefined;
  }

  asArray(val: string | string[]): string[] {
    return Array.isArray(val) ? val : [val];
  }

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

  navigateBack(): void {
    this.router.navigate(['/portfolio']);
  }
}
