import { PartialType, PickType } from '@nestjs/swagger';

import { UserEntity } from '../user.entity';

export class CreateUserDto extends PickType(UserEntity, [
  'firstName',
  'lastName',
  'middleName',
  'email',
  'companyId',
] as const) {}

export class UpdateUserDto extends PartialType(
  PickType(UserEntity, ['firstName', 'lastName', 'middleName', 'email'] as const),
) {}

export class UserParamDto extends PickType(UserEntity, ['id'] as const) {}
