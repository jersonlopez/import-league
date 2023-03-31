import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable, BaseEntity } from 'typeorm';
import { Team } from './Team';

@Entity('competitions')
export class Competition extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({unique: true})
  code: string;

  @Column({ name: 'area_name' })
  areaName: string;


  @ManyToMany(() => Team, (team) => team.competition)
  @JoinTable({ name: 'competitions_teams' })
  teams: Team[];
}
