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
    sourcemap: false,
    minify: 'esbuild', // Use esbuild (built-in) instead of terser
    /**
     * Rollup warns when any chunk exceeds this (minified size). The main chunk includes
     * app code plus eager devlog `.md` (see `src/utils/devlog.js` + Home preview). ~1.2 MB
     * raw / ~350+ kB gzip is normal here; GitHub Pages does not impose a stricter limit.
     */
    chunkSizeWarningLimit: 1500,
    rollupOptions: {
      output: {
        /** One vendor chunk keeps a single React instance and stable init order. */
        manualChunks(id) {
          if (id.includes('node_modules')) return 'vendor';
        },
      },
    },
  },
  server: {
    port: 3000,
    open: true
  }
})
