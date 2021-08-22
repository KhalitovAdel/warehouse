import { Injectable } from '@nestjs/common';

// import { diff } from 'deep-object-diff';
import { CrudMapperDefault } from '../../crud/crud.mapper';
import { CharacteristicBusiness } from './characteristic.business';
import { CharacteristicDatabase } from './characteristic.database';
import { CharacteristicEntity } from './characteristic.entity';
import { CharacteristicCreateDto, CharacteristicUpdateDto } from './dto/characteristic.dto';

@Injectable()
export class CharacteristicMapper extends CrudMapperDefault<
  CharacteristicCreateDto,
  CharacteristicUpdateDto,
  CharacteristicEntity,
  'id'
> {
  constructor(protected readonly database: CharacteristicDatabase) {
    super(database);
  }

  protected async fillBusiness(skuId: number): Promise<CharacteristicBusiness> {
    const { data } = await this.database.list({ where: { skuId } });

    return new CharacteristicBusiness(data);
  }

  async create(params: CharacteristicCreateDto) {
    const business = await this.fillBusiness(params.skuId);
    const create = business.create(params);

    return super.create(create);
  }

  async update(id: CharacteristicEntity['id'], toUpdate: CharacteristicUpdateDto) {
    // const entity = await this.database.fetchOne(id);
    // const business = await this.fillBusiness(entity?.skuId);
    // const update = business.update({ id, ...diff(entity, toUpdate) });

    return super.update(id, toUpdate);
  }
}
