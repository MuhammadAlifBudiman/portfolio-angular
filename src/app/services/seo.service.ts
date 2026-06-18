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
      const canonical = this.document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
      if (canonical) {
        canonical.href = meta.canonicalUrl;
      } else {
        const link = this.document.createElement('link');
        link.setAttribute('rel', 'canonical');
        link.href = meta.canonicalUrl;
        this.document.head.appendChild(link);
      }
    }

    this.metaService.updateTag({ property: 'og:title', content: meta.title });
    this.metaService.updateTag({ property: 'og:description', content: meta.description });
    this.metaService.updateTag({ property: 'og:type', content: meta.ogType ?? 'website' });

    const image = meta.image ?? this.defaultImage;
    this.metaService.updateTag({ property: 'og:image', content: image });
    this.metaService.updateTag({ name: 'twitter:title', content: meta.title });
    this.metaService.updateTag({ name: 'twitter:description', content: meta.description });
    this.metaService.updateTag({ name: 'twitter:image', content: image });
    this.metaService.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
  }

  /** Injects or replaces a JSON-LD script in head identified by scriptId.
   *  Idempotent: calling again with the same id replaces the previous content.
   *  Runs during SSG prerender so structured data lands in static HTML. */
  setStructuredData(json: Record<string, unknown>, scriptId: string): void {
    const head = this.document.head;
    let script = head.querySelector(`script[data-seo-id="${scriptId}"]`) as HTMLScriptElement | null;
    if (script) {
      script.textContent = JSON.stringify(json);
    } else {
      script = this.document.createElement('script');
      script.setAttribute('type', 'application/ld+json');
      script.setAttribute('data-seo-id', scriptId);
      script.textContent = JSON.stringify(json);
      head.appendChild(script);
    }
  }
}
