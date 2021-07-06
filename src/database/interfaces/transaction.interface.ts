export interface ITransactionController {
  commit(): Promise<void>;

  rollback(): Promise<void>;
}

export type ITransaction = ITransactionController;
