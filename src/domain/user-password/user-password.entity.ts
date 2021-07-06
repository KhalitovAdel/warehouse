import { Column, Entity, Index, PrimaryColumn } from 'typeorm';

@Entity()
export class UserPasswordEntity {
  @PrimaryColumn({ nullable: false })
  @Index({ unique: true })
  userId: number;

  @Column({ nullable: false })
  password: string;
}
