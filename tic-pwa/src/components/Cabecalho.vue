<script setup>
import { defineEmits } from 'vue';
// 👇 1. Importe o 'storeToRefs' do Pinia
import { storeToRefs } from 'pinia';
import { useCarrinhoStore } from '@/stores/carrinho.store.js';

const emit = defineEmits(['alternar-perfil']);

// 2. Inicie a store (como antes)
const carrinhoStore = useCarrinhoStore();

// 👇 3. A MÁGICA ESTÁ AQUI
// Em vez de usar 'carrinhoStore.totalItens' direto no template,
// nós criamos uma referência reativa para o 'totalItens'.
const { totalItens } = storeToRefs(carrinhoStore);
</script>

<template>
  <header class="cabecalho-principal">
    <div class="logo">
      <h1>T.I.E</h1>
    </div>

    <div class="acoes-direita">
      
      <div class="carrinho-info">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M17 18c-1.11 0-2 .89-2 2s.89 2 2 2s2-.89 2-2s-.89-2-2-2zM7 18c-1.11 0-2 .89-2 2s.89 2 2 2s2-.89 2-2s-.89-2-2-2zM7.17 14.75l.03-.12l.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.86-7.01L19.42 4H5.21l-.94-2H1v2h2l3.6 7.59l-1.35 2.44C4.52 15.37 5.48 17 7 17h12v-2H7.42c-.13 0-.25-.11-.25-.25z"/></svg>
        
                <span class="contador-carrinho" v-if="totalItens > 0">
          {{ totalItens }}
        </span>
      </div>

      <button @click="emit('alternar-perfil')" class="botao-icone">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4s-4 1.79-4 4s1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>
      </button>
    </div>
  </header>
</template>

<style scoped>
.cabecalho-principal {
  display: flex;
  /* 6. Trocado para 'space-between' para alinhar perfeitamente */
  justify-content: space-between; 
  align-items: center;
  padding: 0.5rem 1rem;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  color: #e67e22;
}
.logo {
  /* Removemos o 'margin-right: auto'. O space-between já faz o serviço. */
  padding-left: 60px; /* Compensa o espaço do menu hambúrguer */
}
.logo h1 { margin: 0; font-size: 1.5rem; }

/* 7. NOVO: Wrapper para os ícones da direita */
.acoes-direita {
  display: flex;
  align-items: center;
  gap: 1.25rem; /* Espaço entre o carrinho e o perfil */
  padding-right: 1rem; /* Um respiro na borda */
}

.botao-icone { 
  background: none; 
  border: none; 
  cursor: pointer; 
  padding: 0.5rem; 
  color: #e67e22; 
}

/* 8. NOVO: Estilo para o ícone do carrinho */
.carrinho-info {
  position: relative; /* Essencial para a bolinha do contador */
  color: #e67e22;
  cursor: pointer;
}

/* 9. NOVO: A "bolinha" do contador */
.contador-carrinho {
  position: absolute;
  top: -8px;   /* Puxa para cima */
  right: -10px; /* Puxa para a direita */
  background-color: #ff6b08; /* Laranja forte */
  color: white;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.75rem;
  font-weight: bold;
  border: 1px solid white; /* Contorno branco */
}
</style>