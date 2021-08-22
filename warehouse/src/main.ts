import { NestFactory } from '@nestjs/core';

import cfg from '@/cfg';

import { HttpExceptionFilter } from './@filter/http-exception.filter';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalFilters(new HttpExceptionFilter());
  await app.listen(cfg.warehouse.http.port);
}

bootstrap();
