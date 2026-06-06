import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioComponent } from './portfolio.component';
import { PROJECTS } from '../../data/projects.data';
import { OWNERSHIP_LABEL } from '../../models/project.model';

describe('PortfolioComponent', () => {
  let fixture: ComponentFixture<PortfolioComponent>;
  let component: PortfolioComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PortfolioComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PortfolioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`renders exactly ${PROJECTS.length} project cards`, () => {
    const cards: NodeListOf<HTMLElement> =
      fixture.nativeElement.querySelectorAll('.mb-12.flex.flex-col');
    expect(cards.length).toBe(PROJECTS.length);
  });

  it('first card title matches PROJECTS[0].title', () => {
    const heading: HTMLElement =
      fixture.nativeElement.querySelector('.mb-12.flex.flex-col h2');
    expect(heading.textContent?.trim()).toBe(PROJECTS[0].title);
  });

  it('first card img alt matches PROJECTS[0].imageAlt', () => {
    const img: HTMLImageElement =
      fixture.nativeElement.querySelector('.mb-12.flex.flex-col img');
    expect(img.getAttribute('alt')).toBe(PROJECTS[0].imageAlt);
  });

  it('first card ownership label renders the correct display text', () => {
    const label: HTMLElement = fixture.nativeElement.querySelector(
      '.mb-12.flex.flex-col p'
    );
    expect(label.textContent?.trim()).toBe(
      OWNERSHIP_LABEL[PROJECTS[0].ownership]
    );
  });

  it('openWebsite calls window.open with noopener,noreferrer', () => {
    const openSpy = spyOn(window, 'open');
    const url = 'https://example.com/';
    component.openWebsite(url)();
    expect(openSpy).toHaveBeenCalledWith(url, '_blank', 'noopener,noreferrer');
  });
});
