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
});
