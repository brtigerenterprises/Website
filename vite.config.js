import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/Website/', // Updated to match repository name
  css: {
    postcss: './postcss.config.js'
  }
})