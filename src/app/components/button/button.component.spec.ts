import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { ButtonComponent } from './button.component';

describe('ButtonComponent', () => {
  let fixture: ComponentFixture<ButtonComponent>;
  let component: ButtonComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonComponent],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(ButtonComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('renders a native button so it is focusable and keyboard-operable', () => {
    fixture.detectChanges();
    const button: HTMLButtonElement =
      fixture.nativeElement.querySelector('button');
    expect(button).toBeTruthy();
    expect(button.type).toBe('button');
  });

  it('displays the provided buttonText', () => {
    component.buttonText = 'Send';
    fixture.detectChanges();
    const button: HTMLButtonElement =
      fixture.nativeElement.querySelector('button');
    expect(button.textContent?.trim()).toBe('Send');
  });

  it('invokes buttonAction when activated', () => {
    const action = jasmine.createSpy('buttonAction');
    component.buttonAction = action;
    fixture.detectChanges();
    const button: HTMLButtonElement =
      fixture.nativeElement.querySelector('button');
    button.click();
    expect(action).toHaveBeenCalledTimes(1);
  });

  describe('anchor mode (href provided)', () => {
    beforeEach(() => {
      component.href = 'resume.pdf';
      component.download = 'Muhammad-Alif-Budiman-Resume.pdf';
      component.ariaLabel = 'Download Resume';
      component.buttonText = 'Download Resume';
      fixture.detectChanges();
    });

    it('renders an <a> element, not a <button>', () => {
      const anchor: HTMLAnchorElement | null =
        fixture.nativeElement.querySelector('a');
      const button: HTMLButtonElement | null =
        fixture.nativeElement.querySelector('button');
      expect(anchor).toBeTruthy();
      expect(button).toBeNull();
    });

    it('sets href attribute on the anchor', () => {
      const anchor: HTMLAnchorElement =
        fixture.nativeElement.querySelector('a');
      expect(anchor.getAttribute('href')).toBe('resume.pdf');
    });

    it('sets download attribute on the anchor', () => {
      const anchor: HTMLAnchorElement =
        fixture.nativeElement.querySelector('a');
      expect(anchor.getAttribute('download')).toBe(
        'Muhammad-Alif-Budiman-Resume.pdf'
      );
    });

    it('sets aria-label on the anchor', () => {
      const anchor: HTMLAnchorElement =
        fixture.nativeElement.querySelector('a');
      expect(anchor.getAttribute('aria-label')).toBe('Download Resume');
    });

    it('does not set target or rel on internal anchors by default', () => {
      const anchor: HTMLAnchorElement =
        fixture.nativeElement.querySelector('a');
      expect(anchor.getAttribute('target')).toBeNull();
      expect(anchor.getAttribute('rel')).toBeNull();
    });

    it('sets safe new-tab attributes when requested', () => {
      component.newTab = true;
      fixture.detectChanges();

      const anchor: HTMLAnchorElement =
        fixture.nativeElement.querySelector('a');
      expect(anchor.getAttribute('target')).toBe('_blank');
      expect(anchor.getAttribute('rel')).toBe('noopener noreferrer');
    });

    it('displays buttonText inside the anchor', () => {
      const anchor: HTMLAnchorElement =
        fixture.nativeElement.querySelector('a');
      expect(anchor.textContent?.trim()).toBe('Download Resume');
    });
  });

  describe('button mode (no href)', () => {
    it('does not render an <a> element when href is absent', () => {
      fixture.detectChanges();
      const anchor: HTMLAnchorElement | null =
        fixture.nativeElement.querySelector('a');
      expect(anchor).toBeNull();
    });
  });
});
