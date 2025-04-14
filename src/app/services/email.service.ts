import { Injectable } from '@angular/core';
import emailjs from 'emailjs-com';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class EmailService {
  private serviceId = environment.emailService.serviceId;
  private templateId = environment.emailService.templateId;
  private publicKey = environment.emailService.publicKey;

  sendEmail(form: HTMLFormElement): Promise<any> {
    return emailjs.sendForm(
      this.serviceId,
      this.templateId,
      form,
      this.publicKey
    );
  }
}
