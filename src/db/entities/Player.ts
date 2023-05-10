import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, ManyToOne, JoinColumn } from 'typeorm';
import { Team } from './Team';

@Entity('players')
export class Player extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  position: string;

  @Column({ name: 'date_of_birth' })
  dateOfBirth: Date;

  @Column()
  nationality: string;

  @ManyToOne(() => Team, (team) => team.players)
  @JoinColumn({name: 'team'})
  team: Team;
}
