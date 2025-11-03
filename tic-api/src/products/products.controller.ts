// 👇 Importe o 'Query'
import { Controller, Get, Param, Query } from '@nestjs/common';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
  constructor(private readonly produtosService: ProductsService) {}

  // Rota para GET /products (agora com busca)
  @Get()
  // 👇 MODIFICADO AQUI 👇
  findAll(@Query('q') termoBusca: string) {
    if (termoBusca) {
      // Se tiver ?q=... na URL, chama o novo método de busca
      return this.produtosService.search(termoBusca);
    } else {
      // Se não tiver, retorna tudo como antes
      return this.produtosService.findAll();
    }
  }

  // Rota para GET /products/:id (Ex: /products/abc-123)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.produtosService.findOne(id);
  }

  // Rota para GET /products/:id/ofertas (Seu método)
  @Get(':id/ofertas')
  findOfertasPorProduto(@Param('id') id: string) {
    return this.produtosService.findOfertasPorProduto(id);
  }
}