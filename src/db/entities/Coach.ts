import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from 'typeorm';

@Entity('coaches')
export class Coach extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ name: 'date_of_birth', nullable: true })
  dateOfBirth: Date;

  @Column({ nullable: true })
  nationality: string;
}
