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
  isMenuOpen = false;

  get isDarkMode(): boolean {
    return this.themeService.isDarkMode();
  }

  ngOnInit() {
    this.themeService.loadDarkMode();
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

  onToggleDarkMode(event: Event) {
    const checked = (event.target as HTMLInputElement).checked;
    this.themeService.toggleDarkMode(checked);
  }
}
