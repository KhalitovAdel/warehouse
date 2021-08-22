import { CrudMapperDefault } from '../../crud/crud.mapper';
import { CreatePriceDto, UpdatePriceDto } from './dto/price.dto';
import { PriceDatabase } from './price.database';
import { PriceEntity } from './price.entity';
export declare class PriceMapper extends CrudMapperDefault<PriceEntity, CreatePriceDto, UpdatePriceDto, 'id'> {
    protected readonly database: PriceDatabase;
    constructor(database: PriceDatabase);
}
