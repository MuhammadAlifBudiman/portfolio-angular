import { formatProjectPeriod } from './project-period.util';
import { ProjectPeriod } from '../models/project.model';

describe('formatProjectPeriod', () => {
  it('returns single year when only startYear is set (EN)', () => {
    const p: ProjectPeriod = { startYear: 2023 };
    expect(formatProjectPeriod(p, 'en')).toBe('2023');
  });

  it('returns single year when only startYear is set (ID)', () => {
    const p: ProjectPeriod = { startYear: 2021 };
    expect(formatProjectPeriod(p, 'id')).toBe('2021');
  });

  it('returns en-dash range when startYear and endYear are set', () => {
    const p: ProjectPeriod = { startYear: 2025, endYear: 2026 };
    expect(formatProjectPeriod(p, 'en')).toBe('2025–2026');
    expect(formatProjectPeriod(p, 'id')).toBe('2025–2026');
  });

  it('returns "startYear–Present" in English for ongoing periods', () => {
    const p: ProjectPeriod = { startYear: 2025, ongoing: true };
    expect(formatProjectPeriod(p, 'en')).toBe('2025–Present');
  });

  it('returns "startYear–Sekarang" in Indonesian for ongoing periods', () => {
    const p: ProjectPeriod = { startYear: 2025, ongoing: true };
    expect(formatProjectPeriod(p, 'id')).toBe('2025–Sekarang');
  });

  it('ongoing flag takes precedence over endYear', () => {
    const p: ProjectPeriod = { startYear: 2025, endYear: 2026, ongoing: true };
    expect(formatProjectPeriod(p, 'en')).toBe('2025–Present');
    expect(formatProjectPeriod(p, 'id')).toBe('2025–Sekarang');
  });
});
