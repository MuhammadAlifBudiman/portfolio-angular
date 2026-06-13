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

  it('should call t() for copyright and backToTop keys', () => {
    expect(langServiceSpy.t).toHaveBeenCalledWith('footer.copyright');
    expect(langServiceSpy.t).toHaveBeenCalledWith('footer.backToTop');
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
});
