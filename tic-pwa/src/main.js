// tic-pwa/src/main.js
import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router' // 👈 1. IMPORTE O NOSSO ROTEADOR
import { createPinia } from 'pinia';

const app = createApp(App)
app.use(createPinia());

app.use(router) // 👈 2. DIGA AO APP PARA USAR O ROTEADOR

app.mount('#app')