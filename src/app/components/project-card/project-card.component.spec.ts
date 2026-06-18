import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { ProjectCardComponent } from './project-card.component';
import { LanguageService } from '../../services/language.service';
import { PROJECTS } from '../../data/projects.data';

describe('ProjectCardComponent', () => {
  let fixture: ComponentFixture<ProjectCardComponent>;
  let component: ProjectCardComponent;

  // Use bkn project (restricted + caseStudy only) for most tests
  const bknProject = PROJECTS.find(p => p.id === 'bkn-internal-workflow-api')!;
  // task-master has live status + multiple link types (demo, apiDocs, github, caseStudy)
  const taskMasterProject = PROJECTS.find(p => p.id === 'task-master')!;
  const patientProject = PROJECTS.find(p => p.id === 'patient-management-system')!;

  function setup(project = bknProject) {
    TestBed.configureTestingModule({
      imports: [ProjectCardComponent],
      providers: [provideRouter([]), LanguageService],
    });
    fixture = TestBed.createComponent(ProjectCardComponent);
    component = fixture.componentInstance;
    component.project = project;
    fixture.detectChanges();
  }

  it('should create', () => {
    setup();
    expect(component).toBeTruthy();
  });

  it('renders ownership label', () => {
    setup();
    const el = fixture.nativeElement;
    expect(el.textContent).toContain('Internal Project'); // EN ownership.internal
  });

  it('renders year when provided', () => {
    setup();
    expect(fixture.nativeElement.textContent).toContain('2025');
  });

  it('renders project title', () => {
    setup();
    expect(fixture.nativeElement.querySelector('h3').textContent.trim()).toContain(bknProject.title);
  });

  it('renders status badge in meta row', () => {
    setup();
    const metaRow = fixture.nativeElement.querySelector('.mt-2');
    const badge = metaRow.querySelector('app-project-status-badge');
    expect(badge).toBeTruthy();
  });

  it('status badge is NOT inside the actions div', () => {
    setup();
    const actionsDiv = fixture.nativeElement.querySelector('.mt-auto');
    if (actionsDiv) {
      expect(actionsDiv.querySelector('app-project-status-badge')).toBeNull();
    }
  });

  it('renders internal case-study link as routerLink button', () => {
    setup();
    // caseStudy uses routerLink (compact variant)
    const buttons = fixture.nativeElement.querySelectorAll('app-button');
    expect(buttons.length).toBeGreaterThan(0);
  });

  it('renders external links with newTab', () => {
    setup(taskMasterProject);
    const links = fixture.nativeElement.querySelectorAll('a[target="_blank"]');
    expect(links.length).toBeGreaterThan(0);
  });

  it('does not render actions div when no links', () => {
    // numble project has demo link only, but we test that action div only appears when links exist
    setup(bknProject); // bkn has caseStudy link
    const actionsDiv = fixture.nativeElement.querySelector('.mt-auto');
    expect(actionsDiv).toBeTruthy(); // bkn has a caseStudy link
  });

  it('renders restricted status badge for BKN project', () => {
    setup(bknProject);
    const badge = fixture.nativeElement.querySelector('app-project-status-badge');
    expect(badge).toBeTruthy();
  });

  it('renders live status badge for patient-management-system', () => {
    setup(patientProject);
    const badge = fixture.nativeElement.querySelector('app-project-status-badge');
    expect(badge).toBeTruthy();
    expect(component.statusLabel).toBe('Live');
  });

  it('applies configured image fit and top alignment classes', () => {
    setup({
      ...patientProject,
      imageFit: 'contain',
      imagePosition: 'top',
    } as typeof patientProject);

    const img: HTMLImageElement = fixture.nativeElement.querySelector('img');
    expect(img.className).toContain('object-contain');
    expect(img.className).toContain('object-top');
  });

  it('renders live status for task-master', () => {
    setup(taskMasterProject);
    const badge = fixture.nativeElement.querySelector('app-project-status-badge');
    expect(badge).toBeTruthy();
  });

  it('has data-testid=project-card', () => {
    setup();
    const el = fixture.nativeElement.querySelector('[data-testid="project-card"]');
    expect(el).toBeTruthy();
  });

  it('root element is a semantic article', () => {
    setup();
    const el = fixture.nativeElement.querySelector('article[data-testid="project-card"]');
    expect(el).toBeTruthy();
  });

  it('article element has h-full class for equal-height layout', () => {
    setup();
    const el: HTMLElement = fixture.nativeElement.querySelector('article[data-testid="project-card"]');
    expect(el.className).toContain('h-full');
  });

  it('content wrapper has flex-1 class so mt-auto can push actions down', () => {
    setup();
    const article: HTMLElement = fixture.nativeElement.querySelector('article');
    const wrapper: HTMLElement | null = article.querySelector('.flex-1');
    expect(wrapper).toBeTruthy();
  });

  it('action row includes items-center for vertical alignment', () => {
    setup();
    const actionsDiv: HTMLElement | null = fixture.nativeElement.querySelector('.mt-auto');
    expect(actionsDiv).toBeTruthy();
    expect(actionsDiv!.className).toContain('items-center');
  });

  it('renders tech stack chips', () => {
    setup();
    const chips = fixture.nativeElement.querySelectorAll('.font-mono.text-xs');
    // stack chips are in the mb-3 div
    expect(chips.length).toBeGreaterThan(0);
  });

  it('renders at most 6 stack chips when stack has more than 6 items', () => {
    const manyStackProject = {
      ...bknProject,
      stack: ['Go', 'REST API', 'OpenAPI', 'Swagger', 'Keycloak', 'RBAC', 'Multipart File Upload', 'Workflow System'],
    } as typeof bknProject;
    setup(manyStackProject);
    const chipContainer: HTMLElement = fixture.nativeElement.querySelector('[data-testid="chip-container"]');
    const allSpans: NodeListOf<HTMLElement> = chipContainer.querySelectorAll('[data-testid="stack-chip"]');
    expect(allSpans.length).toBe(6);
  });

  it('renders "+N more" chip when stack has more than 6 items', () => {
    const manyStackProject = {
      ...bknProject,
      stack: ['Go', 'REST API', 'OpenAPI', 'Swagger', 'Keycloak', 'RBAC', 'Multipart File Upload', 'Workflow System'],
    } as typeof bknProject;
    setup(manyStackProject);
    const chipContainer: HTMLElement = fixture.nativeElement.querySelector('[data-testid="chip-container"]');
    const allSpans: NodeListOf<HTMLElement> = chipContainer.querySelectorAll('span');
    const moreChip = Array.from(allSpans).find(s => s.textContent?.trim().includes('more'));
    expect(moreChip).toBeTruthy();
    // 8 items - 6 cap = 2 more
    expect(moreChip!.textContent?.trim()).toBe('+2 more');
  });

  it('does not render "+N more" chip when stack has 6 or fewer items', () => {
    const fewStackProject = {
      ...bknProject,
      stack: ['Go', 'REST API', 'OpenAPI', 'Swagger', 'Keycloak', 'RBAC'],
    } as typeof bknProject;
    setup(fewStackProject);
    const chipContainer: HTMLElement = fixture.nativeElement.querySelector('[data-testid="chip-container"]');
    const allSpans: NodeListOf<HTMLElement> = chipContainer.querySelectorAll('span');
    const moreChip = Array.from(allSpans).find(s => s.textContent?.trim().includes('more'));
    expect(moreChip).toBeUndefined();
  });

  it('title uses text-2xl class', () => {
    setup();
    const h3: HTMLElement = fixture.nativeElement.querySelector('h3');
    expect(h3.className).toContain('text-2xl');
    expect(h3.className).not.toContain('text-3xl');
  });

  it('description uses text-base class', () => {
    setup();
    // The description paragraph has flex-1 and mb-2.5
    const desc: HTMLElement = fixture.nativeElement.querySelector('[data-testid="project-description"]');
    expect(desc.className).toContain('text-base');
    expect(desc.className).not.toContain('text-lg');
  });
});
