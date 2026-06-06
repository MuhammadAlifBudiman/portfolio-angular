import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let fixture: ComponentFixture<HeaderComponent>;
  let component: HeaderComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderComponent],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('hamburger toggle button', () => {
    let hamburger: HTMLButtonElement;

    beforeEach(() => {
      hamburger = fixture.nativeElement.querySelector('#hamburger');
    });

    it('renders a native <button> element', () => {
      expect(hamburger).toBeTruthy();
      expect(hamburger.tagName.toLowerCase()).toBe('button');
      expect(hamburger.type).toBe('button');
    });

    it('has an accessible name via aria-label', () => {
      const label = hamburger.getAttribute('aria-label');
      expect(label).toBeTruthy();
      expect(label!.length).toBeGreaterThan(0);
    });

    it('starts with aria-expanded set to false', () => {
      expect(hamburger.getAttribute('aria-expanded')).toBe('false');
    });

    it('links to the nav menu via aria-controls', () => {
      expect(hamburger.getAttribute('aria-controls')).toBe('nav-menu');
    });

    it('toggleMenu() sets isMenuOpen to true on first call', () => {
      expect(component.isMenuOpen).toBeFalse();
      component.toggleMenu();
      expect(component.isMenuOpen).toBeTrue();
    });

    it('toggleMenu() toggles isMenuOpen back to false on second call', () => {
      component.toggleMenu();
      component.toggleMenu();
      expect(component.isMenuOpen).toBeFalse();
    });

    it('aria-expanded reflects isMenuOpen after toggle', () => {
      component.toggleMenu();
      fixture.detectChanges();
      expect(hamburger.getAttribute('aria-expanded')).toBe('true');
    });
  });
});
