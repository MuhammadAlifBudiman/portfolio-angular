import { ComponentFixture, TestBed, fakeAsync, flushMicrotasks, tick } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { Title } from '@angular/platform-browser';

import { ContactComponent } from './contact.component';
import { EmailService } from '../../services/email.service';

describe('ContactComponent — FR-F00L-2', () => {
  let fixture: ComponentFixture<ContactComponent>;
  let component: ContactComponent;
  let emailServiceSpy: jasmine.SpyObj<EmailService>;

  /** Set a valid value on the rendered email input so the guard passes. */
  function setEmail(value: string): void {
    const input = component.contactForm.nativeElement.querySelector(
      'input[name="email"]'
    ) as HTMLInputElement;
    input.value = value;
  }

  beforeEach(async () => {
    emailServiceSpy = jasmine.createSpyObj<EmailService>('EmailService', [
      'sendEmail',
    ]);

    await TestBed.configureTestingModule({
      imports: [ContactComponent],
      providers: [
        provideRouter([]),
        { provide: EmailService, useValue: emailServiceSpy },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(ContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('sets the document title on init', () => {
    expect(TestBed.inject(Title).getTitle()).toBe(
      'Contact — Muhammad Alif Budiman'
    );
  });

  describe('sendData() guards', () => {
    it('returns early while a send is already in flight', () => {
      component.isLoading = true;
      component.sendData();
      expect(emailServiceSpy.sendEmail).not.toHaveBeenCalled();
      expect(component.isLoading).toBeTrue();
    });

    it('rejects an invalid email without calling the email service', () => {
      setEmail('not-an-email');
      component.sendData();
      expect(emailServiceSpy.sendEmail).not.toHaveBeenCalled();
      expect(component.alertMessage).toBe('Please enter a valid email address.');
      expect(component.isLoading).toBeFalse();
    });
  });

  describe('successful send', () => {
    beforeEach(() => {
      emailServiceSpy.sendEmail.and.returnValue(Promise.resolve({} as any));
    });

    it('populates the hidden time input before sending', fakeAsync(() => {
      // Compute expected before sendData() so both new Date() calls happen in
      // the same synchronous tick — jasmine.clock() cannot mock Date inside
      // Angular's fakeAsync zone (zone.js intercepts timers first).
      const expected = new Date().toLocaleString('en-US', {
        dateStyle: 'medium',
        timeStyle: 'short',
        timeZone: 'UTC',
      });
      setEmail('alif@example.com');
      component.sendData();
      const timeInput = component.contactForm.nativeElement.querySelector(
        'input[name="time"]'
      ) as HTMLInputElement;
      expect(timeInput.value).toBe(expected);
      flushMicrotasks();
    }));

    it('shows the success alert, resets the form, and clears loading', fakeAsync(() => {
      setEmail('alif@example.com');
      const resetSpy = spyOn(
        component.contactForm.nativeElement,
        'reset'
      ).and.callThrough();

      component.sendData();
      expect(component.isLoading).toBeTrue();

      flushMicrotasks();

      expect(emailServiceSpy.sendEmail).toHaveBeenCalledTimes(1);
      expect(component.alertMessage).toBe(
        'Your message has been sent successfully!'
      );
      expect(resetSpy).toHaveBeenCalled();
      expect(component.isLoading).toBeFalse();
    }));

    it('enforces a 30-second cooldown after a successful send', fakeAsync(() => {
      setEmail('alif@example.com');
      component.sendData();
      flushMicrotasks();
      expect(emailServiceSpy.sendEmail).toHaveBeenCalledTimes(1);

      // Immediate retry is blocked by the cooldown.
      setEmail('alif@example.com');
      component.sendData();
      expect(component.alertMessage).toBe(
        'Please wait 30 seconds before sending again.'
      );
      expect(emailServiceSpy.sendEmail).toHaveBeenCalledTimes(1);

      // After the cooldown elapses, sending is allowed again.
      tick(30_000);
      setEmail('alif@example.com');
      component.sendData();
      flushMicrotasks();
      expect(emailServiceSpy.sendEmail).toHaveBeenCalledTimes(2);
    }));
  });

  describe('failed send', () => {
    it('shows the error alert and clears loading without setting a cooldown', fakeAsync(() => {
      emailServiceSpy.sendEmail.and.returnValue(
        Promise.reject(new Error('boom'))
      );
      setEmail('alif@example.com');

      component.sendData();
      flushMicrotasks();

      expect(component.alertMessage).toBe(
        'Failed to send your message. Please try again.'
      );
      expect(component.isLoading).toBeFalse();

      // No cooldown was recorded, so a retry calls the service again.
      component.sendData();
      flushMicrotasks();
      expect(emailServiceSpy.sendEmail).toHaveBeenCalledTimes(2);
    }));
  });

  describe('pageMode layout class binding', () => {
    it('root element has wrapper class when pageMode is true (default)', () => {
      const root: HTMLElement = fixture.nativeElement.querySelector('div');
      expect(root.classList).toContain('wrapper');
      expect(root.classList).not.toContain('section-wrapper');
    });

    it('root element has section-wrapper class when pageMode is false', () => {
      component.pageMode = false;
      fixture.detectChanges();
      const root: HTMLElement = fixture.nativeElement.querySelector('div');
      expect(root.classList).toContain('section-wrapper');
      expect(root.classList).not.toContain('wrapper');
    });
  });

  it('uses stronger tokenized border and focus contrast on form controls', () => {
    const controls = fixture.nativeElement.querySelectorAll(
      'input:not([type="hidden"]), textarea'
    ) as NodeListOf<HTMLInputElement | HTMLTextAreaElement>;

    expect(controls.length).toBe(4);
    controls.forEach((control) => {
      expect(control.className).toContain('border-2');
      expect(control.className).toContain('border-light-text-secondary/40');
      expect(control.className).toContain('focus-visible:border-light-accent-hover');
      expect(control.className).toContain('dark:focus-visible:border-dark-accent-hover');
    });
  });
});
