import { Component, OnInit, inject } from '@angular/core';
import { LanguageService } from '../../services/language.service';
import { SeoService } from '../../services/seo.service';
import { ButtonComponent } from '../../components/button/button.component';

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

  ngOnInit(): void {
    this.seo.setMetadata({
      title: this.lang.t('seo.home.title'),
      description: this.lang.t('seo.home.description'),
      canonicalUrl: 'https://muhammadalifbudiman.my.id/',
      ogType: 'profile',
    });
  }
}
