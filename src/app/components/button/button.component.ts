import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-button',
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
})
export class ButtonComponent {
  @Input() buttonText: string = '';
  @Input() buttonAction: () => void = () => {};
  /** When set, renders a semantic <a> element instead of <button>. */
  @Input() href?: string;
  /** Download filename hint — only used when href is set. */
  @Input() download?: string;
  /** Accessible label override — only used when href is set. */
  @Input() ariaLabel?: string;
  /** Opens anchor links in a new tab with safe rel attributes. */
  @Input() newTab: boolean = false;
  /** Disables the button and sets aria-disabled. Only applies to the <button> variant. */
  @Input() disabled: boolean = false;

  constructor(public router: Router) {}

  onButtonClick(): void {
    this.buttonAction();
  }
}
