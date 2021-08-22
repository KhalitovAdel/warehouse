import { IsString } from 'class-validator';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

import { DatabaseDefaultEntity } from '../../database/database.default.entity';
import { UserEntity } from '../user/user.entity';

@Entity()
export class CompanyEntity extends DatabaseDefaultEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @IsString()
  @Column({ nullable: false })
  name!: string;

  @OneToMany(() => UserEntity, (user) => user.companyId)
  users?: UserEntity[];
}
