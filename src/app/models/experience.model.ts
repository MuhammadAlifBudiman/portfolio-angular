export interface Experience {
  /** Stable id — matches i18n key prefix experience.items.<id>.* */
  id: string;
  /** Company/organisation name (not localised — proper noun). */
  company: string;
  /** Optional company logo image path relative to public/. */
  logoSrc?: string;
}
