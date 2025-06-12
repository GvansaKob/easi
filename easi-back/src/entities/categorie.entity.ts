import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Aide } from './aide.entity';

@Entity()
export class Categorie {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nom: string;

  @OneToMany(() => Aide, (aide) => aide.categorie)
  aides: Aide[];
}
