import { Inject, Injectable } from '@nestjs/common';

import { CrudMapperDefault } from '../../crud/crud.mapper';
import { CompanyDatabase } from './company.database';
import { CompanyEntity } from './company.entity';
import { CreateCompanyDto, UpdateCompanyDto } from './dto/company.dto';

@Injectable()
export class CompanyMapper extends CrudMapperDefault<CreateCompanyDto, UpdateCompanyDto, CompanyEntity, 'id'> {
  constructor(@Inject(CompanyDatabase) protected readonly companyDatabase: CompanyDatabase) {
    super(companyDatabase);
  }
}
