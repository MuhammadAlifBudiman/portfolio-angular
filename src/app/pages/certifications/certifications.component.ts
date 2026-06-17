import { Component, computed, inject, signal } from '@angular/core';
import { CERTIFICATIONS } from '../../data/certifications.data';
import { Certification } from '../../models/certification.model';
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

  showAdditional = signal(false);

  featuredCerts = computed(() =>
    CERTIFICATIONS.filter(c => !c.priority || c.priority === 'featured')
  );

  additionalCerts = computed(() =>
    CERTIFICATIONS.filter(c => c.priority === 'additional')
  );

  toggleAdditional(): void {
    this.showAdditional.update(v => !v);
  }

  get showMoreLabel(): string {
    return this.showAdditional()
      ? this.lang.t('certifications.showLess')
      : this.lang.t('certifications.showMore');
  }

  t(key: string): string { return this.lang.t(key); }

  get eyebrow(): string { return this.lang.t('certifications.eyebrow'); }
  get title(): string { return this.lang.t('certifications.title'); }

  itemName(id: string): string { return this.lang.t(`certifications.items.${id}.name`); }
  itemIssuer(id: string): string { return this.lang.t(`certifications.items.${id}.issuer`); }
  itemPeriod(id: string): string { return this.lang.t(`certifications.items.${id}.period`); }
  itemNote(id: string): string { return this.lang.t(`certifications.items.${id}.note`); }
  credentialLinks(cert: Certification): readonly { key: string; url: string }[] {
    return cert.credentialLinks ?? (cert.credentialUrl ? [{ key: 'default', url: cert.credentialUrl }] : []);
  }

  viewCredentialLabel(id: string, key = 'default'): string {
    const keyedLabel = key === 'default'
      ? ''
      : this.lang.t(`certifications.items.${id}.credentialLabels.${key}`);
    return keyedLabel || this.lang.t(`certifications.items.${id}.credentialLabel`) || 'View Credential';
  }
}
