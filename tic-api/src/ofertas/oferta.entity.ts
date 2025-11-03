// tic-api/src/ofertas/oferta.entity.ts
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Restaurante } from '../restaurantes/restaurante.entity';
import { Product } from '../products/entities/product.entity';

@Entity({ name: 'ofertas' })
export class Oferta {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('decimal', { precision: 10, scale: 2 })
  preco: number;

  // Muitas ofertas podem pertencer a um restaurante
  @ManyToOne(() => Restaurante, (restaurante) => restaurante.ofertas)
  restaurante: Restaurante;

  // Muitas ofertas podem ser de um produto
  @ManyToOne(() => Product, (produto) => produto.ofertas)
  produto: Product;
}