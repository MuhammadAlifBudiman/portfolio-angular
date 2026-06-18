export type ProjectOwnership = 'team' | 'personal' | 'client' | 'internal' | 'restricted';

export type ProjectCategory = 'backend' | 'fullstack' | 'frontend' | 'learning' | 'restricted';

export type ProjectLinkStatus = 'live' | 'restricted' | 'archived' | 'unavailable';

export type ProjectImageFit = 'cover' | 'contain';

export type ProjectImagePosition = 'center' | 'top';

export interface ProjectLink {
  type: 'demo' | 'github' | 'apiDocs' | 'caseStudy' | 'liveApi';
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

/** Typed date range for a project. Replaces the bare `year` string for ongoing/range projects. */
export interface ProjectPeriod {
  /** Start year (four-digit). */
  startYear: number;
  /** End year for a known fixed range (four-digit). Omit for single-year or ongoing. */
  endYear?: number;
  /** True when the project is still active. Renders as "Present" (EN) / "Sekarang" (ID). */
  ongoing?: boolean;
}

export interface Project {
  /** Stable id — reused as card element id, @for track key, and i18n key prefix. */
  id: string;
  title: string;
  ownership: ProjectOwnership;
  imageSrc: string;
  imageFit?: ProjectImageFit;
  imagePosition?: ProjectImagePosition;
  /** @deprecated Cards should read `links` instead. Kept for backward compatibility. */
  url?: string;
  stack: string[];
  linkStatus: ProjectLinkStatus;
  featured: boolean;
  categories: ProjectCategory[];
  /** Four-digit year or range (e.g. '2024', '2025–2026'). Omit when unknown.
   * @deprecated Use `period` instead for typed, language-aware rendering.
   */
  year?: string;
  /** Typed date period. When present, use `formatProjectPeriod` to render instead of `year`. */
  period?: ProjectPeriod;
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
  /** Absolute HTTPS URL for og:image / twitter:image on the project detail page.
   *  Reuses the existing card WebP at the canonical origin. */
  socialImageSrc?: string;
  /** i18n key for the social image alt text (e.g. 'projects.task-master.imageAlt'). */
  socialImageAltKey?: string;
}
