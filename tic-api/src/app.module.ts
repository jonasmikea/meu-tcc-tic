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


// tic-api/src/app.module.ts



// ... importe seus outros modules (UsersModule, AuthModule, etc)


// ... importe suas ENTIDADES (User, Recipe, Product, etc)



@Module({
  imports: [
    // 1. Isso habilita a leitura de variáveis de ambiente (do .env)
    ConfigModule.forRoot({ isGlobal: true }),

    // 2. Este é o novo bloco de conexão do TypeORM
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: () => ({
        type: 'postgres', // 👈 MUDAMOS DE 'sqlite' PARA 'postgres'

        // 3. Ele vai ler a URL do banco do ambiente
        url: process.env.DATABASE_URL, 

        // 4. ESSA É A MÁGICA PARA O RENDER:
        // Diz ao Render para não falhar ao se conectar
        ssl: {
          rejectUnauthorized: false,
        },

        // 5. Nossas entidades (confirme se todas estão aqui)
        entities: [User, Product, Recipe, Categoria, Oferta, Restaurante],

        // 6. Isso vai criar as tabelas (users, recipes, etc)
        //    automaticamente no seu banco novo. Essencial!
        synchronize: true, 
      }),
    }),

    // 7. Seus outros módulos
    UsersModule,
    AuthModule,
    ProductsModule,
    RecipesModule,
    CategoriasModule,
    OfertasModule,
    RestaurantesModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}