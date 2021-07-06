import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { CharacteristicModule } from '../characteristic/characteristic.module';
import { PriceModule } from '../price/price.module';
import { SkuEntity } from './sku.entity';
import { SkuMapper } from './sku.mapper';

@Module({
  imports: [TypeOrmModule.forFeature([SkuEntity]), CharacteristicModule, PriceModule],
  providers: [SkuMapper],
  exports: [SkuMapper],
})
export class SkuModule {}
