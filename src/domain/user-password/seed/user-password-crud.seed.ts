import { Inject, Injectable } from '@nestjs/common';
import * as cfg from 'config';
import { EntityManager } from 'typeorm/entity-manager/EntityManager';

import { NamespaceEnum } from '../../../@enum/namespace.enum';
import { DatabaseDefault } from '../../../database/database.default';
import { UserPasswordEntity } from '../user-password.entity';

@Injectable()
export class UserPasswordCrudSeed extends DatabaseDefault<
  Pick<UserPasswordEntity, 'userId'> & Partial<Pick<UserPasswordEntity, 'password'>>,
  Pick<UserPasswordEntity, 'password'>,
  UserPasswordEntity
> {
  constructor(@Inject(NamespaceEnum[NamespaceEnum.SESSION_SINGLETON]) protected readonly session: EntityManager) {
    super(UserPasswordEntity, session, 'userId');
  }

  create(
    params: Pick<UserPasswordEntity, 'userId'> & Partial<Pick<UserPasswordEntity, 'password'>>,
  ): Promise<UserPasswordEntity> {
    const password = cfg.get<string>('profile.defaultPassword');
    const toCreate: UserPasswordEntity = {
      password,
      ...params,
    };

    return super.create(toCreate);
  }

  createMany(
    params: (Pick<UserPasswordEntity, 'userId'> & Partial<Pick<UserPasswordEntity, 'password'>>)[],
  ): Promise<UserPasswordEntity[]> {
    const password = cfg.get<string>('profile.defaultPassword');
    const toCreate: UserPasswordEntity[] = params.map((el) => ({ password, ...el }));

    return super.createMany(toCreate);
  }
}
