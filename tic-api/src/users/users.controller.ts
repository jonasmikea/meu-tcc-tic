// Local: tic-api/src/users/users.controller.ts

import { Controller, Post, Body } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';

@Controller('users') // Define que todas as rotas deste controller começarão com /users
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  // Este decorador @Post() diz ao NestJS para criar um endpoint que responde ao método HTTP POST.
  // Como não especificamos um caminho, ele usará a rota base do controller: POST /users
  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    // O @Body() pega o corpo (body) da requisição e, graças à nossa configuração no main.ts,
    // ele automaticamente valida os dados usando as regras do CreateUserDto.
    // Se os dados forem válidos, ele chama nosso service para criar o usuário.
    return this.usersService.create(createUserDto);
  }
}