import { IsNumber, IsOptional, IsString } from 'class-validator';
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

import { DatabaseDefaultEntity } from '../../database/database.default.entity';
import { CategoryEntity } from '../category/category.entity';
import { CompanyEntity } from '../company/company.entity';
import { ManufacturerEntity } from '../manufacturer/manufacturer.entity';
import { MeasureEntity } from '../measure/measure.entity';
import { SkuEntity } from '../sku/sku.entity';

@Entity()
export class GoodEntity extends DatabaseDefaultEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @IsString()
  @Column({ nullable: false })
  name!: string;

  @IsOptional()
  @IsNumber()
  @Column()
  manufacturerId?: number;

  @ManyToOne(() => ManufacturerEntity)
  @JoinColumn({ referencedColumnName: 'manufacturerId' })
  manufacturer?: ManufacturerEntity;

  @IsNumber()
  @Column({ nullable: false })
  companyId!: number;

  @ManyToOne(() => CompanyEntity)
  @JoinColumn({ referencedColumnName: 'companyId' })
  company!: CompanyEntity;

  @IsNumber()
  @Column({ nullable: false })
  measureId!: number;

  @ManyToOne(() => MeasureEntity)
  @JoinColumn({ referencedColumnName: 'measureId' })
  measure!: MeasureEntity;

  @IsNumber()
  @Column({ nullable: false })
  categoryId!: number;

  @ManyToOne(() => CategoryEntity)
  @JoinColumn({ referencedColumnName: 'categoryId' })
  category!: CategoryEntity;

  @OneToMany(() => SkuEntity, (sku) => sku.goodId)
  sku!: SkuEntity[];
}
