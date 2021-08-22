import { IsNumber, IsString } from 'class-validator';
import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from 'typeorm';

import { DatabaseDefaultEntity } from '../../database/database.default.entity';

@Entity()
export class CategoryEntity extends DatabaseDefaultEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @IsString()
  @Column({ nullable: false })
  name!: string;

  @IsNumber()
  @OneToOne(() => CategoryEntity)
  @Column()
  parent!: number;
}
