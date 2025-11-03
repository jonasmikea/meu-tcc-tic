// tic-pwa/vite.config.js 

import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({
      template: {
        compilerOptions: {
          // 👇 ADICIONE ESTA LINHA 👇
          // Diz ao compilador do Vue para ignorar tags que começam com 'ion-'
          isCustomElement: (tag) => tag.startsWith('ion-') 
        }
      }
    }),
    vueDevTools(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})