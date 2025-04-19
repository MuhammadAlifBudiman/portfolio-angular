import { Directive, Renderer2, OnInit, OnDestroy } from '@angular/core';

@Directive({
  selector: '[appCustomCursor]',
})
export class CustomCursorDirective implements OnInit, OnDestroy {
  private cursorBig!: HTMLElement;
  private translation = { x: 0, y: 0 };
  private scaling = 1;

  constructor(private renderer: Renderer2) {}

  ngOnInit(): void {
    this.initCursor();
  }

  private isMobile(): boolean {
    if (
      /Android/i.test(navigator.userAgent) ||
      /iPhone|iPad|iPod/i.test(navigator.userAgent)
    ) {
      return true;
    }
    return false;
  }

  private initCursor(): void {
    if (this.isMobile()) return;

    this.cursorBig = this.renderer.createElement('div');
    this.cursorBig.className = 'big-cursor';
    this.renderer.appendChild(document.body, this.cursorBig);

    window.addEventListener('mousemove', this.positionElement);
    window.addEventListener('mousedown', this.enlargeCursor);
    window.addEventListener('mouseup', this.shrinkCursor);
  }

  private positionElement = (event: MouseEvent): void => {
    const mouseY = event.clientY - 20;
    const mouseX = event.clientX - 20;

    this.translation = { x: mouseX, y: mouseY };
    this.cursorBig.style.transform = `translate3d(${this.translation.x}px, ${this.translation.y}px, 0) scale(${this.scaling})`;
    this.cursorBig.style.transition = '';
  };

  private enlargeCursor = (): void => {
    if (this.scaling === 1.3) return;
    this.scaling = 1.3;
    this.cursorBig.style.transform = `translate3d(${this.translation.x}px, ${this.translation.y}px, 0) scale(${this.scaling})`;
    this.cursorBig.style.transition = 'transform 0.08s ease';
  };

  private shrinkCursor = (): void => {
    this.scaling = 1;
    this.cursorBig.style.transform = `translate3d(${this.translation.x}px, ${this.translation.y}px, 0) scale(${this.scaling})`;
  };

  ngOnDestroy(): void {
    window.removeEventListener('mousemove', this.positionElement);
    window.removeEventListener('mousedown', this.enlargeCursor);
    window.removeEventListener('mouseup', this.shrinkCursor);

    if (this.cursorBig) {
      this.renderer.removeChild(document.body, this.cursorBig);
    }
  }
}
