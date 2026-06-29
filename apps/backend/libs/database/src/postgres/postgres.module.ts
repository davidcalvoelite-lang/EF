import { DynamicModule, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';

export interface PostgresModuleOptions {
  entities: Function[];
}

@Module({})
export class PostgresDatabaseModule {
  static forRoot(options: PostgresModuleOptions): DynamicModule {
    return {
      module: PostgresDatabaseModule,
      imports: [
        TypeOrmModule.forRootAsync({
          imports: [ConfigModule],
          inject: [ConfigService],
          useFactory: (config: ConfigService) => ({
            type: 'postgres' as const,
            host: config.get<string>('POSTGRES_HOST', 'localhost'),
            port: config.get<number>('POSTGRES_PORT', 5432),
            username: config.get<string>('POSTGRES_USER', 'ef_user'),
            password: config.get<string>('POSTGRES_PASSWORD', 'ef_password'),
            database: config.get<string>('POSTGRES_DB', 'ef_db'),
            entities: options.entities,
            synchronize: config.get<string>('NODE_ENV') !== 'production',
            logging: config.get<string>('NODE_ENV') === 'development',
          }),
        }),
      ],
    };
  }
}
