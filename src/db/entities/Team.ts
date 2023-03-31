import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, OneToOne, ManyToMany, OneToMany, JoinColumn } from 'typeorm';
import { Coach } from './Coach';
import { Competition } from './Competition';
import { Player } from './Player';

@Entity('teams')
export class Team extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  tla: string;

  @Column({ name: 'short_name' })
  shortName: string;

  @Column({ name: 'area_name' })
  areaName: string;

  @Column()
  address: string;

  @OneToMany(() => Player, (player) => player.team)
  players: Player[];

  @OneToOne(() => Coach, {
    cascade: true,
  })
  @JoinColumn({name: 'coach'})
  coach: Coach;

  @ManyToMany(() => Competition, (competition) => competition.teams, {
    cascade: true,
  })
  competition: Competition[];
}
