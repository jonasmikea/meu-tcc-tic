import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from './entities/product.entity';
// 👇 Importe o 'Like'
import { Repository, Like } from 'typeorm';
import { Oferta } from 'src/ofertas/oferta.entity';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>,
    @InjectRepository(Oferta)
    private readonly ofertaRepository: Repository<Oferta>,
  ) {}

  findAll() {
    return this.productRepository.find();
  }

  findOne(id: string) {
    return this.productRepository.findOneBy({ id });
  }

  // Seu método de buscar ofertas (está correto)
  async findOfertasPorProduto(produtoId: string) {
    return this.ofertaRepository
      .createQueryBuilder('oferta')
      .leftJoinAndSelect('oferta.restaurante', 'restaurante')
      .where('oferta.produtoId = :produtoId', { produtoId: produtoId })
      .getMany();
  }

  // 👇 MÉTODO NOVO ADICIONADO AQUI 👇
  async search(termo: string): Promise<Product[]> {
    console.log(`Buscando por: ${termo}`);
    
    // O 'Like' faz a busca "contém" no SQL (Ex: %pizza%)
    return this.productRepository.find({
      where: [
        // Assumindo que seu produto tem um campo 'nome'
        { name: Like(`%${termo}%`) },
        
        // Se quiser buscar na descrição também, descomente a linha abaixo
        // { descricao: Like(`%${termo}%`) }
      ],
    });
  }
}