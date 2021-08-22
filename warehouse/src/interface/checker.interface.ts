import { IDatabaseCRUD } from '../crud/crud.interface';

export type CheckerInterface = Omit<IDatabaseCRUD<any, any, any>, 'count'>;
