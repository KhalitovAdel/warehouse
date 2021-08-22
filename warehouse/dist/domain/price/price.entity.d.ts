import { DatabaseDefaultEntity } from '../../database/database.default.entity';
import { SkuEntity } from '../sku/sku.entity';
export declare class PriceEntity extends DatabaseDefaultEntity {
    id: number;
    skuId: number;
    sku?: SkuEntity;
    price: number;
}
