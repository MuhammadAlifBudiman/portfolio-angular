import { TestBed } from '@angular/core/testing';
import emailjs from '@emailjs/browser';

import { EmailService } from './email.service';

describe('EmailService — FR-F00L-1', () => {
  let service: EmailService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmailService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('delegates to emailjs.sendForm and resolves on success', async () => {
    const form = document.createElement('form');
    const response = { status: 200, text: 'OK' };
    const sendFormSpy = spyOn(emailjs, 'sendForm').and.resolveTo(
      response as any
    );

    const result = await service.sendEmail(form);

    expect(sendFormSpy).toHaveBeenCalledTimes(1);
    // The HTMLFormElement is the third positional argument to sendForm.
    expect(sendFormSpy.calls.mostRecent().args[2]).toBe(form);
    expect(result).toEqual(response as any);
  });

  it('rejects when emailjs.sendForm rejects', async () => {
    spyOn(emailjs, 'sendForm').and.rejectWith(new Error('network error'));

    await expectAsync(
      service.sendEmail(document.createElement('form'))
    ).toBeRejected();
  });
});
