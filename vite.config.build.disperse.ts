import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import configPkg from './src/config.json'

const input = {}

configPkg.nav.map((item) => {
  item.packages.forEach((element) => {
    const { name, show, type, exportEmpty } = element
    if (show || exportEmpty) {
      input[name] = `./src/packages/${name.toLowerCase()}/index${
        type === 'methods' ? '.ts' : '.vue'
      }`
    }
  })
})

export default defineConfig({
  resolve: {
    alias: [
      {
        find: '@',
        replacement: path.resolve(__dirname, './src'),
      },
    ],
  },
  plugins: [vue()],
  build: {
    minify: false,
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
    lib: {
      entry: '',
      name: 'index',
      // fileName: (format) => format,
      formats: ['es'],
    },
    rollupOptions: {
      // 请确保外部化那些你的库中不需要的依赖
      external: ['vue', 'vue-router'],
      input,
      output: {
        dir: path.resolve(__dirname, './dist/packages'),
        entryFileNames: '[name]/index.js',
        assetFileNames: '[name]/index.css',
      },
    },
    emptyOutDir: false,
  },
})
