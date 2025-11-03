<script setup>
// Imports existentes
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import axios from 'axios';

// --- NOSSAS ADIÇÕES ---
import { useRouter } from 'vue-router'; // 1. Para redirecionar
import PedidoConfirmado from '@/components/PedidoConfirmado.vue'; // 2. A animação

// Refs existentes
const route = useRoute();
const baseUrl = 'https://tic-api-apn3.onrender.com';
const receitaId = route.params.id;
const receita = ref(null);
const ofertas = ref([]);
const carregando = ref(true);

// --- NOSSAS ADIÇÕES ---
const router = useRouter(); // Instância do roteador
const showConfirmacao = ref(false); // 3. Controla a animação

// Função auxiliar (existente)
function gerarNumeroAleatorio(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Função para criar as ofertas fixas (existente)
function gerarOfertasFixas() {
  const restaurantesFixos = [
    { nome: 'Sabor Caseiro' },
    { nome: 'Delícias da Vovó' },
    { nome: 'Chef Online' }
  ];

  return restaurantesFixos.map((restaurante, index) => ({
    id: index + 1,
    restaurante: {
      nome: restaurante.nome,
      distancia_km: gerarNumeroAleatorio(2, 30),
    },
    preco: gerarNumeroAleatorio(10, 30)
  }));
}

// onMounted (existente, sem mudanças)
onMounted(async () => {
  if (!receitaId) {
    console.error('ERRO: ID da receita não encontrado na URL!');
    carregando.value = false;
    return;
  }
  try {
    console.log(`Tentando buscar receita: ${baseUrl}/recipes/${receitaId}`);
    const resReceita = await axios.get(`${baseUrl}/recipes/${receitaId}`);
    receita.value = resReceita.data;
    try {
      const resOfertas = await axios.get(`${baseUrl}/recipes/${receitaId}/ofertas`);
      ofertas.value = resOfertas.data;
    } catch (err) {
      console.warn("Nenhuma oferta encontrada no backend, gerando ofertas fixas...");
      ofertas.value = gerarOfertasFixas();
    }
    if (!ofertas.value || ofertas.value.length === 0) {
      ofertas.value = gerarOfertasFixas();
    }
  } catch (error) {
    console.error("Erro ao buscar dados para o delivery:", error);
  } finally {
    carregando.value = false;
  }
});

// --- NOSSAS FUNÇÕES NOVAS ---

/**
 * 4. Esta função é chamada pelo botão.
 * Por enquanto, ela só ativa a animação.
 */
function finalizarPedido() {
  // TODO: Adicionar lógica para verificar qual rádio foi selecionado.
  
  // Ativa o overlay animado
  showConfirmacao.value = true;
}

/**
 * 5. Esta função é chamada pelo @close do componente de animação.
 */
function handleConfirmacaoClose() {
  // Redireciona o usuário para a página inicial
  router.push('/');
}
</script>

<template>
  <div class="pagina">
    <div v-if="carregando">
      <p>Carregando opções de delivery...</p>
    </div>

    <div v-else>
      <div v-if="receita" class="container-pedido">
        <h1>Finalizar Pedido</h1>
        
        <div class="item-pedido">
          <img 
            :src="receita.imageUrl" :alt="receita.title" class="item-imagem"
          /> 
          <div class="item-info">
            <span class="item-nome">{{ receita.title }}</span> <span class="item-qtd">QNT: 1x</span>
          </div>
        </div>

        <h2>Restaurantes Disponíveis</h2>

        <ul v-if="ofertas && ofertas.length > 0" class="lista-restaurantes">
          <li v-for="oferta in ofertas" :key="oferta.id">
            <input type="radio" name="restaurante" :id="oferta.id">
            <label :for="oferta.id" class="card-restaurante">
              <span class="nome">{{ oferta.restaurante?.nome }}</span>
              <span class="distancia">{{ oferta.restaurante?.distancia_km }} km</span>
              <span class="preco">R$ {{ oferta.preco }}</span>
            </label>
          </li>
        </ul>

        <p v-else>Nenhum restaurante oferece esta receita no momento.</p>

        <button @click="finalizarPedido" class="botao-finalizar">Confirmar Pedido</button>
      </div>

      <p v-else>Ops! Receita não encontrada.</p>
    </div>
  </div>

  <PedidoConfirmado :show="showConfirmacao" @close="handleConfirmacaoClose" />
</template>

<style scoped>
/* Seu CSS não muda nada, continua perfeito */
.pagina { 
  padding: 2rem; 
  padding-top: 80px; 
  max-width: 700px; 
  margin: 0 auto; 
}
.container-pedido { 
  background: #fff; 
  padding: 2rem; 
  border-radius: 8px; 
  box-shadow: 0 4px 15px rgba(0,0,0,0.1); 
}
h1, h2 { 
  text-align: center; 
  color: #333; 
}
h2 { 
  margin-top: 2rem; 
  border-top: 1px solid #eee; 
  padding-top: 2rem; 
}
.item-pedido { 
  display: flex; 
  align-items: center; 
  border-bottom: 1px solid #eee; 
  padding-bottom: 1.5rem; 
}
.item-imagem { 
  width: 60px; 
  height: 60px; 
  border-radius: 5px; 
  object-fit: cover; 
  margin-right: 1rem; 
  background-color: #eee; 
}
.item-info { 
  display: flex; 
  flex-direction: column; 
}
.item-nome { 
  font-weight: bold; 
  font-size: 1.2rem; 
}
.item-qtd { 
  background: #eee; 
  padding: 0.2rem 0.5rem; 
  border-radius: 5px; 
  margin-top: 0.25rem; 
  font-size: 0.9rem; 
}
.lista-restaurantes { 
  list-style: none; 
  padding: 0; 
}
.lista-restaurantes li { 
  margin-bottom: 1rem; 
}
.lista-restaurantes input[type="radio"] { 
  display: none; 
}
.card-restaurante { 
  display: flex; 
  justify-content: space-between; 
  align-items: center; 
  padding: 1.5rem; 
  border: 2px solid #ddd; 
  border-radius: 5px; 
  cursor: pointer; 
  transition: all 0.2s ease; 
}
.lista-restaurantes input[type="radio"]:checked + .card-restaurante { 
  border-color: #e67e22; 
  background-color: #fef5e7; 
}
.card-restaurante:hover { 
  border-color: #f39c12; 
}
.nome { 
  font-weight: bold; 
}
.preco { 
  font-size: 1.2rem; 
  font-weight: bold; 
  color: #27ae60; 
}
.botao-finalizar { 
  width: 100%; 
  padding: 1rem; 
  margin-top: 2rem; 
  border: none; 
  background-color: #e67e22; 
  color: white; 
  font-size: 1.2rem; 
  font-weight: bold; 
  border-radius: 5px; 
  cursor: pointer; 
}
</style>