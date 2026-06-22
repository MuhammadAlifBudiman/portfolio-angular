import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { ButtonComponent } from './button.component';
import { ButtonVariant } from './button.component';

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

  describe('variant input', () => {
    it('default variant: native button has h-[64px] class (hero size)', () => {
      component.variant = 'default';
      fixture.detectChanges();
      const button: HTMLButtonElement =
        fixture.nativeElement.querySelector('button');
      expect(button.className).toContain('h-[64px]');
    });

    it('default variant: native button retains mt-2.5', () => {
      component.variant = 'default';
      fixture.detectChanges();
      const button: HTMLButtonElement =
        fixture.nativeElement.querySelector('button');
      expect(button.className).toContain('mt-2.5');
    });

    it('compact variant: native button has h-10 class and NOT h-[64px]', () => {
      component.variant = 'compact';
      fixture.detectChanges();
      const button: HTMLButtonElement =
        fixture.nativeElement.querySelector('button');
      expect(button.className).toContain('h-10');
      expect(button.className).not.toContain('h-[64px]');
    });

    it('compact variant: native button uses mt-0 and NOT mt-2.5', () => {
      component.variant = 'compact';
      fixture.detectChanges();
      const button: HTMLButtonElement =
        fixture.nativeElement.querySelector('button');
      expect(button.className).toContain('mt-0');
      expect(button.className).not.toContain('mt-2.5');
    });

    it('text variant: native button has underline-offset-2 class and NOT h-[64px]', () => {
      component.variant = 'text';
      fixture.detectChanges();
      const button: HTMLButtonElement =
        fixture.nativeElement.querySelector('button');
      expect(button.className).toContain('underline-offset-2');
      expect(button.className).not.toContain('h-[64px]');
    });

    it('text variant: native button uses mt-0, h-10, and NOT mt-2.5', () => {
      component.variant = 'text';
      fixture.detectChanges();
      const button: HTMLButtonElement =
        fixture.nativeElement.querySelector('button');
      expect(button.className).toContain('mt-0');
      expect(button.className).toContain('h-10');
      expect(button.className).not.toContain('mt-2.5');
    });

    it('compact with newTab=true: href anchor has target="_blank"', () => {
      component.variant = 'compact';
      component.href = 'https://example.com';
      component.newTab = true;
      fixture.detectChanges();
      const anchor: HTMLAnchorElement =
        fixture.nativeElement.querySelector('a');
      expect(anchor.getAttribute('target')).toBe('_blank');
    });

    it('text with newTab=true: href anchor renders an inline SVG external-link icon', () => {
      component.variant = 'text';
      component.href = 'https://example.com';
      component.newTab = true;
      fixture.detectChanges();
      const anchor: HTMLAnchorElement =
        fixture.nativeElement.querySelector('a');
      // Raw ↗ character is replaced by an SVG for themed colour support
      expect(anchor.textContent).not.toContain('↗');
      const svg = anchor.querySelector('svg');
      expect(svg).toBeTruthy();
    });

    it('text with newTab=true: external SVG icon is aria-hidden', () => {
      component.variant = 'text';
      component.href = 'https://example.com';
      component.newTab = true;
      fixture.detectChanges();
      const svg = fixture.nativeElement.querySelector('a svg');
      expect(svg?.getAttribute('aria-hidden')).toBe('true');
    });

    it('text with newTab=true: external SVG uses stroke-current for theme-aware colour', () => {
      component.variant = 'text';
      component.href = 'https://example.com';
      component.newTab = true;
      fixture.detectChanges();
      const svg = fixture.nativeElement.querySelector('a svg');
      expect(svg?.getAttribute('class')).toContain('stroke-current');
    });

    it('text variant does not render the animated fill background layer', () => {
      component.variant = 'text';
      fixture.detectChanges();
      // The animated fill <div> must not be present for the text variant
      const fillDiv = fixture.nativeElement.querySelector('button div.absolute');
      expect(fillDiv).toBeNull();
    });

    it('compact variant retains the animated fill background layer', () => {
      component.variant = 'compact';
      fixture.detectChanges();
      const fillDiv = fixture.nativeElement.querySelector('button div.absolute');
      expect(fillDiv).toBeTruthy();
    });

    it('button host uses named group/button class', () => {
      component.variant = 'compact';
      fixture.detectChanges();
      const btn = fixture.nativeElement.querySelector('button');
      expect(btn?.className).toContain('group/button');
    });
  });

  describe('routerLink mode (routerLink provided)', () => {
    beforeEach(() => {
      component.routerLink = '/projects/my-project';
      component.buttonText = 'Case Study';
      component.ariaLabel = 'Case Study: My Project';
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

    it('sets aria-label on the routerLink anchor', () => {
      const anchor: HTMLAnchorElement =
        fixture.nativeElement.querySelector('a');
      expect(anchor.getAttribute('aria-label')).toBe('Case Study: My Project');
    });

    it('does NOT set target or rel on routerLink anchors (internal navigation)', () => {
      const anchor: HTMLAnchorElement =
        fixture.nativeElement.querySelector('a');
      expect(anchor.getAttribute('target')).toBeNull();
      expect(anchor.getAttribute('rel')).toBeNull();
    });

    it('displays buttonText inside the routerLink anchor', () => {
      const anchor: HTMLAnchorElement =
        fixture.nativeElement.querySelector('a');
      expect(anchor.textContent?.trim()).toBe('Case Study');
    });

    it('routerLink takes priority over href when both are set', () => {
      component.href = 'https://example.com';
      fixture.detectChanges();
      const anchor: HTMLAnchorElement =
        fixture.nativeElement.querySelector('a');
      // RouterLink anchor won't have [href] attribute pointing to the external URL
      expect(anchor.getAttribute('download')).toBeNull();
    });
  });
});
