// tic-api/src/recipes/recipes.module.ts
import { Module } from '@nestjs/common';
import { RecipesService } from './recipes.service';
import { RecipesController } from './recipes.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Recipe } from './entities/recipe.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Recipe])], // 👈 ADICIONE ESTA LINHA
  controllers: [RecipesController],
  providers: [RecipesService],
})
export class RecipesModule {}