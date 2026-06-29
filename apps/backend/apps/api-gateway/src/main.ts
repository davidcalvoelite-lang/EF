import { NestFactory } from '@nestjs/core';
import { ConfigService } from '@nestjs/config';
import { AppModule } from './app.module';
import {
  AllExceptionsFilter,
  globalValidationPipe,
  LoggingInterceptor,
} from '@ef/common';

async function bootstrap(): Promise<void> {
  const app = await NestFactory.create(AppModule);
  const config = app.get(ConfigService);

  app.useGlobalPipes(globalValidationPipe);
  app.useGlobalFilters(new AllExceptionsFilter());
  app.useGlobalInterceptors(new LoggingInterceptor());
  app.enableCors();
  app.setGlobalPrefix('api');

  const port = config.get<number>('API_GATEWAY_PORT', 3000);
  await app.listen(port);
  console.log(`API Gateway running on http://localhost:${port}/api`);
}

bootstrap();
