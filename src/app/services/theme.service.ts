import { Injectable, signal } from '@angular/core';

export type StyleTheme = 'default' | 'ocean' | 'ember';

export interface ThemeOption {
  id: StyleTheme;
  label: string;
}

export const STYLE_THEMES: ThemeOption[] = [
  { id: 'default', label: 'Default' },
  { id: 'ocean', label: 'Ocean' },
  { id: 'ember', label: 'Ember' },
];

const STORAGE_KEY = 'style-theme';
const DARK_MODE_KEY = 'dark-mode';
/** Legacy key written by the old HeaderComponent — migrate and remove on first load. */
const LEGACY_DARK_MODE_KEY = 'theme';
const FALLBACK: StyleTheme = 'default';

function isValidTheme(value: string | null): value is StyleTheme {
  return STYLE_THEMES.some((t) => t.id === value);
}

@Injectable({ providedIn: 'root' })
export class ThemeService {
  readonly currentTheme = signal<StyleTheme>(FALLBACK);
  readonly isDarkMode = signal<boolean>(false);

  constructor() {
    this._migrateLegacyDarkModeKey();
  }

  /** Call once on app init (e.g. in HeaderComponent.ngOnInit). */
  loadThemePreference(): void {
    const stored = localStorage.getItem(STORAGE_KEY);
    const theme = isValidTheme(stored) ? stored : FALLBACK;
    this.applyTheme(theme);
  }

  /** Call once on app init to restore dark mode from storage. */
  loadDarkMode(): void {
    const stored = localStorage.getItem(DARK_MODE_KEY);
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const dark = stored === 'dark' || (stored === null && prefersDark);
    this._applyDarkMode(dark);
  }

  /** Toggle dark mode and persist the new state. */
  toggleDarkMode(dark: boolean): void {
    this._applyDarkMode(dark);
  }

  applyTheme(theme: StyleTheme): void {
    document.documentElement.setAttribute('data-style-theme', theme);
    localStorage.setItem(STORAGE_KEY, theme);
    this.currentTheme.set(theme);
  }

  private _applyDarkMode(dark: boolean): void {
    if (dark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem(DARK_MODE_KEY, dark ? 'dark' : 'light');
    this.isDarkMode.set(dark);
  }

  /** Migrate the legacy 'theme' localStorage key to 'dark-mode' and remove it. */
  private _migrateLegacyDarkModeKey(): void {
    const legacy = localStorage.getItem(LEGACY_DARK_MODE_KEY);
    if (legacy !== null) {
      if (!localStorage.getItem(DARK_MODE_KEY)) {
        localStorage.setItem(DARK_MODE_KEY, legacy);
      }
      localStorage.removeItem(LEGACY_DARK_MODE_KEY);
    }
  }
}
