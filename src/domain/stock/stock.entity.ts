import { Column, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

import { DatabaseDefaultEntity } from '../../database/database.default.entity';
import { CompanyEntity } from '../company/company.entity';

export class StockEntity extends DatabaseDefaultEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @ManyToOne(() => CompanyEntity)
  @Column({ nullable: false })
  companyId!: number;

  @Column()
  address!: string;
}
