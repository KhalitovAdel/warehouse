import { Inject, Injectable } from '@nestjs/common';

import { NamespaceEnum } from '../../@enum/namespace.enum';
import { DatabaseDefault } from '../../database/database.default';
import { ISessionConnection } from '../../database/interfaces/database.interface';
import { CreateUserDto, UpdateUserDto } from './dto/user.dto';
import { UserEntity } from './user.entity';

@Injectable()
export class UserDatabase extends DatabaseDefault<CreateUserDto, UpdateUserDto, UserEntity> {
  constructor(
    @Inject(NamespaceEnum[NamespaceEnum.SESSION_TRANSACTION]) protected readonly sessionConnection: ISessionConnection,
  ) {
    super(UserEntity, sessionConnection, 'id');
  }
}
