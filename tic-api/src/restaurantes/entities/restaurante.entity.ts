// tic-api/src/products/entities/product.entity.ts
import { Oferta } from 'src/ofertas/oferta.entity'; // 👈 IMPORTE AQUI
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm'; // 👈 IMPORTE OneToMany

@Entity({ name: 'products' })
export class Product {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  // 👇 ADICIONE A RELAÇÃO AQUI
  // Um produto pode ter muitas ofertas
  @OneToMany(() => Oferta, (oferta) => oferta.produto)
  ofertas: Oferta[];
}