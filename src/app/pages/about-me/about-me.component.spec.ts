import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { AboutMeComponent } from './about-me.component';

describe('AboutMeComponent', () => {
  let fixture: ComponentFixture<AboutMeComponent>;
  let component: AboutMeComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutMeComponent],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(AboutMeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('renders the Download Resume anchor with correct href (FR-F001-1, FR-F001-2)', () => {
    const anchor: HTMLAnchorElement | null =
      fixture.nativeElement.querySelector('a[download]');
    expect(anchor).toBeTruthy();
    expect(anchor?.getAttribute('href')).toBe('resume.pdf');
  });

  it('sets download attribute to the expected filename (FR-F001-1)', () => {
    const anchor: HTMLAnchorElement | null =
      fixture.nativeElement.querySelector('a[download]');
    expect(anchor?.getAttribute('download')).toBe(
      'Muhammad-Alif-Budiman-Resume.pdf'
    );
  });

  it('Download Resume anchor label is set (FR-F001-5)', () => {
    const anchor: HTMLAnchorElement | null =
      fixture.nativeElement.querySelector('a[download]');
    expect(anchor?.getAttribute('aria-label')).toBe('Download Resume');
  });

  it('View Projects button links to /portfolio (FR-F00L-10)', () => {
    const viewProjectsLink: HTMLAnchorElement | null =
      fixture.nativeElement.querySelector('a[href="/portfolio"]');
    expect(viewProjectsLink).toBeTruthy();
  });

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

  it('should not render a full Technologies grid in homepage About section', () => {
    // pageMode defaults to true
    const techGrid = fixture.nativeElement.querySelector('[class*="grid-cols"]');
    // The about component should have no grid (grid was removed)
    expect(techGrid).toBeNull();
  });

  it('should not contain hardcoded "1+" stat text', () => {
    const text = fixture.nativeElement.textContent;
    expect(text).not.toContain('1+ Years Exp');
    expect(text).not.toContain('10+ Projects');
  });

  it('should still render the introductory eyebrow text', () => {
    const eyebrow = fixture.nativeElement.querySelector('#section-about');
    expect(eyebrow).toBeTruthy();
  });

  it('should still render photo, View Projects button, and Download Resume button', () => {
    const viewProjects = fixture.nativeElement.querySelector('a[href="/portfolio"]');
    const downloadResume = fixture.nativeElement.querySelector('a[download]');
    const photo = fixture.nativeElement.querySelector('img[alt]');
    expect(viewProjects).toBeTruthy();
    expect(downloadResume).toBeTruthy();
    expect(photo).toBeTruthy();
  });
});
