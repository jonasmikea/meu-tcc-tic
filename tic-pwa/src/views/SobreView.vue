<template>
  <div class="pagina-sobre">
    <h1>Sobre o TIC - Tá in Casa</h1>
    
    <p>O TIC - Tá in Casa nasceu de um projeto acadêmico (um TCC, para ser exato) com uma missão muito clara: resolver o eterno dilema de "o que vamos comer hoje?".</p>
    <p>Sabemos que a vida é corrida. Às vezes, você tem tempo e inspiração para cozinhar algo incrível. Em outros dias, você só quer que a comida chegue pronta na sua porta. Nosso objetivo é ser a ponte perfeita entre esses dois mundos.</p>
    
    <h2>Qual é o nosso intuito?</h2>
    
    <p>Simples: dar a você o poder de escolha, tudo em um só lugar.</p>
    
    <h3>Para os Chefs Caseiros:</h3>
    <p>Oferecemos um livro de receitas digital. Você pode navegar por pratos incríveis, ver o "Modo de Preparo" e, o melhor de tudo, adicionar os ingredientes necessários diretamente ao seu carrinho com um único clique.</p>
    
    <h3>Para os Fãs de Delivery:</h3>
    <p>Não está a fim de cozinhar? Sem problemas. Para cada receita, mostramos quais restaurantes locais oferecem aquele prato (ou um similar) para delivery imediato.</p>
    
    <p class="destaque">O "TIC" é sobre isso: se você decidir cozinhar, estamos com você. Se decidir pedir, também estamos.</p>
    
    <h2>A Tecnologia por Trás do Prato</h2>
    
    <p>Para os curiosos da tecnologia, este site não é um site comum. Ele foi construído como um PWA (Progressive Web App), o que significa que ele oferece a velocidade de um site com a conveniência de um aplicativo (você pode até "instalá-lo" no seu celular).</p>
    
    <ul class="tech-list">
      <li><strong>Frontend (O que você vê):</strong> A interface rápida e reativa foi toda construída usando Vue.js.</li>
      <li><strong>Backend (O cérebro):</strong> Toda a lógica, desde a busca até o gerenciamento de usuários e carrinhos, roda em uma API robusta feita com NestJS.</li>
      <li><strong>Banco de Dados (A despensa):</strong> Todas as nossas receitas, ingredientes e usuários são armazenados de forma eficiente em um banco de dados SQLite.</li>
    </ul>
    
  </div>
</template>

<style scoped>
/*
 * Este é o estilo de "miolo" que usamos nas outras páginas,
 * garantindo a consistência (congruência) do site.
*/
.pagina-sobre {
  max-width: 900px; /* Ou 800px, o que você usou nas outras */
  margin: 2rem auto; /* Centraliza a caixa de conteúdo */
  padding: 2.5rem;
  background-color: #e7d7cc; /* O fundo bege */
  color: #333; /* Cor de texto escura para ler no bege */
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  line-height: 1.7; /* Aumenta o espaçamento entre linhas (melhora leitura) */
  font-family: 'Poppins', sans-serif;
}

.pagina-sobre h1 {
  text-align: center;
  color: #000;
  font-family: 'Titan One', sans-serif; /* Usando a fonte do login */
  font-size: 2.5rem;
  margin-bottom: 2rem;
}

.pagina-sobre h2 {
  font-family: 'Playpen Sans', sans-serif; /* Usando a fonte do login */
  color: #000;
  font-size: 1.8rem;
  margin-top: 2.5rem;
  margin-bottom: 1rem;
  padding-bottom: 0.5rem;
  border-bottom: 3px solid #ff6b08; /* Linha laranja para separar seções */
}

.pagina-sobre h3 {
  font-weight: 700;
  font-size: 1.25rem;
  color: #333;
  margin-top: 1.5rem;
  margin-bottom: 0.5rem;
}

.pagina-sobre p {
  margin-bottom: 1rem;
  font-size: 1.1rem;
}

.pagina-sobre .destaque {
  font-size: 1.2rem;
  font-weight: 500;
  color: #000;
  text-align: center;
  padding: 1rem;
  background-color: #fdf8f4; /* Um bege bem clarinho */
  border-radius: 5px;
  border-left: 5px solid #ff6b08; /* Destaque laranja */
  margin-top: 2rem;
}

.tech-list {
  list-style-type: none;
  padding-left: 0;
  margin-top: 1.5rem;
}

.tech-list li {
  position: relative;
  padding-left: 35px; /* Espaço para o ícone */
  margin-bottom: 1rem;
  font-size: 1.1rem;
}

/* Ícone de "check" laranja antes de cada item da lista */
.tech-list li::before {
  content: '✓';
  position: absolute;
  left: 0;
  top: 0;
  color: #ff6b08;
  font-weight: bold;
  font-size: 1.5rem;
  line-height: 1.2rem;
}
</style>