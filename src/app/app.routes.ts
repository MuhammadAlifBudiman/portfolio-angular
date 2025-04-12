import { Routes } from '@angular/router';
import { MainComponent } from './pages/main/main.component';
import { AboutMeComponent } from './pages/about-me/about-me.component';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { ContactComponent } from './pages/contact/contact.component';

export const routes: Routes = [
  { path: '', component: MainComponent, pathMatch: 'full' },
  { path: 'about-me', component: AboutMeComponent },
  { path: 'portfolio', component: PortfolioComponent },
  { path: 'contact', component: ContactComponent },
  { path: '*', redirectTo: '' },
];
