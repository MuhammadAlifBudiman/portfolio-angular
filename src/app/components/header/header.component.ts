import {
  Component,
  HostListener,
  ElementRef,
  ViewChild,
  AfterViewInit,
} from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements AfterViewInit {
  @ViewChild('headerElement') headerRef!: ElementRef;
  isNavbarFixed = false;
  fixedNavOffsetTop = 0;

  ngAfterViewInit() {
    this.fixedNavOffsetTop = this.headerRef.nativeElement.offsetTop;
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const offset = window.pageYOffset;
    this.isNavbarFixed = offset > this.fixedNavOffsetTop;
  }

  toggleMenu() {
    const hamburger = document.querySelector('#hamburger');
    const navMenu = document.querySelector('#nav-menu');

    if (hamburger && navMenu) {
      hamburger.classList.toggle('hamburger-active');
      navMenu.classList.toggle('hidden');
    }
  }
}
