import { Injectable } from '@nestjs/common';
import { getManager } from 'typeorm';

import { SkuEntity } from './sku.entity';

@Injectable()
export class SkuMapper {
  test() {
    getManager().transaction(async (tr) => {
      await tr.find(SkuEntity, { where: { isActive: true } });
      tr.queryRunner?.startTransaction();
    });
  }
}
