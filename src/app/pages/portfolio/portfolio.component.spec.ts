import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { PortfolioComponent } from './portfolio.component';
import { PROJECTS } from '../../data/projects.data';
import { LanguageService } from '../../services/language.service';

const FEATURED_COUNT = PROJECTS.filter((p) => p.featured).length;
const OTHER_COUNT = PROJECTS.filter((p) => !p.featured).length;

describe('PortfolioComponent', () => {
  let fixture: ComponentFixture<PortfolioComponent>;
  let component: PortfolioComponent;

  /** Stable, non-presentational selector for project cards (FR-F00L-9). */
  function cards(): NodeListOf<HTMLElement> {
    return fixture.nativeElement.querySelectorAll('[data-testid="project-card"]');
  }

  /** Locate a rendered card by its project id (cards use the id as element id). */
  function cardById(id: string): HTMLElement | null {
    return fixture.nativeElement.querySelector(`[data-testid="project-card"]#${CSS.escape(id)}`);
  }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PortfolioComponent],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(PortfolioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`renders exactly ${PROJECTS.length} project cards when filter is 'all'`, () => {
    expect(component.activeFilter()).toBe('all');
    expect(cards().length).toBe(PROJECTS.length);
  });

  it(`renders ${FEATURED_COUNT} featured cards when filter is 'all'`, () => {
    expect(component.featuredProjects().length).toBe(FEATURED_COUNT);
  });

  it(`renders ${OTHER_COUNT} non-featured cards when filter is 'all'`, () => {
    expect(component.otherProjects().length).toBe(OTHER_COUNT);
  });

  it('first card title matches PROJECTS[0].title', () => {
    // Featured cards render first and use an <h3> heading.
    const heading = cards()[0].querySelector('h3') as HTMLElement;
    expect(heading.textContent?.trim()).toBe(PROJECTS[0].title);
  });

  it('first card img alt matches translated PROJECTS[0].imageAlt', () => {
    const img = cards()[0].querySelector('img') as HTMLImageElement;
    const lang = TestBed.inject(LanguageService);
    expect(img.getAttribute('alt')).toBe(lang.t(`projects.${PROJECTS[0].id}.imageAlt`));
  });

  it('each card is keyed by its project id', () => {
    expect(cards()[0].id).toBe(PROJECTS[0].id);
  });

  describe('filter bar', () => {
    function filterButtons(): NodeListOf<HTMLButtonElement> {
      return fixture.nativeElement.querySelectorAll('[role="group"] button[aria-pressed]');
    }

    it('renders a filter button for every filter key with aria-pressed', () => {
      expect(filterButtons().length).toBe(component.filters.length);
    });

    it("marks the active filter with aria-pressed='true'", () => {
      const buttons = Array.from(filterButtons());
      const pressed = buttons.filter((b) => b.getAttribute('aria-pressed') === 'true');
      expect(pressed.length).toBe(1);
      // 'all' is the first filter and the default active filter.
      expect(buttons[0].getAttribute('aria-pressed')).toBe('true');
    });

    it("setFilter('featured') displays only featured cards", () => {
      component.setFilter('featured');
      fixture.detectChanges();
      expect(cards().length).toBe(FEATURED_COUNT);
      expect(component.otherProjects().length).toBe(0);
    });

    it("setFilter('all') restores the full card list", () => {
      component.setFilter('featured');
      fixture.detectChanges();
      expect(cards().length).toBe(FEATURED_COUNT);

      component.setFilter('all');
      fixture.detectChanges();
      expect(cards().length).toBe(PROJECTS.length);
    });
  });

  describe('link rendering by status', () => {
    it('restricted card (bkn) shows a status chip and no anchor', () => {
      const card = cardById('bkn-internal-workflow-api');
      expect(card).withContext('bkn card should render').not.toBeNull();
      expect(card!.querySelector('a')).withContext('no href anchor for restricted').toBeNull();

      const chip = card!.querySelector('[role="status"]') as HTMLElement;
      expect(chip).withContext('restricted status chip present').not.toBeNull();
      expect(chip.tagName.toLowerCase()).toBe('span');
    });

    it('live card with two links (portfolio-website) renders demo and github anchors', () => {
      const project = PROJECTS.find((p) => p.id === 'portfolio-website')!;
      expect(project.links.length).toBe(2);

      const card = cardById('portfolio-website');
      expect(card).not.toBeNull();
      const anchors = card!.querySelectorAll('a[href]');
      expect(anchors.length).toBe(2);
    });
  });

  describe('project context display', () => {
    it('displays context metadata when present', () => {
      const card = cardById('bkn-internal-workflow-api')!;
      // Find the second font-mono text-sm (first is ownership)
      const monoParagraphs = card.querySelectorAll('p.font-mono.text-sm');
      expect(monoParagraphs.length).toBeGreaterThanOrEqual(2);
      expect(monoParagraphs[1].textContent?.trim()).toBe('Professional Experience · BKN RI');
    });

    it('does not display context metadata when absent', () => {
      const card = cardById('numble')!; // Numble has no context
      const monoParagraphs = card.querySelectorAll('p.font-mono.text-sm');
      expect(monoParagraphs.length).toBe(1); // Only ownership
    });

    it('task-master year is 2023', () => {
      const card = cardById('task-master')!;
      const yearSpan = card.querySelector('span.rounded-full.px-2');
      expect(yearSpan?.textContent?.trim()).toBe('2023');
    });
  });

  it('openWebsite calls window.open with noopener,noreferrer', () => {
    const openSpy = spyOn(window, 'open');
    const url = 'https://example.com/';
    component.openWebsite(url)();
    expect(openSpy).toHaveBeenCalledWith(url, '_blank', 'noopener,noreferrer');
  });
});
