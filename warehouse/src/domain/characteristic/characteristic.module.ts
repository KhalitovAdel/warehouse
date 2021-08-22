import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { DatabaseModule } from '../../database/database.module';
import { CharacteristicDatabase } from './characteristic.database';
import { CharacteristicEntity } from './characteristic.entity';
import { CharacteristicMapper } from './characteristic.mapper';

@Module({
  imports: [TypeOrmModule.forFeature([CharacteristicEntity]), DatabaseModule],
  providers: [CharacteristicDatabase, CharacteristicMapper],
  exports: [CharacteristicMapper],
})
export class CharacteristicModule {}
