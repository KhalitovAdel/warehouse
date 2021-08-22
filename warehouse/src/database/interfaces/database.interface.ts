import { EntityManager } from 'typeorm/entity-manager/EntityManager';
import { FindManyOptions } from 'typeorm/find-options/FindManyOptions';
import { FindOneOptions } from 'typeorm/find-options/FindOneOptions';
import { SaveOptions } from 'typeorm/repository/SaveOptions';

export type ISessionConnection = EntityManager;

export interface IDatabaseDefault<CREATE, UPDATE, ENTITY extends CREATE | UPDATE> {
  create(params: CREATE, options?: SaveOptions): Promise<ENTITY>;

  createMany(params: CREATE[], options?: SaveOptions): Promise<ENTITY[]>;

  updateOne(query: number | FindOneOptions<ENTITY>, toUpdate: UPDATE): Promise<ENTITY>;

  updateMany(query: FindManyOptions<ENTITY>, toUpdate: UPDATE): Promise<any>;

  delete(id: number): Promise<any>;

  fetchOne(query: number | FindOneOptions<ENTITY>, select?: (keyof ENTITY)[]): Promise<ENTITY | undefined>;

  list(options?: FindManyOptions<ENTITY>): Promise<{ data: any; count: any }>;

  count(query: FindManyOptions<ENTITY> | number): Promise<any>;
}
