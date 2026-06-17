import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FooterComponent } from './footer.component';
import { LanguageService } from '../../services/language.service';

describe('FooterComponent', () => {
  let component: FooterComponent;
  let fixture: ComponentFixture<FooterComponent>;
  let langServiceSpy: jasmine.SpyObj<LanguageService>;

  beforeEach(async () => {
    langServiceSpy = jasmine.createSpyObj<LanguageService>('LanguageService', ['t']);
    langServiceSpy.t.and.callFake((key: string) => key);

    await TestBed.configureTestingModule({
      imports: [FooterComponent],
      providers: [{ provide: LanguageService, useValue: langServiceSpy }],
    }).compileComponents();

    fixture = TestBed.createComponent(FooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render a <footer> semantic element', () => {
    const el: HTMLElement = fixture.nativeElement;
    expect(el.querySelector('footer')).toBeTruthy();
  });

  it('should call t() for copyright, link, and backToTop keys', () => {
    expect(langServiceSpy.t).toHaveBeenCalledWith('footer.copyright');
    expect(langServiceSpy.t).toHaveBeenCalledWith('footer.backToTop');
    expect(langServiceSpy.t).toHaveBeenCalledWith('footer.github');
    expect(langServiceSpy.t).toHaveBeenCalledWith('footer.linkedin');
    expect(langServiceSpy.t).toHaveBeenCalledWith('footer.email');
    expect(langServiceSpy.t).toHaveBeenCalledWith('footer.resume');
  });

  it('should have a back-to-top button with an aria-label', () => {
    const btn: HTMLButtonElement | null = fixture.nativeElement.querySelector('button');
    expect(btn).toBeTruthy();
    expect(btn?.getAttribute('aria-label')).toBeTruthy();
  });

  it('scrollToTop() should call window.scrollTo', () => {
    const spy = spyOn(window, 'scrollTo');
    component.scrollToTop();
    expect(spy).toHaveBeenCalled();
  });

  it('renders expected footer links with safe external attributes', () => {
    const anchors = Array.from(fixture.nativeElement.querySelectorAll('a')) as HTMLAnchorElement[];
    const hrefs = anchors.map(anchor => anchor.getAttribute('href'));

    expect(hrefs).toContain('https://github.com/MuhammadAlifBudiman');
    expect(hrefs).toContain('https://www.linkedin.com/in/muhammad-alif-budiman/');
    expect(hrefs).toContain('mailto:muhammadalifbudiman0@gmail.com');
    expect(hrefs).toContain('resume.pdf');

    anchors
      .filter(anchor => anchor.getAttribute('href')?.startsWith('https://'))
      .forEach(anchor => {
        expect(anchor.getAttribute('target')).toBe('_blank');
        expect(anchor.getAttribute('rel')).toBe('noopener noreferrer');
      });
  });
});
