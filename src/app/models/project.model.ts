export type ProjectOwnership = 'team' | 'personal' | 'client' | 'internal' | 'restricted';

export interface Project {
  /** Stable id — reused as card element id and @for track key. */
  id: string;
  title: string;
  ownership: ProjectOwnership;
  description: string;
  imageSrc: string;
  imageAlt: string;
  url: string;
  stack: string[];
  role?: string;
  linkStatus: 'live' | 'restricted' | 'unavailable';
}

/** Display label for the ownership tag — preserves current rendered text. */
export const OWNERSHIP_LABEL: Record<ProjectOwnership, string> = {
  team: 'Team Project',
  personal: 'Personal Project',
  client: 'Client Project',
  internal: 'Internal Project',
  restricted: 'Restricted Project',
};
