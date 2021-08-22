import { EntityManager } from 'typeorm/entity-manager/EntityManager';
import { DatabaseDefault } from '../../../database/database.default';
import { UserPasswordCrudSeed } from '../../user-password/seed/user-password-crud.seed';
import { CreateUserDto, UpdateUserDto } from '../dto/user.dto';
import { UserEntity } from '../user.entity';
export declare class UserCrudSeed extends DatabaseDefault<UserEntity, Partial<CreateUserDto>, UpdateUserDto> {
    protected readonly session: EntityManager;
    protected readonly userPasswordCrud: UserPasswordCrudSeed;
    constructor(session: EntityManager, userPasswordCrud: UserPasswordCrudSeed);
    create<T = Partial<CreateUserDto>[] | Partial<CreateUserDto>>(params: T): Promise<T extends T[] ? UserEntity[] : UserEntity>;
}
