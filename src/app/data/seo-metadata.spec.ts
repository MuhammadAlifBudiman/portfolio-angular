import { PROJECTS } from './projects.data';

describe('SEO metadata — project social images', () => {
  const featuredProjects = PROJECTS.filter(p => p.featured);
  const siteOrigin = 'https://muhammadalifbudiman.my.id/';

  it('should have exactly 5 featured projects', () => {
    expect(featuredProjects.length).toBe(5);
  });

  featuredProjects.forEach(p => {
    describe(`Project: ${p.title} (${p.id})`, () => {
      it('should have an absolute HTTPS socialImageSrc', () => {
        expect(p.socialImageSrc).toBeTruthy();
        expect(p.socialImageSrc).toMatch(/^https:\/\/muhammadalifbudiman\.my\.id\//);
      });

      it('should have a non-empty socialImageAltKey', () => {
        expect(p.socialImageAltKey).toBeTruthy();
        expect(typeof p.socialImageAltKey).toBe('string');
      });

      it('socialImageSrc should reference the same base image as imageSrc', () => {
        const filename = p.imageSrc.split('/').pop();
        expect(p.socialImageSrc).toContain(filename as string);
      });
    });
  });

  it('BKN project (restricted) should have no public github link', () => {
    const bkn = PROJECTS.find(p => p.id === 'bkn-internal-workflow-api');
    expect(bkn).toBeTruthy();
    const githubLink = bkn?.links.find(l => l.type === 'github');
    expect(githubLink).toBeUndefined();
  });

  it('BKN project socialImageSrc should be its safe card image (not a private screenshot)', () => {
    const bkn = PROJECTS.find(p => p.id === 'bkn-internal-workflow-api');
    expect(bkn?.socialImageSrc).toBe(`${siteOrigin}projects/bkn-backend-api.webp`);
  });
});
