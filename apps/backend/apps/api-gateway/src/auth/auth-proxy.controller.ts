import { Body, Controller, Post } from '@nestjs/common';
import { LoginDto, RegisterDto } from '@ef/contracts';
import { AuthProxyService } from './auth-proxy.service';

@Controller('auth')
export class AuthProxyController {
  constructor(private readonly authProxy: AuthProxyService) {}

  @Post('login')
  login(@Body() dto: LoginDto) {
    return this.authProxy.login(dto);
  }

  @Post('register')
  register(@Body() dto: RegisterDto) {
    return this.authProxy.register(dto);
  }

  @Post('validate')
  validate(@Body('token') token: string) {
    return this.authProxy.validateToken(token);
  }
}
