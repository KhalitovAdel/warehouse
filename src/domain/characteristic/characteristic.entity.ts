import { IsEnum, IsNumber, IsString, ValidateIf } from 'class-validator';
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

import { DatabaseDefaultEntity } from '../../database/database.default.entity';
import { SkuEntity } from '../sku/sku.entity';
import { Characteristic } from './interface/characteristic.enum';

@Entity()
export class CharacteristicEntity extends DatabaseDefaultEntity {
  @IsNumber()
  @PrimaryGeneratedColumn()
  id!: number;

  @IsNumber()
  @Column({ nullable: false })
  skuId!: number;

  @ManyToOne(() => SkuEntity)
  @JoinColumn({ referencedColumnName: 'skuId' })
  sku!: SkuEntity;

  @IsEnum(Object.values(Characteristic))
  @Column({ enum: Object.values(Characteristic), nullable: false })
  type!: Characteristic;

  @IsString()
  @Column({ nullable: false })
  value!: string;

  @ValidateIf(({ type }) => type === Characteristic.FREE)
  @IsString()
  @Column()
  /**@description If type is FREE, use that field for print. */
  title?: string;
}
