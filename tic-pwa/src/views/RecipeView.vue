<script setup>
import { ref, onMounted } from 'vue';
import { useRoute, RouterLink, useRouter } from 'vue-router';
import axios from 'axios';
import { useCarrinhoStore } from '@/stores/carrinho.store.js';
import { useAuthStore } from '@/stores/auth.store.js';

const route = useRoute();
const router = useRouter();
const recipe = ref(null);
const recipeId = route.params.id;
const mostrarPreparo = ref(false);

const carrinhoStore = useCarrinhoStore();
const authStore = useAuthStore();

onMounted(async () => {
  try {
    const response = await axios.get(`https://tic-api-apn3.onrender.com/recipes/${recipeId}`);
    recipe.value = response.data;
  } catch (error) {
    console.error('Erro ao buscar a receita:', error);
  }
});

function adicionarAoCarrinho(ingrediente) {
  if (!authStore.estaLogado) {
    alert('Você precisa estar logado para adicionar itens ao carrinho.');
    router.push('/login');
    return;
  }
  carrinhoStore.adicionarItem(ingrediente);
  alert(`${ingrediente.name} adicionado ao carrinho!`);
}

function irParaDelivery() {
  if (!authStore.estaLogado) {
    alert('Você precisa estar logado para pedir um delivery.');
    router.push('/login');
    return;
  }
  router.push(`/delivery/${recipe.value.id}`);
}
</script>

<template>
  <div v-if="!recipe">
    <p>Carregando receita...</p>
  </div>
  <div v-else class="recipe-details">
    <h1>{{ recipe.title }}</h1>
    <img :src="recipe.imageUrl" :alt="recipe.title" class="recipe-image">
    <p class="description">{{ recipe.description }}</p>

    <div class="actions">
      <button @click="irParaDelivery" class="btn-acao">
        Pedir em Delivery
      </button>
      <button @click="mostrarPreparo = !mostrarPreparo" class="btn-acao">
        {{ mostrarPreparo ? 'Esconder Preparo' : 'Fazer em Casa' }}
      </button>
    </div>

    <div class="recipe-content">
      <h2>Ingredientes</h2>
      <ul v-if="recipe.ingredients && recipe.ingredients.length > 0">
        <li
          v-for="ingredient in recipe.ingredients"
          :key="ingredient.id"
          class="ingrediente-item"
        >
          <span>{{ ingredient.name }}</span>
          <svg
            @click="adicionarAoCarrinho(ingredient)"
            class="cart-icon"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <circle cx="9" cy="21" r="1"></circle>
            <circle cx="20" cy="21" r="1"></circle>
            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
            <line x1="12" y1="9" x2="12" y2="15"></line>
            <line x1="9" y1="12" x2="15" y2="12"></line>
          </svg>
        </li>
      </ul>
      <p v-else>
        Esta receita não possui ingredientes cadastrados.
      </p>

      <div v-if="mostrarPreparo">
        <h2>Modo de Preparo</h2>
        <p>{{ recipe.instructions }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Seu <style> (que está correto) */
.recipe-details {
  padding: 2rem;
  max-width: 800px;
  margin: 2rem auto;
  background-color: #e7d7ccff;
  color: #333;
  border-radius: 8px;
  box-sizing: border-box;
}
.recipe-image {
  width: 100%;
  height: auto;
  border-radius: 8px;
  margin-bottom: 1rem;
}
.description {
  font-size: 1.2rem;
  color: #555;
}
.actions {
  margin: 2rem 0;
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}
.btn-acao {
  padding: 1rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
  font-weight: bold;
  background-color: #f39c12;
  color: white;
  text-decoration: none;
  text-align: center;
  display: inline-block;
  transition: background-color 0.2s ease;
}
.btn-acao:hover {
  background-color: #e67e22;
}
h1,
h2 {
  color: #000;
}
h2 {
  margin-top: 2rem;
}
.ingrediente-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.75rem 0.5rem;
  border-bottom: 1px solid #d3c4b8;
  color: #333;
}
.ingrediente-item span {
  font-size: 1.1rem;
}
.cart-icon {
  color: #e67e22;
  cursor: pointer;
  transition: transform 0.2s ease;
  padding: 5px;
  border-radius: 50%;
}
.cart-icon:hover {
  transform: scale(1.2);
  background-color: #fdf8f4;
}
</style>