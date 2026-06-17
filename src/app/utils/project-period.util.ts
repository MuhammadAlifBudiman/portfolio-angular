import { Language } from '../models/language.model';
import { ProjectPeriod } from '../models/project.model';

const EN_PRESENT = 'Present';
const ID_PRESENT = 'Sekarang';

/**
 * Formats a `ProjectPeriod` into a display string for the given language.
 *
 * Examples:
 *   { startYear: 2023 }                    → "2023"
 *   { startYear: 2025, endYear: 2026 }     → "2025–2026"
 *   { startYear: 2025, ongoing: true }     → "2025–Present" (EN) / "2025–Sekarang" (ID)
 */
export function formatProjectPeriod(period: ProjectPeriod, lang: Language): string {
  const { startYear, endYear, ongoing } = period;
  if (ongoing) {
    const presentLabel = lang === 'id' ? ID_PRESENT : EN_PRESENT;
    return `${startYear}–${presentLabel}`;
  }
  if (endYear !== undefined) {
    return `${startYear}–${endYear}`;
  }
  return `${startYear}`;
}
