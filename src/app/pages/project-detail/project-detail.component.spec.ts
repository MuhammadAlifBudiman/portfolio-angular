import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, Router } from '@angular/router';
import { ProjectDetailComponent } from './project-detail.component';
import { SeoService } from '../../services/seo.service';
import { LanguageService } from '../../services/language.service';

describe('ProjectDetailComponent', () => {
  let component: ProjectDetailComponent;
  let fixture: ComponentFixture<ProjectDetailComponent>;
  let routerSpy: jasmine.SpyObj<Router>;
  let seoSpy: jasmine.SpyObj<SeoService>;

  function createRoute(slug: string) {
    return {
      snapshot: { paramMap: { get: () => slug } },
    };
  }

  beforeEach(async () => {
    routerSpy = jasmine.createSpyObj('Router', ['navigate']);
    seoSpy = jasmine.createSpyObj('SeoService', ['setMetadata']);

    await TestBed.configureTestingModule({
      imports: [ProjectDetailComponent],
      providers: [
        { provide: ActivatedRoute, useValue: createRoute('task-master') },
        { provide: Router, useValue: routerSpy },
        { provide: SeoService, useValue: seoSpy },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(ProjectDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load task-master project by slug', () => {
    expect(component.project).toBeDefined();
    expect(component.project?.id).toBe('task-master');
  });

  it('should load case study for task-master', () => {
    expect(component.caseStudy).toBeDefined();
  });

  it('should resolve section headings from i18n', () => {
    expect(component.getSectionHeading('overview')).toBe('Overview');
    expect(component.getSectionHeading('technology-stack')).toBe('Technology Stack');
  });

  it('should resolve paragraph section content from i18n', () => {
    const overview = component.getSectionContent('task-master', 'overview');
    expect(typeof overview).toBe('string');
    expect(overview as string).toContain('Task management');
  });

  it('should resolve list section content from i18n as an array', () => {
    const responsibilities = component.getSectionContent('task-master', 'responsibilities');
    expect(Array.isArray(responsibilities)).toBeTrue();
    expect((responsibilities as string[]).length).toBeGreaterThan(0);
  });

  it('should expose i18n-driven back label (no hardcoded English)', () => {
    expect(component.t('caseStudies.common.back')).toBe('Back to Portfolio');
  });

  it('should call seo.setMetadata on init', () => {
    expect(seoSpy.setMetadata).toHaveBeenCalled();
  });

  it('should navigate to / for unknown slug', async () => {
    await TestBed.resetTestingModule();

    routerSpy = jasmine.createSpyObj('Router', ['navigate']);
    seoSpy = jasmine.createSpyObj('SeoService', ['setMetadata']);

    await TestBed.configureTestingModule({
      imports: [ProjectDetailComponent],
      providers: [
        { provide: ActivatedRoute, useValue: createRoute('nonexistent-slug-xyz') },
        { provide: Router, useValue: routerSpy },
        { provide: SeoService, useValue: seoSpy },
      ],
    }).compileComponents();

    const f2 = TestBed.createComponent(ProjectDetailComponent);
    f2.detectChanges();
    expect(routerSpy.navigate).toHaveBeenCalledWith(['/']);
  });

  it('should not render caseStudy-type links as CTAs on the detail page', () => {
    const el: HTMLElement = fixture.nativeElement;
    const buttons = el.querySelectorAll('app-button');
    const caseStudyBtn = Array.from(buttons).find(b =>
      b.getAttribute('ng-reflect-button-text')?.includes('Case Study')
    );
    expect(caseStudyBtn).toBeUndefined();
  });

  it('should render status badge in the meta row (ownership/year row)', () => {
    const el: HTMLElement = fixture.nativeElement;
    const metaRow = el.querySelector('[data-testid="project-meta-row"]');
    expect(metaRow).toBeTruthy();
    const badge = metaRow?.querySelector('app-project-status-badge');
    expect(badge).toBeTruthy();
  });

  it('should NOT render status badge or status spans inside the CTA action row', () => {
    const el: HTMLElement = fixture.nativeElement;
    // The action row contains app-button elements and has items-center class
    const actionRow = el.querySelector('[data-testid="project-action-row"]');
    if (actionRow) {
      expect(actionRow.querySelector('app-project-status-badge')).toBeNull();
      expect(actionRow.querySelector('[role="status"]')).toBeNull();
    }
  });

  it('should expose statusLabel method that resolves portfolio.status i18n keys', () => {
    expect(component.statusLabel('live')).toBeTruthy();
    expect(component.statusLabel('restricted')).toBeTruthy();
    expect(component.statusLabel('archived')).toBeTruthy();
  });

  it('should render action buttons with compact size (h-10 class)', () => {
    const el: HTMLElement = fixture.nativeElement;
    // task-master has external links; compact variant renders h-10 on the anchor element
    const anchors = el.querySelectorAll('app-button a');
    if (anchors.length > 0) {
      Array.from(anchors).forEach(anchor => {
        expect(anchor.classList).toContain('h-10');
      });
    }
  });

  describe('case study media (Task F)', () => {
    it('task-master case study has media entries', () => {
      expect(component.caseStudy?.media?.length).toBeGreaterThan(0);
    });

    it('media section heading renders when media is present', () => {
      const headings = Array.from(
        fixture.nativeElement.querySelectorAll('h2'),
      ) as HTMLElement[];
      const mediaHeading = headings.find((h) => h.textContent?.includes('Visual Evidence'));
      expect(mediaHeading).withContext('Visual Evidence heading should render').not.toBeNull();
    });

    it('renders img elements for each media item with loading="lazy"', () => {
      const imgs = fixture.nativeElement.querySelectorAll('figure img') as NodeListOf<HTMLImageElement>;
      expect(imgs.length).toBeGreaterThan(0);
      imgs.forEach((img) => {
        expect(img.getAttribute('loading')).withContext('img should be lazy-loaded').toBe('lazy');
      });
    });

    it('every rendered media img has a non-empty alt attribute', () => {
      const imgs = fixture.nativeElement.querySelectorAll('figure img') as NodeListOf<HTMLImageElement>;
      expect(imgs.length).toBeGreaterThan(0);
      imgs.forEach((img) => {
        expect(img.getAttribute('alt')?.trim().length)
          .withContext('alt must be non-empty')
          .toBeGreaterThan(0);
      });
    });

    it('renders figcaption for media items that have a captionKey', () => {
      const captions = fixture.nativeElement.querySelectorAll('figcaption');
      expect(captions.length).toBeGreaterThan(0);
    });

    it('renders placed media immediately after its matching section', async () => {
      await TestBed.resetTestingModule();

      routerSpy = jasmine.createSpyObj('Router', ['navigate']);
      seoSpy = jasmine.createSpyObj('SeoService', ['setMetadata']);

      await TestBed.configureTestingModule({
        imports: [ProjectDetailComponent],
        providers: [
          { provide: ActivatedRoute, useValue: createRoute('patient-management-system') },
          { provide: Router, useValue: routerSpy },
          { provide: SeoService, useValue: seoSpy },
        ],
      }).compileComponents();

      const patientFixture = TestBed.createComponent(ProjectDetailComponent);
      patientFixture.detectChanges();

      const contextSection = patientFixture.nativeElement.querySelector('[data-section-id="context"]');
      expect(contextSection).toBeTruthy();
      const placedFigure = contextSection.nextElementSibling as HTMLElement | null;
      expect(placedFigure?.tagName.toLowerCase()).toBe('figure');
      expect(placedFigure?.getAttribute('data-media-id')).toBe('patient-login');
    });

    it('renders contain/top classes from media metadata', async () => {
      await TestBed.resetTestingModule();

      routerSpy = jasmine.createSpyObj('Router', ['navigate']);
      seoSpy = jasmine.createSpyObj('SeoService', ['setMetadata']);

      await TestBed.configureTestingModule({
        imports: [ProjectDetailComponent],
        providers: [
          { provide: ActivatedRoute, useValue: createRoute('patient-management-system') },
          { provide: Router, useValue: routerSpy },
          { provide: SeoService, useValue: seoSpy },
        ],
      }).compileComponents();

      const patientFixture = TestBed.createComponent(ProjectDetailComponent);
      patientFixture.detectChanges();

      const workflowImg: HTMLImageElement | null =
        patientFixture.nativeElement.querySelector('figure[data-media-id="patient-workflow"] img');
      expect(workflowImg?.className).toContain('object-contain');
      expect(workflowImg?.className).toContain('object-top');
    });
  });

  describe('i18n section headings (B5)', () => {
    it('renders English section heading "Overview" for task-master', () => {
      expect(component.getSectionHeading('overview')).toBe('Overview');
    });

    it('renders Indonesian section heading "Gambaran Umum" when language is id', () => {
      const lang = TestBed.inject(LanguageService);
      lang.setLanguage('id');
      fixture.detectChanges();
      expect(component.getSectionHeading('overview')).toBe('Gambaran Umum');
      lang.setLanguage('en');
    });

    it('t("caseStudies.common.back") resolves to Indonesian "Kembali ke Portofolio" when lang is id', () => {
      const lang = TestBed.inject(LanguageService);
      lang.setLanguage('id');
      fixture.detectChanges();
      expect(component.t('caseStudies.common.back')).toBe('Kembali ke Portofolio');
      lang.setLanguage('en');
    });
  });
});
