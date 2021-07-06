import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { DatabaseModule } from '../../database/database.module';
import { ModuleUtil } from '../../utils/module.util';
import { CompanyModule } from '../company/company.module';
import { UserPasswordModule } from '../user-password/user-password.module';
import { UserCrudSeed } from './seed/user-crud.seed';
import { UserDatabase } from './user.database';
import { UserEntity } from './user.entity';
import { UserMapper } from './user.mapper';

@Module(
  ModuleUtil.load(
    {
      imports: [TypeOrmModule.forFeature([UserEntity]), DatabaseModule],
      providers: [UserDatabase, UserMapper],
      exports: [UserMapper],
    },
    {
      imports: [UserPasswordModule, CompanyModule],
      providers: [UserCrudSeed],
    },
  ),
)
export class UserModule {}
