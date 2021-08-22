import { DatabaseDefault } from '../../database/database.default';
import { ISessionConnection } from '../../database/interfaces/database.interface';
import { CreateUserDto, UpdateUserDto } from './dto/user.dto';
import { UserEntity } from './user.entity';
export declare class UserDatabase extends DatabaseDefault<UserEntity, CreateUserDto, UpdateUserDto> {
    protected readonly sessionConnection: ISessionConnection;
    constructor(sessionConnection: ISessionConnection);
}
