import { CASE_STUDIES } from './case-studies.data';
import { PROJECTS } from './projects.data';
import { EN } from '../i18n/en';
import { ID } from '../i18n/id';

describe('Portfolio project consistency', () => {
  const patient = PROJECTS.find(p => p.id === 'patient-management-system')!;

  it('marks Patient Management System as a live Northflank deployment with complete links', () => {
    expect(patient).toBeTruthy();
    expect(patient.linkStatus).toBe('live');
    expect(patient.imageSrc).toBe('projects/patient-management-system-card.webp');

    expect(patient.links).toContain(jasmine.objectContaining({
      type: 'demo',
      url: 'https://web--sistem-pengelolaan-pasien--5cd2xf2mwjg5.code.run/',
    }));
    expect(patient.links).toContain(jasmine.objectContaining({
      type: 'apiDocs',
      url: 'https://web--sistem-pengelolaan-pasien--5cd2xf2mwjg5.code.run/apidocs/',
    }));
    expect(patient.links).toContain(jasmine.objectContaining({
      type: 'github',
      url: 'https://github.com/MuhammadAlifBudiman/Sistem-Pengelolaan-Pasien',
    }));
    expect(patient.links).toContain(jasmine.objectContaining({
      type: 'caseStudy',
      url: '/projects/patient-management-system',
    }));
  });

  it('keeps the intended project selection at five featured and six other projects', () => {
    expect(PROJECTS.filter(p => p.featured).length).toBe(5);
    expect(PROJECTS.filter(p => !p.featured).length).toBe(6);
    expect(PROJECTS.some(p => /auction|thesis|skripsi|research|kaggle|sentiment|lstm|fasttext|notes/i.test(p.id))).toBeFalse();
  });

  it('uses Northflank wording in EN and ID copy without stale archive phrasing', () => {
    const enCopy = JSON.stringify(EN.caseStudies['patient-management-system']);
    const idCopy = JSON.stringify(ID.caseStudies!['patient-management-system']);

    expect(enCopy).toContain('Northflank');
    expect(idCopy).toContain('Northflank');
    expect(`${enCopy} ${idCopy}`).not.toMatch(/Glitch|shutdown|platform ditutup|archived demo|demo diarsipkan/i);
  });

  it('places Patient Management media after relevant sections and keeps diagrams uncropped', () => {
    const study = CASE_STUDIES.find(c => c.id === 'patient-management-system')!;
    const media = study.media ?? [];

    expect(media).toContain(jasmine.objectContaining({
      id: 'patient-login',
      src: 'projects/case-studies/patient-management-login.webp',
      afterSectionId: 'context',
      imageFit: 'cover',
      imagePosition: 'top',
    }));
    expect(media).toContain(jasmine.objectContaining({
      id: 'patient-dashboard',
      src: 'projects/case-studies/patient-management-dashboard.webp',
      afterSectionId: 'responsibilities',
      imagePosition: 'top',
    }));
    expect(media).toContain(jasmine.objectContaining({
      id: 'patient-workflow',
      src: 'projects/diagrams/patient-workflow.svg',
      afterSectionId: 'technology-stack',
      imageFit: 'contain',
    }));
  });
});
