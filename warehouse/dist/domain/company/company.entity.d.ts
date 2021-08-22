import { DatabaseDefaultEntity } from '../../database/database.default.entity';
import { UserEntity } from '../user/user.entity';
export declare class CompanyEntity extends DatabaseDefaultEntity {
    id: number;
    name: string;
    users?: UserEntity[];
}
