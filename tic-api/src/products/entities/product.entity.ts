// tic-api/src/products/entities/product.entity.ts
import { Oferta } from 'src/ofertas/oferta.entity';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';

@Entity({ name: 'products' })
export class Product {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;
  
  // 👇 PROPRIEDADE FALTANTE ADICIONADA AQUI
  // Um produto pode ter muitas ofertas
  @OneToMany(() => Oferta, (oferta) => oferta.produto)
  ofertas: Oferta[];
}