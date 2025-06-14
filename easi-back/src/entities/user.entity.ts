import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from 'typeorm';

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

  @Column()
  statut: string;

  @Column({ default: false })
  profil_complet: boolean;

  @CreateDateColumn()
  createdAt: Date;

  @Column({ nullable: true })
  image: string;

}
