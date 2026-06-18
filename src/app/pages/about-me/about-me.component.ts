import { Component, OnInit, inject, Input } from '@angular/core';
import { ButtonComponent } from '../../components/button/button.component';
import { LanguageService } from '../../services/language.service';
import { SeoService } from '../../services/seo.service';

@Component({
  selector: 'app-about-me',
  imports: [ButtonComponent],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss',
})
export class AboutMeComponent implements OnInit {
  @Input() pageMode = true;
  private lang = inject(LanguageService);
  private seo = inject(SeoService);

  get sectionTitle(): string { return this.lang.t('about.title'); }
  get introductionText(): string { return this.lang.t('about.eyebrow'); }
  get aboutMeParagraph1(): string { return this.lang.t('about.p1'); }
  get aboutMeParagraph2(): string { return this.lang.t('about.p2'); }
  get aboutMeParagraph3(): string { return this.lang.t('about.p3'); }
  get buttonText(): string { return this.lang.t('about.viewProjectsBtn'); }
  get resumeButtonText(): string { return this.lang.t('about.downloadResumeBtn'); }
  get photoAlt(): string { return this.lang.t('about.photoAlt'); }
  get technologiesTitle(): string { return this.lang.t('about.technologiesTitle'); }

  readonly techCategories: { category: string; items: string[] }[] = [
    { category: 'Backend', items: ['Go', 'Node.js', 'Express.js', 'Django', 'Django REST Framework', 'TypeScript'] },
    { category: 'Frontend', items: ['Angular', 'React', 'TypeScript', 'Tailwind CSS', 'SCSS'] },
    { category: 'Database', items: ['PostgreSQL', 'MySQL', 'Sequelize ORM'] },
    { category: 'DevOps & Tools', items: ['Docker', 'GitHub Actions', 'GitHub Pages', 'Git', 'JWT', 'REST API'] },
  ];

  resumeHref: string = 'resume.pdf';
  resumeDownloadName: string = 'Muhammad-Alif-Budiman-Resume.pdf';

  ngOnInit(): void {
    if (this.pageMode) {
      this.seo.setMetadata({
        title: this.lang.t('seo.about.title'),
        description: this.lang.t('seo.about.description'),
        canonicalUrl: 'https://muhammadalifbudiman.my.id/about-me',
      });
    }
  }
}
