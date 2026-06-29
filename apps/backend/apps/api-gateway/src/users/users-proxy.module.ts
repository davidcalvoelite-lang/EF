import { Module } from '@nestjs/common';
import { MicroservicesClientsModule } from '../clients/microservices-clients.module';
import { UsersProxyController } from './users-proxy.controller';
import { UsersProxyService } from './users-proxy.service';

@Module({
  imports: [MicroservicesClientsModule],
  controllers: [UsersProxyController],
  providers: [UsersProxyService],
})
export class UsersProxyModule {}
