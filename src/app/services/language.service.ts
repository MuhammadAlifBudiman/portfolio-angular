import { Injectable, PLATFORM_ID, inject, signal } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Language, SUPPORTED_LANGUAGES, Translation, PartialTranslation } from '../models/language.model';
import { EN } from '../i18n/en';
import { ID } from '../i18n/id';

const STORAGE_KEY = 'lang';
const DEFAULT_LANG: Language = 'en';

const RESOURCES: Record<Language, Translation | PartialTranslation> = {
  en: EN,
  id: ID,
};

function isValidLanguage(value: string | null): value is Language {
  return SUPPORTED_LANGUAGES.includes(value as Language);
}

/**
 * Resolves a dot-path key against an object, returning `undefined` if any
 * segment is missing. Example: get(obj, 'contact.form.send').
 */
function getByPath(obj: Record<string, unknown>, path: string): string | undefined {
  const segments = path.split('.');
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let current: any = obj;
  for (const seg of segments) {
    if (current == null || typeof current !== 'object') return undefined;
    current = current[seg];
  }
  return typeof current === 'string' ? current : undefined;
}

@Injectable({ providedIn: 'root' })
export class LanguageService {
  readonly currentLang = signal<Language>(DEFAULT_LANG);
  private readonly isBrowser = isPlatformBrowser(inject(PLATFORM_ID));

  /** Call once on app init (e.g. in HeaderComponent.ngOnInit). */
  loadLanguage(): void {
    if (!this.isBrowser) return;
    const stored = localStorage.getItem(STORAGE_KEY);
    const lang = isValidLanguage(stored) ? stored : DEFAULT_LANG;
    this._applyLanguage(lang);
  }

  /** Switch to a different language, persist, and update the DOM lang attribute. */
  setLanguage(lang: Language): void {
    this._applyLanguage(lang);
  }

  /**
   * Look up a translation key (dot-path) in the active language, falling back
   * to English if the key is missing from the active resource.
   */
  t(key: string): string {
    const lang = this.currentLang();
    const resource = RESOURCES[lang] as Record<string, unknown>;
    const value = getByPath(resource, key);
    if (value !== undefined) return value;

    // Fallback to English
    const fallback = getByPath(EN as unknown as Record<string, unknown>, key);
    if (fallback !== undefined) return fallback;

    // Last resort: return the key itself so nothing renders blank
    return key;
  }

  private _applyLanguage(lang: Language): void {
    this.currentLang.set(lang);
    if (this.isBrowser) localStorage.setItem(STORAGE_KEY, lang);
    document.documentElement.lang = lang;
  }
}
