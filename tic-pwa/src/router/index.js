// tic-pwa/src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import { useAuthStore } from '@/stores/auth.store';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/busca',
      name: 'searchResults',
      component: () => import('../views/ResultadosBusca.vue'),
    },
    {
      path: '/categorias',
      name: 'categorias',
      component: () => import('../views/CategoriasView.vue'),
    },
    {
      path: '/carrinho',
      name: 'carrinho',
      component: () => import('../views/CarrinhoView.vue'),
      beforeEnter: (to, from, next) => {
        const authStore = useAuthStore();
        if (authStore.estaLogado) {
          next();
        } else {
          next('/login');
        }
      },
    },
    {
      path: '/sobre',
      name: 'sobre',
      component: () => import('../views/SobreView.vue'),
    },
    {
      path: '/cadastro',
      name: 'cadastro',
      component: () => import('../views/CadastroView.vue'),
      props: { modoInicial: 'cadastro' }
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LoginView.vue'),
      props: { modoInicial: 'login' }
    },
    {
      path: '/recipe/:id',
      name: 'recipe-detail',
      component: () => import('../views/RecipeView.vue'),
    },
    // 👇 NOVA ROTA PROTEGIDA PARA DELIVERY 👇
    {
      path: '/delivery/:id', // :id será o ID do produto
      name: 'delivery',
      component: () => import('../views/DeliveryView.vue'),
      beforeEnter: (to, from, next) => {
        const authStore = useAuthStore();
        if (authStore.estaLogado) {
          next(); // Permite o acesso se estiver logado
        } else {
          next('/login'); // Redireciona para o login se não estiver
        }
      },
    },
  ],
});

export default router;