import { Inject, Injectable } from '@nestjs/common';
import { EntityManager } from 'typeorm/entity-manager/EntityManager';

import { NamespaceEnum } from '../../../@enum/namespace.enum';
import { DatabaseDefault } from '../../../database/database.default';
import { CompanyCrudSeed } from '../../company/seed/company-crud.seed';
import { UserPasswordCrudSeed } from '../../user-password/seed/user-password-crud.seed';
import { CreateUserDto, UpdateUserDto } from '../dto/user.dto';
import { UserEntity } from '../user.entity';
import { createUser } from './user.seed';

@Injectable()
export class UserCrudSeed extends DatabaseDefault<Partial<CreateUserDto>, UpdateUserDto, UserEntity> {
  constructor(
    @Inject(NamespaceEnum[NamespaceEnum.SESSION_SINGLETON]) protected readonly session: EntityManager,
    @Inject(UserPasswordCrudSeed) protected readonly userPasswordCrud: UserPasswordCrudSeed,
    @Inject(CompanyCrudSeed) protected readonly companyCrudSeed: CompanyCrudSeed,
  ) {
    super(UserEntity, session, 'id');
  }

  async create(params: Partial<CreateUserDto>): Promise<UserEntity> {
    const companyId = params.companyId ? params.companyId : (await this.companyCrudSeed.create({})).id;
    const toCreate: CreateUserDto = {
      ...createUser(),
      ...params,
      companyId,
    };

    return super.create(toCreate);
  }

  async createMany(params: Partial<CreateUserDto>[]): Promise<UserEntity[]> {
    const userWithoutCompanyCount = params.filter((el) => !el.companyId).length;
    const companies = (await this.companyCrudSeed.createMany(new Array(userWithoutCompanyCount).fill({}))).map(
      ({ id }) => id,
    );

    let currentCompanyIndex = 0;

    const toCreate: CreateUserDto[] = params.map((el) => {
      const companyId = companies[currentCompanyIndex];
      currentCompanyIndex++;

      return {
        ...createUser(),
        ...(el || {}),
        companyId,
      };
    });

    return super.createMany(toCreate);
  }
}
