import { defineConfig } from 'astro/config';

// The site is served from https://l-rrrr.github.io/odds-and-ends/
export default defineConfig({
  site: 'https://l-rrrr.github.io',
  base: '/odds-and-ends',
  trailingSlash: 'always',
});
