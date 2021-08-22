import { QueryRunner } from 'typeorm';
import { Context } from '../context/context';
import { ITransaction } from './interfaces/transaction.interface';
export declare class Transaction implements ITransaction {
    protected readonly ctx: Context;
    protected readonly queryRunner?: QueryRunner | undefined;
    constructor(ctx: Context, queryRunner?: QueryRunner | undefined);
    commit(): Promise<void>;
    rollback(): Promise<void>;
}
