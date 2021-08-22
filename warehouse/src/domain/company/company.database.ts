import { Inject, Injectable } from '@nestjs/common';

import { NamespaceEnum } from '../../@enum/namespace.enum';
import { DatabaseDefault } from '../../database/database.default';
import { ISessionConnection } from '../../database/interfaces/database.interface';
import { CompanyEntity } from './company.entity';
import { CreateCompanyDto, UpdateCompanyDto } from './dto/company.dto';

@Injectable()
export class CompanyDatabase extends DatabaseDefault<CreateCompanyDto, UpdateCompanyDto, CompanyEntity> {
  constructor(@Inject(NamespaceEnum.DEFAULT_ENTITY_MANAGER) protected readonly sessionConnection: ISessionConnection) {
    super(CompanyEntity, sessionConnection, 'id');
  }
}
