import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { DatabaseModule } from '../../database/database.module';
import { PriceDatabase } from './price.database';
import { PriceEntity } from './price.entity';
import { PriceMapper } from './price.mapper';

@Module({
  imports: [TypeOrmModule.forFeature([PriceEntity]), DatabaseModule],
  providers: [PriceDatabase, PriceMapper],
  exports: [PriceMapper],
})
export class PriceModule {}
