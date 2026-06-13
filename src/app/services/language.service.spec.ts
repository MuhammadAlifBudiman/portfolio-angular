import { TestBed } from '@angular/core/testing';
import { LanguageService } from './language.service';

describe('LanguageService', () => {
  let service: LanguageService;

  beforeEach(() => {
    localStorage.clear();
    TestBed.configureTestingModule({});
    service = TestBed.inject(LanguageService);
  });

  afterEach(() => {
    localStorage.clear();
    // Reset DOM lang attribute
    document.documentElement.lang = 'en';
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('loadLanguage()', () => {
    it('defaults to English when no stored language exists', () => {
      service.loadLanguage();
      expect(service.currentLang()).toBe('en');
    });

    it('restores stored language "id" from localStorage', () => {
      localStorage.setItem('lang', 'id');
      service.loadLanguage();
      expect(service.currentLang()).toBe('id');
    });

    it('falls back to English for an invalid stored value', () => {
      localStorage.setItem('lang', 'fr');
      service.loadLanguage();
      expect(service.currentLang()).toBe('en');
    });
  });

  describe('setLanguage()', () => {
    it('updates the current language signal', () => {
      service.setLanguage('id');
      expect(service.currentLang()).toBe('id');
    });

    it('persists the language to localStorage', () => {
      service.setLanguage('id');
      expect(localStorage.getItem('lang')).toBe('id');
    });

    it('updates the document lang attribute', () => {
      service.setLanguage('id');
      expect(document.documentElement.lang).toBe('id');
    });

    it('can switch back to English', () => {
      service.setLanguage('id');
      service.setLanguage('en');
      expect(service.currentLang()).toBe('en');
      expect(localStorage.getItem('lang')).toBe('en');
      expect(document.documentElement.lang).toBe('en');
    });
  });

  describe('t() — translation lookup', () => {
    it('returns the English value for a known key when lang is "en"', () => {
      service.setLanguage('en');
      expect(service.t('intro.greeting')).toBe('Hello! My name is');
    });

    it('returns the Indonesian value for a known key when lang is "id"', () => {
      service.setLanguage('id');
      expect(service.t('intro.greeting')).toBe('Halo! Nama saya');
    });

    it('falls back to English when a key is missing from Indonesian resource', () => {
      service.setLanguage('id');
      // 'about.photoAlt' exists in EN but may not exist in a hypothetical minimal ID;
      // We test with a deeply nested key that we know exists in EN.
      const result = service.t('about.photoAlt');
      expect(result).toBeTruthy();
      expect(result).not.toBe('about.photoAlt'); // not a raw key
    });

    it('returns the raw key as last resort for a completely unknown key', () => {
      service.setLanguage('en');
      expect(service.t('nonexistent.key.that.does.not.exist')).toBe('nonexistent.key.that.does.not.exist');
    });

    it('resolves nested form message keys', () => {
      service.setLanguage('en');
      expect(service.t('contact.form.send')).toBe('Send');
      expect(service.t('contact.form.successMsg')).toBe('Your message has been sent successfully!');
    });

    it('resolves project translation keys', () => {
      service.setLanguage('en');
      const desc = service.t('projects.patient-management-system.description');
      expect(desc).toContain('Flask');
    });

    it('resolves Indonesian project translation keys', () => {
      service.setLanguage('id');
      const desc = service.t('projects.patient-management-system.description');
      expect(desc).toContain('Flask');
      // Indonesian text should not be the same as English
      expect(desc).not.toContain('Patient Management System utilizes');
    });
  });
});
