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
});
