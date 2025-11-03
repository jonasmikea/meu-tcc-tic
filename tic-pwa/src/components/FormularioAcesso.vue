<script setup>
import { ref } from 'vue';
import { useAuthStore } from '@/stores/auth.store';
import { useRouter } from 'vue-router';
// Importa os ícones Font Awesome (precisaremos instalar)
import { faUser, faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

const authStore = useAuthStore();
const router = useRouter();

// Estado para controlar qual formulário está visível

// Dados do formulário de Login
const loginEmail = ref('');
const loginSenha = ref('');

// Dados do formulário de Cadastro
const cadastroNome = ref('');
const cadastroEmail = ref('');
const cadastroSenha = ref('');
const cadastroConfirmaSenha = ref('');

async function executarLogin() {
  try {
    await authStore.login(loginEmail.value, loginSenha.value);
    // Redirecionamento já ocorre na store
  } catch (error) {
    console.error('Erro no login:', error);
    alert('Email ou senha inválidos.');
  }
}

async function executarCadastro() {
  if (cadastroSenha.value !== cadastroConfirmaSenha.value) {
    alert('As senhas não coincidem!');
    return;
  }
  try {
    await authStore.cadastrar(cadastroNome.value, cadastroEmail.value, cadastroSenha.value);
    alert('Cadastro realizado com sucesso! Faça o login.');
    mostrarLogin.value = true; // Muda para a tela de login
  } catch (error) {
    console.error('Erro no cadastro:', error);
    alert('Não foi possível cadastrar. O email pode já estar em uso.');
  }
}
const props = defineProps({
  modoInicial: {
    type: String,
    default: 'login' // Por padrão, começa no login
  }
});

// Atualiza o estado inicial baseado na prop
const mostrarLogin = ref(props.modoInicial === 'login');
</script>

<template>
  <div class="container" :class="{ signinForm: mostrarLogin }">
    <div class="form signup">
      <h2>Cadastro</h2>
      <form @submit.prevent="executarCadastro">
        <div class="inputBox">
          <input type="text" v-model="cadastroNome" required="required" autocomplete="new-password">
          <font-awesome-icon :icon="faUser" class="input-icon" />
          <span>Nome de usuário</span>
        </div>
        <div class="inputBox">
          <input type="email" v-model="cadastroEmail" required="required" autocomplete="new-password">
          <font-awesome-icon :icon="faEnvelope" class="input-icon" />
          <span>Email</span>
        </div>
        <div class="inputBox">
          <input type="password" v-model="cadastroSenha" required="required" autocomplete="new-password">
          <font-awesome-icon :icon="faLock" class="input-icon" />
          <span>Crie uma senha</span>
        </div>
        <div class="inputBox">
          <input type="password" v-model="cadastroConfirmaSenha" required="required" autocomplete="new-password">
          <font-awesome-icon :icon="faLock" class="input-icon" />
          <span>Confirme sua senha</span>
        </div>
        <div class="inputBox">
          <input type="submit" value="Criar Conta">
        </div>
      </form>
      <p>Já é cadastrado? <a href="#" @click.prevent="mostrarLogin = true">Entrar</a></p>
    </div>

    <div class="form signin">
      <h2>Bem vindo de volta!</h2>
      <form @submit.prevent="executarLogin">
        <div class="inputBox">
          <input type="email" v-model="loginEmail" required="required" autocomplete="new-password">
          <font-awesome-icon :icon="faEnvelope" class="input-icon" />
          <span>Email</span>
        </div>
        <div class="inputBox">
          <input type="password" v-model="loginSenha" required="required" autocomplete="new-password">
          <font-awesome-icon :icon="faLock" class="input-icon" />
          <span>Senha</span>
        </div>
        <div class="inputBox">
          <input type="submit" value="Login">
        </div>
      </form>
      <p>Não é cadastrado? <a href="#" @click.prevent="mostrarLogin = false">Cadastre-se agora!</a></p>
    </div>
  </div>
</template>

<style scoped>
/* Importando as fontes necessárias */
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Titan+One&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Playpen+Sans:wght@300&display=swap');

.container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-family: 'Poppins', sans-serif;
  padding: 40px;
  border-radius: 20px;
  border: 8px solid orange;
  box-shadow: -5px -5px 15px rgba(255, 255, 255, 0.1),
    5px 5px 15px rgba(0, 0, 0, 0.35),
    inset -5px -5px 15px rgba(255, 255, 255, 0.1),
    inset 5px 5px 15px rgba(0, 0, 0, 0.35);
  background: #fc4404;
}

/* Esconde o formulário inativo */
.container .form.signup {
  display: flex;
}
.container .form.signin {
  display: none;
}

.container.signinForm .form.signup {
  display: none;
}
.container.signinForm .form.signin {
  display: flex;
}

.form {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 20px;
  width: 100%;
}

.form h2 {
  color: #ffffff;
  font-weight: 500;
  letter-spacing: 0.1em;
  font-family: 'Playpen Sans', sans-serif;
  margin-bottom: 10px;
}

.inputBox {
  position: relative;
  width: 300px;
  margin-bottom: 15px;
}

.inputBox input {
  padding: 12px 10px 12px 48px;
  border: none;
  width: 100%;
  background: #fc4404;
  border: 1px solid rgba(0, 0, 0, 0.1);
  color: #fff;
  font-weight: 300;
  border-radius: 25px;
  font-size: 1em;
  box-shadow: -5px -5px 15px rgba(255, 255, 255, 0.1),
    5px 5px 15px rgba(0, 0, 0, 0.35);
  transition: 0.5s;
  outline: none;
  font-family: 'Playpen Sans', sans-serif;
}
/* Estilo para placeholder branco */
.inputBox input::placeholder {
  color: rgba(255, 255, 255, 0.7);
  opacity: 1; /* Firefox */
}

.inputBox span {
  position: absolute;
  left: 0;
  padding: 12px 10px 12px 48px;
  pointer-events: none;
  font-size: 1em;
  font-weight: 300;
  transition: 0.5s;
  letter-spacing: 0.05em;
  color: rgba(255, 255, 255, 0.5);
  font-family: 'Playpen Sans', sans-serif;
}

/* Animação do span/label */
.inputBox input:valid ~ span,
.inputBox input:focus ~ span {
  color: white;
  border: 1px solid orange;
  background: orangered;
  transform: translateX(25px) translateY(-7px);
  font-size: 0.6em;
  padding: 0 8px;
  border-radius: 10px;
  letter-spacing: 0.1em;
}

.inputBox input:valid,
.inputBox input:focus {
  border: 1px solid orange;
}

.inputBox .input-icon {
  position: absolute;
  top: 15px;
  left: 16px;
  width: 25px;
  text-align: center;
  padding-right: 8px;
  color: orange;
  border-right: 1px solid orangered;
}

.inputBox input[type="submit"] {
  background: orange;
  color: white;
  padding: 10px 0;
  font-weight: 500;
  cursor: pointer;
  box-shadow: -5px -5px 15px rgba(255, 255, 255, 0.1),
    5px 5px 15px rgba(0, 0, 0, 0.35),
    inset -5px -5px 15px rgba(255, 255, 255, 0.1),
    inset 5px 5px 15px rgba(0, 0, 0, 0.35);
}

.form p {
  color: rgba(255, 255, 255, 0.5);
  font-size: 0.75em;
  font-weight: 300;
  margin-top: 10px;
}

.form p a {
  font-weight: 500;
  color: #fff;
  cursor: pointer;
  text-decoration: underline;
}
</style>