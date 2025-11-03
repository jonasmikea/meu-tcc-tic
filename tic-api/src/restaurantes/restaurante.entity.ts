// tic-api/src/restaurantes/restaurante.entity.ts
import { Oferta } from 'src/ofertas/oferta.entity';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';

@Entity({ name: 'restaurantes' })
export class Restaurante {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ unique: true })
  nome: string;

  @Column('decimal', { precision: 5, scale: 2 })
  distancia_km: number;

  @Column('decimal', { precision: 10, scale: 2 })
  taxa_de_entrega: number;
  
  // Um restaurante pode ter muitas ofertas
  @OneToMany(() => Oferta, (oferta) => oferta.restaurante)
  ofertas: Oferta[];
}