import {
  ComponentFixture,
  TestBed,
  fakeAsync,
  tick,
} from '@angular/core/testing';

import { ThemeSelectorComponent } from './theme-selector.component';
import { ThemeService } from '../../services/theme.service';

describe('ThemeSelectorComponent — FR-F00L-4', () => {
  let fixture: ComponentFixture<ThemeSelectorComponent>;
  let component: ThemeSelectorComponent;
  let themeService: ThemeService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ThemeSelectorComponent],
    }).compileComponents();

    themeService = TestBed.inject(ThemeService);
    fixture = TestBed.createComponent(ThemeSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('toggleOpen() flips the isOpen signal', () => {
    expect(component.isOpen()).toBeFalse();
    component.toggleOpen();
    expect(component.isOpen()).toBeTrue();
    component.toggleOpen();
    expect(component.isOpen()).toBeFalse();
  });

  it('selectTheme() delegates to ThemeService.applyTheme and closes the dropdown', () => {
    const applySpy = spyOn(themeService, 'applyTheme');
    component.isOpen.set(true);

    component.selectTheme('ocean');

    expect(applySpy).toHaveBeenCalledWith('ocean');
    expect(component.isOpen()).toBeFalse();
  });

  describe('button keyboard navigation', () => {
    it('Escape closes the dropdown', () => {
      component.isOpen.set(true);
      component.onButtonKeydown(new KeyboardEvent('keydown', { key: 'Escape' }));
      expect(component.isOpen()).toBeFalse();
    });

    it('ArrowDown opens the dropdown and focuses the first option', fakeAsync(() => {
      component.onButtonKeydown(
        new KeyboardEvent('keydown', { key: 'ArrowDown' })
      );
      fixture.detectChanges();
      tick();

      expect(component.isOpen()).toBeTrue();
      const firstOption = fixture.nativeElement.querySelector(
        '[role="option"]'
      ) as HTMLElement;
      expect(document.activeElement).toBe(firstOption);
    }));
  });

  describe('option keyboard navigation', () => {
    it('Enter selects the focused theme', () => {
      const selectSpy = spyOn(component, 'selectTheme');
      component.onOptionKeydown(
        new KeyboardEvent('keydown', { key: 'Enter' }),
        'ember',
        2
      );
      expect(selectSpy).toHaveBeenCalledWith('ember');
    });

    it('Escape closes the dropdown', () => {
      component.isOpen.set(true);
      fixture.detectChanges();
      component.onOptionKeydown(
        new KeyboardEvent('keydown', { key: 'Escape' }),
        'ocean',
        1
      );
      expect(component.isOpen()).toBeFalse();
    });
  });

  describe('outside-click handling', () => {
    it('closes the dropdown when clicking outside the component', () => {
      component.isOpen.set(true);
      component.onDocumentClick({ target: document.body } as unknown as MouseEvent);
      expect(component.isOpen()).toBeFalse();
    });

    it('keeps the dropdown open when clicking inside the component', () => {
      component.isOpen.set(true);
      component.onDocumentClick({
        target: fixture.nativeElement,
      } as unknown as MouseEvent);
      expect(component.isOpen()).toBeTrue();
    });
  });
});
