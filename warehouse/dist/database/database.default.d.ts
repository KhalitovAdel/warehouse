import { FindManyOptions } from 'typeorm/find-options/FindManyOptions';
import { FindOneOptions } from 'typeorm/find-options/FindOneOptions';
import { IClass } from '../interface/common.interface';
import { IDatabaseDefault, ISessionConnection } from './interfaces/database.interface';
export declare class DatabaseDefault<ENTITY extends InstanceType<IClass>, CREATE, UPDATE> implements IDatabaseDefault<ENTITY, CREATE, UPDATE> {
    protected readonly entity: IClass;
    protected readonly entityManager: ISessionConnection;
    protected readonly idKey: keyof ENTITY;
    constructor(entity: IClass, entityManager: ISessionConnection, idKey: keyof ENTITY);
    transformQuery<T = any>(query: number | FindOneOptions<T>): FindOneOptions<T>;
    create<T = CREATE[] | CREATE>(params: T): Promise<T extends Array<T> ? ENTITY[] : ENTITY>;
    updateOne(query: number | FindOneOptions<ENTITY>, toUpdate: UPDATE): Promise<ENTITY>;
    updateMany(query: FindManyOptions<ENTITY>, toUpdate: UPDATE): Promise<any[] | (ENTITY & UPDATE)[]>;
    delete(id: number): Promise<import("typeorm").DeleteResult>;
    fetchOne(query: number | FindOneOptions<ENTITY>, select?: (keyof ENTITY)[]): Promise<ENTITY>;
    list(options?: FindManyOptions<ENTITY>): Promise<{
        data: any[];
        count: number;
    }>;
    count(query?: FindManyOptions<ENTITY> | number): Promise<number>;
}
