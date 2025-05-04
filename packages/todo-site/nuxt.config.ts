import {fileURLToPath} from 'node:url';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { 
    enabled: true 
  },
  imports: {
    autoImport: false,
  },
  alias: {
    '@my-root': fileURLToPath(new URL('../..', import.meta.url)), // root workspace folder
    '@my-packages': fileURLToPath(new URL('..', import.meta.url)), // packages folder
  },
  srcDir: 'src/',
  modules: ['@nuxt/eslint'],
})