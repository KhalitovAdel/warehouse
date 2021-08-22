import { ModuleMetadata } from '@nestjs/common/interfaces/modules/module-metadata.interface';
import { Test, TestingModule } from '@nestjs/testing';

import { HttpExceptionFilter } from '../@filter/http-exception.filter';
import { ContextModule } from '../context/context.module';
import { DatabaseModule } from '../database/database.module';

export const initApplication = async (
  metadata: ModuleMetadata,
  cb?: (module: TestingModule) => Promise<void> | void,
) => {
  if (!metadata.imports) metadata.imports = [];
  metadata.imports.push(DatabaseModule, ContextModule);

  const module: TestingModule = await Test.createTestingModule(metadata).compile();

  if (cb) {
    await cb(module);
  }

  const app = module.createNestApplication();
  app.useGlobalFilters(new HttpExceptionFilter());

  return app;
};
