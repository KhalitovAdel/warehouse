export interface ITransactionController {
    commit(): Promise<void>;
    rollback(): Promise<void>;
}
export declare type ITransaction = ITransactionController;
