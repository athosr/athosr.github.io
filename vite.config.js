import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/',
  publicDir: 'public',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false,
    minify: 'esbuild', // Use esbuild (built-in) instead of terser
    /** Main bundle includes app + deps not split below; ~700kB is expected. */
    chunkSizeWarningLimit: 750,
    rollupOptions: {
      output: {
        /**
         * The object form `manualChunks: { vendor: ['react'], ... }` makes Vite 5 /
         * Rollup 4 emit empty placeholder chunks. A function id → chunk name avoids that.
         */
        manualChunks(id) {
          if (!id.includes('node_modules')) return;
          if (id.includes('react-router')) return 'router';
          if (id.includes('framer-motion')) return 'motion';
          if (id.includes('react-pdf') || id.includes('pdfjs-dist')) return 'pdf';
          if (id.includes('react-dom') || id.includes('/react/')) return 'vendor';
        },
      },
    },
  },
  server: {
    port: 3000,
    open: true
  }
})

