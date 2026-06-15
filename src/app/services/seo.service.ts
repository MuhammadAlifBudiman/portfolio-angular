import { Injectable, inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Meta, Title } from '@angular/platform-browser';

export interface SeoMetadata {
  title: string;
  description: string;
  canonicalUrl?: string;
  ogType?: 'website' | 'article' | 'profile';
  image?: string;
}

@Injectable({ providedIn: 'root' })
export class SeoService {
  private titleService = inject(Title);
  private metaService = inject(Meta);
  private document = inject(DOCUMENT);

  readonly defaultImage = 'https://muhammadalifbudiman.my.id/my-photo.png';
  readonly siteUrl = 'https://muhammadalifbudiman.my.id';

  setMetadata(meta: SeoMetadata): void {
    this.titleService.setTitle(meta.title);
    this.metaService.updateTag({ name: 'description', content: meta.description });

    if (meta.canonicalUrl) {
      this.metaService.updateTag({ property: 'og:url', content: meta.canonicalUrl });
      // update canonical link element if present
      const canonical = this.document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
      if (canonical) canonical.href = meta.canonicalUrl;
    }

    this.metaService.updateTag({ property: 'og:title', content: meta.title });
    this.metaService.updateTag({ property: 'og:description', content: meta.description });
    this.metaService.updateTag({ property: 'og:type', content: meta.ogType ?? 'website' });

    const image = meta.image ?? this.defaultImage;
    this.metaService.updateTag({ property: 'og:image', content: image });
    this.metaService.updateTag({ name: 'twitter:title', content: meta.title });
    this.metaService.updateTag({ name: 'twitter:description', content: meta.description });
    this.metaService.updateTag({ name: 'twitter:image', content: image });
  }
}
