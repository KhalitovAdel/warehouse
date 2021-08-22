import { CharacteristicEntity } from './characteristic.entity';
import { CharacteristicCreateDto, CharacteristicParamDto, CharacteristicUpdateDto } from './dto/characteristic.dto';
export declare class CharacteristicBusiness {
    protected readonly characteristics: CharacteristicEntity[];
    protected charMapType: Record<string, CharacteristicEntity>;
    protected charMapFree: Record<string, CharacteristicEntity>;
    constructor(characteristics?: CharacteristicEntity[]);
    protected init(): void;
    protected checkSkuExists(): void;
    protected checkTypes(params: Pick<CharacteristicCreateDto, 'type' | 'title'>, id?: number): void;
    create(params: CharacteristicCreateDto): CharacteristicCreateDto;
    update(params: CharacteristicUpdateDto & CharacteristicParamDto): CharacteristicUpdateDto;
}
