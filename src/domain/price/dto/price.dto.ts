import { PickType } from '@nestjs/swagger';

import { PriceEntity } from '../price.entity';

export class CreatePriceDto extends PickType(PriceEntity, ['skuId', 'price'] as const) {}

export class UpdatePriceDto extends PickType(PriceEntity, ['price'] as const) {}

export class ParamPriceDtp extends PickType(PriceEntity, ['id'] as const) {}
