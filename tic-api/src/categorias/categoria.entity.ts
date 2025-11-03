// tic-api/src/categorias/categoria.entity.ts
import { Recipe } from 'src/recipes/entities/recipe.entity';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';

@Entity({ name: 'categorias' })
export class Categoria {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ unique: true })
  nome: string;

  // Uma Categoria pode ter muitas Receitas
  @OneToMany(() => Recipe, (recipe) => recipe.categoria)
  receitas: Recipe[];
}