<script setup>
// A lógica <script> não precisa mudar
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const buscaAtiva = ref(false);
const termoDeBusca = ref('');
const router = useRouter();

function manipularCliqueIcone() {
  if (buscaAtiva.value) {
    realizarBusca();
  } else {
    // Só ativa se não estiver ativa ainda (para telas maiores)
    if (window.innerWidth > 768) { // Verifica se não é tela pequena
        buscaAtiva.value = true;
    } else {
        realizarBusca(); // Em telas pequenas, o primeiro clique já busca
    }
  }
}

function limparBusca() {
  termoDeBusca.value = '';
}

function realizarBusca() {
  if (termoDeBusca.value.trim() !== '') {
    router.push(`/busca?q=${termoDeBusca.value}`);
  }
}

// Garante que a busca esteja ativa em telas pequenas ao carregar
if (window.innerWidth <= 768) {
    buscaAtiva.value = true;
}
</script>

<template>
  <div class="search" :class="{ active: buscaAtiva }">
    <div class="icon" @click="manipularCliqueIcone"></div>
    <div class="input">
      <input
        type="text"
        placeholder="O que vai querer para hoje?"
        v-model="termoDeBusca"
        @keydown.enter="realizarBusca"
      />
    </div>
    <span class="clear" @click="limparBusca"></span>
  </div>
</template>

<style scoped>
/* ESTILOS PARA DESKTOP */
.search {
  position: absolute;
  /* 👇 CORREÇÃO 1: Aumentamos a distância do topo */
  top: 55%; /* Ajuste este valor se precisar de mais ou menos espaço */
  left: 50%;
  transform: translateX(-50%);
  width: 60px;
  height: 60px;
  background: #fff;
  border-radius: 60px;
  transition: width 0.5s; /* Ajustamos a transição para afetar só a largura */
  box-shadow: 0 0 0 5px #ff6b08;
  overflow: hidden;
  z-index: 2;
}
.search.active { width: 360px; }
.search .icon { position: absolute; left: 0; top: 0; width: 60px; height: 60px; background: #fff; display: flex; justify-content: center; align-items: center; cursor: pointer; z-index: 1; }
.search .icon:before { content: ''; position: absolute; width: 15px; height: 15px; border: 3px solid #ff6b08; border-radius: 50%; transform: translate(-4px,-4px); }
.search .icon:after { content: ''; position: absolute; width: 3px; height: 12px; background: #ff6b08; transform: translate(6px,6px) rotate(315deg); }
.search .input { position: relative; width: 300px; height: 60px; left: 60px; display: flex; justify-content: center; align-items: center; }
.search .input input {
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  border: none;
  outline: none;
  font-size: 18px;
  padding: 10px 25px 10px 10px;
  /* 👇 CORREÇÃO 2: Centraliza verticalmente o texto e placeholder */
  line-height: 60px; /* Igual à altura do container */
  box-sizing: border-box; /* Garante que o padding não aumente a altura */
}
.clear { position: absolute; top: 50%; transform: translateY(-50%); right: 15px; width: 15px; height: 15px; cursor: pointer; display: flex; justify-content: center; align-items: center; z-index: 3;}
.clear:before, .clear:after { position: absolute; content: ''; width: 1px; height: 15px; background: #999; }
.clear:before { transform: rotate(45deg); }
.clear:after { transform: rotate(315deg); }

/* RESPONSIVIDADE EM CELULARES */
@media (max-width: 768px) {
  .search {
    width: 90vw; /* Já começa expandido */
    max-width: 400px;
  }
}
</style>