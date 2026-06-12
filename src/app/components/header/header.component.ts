import {
  Component,
  HostListener,
  ElementRef,
  ViewChild,
  AfterViewInit,
  OnInit,
  OnDestroy,
  inject,
} from '@angular/core';
import { NavigationEnd, Router, RouterModule } from '@angular/router';
import { Subscription, filter } from 'rxjs';
import { ThemeService } from '../../services/theme.service';
import { ThemeSelectorComponent } from '../theme-selector/theme-selector.component';
import { LanguageService } from '../../services/language.service';
import { Language, LANGUAGE_LABELS, SUPPORTED_LANGUAGES } from '../../models/language.model';

@Component({
  selector: 'app-header',
  imports: [RouterModule, ThemeSelectorComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit, AfterViewInit, OnDestroy {
  private themeService = inject(ThemeService);
  private langService = inject(LanguageService);
  private router = inject(Router);
  private routerSub?: Subscription;
  @ViewChild('headerElement') headerRef!: ElementRef;
  isNavbarFixed = false;
  fixedNavOffsetTop = 0;
  isMenuOpen = false;

  readonly supportedLanguages = SUPPORTED_LANGUAGES;
  readonly languageLabels = LANGUAGE_LABELS;

  get isDarkMode(): boolean {
    return this.themeService.isDarkMode();
  }

  get currentLang(): Language {
    return this.langService.currentLang();
  }

  t(key: string): string {
    return this.langService.t(key);
  }

  ngOnInit() {
    this.themeService.loadDarkMode();
    this.themeService.loadThemePreference();
    this.langService.loadLanguage();

    // Collapse the mobile nav whenever a route change completes so the
    // dropdown does not stay open after selecting a destination.
    this.routerSub = this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => this.closeMenu());
  }

  ngAfterViewInit() {
    this.fixedNavOffsetTop = this.headerRef.nativeElement.offsetTop;
  }

  ngOnDestroy(): void {
    this.routerSub?.unsubscribe();
  }

  @HostListener('document:keydown.escape')
  onEscape(): void {
    this.closeMenu();
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const offset = window.pageYOffset;
    this.isNavbarFixed = offset > this.fixedNavOffsetTop;
  }

  toggleMenu(): void {
    this.setMenuState(!this.isMenuOpen);
  }

  closeMenu(): void {
    if (this.isMenuOpen) this.setMenuState(false);
  }

  switchLanguage(lang: Language): void {
    this.langService.setLanguage(lang);
  }

  private setMenuState(open: boolean): void {
    this.isMenuOpen = open;
    const hamburger = document.querySelector('#hamburger');
    const navMenu = document.querySelector('#nav-menu');

    if (hamburger && navMenu) {
      hamburger.classList.toggle('hamburger-active', open);
      navMenu.classList.toggle('hidden', !open);
    }
  }

  onToggleDarkMode(event: Event) {
    const checked = (event.target as HTMLInputElement).checked;
    this.themeService.toggleDarkMode(checked);
  }
}
