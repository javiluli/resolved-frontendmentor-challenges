/* eslint-disable no-undef */
import react from '@vitejs/plugin-react'
import path from 'path'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@@': path.resolve(__dirname, './src'),
      '@/components': path.resolve(__dirname, './src/components'),
      '@@challenges': path.resolve(__dirname, './src/challenges'),
      '@/api': path.resolve(__dirname, './src/api'),
      '@@constant': path.resolve(__dirname, './src/constant'),
      '@/constant/difficulty': path.resolve(__dirname, './src/constant/challenge-difficulty.js'),
      '@/constant/languages': path.resolve(__dirname, './src/constant/challenge-languages'),
      '@/constant/test-state': path.resolve(__dirname, './src/constant/challenge-test-state'),
      '@/constant/challenges-id': path.resolve(__dirname, './src/constant/challenges-id'),
      '@/pages': path.resolve(__dirname, './src/pages'),
      '@/utils': path.resolve(__dirname, './src/utilities'),
      '@/themes': path.resolve(__dirname, './src/themes'),
    },
  },
})
