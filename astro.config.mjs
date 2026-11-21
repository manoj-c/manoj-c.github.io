import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://manoj-c.github.io',
  integrations: [sitemap()],
});
