import { Inject, Injectable } from '@nestjs/common';
import { EntityManager } from 'typeorm/entity-manager/EntityManager';

import { NamespaceEnum } from '../../../@enum/namespace.enum';
import { DatabaseDefault } from '../../../database/database.default';
import { CompanyEntity } from '../company.entity';
import { CreateCompanyDto, UpdateCompanyDto } from '../dto/company.dto';
import { createCompany } from './company.seed';

@Injectable()
export class CompanyCrudSeed extends DatabaseDefault<Partial<CreateCompanyDto>, UpdateCompanyDto, CompanyEntity> {
  constructor(@Inject(NamespaceEnum[NamespaceEnum.SESSION_SINGLETON]) protected readonly session: EntityManager) {
    super(CompanyEntity, session, 'id');
  }

  create(params: Partial<CreateCompanyDto>): Promise<CompanyEntity> {
    const toCreate: CreateCompanyDto = {
      ...createCompany(),
      ...(params || {}),
    };

    return super.create(toCreate);
  }

  createMany(params: Partial<CreateCompanyDto>[]): Promise<CompanyEntity[]> {
    const toCreate: CreateCompanyDto[] = params.map((el) => ({ ...createCompany(), ...(el || {}) }));

    return super.createMany(toCreate);
  }
}
