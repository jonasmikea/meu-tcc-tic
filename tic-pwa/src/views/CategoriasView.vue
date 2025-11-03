<script setup>
import { ref, onMounted } from 'vue';
import { RouterLink } from 'vue-router';
import axios from 'axios';

const categorias = ref([]);
const carregando = ref(true);

onMounted(async () => {
  try {
    const response = await axios.get('https://tic-api-jonas.onrender.com/categorias');
    categorias.value = response.data;
  } catch (error) {
    console.error('Erro ao buscar categorias:', error);
  } finally {
    carregando.value = false;
  }
});
</script>

<template>
  <div class="pagina">
    <h1>Categorias</h1>
    
    <div v-if="carregando">
      <p>Carregando...</p>
    </div>

    <div v-else-if="categorias.length === 0">
      <p>Nenhuma categoria encontrada.</p>
    </div>

    <div v-else class="grid-categorias">
      <RouterLink 
        v-for="categoria in categorias" 
        :key="categoria.id" 
        to="#" 
        class="card-categoria"
      >
        {{ categoria.nome }}
      </RouterLink>
    </div>
  </div>
</template>

<style scoped>
.pagina {
  padding: 2rem;
  padding-top: 80px;
  max-width: 1200px;
  margin: 0 auto;
}

h1 {
  text-align: center;
  margin-bottom: 2rem;
  color: #333;
}

.grid-categorias {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1.5rem;
  justify-content: center; /* 👈 A CORREÇÃO ESTÁ AQUI */
}

.card-categoria {
  background-color: #e67e22;
  color: white;
  padding: 2rem 1rem;
  border-radius: 8px;
  text-align: center;
  font-size: 1.5rem;
  font-weight: bold;
  text-decoration: none;
  transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
}

.card-categoria:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 15px rgba(0,0,0,0.1);
}
</style>