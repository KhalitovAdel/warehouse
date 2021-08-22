import { Column, CreateDateColumn, Entity, UpdateDateColumn } from 'typeorm';

@Entity()
export class DatabaseDefaultEntity {
  @Column({ default: true })
  isActive!: boolean;

  @CreateDateColumn()
  createAt!: Date;

  @UpdateDateColumn()
  updateAt!: Date;
}
