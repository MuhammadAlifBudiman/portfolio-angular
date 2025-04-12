import { Component } from '@angular/core';
import { ButtonComponent } from '../../components/button/button.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-introduction',
  imports: [ButtonComponent],
  templateUrl: './introduction.component.html',
  styleUrl: './introduction.component.scss',
})
export class IntroductionComponent {
  greetingText: string = 'Hello! My name is';
  fullName: string = 'Muhammad Alif Budiman';
  roleText: string = 'Web Developer';
  introductionText: string = `I am a web developer with a passion for creating dynamic and responsive web applications. I have experience in various front-end and back-end technologies, and I am always eager to learn new skills and improve my craft.`;

  aboutMeButtonText: string = 'About Me';

  constructor(public router: Router) {}

  navigate(): void {
    this.router.navigate(['/about-me']);
  }
}
