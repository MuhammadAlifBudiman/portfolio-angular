export type ProjectOwnership = 'team' | 'personal' | 'client' | 'internal' | 'restricted';

export interface Project {
  /** Stable id — reused as card element id, @for track key, and i18n key prefix. */
  id: string;
  title: string;
  ownership: ProjectOwnership;
  imageSrc: string;
  url: string;
  stack: string[];
  linkStatus: 'live' | 'restricted' | 'unavailable';
  /**
   * Localised fields moved to i18n resources (`src/app/i18n/en.ts` / `id.ts`).
   * Kept optional here so existing tests that construct Project objects directly
   * do not need to be rewritten.
   */
  description?: string;
  imageAlt?: string;
  role?: string;
}
