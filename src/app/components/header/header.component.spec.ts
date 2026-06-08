import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';
import { Router, provideRouter } from '@angular/router';

import { HeaderComponent } from './header.component';

@Component({ template: '' })
class StubComponent {}

describe('HeaderComponent', () => {
  let fixture: ComponentFixture<HeaderComponent>;
  let component: HeaderComponent;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderComponent],
      providers: [
        provideRouter([
          { path: '', component: StubComponent },
          { path: 'about-me', component: StubComponent },
          { path: 'portfolio', component: StubComponent },
        ]),
      ],
    }).compileComponents();

    router = TestBed.inject(Router);
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

  describe('closes menu on navigation', () => {
    it('closeMenu() collapses an open menu and hides the nav', () => {
      component.toggleMenu();
      expect(component.isMenuOpen).toBeTrue();

      component.closeMenu();

      expect(component.isMenuOpen).toBeFalse();
      const navMenu = fixture.nativeElement.querySelector('#nav-menu');
      expect(navMenu.classList.contains('hidden')).toBeTrue();
    });

    it('closeMenu() is a no-op when the menu is already closed', () => {
      expect(component.isMenuOpen).toBeFalse();
      expect(() => component.closeMenu()).not.toThrow();
      expect(component.isMenuOpen).toBeFalse();
    });

    it('closes the menu after a route change completes', async () => {
      component.toggleMenu();
      expect(component.isMenuOpen).toBeTrue();

      await router.navigateByUrl('/about-me');
      fixture.detectChanges();

      expect(component.isMenuOpen).toBeFalse();
    });

    it('Escape keypress closes an open menu', () => {
      component.toggleMenu();
      expect(component.isMenuOpen).toBeTrue();

      component.onEscape();

      expect(component.isMenuOpen).toBeFalse();
    });
  });
});
