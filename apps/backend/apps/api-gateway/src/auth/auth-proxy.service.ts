import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { firstValueFrom } from 'rxjs';
import { MESSAGE_PATTERNS, SERVICE_NAMES } from '@ef/common';
import {
  AuthResponse,
  LoginDto,
  RegisterDto,
  ValidateTokenResponse,
} from '@ef/contracts';

@Injectable()
export class AuthProxyService {
  constructor(
    @Inject(SERVICE_NAMES.AUTH) private readonly authClient: ClientProxy,
  ) {}

  login(dto: LoginDto): Promise<AuthResponse> {
    return firstValueFrom(
      this.authClient.send<AuthResponse>(MESSAGE_PATTERNS.AUTH.LOGIN, dto),
    );
  }

  register(dto: RegisterDto): Promise<AuthResponse> {
    return firstValueFrom(
      this.authClient.send<AuthResponse>(MESSAGE_PATTERNS.AUTH.REGISTER, dto),
    );
  }

  validateToken(token: string): Promise<ValidateTokenResponse> {
    return firstValueFrom(
      this.authClient.send<ValidateTokenResponse>(
        MESSAGE_PATTERNS.AUTH.VALIDATE_TOKEN,
        { token },
      ),
    );
  }
}
