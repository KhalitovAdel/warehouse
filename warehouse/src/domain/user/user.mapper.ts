import { Injectable } from '@nestjs/common';

import { CrudMapperDefault } from '../../crud/crud.mapper';
import { UserCreate } from './abl/user.create';
import { CreateUserDto, UpdateUserDto } from './dto/user.dto';
import { UserDatabase } from './user.database';
import { UserEntity } from './user.entity';

@Injectable()
export class UserMapper extends CrudMapperDefault<CreateUserDto, UpdateUserDto, UserEntity, 'id'> {
  constructor(protected readonly userDatabase: UserDatabase) {
    super(userDatabase);
  }

  async create(params: CreateUserDto) {
    const toCreate = new UserCreate(params);
    await this.checkDuplicates({ email: toCreate.email });

    return super.create(toCreate);
  }

  findUserByEmail(email: string) {
    return this.userDatabase.fetchOne({ where: { email: email.toLowerCase() } });
  }
}
