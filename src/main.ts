import { NestFactory } from '@nestjs/core';
import * as cfg from 'config';

import { HttpExceptionFilter } from './@filters/http-exception.filter';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalFilters(new HttpExceptionFilter());
  await app.listen(cfg.get('http.port'));
}

bootstrap();
