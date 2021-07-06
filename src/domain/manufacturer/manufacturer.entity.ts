import { IsString } from 'class-validator';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

import { DatabaseDefaultEntity } from '../../database/database.default.entity';

@Entity()
export class ManufacturerEntity extends DatabaseDefaultEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @IsString()
  @Column({ nullable: false })
  name: string;
}
