import { Component } from '@angular/core';
import { ButtonComponent } from '../../components/button/button.component';

@Component({
  selector: 'app-portfolio',
  imports: [ButtonComponent],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss',
})
export class PortfolioComponent {
  openWebsite(url: string): () => void {
    return () => window.open(url, '_blank');
  }
}
