import { TestBed } from '@angular/core/testing';
import { ThemeService, StyleTheme, STYLE_THEMES } from './theme.service';

describe('ThemeService', () => {
  let service: ThemeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ThemeService);
    localStorage.clear();
    document.documentElement.removeAttribute('data-style-theme');
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('applyTheme()', () => {
    it('sets data-style-theme attribute on <html>', () => {
      service.applyTheme('ocean');
      expect(document.documentElement.getAttribute('data-style-theme')).toBe('ocean');
    });

    it('persists theme to localStorage', () => {
      service.applyTheme('ember');
      expect(localStorage.getItem('style-theme')).toBe('ember');
    });

    it('updates the currentTheme signal', () => {
      service.applyTheme('ocean');
      expect(service.currentTheme()).toBe('ocean');
    });

    it('applies every defined theme without error', () => {
      STYLE_THEMES.forEach((t) => {
        expect(() => service.applyTheme(t.id)).not.toThrow();
        expect(service.currentTheme()).toBe(t.id);
      });
    });
  });

  describe('loadThemePreference() — AC-F003-3 / AC-F003-4', () => {
    it('restores a valid stored theme', () => {
      localStorage.setItem('style-theme', 'ocean');
      service.loadThemePreference();
      expect(service.currentTheme()).toBe('ocean');
      expect(document.documentElement.getAttribute('data-style-theme')).toBe('ocean');
    });

    it('falls back to "default" when localStorage is empty (AC-F003-3)', () => {
      service.loadThemePreference();
      expect(service.currentTheme()).toBe('default');
    });

    it('falls back to "default" on an unknown/corrupt key (AC-F003-3)', () => {
      localStorage.setItem('style-theme', 'corrupted-value-xyz');
      service.loadThemePreference();
      expect(service.currentTheme()).toBe('default');
      expect(document.documentElement.getAttribute('data-style-theme')).toBe('default');
    });

    it('falls back to "default" on null key (AC-F003-3)', () => {
      localStorage.setItem('style-theme', 'null');
      service.loadThemePreference();
      expect(service.currentTheme()).toBe('default');
    });
  });
});
