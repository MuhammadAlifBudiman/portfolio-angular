import { Component } from '@angular/core';
import { ButtonComponent } from '../../components/button/button.component';
import { OWNERSHIP_LABEL } from '../../models/project.model';
import { PROJECTS } from '../../data/projects.data';

@Component({
  selector: 'app-portfolio',
  imports: [ButtonComponent],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss',
})
export class PortfolioComponent {
  readonly projects = PROJECTS;
  readonly ownershipLabel = OWNERSHIP_LABEL;

  openWebsite(url: string): () => void {
    return () => window.open(url, '_blank', 'noopener,noreferrer');
  }
}
