import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    minify: true,
    lib: {
      entry: './dist/styles/default.css',
      formats: ['es'],
      name: 'style',
      fileName: 'style',
    },
    emptyOutDir: false,
  },
})
