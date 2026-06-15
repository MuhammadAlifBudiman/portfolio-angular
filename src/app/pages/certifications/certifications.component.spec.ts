import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { CertificationsComponent } from './certifications.component';
import { CERTIFICATIONS } from '../../data/certifications.data';
import { LanguageService } from '../../services/language.service';
import { ButtonComponent } from '../../components/button/button.component';

describe('CertificationsComponent', () => {
  let fixture: ComponentFixture<CertificationsComponent>;
  let component: CertificationsComponent;

  function cards(): NodeListOf<HTMLElement> {
    return fixture.nativeElement.querySelectorAll('[data-testid="certification-card"]');
  }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CertificationsComponent, ButtonComponent],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(CertificationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`renders one card per certification entry (${CERTIFICATIONS.length})`, () => {
    expect(cards().length).toBe(CERTIFICATIONS.length);
  });

  it("section heading contains the EN title 'Certifications'", () => {
    const heading = fixture.nativeElement.querySelector('h2') as HTMLElement;
    expect(heading.textContent).toContain('Certifications');
  });

  it('renders credential links only for entries that have a credentialUrl', () => {
    const withUrl = CERTIFICATIONS.filter((c) => !!c.credentialUrl).length;
    const anchors = fixture.nativeElement.querySelectorAll(
      '[data-testid="certification-card"] a[href]',
    );
    expect(anchors.length).toBe(withUrl);
  });

  it('does not render a credential link for entries without a credentialUrl', () => {
    const withoutUrl = CERTIFICATIONS.filter((c) => !c.credentialUrl);
    expect(withoutUrl.length).toBeGreaterThan(0); // learningx-msib has no URL
    // Each entry without URL should not have a credential anchor
    withoutUrl.forEach((cert) => {
      const card = fixture.nativeElement.querySelector(
        `[data-testid="certification-card"][data-cert-id="${cert.id}"]`,
      );
      if (card) {
        expect(card.querySelector('a[href]')).toBeNull();
      }
    });
  });

  it('injects the real LanguageService and defaults to English', () => {
    const lang = TestBed.inject(LanguageService);
    expect(lang.t('certifications.title')).toBe('Certifications');
  });
});
