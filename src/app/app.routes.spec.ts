import { TestBed } from '@angular/core/testing';
import { Location } from '@angular/common';
import { Router, provideRouter } from '@angular/router';
import { RouterTestingHarness } from '@angular/router/testing';

import { routes } from './app.routes';
import { MainComponent } from './pages/main/main.component';
import { AboutMeComponent } from './pages/about-me/about-me.component';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { ContactComponent } from './pages/contact/contact.component';

describe('app routes — FR-F00L-8', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideRouter(routes)],
    });
  });

  it('resolves "/" to MainComponent', async () => {
    const harness = await RouterTestingHarness.create('/');
    expect(harness.routeNativeElement).toBeTruthy();
    expect(TestBed.inject(Router).url).toBe('/');
  });

  it('resolves "/about-me" to AboutMeComponent', async () => {
    const harness = await RouterTestingHarness.create();
    const component = await harness.navigateByUrl('/about-me');
    expect(component).toBeInstanceOf(AboutMeComponent);
  });

  it('resolves "/portfolio" to PortfolioComponent', async () => {
    const harness = await RouterTestingHarness.create();
    const component = await harness.navigateByUrl('/portfolio');
    expect(component).toBeInstanceOf(PortfolioComponent);
  });

  it('resolves "/contact" to ContactComponent', async () => {
    const harness = await RouterTestingHarness.create();
    const component = await harness.navigateByUrl('/contact');
    expect(component).toBeInstanceOf(ContactComponent);
  });

  it('redirects an unknown path back to "/"', async () => {
    const harness = await RouterTestingHarness.create();
    const component = await harness.navigateByUrl('/does-not-exist');
    expect(component).toBeInstanceOf(MainComponent);
    expect(TestBed.inject(Location).path()).toBe('');
  });
});
