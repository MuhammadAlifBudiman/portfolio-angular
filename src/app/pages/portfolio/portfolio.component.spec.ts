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
    it('restricted card (bkn) renders both status badge and caseStudy anchor', () => {
      const card = cardById('bkn-internal-workflow-api');
      expect(card).withContext('bkn card should render').not.toBeNull();

      // bkn has a caseStudy link — CTAs render independently of status badge
      const caseStudyAnchor = card!.querySelector('a[href="/projects/bkn-internal-workflow-api"]');
      expect(caseStudyAnchor).withContext('caseStudy anchor should be present').not.toBeNull();

      // status badge always renders regardless of links presence
      const chip = card!.querySelector('[role="status"]');
      expect(chip).withContext('status chip should always render for restricted projects').not.toBeNull();
      expect(chip!.textContent?.trim()).withContext('chip text should show restricted label').toBe('Restricted');
    });

    it('live card with three links (portfolio-website) renders demo, github, and caseStudy anchors', () => {
      const project = PROJECTS.find((p) => p.id === 'portfolio-website')!;
      expect(project.links.length).toBe(3);

      const card = cardById('portfolio-website');
      expect(card).not.toBeNull();
      const anchors = card!.querySelectorAll('a[href]');
      expect(anchors.length).toBe(3);
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
      const yearSpan = card.querySelector('[data-testid="project-period"]');
      expect(yearSpan?.textContent?.trim()).toBe('2023');
    });
  });

  describe('project screenshot assets', () => {
    it('loads Password Security and Crypto Charts screenshots from committed assets', async () => {
      const projectIds = ['password-security', 'crypto-charts'];
      const imagePaths = projectIds.map((id) => PROJECTS.find((project) => project.id === id)?.imageSrc);

      expect(imagePaths).toEqual(['projects/password-security.webp', 'projects/crypto-charts.webp']);

      const responses = await Promise.all(imagePaths.map((path) => fetch(path!)));
      expect(responses.every((response) => response.ok)).toBeTrue();
    });
  });

  describe('status badge independent from CTAs (B3)', () => {
    it('shows restricted badge even when project has links (bkn has caseStudy)', () => {
      const card = cardById('bkn-internal-workflow-api');
      expect(card).withContext('bkn card should render').not.toBeNull();

      // Status badge always renders regardless of links presence
      const chip = card!.querySelector('[role="status"]');
      expect(chip).withContext('restricted status chip should render').not.toBeNull();
      expect(chip!.textContent?.trim()).toBe('Restricted');

      // CTA link is also present (caseStudy anchor)
      const anchor = card!.querySelector('a');
      expect(anchor).withContext('caseStudy link should render independently').not.toBeNull();
    });

    it('shows live badge with demo, API docs, GitHub, and case-study links for patient-management-system', () => {
      const card = cardById('patient-management-system');
      expect(card).withContext('patient-management-system card should render').not.toBeNull();

      const chip = card!.querySelector('[role="status"]');
      expect(chip).withContext('live status chip should render').not.toBeNull();
      expect(chip!.textContent?.trim()).toBe('Live');

      // demo + apiDocs + github + caseStudy anchors should be present
      const anchors = card!.querySelectorAll('a[href]');
      expect(anchors.length).withContext('patient-management-system has four CTA anchors').toBe(4);
    });

    it('shows live badge for blog-api-server project with 4 links', () => {
      const card = cardById('blog-api-server');
      expect(card).withContext('blog-api-server card should render').not.toBeNull();

      const chip = card!.querySelector('[role="status"]');
      expect(chip).withContext('live status chip should render').not.toBeNull();
      expect(chip!.textContent?.trim()).toBe('Live');

      // liveApi + github + apiDocs + caseStudy anchors
      const anchors = card!.querySelectorAll('a[href]');
      expect(anchors.length).withContext('blog-api-server has 4 CTA links').toBe(4);
    });
  });

  describe('projects data integrity (B1)', () => {
    it('blog-api-server has linkStatus live', () => {
      const blog = PROJECTS.find((p) => p.id === 'blog-api-server')!;
      expect(blog.linkStatus).toBe('live');
    });

    it('blog-api-server has liveApi link pointing to Vercel', () => {
      const blog = PROJECTS.find((p) => p.id === 'blog-api-server')!;
      const live = blog.links.find((l) => l.type === 'liveApi');
      expect(live?.url).toBe('https://express-blog-dun.vercel.app/');
    });

    it('blog-api-server has github link', () => {
      const blog = PROJECTS.find((p) => p.id === 'blog-api-server')!;
      expect(blog.links.some((l) => l.type === 'github')).toBeTrue();
    });

    it('blog-api-server has caseStudy link', () => {
      const blog = PROJECTS.find((p) => p.id === 'blog-api-server')!;
      expect(blog.links.some((l) => l.type === 'caseStudy')).toBeTrue();
    });

    it('blog-api-server has apiDocs link pointing to Postman documenter', () => {
      const blog = PROJECTS.find((p) => p.id === 'blog-api-server')!;
      const apiDocs = blog.links.find((l) => l.type === 'apiDocs');
      expect(apiDocs).withContext('apiDocs link should exist').toBeDefined();
      expect(apiDocs?.url).toContain('documenter.getpostman.com');
    });

    it('all featured projects have a caseStudy link', () => {
      const featured = PROJECTS.filter((p) => p.featured);
      for (const project of featured) {
        expect(project.links.some((l) => l.type === 'caseStudy'))
          .withContext(`${project.id} should have caseStudy link`)
          .toBeTrue();
      }
    });

    it('bkn-internal-workflow-api has restricted linkStatus', () => {
      const bkn = PROJECTS.find((p) => p.id === 'bkn-internal-workflow-api')!;
      expect(bkn.linkStatus).toBe('restricted');
    });

    it('bkn-internal-workflow-api has caseStudy link', () => {
      const bkn = PROJECTS.find((p) => p.id === 'bkn-internal-workflow-api')!;
      expect(bkn.links.some((l) => l.type === 'caseStudy')).toBeTrue();
    });
  });

  describe('equal-height card grid layout', () => {
    it('card host elements use flex min-w-0 (not md:w-1/2)', () => {
      const hosts = fixture.nativeElement.querySelectorAll('app-project-card');
      expect(hosts.length).toBeGreaterThan(0);
      for (const host of Array.from(hosts) as HTMLElement[]) {
        expect(host.className).withContext(`host ${host.id} should have flex`).toContain('flex');
        expect(host.className).withContext(`host ${host.id} should have min-w-0`).toContain('min-w-0');
        expect(host.className).withContext(`host ${host.id} should not have md:w-1/2`).not.toContain('w-1/2');
      }
    });

    it('card host elements carry flex class so they participate in stretch', () => {
      const hosts = fixture.nativeElement.querySelectorAll('app-project-card');
      for (const host of Array.from(hosts) as HTMLElement[]) {
        expect(host.className).withContext(`host should have flex class`).toContain('flex');
      }
    });

    it('card row containers use CSS Grid with responsive columns', () => {
      const rows = fixture.nativeElement.querySelectorAll('[data-testid="card-row"]');
      expect(rows.length).toBeGreaterThanOrEqual(1);
      Array.from(rows).forEach((row) => {
        expect((row as HTMLElement).className).toContain('grid');
        expect((row as HTMLElement).className).toContain('md:grid-cols-2');
        expect((row as HTMLElement).className).toContain('gap-6');
        expect((row as HTMLElement).className).toContain('items-stretch');
      });
    });

    it('card row containers carry items-stretch for equal-height rows', () => {
      const rows = fixture.nativeElement.querySelectorAll('[data-testid="card-row"]');
      expect(rows.length).toBeGreaterThanOrEqual(1);
      Array.from(rows).forEach((row) =>
        expect((row as HTMLElement).className).toContain('items-stretch')
      );
    });
  });

  describe('Task A data integrity', () => {
    it('BKN title is "Internal Digital Systems Backend API"', () => {
      const bkn = PROJECTS.find((p) => p.id === 'bkn-internal-workflow-api')!;
      expect(bkn.title).toBe('Internal Digital Systems Backend API');
    });

    it('portfolio-website categories contain only "frontend" (not fullstack)', () => {
      const portfolio = PROJECTS.find((p) => p.id === 'portfolio-website')!;
      expect(portfolio.categories).toEqual(['frontend']);
    });

    it('numble has a github link', () => {
      const numble = PROJECTS.find((p) => p.id === 'numble')!;
      expect(numble.links.some((l) => l.type === 'github')).toBeTrue();
    });

    it('typing-game is absent from project data', () => {
      const typingGame = PROJECTS.find((p) => p.id === 'typing-game');
      expect(typingGame).toBeUndefined();
    });

    it('checkers is present in project data', () => {
      const checkers = PROJECTS.find((p) => p.id === 'checkers');
      expect(checkers).toBeDefined();
    });

    it('stockdata is present as a non-featured project', () => {
      const stockdata = PROJECTS.find((p) => p.id === 'stockdata');
      expect(stockdata).withContext('stockdata should exist').toBeDefined();
      expect(stockdata?.featured).toBeFalse();
    });

    it('stockdata ownership is team', () => {
      const stockdata = PROJECTS.find((p) => p.id === 'stockdata');
      expect(stockdata?.ownership).toBe('team');
    });

    it('total featured projects is 5', () => {
      expect(PROJECTS.filter((p) => p.featured).length).toBe(5);
    });

    it('other (non-featured) projects count is ≤ 6', () => {
      expect(PROJECTS.filter((p) => !p.featured).length).toBeLessThanOrEqual(6);
    });
  });

  describe('pageMode layout class binding', () => {
    it('root element has wrapper class when pageMode is true (default)', () => {
      const root: HTMLElement = fixture.nativeElement.querySelector('div');
      expect(root.classList).toContain('wrapper');
      expect(root.classList).not.toContain('section-wrapper');
    });

    it('root element has section-wrapper class when pageMode is false', () => {
      component.pageMode = false;
      fixture.detectChanges();
      const root: HTMLElement = fixture.nativeElement.querySelector('div');
      expect(root.classList).toContain('section-wrapper');
      expect(root.classList).not.toContain('wrapper');
    });
  });
});
