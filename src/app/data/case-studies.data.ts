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

export interface CaseStudy {
  id: string;
  sections: CaseStudySection[];
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
    hasAccessNote: false,
  },
];
