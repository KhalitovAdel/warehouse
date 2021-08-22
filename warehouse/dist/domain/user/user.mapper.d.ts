import { CrudMapperDefault } from '../../crud/crud.mapper';
import { CreateUserDto, UpdateUserDto } from './dto/user.dto';
import { UserDatabase } from './user.database';
import { UserEntity } from './user.entity';
export declare class UserMapper extends CrudMapperDefault<UserEntity, CreateUserDto, UpdateUserDto, 'id'> {
    protected readonly userDatabase: UserDatabase;
    constructor(userDatabase: UserDatabase);
    create(params: CreateUserDto): Promise<UserEntity>;
    findUserByEmail(email: string): Promise<UserEntity>;
}
