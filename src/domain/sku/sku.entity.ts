import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

import { DatabaseDefaultEntity } from '../../database/database.default.entity';
import { CharacteristicEntity } from '../characteristic/characteristic.entity';
import { GoodEntity } from '../good/good.entity';
import { PriceEntity } from '../price/price.entity';

@Entity()
export class SkuEntity extends DatabaseDefaultEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToMany(() => CharacteristicEntity, (characteristic) => characteristic.skuId)
  characteristic?: CharacteristicEntity[];

  @OneToMany(() => PriceEntity, (characteristic) => characteristic.skuId)
  price: PriceEntity;

  @Column({ nullable: false })
  goodId: number;

  @ManyToOne(() => GoodEntity)
  @JoinColumn({ referencedColumnName: 'goodId' })
  good: GoodEntity;
}
