import { ProjectImageFit, ProjectImagePosition } from '../models/project.model';

/**
 * Structural (language-neutral) case-study model.
 *
 * Content lives in i18n (`caseStudies` key in `en.ts` / `id.ts`). This data only
 * declares which sections each case study renders and in what order, plus flags
 * for the access/confidentiality notes.
 *
 * Section heading is resolved via `caseStudies.sectionHeadings.<id>` and section
 * content via `caseStudies.<caseStudyId>.sections.<id>`.
 */
export interface CaseStudySection {
  /** e.g. 'overview', 'context', 'responsibilities', 'architecture', 'engineering-decisions', 'technology-stack' */
  id: string;
  contentType: 'paragraph' | 'list';
}

/** Stable diagram IDs matching the inline SVG renderer in CaseStudyDiagramComponent. */
export type CaseStudyDiagramId =
  | 'bkn-arch'
  | 'bkn-flow'
  | 'blog-arch'
  | 'patient-workflow'
  | 'taskmaster-flow'
  | 'portfolio-arch';

/** Diagram media rendered inline by CaseStudyDiagramComponent. Has no external src —
 *  the inline Angular SVG template is the single source of truth. */
export interface DiagramCaseStudyMedia {
  /** Stable id — used as i18n key suffix for altKey / captionKey. */
  id: string;
  type: 'architecture' | 'flow';
  /** Key into the inline SVG @switch renderer in CaseStudyDiagramComponent. */
  diagramId: CaseStudyDiagramId;
  altKey: string;
  captionKey?: string;
  afterSectionId?: string;
  minimumDisplayWidth?: number;
}

/** Screenshot or static image media item. */
export interface ImageCaseStudyMedia {
  id: string;
  type: 'screenshot';
  src: string;
  altKey: string;
  captionKey?: string;
  afterSectionId?: string;
  imageFit?: ProjectImageFit;
  imagePosition?: ProjectImagePosition;
  width?: number;
  height?: number;
}

/** Inline code / API response example rendered as a &lt;pre&gt;&lt;code&gt; block. */
export interface ApiExampleCaseStudyMedia {
  id: string;
  type: 'api-example';
  src: string;
  altKey: string;
  captionKey?: string;
  afterSectionId?: string;
  codeContent?: string;
  codeLanguage?: string;
}

/** Discriminated union of all case-study media item types. */
export type CaseStudyMedia = DiagramCaseStudyMedia | ImageCaseStudyMedia | ApiExampleCaseStudyMedia;

// Legacy union type kept for reference.
export type CaseStudyMediaType = 'screenshot' | 'architecture' | 'flow' | 'api-example';

export interface CaseStudy {
  id: string;
  sections: CaseStudySection[];
  /** Optional visual evidence (screenshots, architecture diagrams, flow diagrams). */
  media?: readonly CaseStudyMedia[];
  hasAccessNote?: boolean;
  hasConfidentialityNote?: boolean;
}

export const CASE_STUDIES: readonly CaseStudy[] = [
  {
    id: 'bkn-internal-workflow-api',
    sections: [
      { id: 'overview', contentType: 'paragraph' },
      { id: 'context', contentType: 'paragraph' },
      { id: 'responsibilities', contentType: 'list' },
      { id: 'architecture', contentType: 'paragraph' },
      { id: 'engineering-decisions', contentType: 'list' },
      { id: 'technology-stack', contentType: 'paragraph' },
    ],
    media: [
      {
        id: 'bkn-arch',
        type: 'architecture',
        diagramId: 'bkn-arch',
        altKey: 'caseStudies.bkn-internal-workflow-api.media.bkn-arch.alt',
        captionKey: 'caseStudies.bkn-internal-workflow-api.media.bkn-arch.caption',
        afterSectionId: 'architecture',
      },
      {
        id: 'bkn-flow',
        type: 'flow',
        diagramId: 'bkn-flow',
        altKey: 'caseStudies.bkn-internal-workflow-api.media.bkn-flow.alt',
        captionKey: 'caseStudies.bkn-internal-workflow-api.media.bkn-flow.caption',
        afterSectionId: 'engineering-decisions',
      },
    ],
    hasAccessNote: true,
    hasConfidentialityNote: true,
  },
  {
    id: 'blog-api-server',
    sections: [
      { id: 'overview', contentType: 'paragraph' },
      { id: 'context', contentType: 'paragraph' },
      { id: 'responsibilities', contentType: 'list' },
      { id: 'architecture', contentType: 'paragraph' },
      { id: 'engineering-decisions', contentType: 'list' },
      { id: 'technology-stack', contentType: 'paragraph' },
    ],
    media: [
      {
        id: 'blog-screenshot',
        type: 'screenshot',
        src: 'projects/blog-api-server.webp',
        altKey: 'caseStudies.blog-api-server.media.blog-screenshot.alt',
        captionKey: 'caseStudies.blog-api-server.media.blog-screenshot.caption',
        afterSectionId: 'overview',
      },
      {
        id: 'blog-arch',
        type: 'architecture',
        diagramId: 'blog-arch',
        altKey: 'caseStudies.blog-api-server.media.blog-arch.alt',
        captionKey: 'caseStudies.blog-api-server.media.blog-arch.caption',
        afterSectionId: 'architecture',
      },
      {
        id: 'blog-api-example',
        type: 'api-example',
        src: 'https://express-blog-dun.vercel.app/v1/articles',
        altKey: 'caseStudies.blog-api-server.media.blog-api-example.alt',
        captionKey: 'caseStudies.blog-api-server.media.blog-api-example.caption',
        afterSectionId: 'engineering-decisions',
        codeLanguage: 'json',
        codeContent: `GET /v1/articles — live response
{
  "code": 200,
  "status": "OK",
  "message": "Get Articles Success",
  "data": [],
  "meta": {
    "current_page": 1,
    "size_page": 0,
    "max_page": 0,
    "total_data": 0
  }
}`,
      },
    ],
    hasAccessNote: false,
  },
  {
    id: 'patient-management-system',
    sections: [
      { id: 'overview', contentType: 'paragraph' },
      { id: 'context', contentType: 'paragraph' },
      { id: 'responsibilities', contentType: 'list' },
      { id: 'technology-stack', contentType: 'paragraph' },
    ],
    media: [
      {
        id: 'patient-login',
        type: 'screenshot',
        src: 'projects/case-studies/patient-management-login.webp',
        altKey: 'caseStudies.patient-management-system.media.patient-login.alt',
        captionKey: 'caseStudies.patient-management-system.media.patient-login.caption',
        afterSectionId: 'context',
        imageFit: 'cover',
        imagePosition: 'top',
      },
      {
        id: 'patient-dashboard',
        type: 'screenshot',
        src: 'projects/case-studies/patient-management-dashboard.webp',
        altKey: 'caseStudies.patient-management-system.media.patient-dashboard.alt',
        captionKey: 'caseStudies.patient-management-system.media.patient-dashboard.caption',
        afterSectionId: 'responsibilities',
        imageFit: 'cover',
        imagePosition: 'top',
      },
      {
        id: 'patient-workflow',
        type: 'flow',
        diagramId: 'patient-workflow',
        altKey: 'caseStudies.patient-management-system.media.patient-workflow.alt',
        captionKey: 'caseStudies.patient-management-system.media.patient-workflow.caption',
        afterSectionId: 'technology-stack',
      },
    ],
    hasAccessNote: true,
  },
  {
    id: 'task-master',
    sections: [
      { id: 'overview', contentType: 'paragraph' },
      { id: 'context', contentType: 'paragraph' },
      { id: 'responsibilities', contentType: 'list' },
      { id: 'architecture', contentType: 'paragraph' },
      { id: 'technology-stack', contentType: 'paragraph' },
    ],
    media: [
      {
        id: 'taskmaster-screenshot',
        type: 'screenshot',
        src: 'projects/taskmaster.webp',
        altKey: 'caseStudies.task-master.media.taskmaster-screenshot.alt',
        captionKey: 'caseStudies.task-master.media.taskmaster-screenshot.caption',
        afterSectionId: 'overview',
      },
      {
        id: 'taskmaster-flow',
        type: 'flow',
        diagramId: 'taskmaster-flow',
        altKey: 'caseStudies.task-master.media.taskmaster-flow.alt',
        captionKey: 'caseStudies.task-master.media.taskmaster-flow.caption',
        afterSectionId: 'architecture',
      },
    ],
    hasAccessNote: false,
  },
  {
    id: 'portfolio-website',
    sections: [
      { id: 'overview', contentType: 'paragraph' },
      { id: 'context', contentType: 'paragraph' },
      { id: 'responsibilities', contentType: 'list' },
      { id: 'architecture', contentType: 'paragraph' },
      { id: 'technology-stack', contentType: 'paragraph' },
    ],
    media: [
      {
        id: 'portfolio-screenshot',
        type: 'screenshot',
        src: 'projects/portfolio-website.webp',
        altKey: 'caseStudies.portfolio-website.media.portfolio-screenshot.alt',
        captionKey: 'caseStudies.portfolio-website.media.portfolio-screenshot.caption',
        afterSectionId: 'overview',
      },
      {
        id: 'portfolio-arch',
        type: 'architecture',
        diagramId: 'portfolio-arch',
        altKey: 'caseStudies.portfolio-website.media.portfolio-arch.alt',
        captionKey: 'caseStudies.portfolio-website.media.portfolio-arch.caption',
        afterSectionId: 'architecture',
      },
    ],
    hasAccessNote: false,
  },
];
