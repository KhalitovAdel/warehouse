import { DatabaseDefault } from '../../database/database.default';
import { ISessionConnection } from '../../database/interfaces/database.interface';
import { CompanyEntity } from './company.entity';
import { CreateCompanyDto, UpdateCompanyDto } from './dto/company.dto';
export declare class CompanyDatabase extends DatabaseDefault<CompanyEntity, CreateCompanyDto, UpdateCompanyDto> {
    protected readonly sessionConnection: ISessionConnection;
    constructor(sessionConnection: ISessionConnection);
}
