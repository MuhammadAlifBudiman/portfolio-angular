import { Component, OnInit, inject } from '@angular/core';
import { ButtonComponent } from '../../components/button/button.component';
import { Router } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-about-me',
  imports: [ButtonComponent],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss',
})
export class AboutMeComponent implements OnInit {
  private lang = inject(LanguageService);
  private titleService = inject(Title);
  private metaService = inject(Meta);
  public router = inject(Router);

  get sectionTitle(): string { return this.lang.t('about.title'); }
  get introductionText(): string { return this.lang.t('about.eyebrow'); }
  get aboutMeParagraph1(): string { return this.lang.t('about.p1'); }
  get aboutMeParagraph2(): string { return this.lang.t('about.p2'); }
  get aboutMeParagraph3(): string { return this.lang.t('about.p3'); }
  get buttonText(): string { return this.lang.t('about.viewProjectsBtn'); }
  get resumeButtonText(): string { return this.lang.t('about.downloadResumeBtn'); }
  get photoAlt(): string { return this.lang.t('about.photoAlt'); }

  resumeHref: string = 'resume.pdf';
  resumeDownloadName: string = 'Muhammad-Alif-Budiman-Resume.pdf';

  ngOnInit(): void {
    this.titleService.setTitle(this.lang.t('seo.about.title'));
    this.metaService.updateTag({ name: 'description', content: this.lang.t('seo.about.description') });
  }

  navigate = (): void => {
    this.router.navigate(['/portfolio']);
  };
}
