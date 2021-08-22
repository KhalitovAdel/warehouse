import { DatabaseDefault } from '../../database/database.default';
import { ISessionConnection } from '../../database/interfaces/database.interface';
import { CharacteristicEntity } from './characteristic.entity';
import { CharacteristicCreateDto, CharacteristicUpdateDto } from './dto/characteristic.dto';
export declare class CharacteristicDatabase extends DatabaseDefault<CharacteristicEntity, CharacteristicCreateDto, CharacteristicUpdateDto> {
    protected readonly sessionConnection: ISessionConnection;
    constructor(sessionConnection: ISessionConnection);
}
