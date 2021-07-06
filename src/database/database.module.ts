import { forwardRef, Module, Scope } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import * as cfg from 'config';
import { Connection, QueryRunner } from 'typeorm';
import { EntityManager } from 'typeorm/entity-manager/EntityManager';

import { NamespaceEnum } from '../@enum/namespace.enum';
import { ContextModule } from '../context/context.module';
import { ModuleUtil } from '../utils/module.util';
import { DatabaseService } from './database.service';
import { Transaction } from './transaction';

const creteRunner = async (connection: Connection): Promise<QueryRunner> => {
  const queryRunner = connection.createQueryRunner();
  await queryRunner.connect();

  return queryRunner;
};

@Module(
  ModuleUtil.load(
    {
      imports: [
        TypeOrmModule.forRoot({
          type: 'postgres',
          host: cfg.get('db.host'),
          port: cfg.get('db.port'),
          username: cfg.get('db.username'),
          password: cfg.get('db.password'),
          database: cfg.get('db.database'),
          synchronize: true,
          autoLoadEntities: true,
        }),
        forwardRef(() => ContextModule),
      ],
      providers: [
        Transaction,
        {
          provide: NamespaceEnum[NamespaceEnum.SESSION_SINGLETON],
          useFactory: async (connection: Connection): Promise<EntityManager> => {
            const runner = await creteRunner(connection);

            return runner.manager;
          },
          inject: [Connection],
        },
        {
          scope: Scope.REQUEST,
          provide: NamespaceEnum[NamespaceEnum.TRANSACTION_RUNNER],
          useFactory: async (connection: Connection): Promise<QueryRunner | undefined> => {
            const queryRunner = await creteRunner(connection);
            await queryRunner.startTransaction();

            return queryRunner;
          },
          inject: [Connection],
        },
        {
          scope: Scope.REQUEST,
          provide: NamespaceEnum[NamespaceEnum.SESSION_TRANSACTION],
          useFactory: (sessionRunner: QueryRunner): EntityManager => {
            return sessionRunner.manager;
          },
          inject: [NamespaceEnum[NamespaceEnum.TRANSACTION_RUNNER]],
        },
      ],
      exports: [
        Transaction,
        NamespaceEnum[NamespaceEnum.SESSION_TRANSACTION],
        NamespaceEnum[NamespaceEnum.SESSION_SINGLETON],
      ],
    },
    {
      providers: [DatabaseService],
    },
  ),
)
export class DatabaseModule {}
