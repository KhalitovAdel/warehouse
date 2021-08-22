import { CrudMapperDefault } from '../../crud/crud.mapper';
import { UserPasswordDatabase } from './user-password.database';
import { UserPasswordEntity } from './user-password.entity';
export declare class UserPasswordMapper extends CrudMapperDefault<UserPasswordEntity, UserPasswordEntity, Pick<UserPasswordEntity, 'password'>, 'userId'> {
    protected readonly database: UserPasswordDatabase;
    constructor(database: UserPasswordDatabase);
    create(params: UserPasswordEntity): Promise<UserPasswordEntity>;
}
