import { IsObject, IsOptional, IsString } from 'class-validator';

export interface UserProfile {
  id: string;
  email: string;
  name: string;
  createdAt: Date;
}

export class UpdateProfileDto {
  @IsOptional()
  @IsString()
  name?: string;
}

export class UpdatePreferencesDto {
  @IsObject()
  preferences!: Record<string, unknown>;
}

export interface UserPreferences {
  userId: string;
  theme: 'light' | 'dark';
  language: string;
  notifications: boolean;
  metadata?: Record<string, unknown>;
}
