import { forwardRef, Inject, Injectable, Scope } from '@nestjs/common';
import { QueryRunner } from 'typeorm';

import { NamespaceEnum } from '../@enum/namespace.enum';
import { Context } from '../context/context';
import { ITransaction } from './interfaces/transaction.interface';

@Injectable({ scope: Scope.REQUEST })
export class Transaction implements ITransaction {
  constructor(
    @Inject(forwardRef(() => Context)) protected readonly ctx: Context,
    @Inject(NamespaceEnum[NamespaceEnum.TRANSACTION_RUNNER]) protected readonly queryRunner?: QueryRunner,
  ) {}

  async commit(): Promise<void> {
    await this.queryRunner?.commitTransaction();
    await this.queryRunner?.release();
  }

  async rollback(): Promise<void> {
    await this.queryRunner?.rollbackTransaction();
    await this.queryRunner?.release();
  }
}
