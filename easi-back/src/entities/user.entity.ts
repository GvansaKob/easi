import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, OneToMany } from 'typeorm';
import { Favori } from './favori.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nom: string;

  @Column()
  prenom: string;

  @Column({ unique: true })
  email: string;

  @Column()
  mot_de_passe: string;

  @Column({ type: 'date' })
  date_de_naissance: Date;

  @Column({ nullable: true })
  statut: string;

  @Column({ default: false })
  profil_complet: boolean;

  @CreateDateColumn()
  createdAt: Date;

  @Column({ nullable: true })
  image: string;

  @OneToMany(() => Favori, favori => favori.user)
  favoris: Favori[];

}
