import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss()
  ],
  build: {
    // Enable minification for better performance
    minify: 'esbuild',
    // Generate sourcemaps for production builds (optional, remove if not needed)
    sourcemap: false,
    // Optimize chunk splitting
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router-dom'],
          mui: ['@mui/material', '@mui/icons-material', '@emotion/react', '@emotion/styled'],
          framer: ['framer-motion']
        }
      }
    },
    // Target modern browsers
    target: 'esnext',
    // Reduce bundle size
    cssMinify: true
  },
  // Optimize dependencies pre-bundling
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom', 'framer-motion', '@mui/material']
  }
})
