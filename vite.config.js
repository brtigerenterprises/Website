import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/br-tiger-enterprises/', // Add this line - should match your repository name
  css: {
    postcss: './postcss.config.js'
  }
})