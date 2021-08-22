import { Inject, Injectable } from '@nestjs/common';

import { NamespaceEnum } from '../../@enum/namespace.enum';
import { DatabaseDefault } from '../../database/database.default';
import { ISessionConnection } from '../../database/interfaces/database.interface';
import { CharacteristicEntity } from './characteristic.entity';
import { CharacteristicCreateDto, CharacteristicUpdateDto } from './dto/characteristic.dto';

@Injectable()
export class CharacteristicDatabase extends DatabaseDefault<
  CharacteristicCreateDto,
  CharacteristicUpdateDto,
  CharacteristicEntity
> {
  constructor(@Inject(NamespaceEnum.DEFAULT_ENTITY_MANAGER) protected readonly sessionConnection: ISessionConnection) {
    super(CharacteristicEntity, sessionConnection, 'id');
  }
}
