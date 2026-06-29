import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserProfileEntity } from '../entities/user-profile.entity';

@Injectable()
export class UserProfileRepository {
  constructor(
    @InjectRepository(UserProfileEntity)
    private readonly repo: Repository<UserProfileEntity>,
  ) {}

  findById(id: string): Promise<UserProfileEntity | null> {
    return this.repo.findOne({ where: { id } });
  }

  async updateName(id: string, name: string): Promise<UserProfileEntity | null> {
    await this.repo.update({ id }, { name });
    return this.findById(id);
  }
}
