<script setup>
import { RouterLink } from 'vue-router';
import { useAuthStore } from '@/stores/auth.store';

const authStore = useAuthStore();

function confirmarLogout() {
  if (confirm('Você realmente deseja sair?')) {
    authStore.logout();
  }
}
</script>

<template>
  <div class="navigation">
    <ul>
      <li class="list">
        <RouterLink to="/">
          <span class="icon"><ion-icon name="home-outline"></ion-icon></span>
          <span class="text">Home</span>
        </RouterLink>
      </li>
      <li class="list">
        <RouterLink to="/categorias">
          <span class="icon"><ion-icon name="grid-outline"></ion-icon></span>
          <span class="text">Categorias</span>
        </RouterLink>
      </li>
      <li class="list">
        <RouterLink to="/carrinho">
          <span class="icon"><ion-icon name="cart-outline"></ion-icon></span>
          <span class="text">Carrinho</span>
        </RouterLink>
      </li>
       <li class="list">
        <RouterLink to="/sobre">
          <span class="icon"><ion-icon name="information-circle-outline"></ion-icon></span>
          <span class="text">Sobre</span>
        </RouterLink>
      </li>

      <li v-if="!authStore.estaLogado" class="list">
        <RouterLink to="/login">
          <span class="icon"><ion-icon name="person-outline"></ion-icon></span>
          <span class="text">Login</span>
        </RouterLink>
      </li>
      <li v-if="authStore.estaLogado" class="list">
        <a href="#" @click.prevent="confirmarLogout">
          <span class="icon"><ion-icon name="log-out-outline"></ion-icon></span>
          <span class="text">Sair</span>
        </a>
      </li>

    </ul>
  </div>
</template>

<style scoped>
/* O seu CSS continua o mesmo, sem alterações necessárias */
.navigation { position:fixed; height: 100%; width: 70px; box-sizing: border-box; border-left: 10px solid orangered; background: orangered; transition: width 0.5s; overflow-x: hidden; top: 0; left: 0; z-index: 99; }
.navigation:hover { width: 300px; }
.navigation ul { position: absolute; top: 0; left: 0; width: 100%; padding-left: 5px; padding-top: 40px; display: flex; flex-direction: column; height: 100%; margin: 0; box-sizing: border-box; }
.navigation ul li { position: relative; list-style: none; width: 100%; border-top-left-radius: 20px; border-bottom-left-radius: 20px; }
.navigation ul li:hover { background: #fff; }
.navigation ul li a { position: relative; display: block; width: 100%; display: flex; text-decoration: none; color: #fff; cursor: pointer; }
.navigation ul li:hover a { color: #333; }
.navigation ul li a .icon { position: relative; display: block; min-width: 60px; height: 60px; line-height: 70px; text-align: center; }
.navigation ul li a .icon ion-icon { font-size: 1.75em; }
.navigation ul li a .text { position: relative; display: block; padding: 0 10px; height: 60px; line-height: 60px; text-align: start; white-space: nowrap; }
.navigation ul li:last-child { margin-top: auto; }
@media (max-width: 768px) {
  .navigation { width: 100%; height: 60px; top: auto; bottom: 0; border-left: none; border-top: 5px solid orangered; }
  .navigation:hover { width: 100%; }
  .navigation ul { flex-direction: row; justify-content: space-around; align-items: center; padding: 0; height: 100%; }
  .navigation ul li { width: auto; border-radius: 0; }
  .navigation ul li:hover { background: rgba(255, 255, 255, 0.2); border-radius: 10px; }
  .navigation ul li a .text { display: none; }
  .navigation ul li a .icon { line-height: 60px; }
  .navigation ul li:last-child { margin-top: 0; }
}
</style>
<style scoped>
/* ESTILOS PARA DESKTOP (Telas Maiores) */
.navigation { position:fixed; height: 100%; width: 70px; box-sizing: border-box; border-left: 10px solid orangered; background: orangered; transition: width 0.5s; overflow-x: hidden; top: 0; left: 0; z-index: 99; }
.navigation:hover { width: 300px; }

/* 👇 AS MUDANÇAS ESTÃO AQUI 👇 */
.navigation ul { 
  position: absolute; 
  left: 0; 
  width: 100%; 
  padding: 40px 0 40px 5px; /* Adicionamos padding em cima e embaixo */
  margin: 0;
  box-sizing: border-box; /* A CORREÇÃO PRINCIPAL: Faz o padding ser calculado para dentro da altura total */
  display: flex; 
  flex-direction: column; 
  height: 100%; 
}

.navigation ul li { position: relative; list-style: none; width: 100%; border-top-left-radius: 20px; border-bottom-left-radius: 20px; }
.navigation ul li:hover { background: #fff; }
.navigation ul li a { position: relative; display: block; width: 100%; display: flex; text-decoration: none; color: #fff; cursor: pointer; }
.navigation ul li:hover a { color: #333; }
.navigation ul li a .icon { position: relative; display: block; min-width: 60px; height: 60px; line-height: 70px; text-align: center; }
.navigation ul li a .icon ion-icon { font-size: 1.75em; }
.navigation ul li a .text { position: relative; display: block; padding: 0 10px; height: 60px; line-height: 60px; text-align: start; white-space: nowrap; }
.navigation ul li:last-child { margin-top: auto; }


@media (max-width: 768px) {
  .navigation { width: 100%; height: 60px; top: auto; bottom: 0; border-left: none; border-top: 5px solid orangered; }
  .navigation:hover { width: 100%; }
  .navigation ul { flex-direction: row; justify-content: space-around; align-items: center; padding: 0; height: 100%; }
  .navigation ul li { width: auto; border-radius: 0; }
  .navigation ul li:hover { background: rgba(255, 255, 255, 0.2); border-radius: 10px; }
  .navigation ul li a .text { display: none; }
  .navigation ul li a .icon { line-height: 60px; }
  .navigation ul li:last-child { margin-top: 0; }
}
</style>