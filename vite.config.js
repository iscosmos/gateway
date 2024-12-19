import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

import path from 'node:path'
import WindiCSS from 'vite-plugin-windicss'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue(), WindiCSS()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
