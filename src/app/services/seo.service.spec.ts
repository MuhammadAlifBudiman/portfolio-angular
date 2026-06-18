import { TestBed } from '@angular/core/testing';
import { DOCUMENT } from '@angular/common';
import { Meta, Title } from '@angular/platform-browser';
import { SeoService } from './seo.service';

describe('SeoService', () => {
  let service: SeoService;
  let titleService: jasmine.SpyObj<Title>;
  let metaService: jasmine.SpyObj<Meta>;

  beforeEach(() => {
    titleService = jasmine.createSpyObj('Title', ['setTitle']);
    metaService = jasmine.createSpyObj('Meta', ['updateTag']);

    TestBed.configureTestingModule({
      providers: [
        SeoService,
        { provide: Title, useValue: titleService },
        { provide: Meta, useValue: metaService },
      ],
    });
    service = TestBed.inject(SeoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should set page title', () => {
    service.setMetadata({ title: 'Test Page', description: 'Desc' });
    expect(titleService.setTitle).toHaveBeenCalledWith('Test Page');
  });

  it('should update meta description', () => {
    service.setMetadata({ title: 'Test', description: 'My description' });
    expect(metaService.updateTag).toHaveBeenCalledWith({
      name: 'description',
      content: 'My description',
    });
  });

  it('should update OG tags', () => {
    service.setMetadata({ title: 'OG Test', description: 'OG Desc', ogType: 'profile' });
    expect(metaService.updateTag).toHaveBeenCalledWith({ property: 'og:title', content: 'OG Test' });
    expect(metaService.updateTag).toHaveBeenCalledWith({ property: 'og:type', content: 'profile' });
  });

  it('should set twitter:card to summary_large_image', () => {
    service.setMetadata({ title: 'Test', description: 'Desc' });
    expect(metaService.updateTag).toHaveBeenCalledWith({
      name: 'twitter:card',
      content: 'summary_large_image',
    });
  });

  it('should use provided image for og:image and twitter:image', () => {
    const image = 'https://muhammadalifbudiman.my.id/projects/taskmaster.webp';
    service.setMetadata({ title: 'Test', description: 'Desc', image });
    expect(metaService.updateTag).toHaveBeenCalledWith({ property: 'og:image', content: image });
    expect(metaService.updateTag).toHaveBeenCalledWith({ name: 'twitter:image', content: image });
  });

  it('should create canonical link element when none exists in head', () => {
    const doc = TestBed.inject(DOCUMENT);
    doc.querySelector('link[rel="canonical"]')?.remove();

    service.setMetadata({
      title: 'Test',
      description: 'Desc',
      canonicalUrl: 'https://muhammadalifbudiman.my.id/about-me',
    });

    const canonical = doc.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    expect(canonical).toBeTruthy();
    expect(canonical?.href).toBe('https://muhammadalifbudiman.my.id/about-me');
  });

  it('should inject structured data script with correct id and JSON', () => {
    const doc = TestBed.inject(DOCUMENT);
    const json = { '@context': 'https://schema.org', '@type': 'WebSite', name: 'Test Site' } as Record<string, unknown>;
    service.setStructuredData(json, 'test-schema');

    const script = doc.querySelector('script[data-seo-id="test-schema"]');
    expect(script).toBeTruthy();
    expect(script?.textContent).toBe(JSON.stringify(json));
  });

  it('should replace structured data script on second call with same id', () => {
    const doc = TestBed.inject(DOCUMENT);
    service.setStructuredData({ '@type': 'WebSite', name: 'First' } as Record<string, unknown>, 'test-schema-replace');
    service.setStructuredData({ '@type': 'WebSite', name: 'Second' } as Record<string, unknown>, 'test-schema-replace');

    const scripts = doc.querySelectorAll('script[data-seo-id="test-schema-replace"]');
    expect(scripts.length).toBe(1);
    expect(scripts[0].textContent).toContain('Second');
  });
});
