// tic-api/src/products/products.module.ts
import { Module } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from './entities/product.entity';
import { Oferta } from 'src/ofertas/oferta.entity';
@Module({
  imports: [TypeOrmModule.forFeature([Product, Oferta])], // 👈 ADICIONE ESTA LINHA
  controllers: [ProductsController],
  providers: [ProductsService],
})
export class ProductsModule {}