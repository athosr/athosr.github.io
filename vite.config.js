import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/',
  publicDir: 'public',
  resolve: {
    dedupe: ['react', 'react-dom'],
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    /** Wipe dist/ so old chunk filenames cannot stack hash suffixes across builds. */
    emptyOutDir: true,
    sourcemap: false,
    minify: 'esbuild', // Use esbuild (built-in) instead of terser
    chunkSizeWarningLimit: 2000,
  },
  server: {
    port: 3000,
    open: true
  }
})
