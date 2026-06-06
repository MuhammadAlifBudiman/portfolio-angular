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
const FALLBACK: StyleTheme = 'default';

function isValidTheme(value: string | null): value is StyleTheme {
  return STYLE_THEMES.some((t) => t.id === value);
}

@Injectable({ providedIn: 'root' })
export class ThemeService {
  readonly currentTheme = signal<StyleTheme>(FALLBACK);

  /** Call once on app init (e.g. in HeaderComponent.ngOnInit). */
  loadThemePreference(): void {
    const stored = localStorage.getItem(STORAGE_KEY);
    const theme = isValidTheme(stored) ? stored : FALLBACK;
    this.applyTheme(theme);
  }

  applyTheme(theme: StyleTheme): void {
    document.documentElement.setAttribute('data-style-theme', theme);
    localStorage.setItem(STORAGE_KEY, theme);
    this.currentTheme.set(theme);
  }
}
