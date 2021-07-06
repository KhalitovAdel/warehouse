import { PartialType, PickType } from '@nestjs/swagger';

import { CharacteristicEntity } from '../characteristic.entity';

export class CharacteristicCreateDto extends PickType(CharacteristicEntity, [
  'skuId',
  'type',
  'value',
  'title',
] as const) {}

export class CharacteristicUpdateDto extends PartialType(
  PickType(CharacteristicEntity, ['type', 'value', 'title'] as const),
) {}

export class CharacteristicParamDto extends PickType(CharacteristicEntity, ['id'] as const) {}
