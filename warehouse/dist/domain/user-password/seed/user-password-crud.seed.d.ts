import { EntityManager } from 'typeorm/entity-manager/EntityManager';
import { DatabaseDefault } from '../../../database/database.default';
import { UserPasswordEntity } from '../user-password.entity';
export declare class UserPasswordCrudSeed extends DatabaseDefault<UserPasswordEntity, Pick<UserPasswordEntity, 'userId'> & Partial<Pick<UserPasswordEntity, 'password'>>, Pick<UserPasswordEntity, 'password'>> {
    protected readonly session: EntityManager;
    constructor(session: EntityManager);
    create<T = (Pick<UserPasswordEntity, 'userId'> & Partial<Pick<UserPasswordEntity, 'password'>>)[] | (Pick<UserPasswordEntity, 'userId'> & Partial<Pick<UserPasswordEntity, 'password'>>)>(params: T): Promise<T extends Array<T> ? UserPasswordEntity[] : UserPasswordEntity>;
}
