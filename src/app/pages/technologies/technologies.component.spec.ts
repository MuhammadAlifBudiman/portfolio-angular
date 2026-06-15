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
});
