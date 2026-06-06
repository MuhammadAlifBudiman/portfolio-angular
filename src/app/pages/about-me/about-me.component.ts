import { Component, OnInit } from '@angular/core';
import { ButtonComponent } from '../../components/button/button.component';
import { Router } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-about-me',
  imports: [ButtonComponent],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss',
})
export class AboutMeComponent implements OnInit {
  sectionTitle: string = 'About Me';
  introductionText: string = 'Learn more';
  aboutMeParagraph1: string =
    'Hello, my name is Muhammad Alif Budiman. I am studying Informatics and work as a web developer with skills in both frontend and backend development.';
  aboutMeParagraph2: string =
    'I started learning programming with Python as my first language. Working across projects I have built with Angular, TypeScript, JavaScript, Flask, and MongoDB — covering everything from UI components to REST APIs and database design.';
  aboutMeParagraph3: string =
    'One of the more involved projects I have worked on is Klinik Google, a patient management system built with Flask and MongoDB that handles patient registration and healthcare data. That project required thinking carefully about data integrity and multi-user workflows, which shaped how I approach backend design.';

  buttonText: string = 'View Projects';
  resumeHref: string = 'resume.pdf';
  resumeDownloadName: string = 'Muhammad-Alif-Budiman-Resume.pdf';
  resumeButtonText: string = 'Download Resume';

  constructor(public router: Router, private titleService: Title, private metaService: Meta) {}

  ngOnInit(): void {
    this.titleService.setTitle('About — Muhammad Alif Budiman');
    this.metaService.updateTag({ name: 'description', content: 'Learn about Muhammad Alif Budiman — web developer, background, skills, and experience.' });
  }

  navigate(): void {
    this.router.navigate(['/portfolio']);
  }
}
