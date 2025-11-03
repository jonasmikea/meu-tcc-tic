// Importa o que você precisa do TypeORM
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
// Importa a entidade Receita para fazer a ligação
import { Recipe } from 'src/recipes/entities/recipe.entity';

// Diz ao TypeORM que esta classe é uma tabela chamada 'categorias'
@Entity({ name: 'categorias' })
export class Categoria {
  
  // A chave primária (ID)
  @PrimaryGeneratedColumn('uuid')
  id: string;

  // A coluna para o nome (Ex: "Massas", "Bolos e Doces")
  @Column()
  name: string;
  
  // 👇 AQUI ESTÁ A LIGAÇÃO QUE FALTAVA 👇
  // Uma Categoria pode ter muitas Receitas
  // 'recipe.categoria' é o nome da propriedade que criamos em recipe.entity.ts
  @OneToMany(() => Recipe, (recipe) => recipe.categoria)
  receitas: Recipe[];
}