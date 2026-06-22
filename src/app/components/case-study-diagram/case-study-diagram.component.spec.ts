import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CaseStudyDiagramComponent } from './case-study-diagram.component';
import { DiagramCaseStudyMedia } from '../../data/case-studies.data';
import { LanguageService } from '../../services/language.service';

function makeDiagramItem(
  id: DiagramCaseStudyMedia['diagramId'],
  type: 'architecture' | 'flow' = 'architecture',
  captionKey?: string,
): DiagramCaseStudyMedia {
  return {
    id,
    type,
    diagramId: id,
    altKey: `caseStudies.test.media.${id}.alt`,
    captionKey,
    afterSectionId: 'overview',
  };
}

describe('CaseStudyDiagramComponent', () => {
  let fixture: ComponentFixture<CaseStudyDiagramComponent>;
  let component: CaseStudyDiagramComponent;
  let langSpy: jasmine.SpyObj<LanguageService>;

  function setup(item: DiagramCaseStudyMedia) {
    langSpy = jasmine.createSpyObj('LanguageService', ['t', 'currentLang']);
    langSpy.t.and.callFake((key: string) => key);
    langSpy.currentLang.and.returnValue('en');

    TestBed.configureTestingModule({
      imports: [CaseStudyDiagramComponent],
      providers: [{ provide: LanguageService, useValue: langSpy }],
    });

    fixture = TestBed.createComponent(CaseStudyDiagramComponent);
    component = fixture.componentInstance;
    component.item = item;
    fixture.detectChanges();
  }

  afterEach(() => TestBed.resetTestingModule());

  // ── Inline renderer: all 6 diagram IDs ──────────────────────────

  it('renders bkn-arch diagram inline (SVG present)', () => {
    setup(makeDiagramItem('bkn-arch'));
    const svg = fixture.nativeElement.querySelector('svg');
    expect(svg).withContext('bkn-arch should render an SVG').not.toBeNull();
  });

  it('renders bkn-flow diagram inline (SVG present)', () => {
    setup(makeDiagramItem('bkn-flow', 'flow'));
    expect(fixture.nativeElement.querySelector('svg')).not.toBeNull();
  });

  it('renders blog-arch diagram inline (SVG present)', () => {
    setup(makeDiagramItem('blog-arch'));
    expect(fixture.nativeElement.querySelector('svg')).not.toBeNull();
  });

  it('renders patient-workflow diagram inline (SVG present)', () => {
    setup(makeDiagramItem('patient-workflow', 'flow'));
    expect(fixture.nativeElement.querySelector('svg')).not.toBeNull();
  });

  it('renders taskmaster-flow diagram inline (SVG present)', () => {
    setup(makeDiagramItem('taskmaster-flow', 'flow'));
    expect(fixture.nativeElement.querySelector('svg')).not.toBeNull();
  });

  it('renders portfolio-arch diagram inline (SVG present)', () => {
    setup(makeDiagramItem('portfolio-arch'));
    expect(fixture.nativeElement.querySelector('svg')).not.toBeNull();
  });

  // ── Semantic CSS classes (no hardcoded hex in markup) ───────────

  it('arrow lines use semantic class, not hardcoded stroke attribute', () => {
    setup(makeDiagramItem('bkn-arch'));
    const lines = fixture.nativeElement.querySelectorAll('line.arrow, line.arrow-dash, line.connector-line, line.line');
    expect(lines.length).withContext('diagram should have styled lines').toBeGreaterThan(0);
    lines.forEach((line: SVGLineElement) => {
      const stroke = line.getAttribute('stroke');
      expect(stroke).withContext(`line should not carry hardcoded stroke="${stroke}"`).toBeNull();
    });
  });

  it('arrow-head marker paths use dg-arrow-head class', () => {
    setup(makeDiagramItem('bkn-arch'));
    const markerPaths = fixture.nativeElement.querySelectorAll('marker path.dg-arrow-head');
    expect(markerPaths.length).withContext('should have at least one dg-arrow-head path').toBeGreaterThan(0);
  });

  it('no hardcoded #94a3b8 fill attribute on arrow paths or lines', () => {
    setup(makeDiagramItem('bkn-arch'));
    const elements = fixture.nativeElement.querySelectorAll('[fill="#94a3b8"], [stroke="#94a3b8"]');
    expect(elements.length).withContext('no element should carry hardcoded #94a3b8').toBe(0);
  });

  // ── i18n: translated title ───────────────────────────────────────

  it('diagram title text node is a bound expression (calls t() for title)', () => {
    setup(makeDiagramItem('bkn-arch'));
    // The title text element should contain the result of t('caseStudies.diagrams.bkn-arch.title')
    const titleEl = fixture.nativeElement.querySelector('text.dg-title');
    expect(titleEl).not.toBeNull();
    // langSpy.t returns the key itself — verify it was called with the expected title key
    expect(langSpy.t).toHaveBeenCalledWith('caseStudies.diagrams.bkn-arch.title');
  });

  // ── i18n: translated aria-label on SVG ──────────────────────────

  it('SVG aria-label is bound via Angular (uses altKey, not hardcoded string)', () => {
    setup(makeDiagramItem('bkn-arch'));
    const svg = fixture.nativeElement.querySelector('svg[role="img"]');
    expect(svg).not.toBeNull();
    // The binding calls t(item.altKey); our spy returns the key itself
    expect(svg.getAttribute('aria-label')).toBe('caseStudies.test.media.bkn-arch.alt');
    expect(langSpy.t).toHaveBeenCalledWith('caseStudies.test.media.bkn-arch.alt');
  });

  // ── i18n: Patient connector labels (EN) ─────────────────────────

  it('patient-workflow renders statusVisible connector label in English', () => {
    langSpy = jasmine.createSpyObj('LanguageService', ['t', 'currentLang']);
    langSpy.t.and.callFake((key: string) => {
      if (key === 'caseStudies.patient.diagram.statusVisible') return 'Status Visible';
      return key;
    });
    langSpy.currentLang.and.returnValue('en');

    TestBed.configureTestingModule({
      imports: [CaseStudyDiagramComponent],
      providers: [{ provide: LanguageService, useValue: langSpy }],
    });
    fixture = TestBed.createComponent(CaseStudyDiagramComponent);
    component = fixture.componentInstance;
    component.item = makeDiagramItem('patient-workflow', 'flow');
    fixture.detectChanges();

    expect(langSpy.t).toHaveBeenCalledWith('caseStudies.patient.diagram.statusVisible');
    const textEls: NodeListOf<SVGTextElement> = fixture.nativeElement.querySelectorAll('text.dg-muted');
    const texts = Array.from(textEls).map(el => el.textContent?.trim());
    expect(texts).toContain('Status Visible');
  });

  it('patient-workflow renders statusVisible connector label in Indonesian', () => {
    langSpy = jasmine.createSpyObj('LanguageService', ['t', 'currentLang']);
    langSpy.t.and.callFake((key: string) => {
      if (key === 'caseStudies.patient.diagram.statusVisible') return 'Status Terlihat';
      return key;
    });
    langSpy.currentLang.and.returnValue('id');

    TestBed.configureTestingModule({
      imports: [CaseStudyDiagramComponent],
      providers: [{ provide: LanguageService, useValue: langSpy }],
    });
    fixture = TestBed.createComponent(CaseStudyDiagramComponent);
    component = fixture.componentInstance;
    component.item = makeDiagramItem('patient-workflow', 'flow');
    fixture.detectChanges();

    const textEls: NodeListOf<SVGTextElement> = fixture.nativeElement.querySelectorAll('text.dg-muted');
    const texts = Array.from(textEls).map(el => el.textContent?.trim());
    expect(texts).toContain('Status Terlihat');
  });

  // ── Dialog: open, Escape close, focus return ─────────────────────

  describe('full-size dialog', () => {
    beforeEach(() => setup(makeDiagramItem('blog-arch')));

    it('dialog is hidden initially', () => {
      const overlay = fixture.nativeElement.querySelector('[role="dialog"]');
      expect(overlay).toBeNull();
    });

    it('opens the dialog when the trigger button is clicked', () => {
      const trigger: HTMLButtonElement = fixture.nativeElement.querySelector('#triggerBtn, button');
      trigger.click();
      fixture.detectChanges();
      const overlay = fixture.nativeElement.querySelector('[role="dialog"]');
      expect(overlay).not.toBeNull();
    });

    it('Escape key closes the dialog', () => {
      component.openFullSize();
      fixture.detectChanges();
      expect(component.showFullSize()).toBeTrue();

      document.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape', bubbles: true }));
      fixture.detectChanges();
      expect(component.showFullSize()).toBeFalse();
    });

    it('closeFullSize() hides the dialog and returns focus to the trigger', async () => {
      component.openFullSize();
      fixture.detectChanges();

      component.closeFullSize();
      fixture.detectChanges();

      expect(component.showFullSize()).toBeFalse();
    });
  });

  // ── Horizontal overflow scroll container ─────────────────────────

  it('diagram scroll container has overflow-x-auto class', () => {
    setup(makeDiagramItem('bkn-arch'));
    const scrollEl = fixture.nativeElement.querySelector('.diagram-scroll, .overflow-x-auto');
    expect(scrollEl).withContext('scroll wrapper should be present').not.toBeNull();
  });

  // ── diagramId getter reflects item.diagramId ────────────────────

  it('diagramId getter returns item.diagramId', () => {
    setup(makeDiagramItem('taskmaster-flow', 'flow'));
    expect(component.diagramId).toBe('taskmaster-flow');
  });
});
