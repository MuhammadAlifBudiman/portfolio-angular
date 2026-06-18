import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PROJECTS } from '../../data/projects.data';
import { CASE_STUDIES, CaseStudy, CaseStudyMedia } from '../../data/case-studies.data';
import { Project } from '../../models/project.model';
import { LanguageService } from '../../services/language.service';
import { SeoService } from '../../services/seo.service';
import { EN } from '../../i18n/en';
import { ID } from '../../i18n/id';
import { ButtonComponent } from '../../components/button/button.component';
import { ProjectStatusBadgeComponent } from '../../components/project-status-badge/project-status-badge.component';
import { formatProjectPeriod } from '../../utils/project-period.util';

@Component({
  selector: 'app-project-detail',
  imports: [ButtonComponent, ProjectStatusBadgeComponent],
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

  get projectPeriod(): string | null {
    if (!this.project) return null;
    if (this.project.period) {
      return formatProjectPeriod(this.project.period, this.lang.currentLang());
    }
    return this.project.year ?? null;
  }

  get viewCaseStudy(): string { return this.lang.t('portfolio.cta.caseStudy'); }
  get githubLabel(): string { return this.lang.t('portfolio.cta.github'); }
  get demoLabel(): string { return this.lang.t('portfolio.cta.demo'); }
  get apiDocsLabel(): string { return this.lang.t('portfolio.cta.apiDocs'); }

  /** Reactive translation lookup for use in the template. */
  t(key: string): string { return this.lang.t(key); }

  ctaLabel(type: string): string { return this.lang.t(`portfolio.cta.${type}`); }
  statusLabel(key: string): string { return this.lang.t(`portfolio.status.${key}`); }
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
    const idValue = this.resolveSection(resource, caseStudyId, sectionId);
    if (idValue != null) return idValue;

    if (lang !== 'en') {
      console.warn(`[i18n] Missing ${lang} translation for caseStudies.${caseStudyId}.sections.${sectionId}, falling back to EN`);
    }
    const enValue = this.resolveSection(EN as unknown as Record<string, unknown>, caseStudyId, sectionId);
    return enValue ?? this.lang.t(`caseStudies.${caseStudyId}.sections.${sectionId}`);
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

  placedMediaAfter(sectionId: string): CaseStudyMedia[] {
    return [...(this.caseStudy?.media ?? [])].filter(item => item.afterSectionId === sectionId);
  }

  get unplacedMedia(): CaseStudyMedia[] {
    return [...(this.caseStudy?.media ?? [])].filter(item => !item.afterSectionId);
  }

  mediaImageClass(item: CaseStudyMedia): string {
    const fitClass = item.imageFit === 'contain' || item.type === 'architecture' || item.type === 'flow'
      ? 'object-contain'
      : 'object-cover';
    const positionClass = item.imagePosition === 'top' ? 'object-top' : 'object-center';
    return [
      'dark:border-dark-background-hover border-light-background-hover bg-light-background-hover dark:bg-dark-background-hover',
      'max-h-[420px] w-full rounded-lg border',
      fitClass,
      positionClass,
    ].join(' ');
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
    const description = this.projectDescription(this.project.id);
    const canonicalUrl = `https://muhammadalifbudiman.my.id/projects/${slug}`;

    this.seo.setMetadata({
      title: `${this.project.title} ${titleSuffix}`,
      description,
      canonicalUrl,
      ogType: 'article',
      image: this.project.socialImageSrc,
    });

    const githubLink = this.project.links.find(l => l.type === 'github');
    const isPublic = this.project.linkStatus !== 'restricted' && !!githubLink;

    const structuredData: Record<string, unknown> = {
      '@context': 'https://schema.org',
      '@type': isPublic ? 'SoftwareSourceCode' : 'CreativeWork',
      name: this.project.title,
      description,
      url: canonicalUrl,
      image: this.project.socialImageSrc ?? this.seo.defaultImage,
      author: {
        '@type': 'Person',
        name: 'Muhammad Alif Budiman',
        url: 'https://muhammadalifbudiman.my.id',
      },
    };

    if (isPublic && githubLink) {
      structuredData['programmingLanguage'] = this.project.stack;
      structuredData['codeRepository'] = githubLink.url;
    }

    this.seo.setStructuredData(structuredData, 'project-structured-data');
  }

  navigateBack(): void {
    this.router.navigate(['/'], { fragment: 'section-portfolio' });
  }
}
