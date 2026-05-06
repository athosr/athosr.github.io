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
    /**
     * Rollup warns when any chunk exceeds this (minified size). The main chunk includes
     * app code plus eager devlog `.md` (see `src/utils/devlog.js` + Home preview). ~1.2 MB
     * raw / ~350+ kB gzip is normal here; GitHub Pages does not impose a stricter limit.
     */
    chunkSizeWarningLimit: 1500,
    rollupOptions: {
      output: {
        /**
         * The object form `manualChunks: { vendor: ['react'], ... }` makes Vite 5 /
         * Rollup 4 emit empty placeholder chunks. A function id → chunk name avoids that.
         *
         * Rollup `id` may use `\` on Windows; `includes('/react/')` would miss `node_modules\react\`
         * and collapse everything into one huge entry chunk.
         */
        manualChunks(id) {
          if (!id.includes('node_modules')) return;
          const norm = id.replace(/\\/g, '/');
          if (norm.includes('react-router')) return 'router';
          if (norm.includes('framer-motion')) return 'motion';
          if (norm.includes('react-pdf') || norm.includes('pdfjs-dist')) return 'pdf';
          if (norm.includes('react-dom') || norm.includes('/react/')) return 'vendor';
        },
      },
    },
  },
  server: {
    port: 3000,
    open: true
  }
})

