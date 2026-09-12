import { defineConfig } from 'vite'

export default defineConfig({
  base: '/spillup/', // Required for GitHub Pages deployment
  server: {
    allowedHosts: true // Allows all hosts, including localtunnel
  }
})
