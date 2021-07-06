import { IsEmail, IsNumber, IsString } from 'class-validator';
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

import { DatabaseDefaultEntity } from '../../database/database.default.entity';
import { CompanyEntity } from '../company/company.entity';

@Entity()
export class UserEntity extends DatabaseDefaultEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @IsString()
  @Column({ nullable: false })
  firstName: string;

  @IsString()
  @Column({ nullable: false })
  lastName: string;

  @IsString()
  @Column({ nullable: true })
  middleName: string;

  @IsEmail()
  @Column({ unique: true, nullable: false })
  email: string;

  @IsNumber()
  @Column({ nullable: false })
  companyId: number;

  @ManyToOne(() => CompanyEntity)
  @JoinColumn({ referencedColumnName: 'id' })
  company?: CompanyEntity;
}
