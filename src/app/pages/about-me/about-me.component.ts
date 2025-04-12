import { Component } from '@angular/core';
import { ButtonComponent } from '../../components/button/button.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-about-me',
  imports: [ButtonComponent],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss',
})
export class AboutMeComponent {
  sectionTitle: string = 'About Me';
  introductionText: string = 'Learn more';
  aboutMeParagraph1: string =
    'Hello, my name is Muhammad Alif Budiman. I am a graduate of Jakarta State University, majoring in Computer Science. I am a web developer with skills in both frontend and backend development.';
  aboutMeParagraph2: string =
    'I started learning programming with Python as my first language. My interest in web development began with curiosity and my passion for technology. I realized that web development is a constantly evolving field that offers opportunities to design and create impactful solutions.';
  aboutMeParagraph3: string =
    'In my journey as a developer, I have worked on various projects that have honed my problem-solving skills and technical expertise. I am always eager to learn new technologies and contribute to meaningful projects.';

  buttonText: string = 'View Projects';
  constructor(public router: Router) {}

  navigate(): void {
    this.router.navigate(['/portfolio']);
  }
}
