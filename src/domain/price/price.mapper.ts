import { Inject, Injectable } from '@nestjs/common';

import { CrudMapperDefault } from '../../crud/crud.mapper';
import { CreatePriceDto, UpdatePriceDto } from './dto/price.dto';
import { PriceDatabase } from './price.database';
import { PriceEntity } from './price.entity';

@Injectable()
export class PriceMapper extends CrudMapperDefault<PriceEntity, CreatePriceDto, UpdatePriceDto, 'id'> {
  constructor(@Inject(PriceDatabase) protected readonly database: PriceDatabase) {
    super(database);
  }
}
