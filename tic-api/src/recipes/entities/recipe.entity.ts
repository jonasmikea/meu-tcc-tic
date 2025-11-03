// tic-api/src/recipes/entities/recipe.entity.ts
import { Categoria } from 'src/categorias/categoria.entity'; // 👈 IMPORTE AQUI
import { Product } from 'src/products/entities/product.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToMany,
  JoinTable,
  ManyToOne, // 👈 IMPORTE AQUI
} from 'typeorm';

@Entity({ name: 'recipes' })
export class Recipe {
  // ... (id, title, description, etc. continuam iguais)
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column({nullable: true})
  imageUrl: string;

  @Column('text')
  instructions: string;

  // 👇 ADICIONE A RELAÇÃO AQUI 👇
  // Muitas Receitas podem pertencer a uma Categoria
  @ManyToOne(() => Categoria, (categoria) => categoria.receitas)
  categoria: Categoria;

  @ManyToMany(() => Product, { eager: true })
  @JoinTable()
  ingredients: Product[];
}