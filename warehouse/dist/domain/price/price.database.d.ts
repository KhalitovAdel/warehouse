import { DatabaseDefault } from '../../database/database.default';
import { ISessionConnection } from '../../database/interfaces/database.interface';
import { CreatePriceDto, UpdatePriceDto } from './dto/price.dto';
import { PriceEntity } from './price.entity';
export declare class PriceDatabase extends DatabaseDefault<PriceEntity, CreatePriceDto, UpdatePriceDto> {
    protected readonly sessionConnection: ISessionConnection;
    constructor(sessionConnection: ISessionConnection);
}
