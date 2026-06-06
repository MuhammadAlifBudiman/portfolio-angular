import {
  Component,
  HostListener,
  ElementRef,
  ViewChild,
  AfterViewInit,
  OnInit,
  inject,
} from '@angular/core';
import { RouterModule } from '@angular/router';
import { ThemeService } from '../../services/theme.service';
import { ThemeSelectorComponent } from '../theme-selector/theme-selector.component';

@Component({
  selector: 'app-header',
  imports: [RouterModule, ThemeSelectorComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit, AfterViewInit {
  private themeService = inject(ThemeService);
  @ViewChild('headerElement') headerRef!: ElementRef;
  isNavbarFixed = false;
  fixedNavOffsetTop = 0;
  isDarkMode = false;
  isMenuOpen = false;

  ngOnInit() {
    this.loadThemePreference();
    this.themeService.loadThemePreference();
  }

  ngAfterViewInit() {
    this.fixedNavOffsetTop = this.headerRef.nativeElement.offsetTop;
  }

  @HostListener('document:keydown.escape')
  onEscape(): void {
    if (this.isMenuOpen) this.toggleMenu();
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const offset = window.pageYOffset;
    this.isNavbarFixed = offset > this.fixedNavOffsetTop;
  }

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
    const hamburger = document.querySelector('#hamburger');
    const navMenu = document.querySelector('#nav-menu');

    if (hamburger && navMenu) {
      hamburger.classList.toggle('hamburger-active');
      navMenu.classList.toggle('hidden');
    }
  }

  loadThemePreference(): void {
    const html = document.documentElement;
    const storedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia(
      '(prefers-color-scheme: dark)',
    ).matches;

    if (storedTheme === 'dark' || (!storedTheme && prefersDark)) {
      html.classList.add('dark');
      this.isDarkMode = true;
    } else {
      html.classList.remove('dark');
      this.isDarkMode = false;
    }
  }

  onToggleDarkMode(event: Event) {
    const checked = (event.target as HTMLInputElement).checked;
    this.isDarkMode = checked;

    if (checked) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }
}
