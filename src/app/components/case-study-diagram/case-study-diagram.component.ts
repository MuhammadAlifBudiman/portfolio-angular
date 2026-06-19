import { Component, Input, signal, HostListener, ViewChild, ElementRef } from '@angular/core';
import { NgTemplateOutlet } from '@angular/common';
import { LanguageService } from '../../services/language.service';
import { CaseStudyMedia } from '../../data/case-studies.data';

@Component({
  selector: 'app-case-study-diagram',
  standalone: true,
  imports: [NgTemplateOutlet],
  templateUrl: './case-study-diagram.component.html',
  styleUrl: './case-study-diagram.component.scss',
})
export class CaseStudyDiagramComponent {
  @Input({ required: true }) item!: CaseStudyMedia;
  @ViewChild('triggerBtn') triggerBtn!: ElementRef<HTMLButtonElement>;
  @ViewChild('overlayInner') overlayInner!: ElementRef<HTMLDivElement>;

  showFullSize = signal(false);

  constructor(private lang: LanguageService) {}

  t(key: string): string {
    return this.lang.t(key);
  }

  openFullSize(): void {
    this.showFullSize.set(true);
    setTimeout(() => this.overlayInner?.nativeElement.focus());
  }

  onOverlayKeydown(event: KeyboardEvent): void {
    if (event.key !== 'Tab') return;
    const el = this.overlayInner?.nativeElement;
    if (!el) return;
    const focusable = Array.from(
      el.querySelectorAll<HTMLElement>(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      )
    ).filter(n => !n.hasAttribute('disabled'));
    if (focusable.length === 0) return;
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    if (event.shiftKey) {
      if (document.activeElement === first) {
        event.preventDefault();
        last.focus();
      }
    } else {
      if (document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }
  }

  closeFullSize(): void {
    this.showFullSize.set(false);
    setTimeout(() => this.triggerBtn?.nativeElement.focus());
  }

  @HostListener('document:keydown.escape')
  onEscape(): void {
    if (this.showFullSize()) {
      this.closeFullSize();
    }
  }

  get diagramId(): string {
    return this.item.id;
  }
}
