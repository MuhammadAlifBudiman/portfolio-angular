import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { CustomCursorDirective } from './directives/custom-cursor.directive';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, CustomCursorDirective],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {}
