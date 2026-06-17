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

  function cardById(id: string): HTMLElement {
    const card = fixture.nativeElement.querySelector(
      `[data-testid="certification-card"][data-cert-id="${id}"]`,
    ) as HTMLElement | null;
    expect(card).withContext(`certification card ${id} should render`).not.toBeNull();
    return card!;
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

  it('renders only featured certifications by default (additional collapsed)', () => {
    const featured = CERTIFICATIONS.filter((c) => c.priority !== 'additional');
    expect(cards().length).toBe(featured.length);
  });

  it("section heading contains the EN title 'Certifications'", () => {
    const heading = fixture.nativeElement.querySelector('h2') as HTMLElement;
    expect(heading.textContent).toContain('Certifications');
  });

  it('renders credential links for visible (featured) certification entries', () => {
    const featuredCerts = CERTIFICATIONS.filter((c) => c.priority !== 'additional');
    const withUrl = featuredCerts.reduce(
      (total, cert) => total + (cert.credentialLinks?.length ?? (cert.credentialUrl ? 1 : 0)),
      0,
    );
    const anchors = fixture.nativeElement.querySelectorAll(
      '[data-testid="certification-card"] a[href]',
    );
    expect(anchors.length).toBe(withUrl);
  });

  it('returns no credential links for entries without any credential URLs', () => {
    expect(component.credentialLinks({ id: 'no-public-credential' })).toEqual([]);
  });

  it('renders two safe external credential links for BKN internship', () => {
    const anchors = Array.from(cardById('bkn-internship').querySelectorAll('a[href]'));
    expect(anchors.length).toBe(2);
    expect(anchors.map((anchor) => anchor.getAttribute('href'))).toEqual([
      'https://drive.google.com/file/d/1zg2GHWOy85qdYrIdigWeiggZqXfn37TF/view?usp=sharing',
      'https://drive.google.com/file/d/1SwldY7hQSbDR8nNNFJSpV8Obf1l2Cb1w/view?usp=sharing',
    ]);
    anchors.forEach((anchor) => {
      expect(anchor.getAttribute('target')).toBe('_blank');
      expect(anchor.getAttribute('rel')).toBe('noopener noreferrer');
    });
  });

  it('renders the corrected LearningX credential link safely', () => {
    const anchor = cardById('learningx-msib').querySelector('a[href]') as HTMLAnchorElement;
    expect(anchor).not.toBeNull();
    expect(anchor.getAttribute('href')).toBe(
      'https://drive.google.com/file/d/1ExauUbF0nx4jQv58oiwl8luxYDaq3g1l/view?usp=sharing',
    );
    expect(anchor.getAttribute('target')).toBe('_blank');
    expect(anchor.getAttribute('rel')).toBe('noopener noreferrer');
  });

  it('uses translated labels for credential links', () => {
    const bknLabels = Array.from(cardById('bkn-internship').querySelectorAll('a')).map((anchor) =>
      anchor.textContent?.trim(),
    );
    expect(bknLabels).toEqual(['View BKN Certificate', 'View Kemnaker Certificate']);

    const lang = TestBed.inject(LanguageService);
    lang.setLanguage('id');
    fixture.detectChanges();

    const idLabels = Array.from(cardById('bkn-internship').querySelectorAll('a')).map((anchor) =>
      anchor.textContent?.trim(),
    );
    expect(idLabels).toEqual(['Lihat Sertifikat BKN', 'Lihat Sertifikat Kemnaker']);
  });

  it('injects the real LanguageService and defaults to English', () => {
    const lang = TestBed.inject(LanguageService);
    expect(lang.t('certifications.title')).toBe('Certifications');
  });

  it('credential buttons use compact variant (h-10 class on anchor elements)', () => {
    const anchors = Array.from(
      fixture.nativeElement.querySelectorAll('[data-testid="certification-card"] a[href]'),
    ) as HTMLElement[];
    expect(anchors.length).toBeGreaterThan(0);
    anchors.forEach((anchor) => {
      expect(anchor.classList).withContext(`anchor "${anchor.textContent?.trim()}" should have h-10`).toContain('h-10');
    });
  });

  describe('featured / additional toggle (Task D)', () => {
    it('toggle button exists with aria-expanded="false" by default', () => {
      const btn = fixture.nativeElement.querySelector('button[aria-expanded]') as HTMLButtonElement;
      expect(btn).withContext('toggle button should render').not.toBeNull();
      expect(btn.getAttribute('aria-expanded')).toBe('false');
    });

    it('additional certifications are not rendered initially', () => {
      const additional = CERTIFICATIONS.filter((c) => c.priority === 'additional');
      additional.forEach((cert) => {
        const card = fixture.nativeElement.querySelector(
          `[data-testid="certification-card"][data-cert-id="${cert.id}"]`,
        );
        expect(card).withContext(`${cert.id} should be hidden initially`).toBeNull();
      });
    });

    it('clicking toggle shows additional certifications', () => {
      const btn = fixture.nativeElement.querySelector('button[aria-expanded]') as HTMLButtonElement;
      btn.click();
      fixture.detectChanges();
      const additional = CERTIFICATIONS.filter((c) => c.priority === 'additional');
      expect(additional.length).toBeGreaterThan(0);
      additional.forEach((cert) => {
        const card = fixture.nativeElement.querySelector(
          `[data-testid="certification-card"][data-cert-id="${cert.id}"]`,
        );
        expect(card).withContext(`${cert.id} should be visible after toggle`).not.toBeNull();
      });
    });

    it('aria-expanded becomes "true" after toggle', () => {
      const btn = fixture.nativeElement.querySelector('button[aria-expanded]') as HTMLButtonElement;
      btn.click();
      fixture.detectChanges();
      expect(btn.getAttribute('aria-expanded')).toBe('true');
    });

    it('all certifications visible after toggle (total = CERTIFICATIONS.length)', () => {
      const btn = fixture.nativeElement.querySelector('button[aria-expanded]') as HTMLButtonElement;
      btn.click();
      fixture.detectChanges();
      expect(cards().length).toBe(CERTIFICATIONS.length);
    });

    it('clicking toggle again collapses additional certifications', () => {
      const btn = fixture.nativeElement.querySelector('button[aria-expanded]') as HTMLButtonElement;
      btn.click();
      fixture.detectChanges();
      btn.click();
      fixture.detectChanges();
      const featured = CERTIFICATIONS.filter((c) => c.priority !== 'additional');
      expect(cards().length).toBe(featured.length);
      expect(btn.getAttribute('aria-expanded')).toBe('false');
    });
  });
});
