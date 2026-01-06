import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    include: ['@apollo/client', 'graphql'],
    esbuildOptions: {
      target: 'esnext'
    }
  },
  resolve: {
    dedupe: ['@apollo/client']
  }
})
