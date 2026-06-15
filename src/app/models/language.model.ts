export type Language = 'en' | 'id';

export const SUPPORTED_LANGUAGES: Language[] = ['en', 'id'];

export const LANGUAGE_LABELS: Record<Language, string> = {
  en: 'EN',
  id: 'ID',
};

/** Per-project localised strings. */
export interface ProjectTranslation {
  description: string;
  imageAlt: string;
  role?: string;
}

/** Top-level translation resource shape.
 *  English (`en.ts`) must satisfy this interface completely.
 *  Indonesian (`id.ts`) may omit keys — missing values fall back to English at runtime.
 */
export interface Translation {
  nav: {
    aboutMe: string;
    experience: string;
    portfolio: string;
    certifications: string;
    technologies: string;
    contact: string;
  };
  footer: {
    copyright: string;
    backToTop: string;
  };
  header: {
    lightLabel: string;
    darkLabel: string;
    themeLabel: string;
    themeAriaLabel: string;
    langAriaLabel: string;
  };
  intro: {
    greeting: string;
    role: string;
    body: string;
    viewProjectsBtn: string;
    downloadResumeBtn: string;
    availability: string;
    location: string;
  };
  about: {
    eyebrow: string;
    title: string;
    p1: string;
    p2: string;
    p3: string;
    viewProjectsBtn: string;
    downloadResumeBtn: string;
    photoAlt: string;
  };
  portfolio: {
    eyebrow: string;
    title: string;
    viewProjectBtn: string;
    featuredTitle: string;
    otherTitle: string;
    filterAriaLabel: string;
    filters: {
      all: string;
      featured: string;
      backend: string;
      fullstack: string;
      frontend: string;
      learning: string;
      restricted: string;
    };
    cta: {
      demo: string;
      github: string;
      apiDocs: string;
      caseStudy: string;
      restricted: string;
      unavailable: string;
      archived: string;
    };
    status: {
      live: string;
      restricted: string;
      unavailable: string;
      archived: string;
    };
  };
  contact: {
    eyebrow: string;
    title: string;
    description: string;
    whatsappLabel: string;
    emailLabel: string;
    form: {
      name: string;
      email: string;
      subject: string;
      message: string;
      send: string;
      sending: string;
      successMsg: string;
      errorMsg: string;
      rateLimitMsg: string;
      invalidEmailMsg: string;
    };
  };
  ownership: {
    team: string;
    personal: string;
    client: string;
    internal: string;
    restricted: string;
  };
  seo: {
    home: { title: string; description: string };
    about: { title: string; description: string };
    portfolio: { title: string; description: string };
    contact: { title: string; description: string };
    project?: { titleSuffix: string };
  };
  experience: {
    eyebrow: string;
    title: string;
    groups: {
      professional: string;
      training: string;
    };
    relatedProject: string;
    items: Record<
      string,
      {
        role: string;
        period: string;
        location: string;
        description: string;
        contributions: string[];
      }
    >;
  };
  certifications: {
    eyebrow: string;
    title: string;
    items: Record<
      string,
      {
        name: string;
        issuer: string;
        period: string;
        note?: string;
        credentialLabel?: string;
      }
    >;
  };
  technologies: {
    eyebrow: string;
    title: string;
    groups: {
      backend: string;
      frontend: string;
      databases: string;
      tools: string;
    };
  };
  projects: Record<string, ProjectTranslation>;
  projectContext: Record<string, string>;
}

/** Partial translation — used for non-default language resources. */
export type PartialTranslation = DeepPartial<Translation>;

type DeepPartial<T> = {
  [K in keyof T]?: T[K] extends Record<string, unknown> ? DeepPartial<T[K]> : T[K];
};
