import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { DatabaseModule } from '../../database/database.module';
import { ModuleUtil } from '../../utils/module.util';
import { UserPasswordCrudSeed } from './seed/user-password-crud.seed';
import { UserPasswordDatabase } from './user-password.database';
import { UserPasswordEntity } from './user-password.entity';
import { UserPasswordMapper } from './user-password.mapper';

@Module(
  ModuleUtil.load(
    {
      imports: [TypeOrmModule.forFeature([UserPasswordEntity]), DatabaseModule],
      providers: [UserPasswordDatabase, UserPasswordMapper],
      exports: [UserPasswordMapper],
    },
    {
      providers: [UserPasswordCrudSeed],
    },
  ),
)
export class UserPasswordModule {}
