import { Component, Input, signal, HostListener } from '@angular/core';
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

  showFullSize = signal(false);

  constructor(private lang: LanguageService) {}

  t(key: string): string {
    return this.lang.t(key);
  }

  openFullSize(): void {
    this.showFullSize.set(true);
  }

  closeFullSize(): void {
    this.showFullSize.set(false);
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
