import { Request } from 'express';
import { Transaction } from '../database/transaction';
import { UserEntity } from '../domain/user/user.entity';
import { IContext } from './interfaces/context.interface';
export declare class Context implements IContext {
    protected readonly _transaction: Transaction;
    user?: UserEntity;
    protected request?: Request;
    constructor(_transaction: Transaction);
    get isTransactionRequest(): boolean;
    setUser(user?: UserEntity): void;
    setRequest(request: Request): void;
    success(): Promise<void>;
    error(): Promise<void>;
}
