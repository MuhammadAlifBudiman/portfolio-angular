import { Component, OnInit } from '@angular/core';
import { ButtonComponent } from '../../components/button/button.component';
import { OWNERSHIP_LABEL } from '../../models/project.model';
import { PROJECTS } from '../../data/projects.data';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-portfolio',
  imports: [ButtonComponent],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss',
})
export class PortfolioComponent implements OnInit {
  readonly projects = PROJECTS;
  readonly ownershipLabel = OWNERSHIP_LABEL;

  constructor(private titleService: Title, private metaService: Meta) {}

  ngOnInit(): void {
    this.titleService.setTitle('Portfolio — Muhammad Alif Budiman');
    this.metaService.updateTag({ name: 'description', content: 'Selected web development projects by Muhammad Alif Budiman including Angular apps, full-stack systems, and browser games.' });
  }

  openWebsite(url: string): () => void {
    return () => window.open(url, '_blank', 'noopener,noreferrer');
  }
}
