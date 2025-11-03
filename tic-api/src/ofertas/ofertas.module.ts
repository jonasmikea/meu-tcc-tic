// tic-api/src/ofertas/ofertas.module.ts

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Oferta } from './oferta.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Oferta])], // <-- Adicionamos o registro aqui
})
export class OfertasModule {}