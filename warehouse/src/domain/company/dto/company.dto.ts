import { PartialType, PickType } from '@nestjs/swagger';

import { CompanyEntity } from '../company.entity';

export class CreateCompanyDto extends PickType(CompanyEntity, ['name'] as const) {}

export class UpdateCompanyDto extends PartialType(PickType(CompanyEntity, ['name', 'isActive'] as const)) {}

export class CompanyParamDto extends PickType(CompanyEntity, ['id'] as const) {}
