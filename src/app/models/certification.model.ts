export interface Certification {
  /** Stable id — matches i18n key prefix certifications.items.<id>.* */
  id: string;
  /** Optional URL to view/verify the credential. Leave undefined when not available. */
  credentialUrl?: string;
  /** Optional multiple credential URLs for certificates that have more than one verified document. */
  credentialLinks?: readonly { key: string; url: string }[];
  /** Four-digit year the credential was issued. Matches i18n certifications.items.<id>.period. */
  issuedYear?: string;
  /** Grouping category for display ordering. */
  category?: 'professional' | 'program' | 'course' | 'tool';
}
