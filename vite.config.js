import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false,
    minify: 'esbuild',
    cssMinify: true,
    rollupOptions: {
      output: {
        manualChunks: {
          // Separar vendor chunks para mejor caching
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
          'icons': ['react-icons/fa', 'react-icons/bs', 'react-icons/ci', 'react-icons/rx'],
          'slider': ['react-slick', 'slick-carousel'],
          'google': ['gapi-script'],
        },
        // Optimizar nombres de archivos
        chunkFileNames: 'assets/js/[name]-[hash].js',
        entryFileNames: 'assets/js/[name]-[hash].js',
        assetFileNames: 'assets/[ext]/[name]-[hash].[ext]',
      },
    },
    // Optimizaciones adicionales
    chunkSizeWarningLimit: 1000,
    target: 'es2015',
  },
  // Asegurar que los archivos estáticos se copien correctamente
  publicDir: 'public',
  // Optimizaciones de servidor de desarrollo
  server: {
    hmr: true,
  },
  // Optimizaciones de pre-bundling
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom'],
  },
})
