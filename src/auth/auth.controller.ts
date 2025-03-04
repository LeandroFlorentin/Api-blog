import { Body, Controller, Get, Post, Query, Headers } from '@nestjs/common';
import { AuthService } from './auth.service';
import { BodyLogin } from './types';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Get('me')
  async me(@Query('id') id: string, @Headers('Authorization') token: string) {
    const dataUser = await this.authService.getMe(id, token);
    return dataUser;
  }

  @Post('login')
  async login(@Body() body: BodyLogin) {
    const dataLogin = await this.authService.getLogin(body);
    return dataLogin;
  }
}
