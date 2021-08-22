import { FindManyOptions } from 'typeorm/find-options/FindManyOptions';
import { IDatabaseCRUD } from '../../../crud/crud.interface';
import { CompanyDatabase } from '../company.database';
import { CompanyEntity } from '../company.entity';
import { CreateCompanyDto, UpdateCompanyDto } from '../dto/company.dto';
export declare class CompanyCrudSeed implements IDatabaseCRUD<CompanyEntity, Partial<CreateCompanyDto>, UpdateCompanyDto> {
    protected readonly companyDatabase: CompanyDatabase;
    constructor(companyDatabase: CompanyDatabase);
    updateOne: any;
    delete: any;
    fetchOne: any;
    count(query: FindManyOptions<CompanyEntity> | number): Promise<number>;
    create<T = Partial<CreateCompanyDto>[] | Partial<CreateCompanyDto>>(params: T): Promise<T extends T[] ? CompanyEntity[] : CompanyEntity>;
}
