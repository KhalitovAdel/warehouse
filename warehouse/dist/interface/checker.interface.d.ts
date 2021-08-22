import { IDatabaseCRUD } from '../crud/crud.interface';
export declare type CheckerInterface = Omit<IDatabaseCRUD<any, any, any>, 'count'>;
