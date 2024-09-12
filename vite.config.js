import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    lib: {
      entry: 'index.js',
      name: 'server',
      fileName: 'server',
      formats: ['cjs'],
    },
    outDir: 'build',
    sourcemap: true,
    emptyOutDir: true,
  },
});