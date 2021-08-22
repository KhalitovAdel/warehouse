import { CrudMapperDefault } from '../../crud/crud.mapper';
import { CharacteristicBusiness } from './characteristic.business';
import { CharacteristicDatabase } from './characteristic.database';
import { CharacteristicEntity } from './characteristic.entity';
import { CharacteristicCreateDto, CharacteristicUpdateDto } from './dto/characteristic.dto';
export declare class CharacteristicMapper extends CrudMapperDefault<CharacteristicEntity, CharacteristicCreateDto, CharacteristicUpdateDto, 'id'> {
    protected readonly database: CharacteristicDatabase;
    constructor(database: CharacteristicDatabase);
    protected fillBusiness(skuId: number): Promise<CharacteristicBusiness>;
    create(params: CharacteristicCreateDto): Promise<CharacteristicEntity>;
    update(id: CharacteristicEntity['id'], toUpdate: CharacteristicUpdateDto): Promise<CharacteristicEntity>;
}
