import { Component, inject } from '@angular/core';
import { CERTIFICATIONS } from '../../data/certifications.data';
import { LanguageService } from '../../services/language.service';
import { ButtonComponent } from '../../components/button/button.component';

@Component({
  selector: 'app-certifications',
  imports: [ButtonComponent],
  templateUrl: './certifications.component.html',
  styleUrl: './certifications.component.scss',
})
export class CertificationsComponent {
  readonly certifications = CERTIFICATIONS;
  private lang = inject(LanguageService);

  get eyebrow(): string { return this.lang.t('certifications.eyebrow'); }
  get title(): string { return this.lang.t('certifications.title'); }

  itemName(id: string): string { return this.lang.t(`certifications.items.${id}.name`); }
  itemIssuer(id: string): string { return this.lang.t(`certifications.items.${id}.issuer`); }
  itemPeriod(id: string): string { return this.lang.t(`certifications.items.${id}.period`); }
  itemNote(id: string): string { return this.lang.t(`certifications.items.${id}.note`); }
  viewCredentialLabel(id: string): string {
    return this.lang.t(`certifications.items.${id}.credentialLabel`) || 'View Credential';
  }
}
