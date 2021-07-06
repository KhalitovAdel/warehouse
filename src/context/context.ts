import { forwardRef, Inject, Injectable, Scope } from '@nestjs/common';
import { Request } from 'express';

import { ErrorEnum, ErrorInputDescription } from '../@enum/error.enum';
import { Transaction } from '../database/transaction';
import { UserEntity } from '../domain/user/user.entity';
import { ErrorDefault } from '../error.default';
import { IContext } from './interfaces/context.interface';

@Injectable({ scope: Scope.REQUEST })
export class Context implements IContext {
  user?: UserEntity;
  protected request?: Request;

  constructor(@Inject(forwardRef(() => Transaction)) protected readonly _transaction: Transaction) {}

  get isTransactionRequest(): boolean {
    return !!this.request;
  }

  setUser(user?: UserEntity) {
    this.user = user;
  }

  setRequest(request: Request) {
    if (this.request)
      throw new ErrorDefault(ErrorEnum.INVALID_INPUT, {
        request: ErrorInputDescription[ErrorInputDescription.DUPLICATE_TYPE],
      });
    this.request = request;
  }

  async success() {
    await this._transaction.commit();
  }

  async error() {
    await this._transaction.rollback();
  }
}
