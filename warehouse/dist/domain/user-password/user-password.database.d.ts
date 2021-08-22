import { DatabaseDefault } from '../../database/database.default';
import { ISessionConnection } from '../../database/interfaces/database.interface';
import { UserPasswordEntity } from './user-password.entity';
export declare class UserPasswordDatabase extends DatabaseDefault<UserPasswordEntity, UserPasswordEntity, Pick<UserPasswordEntity, 'password'>> {
    protected readonly sessionConnection: ISessionConnection;
    constructor(sessionConnection: ISessionConnection);
}
