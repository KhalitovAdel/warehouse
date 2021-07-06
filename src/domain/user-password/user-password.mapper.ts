import { Inject, Injectable } from '@nestjs/common';

import { CrudMapperDefault } from '../../crud/crud.mapper';
import { UserPasswordDatabase } from './user-password.database';
import { UserPasswordEntity } from './user-password.entity';

@Injectable()
export class UserPasswordMapper extends CrudMapperDefault<
  UserPasswordEntity,
  Pick<UserPasswordEntity, 'password'>,
  UserPasswordEntity,
  'userId'
> {
  constructor(@Inject(UserPasswordDatabase) protected readonly database: UserPasswordDatabase) {
    super(database);
  }

  async create(params: UserPasswordEntity) {
    await this.checkDuplicates({ userId: params.userId });

    return super.create(params);
  }
}
