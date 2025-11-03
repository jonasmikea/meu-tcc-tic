import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
// 👇 Importe o 'Like'
import { Repository, Like } from 'typeorm';
import { Recipe } from './entities/recipe.entity';

@Injectable()
export class RecipesService {
  constructor(
    @InjectRepository(Recipe)
    private readonly recipeRepository: Repository<Recipe>,
  ) {}

  async findAll(): Promise<Recipe[]> {
    return await this.recipeRepository.find();
  }

  async findOne(id: string): Promise<Recipe> {
    const recipe = await this.recipeRepository.findOne({ where: { id } });
    if (!recipe) {
      throw new NotFoundException('Receita não encontrada');
    }
    return recipe;
  }

  // 👇 MÉTODO NOVO ADICIONADO AQUI 👇
  async search(termo: string): Promise<Recipe[]> {
    console.log(`Buscando receitas por: ${termo}`);

    // Eu vi no seu frontend que você usa 'receita.title'.
    // Se o nome da coluna no seu 'recipe.entity.ts' for outro, troque 'title'
    return await this.recipeRepository.find({
      where: [
        { title: Like(`%${termo}%`) },
        // Se quiser buscar na descrição também, adicione aqui
        // { description: Like(`%${termo}%`) } 
      ],
    });
  }
}