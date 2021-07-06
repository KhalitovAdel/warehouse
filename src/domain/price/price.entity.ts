import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

import { DatabaseDefaultEntity } from '../../database/database.default.entity';
import { SkuEntity } from '../sku/sku.entity';

@Entity()
export class PriceEntity extends DatabaseDefaultEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false })
  skuId: number;

  @ManyToOne(() => SkuEntity)
  @JoinColumn({ referencedColumnName: 'skuId' })
  sku?: SkuEntity;

  @Column({ nullable: false })
  price: number;
}
