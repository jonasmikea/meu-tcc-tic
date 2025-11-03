// tic-pwa/src/stores/auth.store.js
import { defineStore } from 'pinia';
import { ref, computed } from 'vue';
import axios from 'axios';
import router from '@/router';

// O endereço base da nossa API
const baseUrl = 'https://tic-api-jonas.onrender.com';

export const useAuthStore = defineStore('auth', () => {
  // Estado: Tenta pegar o token do localStorage ao iniciar
  const token = ref(localStorage.getItem('token'));
  const usuario = ref(null);

  // Getters: "Computadores" que derivam do estado
  const estaLogado = computed(() => !!token.value);

  // Actions: Funções que mudam o estado
  async function cadastrar(nome, email, senha) {
    // Mapeamos os nomes para corresponder ao que a API espera (name, password)
    await axios.post(`${baseUrl}/users`, {
      name: nome,
      email: email,
      password: senha,
    });
  }

  async function login(email, senha) {
    const response = await axios.post(`${baseUrl}/auth/login`, {
      email: email,
      password: senha,
    });

    const tokenRecebido = response.data.access_token;

    // Se o token foi recebido com sucesso
    if (tokenRecebido) {
      // 1. Guarda o token no estado do Pinia
      token.value = tokenRecebido;
      // 2. Guarda o token no localStorage para persistir
      localStorage.setItem('token', tokenRecebido);
      // 3. Redireciona o usuário para a página inicial
      router.push('/');
    }
  }

  function logout() {
    token.value = null;
    usuario.value = null;
    localStorage.removeItem('token');
    router.push('/login');
  }

  return { token, usuario, estaLogado, cadastrar, login, logout };
});