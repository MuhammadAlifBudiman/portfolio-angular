import { TestBed } from '@angular/core/testing';
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
});
