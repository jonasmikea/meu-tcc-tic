<script setup>
import { RouterView } from 'vue-router';
import MenuLateral from './components/MenuLateral.vue';
</script>

<template>
  <MenuLateral />
  <RouterView />
</template>

<style>
body {
  background-color: #ff6b08; /* <-- Seu laranja */
  margin: 0;
  padding: 0;
  font-family: 'Poppins', sans-serif;
}

#app {
  min-height: 100vh;
}
</style>