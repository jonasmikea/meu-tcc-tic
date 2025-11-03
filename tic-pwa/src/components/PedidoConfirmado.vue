<template>
  <Transition name="fade-scale">
    <div v-if="isVisible" class="overlay-confirmacao">
      <div class="card-confirmacao">
        <div class="checkmark-circle">
          <div class="checkmark draw"></div>
        </div>
        <h2>Pedido Feito!</h2>
        <p>Agradecemos a sua preferência.</p>
      </div>
    </div>
  </Transition>
</template>

<script setup>
import { ref, watch } from 'vue';

const props = defineProps({
  show: {
    type: Boolean,
    default: false
  }
});

const emit = defineEmits(['close']);
const isVisible = ref(props.show);

// Observa a prop 'show' para controlar a visibilidade e o timer
watch(() => props.show, (newVal) => {
  isVisible.value = newVal;
  if (newVal) {
    // Esconde o overlay após 3 segundos
    setTimeout(() => {
      isVisible.value = false;
      emit('close'); // Emite um evento para o componente pai saber que fechou
    }, 3000);
  }
});
</script>

<style scoped>
.overlay-confirmacao {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.7); /* Fundo semi-transparente escuro */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000; /* Garante que fique por cima de tudo */
}

.card-confirmacao {
  background-color: #fff;
  padding: 30px 40px;
  border-radius: 12px;
  text-align: center;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 90%;
}

.card-confirmacao h2 {
  color: #ff6b08; /* Laranja do site */
  margin-top: 20px;
  margin-bottom: 10px;
  font-size: 1.8rem;
}

.card-confirmacao p {
  color: #555;
  font-size: 1.1rem;
}

/* Animação do Checkmark */
.checkmark-circle {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background-color: #28a745; /* Verde de sucesso */
  display: flex;
  justify-content: center;
  align-items: center;
  animation: scaleIn 0.5s cubic-bezier(0.68, -0.55, 0.27, 1.55) forwards;
}

.checkmark {
  width: 40px;
  height: 80px;
  border-bottom: 8px solid #fff;
  border-right: 8px solid #fff;
  transform: rotate(45deg);
  animation: drawCheck 0.6s ease-out 0.3s forwards;
  opacity: 0;
}

/* Keyframes para animação */
@keyframes scaleIn {
  from { transform: scale(0); opacity: 0; }
  to { transform: scale(1); opacity: 1; }
}

@keyframes drawCheck {
  0% { height: 0; width: 0; opacity: 0; }
  25% { height: 0; width: 40px; opacity: 1; }
  50% { height: 80px; width: 40px; opacity: 1; }
  100% { height: 80px; width: 40px; opacity: 1; }
}

/* Transição de entrada/saída do overlay */
.fade-scale-enter-active,
.fade-scale-leave-active {
  transition: all 0.5s ease;
}
.fade-scale-enter-from,
.fade-scale-leave-to {
  opacity: 0;
  transform: scale(0.8);
}
</style>