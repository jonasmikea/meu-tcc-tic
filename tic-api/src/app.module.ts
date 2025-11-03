// tic-api/src/app.module.ts

import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { ProductsModule } from './products/products.module';
import { RecipesModule } from './recipes/recipes.module';
import { User } from './users/entities/user.entity';
import { Product } from './products/entities/product.entity';
import { Recipe } from './recipes/entities/recipe.entity';
import { ServeStaticModule } from '@nestjs/serve-static'; // 👈 NOVO IMPORT
import { join } from 'path'; // 👈 NOVO IMPORT
import { Categoria } from './categorias/categoria.entity'; // 👈 IMPORTE AQUI
import { CategoriasModule } from './categorias/categorias.module';
import { RestaurantesModule } from './restaurantes/restaurantes.module';
import { Restaurante } from './restaurantes/restaurante.entity';
import { Oferta } from './ofertas/oferta.entity'; // 👈 IMPORTE AQUI
import { OfertasModule } from './ofertas/ofertas.module';



@Module({
  imports: [
    // Módulo para servir nossos arquivos de imagem da pasta 'public'
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'public'),
    }),
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'db/tic.db',
      entities: [User, Product, Recipe, Categoria, Restaurante, Oferta],
      synchronize: true,
    }),
    UsersModule,
    AuthModule,
    ProductsModule,
    RecipesModule,
    CategoriasModule,
    RestaurantesModule,
    OfertasModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}