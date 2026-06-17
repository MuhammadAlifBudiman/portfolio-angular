import { Component, PLATFORM_ID, inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  private langService = inject(LanguageService);
  private readonly isBrowser = isPlatformBrowser(inject(PLATFORM_ID));
  readonly currentYear = new Date().getFullYear();
  readonly links = {
    github: 'https://github.com/MuhammadAlifBudiman',
    linkedin: 'https://www.linkedin.com/in/muhammad-alif-budiman/',
    email: 'mailto:muhammadalifbudiman0@gmail.com',
    resume: 'resume.pdf',
  };

  t(key: string): string {
    return this.langService.t(key);
  }

  scrollToTop(): void {
    if (!this.isBrowser) return;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
