import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { ExperienceComponent } from './experience.component';
import { EXPERIENCES } from '../../data/experience.data';
import { LanguageService } from '../../services/language.service';

describe('ExperienceComponent', () => {
  let fixture: ComponentFixture<ExperienceComponent>;
  let component: ExperienceComponent;

  function cards(): NodeListOf<HTMLElement> {
    return fixture.nativeElement.querySelectorAll('[data-testid="experience-card"]');
  }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExperienceComponent],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(ExperienceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`renders one card per experience entry (${EXPERIENCES.length})`, () => {
    expect(cards().length).toBe(EXPERIENCES.length);
  });

  it("section heading contains the EN title 'Experience'", () => {
    const heading = fixture.nativeElement.querySelector('h2') as HTMLElement;
    expect(heading.textContent).toContain('Experience');
  });

  it('first card (bkn) renders a resolved role, not the raw i18n key', () => {
    const role = component.itemRole('bkn');
    expect(role.length).toBeGreaterThan(0);
    expect(role.startsWith('experience.')).toBeFalse();

    const firstCardHeading = cards()[0].querySelector('h4') as HTMLElement;
    expect(firstCardHeading.textContent?.trim()).toBe(role);
  });

  it('itemContributions(bkn) returns at least one contribution string', () => {
    const contributions = component.itemContributions('bkn');
    expect(contributions.length).toBeGreaterThanOrEqual(1);
    contributions.forEach((c) => {
      expect(typeof c).toBe('string');
      expect(c.startsWith('experience.')).toBeFalse();
    });
  });

  it('injects the real LanguageService and defaults to English', () => {
    const lang = TestBed.inject(LanguageService);
    expect(lang.t('experience.title')).toBe('Experience');
  });
});
