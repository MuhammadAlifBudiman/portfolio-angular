import { Component, Input } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

export type ButtonVariant = 'default' | 'compact' | 'text';

@Component({
  selector: 'app-button',
  imports: [RouterLink],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
})
export class ButtonComponent {
  @Input() buttonText: string = '';
  @Input() buttonAction: () => void = () => {};
  /** When set, renders a semantic <a> element using Angular RouterLink for SPA navigation. */
  @Input() routerLink?: string | string[];
  /** When set, renders a semantic <a> element instead of <button>. */
  @Input() href?: string;
  /** Download filename hint — only used when href is set. */
  @Input() download?: string;
  /** Accessible label override — only used when href or routerLink is set. */
  @Input() ariaLabel?: string;
  /** Opens anchor links in a new tab with safe rel attributes. Only applies to href mode. */
  @Input() newTab: boolean = false;
  /** Disables the button and sets aria-disabled. Only applies to the <button> variant. */
  @Input() disabled: boolean = false;
  /** Controls the size and shape variant of the button. */
  @Input() variant: ButtonVariant = 'default';

  constructor(public router: Router) {}

  onButtonClick(): void {
    this.buttonAction();
  }

  get baseClasses(): string {
    const borderClass =
      this.variant === 'text'
        ? 'border-transparent'
        : 'dark:border-dark-accent-hover border-light-accent-hover';
    return `${borderClass} dark:focus-visible:outline-dark-accent-hover focus-visible:outline-light-accent-hover group relative z-0 mt-2.5 inline-flex cursor-none items-center justify-center overflow-hidden border-2 border-solid bg-transparent text-center font-bold uppercase focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2`;
  }

  get variantClasses(): string {
    switch (this.variant) {
      case 'compact':
        return 'h-10 w-auto min-w-0 px-4 py-2 text-sm rounded-md whitespace-nowrap';
      case 'text':
        return 'w-auto min-w-0 px-1 py-1 text-sm underline-offset-2 hover:underline';
      default:
        return 'h-[64px] w-[230px] min-w-[130px] px-[50px] py-[15px] text-base rounded-lg';
    }
  }
}
