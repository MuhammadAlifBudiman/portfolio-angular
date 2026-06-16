import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProjectStatusBadgeComponent } from './project-status-badge.component';

describe('ProjectStatusBadgeComponent', () => {
  let component: ProjectStatusBadgeComponent;
  let fixture: ComponentFixture<ProjectStatusBadgeComponent>;

  function setup(status: 'live' | 'restricted' | 'archived' | 'unavailable', label: string, projectTitle?: string) {
    fixture = TestBed.createComponent(ProjectStatusBadgeComponent);
    component = fixture.componentInstance;
    component.status = status;
    component.label = label;
    if (projectTitle !== undefined) {
      component.projectTitle = projectTitle;
    }
    fixture.detectChanges();
  }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectStatusBadgeComponent],
    }).compileComponents();
  });

  it('should create successfully', () => {
    setup('live', 'Live');
    expect(component).toBeTruthy();
  });

  it('should render the supplied label text', () => {
    setup('live', 'Live');
    const el: HTMLElement = fixture.nativeElement;
    expect(el.textContent).toContain('Live');
  });

  it('should have role="status" on the root element', () => {
    setup('live', 'Live');
    const span: HTMLElement = fixture.nativeElement.querySelector('span[role="status"]');
    expect(span).toBeTruthy();
  });

  it('should set aria-label to "{label}: {projectTitle}" when projectTitle is provided', () => {
    setup('live', 'Live', 'My Project');
    const span: HTMLElement = fixture.nativeElement.querySelector('span[role="status"]');
    expect(span.getAttribute('aria-label')).toBe('Live: My Project');
  });

  it('should set aria-label to just label when projectTitle is omitted', () => {
    setup('live', 'Live');
    const span: HTMLElement = fixture.nativeElement.querySelector('span[role="status"]');
    expect(span.getAttribute('aria-label')).toBe('Live');
  });

  it('should render the root element as a <span> and not a <button>', () => {
    setup('live', 'Live');
    const el: HTMLElement = fixture.nativeElement;
    const rootSpan = el.querySelector('span[role="status"]');
    const button = el.querySelector('button');
    expect(rootSpan).toBeTruthy();
    expect(button).toBeNull();
  });

  it('should apply live token classes when status is "live"', () => {
    setup('live', 'Live');
    const span: HTMLElement = fixture.nativeElement.querySelector('span[role="status"]');
    expect(span.className).toContain('text-status-live-text-light');
  });

  it('should apply restricted token classes when status is "restricted"', () => {
    setup('restricted', 'Restricted');
    const span: HTMLElement = fixture.nativeElement.querySelector('span[role="status"]');
    expect(span.className).toContain('text-status-restricted-text-light');
  });

  it('should apply archived token classes when status is "archived"', () => {
    setup('archived', 'Archived');
    const span: HTMLElement = fixture.nativeElement.querySelector('span[role="status"]');
    expect(span.className).toContain('text-status-archived-text-light');
  });

  it('should apply unavailable token classes when status is "unavailable"', () => {
    setup('unavailable', 'Unavailable');
    const span: HTMLElement = fixture.nativeElement.querySelector('span[role="status"]');
    expect(span.className).toContain('text-status-unavailable-text-light');
  });
});
