import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '~': path.resolve(__dirname, 'app'),
      // Ensure that routes are correctly resolved if needed
      '~/routes': path.resolve(__dirname, 'app/routes'),
    },
  },
  server: {
    host: '127.0.0.1',
    port: 8000,
    fs: {
      allow: ['..'], // Check that files are in allowed directories
    },
  },
  build: {
    target: 'esnext',
  },
})
