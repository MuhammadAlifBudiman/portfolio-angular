import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TechnologiesComponent } from './technologies.component';

describe('TechnologiesComponent', () => {
  let component: TechnologiesComponent;
  let fixture: ComponentFixture<TechnologiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TechnologiesComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TechnologiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render 4 technology groups', () => {
    expect(component.techGroups.length).toBe(4);
  });

  it('should not render percentage values or progress bars', () => {
    const el: HTMLElement = fixture.nativeElement;
    expect(el.querySelector('[role="progressbar"]')).toBeNull();
    expect(el.querySelector('progress')).toBeNull();
    expect(el.textContent).not.toMatch(/\d+%/);
  });

  it('should render backend group with Go', () => {
    const backend = component.techGroups.find(g => g.key === 'backend');
    expect(backend?.items).toContain('Go');
  });

  it('should render section with id section-technologies', () => {
    const el: HTMLElement = fixture.nativeElement;
    expect(el.querySelector('#section-technologies')).toBeTruthy();
  });

  it('should render tech badges as spans (not links or buttons)', () => {
    const el: HTMLElement = fixture.nativeElement;
    const interactiveInBadges = el.querySelectorAll('.rounded-full button, .rounded-full a');
    expect(interactiveInBadges.length).toBe(0);
  });

  it('should render 4 h3 category headings (one per card)', () => {
    const el: HTMLElement = fixture.nativeElement;
    const headings = el.querySelectorAll('h3');
    expect(headings.length).toBe(4);
  });

  it('should render the section without a min-height full-viewport constraint', () => {
    const el: HTMLElement = fixture.nativeElement;
    const section = el.querySelector('section');
    expect(section?.classList).not.toContain('min-h-screen');
    expect(section?.classList).not.toContain('h-screen');
  });

  it('should render a responsive grid container for the cards', () => {
    const el: HTMLElement = fixture.nativeElement;
    const grid = el.querySelector('.grid');
    expect(grid).toBeTruthy();
    expect(grid?.classList.toString()).toMatch(/grid-cols/);
  });

  it('primaryItems should return at most 8 items per group', () => {
    component.techGroups.forEach(g => {
      expect(component.primaryItems(g).length).toBeLessThanOrEqual(8);
    });
  });

  it('additionalItems returns overflow beyond 8 for backend group', () => {
    const backend = component.techGroups.find(g => g.key === 'backend')!;
    const additional = component.additionalItems(backend);
    expect(backend.items.length).toBeGreaterThan(8);
    expect(additional.length).toBe(backend.items.length - 8);
  });
});
