export interface Certification {
  /** Stable id — matches i18n key prefix certifications.items.<id>.* */
  id: string;
  /** Optional URL to view/verify the credential. Leave undefined when not available. */
  credentialUrl?: string;
}
