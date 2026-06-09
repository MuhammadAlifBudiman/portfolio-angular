import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { AppComponent } from './app.component';

describe('AppComponent — FR-F00L-6', () => {
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
  });

  afterEach(() => {
    fixture.destroy();
    document.querySelectorAll('.big-cursor').forEach((el) => el.remove());
  });

  it('creates the root component', () => {
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('renders and attaches appCustomCursor without error', () => {
    expect(() => fixture.detectChanges()).not.toThrow();
  });
});
