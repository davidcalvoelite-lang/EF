import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type UserPreferencesDocument = HydratedDocument<UserPreferences>;

@Schema({ timestamps: true, collection: 'user_preferences' })
export class UserPreferences {
  @Prop({ required: true, unique: true })
  userId!: string;

  @Prop({ default: 'light', enum: ['light', 'dark'] })
  theme!: 'light' | 'dark';

  @Prop({ default: 'es' })
  language!: string;

  @Prop({ default: true })
  notifications!: boolean;

  @Prop({ type: Object, default: {} })
  metadata!: Record<string, unknown>;
}

export const UserPreferencesSchema =
  SchemaFactory.createForClass(UserPreferences);
