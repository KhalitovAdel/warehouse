import { Inject, Injectable } from '@nestjs/common';

import { NamespaceEnum } from '../../@enum/namespace.enum';
import { DatabaseDefault } from '../../database/database.default';
import { ISessionConnection } from '../../database/interfaces/database.interface';
import { CreatePriceDto, UpdatePriceDto } from './dto/price.dto';
import { PriceEntity } from './price.entity';

@Injectable()
export class PriceDatabase extends DatabaseDefault<CreatePriceDto, UpdatePriceDto, PriceEntity> {
  constructor(@Inject(NamespaceEnum.DEFAULT_ENTITY_MANAGER) protected readonly sessionConnection: ISessionConnection) {
    super(PriceEntity, sessionConnection, 'id');
  }
}
