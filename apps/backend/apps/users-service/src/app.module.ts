import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MongooseModule } from '@nestjs/mongoose';
import { PostgresDatabaseModule, MongoDatabaseModule } from '@ef/database';
import { UsersModule } from './users/users.module';
import { UserProfileEntity } from './users/entities/user-profile.entity';
import {
  UserPreferences,
  UserPreferencesSchema,
} from './users/schemas/user-preferences.schema';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    PostgresDatabaseModule.forRoot({ entities: [UserProfileEntity] }),
    MongoDatabaseModule.forRoot(),
    TypeOrmModule.forFeature([UserProfileEntity]),
    MongooseModule.forFeature([
      { name: UserPreferences.name, schema: UserPreferencesSchema },
    ]),
    UsersModule,
  ],
})
export class AppModule {}
