import { Certification } from '../models/certification.model';

export const CERTIFICATIONS: readonly Certification[] = [
  {
    id: 'bkn-internship',
    credentialLinks: [
      {
        key: 'bkn',
        url: 'https://drive.google.com/file/d/1zg2GHWOy85qdYrIdigWeiggZqXfn37TF/view?usp=sharing',
      },
      {
        key: 'kemnaker',
        url: 'https://drive.google.com/file/d/1SwldY7hQSbDR8nNNFJSpV8Obf1l2Cb1w/view?usp=sharing',
      },
    ],
    issuedYear: '2026',
    category: 'professional',
  },
  {
    id: 'cs50w',
    credentialUrl: 'https://certificates.cs50.io/a08b92c0-5473-4cc1-91d5-944f2fad0a16.pdf?size=letter',
    issuedYear: '2023',
    category: 'program',
  },
  {
    id: 'cs50x',
    credentialUrl: 'https://certificates.cs50.io/d52593b1-9ba4-4b49-ad6c-05b361e5f89d.pdf?size=letter',
    issuedYear: '2023',
    category: 'program',
  },
  {
    id: 'postman-api-fundamentals',
    credentialUrl: 'https://api.badgr.io/public/assertions/D8ntBj7VT628HEBAsCG1iw',
    issuedYear: '2025',
    category: 'tool',
  },
  {
    id: 'dicoding-backend-js',
    credentialUrl: 'https://www.dicoding.com/certificates/NVP75MLVVXR0',
    issuedYear: '2025',
    category: 'course',
  },
  {
    id: '30-days-of-angular',
    credentialUrl: 'https://www.udemy.com/certificate/UC-238dbe1c-3b4f-41ad-80f4-136bd3141277/',
    issuedYear: '2025',
    category: 'course',
  },
  {
    id: 'aws-cloud-gen-ai',
    credentialUrl: 'https://www.dicoding.com/certificates/EYX4GDN56ZDL',
    issuedYear: '2025',
    category: 'course',
  },
  {
    id: 'git-github-bootcamp',
    credentialUrl: 'https://www.udemy.com/certificate/UC-a34ab311-e365-49ab-886f-be145aea95e6/',
    issuedYear: '2025',
    category: 'course',
  },
  {
    id: 'learningx-msib',
    credentialUrl: 'https://drive.google.com/file/d/1ExauUbF0nx4jQv58oiwl8luxYDaq3g1l/view?usp=sharing',
    issuedYear: '2023',
    category: 'program',
  },
];
