import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { VitePWA } from 'vite-plugin-pwa' // 1. Importamos o plugin

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    
    // 2. Adicionamos o cérebro do PWA
    VitePWA({
      registerType: 'autoUpdate', // Ele se atualiza sozinho
      devOptions: {
        enabled: true // Ativa o PWA no modo 'npm run dev'
      },
      manifest: {
        name: 'TIC - Tá in Casa',
        short_name: 'TIC',
        description: 'Seu app de receitas e delivery.',
        theme_color: '#ff6b08', // 3. A cor laranja principal do seu app
        background_color: '#ff6b08',
        display: 'standalone',
        scope: '/',
        start_url: '/',
        icons: [ // 4. Os ícones que você criou no Passo 2
          {
            src: 'pwa-192x192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: 'pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      }
    })
  ],
})