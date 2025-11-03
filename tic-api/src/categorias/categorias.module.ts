// tic-api/src/categorias/categorias.module.ts
import { Module } from '@nestjs/common';
import { CategoriasService } from './categorias.service';
import { CategoriasController } from './categorias.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Categoria } from './categoria.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Categoria])], // 👈 ADICIONE ESTA LINHA
  controllers: [CategoriasController],
  providers: [CategoriasService],
})
export class CategoriasModule {}