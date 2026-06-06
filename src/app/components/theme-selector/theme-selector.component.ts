import {
  Component,
  inject,
  signal,
  HostListener,
  ElementRef,
} from '@angular/core';
import { ThemeService, STYLE_THEMES, StyleTheme } from '../../services/theme.service';

@Component({
  selector: 'app-theme-selector',
  templateUrl: './theme-selector.component.html',
  styleUrl: './theme-selector.component.scss',
})
export class ThemeSelectorComponent {
  private themeService = inject(ThemeService);
  private el = inject(ElementRef);

  readonly themes = STYLE_THEMES;
  readonly isOpen = signal(false);

  get selectedTheme(): StyleTheme {
    return this.themeService.currentTheme();
  }

  get selectedLabel(): string {
    return this.themes.find((t) => t.id === this.selectedTheme)?.label ?? 'Theme';
  }

  toggleOpen(): void {
    this.isOpen.set(!this.isOpen());
  }

  selectTheme(id: StyleTheme): void {
    this.themeService.applyTheme(id);
    this.isOpen.set(false);
  }

  /** Close on Escape, navigate with arrow keys. */
  onButtonKeydown(event: KeyboardEvent): void {
    if (event.key === 'Escape') {
      this.isOpen.set(false);
    } else if (event.key === 'ArrowDown' || event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      this.isOpen.set(true);
      // Focus first option after opening
      setTimeout(() => {
        const first = this.el.nativeElement.querySelector('[role="option"]') as HTMLElement | null;
        first?.focus();
      });
    }
  }

  onOptionKeydown(event: KeyboardEvent, id: StyleTheme, index: number): void {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      this.selectTheme(id);
    } else if (event.key === 'Escape') {
      this.isOpen.set(false);
      (this.el.nativeElement.querySelector('[role="combobox"]') as HTMLElement)?.focus();
    } else if (event.key === 'ArrowDown') {
      event.preventDefault();
      const next = this.el.nativeElement.querySelectorAll('[role="option"]')[index + 1] as HTMLElement | null;
      next?.focus();
    } else if (event.key === 'ArrowUp') {
      event.preventDefault();
      if (index === 0) {
        (this.el.nativeElement.querySelector('[role="combobox"]') as HTMLElement)?.focus();
      } else {
        const prev = this.el.nativeElement.querySelectorAll('[role="option"]')[index - 1] as HTMLElement | null;
        prev?.focus();
      }
    }
  }

  /** Close when clicking outside the component. */
  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent): void {
    if (this.isOpen() && !this.el.nativeElement.contains(event.target)) {
      this.isOpen.set(false);
    }
  }
}
