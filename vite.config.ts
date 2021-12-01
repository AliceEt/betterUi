import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/export.ts'),
      name: 'HelloWord',
      fileName: (format) => `helloWord.${format}.ts`,
    },
    rollupOptions: {
      external: ['vue'],
      // input: ['src/components/hello/index.vue'],
      output: {
        globals: { vue: 'Vue' },
        // dir: 'dist',
        // entryFileNames: (chunkInfo) => {
        //   const absluteModuleId = chunkInfo.facadeModuleId
        //   const match = absluteModuleId.match(/src\/components\/\w+\/index\.ts/)

        //   if (match) {
        //     return match[0].replace('src/', '').replace('.ts', '.js')
        //   }
        // },
        // format: 'es',
        // chunkFileNames: 'common/[name][extname]'
      },
    },
  },
})
