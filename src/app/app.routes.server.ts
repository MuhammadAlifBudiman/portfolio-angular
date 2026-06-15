import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  {
    path: 'projects/:slug',
    renderMode: RenderMode.Prerender,
    async getPrerenderParams() {
      return [
        { slug: 'bkn-internal-workflow-api' },
        { slug: 'blog-api-server' },
        { slug: 'patient-management-system' },
        { slug: 'task-master' },
        { slug: 'portfolio-website' },
      ];
    },
  },
  {
    path: '**',
    renderMode: RenderMode.Prerender,
  },
];
