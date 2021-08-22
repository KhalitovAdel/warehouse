import { forwardRef, Module, Scope } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import * as cfg from 'config';
import { Connection, QueryRunner } from 'typeorm';
import { EntityManager } from 'typeorm/entity-manager/EntityManager';

import { NamespaceEnum } from '../@enum/namespace.enum';
import { Context } from '../context/context';
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
          provide: NamespaceEnum.SESSION_SINGLETON,
          useFactory: async (connection: Connection): Promise<EntityManager> => {
            const runner = await creteRunner(connection);

            return runner.manager;
          },
          inject: [Connection],
        },
        {
          scope: Scope.REQUEST,
          provide: NamespaceEnum.TRANSACTION_RUNNER,
          useFactory: async (connection: Connection): Promise<QueryRunner> => {
            const queryRunner = await creteRunner(connection);
            await queryRunner.startTransaction();

            return queryRunner;
          },
          inject: [Connection],
        },
        {
          scope: Scope.REQUEST,
          provide: NamespaceEnum.DEFAULT_ENTITY_MANAGER,
          useFactory: async (singletonRunner: EntityManager, transactionRunner: QueryRunner, context: Context) => {
            return new Proxy(
              {},
              {
                get(): EntityManager {
                  if (context.isTransactionRequest) return transactionRunner.manager;
                  transactionRunner?.release();

                  return singletonRunner;
                },
              },
            );
          },
          inject: [NamespaceEnum.SESSION_SINGLETON, NamespaceEnum.TRANSACTION_RUNNER, Context],
        },
      ],
      exports: [Transaction, NamespaceEnum.DEFAULT_ENTITY_MANAGER],
    },
    {
      providers: [DatabaseService],
    },
  ),
)
export class DatabaseModule {}
