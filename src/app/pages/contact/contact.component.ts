import { Component, ElementRef, OnInit, ViewChild, inject } from '@angular/core';
import { ButtonComponent } from '../../components/button/button.component';
import { CommonModule } from '@angular/common';
import { EmailService } from '../../services/email.service';
import { Title, Meta } from '@angular/platform-browser';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-contact',
  imports: [ButtonComponent, CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent implements OnInit {
  private lang = inject(LanguageService);
  private emailService = inject(EmailService);
  private titleService = inject(Title);
  private metaService = inject(Meta);

  phoneNumber = '+6281295837271';
  email = 'alifm2101@gmail.com';
  alertMessage: string | null = null;
  alertType: string | null = null;
  time: string = '';
  isLoading: boolean = false;
  private lastSentAt: number | null = null;

  private readonly errorClass =
    'dark:bg-dark-error-background bg-light-error-background dark:text-dark-error-text text-light-error-text border border-solid dark:border-dark-error-border border-light-error-border';

  @ViewChild('contactForm') contactForm!: ElementRef<HTMLFormElement>;

  // Template getters
  get contactEyebrow(): string { return this.lang.t('contact.eyebrow'); }
  get contactTitle(): string { return this.lang.t('contact.title'); }
  get contactDescription(): string { return this.lang.t('contact.description'); }
  get whatsappLabel(): string { return this.lang.t('contact.whatsappLabel'); }
  get emailLabel(): string { return this.lang.t('contact.emailLabel'); }
  get formNameLabel(): string { return this.lang.t('contact.form.name'); }
  get formEmailLabel(): string { return this.lang.t('contact.form.email'); }
  get formSubjectLabel(): string { return this.lang.t('contact.form.subject'); }
  get formMessageLabel(): string { return this.lang.t('contact.form.message'); }
  get formSendLabel(): string { return this.lang.t('contact.form.send'); }
  get formSendingLabel(): string { return this.lang.t('contact.form.sending'); }

  ngOnInit(): void {
    this.titleService.setTitle(this.lang.t('seo.contact.title'));
    this.metaService.updateTag({ name: 'description', content: this.lang.t('seo.contact.description') });
  }

  sendData = (): void => {
    if (this.isLoading) return;
    if (this.lastSentAt !== null && Date.now() - this.lastSentAt < 30_000) {
      this.alertMessage = this.lang.t('contact.form.rateLimitMsg');
      this.alertType = this.errorClass;
      return;
    }

    this.isLoading = true;

    if (!this.contactForm?.nativeElement) {
      this.isLoading = false;
      return;
    }

    const form = this.contactForm.nativeElement as HTMLFormElement;

    const currentTime = new Date().toLocaleString('en-US', {
      dateStyle: 'medium',
      timeStyle: 'short',
      timeZone: 'UTC',
    });

    const timeInput = form.querySelector(
      'input[name="time"]',
    ) as HTMLInputElement;
    if (timeInput) {
      timeInput.value = currentTime;
    }

    const formData = new FormData(this.contactForm.nativeElement);
    const email = (formData.get('email') as string ?? '').trim();
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      this.alertMessage = this.lang.t('contact.form.invalidEmailMsg');
      this.alertType = this.errorClass;
      this.isLoading = false;
      return;
    }

    this.emailService
      .sendEmail(this.contactForm.nativeElement)
      .then(() => {
        this.alertMessage = this.lang.t('contact.form.successMsg');
        this.alertType =
          'dark:bg-dark-success-background bg-light-success-background dark:text-dark-success-text text-light-success-text border border-solid dark:border-dark-success-border border-light-success-border';
        this.lastSentAt = Date.now();
        this.contactForm.nativeElement.reset();
      })
      .catch(() => {
        this.alertMessage = this.lang.t('contact.form.errorMsg');
        this.alertType =
          'dark:bg-dark-error-background bg-light-error-background dark:text-dark-error-text text-light-error-text border border-solid dark:border-dark-error-border border-light-error-border';
      })
      .finally(() => {
        this.isLoading = false;
      });
  };
}
