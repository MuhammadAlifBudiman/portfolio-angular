import { Component, OnInit, inject } from '@angular/core';
import { LanguageService } from '../../services/language.service';
import { SeoService } from '../../services/seo.service';
import { ButtonComponent } from '../../components/button/button.component';
import { PROJECTS } from '../../data/projects.data';
import { EXPERIENCES } from '../../data/experience.data';
import { CERTIFICATIONS } from '../../data/certifications.data';

@Component({
  selector: 'app-introduction',
  imports: [ButtonComponent],
  templateUrl: './introduction.component.html',
  styleUrl: './introduction.component.scss',
})
export class IntroductionComponent implements OnInit {
  private lang = inject(LanguageService);
  private seo = inject(SeoService);

  get greetingText(): string { return this.lang.t('intro.greeting'); }
  get fullName(): string { return 'Muhammad Alif Budiman'; }
  get roleText(): string { return this.lang.t('intro.role'); }
  get introductionText(): string { return this.lang.t('intro.body'); }
  get viewProjectsText(): string { return this.lang.t('intro.viewProjectsBtn'); }
  get downloadResumeText(): string { return this.lang.t('intro.downloadResumeBtn'); }
  get availabilityText(): string { return this.lang.t('intro.availability'); }
  get locationText(): string { return this.lang.t('intro.location'); }
  get profileTitle(): string { return this.lang.t('quickFacts.profileTitle'); }

  readonly featuredProjectCount = PROJECTS.filter(p => p.featured).length;
  readonly experienceCount = EXPERIENCES.length;
  readonly certCount = CERTIFICATIONS.length;
  readonly maxCount = Math.max(this.featuredProjectCount, this.experienceCount, this.certCount, 15);

  get quickFacts(): { count: number | null; label: string; value?: string }[] {
    return [
      { count: this.featuredProjectCount, label: this.lang.t('quickFacts.featuredCaseStudies') },
      { count: this.experienceCount, label: this.lang.t('quickFacts.experienceEntries') },
      { count: this.certCount, label: this.lang.t('quickFacts.verifiedCredentials') },
      { count: null, label: this.lang.t('quickFacts.targetRoles'), value: this.lang.t('quickFacts.targetRolesValue') },
    ];
  }

  ngOnInit(): void {
    this.seo.setMetadata({
      title: this.lang.t('seo.home.title'),
      description: this.lang.t('seo.home.description'),
      canonicalUrl: 'https://muhammadalifbudiman.my.id/',
      ogType: 'profile',
    });

    this.seo.setStructuredData({
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: 'Muhammad Alif Budiman — Portfolio',
      url: 'https://muhammadalifbudiman.my.id',
      author: { '@type': 'Person', name: 'Muhammad Alif Budiman' },
    }, 'website-structured-data');
  }
}
