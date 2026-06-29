import { Module } from '@nestjs/common';
import { MicroservicesClientsModule } from '../clients/microservices-clients.module';
import { AuthProxyController } from './auth-proxy.controller';
import { AuthProxyService } from './auth-proxy.service';

@Module({
  imports: [MicroservicesClientsModule],
  controllers: [AuthProxyController],
  providers: [AuthProxyService],
})
export class AuthProxyModule {}
