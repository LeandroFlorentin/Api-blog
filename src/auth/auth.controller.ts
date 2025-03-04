import { Controller, Get, Query } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Get('me')
  async getMe(@Query('id') id: string) {
    const dataUser = await this.authService.getMe(id);
    return dataUser;
  }
}
