import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  resolve: { alias: { '@': '/src' } },
  build: { outDir: 'dist' },
  server: {
    fs: { allow: ['..'] },
    middlewareMode: false,
    watch: { usePolling: true },
    
    historyApiFallback: true
  },
  proxy:{
    '/api': {target:'http://localhost:3000'},
  }
})