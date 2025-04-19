import { Component, ElementRef, ViewChild } from '@angular/core';
import { ButtonComponent } from '../../components/button/button.component';
import { CommonModule } from '@angular/common';
import { EmailService } from '../../services/email.service';

@Component({
  selector: 'app-contact',
  imports: [ButtonComponent, CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  phoneNumber = '+6281295837271';
  email = 'alifm2101@gmail.com';
  alertMessage: string | null = null;
  alertType: string | null = null;
  time: string = '';
  isLoading: boolean = false;

  @ViewChild('contactForm') contactForm!: ElementRef<HTMLFormElement>;
  constructor(private emailService: EmailService) {}

  sendData = (): void => {
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

    this.emailService
      .sendEmail(this.contactForm.nativeElement)
      .then(() => {
        this.alertMessage = 'Your message has been sent successfully!';
        this.alertType =
          'dark:bg-dark-success-background bg-light-success-background dark:text-dark-success-text text-light-success-text border border-solid dark:border-dark-success-border border-light-success-border';
        this.contactForm.nativeElement.reset();
      })
      .catch(() => {
        this.alertMessage = 'Failed to send your message. Please try again.';
        this.alertType =
          'dark:bg-dark-error-background bg-light-error-background dark:text-dark-error-text text-light-error-text border border-solid dark:border-dark-error-border border-light-error-border';
      })
      .finally(() => {
        this.isLoading = false;
      });
  };
}
