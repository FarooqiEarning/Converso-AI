
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { componentTagger } from 'lovable-tagger';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  plugins: [
    react(),
    mode === 'development' && componentTagger(),
  ].filter(Boolean),
  optimizeDeps: {
    include: ['react', 'react-dom'],
    exclude: ['lucide-react']
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom'],
        }
      }
    }
  },
  server: {
    host: "::",
    port: 8080,
    strictPort: true // Ensure this exact port is used
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  }
}));
