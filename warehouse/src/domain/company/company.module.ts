import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ContextModule } from '../../context/context.module';
import { DatabaseModule } from '../../database/database.module';
import { ModuleUtil } from '../../utils/module.util';
import { CompanyDatabase } from './company.database';
import { CompanyEntity } from './company.entity';
import { CompanyMapper } from './company.mapper';
import { CompanyCrudSeed } from './seed/company-crud.seed';

@Module(
  ModuleUtil.load(
    {
      imports: [TypeOrmModule.forFeature([CompanyEntity]), DatabaseModule, ContextModule],
      providers: [CompanyMapper, CompanyDatabase],
      exports: [CompanyMapper],
    },
    {
      providers: [CompanyCrudSeed],
    },
  ),
)
export class CompanyModule {}
