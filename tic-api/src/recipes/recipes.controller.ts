// 👇 Importe o 'Query'
import { Controller, Get, Param, Query } from '@nestjs/common';
import { RecipesService } from './recipes.service';
import { Recipe } from './entities/recipe.entity';

@Controller('recipes')
export class RecipesController {
  constructor(private readonly recipesService: RecipesService) {}

  @Get()
  // 👇 MODIFICADO AQUI 👇
  findAll(@Query('q') termoBusca: string): Promise<Recipe[]> {
    if (termoBusca) {
      // Se a URL for /recipes?q=pizza, chama a busca
      return this.recipesService.search(termoBusca);
    } else {
      // Se for /recipes, retorna tudo
      return this.recipesService.findAll();
    }
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Recipe> {
    return this.recipesService.findOne(id);
  }
}