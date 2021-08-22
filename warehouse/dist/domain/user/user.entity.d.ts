import { DatabaseDefaultEntity } from '../../database/database.default.entity';
import { CompanyEntity } from '../company/company.entity';
export declare class UserEntity extends DatabaseDefaultEntity {
    id: number;
    firstName: string;
    lastName: string;
    middleName: string;
    email: string;
    companyId: number;
    company?: CompanyEntity;
}
