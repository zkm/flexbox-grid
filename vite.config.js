import { defineConfig } from 'vite';

// Vite configuration for an HTML + SCSS project with sources under `src/`
export default defineConfig({
  root: 'src',
  base: './',
  server: {
    host: 'localhost', // bind only to localhost for safety
    open: false,
    strictPort: true,
  },
  preview: {
    host: 'localhost',
  },
  build: {
    outDir: '../dist',
    emptyOutDir: true,
  },
});
