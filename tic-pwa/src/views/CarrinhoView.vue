<script setup>
// 👇 1. MUDANÇA DE IMPORTE: Trocamos o 'auth' pelo 'carrinho'
import { useCarrinhoStore } from '@/stores/carrinho.store.js';

// 2. Usamos a store correta
const carrinhoStore = useCarrinhoStore();

function finalizarPedido() {
  alert('Pedido finalizado com sucesso! (Simulação)');
  // 3. Chamamos a action da store correta
  carrinhoStore.limparCarrinho();
}
</script>

<template>
  <div class="pagina">
    <h1>Meu Carrinho</h1>

        <div v-if="carrinhoStore.itens && carrinhoStore.itens.length > 0" class="conteudo-carrinho">
      <ul class="lista-itens">
                <li v-for="item in carrinhoStore.itens" :key="item.id">
          <span>{{ item.name }}</span>
          <span>(Qtd: {{ item.quantidade }})</span>
        </li>
      </ul>
      <div class="acoes-carrinho">
        <button @click="carrinhoStore.limparCarrinho()" class="botao-limpar">
          Limpar Carrinho
        </button>
        <button @click="finalizarPedido" class="botao-finalizar">
          Finalizar Pedido
        </button>
      </div>
    </div>

        <div v-else>
      <p>Seu carrinho está vazio.</p>
      <p>Vá até uma receita e clique no ícone de carrinho para começar.</p>
    </div>

  </div>
</template>

<style scoped>
/* Seu CSS (perfeito) continua o mesmo */
.pagina { padding: 2rem; padding-top: 80px; max-width: 900px; margin: 0 auto; }
.conteudo-carrinho { background-color: #fff; padding: 2rem; border-radius: 8px; box-shadow: 0 2px 10px rgba(0,0,0,0.1); }
.lista-itens { list-style: none; padding: 0; margin: 0; }
.lista-itens li { display: flex; justify-content: space-between; align-items: center; padding: 1rem 0; border-bottom: 1px solid #eee; }
.lista-itens li:last-child { border-bottom: none; }
.acoes-carrinho { margin-top: 2rem; display: flex; justify-content: flex-end; gap: 1rem; }
.acoes-carrinho button { padding: 0.8rem 1.5rem; border: none; color: white; font-weight: bold; cursor: pointer; border-radius: 5px; }
.botao-limpar { background-color: #e74c3c; }
.botao-finalizar { background-color: #27ae60; }
</style>