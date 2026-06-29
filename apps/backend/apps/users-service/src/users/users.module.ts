import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { UserProfileEntity } from './entities/user-profile.entity';
import { UserProfileRepository } from './repositories/user-profile.repository';
import { UserPreferencesRepository } from './repositories/user-preferences.repository';
import {
  UserPreferences,
  UserPreferencesSchema,
} from './schemas/user-preferences.schema';

@Module({
  imports: [
    TypeOrmModule.forFeature([UserProfileEntity]),
    MongooseModule.forFeature([
      { name: UserPreferences.name, schema: UserPreferencesSchema },
    ]),
  ],
  controllers: [UsersController],
  providers: [UsersService, UserProfileRepository, UserPreferencesRepository],
})
export class UsersModule {}
