import react from '@vitejs/plugin-react'
import { fileURLToPath, URL } from 'url'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],

  resolve: {
    alias: [
      {
        find: '@@',
        replacement: fileURLToPath(new URL('./src', import.meta.url)),
      },
      {
        find: '@@challenges',
        replacement: fileURLToPath(new URL('./src/challenges', import.meta.url)),
      },
      {
        find: '@@api',
        replacement: fileURLToPath(new URL('./src/api', import.meta.url)),
      },
      {
        find: '@@constant',
        replacement: fileURLToPath(new URL('./src/constant', import.meta.url)),
      },
      {
        find: '@@utilities',
        replacement: fileURLToPath(new URL('./src/utilities', import.meta.url)),
      },
    ],
  },
})
