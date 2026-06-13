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

  it('navigate() routes to /about-me', () => {
    const navigateSpy = spyOn(component.router, 'navigate');
    component.navigate();
    expect(navigateSpy).toHaveBeenCalledWith(['/about-me']);
  });
});
