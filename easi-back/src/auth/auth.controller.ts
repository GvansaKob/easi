import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  async login(@Body() body: { email: string; mot_de_passe: string }) {
    const user = await this.authService.validateUser(body.email, body.mot_de_passe);
    return this.authService.login(user);
  }
}
