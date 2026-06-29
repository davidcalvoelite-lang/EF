import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JwtModule } from '@nestjs/jwt';
import { PostgresDatabaseModule } from '@ef/database';
import { AuthModule } from './auth/auth.module';
import { UserEntity } from './auth/entities/user.entity';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    PostgresDatabaseModule.forRoot({ entities: [UserEntity] }),
    TypeOrmModule.forFeature([UserEntity]),
    JwtModule.register({
      global: true,
      secret: process.env.JWT_SECRET ?? 'ef-dev-secret-change-in-production',
      signOptions: { expiresIn: '7d' },
    }),
    AuthModule,
  ],
})
export class AppModule {}
