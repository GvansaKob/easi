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
        globIgnores: ['**/node_modules/**/*'],
        // Supprimé les additionalManifestEntries car les images sont maintenant dans assets
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
            // Ces chemins seront générés automatiquement par Vite
            src: 'icons/logo-picto.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: '@icons/logo-easi.png', 
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
  base: '/',
  publicDir: 'public',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    copyPublicDir: true,
    rollupOptions: {
      output: {
        manualChunks: undefined
      }
    }
  },
  assetsInclude: ['**/*.png', '**/*.jpg', '**/*.jpeg', '**/*.gif', '**/*.svg']
})