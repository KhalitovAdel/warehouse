import { FindManyOptions } from 'typeorm/find-options/FindManyOptions';
import { FindOneOptions } from 'typeorm/find-options/FindOneOptions';
export interface IDatabaseCRUD<ENTITY, CREATE, UPDATE> {
    create<T = CREATE | CREATE[]>(params: T): Promise<T extends Array<T> ? ENTITY[] : ENTITY>;
    updateOne(query: number | FindOneOptions<ENTITY>, toUpdate: UPDATE): Promise<ENTITY>;
    delete(id: number): Promise<any>;
    fetchOne(query: number | FindOneOptions<ENTITY>, select?: (keyof ENTITY)[]): Promise<ENTITY>;
    count(query: FindManyOptions<ENTITY> | number): Promise<number>;
}
