import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { VitePWA } from 'vite-plugin-pwa'
import path from 'path'

export default defineConfig({
  plugins: [
    vue(),
    VitePWA({
      registerType: 'autoUpdate',
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
})
