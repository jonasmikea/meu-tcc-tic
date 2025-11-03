<script setup>
import BarraDeBusca from '@/components/BarraDeBusca.vue';
</script>

<template>
  <div class="pagina-inicial">
    <div class="content">
      <h1>TIC</h1>
      <h1>TIC</h1>
      <h1>TIC</h1>
      <h1>TIC</h1>
    </div>
    <BarraDeBusca />
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Titan+One&display=swap');

.pagina-inicial {
  min-height: 100vh;
  background: orangered;
  overflow: hidden;
  display: flex;
  /* A MUDANÇA ESTÁ AQUI: alinha os itens no topo */
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  /* E AQUI: adiciona um espaçamento do topo */
  padding-top: 15vh; 
  box-sizing: border-box;
}
.content {
  position: relative;
  /* Aumenta a prioridade para o logo ficar atrás da busca */
  z-index: 1; 
}
.content h1 {
  position: absolute;
  transform: translate(-50%, -50%);
  font-size: 15vw; /* O tamanho ainda é relativo à largura da tela */
  font-family: 'titan one';
}
.content h1:nth-child(1) {
  color: #fff;
  text-shadow:-2px 2px 0px #ff6b08,
        -4px 4px 0px #ff6b08,
        -6px 6px 0px #ff6b08,
        -8px 8px 0px #ff6b08,
        -18px 18px 20px rgba(0,0,0,0.5),
        -18px 18px 50px rgba(0,0,0,0.5);
}
.content h1:nth-child(2),
.content h1:nth-child(3),
.content h1:nth-child(4) {
  color: #f36421;
  animation: animate 4s ease-in-out infinite;
}
.content h1:nth-child(2) { opacity: 0.5; animation-duration: 3s; }
.content h1:nth-child(3) { opacity: 0.5; animation-duration: 6s; }

@keyframes animate {
  0%, 100% { clip-path: polygon(0 60%, 15% 62%, 33% 59%, 49% 51%, 66% 44%, 81% 43%, 100% 47%, 100% 100%, 0 100%); }
  50% { clip-path: polygon(0 45%, 16% 44%, 34% 46%, 50% 53%, 65% 57%, 81% 58%, 100% 55%, 100% 100%, 0 100%); }
}

/* 👇 NOVA SEÇÃO PARA RESPONSIVIDADE 👇 */
@media (max-width: 768px) {
  .content h1 {
    font-size: 25vw; /* Aumenta um pouco o logo em telas menores para mais impacto */
  }
}
</style>