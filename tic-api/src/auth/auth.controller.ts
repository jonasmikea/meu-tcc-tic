// tic-api/src/auth/auth.controller.ts
import { Controller, Request, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @UseGuards(AuthGuard('local')) // Usa a nossa LocalStrategy para proteger a rota
  @Post('login')
  async login(@Request() req) {
    // Se a estratégia local passar, o objeto 'user' será anexado à requisição
    return this.authService.login(req.user);
  }
}