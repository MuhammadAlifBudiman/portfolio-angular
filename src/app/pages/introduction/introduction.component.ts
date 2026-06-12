import { Component, OnInit, inject } from '@angular/core';
import { ButtonComponent } from '../../components/button/button.component';
import { Router } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-introduction',
  imports: [ButtonComponent],
  templateUrl: './introduction.component.html',
  styleUrl: './introduction.component.scss',
})
export class IntroductionComponent implements OnInit {
  private lang = inject(LanguageService);
  private titleService = inject(Title);
  private metaService = inject(Meta);
  public router = inject(Router);

  get greetingText(): string { return this.lang.t('intro.greeting'); }
  get fullName(): string { return 'Muhammad Alif Budiman'; }
  get roleText(): string { return this.lang.t('intro.role'); }
  get introductionText(): string { return this.lang.t('intro.body'); }
  get aboutMeButtonText(): string { return this.lang.t('intro.aboutMeBtn'); }

  ngOnInit(): void {
    this.titleService.setTitle(this.lang.t('seo.home.title'));
    this.metaService.updateTag({ name: 'description', content: this.lang.t('seo.home.description') });
  }

  navigate = (): void => {
    this.router.navigate(['/about-me']);
  };
}
