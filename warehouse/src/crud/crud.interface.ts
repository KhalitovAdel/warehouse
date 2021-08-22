import { FindManyOptions } from 'typeorm/find-options/FindManyOptions';
import { FindOneOptions } from 'typeorm/find-options/FindOneOptions';

export interface IDatabaseCRUD<CREATE, UPDATE, ENTITY extends CREATE | UPDATE> {
  create(params: CREATE): Promise<ENTITY>;

  updateOne(query: number | FindOneOptions<ENTITY>, toUpdate: UPDATE): Promise<ENTITY>;

  delete(id: number): Promise<any>;

  fetchOne(query: number | FindOneOptions<ENTITY>, select?: (keyof ENTITY)[]): Promise<ENTITY | undefined>;

  count(query: FindManyOptions<ENTITY> | number): Promise<number>;
}
