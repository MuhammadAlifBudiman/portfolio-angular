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

  it('renders no credential links because no entry has a credentialUrl', () => {
    // Guard: confirm the data really has no credential URLs.
    expect(CERTIFICATIONS.every((c) => !c.credentialUrl)).toBeTrue();

    const anchors = fixture.nativeElement.querySelectorAll(
      '[data-testid="certification-card"] a[href]',
    );
    expect(anchors.length).toBe(0);
  });

  it('injects the real LanguageService and defaults to English', () => {
    const lang = TestBed.inject(LanguageService);
    expect(lang.t('certifications.title')).toBe('Certifications');
  });
});
