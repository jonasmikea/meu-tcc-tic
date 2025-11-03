// tic-api/src/auth/local.strategy.ts

import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    // Dizemos ao passport para usar o campo 'email' como campo de "usuário"
    super({ usernameField: 'email' });
  }

  // Esta função é chamada automaticamente pelo Passport quando usamos o AuthGuard('local')
  async validate(email: string, pass: string): Promise<any> {
    // Chamamos nosso serviço para validar o usuário e a senha
    const user = await this.authService.validateUser(email, pass);
    if (!user) {
      // Se o serviço não retornar um usuário, lançamos um erro de não autorizado
      throw new UnauthorizedException('Credenciais inválidas');
    }
    // Se tudo estiver certo, o Passport anexa o usuário à requisição
    return user;
  }
}