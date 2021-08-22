import { DatabaseDefaultEntity } from '../../database/database.default.entity';
export declare class StockEntity extends DatabaseDefaultEntity {
    id: number;
    companyId: number;
    address: string;
}
