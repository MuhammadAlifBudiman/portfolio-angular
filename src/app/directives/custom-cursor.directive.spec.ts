import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomCursorDirective } from './custom-cursor.directive';

@Component({
  template: '<div appCustomCursor></div>',
  imports: [CustomCursorDirective],
})
class HostComponent {}

describe('CustomCursorDirective — FR-F00L-5', () => {
  let fixture: ComponentFixture<HostComponent>;

  /** Stub the matchMedia query the directive checks for reduced motion. */
  function stubMatchMedia(reducedMotion: boolean): void {
    spyOn(window, 'matchMedia').and.returnValue({
      matches: reducedMotion,
    } as MediaQueryList);
  }

  /** Stub the user agent so the desktop/mobile branch is deterministic. */
  function stubUserAgent(value: string): void {
    spyOnProperty(navigator, 'userAgent', 'get').and.returnValue(value);
  }

  beforeEach(() => {
    TestBed.configureTestingModule({ imports: [HostComponent] });
  });

  afterEach(() => {
    document.querySelectorAll('.big-cursor').forEach((el) => el.remove());
  });

  function createDesktop(): void {
    stubMatchMedia(false);
    stubUserAgent('Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7)');
    fixture = TestBed.createComponent(HostComponent);
    fixture.detectChanges();
  }

  it('creates the cursor element and registers listeners on desktop', () => {
    const addSpy = spyOn(window, 'addEventListener').and.callThrough();
    createDesktop();

    expect(document.body.querySelector('.big-cursor')).toBeTruthy();
    const events = addSpy.calls.allArgs().map((args) => args[0]);
    expect(events).toContain('mousemove');
    expect(events).toContain('mousedown');
    expect(events).toContain('mouseup');
  });

  it('updates the cursor transform on mousemove', () => {
    createDesktop();
    window.dispatchEvent(new MouseEvent('mousemove', { clientX: 100, clientY: 200 }));

    const cursor = document.body.querySelector('.big-cursor') as HTMLElement;
    // Offset is clientX/Y - 20 (browser normalises the 0 to 0px).
    expect(cursor.style.transform).toContain('translate3d(80px, 180px, 0px)');
  });

  it('removes the cursor and listeners on destroy', () => {
    const removeSpy = spyOn(window, 'removeEventListener').and.callThrough();
    createDesktop();
    expect(document.body.querySelector('.big-cursor')).toBeTruthy();

    fixture.destroy();

    expect(document.body.querySelector('.big-cursor')).toBeNull();
    const events = removeSpy.calls.allArgs().map((args) => args[0]);
    expect(events).toContain('mousemove');
  });

  it('does not create a cursor on mobile user agents', () => {
    stubMatchMedia(false);
    stubUserAgent('Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X)');
    fixture = TestBed.createComponent(HostComponent);
    fixture.detectChanges();

    expect(document.body.querySelector('.big-cursor')).toBeNull();
  });

  it('does not create a cursor when reduced motion is preferred', () => {
    stubMatchMedia(true);
    stubUserAgent('Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7)');
    fixture = TestBed.createComponent(HostComponent);
    fixture.detectChanges();

    expect(document.body.querySelector('.big-cursor')).toBeNull();
  });
});
