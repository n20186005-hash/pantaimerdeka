// Garisan Pasang Surut: Astro config keeps all canonical URLs and sitemap URLs derived from the single `site` setting.
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

const configuredSite = process.env.PUBLIC_SITE_URL?.trim();
const site = configuredSite ? new URL(configuredSite) : undefined;

export default defineConfig({
  site,
  integrations: site ? [sitemap()] : [],
  vite: { plugins: [tailwindcss()] }
});
