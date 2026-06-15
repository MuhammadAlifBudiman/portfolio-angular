import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';
import { Router, provideRouter } from '@angular/router';

import { HeaderComponent } from './header.component';
import { ThemeService } from '../../services/theme.service';

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

    it('stays visible below the 2xl desktop navigation breakpoint', () => {
      expect(hamburger.classList).toContain('2xl:hidden');
      expect(hamburger.classList).not.toContain('xl:hidden');
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

  describe('desktop navigation breakpoint', () => {
    it('uses 2xl classes for the expanded desktop nav', () => {
      const navMenu = fixture.nativeElement.querySelector('#nav-menu') as HTMLElement;
      expect(navMenu.classList).toContain('2xl:static');
      expect(navMenu.classList).toContain('2xl:block');
      expect(navMenu.classList).not.toContain('xl:static');
      expect(navMenu.classList).not.toContain('xl:block');
    });
  });

  describe('dark mode toggle (FR-F00L-7)', () => {
    beforeEach(() => {
      localStorage.clear();
    });

    it('onToggleDarkMode(checked=true) enables and persists dark mode', () => {
      component.onToggleDarkMode({
        target: { checked: true },
      } as unknown as Event);

      expect(component.isDarkMode).toBeTrue();
      expect(localStorage.getItem('dark-mode')).toBe('dark');
    });

    it('onToggleDarkMode(checked=false) disables and persists dark mode', () => {
      component.onToggleDarkMode({
        target: { checked: false },
      } as unknown as Event);

      expect(component.isDarkMode).toBeFalse();
      expect(localStorage.getItem('dark-mode')).toBe('light');
    });

    it('restores a stored dark-mode preference on init', () => {
      localStorage.setItem('dark-mode', 'dark');
      spyOn(window, 'matchMedia').and.returnValue({
        matches: false,
      } as MediaQueryList);

      const freshFixture = TestBed.createComponent(HeaderComponent);
      freshFixture.detectChanges();
      const isDark = freshFixture.componentInstance.isDarkMode;
      freshFixture.destroy();

      expect(isDark).toBeTrue();
    });

    it('falls back to the system preference when nothing is stored', () => {
      localStorage.removeItem('dark-mode');
      spyOn(window, 'matchMedia').and.returnValue({
        matches: true,
      } as MediaQueryList);

      const freshFixture = TestBed.createComponent(HeaderComponent);
      freshFixture.detectChanges();
      const isDark = freshFixture.componentInstance.isDarkMode;
      freshFixture.destroy();

      expect(isDark).toBeTrue();
    });

    it('isDarkMode reflects the ThemeService signal', () => {
      TestBed.inject(ThemeService).toggleDarkMode(true);
      expect(component.isDarkMode).toBeTrue();
    });
  });

  describe('sticky navbar on scroll (FR-F00L-7)', () => {
    it('sets isNavbarFixed once scrolled past the header offset', () => {
      component.fixedNavOffsetTop = 10;
      spyOnProperty(window, 'pageYOffset', 'get').and.returnValue(50);

      component.onWindowScroll();

      expect(component.isNavbarFixed).toBeTrue();
    });

    it('clears isNavbarFixed at the top of the page', () => {
      component.fixedNavOffsetTop = 10;
      spyOnProperty(window, 'pageYOffset', 'get').and.returnValue(0);

      component.onWindowScroll();

      expect(component.isNavbarFixed).toBeFalse();
    });
  });

  describe('language selector', () => {
    function langButtons(): NodeListOf<HTMLButtonElement> {
      return fixture.nativeElement.querySelectorAll('.lang-btn');
    }

    it('renders a button for each supported language', () => {
      expect(langButtons().length).toBe(component.supportedLanguages.length);
    });

    it('marks the current language button with aria-pressed="true"', () => {
      const activeBtn = fixture.nativeElement.querySelector('.lang-btn--active');
      expect(activeBtn).not.toBeNull();
      expect(activeBtn.getAttribute('aria-pressed')).toBe('true');
    });

    it('calls switchLanguage when a language button is clicked', () => {
      spyOn(component, 'switchLanguage');
      const btns = langButtons();
      if (btns.length > 1) {
        btns[1].click();
        expect(component.switchLanguage).toHaveBeenCalledWith(component.supportedLanguages[1]);
      }
    });

    it('hides the native cursor on language buttons for the custom cursor layer', () => {
      langButtons().forEach((button) => {
        expect(getComputedStyle(button).cursor).toBe('none');
      });
    });
  });
});
