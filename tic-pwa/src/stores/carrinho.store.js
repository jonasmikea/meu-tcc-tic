import { defineStore } from 'pinia';

// 'useCarrinhoStore' é o "cérebro" que vamos importar em qualquer
// componente que precise saber sobre o carrinho
export const useCarrinhoStore = defineStore('carrinho', {
  // 1. O ESTADO (Onde guardamos os dados)
  state: () => ({
    itens: [], // A lista de ingredientes no carrinho
  }),

  // 2. OS GETTERS (Como "calculamos" dados do state)
  getters: {
    // Calcula o número total de itens (Ex: 2 bananas + 1 maçã = 3)
    totalItens: (state) => {
      return state.itens.reduce((total, item) => total + item.quantidade, 0);
    },
    // (Mais tarde, podemos adicionar um 'precoTotal' aqui)
  },

  // 3. AS ACTIONS (Como "mudamos" os dados)
  actions: {
    adicionarItem(ingrediente) {
      // Verifica se o ingrediente JÁ ESTÁ no carrinho
      const itemExistente = this.itens.find(item => item.id === ingrediente.id);

      if (itemExistente) {
        // Se sim, só aumenta a quantidade
        itemExistente.quantidade++;
      } else {
        // Se não, adiciona o ingrediente na lista com quantidade 1
        this.itens.push({ ...ingrediente, quantidade: 1 });
      }
    },

    removerItem(ingredienteId) {
      // (Podemos criar esta função depois)
      this.itens = this.itens.filter(item => item.id !== ingredienteId);
    },

    limparCarrinho() {
      this.itens = [];
    },
  },
});
