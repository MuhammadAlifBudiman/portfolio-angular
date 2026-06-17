import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { Title } from '@angular/platform-browser';

import { IntroductionComponent } from './introduction.component';

describe('IntroductionComponent — FR-F00L-3', () => {
  let fixture: ComponentFixture<IntroductionComponent>;
  let component: IntroductionComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IntroductionComponent],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(IntroductionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('sets the document title on init', () => {
    expect(TestBed.inject(Title).getTitle()).toBe(
      'Muhammad Alif Budiman — Full-Stack Web Developer'
    );
  });

  it('View Projects CTA anchors to portfolio section', () => {
    const anchor: HTMLAnchorElement | null =
      fixture.nativeElement.querySelector('a[href="#section-portfolio"]');
    expect(anchor).toBeTruthy();
  });

  it('Download Resume CTA links to resume.pdf', () => {
    const anchor: HTMLAnchorElement | null =
      fixture.nativeElement.querySelector('a[download]');
    expect(anchor?.getAttribute('href')).toBe('resume.pdf');
  });

  describe('quick facts (Task C)', () => {
    it('exposes exactly 4 quick facts', () => {
      expect(component.quickFacts.length).toBe(4);
    });

    it('first fact is featured case studies count (≥1)', () => {
      const fact = component.quickFacts[0];
      expect(fact.count).toBeGreaterThanOrEqual(1);
      expect(fact.label).toBeTruthy();
    });

    it('third fact is verified credentials count (≥1)', () => {
      const fact = component.quickFacts[2];
      expect(fact.count).toBeGreaterThanOrEqual(1);
    });

    it('fourth fact has null count and a non-empty value', () => {
      const fact = component.quickFacts[3];
      expect(fact.count).toBeNull();
      expect(fact.value).toBeTruthy();
    });

    it('fourth fact value contains "Backend" (target roles)', () => {
      const fact = component.quickFacts[3];
      expect(fact.value).toContain('Backend');
    });

    it('quick facts dl renders in the DOM', () => {
      const dl = fixture.nativeElement.querySelector('dl[aria-label="Quick facts"]');
      expect(dl).withContext('quick facts dl should render').not.toBeNull();
    });

    it('renders one dt per quick fact', () => {
      const dts = fixture.nativeElement.querySelectorAll('dl[aria-label="Quick facts"] dt');
      expect(dts.length).toBe(component.quickFacts.length);
    });
  });
});
