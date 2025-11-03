<script setup>
// ... (toda a sua lógica <script> continua a mesma)
import { ref, watchEffect } from 'vue';
import { useRoute, RouterLink } from 'vue-router';
import axios from 'axios';

const route = useRoute();
const receitas = ref([]);
const carregando = ref(true);

watchEffect(async () => {
  const termoDeBusca = route.query.q;
  if (termoDeBusca) {
    try {
      carregando.value = true;
      const response = await axios.get(`https://tic-api-apn3.onrender.com/recipes?q=${termoDeBusca}`); // LINHA CORRIGIDA
      receitas.value = response.data || [];
    } catch (error) {
      console.error('Erro ao buscar receitas:', error);
      receitas.value = [];
    } finally {
      carregando.value = false;
    }
  } else {
    receitas.value = [];
    carregando.value = false;
  }
});
</script>

<template>
  <div class="pagina-resultados">
    <h1>Resultados para "{{ route.query.q }}"</h1>
    <div v-if="carregando">
      <p>Buscando receitas...</p>
    </div>
    <div v-else-if="receitas.length === 0">
      <p>Nenhuma receita encontrada. Tente outro termo!</p>
    </div>
    <ul v-else class="lista-resultados">
      <li v-for="receita in receitas" :key="receita.id" class="card-receita">
        <img :src="receita.imageUrl" :alt="receita.title" class="card-imagem">
        <div class="card-conteudo">
          <h2>{{ receita.title }}</h2>
          <RouterLink :to="`/recipe/${receita.id}`" class="card-botao">
            SABER +
          </RouterLink>
        </div>
      </li>
    </ul>
  </div>
</template>

<style>

/* ... (todo o seu CSS continua o mesmo) */
.pagina-resultados {
  background-color: #e7d7cc; 
  min-height: 100vh;
  box-sizing: border-box;
  padding: 1rem;
  padding-top: 60px;
  max-width: 900px;
  margin: 0 auto;
  color:black;
}

.lista-resultados {
  background-color: #e7d7cc; 
  list-style: none;
  padding: 0;
  border: 2px;
}


.card-receita { display: flex; background-color: #fff; border-radius: 8px; box-shadow: 10px 20px 50px rgba(0,0,0,0.1); margin-bottom: 1.5rem; overflow: hidden; }
.card-imagem { width: 150px; height: 120px; object-fit: cover; }
.card-conteudo { padding: 1rem; display: flex; flex-direction: column; justify-content: center; }
.card-conteudo h2 { margin: 0 0 0.5rem 0; font-size: 1.2rem; }
.card-botao { background-color: #e67e22; color: white; text-decoration: none; padding: 0.5rem 1rem; border-radius: 5px; text-align: center; align-self: flex-start; font-weight: bold; }
#app {
  background-color: #ff490c;
  min-height: 100vh;
}
.pagina-resultados h1 {
  color: #5e5c5aff; /* Branco, para contrastar com o laranja */
}
</style>