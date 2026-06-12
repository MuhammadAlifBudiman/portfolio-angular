import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioComponent } from './portfolio.component';
import { PROJECTS } from '../../data/projects.data';
import { LanguageService } from '../../services/language.service';

describe('PortfolioComponent', () => {
  let fixture: ComponentFixture<PortfolioComponent>;
  let component: PortfolioComponent;

  /** Stable, non-presentational selector for project cards (FR-F00L-9). */
  function cards(): NodeListOf<HTMLElement> {
    return fixture.nativeElement.querySelectorAll('[data-testid="project-card"]');
  }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PortfolioComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PortfolioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`renders exactly ${PROJECTS.length} project cards`, () => {
    expect(cards().length).toBe(PROJECTS.length);
  });

  it('first card title matches PROJECTS[0].title', () => {
    const heading = cards()[0].querySelector('h2') as HTMLElement;
    expect(heading.textContent?.trim()).toBe(PROJECTS[0].title);
  });

  it('first card img alt matches translated PROJECTS[0].imageAlt', () => {
    const img = cards()[0].querySelector('img') as HTMLImageElement;
    const lang = TestBed.inject(LanguageService);
    expect(img.getAttribute('alt')).toBe(lang.t(`projects.${PROJECTS[0].id}.imageAlt`));
  });

  it('first card ownership label renders the correct display text', () => {
    const label = cards()[0].querySelector('p') as HTMLElement;
    const lang = TestBed.inject(LanguageService);
    expect(label.textContent?.trim()).toBe(lang.t(`ownership.${PROJECTS[0].ownership}`));
  });

  it('each card is keyed by its project id', () => {
    expect(cards()[0].id).toBe(PROJECTS[0].id);
  });

  it('openWebsite calls window.open with noopener,noreferrer', () => {
    const openSpy = spyOn(window, 'open');
    const url = 'https://example.com/';
    component.openWebsite(url)();
    expect(openSpy).toHaveBeenCalledWith(url, '_blank', 'noopener,noreferrer');
  });
});
