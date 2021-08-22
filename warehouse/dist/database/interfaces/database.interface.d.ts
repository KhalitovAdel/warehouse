import { EntityManager } from 'typeorm/entity-manager/EntityManager';
import { FindManyOptions } from 'typeorm/find-options/FindManyOptions';
import { FindOneOptions } from 'typeorm/find-options/FindOneOptions';
import { SaveOptions } from 'typeorm/repository/SaveOptions';
export declare type ISessionConnection = EntityManager;
export interface IDatabaseDefault<ENTITY, CREATE, UPDATE> {
    create<T = CREATE | CREATE[]>(params: T, options?: SaveOptions): Promise<T extends Array<T> ? ENTITY[] : ENTITY>;
    updateOne(query: number | FindOneOptions<ENTITY>, toUpdate: UPDATE): Promise<ENTITY>;
    updateMany(query: FindManyOptions<ENTITY>, toUpdate: UPDATE): Promise<any>;
    delete(id: number): Promise<any>;
    fetchOne(query: number | FindOneOptions<ENTITY>, select?: (keyof ENTITY)[]): Promise<ENTITY>;
    list(options?: FindManyOptions<ENTITY>): Promise<{
        data: any;
        count: any;
    }>;
    count(query: FindManyOptions<ENTITY> | number): Promise<any>;
}
