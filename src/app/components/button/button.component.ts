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

  constructor(public router: Router) {}

  onButtonClick(): void {
    this.buttonAction();
  }
}
