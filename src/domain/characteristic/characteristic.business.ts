import { ErrorEnum, ErrorInputDescription } from '../../@enum/error.enum';
import { ErrorDefault } from '../../error.default';
import { CharacteristicEntity } from './characteristic.entity';
import { CharacteristicCreateDto, CharacteristicParamDto, CharacteristicUpdateDto } from './dto/characteristic.dto';
import { Characteristic } from './interface/characteristic.enum';

export class CharacteristicBusiness {
  protected charMapType: Record<string, CharacteristicEntity> = {};
  protected charMapFree: Record<string, CharacteristicEntity> = {};

  constructor(protected readonly characteristics = [] as CharacteristicEntity[]) {
    this.init();
  }

  protected init() {
    this.characteristics
      .filter((el) => el.isActive)
      .forEach((el) => {
        if (el.type === Characteristic.FREE) {
          if (el.title) this.charMapFree[el.title] = el;
        } else {
          this.charMapType[el.type] = el;
        }
      });
  }

  protected checkSkuExists() {
    if (!this.characteristics[0].sku) throw new ErrorDefault(ErrorEnum.NOT_NULL_EXPECTED);
  }

  protected checkTypes(params: Pick<CharacteristicCreateDto, 'type' | 'title'>, id?: number) {
    const typeIsFree = params.type === Characteristic[Characteristic.FREE];
    const map = typeIsFree ? this.charMapFree : this.charMapType;
    const key = typeIsFree ? String(params.title) : params.type;
    if (!map[key]) return;
    if (id && map[key] && map[key].id === id) return;
    throw new ErrorDefault(ErrorEnum.INVALID_INPUT, { [key]: ErrorInputDescription.DUPLICATE_TYPE });
  }

  create(params: CharacteristicCreateDto): CharacteristicCreateDto {
    this.checkSkuExists();
    this.checkTypes(params);

    return params;
  }

  update(params: CharacteristicUpdateDto & CharacteristicParamDto): CharacteristicUpdateDto {
    const entity = this.characteristics.find((el) => el.id === params.id);
    if (!entity) throw new ErrorDefault(ErrorEnum.NOT_NULL_EXPECTED);

    this.checkSkuExists();
    this.checkTypes({ type: params.type || entity?.type, title: params.title || '' }, entity?.id);

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { id, ...other } = params;

    return other;
  }
}
