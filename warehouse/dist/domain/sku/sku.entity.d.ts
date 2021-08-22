import { DatabaseDefaultEntity } from '../../database/database.default.entity';
import { CharacteristicEntity } from '../characteristic/characteristic.entity';
import { GoodEntity } from '../good/good.entity';
import { PriceEntity } from '../price/price.entity';
export declare class SkuEntity extends DatabaseDefaultEntity {
    id: number;
    characteristic?: CharacteristicEntity[];
    price: PriceEntity;
    goodId: number;
    good: GoodEntity;
}
