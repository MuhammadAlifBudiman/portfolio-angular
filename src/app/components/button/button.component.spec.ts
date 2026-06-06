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
});
