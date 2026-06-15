import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, Router } from '@angular/router';
import { ProjectDetailComponent } from './project-detail.component';
import { SeoService } from '../../services/seo.service';

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
});
