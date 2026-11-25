// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // Dominio oficial. De esta URL dependen el sitemap, la URL canónica,
  // los datos estructurados y la vista previa al compartir (WhatsApp, redes).
  site: 'https://www.cedich.com.ar',

  // URLs sin barra final, consistentes con la navegación interna
  trailingSlash: 'never',

  integrations: [
    react(),
    sitemap({
      filter: (page) => !page.includes('/404'),
      lastmod: new Date(),
    }),
  ],

  vite: {
    plugins: [tailwindcss()]
  }
});