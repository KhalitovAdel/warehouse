import { IntersectionType, PickType } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsNumber, ValidateIf, ValidateNested } from 'class-validator';

import { CreateCompanyDto } from '../../company/dto/company.dto';
import { CreateUserDto } from '../../user/dto/user.dto';
import { UserPasswordEntity } from '../../user-password/user-password.entity';

export class AuthCreateUser extends IntersectionType(
  PickType(CreateUserDto, ['firstName', 'lastName', 'middleName', 'email'] as const),
  PickType(UserPasswordEntity, ['password'] as const),
) {}

export class CreateProfileDto {
  @ValidateNested()
  @Type(() => AuthCreateUser)
  user: AuthCreateUser;

  @ValidateIf(({ companyId }) => !companyId)
  @ValidateNested()
  @Type(() => CreateCompanyDto)
  company: CreateCompanyDto;

  @ValidateIf(({ company }) => !company)
  @IsNumber()
  companyId?: number;
}
