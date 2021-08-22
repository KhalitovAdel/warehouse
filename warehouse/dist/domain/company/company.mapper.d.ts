import { CrudMapperDefault } from '../../crud/crud.mapper';
import { CompanyDatabase } from './company.database';
import { CompanyEntity } from './company.entity';
import { CreateCompanyDto, UpdateCompanyDto } from './dto/company.dto';
export declare class CompanyMapper extends CrudMapperDefault<CompanyEntity, CreateCompanyDto, UpdateCompanyDto, 'id'> {
    protected readonly companyDatabase: CompanyDatabase;
    constructor(companyDatabase: CompanyDatabase);
}
