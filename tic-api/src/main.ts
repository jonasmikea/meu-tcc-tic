import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Product } from './products/entities/product.entity';
import { Recipe } from './recipes/entities/recipe.entity';
import { Categoria } from './categorias/categoria.entity';
import { Restaurante } from './restaurantes/restaurante.entity';
import { Oferta } from './ofertas/oferta.entity';
import { User } from './users/entities/user.entity'; // 👈 CORRETO
// 👇 1. DEFINIMOS O "FORMATO" DE UMA OFERTA PARA O TYPESCRIPT
interface OfertaParaSalvar {
  restaurante: Restaurante;
  produto: Product;
  preco: number;
}

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  app.enableCors();

  // --- SCRIPT DE SEED ---
  const productRepo = app.get(getRepositoryToken(Product));
  const recipeRepo = app.get(getRepositoryToken(Recipe));
  const categoryRepo = app.get(getRepositoryToken(Categoria));
  const restauranteRepo = app.get(getRepositoryToken(Restaurante));
  const ofertaRepo = app.get(getRepositoryToken(Oferta));

  const recipeCount = await recipeRepo.count(); // 👈 MUDEI AQUI
  if (recipeCount === 0) {
    console.log('Populando banco de dados com dados completos...');

    // Categorias
    const catMassas = await categoryRepo.save({ nome: 'Massas' });
    const catBolos = await categoryRepo.save({ nome: 'Bolos e Doces' });
    const catBrasileira = await categoryRepo.save({ nome: 'Culinária Brasileira' });
    console.log('Categorias criadas!');

    // Ingredientes (Adapte a lista conforme necessário)
    const ingredientesData = [
        { name: 'Tomate Pelado (lata)' }, { name: 'Carne Moída (500g)' },
        { name: 'Massa de Lasanha (caixa)' }, { name: 'Queijo Mussarela (300g)' },
        { name: 'Cenoura (unidade)' }, { name: 'Chocolate em Pó (xícara)' },
        { name: 'Feijão Preto (500g)' }, { name: 'Carne Seca (300g)' },
        { name: 'Linguiça Paio (200g)' }, { name: 'Peixe Branco (500g)' },
        { name: 'Coentro (maço)' }, { name: 'Leite de Coco (200ml)' },
        { name: 'Fubá' }, { name: 'Leite (ml)' }, { name: 'Óleo (ml)' }, { name: 'Fermento em Pó' },
        { name: 'Laranja (unidade)' }, { name: 'Limão (unidade)' }, { name: 'Coco Ralado' },
        { name: 'Maçã (unidade)' }, { name: 'Canela em Pó' }, { name: 'Banana (unidade)' },
        { name: 'Cacau em Pó' }, { name: 'Corante Vermelho' }, { name: 'Vinagre Branco' },
        { name: 'Chocolate Granulado' }, { name: 'Ovo (unidade)' }, { name: 'Queijo Minas (ralado)' },
        { name: 'Manteiga (colher de sopa)' }, { name: 'Farinha de Trigo (xícara)' },
         { name: 'Pimentão (unidade)' }, { name: 'Alho (dente)' }, { name: 'Cebola (unidade)' },
         { name: 'Bacon (150g)'}, { name: 'Queijo Parmesão (ralado)'},
         { name: 'Leite Condensado (lata)' }, // Adicionei o que faltava
    ];
    const ingredientesEntities = productRepo.create(ingredientesData);
    await productRepo.save(ingredientesEntities);
    const ingredientes = await productRepo.find();
    console.log(`${ingredientes.length} Ingredientes criados!`);

    const findIngredients = (...names) =>
      names.map(name => ingredientes.find(ing => ing.name === name)).filter(Boolean);

    // Pratos/Bolos (Produtos vendáveis)
    const pratosVendaveis = await productRepo.save([
        { name: 'Lasanha à Bolonhesa' }, { name: 'Bolo de Cenoura com Chocolate' },
        { name: 'Feijoada Completa' }, { name: 'Moqueca de Peixe' },
        { name: 'Bolo de Fubá Cremoso' }, { name: 'Bolo de Laranja Fofinho' },
        { name: 'Bolo de Limão com Glacê' }, { name: 'Bolo Toalha Felpuda (Coco)' },
        { name: 'Bolo de Maçã com Canela' }, { name: 'Bolo de Banana Caramelada' },
        { name: 'Bolo Nega Maluca (Chocolate)' }, { name: 'Bolo Red Velvet' },
        { name: 'Bolo Formigueiro' },
    ]);
    console.log(`${pratosVendaveis.length} Pratos/Bolos criados!`);

    // ######################################################################
    // ## 👇 AQUI ESTÁ SUA TAREFA: SUBSTITUA OS 'imageUrl' 👇 ##
    // ######################################################################
    
    const receitasData = [
        { title: 'Receita de Lasanha à Bolonhesa', description: 'A clássica lasanha caseira.', instructions: 'Monte as camadas e asse.', 
          imageUrl: 'LINK_DA_IMAGEM_AQUI', // Substitua '/images/lasanha.jpg'
          categoria: catMassas, ingredients: findIngredients('Tomate Pelado (lata)', 'Carne Moída (500g)', 'Massa de Lasanha (caixa)', 'Queijo Mussarela (300g)', 'Cebola (unidade)', 'Alho (dente)') },
        
        { title: 'Receita de Bolo de Cenoura', description: 'Bolo fofinho com cobertura de chocolate.', instructions: 'Bata tudo e asse.', 
          imageUrl: 'LINK_DA_IMAGEM_AQUI', // Substitua '/images/bolo-de-cenoura.jpg'
          categoria: catBolos, ingredients: findIngredients('Cenoura (unidade)', 'Chocolate em Pó (xícara)', 'Ovo (unidade)', 'Farinha de Trigo (xícara)', 'Óleo (ml)', 'Fermento em Pó') },
        
        { title: 'Receita de Feijoada Completa', description: 'O prato mais famoso do Brasil.', instructions: 'Cozinhe o feijão com as carnes.', 
          imageUrl: 'LINK_DA_IMAGEM_AQUI', // Substitua '/images/feijoada.jpg'
          categoria: catBrasileira, ingredients: findIngredients('Feijão Preto (500g)', 'Carne Seca (300g)', 'Linguiça Paio (200g)', 'Bacon (150g)', 'Cebola (unidade)', 'Alho (dente)') },
        
        { title: 'Receita de Moqueca de Peixe', description: 'Um clássico da culinária baiana.', instructions: 'Faça um refogado e cozinhe o peixe.', 
          imageUrl: 'LINK_DA_IMAGEM_AQUI', // Substitua '/images/moqueca.jpg'
          categoria: catBrasileira, ingredients: findIngredients('Peixe Branco (500g)', 'Leite de Coco (200ml)', 'Coentro (maço)', 'Pimentão (unidade)', 'Cebola (unidade)', 'Tomate Pelado (lata)', 'Alho (dente)') },
        
        { title: 'Receita de Bolo de Fubá Cremoso', description: 'Aquele bolo da vovó com textura cremosa.', instructions: '1. Bata líquidos. 2. Misture secos. 3. Asse.', 
          imageUrl: 'LINK_DA_IMAGEM_AQUI', // Substitua '/images/bolo-fuba.jpg'
          categoria: catBolos, ingredients: findIngredients('Fubá', 'Leite (ml)', 'Ovo (unidade)', 'Óleo (ml)', 'Queijo Minas (ralado)', 'Fermento em Pó') },
        
        { title: 'Receita de Bolo de Laranja Fofinho', description: 'Simples, fofinho e com aroma cítrico.', instructions: '1. Bata ovos, açúcar, óleo. 2. Adicione suco/raspas. 3. Incorpore farinha/fermento. 4. Asse.', 
          imageUrl: 'LINK_DA_IMAGEM_AQUI', // Substitua '/images/bolo-laranja.jpg'
          categoria: catBolos, ingredients: findIngredients('Laranja (unidade)', 'Ovo (unidade)', 'Farinha de Trigo (xícara)', 'Óleo (ml)', 'Fermento em Pó') },
        
        { title: 'Receita de Bolo de Limão com Glacê', description: 'Massa leve com cobertura azedinha.', instructions: '1. Faça massa similar ao de laranja. 2. Asse. 3. Faça glacê com limão/açúcar.', 
          imageUrl: 'LINK_DA_IMAGEM_AQUI', // Substitua '/images/bolo-limao.jpg'
          categoria: catBolos, ingredients: findIngredients('Limão (unidade)', 'Ovo (unidade)', 'Farinha de Trigo (xícara)', 'Leite (ml)', 'Manteiga (colher de sopa)', 'Fermento em Pó') },
        
        { title: 'Receita de Bolo Toalha Felpuda', description: 'Bolo branco molhadinho com coco.', instructions: '1. Faça bolo branco. 2. Fure e regue com calda. 3. Cubra com coco ralado.', 
          imageUrl: 'LINK_DA_IMAGEM_AQUI', // Substitua '/images/bolo-coco.jpg'
          categoria: catBolos, ingredients: findIngredients('Ovo (unidade)', 'Farinha de Trigo (xícara)', 'Leite (ml)', 'Coco Ralado', 'Leite de Coco (200ml)', 'Leite Condensado (lata)') },
        
        { title: 'Receita de Bolo de Maçã com Canela', description: 'Bolo úmido e aromático.', instructions: '1. Misture secos. 2. Adicione ovos, óleo, maçãs. 3. Asse.', 
          imageUrl: 'LINK_DA_IMAGEM_AQUI', // Substitua '/images/bolo-maca-canela.jpg'
          categoria: catBolos, ingredients: findIngredients('Maçã (unidade)', 'Canela em Pó', 'Ovo (unidade)', 'Farinha de Trigo (xícara)', 'Óleo (ml)', 'Fermento em Pó') },
        
        { title: 'Receita de Bolo de Banana Caramelada', description: 'Bolo invertido com bananas caramelizadas.', instructions: '1. Caramelize forma, coloque bananas. 2. Faça massa, despeje. 3. Asse e desenforme.', 
          imageUrl: 'LINK_DA_IMAGEM_AQUI', // Substitua '/images/bolo-banana.jpg'
          categoria: catBolos, ingredients: findIngredients('Banana (unidade)', 'Ovo (unidade)', 'Farinha de Trigo (xícara)', 'Leite (ml)', 'Manteiga (colher de sopa)', 'Fermento em Pó') },
        
        { title: 'Receita de Bolo Nega Maluca', description: 'Bolo de chocolate fofinho com calda.', instructions: '1. Misture secos. 2. Adicione ovos, óleo, água quente. 3. Asse. 4. Faça calda e cubra.', 
          imageUrl: 'LINK_DA_IMAGEM_AQUI', // Substitua '/images/bolo-chocolate.jpg'
          categoria: catBolos, ingredients: findIngredients('Chocolate em Pó (xícara)', 'Ovo (unidade)', 'Farinha de Trigo (xícara)', 'Óleo (ml)', 'Fermento em Pó') },
        
        { title: 'Receita de Bolo Red Velvet', description: 'O famoso bolo "veludo vermelho".', instructions: '1. Misture secos (cacau). 2. Misture líquidos (corante/vinagre). 3. Combine e asse. 4. Cubra com glacê.', 
          imageUrl: 'LINK_DA_IMAGEM_AQUI', // Substitua '/images/bolo-red-velvet.jpg'
          categoria: catBolos, ingredients: findIngredients('Farinha de Trigo (xícara)', 'Cacau em Pó', 'Ovo (unidade)', 'Óleo (ml)', 'Corante Vermelho', 'Vinagre Branco') },
        
        { title: 'Receita de Bolo Formigueiro', description: 'Bolo branco com granulado na massa.', instructions: '1. Faça massa branca. 2. Misture granulado. 3. Asse.', 
          imageUrl: 'LINK_DA_IMAGEM_AQUI', // Substitua '/images/bolo-formigueiro.jpg'
          categoria: catBolos, ingredients: findIngredients('Ovo (unidade)', 'Farinha de Trigo (xícara)', 'Leite (ml)', 'Manteiga (colher de sopa)', 'Chocolate Granulado', 'Fermento em Pó') },
    ];
    await recipeRepo.save(receitasData);
    console.log(`${receitasData.length} receitas criadas!`);

    // Restaurantes
    const restaurantes = await restauranteRepo.save([
        { nome: 'Cantina da Nonna', distancia_km: 2.5, taxa_de_entrega: 5.00 },
        { nome: 'Restaurante Sabor da Terra', distancia_km: 7.8, taxa_de_entrega: 10.00 },
        { nome: 'Doce Pedaço Café', distancia_km: 4.2, taxa_de_entrega: 7.00 },
    ]);
    console.log(`${restaurantes.length} restaurantes criados!`);

    // Ofertas (Todos vendem tudo)
    const ofertasParaSalvar: OfertaParaSalvar[] = []; 
    let precoBase = 10.00;

    for (const restaurante of restaurantes) {
      for (const prato of pratosVendaveis) {
        const precoOferta = precoBase + Math.random() * 5;
        ofertasParaSalvar.push({
          restaurante: restaurante,
          produto: prato,
          preco: parseFloat(precoOferta.toFixed(2))
        });
        precoBase += 1.50;
      }
      precoBase += 5.00;
    }

    await ofertaRepo.save(ofertasParaSalvar);
    console.log(`${ofertasParaSalvar.length} ofertas criadas!`);
    
    console.log('Seed concluído!');
  } else {
    console.log('Banco de dados já populado. Seed não executado.');
  }
  
  await app.listen(process.env.PORT || 3000, '0.0.0.0');
  console.log(`Application is running on: ${await app.getUrl()}`);
}
bootstrap();
