export type ProjectOwnership = 'team' | 'personal' | 'client' | 'internal' | 'restricted';

export type ProjectCategory = 'backend' | 'fullstack' | 'frontend' | 'learning' | 'restricted';

export interface ProjectLink {
  type: 'demo' | 'github' | 'apiDocs' | 'caseStudy';
  url: string;
}

export type ProjectContextType =
  | 'professional'
  | 'program'
  | 'bootcamp'
  | 'course'
  | 'independent';

export interface ProjectContext {
  type: ProjectContextType;
  /** i18n key suffix under `projectContext.<id>` */
  id: string;
  /** Links to an Experience entry */
  relatedExperienceId?: string;
}

export interface Project {
  /** Stable id — reused as card element id, @for track key, and i18n key prefix. */
  id: string;
  title: string;
  ownership: ProjectOwnership;
  imageSrc: string;
  /** @deprecated Cards should read `links` instead. Kept for backward compatibility. */
  url?: string;
  stack: string[];
  linkStatus: 'live' | 'restricted' | 'unavailable';
  featured: boolean;
  categories: ProjectCategory[];
  /** Four-digit year or range (e.g. '2024', '2025–2026'). Omit when unknown. */
  year?: string;
  /** Authoritative CTA list — replaces `url` in card rendering. */
  links: ProjectLink[];
  /**
   * Localised fields moved to i18n resources (`src/app/i18n/en.ts` / `id.ts`).
   * Kept optional here so existing tests that construct Project objects directly
   * do not need to be rewritten.
   */
  description?: string;
  imageAlt?: string;
  role?: string;
  context?: ProjectContext;
}
