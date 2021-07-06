import { Inject, Injectable } from '@nestjs/common';

import { NamespaceEnum } from '../../@enum/namespace.enum';
import { DatabaseDefault } from '../../database/database.default';
import { ISessionConnection } from '../../database/interfaces/database.interface';
import { UserPasswordEntity } from './user-password.entity';

@Injectable()
export class UserPasswordDatabase extends DatabaseDefault<
  UserPasswordEntity,
  Pick<UserPasswordEntity, 'password'>,
  UserPasswordEntity
> {
  constructor(
    @Inject(NamespaceEnum[NamespaceEnum.SESSION_TRANSACTION]) protected readonly sessionConnection: ISessionConnection,
  ) {
    super(UserPasswordEntity, sessionConnection, 'userId');
  }
}
