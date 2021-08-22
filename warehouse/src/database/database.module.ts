import { forwardRef, Module, Scope } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection, QueryRunner } from 'typeorm';
import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';
import { EntityManager } from 'typeorm/entity-manager/EntityManager';

import cfg from '@/cfg';

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
          type: cfg.db.type as PostgresConnectionOptions['type'],
          host: cfg.db.host,
          port: cfg.db.port,
          username: cfg.db.username,
          password: cfg.db.password,
          database: cfg.db.database,
          synchronize: cfg.db.synchronize,
          autoLoadEntities: cfg.db.autoLoadEntities,
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
          useFactory: (
            singletonRunner: EntityManager,
            transactionRunner: QueryRunner,
            context: Context,
          ): EntityManager => {
            return new Proxy<EntityManager>(singletonRunner, {
              get(target, prop: keyof EntityManager) {
                const service = context.isTransactionRequest ? transactionRunner.manager : target;
                if (!context.isTransactionRequest && !transactionRunner.isReleased) {
                  transactionRunner?.release();
                }

                return service[prop];
              },
            });
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
