import { DatabaseDefaultEntity } from '../../database/database.default.entity';
import { SkuEntity } from '../sku/sku.entity';
import { Characteristic } from './interface/characteristic.enum';
export declare class CharacteristicEntity extends DatabaseDefaultEntity {
    id: number;
    skuId: number;
    sku: SkuEntity;
    type: Characteristic;
    value: string;
    title?: string;
}
