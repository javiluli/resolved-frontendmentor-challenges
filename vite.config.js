import { URL, fileURLToPath } from 'url'

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],

  resolve: {
    alias: [
      { find: '@@', replacement: fileURLToPath(new URL('./src', import.meta.url)) },
      { find: '@/components', replacement: fileURLToPath(new URL('./src/components', import.meta.url)) },
      { find: '@@challenges', replacement: fileURLToPath(new URL('./src/challenges', import.meta.url)) },
      { find: '@/api', replacement: fileURLToPath(new URL('./src/api', import.meta.url)) },
      { find: '@@constant', replacement: fileURLToPath(new URL('./src/constant', import.meta.url)) },
      { find: '@/constant/difficulty', replacement: fileURLToPath(new URL('./src/constant/challenge-difficulty.js', import.meta.url)) },
      { find: '@/constant/languages', replacement: fileURLToPath(new URL('./src/constant/challenge-languages', import.meta.url)) },
      { find: '@/constant/test-state', replacement: fileURLToPath(new URL('./src/constant/challenge-test-state', import.meta.url)) },
      { find: '@/constant/challenges-id', replacement: fileURLToPath(new URL('./src/constant/challenges-id', import.meta.url)) },
      { find: '@/pages', replacement: fileURLToPath(new URL('./src/pages', import.meta.url)) },
      { find: '@/utils', replacement: fileURLToPath(new URL('./src/utilities', import.meta.url)) },
      { find: '@/themes', replacement: fileURLToPath(new URL('./src/themes', import.meta.url)) },
    ],
  },
})
