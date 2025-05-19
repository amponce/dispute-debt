import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

// Custom plugin to suppress source map warnings for specific files
const suppressCssSourceMapWarnings = () => {
  const cssLibraryPaths = [
    '@department-of-veterans-affairs/css-library/dist/stylesheets/core.css',
    '@department-of-veterans-affairs/css-library/dist/stylesheets/utilities.css'
  ];
  
  return {
    name: 'suppress-css-sourcemap-warnings',
    configureServer(server) {
      // Filter warnings by suppressing specific source map errors
      server.middlewares.use((req, res, next) => {
        const originalError = console.error;
        console.error = (...args) => {
          // Skip source map warnings for CSS library files
          if (typeof args[0] === 'string' && 
              cssLibraryPaths.some(path => args[0].includes(path)) && 
              args[0].includes('Failed to load source map')) {
            return;
          }
          originalError.apply(console, args);
        };
        next();
        console.error = originalError;
      });
    }
  };
};

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    suppressCssSourceMapWarnings()
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
    },
  },
  // Handle the @department-of-veterans-affairs packages properly
  optimizeDeps: {
    include: ['@department-of-veterans-affairs/component-library'],
  },
  build: {
    outDir: 'build',
  },
  server: {
    port: 3000,
    open: true,
  },
  css: {
    // Disable source maps for CSS
    devSourcemap: false,
  },
  // Silence source map warnings
  logLevel: 'warn',
}); 