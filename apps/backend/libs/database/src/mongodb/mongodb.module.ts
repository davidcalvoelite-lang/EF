import { DynamicModule, Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({})
export class MongoDatabaseModule {
  static forRoot(): DynamicModule {
    return {
      module: MongoDatabaseModule,
      imports: [
        MongooseModule.forRootAsync({
          imports: [ConfigModule],
          inject: [ConfigService],
          useFactory: (config: ConfigService) => ({
            uri: config.get<string>(
              'MONGODB_URI',
              'mongodb://ef_user:ef_password@localhost:27017/ef_mongo?authSource=admin',
            ),
          }),
        }),
      ],
    };
  }
}
