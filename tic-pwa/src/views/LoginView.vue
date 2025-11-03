<script setup>
import FormularioAcesso from '@/components/FormularioAcesso.vue';
</script>

<template>
  <div class="pagina-centralizada">
    <FormularioAcesso />
  </div>
</template>

<style scoped>
.pagina-centralizada {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh; /* Ocupa a altura toda */
  padding: 1rem;
  background-color: #fc4404; /* Cor de fundo da página */
}
</style>