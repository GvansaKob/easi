import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { VitePWA } from 'vite-plugin-pwa'
import path from 'path'

export default defineConfig({
  plugins: [
    vue(),
    VitePWA({
      registerType: 'autoUpdate',
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,svg,woff2}'],
        // Exclure les fichiers problématiques du cache
        globIgnores: ['**/node_modules/**/*']
      },
      manifest: {
        name: 'EASI',
        short_name: 'EASI',
        start_url: '/',
        display: 'standalone',
        background_color: '#ffffff',
        theme_color: '#4f3bf4',
        icons: [
          {
            src: '/icons/logo-picto.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: '/icons/logo-easi.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      }
    })
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  base: './',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    rollupOptions: {
      external: ['src/components/unused/**'],
      output: {
        manualChunks: undefined
      }
    }
  },
  assetsInclude: ['**/*.png', '**/*.jpg', '**/*.jpeg', '**/*.gif', '**/*.svg']
})