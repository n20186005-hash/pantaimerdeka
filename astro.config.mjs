// Garisan Pasang Surut: Astro config keeps all canonical URLs and sitemap URLs derived from the single `site` setting.
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

const configuredSite = process.env.PUBLIC_SITE_URL?.trim();
// Fallback keeps canonical/hreflang/sitemap/og:url emitting even when the build
// env omits PUBLIC_SITE_URL, so http:// variants are never indexed as duplicates.
const site = configuredSite ? new URL(configuredSite) : new URL('https://pantaimerdeka.com/');

export default defineConfig({
  site,
  integrations: site ? [sitemap()] : [],
  vite: { plugins: [tailwindcss()] }
});
